import React from 'react';
import { Country } from '../types';
import { ArrowRight, GraduationCap, DollarSign, Building2 } from 'lucide-react';

interface CountryListViewProps {
  countries: Country[];
  onSelectCountry: (c: Country) => void;
}

const ISO3_TO_FLAG: Record<string, string> = {
  ESP: 'https://flagcdn.com/w320/es.png',
  DEU: 'https://flagcdn.com/w320/de.png',
  USA: 'https://flagcdn.com/w320/us.png',
  CAN: 'https://flagcdn.com/w320/ca.png',
  JPN: 'https://flagcdn.com/w320/jp.png',
  KOR: 'https://flagcdn.com/w320/kr.png',
  FRA: 'https://flagcdn.com/w320/fr.png',
  AUS: 'https://flagcdn.com/w320/au.png',
  CHL: 'https://flagcdn.com/w320/cl.png',
  MEX: 'https://flagcdn.com/w320/mx.png',
  GBR: 'https://flagcdn.com/w320/gb.png',
};

export const CountryListView: React.FC<CountryListViewProps> = ({ countries, onSelectCountry }) => {
  return (
    <div className="list-view animate-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.035em', color: 'var(--label-primary)' }}>
          Catálogo de Destinos
        </h2>
        <p style={{ color: 'var(--label-secondary)', marginTop: '0.4rem', fontSize: '0.95rem' }}>
          Explora los acuerdos internacionales, opciones de visado y costos para tu estadía de intercambio.
        </p>
      </div>

      <div className="country-grid-cards">
        {countries.map((country) => (
          <div
            key={country.code}
            className="country-card-item"
            onClick={() => onSelectCountry(country)}
          >
            {/* Real Flag Header Banner */}
            <div className="catalog-card-flag-banner">
              <img
                src={ISO3_TO_FLAG[country.code] || ''}
                alt={`Bandera de ${country.name}`}
                className="catalog-card-flag-img"
              />
              <div className="catalog-card-flag-overlay"></div>
              <span
                className="catalog-card-visa-badge"
                style={{
                  background: country.visa.difficulty === 'Fácil' ? 'var(--apple-green-bg)' :
                              country.visa.difficulty === 'Moderado' ? 'var(--apple-orange-bg)' : 'var(--apple-red-bg)',
                  color: country.visa.difficulty === 'Fácil' ? 'var(--apple-green)' :
                         country.visa.difficulty === 'Moderado' ? 'var(--apple-orange)' : 'var(--apple-red)',
                }}
              >
                Visa {country.visa.difficulty}
              </span>
            </div>

            <div className="catalog-card-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontSize: '1.6rem' }}>{country.flagEmoji}</span>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 750, letterSpacing: '-0.02em', color: 'var(--label-primary)' }}>{country.name}</h3>
                    <span style={{ fontSize: '0.76rem', color: 'var(--label-tertiary)' }}>{country.region} • {country.capital}</span>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.84rem', color: 'var(--label-secondary)', lineHeight: 1.55, lineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1rem' }}>
                {country.summary}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.55rem', marginBottom: '1rem' }}>
                <div className="stat-pill">
                  <div className="stat-pill-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
                    <GraduationCap size={12} />
                    Promedio Mín.
                  </div>
                  <div className="stat-pill-value" style={{ fontSize: '0.88rem' }}>{country.academic.minGpa} / 10</div>
                </div>

                <div className="stat-pill">
                  <div className="stat-pill-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
                    <DollarSign size={12} />
                    Costo Mensual
                  </div>
                  <div className="stat-pill-value" style={{ fontSize: '0.88rem' }}>${country.cost.averageMonthlyTotalUsd} USD</div>
                </div>
              </div>

              <div style={{ fontSize: '0.78rem', color: 'var(--label-tertiary)' }}>
                <strong style={{ color: 'var(--label-secondary)' }}>Idiomas:</strong> {country.academic.languages.map((l) => l.language).join(', ')}
              </div>
            </div>

            <div style={{ marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.76rem', color: 'var(--label-tertiary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Building2 size={13} /> {country.universities.length} Universidades aliadas
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: 'var(--apple-blue)', fontWeight: 650 }}>
                Ver requisitos <ArrowRight size={13} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
