import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, useMap, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import { Country, University } from '../types';
import { Sparkles, ArrowLeft, GraduationCap, MapPin, ExternalLink, Star } from 'lucide-react';
import countriesGeoData from '../data/countriesGeo.json';
import statesGeoData from '../data/statesGeo.json';
import { COUNTRIES_DATA } from '../data/countriesData';

interface InteractiveMapProps {
  countries: Country[];
  selectedCountry: Country | null;
  onSelectCountry: (c: Country | null) => void;
  theme: 'dark' | 'light';
}

// ISO 3 to Flagcdn URLs (High Definition Flags)
const ISO3_TO_FLAG: Record<string, string> = {
  ESP: 'https://flagcdn.com/w640/es.png',
  DEU: 'https://flagcdn.com/w640/de.png',
  USA: 'https://flagcdn.com/w640/us.png',
  CAN: 'https://flagcdn.com/w640/ca.png',
  JPN: 'https://flagcdn.com/w640/jp.png',
  KOR: 'https://flagcdn.com/w640/kr.png',
  FRA: 'https://flagcdn.com/w640/fr.png',
  AUS: 'https://flagcdn.com/w640/au.png',
  CHL: 'https://flagcdn.com/w640/cl.png',
  MEX: 'https://flagcdn.com/w640/mx.png',
  GBR: 'https://flagcdn.com/w640/gb.png',
};

// Geographic bounds [ [south, west], [north, east] ] calibrated with Natural Earth 50m precision
const COUNTRY_GEO_BOUNDS: Record<string, [[number, number], [number, number]]> = {
  AUS: [[-43.62, 112.91], [-10.05, 153.62]],
  CAN: [[41.67, -141.00], [70.00, -52.65]],
  CHL: [[-55.89, -78.99], [-17.51, -66.44]],
  DEU: [[47.28, 5.86], [55.06, 15.02]],
  ESP: [[36.03, -9.24], [43.76, 3.31]],
  FRA: [[42.34, -4.76], [51.10, 8.14]],
  GBR: [[50.02, -8.14], [60.83, 1.75]],
  JPN: [[24.27, 123.68], [45.51, 145.83]],
  KOR: [[33.20, 126.01], [38.62, 130.93]],
  MEX: [[14.55, -118.40], [32.72, -86.70]],
  USA: [[25.13, -124.71], [49.37, -66.99]]
};

// Focus camera smoothly when country is selected or deselected
const MapNavigationController: React.FC<{
  selectedCountry: Country | null;
  onAnimationStep?: () => void;
}> = ({ selectedCountry, onAnimationStep }) => {
  const map = useMap();
  const prevCountryRef = useRef<string | null>(null);

  useEffect(() => {
    const currentCode = selectedCountry?.code || null;
    if (currentCode === prevCountryRef.current) return;
    prevCountryRef.current = currentCode;

    if (selectedCountry) {
      const bounds = COUNTRY_GEO_BOUNDS[selectedCountry.code];
      if (bounds) {
        map.flyToBounds(
          [
            [bounds[0][0], bounds[0][1]],
            [bounds[1][0], bounds[1][1]]
          ],
          {
            padding: [50, 50],
            duration: 1.4,
            easeLinearity: 0.25
          }
        );
      } else {
        map.flyTo(selectedCountry.coordinates, 5, { duration: 1.4 });
      }
    } else {
      // Zoom out to whole world
      map.flyTo([20, 0], 3, { duration: 1.2 });
    }
  }, [selectedCountry, map]);

  useEffect(() => {
    if (!onAnimationStep) return;
    // Keep flag textures synchronized during fly animations
    map.on('move', onAnimationStep);
    map.on('zoom', onAnimationStep);
    return () => {
      map.off('move', onAnimationStep);
      map.off('zoom', onAnimationStep);
    };
  }, [map, onAnimationStep]);

  return null;
};

// Automatically fits the world map to fill 100% of user screen width & height with dynamic minZoom
const ResponsiveWorldViewFit: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    const adjustFit = () => {
      const size = map.getSize();
      const requiredZoomX = Math.log2(size.x / 256);
      const requiredZoomY = Math.log2(size.y / 256);
      const idealZoom = Math.max(requiredZoomX, requiredZoomY, 1.8);

      map.setMinZoom(idealZoom);
      map.setMaxBounds(L.latLngBounds(L.latLng(-85, -180), L.latLng(85, 180)));
      
      if (map.getZoom() < idealZoom) {
        map.setZoom(idealZoom);
      }
    };

    adjustFit();
    map.on('resize', adjustFit);
    return () => {
      map.off('resize', adjustFit);
    };
  }, [map]);

  return null;
};

// Dynamically updates SVG pattern bounding box in map pixels to keep flag projection pinned geographically
const MapAlignedSVGPatternManager: React.FC<{ onRegisterTrigger?: (fn: () => void) => void }> = ({ onRegisterTrigger }) => {
  const map = useMap();

  const updatePatterns = useCallback(() => {
    const container = map.getContainer();
    const svg = container.querySelector('svg.leaflet-zoom-animated') || container.querySelector('svg');
    if (!svg) return;

    let defs = svg.querySelector('defs');
    if (!defs) {
      defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      svg.insertBefore(defs, svg.firstChild);
    }

    COUNTRIES_DATA.forEach((country) => {
      const bounds = COUNTRY_GEO_BOUNDS[country.code];
      if (!bounds) return;

      const southWest = L.latLng(bounds[0][0], bounds[0][1]);
      const northEast = L.latLng(bounds[1][0], bounds[1][1]);

      // Calculate exact pixel coordinates in Leaflet layer point system
      const nwPoint = map.latLngToLayerPoint(L.latLng(northEast.lat, southWest.lng));
      const sePoint = map.latLngToLayerPoint(L.latLng(southWest.lat, northEast.lng));

      const x = nwPoint.x;
      const y = nwPoint.y;
      const width = Math.max(1, sePoint.x - nwPoint.x);
      const height = Math.max(1, sePoint.y - nwPoint.y);

      const patternId = `flag-pattern-${country.code}`;
      let pattern = defs.querySelector(`#${patternId}`);
      let image: SVGImageElement | null = null;

      if (!pattern) {
        pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
        pattern.setAttribute('id', patternId);
        pattern.setAttribute('patternUnits', 'userSpaceOnUse');

        image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', ISO3_TO_FLAG[country.code] || '');
        image.setAttribute('href', ISO3_TO_FLAG[country.code] || '');
        image.setAttribute('preserveAspectRatio', 'none');

        pattern.appendChild(image);
        defs.appendChild(pattern);
      } else {
        image = pattern.querySelector('image');
      }

      pattern.setAttribute('x', x.toString());
      pattern.setAttribute('y', y.toString());
      pattern.setAttribute('width', width.toString());
      pattern.setAttribute('height', height.toString());

      if (image) {
        image.setAttribute('x', '0');
        image.setAttribute('y', '0');
        image.setAttribute('width', width.toString());
        image.setAttribute('height', height.toString());
      }
    });
  }, [map]);

  useEffect(() => {
    if (onRegisterTrigger) {
      onRegisterTrigger(updatePatterns);
    }
    updatePatterns();

    // Attach to all map navigation and animation events
    map.on('zoom', updatePatterns);
    map.on('zoomend', updatePatterns);
    map.on('move', updatePatterns);
    map.on('moveend', updatePatterns);
    map.on('viewreset', updatePatterns);
    map.on('resize', updatePatterns);

    return () => {
      map.off('zoom', updatePatterns);
      map.off('zoomend', updatePatterns);
      map.off('move', updatePatterns);
      map.off('moveend', updatePatterns);
      map.off('viewreset', updatePatterns);
      map.off('resize', updatePatterns);
    };
  }, [map, updatePatterns, onRegisterTrigger]);

  return null;
};

// Apple-style custom marker icon for universities
const createUniMarkerIcon = (uni: University, isSelected: boolean) => {
  return L.divIcon({
    className: 'custom-pin-container',
    html: `
      <div class="apple-uni-marker ${isSelected ? 'selected' : ''}">
        <div class="uni-marker-badge">
          <span class="uni-icon-cap">🎓</span>
          ${uni.worldRank ? `<span class="uni-rank-micro">#${uni.worldRank}</span>` : ''}
        </div>
        <div class="uni-marker-pointer"></div>
      </div>
    `,
    iconSize: [36, 42],
    iconAnchor: [18, 42],
    popupAnchor: [0, -42]
  });
};

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  countries,
  selectedCountry,
  onSelectCountry,
  theme
}) => {
  const [mounted, setMounted] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<Country | null>(null);
  const [hoveredState, setHoveredState] = useState<{ name: string; countryCode: string } | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const patternTriggerRef = useRef<() => void>(() => {});

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset state selection when country changes
  useEffect(() => {
    setSelectedState(null);
    setSelectedUniversity(null);
  }, [selectedCountry]);

  // Map country by ISO code for fast filter lookup
  const filteredCountriesMap = useMemo(() => {
    const map = new Map<string, Country>();
    countries.forEach((c) => map.set(c.code, c));
    return map;
  }, [countries]);

  // Countries filter signature for GeoJSON key
  const filterKey = useMemo(() => {
    return countries.map((c) => c.code).sort().join('-');
  }, [countries]);

  // Filter states GeoJSON for the currently selected country
  const currentCountryStatesGeo = useMemo(() => {
    if (!selectedCountry) return null;
    const states = (statesGeoData as any).features.filter(
      (feat: any) => feat.properties.countryCode === selectedCountry.code
    );
    return {
      type: 'FeatureCollection',
      features: states
    };
  }, [selectedCountry]);

  // Universities to display: ONLY when a state is clicked
  const visibleUniversities = useMemo(() => {
    if (!selectedCountry || !selectedState) return [];

    const stateLower = selectedState.toLowerCase();
    const filtered = selectedCountry.universities.filter(
      (u) => (u.state && u.state.toLowerCase() === stateLower) ||
             (u.city && u.city.toLowerCase() === stateLower) ||
             (u.name && u.name.toLowerCase().includes(stateLower))
    );
    return filtered;
  }, [selectedCountry, selectedState]);

  if (!mounted) return null;

  // Carto basemaps: Apple-like dark/light tiles
  const tileUrl = theme === 'dark' 
    ? 'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

  // GeoJSON style for countries
  const styleCountryFeature = (feature: any) => {
    const code = feature?.id;
    const country = filteredCountriesMap.get(code);
    const isAvailable = Boolean(country);
    const isSelected = selectedCountry?.code === code;
    const isHovered = hoveredCountry?.code === code;

    // Filtered out / unavailable countries
    if (!isAvailable) {
      return {
        fillColor: theme === 'dark' ? '#141724' : '#e2e8f0',
        weight: 0.8,
        opacity: 0.35,
        color: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.06)',
        fillOpacity: 0.25,
        className: 'country-polygon disabled'
      };
    }

    // When a country is selected, it becomes transparent so its state subdivisions are clearly visible
    if (isSelected) {
      return {
        fillColor: 'transparent',
        fillOpacity: 0,
        weight: 2.2,
        opacity: 0.9,
        color: '#0077ed',
        className: 'country-polygon selected-boundary'
      };
    }

    // In world view, hovered country projects its high-resolution flag
    if (isHovered && !selectedCountry) {
      return {
        fillColor: `url(#flag-pattern-${code})`,
        fillOpacity: 1,
        weight: 2,
        opacity: 1,
        color: '#ffffff',
        className: 'country-polygon-flag-filled'
      };
    }

    // Default resting state for active destination in world view
    return {
      fillColor: theme === 'dark' ? '#0077ed' : '#0071e3',
      weight: 1.2,
      opacity: 0.85,
      color: theme === 'dark' ? 'rgba(41, 182, 246, 0.6)' : 'rgba(0, 113, 227, 0.5)',
      fillOpacity: theme === 'dark' ? 0.28 : 0.2,
      className: 'country-polygon available'
    };
  };

  const onEachCountryFeature = (feature: any, layer: L.Layer) => {
    const code = feature?.id;
    const country = filteredCountriesMap.get(code);

    if (country) {
      layer.on({
        mouseover: (e: L.LeafletMouseEvent) => {
          if (selectedCountry) return; // In country drill-down, hover is on states
          setHoveredCountry(country);
          setMousePos({ x: e.originalEvent.clientX, y: e.originalEvent.clientY });
          const target = e.target;
          target.setStyle({
            fillColor: `url(#flag-pattern-${code})`,
            fillOpacity: 1,
            weight: 2.5,
            color: '#ffffff'
          });
          if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            target.bringToFront();
          }
        },
        mousemove: (e: L.LeafletMouseEvent) => {
          if (!selectedCountry) {
            setMousePos({ x: e.originalEvent.clientX, y: e.originalEvent.clientY });
          }
        },
        mouseout: (e: L.LeafletMouseEvent) => {
          if (selectedCountry) return;
          setHoveredCountry(null);
          const target = e.target;
          target.setStyle({
            fillColor: theme === 'dark' ? '#0077ed' : '#0071e3',
            weight: 1.2,
            opacity: 0.85,
            color: theme === 'dark' ? 'rgba(41, 182, 246, 0.6)' : 'rgba(0, 113, 227, 0.5)',
            fillOpacity: theme === 'dark' ? 0.28 : 0.2
          });
        },
        click: () => {
          if (selectedCountry?.code === country.code) return;
          setHoveredCountry(null);
          setSelectedState(null);
          setSelectedUniversity(null);
          onSelectCountry(country);
        }
      });
    }
  };

  // State / Province polygon styling
  const styleStateFeature = (feature: any) => {
    const stateName = feature?.properties?.name;
    const isStateSelected = selectedState === stateName;
    const isStateHovered = hoveredState?.name === stateName;

    if (isStateSelected) {
      return {
        fillColor: '#0077ed',
        fillOpacity: 0.5,
        weight: 2.5,
        color: '#ffffff',
        className: 'state-polygon selected'
      };
    }

    if (isStateHovered) {
      return {
        fillColor: '#29b6f6',
        fillOpacity: 0.42,
        weight: 2,
        color: '#ffffff',
        className: 'state-polygon hovered'
      };
    }

    return {
      fillColor: theme === 'dark' ? '#ffffff' : '#0071e3',
      fillOpacity: 0.08,
      weight: 1.2,
      opacity: 0.6,
      color: theme === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 113, 227, 0.4)',
      className: 'state-polygon'
    };
  };

  const onEachStateFeature = (feature: any, layer: L.Layer) => {
    const stateName = feature?.properties?.name;
    const countryCode = feature?.properties?.countryCode;

    layer.on({
      mouseover: (e: L.LeafletMouseEvent) => {
        setHoveredState({ name: stateName, countryCode });
        setMousePos({ x: e.originalEvent.clientX, y: e.originalEvent.clientY });
        const target = e.target;
        target.setStyle({
          fillColor: '#29b6f6',
          fillOpacity: 0.42,
          weight: 2,
          color: '#ffffff'
        });
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
          target.bringToFront();
        }
      },
      mousemove: (e: L.LeafletMouseEvent) => {
        setMousePos({ x: e.originalEvent.clientX, y: e.originalEvent.clientY });
      },
      mouseout: (e: L.LeafletMouseEvent) => {
        setHoveredState(null);
        const target = e.target;
        const isSelected = selectedState === stateName;
        target.setStyle(
          isSelected
            ? {
                fillColor: '#0077ed',
                fillOpacity: 0.5,
                weight: 2.5,
                color: '#ffffff'
              }
            : {
                fillColor: theme === 'dark' ? '#ffffff' : '#0071e3',
                fillOpacity: 0.08,
                weight: 1.2,
                opacity: 0.6,
                color: theme === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 113, 227, 0.4)'
              }
        );
      },
      click: () => {
        setSelectedState((prev) => (prev === stateName ? null : stateName));
        setSelectedUniversity(null);
      }
    });
  };

  // World bounds to prevent infinite horizontal scrolling / repetition
  const worldBounds = L.latLngBounds(L.latLng(-85, -180), L.latLng(85, 180));

  return (
    <div className="map-viewport-container">
      <MapContainer
        center={[20, 0]}
        zoom={3}
        minZoom={2.4}
        maxZoom={12}
        maxBounds={worldBounds}
        maxBoundsViscosity={1.0}
        worldCopyJump={false}
        zoomControl={false}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%' }}
      >
        <ZoomControl position="bottomleft" />

        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url={tileUrl}
          noWrap={true}
          bounds={worldBounds}
        />

        <MapNavigationController
          selectedCountry={selectedCountry}
          onAnimationStep={() => patternTriggerRef.current()}
        />
        <ResponsiveWorldViewFit />
        <MapAlignedSVGPatternManager onRegisterTrigger={(fn) => { patternTriggerRef.current = fn; }} />

        {/* Global Country Polygons */}
        <GeoJSON
          key={`geojson-${theme}-${filterKey}-${selectedCountry?.code || 'none'}-${hoveredCountry?.code || 'none'}`}
          data={countriesGeoData as any}
          style={styleCountryFeature}
          onEachFeature={onEachCountryFeature}
        />

        {/* State / Province Division Polygons for Selected Country */}
        {selectedCountry && currentCountryStatesGeo && (
          <GeoJSON
            key={`states-${selectedCountry.code}-${selectedState || 'none'}-${hoveredState?.name || 'none'}`}
            data={currentCountryStatesGeo as any}
            style={styleStateFeature}
            onEachFeature={onEachStateFeature}
          />
        )}

        {/* University Markers */}
        {selectedCountry && visibleUniversities.map((uni) => (
          <Marker
            key={uni.id}
            position={uni.coordinates}
            icon={createUniMarkerIcon(uni, selectedUniversity?.id === uni.id)}
            eventHandlers={{
              click: () => {
                setSelectedUniversity(uni);
              }
            }}
          />
        ))}
      </MapContainer>

      {/* Country Level Breadcrumb / Back Button */}
      {selectedCountry && (
        <div className="map-country-breadcrumb animate-scale-up">
          <button
            className="breadcrumb-back-btn"
            onClick={() => onSelectCountry(null)}
            title="Volver al mapa mundial"
          >
            <ArrowLeft size={15} />
            <span>Volver al Mundo</span>
          </button>
          <div className="breadcrumb-divider"></div>
          <span className="breadcrumb-flag">{selectedCountry.flagEmoji}</span>
          <span className="breadcrumb-name">{selectedCountry.name}</span>
          {selectedState && (
            <>
              <span style={{ color: 'var(--label-tertiary)' }}>/</span>
              <span className="breadcrumb-state-pill">{selectedState}</span>
            </>
          )}
        </div>
      )}

      {/* Floating Apple Mini Info Capsule on Country Hover */}
      {hoveredCountry && !selectedCountry && (
        <div
          className="apple-country-hover-pill animate-scale-up"
          style={{
            top: `${Math.min(window.innerHeight - 80, Math.max(80, mousePos.y - 65))}px`,
            left: `${Math.min(window.innerWidth - 240, Math.max(30, mousePos.x + 20))}px`,
          }}
        >
          <span className="hover-pill-flag">{hoveredCountry.flagEmoji}</span>
          <div className="hover-pill-info">
            <strong className="hover-pill-name">{hoveredCountry.name}</strong>
            <span className="hover-pill-meta">
              GPA {hoveredCountry.academic.minGpa} • ${hoveredCountry.cost.averageMonthlyTotalUsd} USD
            </span>
          </div>
        </div>
      )}

      {/* Floating Mini Capsule on State Hover */}
      {hoveredState && selectedCountry && !selectedUniversity && (
        <div
          className="apple-state-hover-pill animate-scale-up"
          style={{
            top: `${Math.min(window.innerHeight - 80, Math.max(80, mousePos.y - 65))}px`,
            left: `${Math.min(window.innerWidth - 240, Math.max(30, mousePos.x + 20))}px`,
          }}
        >
          <MapPin size={14} style={{ color: 'var(--apple-cyan)' }} />
          <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--label-primary)' }}>
            {hoveredState.name}
          </span>
        </div>
      )}

      {/* University Apple VisionOS Modal / Detail Card */}
      {selectedUniversity && (
        <div className="uni-floating-detail-card animate-scale-up">
          <div className="uni-detail-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div className="uni-detail-icon">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="uni-detail-title">{selectedUniversity.name}</h3>
                <span className="uni-detail-location">
                  <MapPin size={12} /> {selectedUniversity.city}
                  {selectedUniversity.state ? `, ${selectedUniversity.state}` : ''} • {selectedCountry?.name}
                </span>
              </div>
            </div>
            <button
              className="uni-detail-close-btn"
              onClick={() => setSelectedUniversity(null)}
            >
              ✕
            </button>
          </div>

          <p className="uni-detail-description">
            {selectedUniversity.description ||
              `Universidad de prestigio internacional con convenios directos para intercambio estudiantil y convalidación de créditos académicos.`}
          </p>

          <div className="uni-detail-metrics-grid">
            {selectedUniversity.worldRank && (
              <div className="uni-metric-item">
                <span className="m-label">Ranking Mundial</span>
                <strong className="m-val" style={{ color: 'var(--apple-blue)' }}>QS #{selectedUniversity.worldRank}</strong>
              </div>
            )}
            <div className="uni-metric-item">
              <span className="m-label">Campus Life</span>
              <strong className="m-val" style={{ color: 'var(--apple-orange)', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <Star size={13} fill="currentColor" /> {selectedUniversity.campusLifeRating}/5
              </strong>
            </div>
            <div className="uni-metric-item">
              <span className="m-label">Matrícula</span>
              <strong className="m-val" style={{ color: 'var(--apple-green)' }}>
                {selectedUniversity.estimatedTuitionSemesterUsd === 0 ? 'Exención 100%' : `$${selectedUniversity.estimatedTuitionSemesterUsd}`}
              </strong>
            </div>
          </div>

          <div className="uni-detail-programs">
            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--label-tertiary)', textTransform: 'uppercase' }}>
              Programas Destacados
            </span>
            <div className="uni-program-tags">
              {selectedUniversity.featuredPrograms.map((prog, idx) => (
                <span key={idx} className="uni-program-tag">{prog}</span>
              ))}
            </div>
          </div>

          <div className="uni-detail-agreements">
            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--label-tertiary)', textTransform: 'uppercase' }}>
              Convenios Activos
            </span>
            <div className="uni-agreement-tags">
              {selectedUniversity.partnerAgreements.map((agr, idx) => (
                <span key={idx} className="uni-agreement-tag">{agr}</span>
              ))}
            </div>
          </div>

          <div className="uni-detail-actions">
            <a
              href={selectedUniversity.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', padding: '0.65rem' }}
            >
              <span>Sitio Web Oficial</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      )}

      {/* Floating Map Helper/Status Banner */}
      <div className="map-overlay-status">
        <Sparkles size={13} style={{ color: 'var(--apple-cyan)' }} />
        <span>
          {!selectedCountry
            ? 'Haz clic en un país para explorar sus estados y universidades'
            : selectedState
            ? `Filtrando por ${selectedState} • Selecciona un pin de universidad`
            : 'Haz clic en un estado o en un pin de universidad para ver detalles'}
        </span>
      </div>
    </div>
  );
};
