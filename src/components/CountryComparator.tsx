import React, { useState } from 'react';
import { Country } from '../types';
import { CheckCircle2, XCircle, DollarSign, Clock, ShieldCheck, GraduationCap, ArrowRight } from 'lucide-react';

interface CountryComparatorProps {
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

export const CountryComparator: React.FC<CountryComparatorProps> = ({ countries, onSelectCountry }) => {
  const [country1Code, setCountry1Code] = useState<string>(countries[0]?.code || 'ESP');
  const [country2Code, setCountry2Code] = useState<string>(countries[1]?.code || 'DEU');

  const country1 = countries.find((c) => c.code === country1Code) || countries[0];
  const country2 = countries.find((c) => c.code === country2Code) || countries[1];

  return (
    <div className="comparator-view animate-fade-in">
      <div className="comparator-header">
        <h2 className="comparator-title">Comparador de Destinos</h2>
        <p className="comparator-subtitle">
          Contrasta requerimientos migratorios, costos reales de vida y exigencias académicas lado a lado con precisión.
        </p>
      </div>

      <div className="comparator-selector-bar">
        <div>
          <label style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--label-tertiary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
            Destino 1
          </label>
          <select
            className="country-select-dropdown"
            value={country1Code}
            onChange={(e) => setCountry1Code(e.target.value)}
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flagEmoji} {c.name} ({c.region})
              </option>
            ))}
          </select>
        </div>

        <div style={{ alignSelf: 'flex-end', paddingBottom: '0.5rem', fontWeight: 800, color: 'var(--apple-blue)', fontSize: '1.1rem' }}>
          VS
        </div>

        <div>
          <label style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--label-tertiary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
            Destino 2
          </label>
          <select
            className="country-select-dropdown"
            value={country2Code}
            onChange={(e) => setCountry2Code(e.target.value)}
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flagEmoji} {c.name} ({c.region})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="comparison-grid">
        {[country1, country2].map((country) => (
          <div key={country.code} className="comparison-card">
            {/* Real Flag Header Banner */}
            <div className="catalog-card-flag-banner" style={{ borderRadius: 'var(--radius-lg)' }}>
              <img
                src={ISO3_TO_FLAG[country.code] || ''}
                alt={`Bandera de ${country.name}`}
                className="catalog-card-flag-img"
              />
              <div className="catalog-card-flag-overlay"></div>
              <div style={{ position: 'absolute', bottom: '12px', left: '16px', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.8rem' }}>{country.flagEmoji}</span>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff' }}>{country.name}</h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--apple-cyan)', fontWeight: 600 }}>{country.region} • Capital: {country.capital}</span>
                </div>
              </div>
              <button
                className="btn-primary"
                style={{ position: 'absolute', top: '12px', right: '12px', padding: '0.42rem 0.85rem', fontSize: '0.78rem' }}
                onClick={() => onSelectCountry(country)}
              >
                <span>Ficha</span>
                <ArrowRight size={13} />
              </button>
            </div>

            {/* Academic Comparison */}
            <div className="info-card">
              <div className="info-card-header">
                <GraduationCap size={16} />
                <h4>Académico & Idiomas</h4>
              </div>
              <ul className="requirements-list">
                <li>
                  <span style={{ color: 'var(--label-tertiary)', width: '130px', flexShrink: 0, fontWeight: 500 }}>Promedio Mínimo:</span>
                  <strong>{country.academic.minGpa} / 10</strong>
                </li>
                <li>
                  <span style={{ color: 'var(--label-tertiary)', width: '130px', flexShrink: 0, fontWeight: 500 }}>Créditos Req.:</span>
                  <span>{country.academic.minCompletedCreditsPercent}% cursados</span>
                </li>
                <li>
                  <span style={{ color: 'var(--label-tertiary)', width: '130px', flexShrink: 0, fontWeight: 500 }}>Idiomas:</span>
                  <span>{country.academic.languages.map((l) => `${l.language} (${l.level})`).join(', ')}</span>
                </li>
              </ul>
            </div>

            {/* Visa Comparison */}
            <div className="info-card">
              <div className="info-card-header">
                <ShieldCheck size={16} />
                <h4>Visa & Permisos</h4>
              </div>
              <ul className="requirements-list">
                <li>
                  <span style={{ color: 'var(--label-tertiary)', width: '130px', flexShrink: 0, fontWeight: 500 }}>Tipo de Visa:</span>
                  <span>{country.visa.visaType}</span>
                </li>
                <li>
                  <span style={{ color: 'var(--label-tertiary)', width: '130px', flexShrink: 0, fontWeight: 500 }}>Dificultad:</span>
                  <strong style={{
                    color: country.visa.difficulty === 'Fácil' ? 'var(--apple-green)' :
                           country.visa.difficulty === 'Moderado' ? 'var(--apple-orange)' : 'var(--apple-red)'
                  }}>
                    {country.visa.difficulty}
                  </strong>
                </li>
                <li>
                  <span style={{ color: 'var(--label-tertiary)', width: '130px', flexShrink: 0, fontWeight: 500 }}>Permiso de Trabajo:</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    {country.visa.workPermitAllowed ? (
                      <>
                        <CheckCircle2 size={14} style={{ color: 'var(--apple-green)' }} />
                        <span>Sí ({country.visa.workHoursPerWeek}h/semana)</span>
                      </>
                    ) : (
                      <>
                        <XCircle size={14} style={{ color: 'var(--apple-red)' }} />
                        <span>No Autorizado</span>
                      </>
                    )}
                  </span>
                </li>
                <li>
                  <span style={{ color: 'var(--label-tertiary)', width: '130px', flexShrink: 0, fontWeight: 500 }}>Tiempo Trámite:</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={13} />
                    <span>{country.visa.processingTimeWeeks}</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Cost Comparison */}
            <div className="info-card">
              <div className="info-card-header">
                <DollarSign size={16} />
                <h4>Costo Estimado Mensual</h4>
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--apple-green)', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
                ~${country.cost.averageMonthlyTotalUsd} USD / mes
              </div>
              <div className="cost-breakdown-grid" style={{ fontSize: '0.8rem' }}>
                <div className="cost-item">
                  <div className="cost-item-label">Alojamiento</div>
                  <div className="cost-item-val" style={{ fontSize: '0.9rem' }}>${country.cost.breakdown.housingUsd} USD</div>
                </div>
                <div className="cost-item">
                  <div className="cost-item-label">Alimentos</div>
                  <div className="cost-item-val" style={{ fontSize: '0.9rem' }}>${country.cost.breakdown.foodUsd} USD</div>
                </div>
              </div>
              <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--label-secondary)' }}>
                <strong>Solvencia para visa:</strong> ${country.visa.monthlyProofOfFundsUsd} USD/mes
              </div>
            </div>

            {/* Universities */}
            <div className="info-card">
              <div className="info-card-header">
                <GraduationCap size={16} />
                <h4>Universidades Asociadas ({country.universities.length})</h4>
              </div>
              <ul className="requirements-list">
                {country.universities.map((u) => (
                  <li key={u.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>• {u.name} ({u.city})</span>
                    {u.worldRank && <span style={{ color: 'var(--apple-orange)', fontSize: '0.74rem', fontWeight: 600 }}>QS #{u.worldRank}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
