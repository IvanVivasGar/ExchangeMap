import React, { useState } from 'react';
import { Country } from '../types';
import { 
  X, 
  GraduationCap, 
  FileText, 
  Building2, 
  DollarSign, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Briefcase, 
  ShieldCheck, 
  BookOpen,
  Sparkles,
  Info,
  ChevronRight,
  TrendingUp,
  MapPin
} from 'lucide-react';

interface CountryDrawerProps {
  country: Country | null;
  onClose: () => void;
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

type TabType = 'overview' | 'academic' | 'visa' | 'universities' | 'cost';

export const CountryDrawer: React.FC<CountryDrawerProps> = ({ country, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  if (!country) return null;

  return (
    <aside className={`country-drawer ${country ? 'open' : ''}`}>
      {/* Header with hero flag backdrop */}
      <div className="drawer-header" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="drawer-flag-banner">
          <img
            src={ISO3_TO_FLAG[country.code] || ''}
            alt={`Bandera de ${country.name}`}
            className="drawer-flag-img"
          />
          <div className="drawer-flag-overlay"></div>
          <button className="drawer-close-btn" onClick={onClose} id="btn-close-drawer" title="Cerrar panel">
            <X size={16} />
          </button>
        </div>

        <div className="drawer-header-content" style={{ padding: '0 1.4rem 1.1rem', marginTop: '-20px', position: 'relative', zIndex: 2 }}>
          <div className="drawer-header-top">
            <div className="country-title-group">
              <div className="country-flag-container">
                <span>{country.flagEmoji}</span>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <h2 className="country-title">{country.name}</h2>
                  <span className="country-code-pill">{country.code}</span>
                </div>
                <div className="country-subtitle-row">
                  <span className="country-region-badge">{country.region}</span>
                  <span style={{ color: 'var(--label-tertiary)' }}>•</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--label-secondary)' }}>Capital: {country.capital}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="drawer-quick-stats">
            <div className="stat-pill">
              <div className="stat-pill-label">Promedio Mín</div>
              <div className="stat-pill-value">{country.academic.minGpa} / 10</div>
              <div className="stat-pill-sub">{country.academic.gpaScale}</div>
            </div>
            <div className="stat-pill">
              <div className="stat-pill-label">Costo Mensual</div>
              <div className="stat-pill-value">${country.cost.averageMonthlyTotalUsd}</div>
              <div className="stat-pill-sub">{country.cost.currencySymbol} {country.cost.currency.split(' ')[0]}</div>
            </div>
            <div className="stat-pill">
              <div className="stat-pill-label">Visa</div>
              <div className="stat-pill-value" style={{
                color: country.visa.difficulty === 'Fácil' ? 'var(--apple-green)' :
                       country.visa.difficulty === 'Moderado' ? 'var(--apple-orange)' : 'var(--apple-red)'
              }}>
                {country.visa.difficulty}
              </div>
              <div className="stat-pill-sub">{country.visa.processingTimeWeeks}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Tabs Navigation */}
      <div className="drawer-tabs">
        <button
          className={`drawer-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <BookOpen size={13} />
          <span>Resumen</span>
        </button>
        <button
          className={`drawer-tab-btn ${activeTab === 'academic' ? 'active' : ''}`}
          onClick={() => setActiveTab('academic')}
        >
          <GraduationCap size={13} />
          <span>Académico</span>
        </button>
        <button
          className={`drawer-tab-btn ${activeTab === 'visa' ? 'active' : ''}`}
          onClick={() => setActiveTab('visa')}
        >
          <ShieldCheck size={13} />
          <span>Visa</span>
        </button>
        <button
          className={`drawer-tab-btn ${activeTab === 'universities' ? 'active' : ''}`}
          onClick={() => setActiveTab('universities')}
        >
          <Building2 size={13} />
          <span>Unis ({country.universities.length})</span>
        </button>
        <button
          className={`drawer-tab-btn ${activeTab === 'cost' ? 'active' : ''}`}
          onClick={() => setActiveTab('cost')}
        >
          <DollarSign size={13} />
          <span>Costos</span>
        </button>
      </div>

      {/* Content Scroll Body */}
      <div className="drawer-content-scroll">
        {activeTab === 'overview' && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="info-card">
              <div className="info-card-header">
                <Sparkles size={16} style={{ color: 'var(--apple-cyan)' }} />
                <h4>¿Por qué estudiar en {country.name}?</h4>
              </div>
              <p className="info-card-body">
                {country.summary}
              </p>
              <div className="tag-list">
                {country.tags.map((tag) => (
                  <span key={tag} className="tag-badge">#{tag}</span>
                ))}
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-header">
                <Clock size={16} />
                <h4>Clima y Estilo de Vida</h4>
              </div>
              <p className="info-card-body">{country.climateSummary}</p>
            </div>

            <div className="overview-highlights-box">
              <div className="highlight-item">
                <span className="highlight-title">Idioma</span>
                <span className="highlight-val">{country.academic.languages[0]?.language}</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-title">Trabajo</span>
                <span className="highlight-val" style={{ color: country.visa.workPermitAllowed ? 'var(--apple-green)' : 'var(--apple-red)' }}>
                  {country.visa.workPermitAllowed ? `${country.visa.workHoursPerWeek}h/sem` : 'No'}
                </span>
              </div>
              <div className="highlight-item">
                <span className="highlight-title">Descuentos</span>
                <span className="highlight-val">{country.cost.studentDiscountAvailability}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'academic' && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="info-card">
              <div className="info-card-header">
                <GraduationCap size={16} />
                <h4>Requisitos Académicos Base</h4>
              </div>
              <div className="criteria-list">
                <div className="criteria-row">
                  <div className="criteria-icon-box">
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.84rem' }}>Promedio Mínimo Requerido:</strong>
                    <div style={{ color: 'var(--label-secondary)', fontSize: '0.8rem' }}>
                      {country.academic.minGpa} / 10 ({country.academic.gpaScale})
                    </div>
                  </div>
                </div>

                <div className="criteria-row">
                  <div className="criteria-icon-box">
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.84rem' }}>Avance Curricular:</strong>
                    <div style={{ color: 'var(--label-secondary)', fontSize: '0.8rem' }}>
                      Haber completado y acreditado el {country.academic.minCompletedCreditsPercent}% de tu carrera.
                    </div>
                  </div>
                </div>
              </div>

              {country.academic.notes && (
                <div className="info-alert-box">
                  <Info size={15} style={{ flexShrink: 0, color: 'var(--apple-cyan)' }} />
                  <span>{country.academic.notes}</span>
                </div>
              )}
            </div>

            <div className="info-card">
              <div className="info-card-header">
                <FileText size={16} />
                <h4>Certificaciones de Idioma</h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {country.academic.languages.map((lang, idx) => (
                  <div key={idx} className="language-badge-card">
                    <div className="language-header">
                      <span className="lang-name">{lang.language}</span>
                      <span className="lang-level-pill">{lang.level}</span>
                    </div>
                    <div className="certificates-accepted">
                      <strong>Exámenes válidos:</strong> {lang.certificatesAccepted.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-header">
                <TrendingUp size={16} />
                <h4>Áreas con Alta Demanda</h4>
              </div>
              <div className="tag-list">
                {country.academic.popularFields.map((fld) => (
                  <span key={fld} className="tag-badge-accent">
                    {fld}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'visa' && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="info-card">
              <div className="info-card-header">
                <ShieldCheck size={16} style={{ color: 'var(--apple-cyan)' }} />
                <h4>{country.visa.visaType}</h4>
              </div>
              <div className="visa-metric-grid">
                <div className="visa-metric-item">
                  <Clock size={15} style={{ color: 'var(--apple-cyan)' }} />
                  <div>
                    <span className="v-label">Gestión</span>
                    <strong className="v-val">{country.visa.processingTimeWeeks}</strong>
                  </div>
                </div>
                <div className="visa-metric-item">
                  <DollarSign size={15} style={{ color: 'var(--apple-orange)' }} />
                  <div>
                    <span className="v-label">Solvencia</span>
                    <strong className="v-val">${country.visa.monthlyProofOfFundsUsd} USD/m</strong>
                  </div>
                </div>
                <div className="visa-metric-item">
                  <Briefcase size={15} style={{ color: country.visa.workPermitAllowed ? 'var(--apple-green)' : 'var(--apple-red)' }} />
                  <div>
                    <span className="v-label">Trabajo</span>
                    <strong className="v-val">{country.visa.workPermitAllowed ? `${country.visa.workHoursPerWeek}h/sem` : 'No'}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-header">
                <FileText size={16} />
                <h4>Documentación Obligatoria</h4>
              </div>
              <ul className="requirements-checklist">
                {country.visa.keyDocuments.map((doc, idx) => (
                  <li key={idx} className="doc-item">
                    <span className="doc-number">{idx + 1}</span>
                    <span className="doc-text">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {country.visa.tips && country.visa.tips.length > 0 && (
              <div className="info-card">
                <div className="info-card-header">
                  <span style={{ fontSize: '1rem' }}>💡</span>
                  <h4>Recomendaciones Migratorias</h4>
                </div>
                <ul className="tips-list">
                  {country.visa.tips.map((tip, idx) => (
                    <li key={idx}>
                      <ChevronRight size={13} className="tip-bullet" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {country.visa.embassyPortalUrl && (
              <a
                href={country.visa.embassyPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                <span>Portal Oficial de Migración</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        )}

        {activeTab === 'universities' && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {country.universities.map((uni) => (
              <div key={uni.id} className="uni-card-compact">
                <div className="uni-header-row">
                  <div>
                    <h4 className="uni-name">{uni.name}</h4>
                    <span className="uni-location"><MapPin size={11} /> {uni.city}</span>
                  </div>
                  {uni.worldRank && (
                    <span className="uni-rank-badge">
                      QS #{uni.worldRank}
                    </span>
                  )}
                </div>

                <div className="uni-programs-preview">
                  <strong>Programas:</strong> {uni.featuredPrograms.join(' • ')}
                </div>

                <div className="uni-agreements-preview">
                  <strong>Convenios:</strong> {uni.partnerAgreements.join(', ')}
                </div>

                <div className="uni-card-footer">
                  <div className="uni-rating">
                    Campus: <span className="stars">{'★'.repeat(Math.round(uni.campusLifeRating))}</span>
                  </div>
                  <a
                    href={uni.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uni-visit-btn"
                  >
                    <span>Sitio Oficial</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'cost' && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="info-card">
              <div className="info-card-header">
                <DollarSign size={16} style={{ color: 'var(--apple-green)' }} />
                <h4>Gasto Promedio Mensual Estudiantil</h4>
              </div>
              <div className="cost-large-figure">
                ~${country.cost.averageMonthlyTotalUsd} USD
                <span className="cost-currency-sub">
                  ({country.cost.currency})
                </span>
              </div>
              <div className="cost-breakdown-grid">
                <div className="cost-item">
                  <div className="cost-item-label">🏠 Alojamiento</div>
                  <div className="cost-item-val">${country.cost.breakdown.housingUsd} USD</div>
                </div>
                <div className="cost-item">
                  <div className="cost-item-label">🥑 Alimentación</div>
                  <div className="cost-item-val">${country.cost.breakdown.foodUsd} USD</div>
                </div>
                <div className="cost-item">
                  <div className="cost-item-label">🚇 Transporte</div>
                  <div className="cost-item-val">${country.cost.breakdown.transportUsd} USD</div>
                </div>
                <div className="cost-item">
                  <div className="cost-item-label">☕ Ocio & Personal</div>
                  <div className="cost-item-val">${country.cost.breakdown.leisureAndPersonalUsd} USD</div>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-header">
                <Building2 size={16} />
                <h4>Beneficios Estudiantiles</h4>
              </div>
              <p className="info-card-body">
                Nivel de cobertura: <strong style={{ color: 'var(--apple-cyan)' }}>{country.cost.studentDiscountAvailability}</strong>.
                Con tu credencial universitaria o carnet ISIC tienes acceso a tarifas preferenciales en transporte público, actividades culturales y comercios asociados.
              </p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
