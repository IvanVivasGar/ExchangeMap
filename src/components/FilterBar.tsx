import React from 'react';
import { Region, VisaDifficulty } from '../types';
import { Layers, ShieldCheck, DollarSign } from 'lucide-react';

interface FilterBarProps {
  selectedRegion: Region | 'All';
  onSelectRegion: (r: Region | 'All') => void;
  selectedDifficulty: VisaDifficulty | 'All';
  onSelectDifficulty: (d: VisaDifficulty | 'All') => void;
  maxMonthlyBudget: number;
  onBudgetChange: (budget: number) => void;
  resultsCount: number;
}

const REGIONS: { label: string; value: Region | 'All'; icon?: string }[] = [
  { label: 'Todos', value: 'All' },
  { label: 'Europa', value: 'Europa', icon: '🇪🇺' },
  { label: 'Norteamérica', value: 'Norteamérica', icon: '🇺🇸' },
  { label: 'Latinoamérica', value: 'Latinoamérica', icon: '🌎' },
  { label: 'Asia', value: 'Asia', icon: '🌏' },
  { label: 'Oceanía', value: 'Oceanía', icon: '🦘' },
];

const DIFFICULTIES: { label: string; value: VisaDifficulty | 'All'; color: string }[] = [
  { label: 'Todas', value: 'All', color: 'transparent' },
  { label: 'Fácil', value: 'Fácil', color: 'var(--apple-green)' },
  { label: 'Moderada', value: 'Moderado', color: 'var(--apple-orange)' },
  { label: 'Exigente', value: 'Exigente', color: 'var(--apple-red)' },
];

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedRegion,
  onSelectRegion,
  selectedDifficulty,
  onSelectDifficulty,
  maxMonthlyBudget,
  onBudgetChange,
  resultsCount
}) => {
  return (
    <div className="floating-filters-container">
      {/* Region Segment */}
      <div className="filter-pill-group">
        <div className="filter-group-header">
          <Layers size={13} className="filter-header-icon" />
          <span>Región</span>
        </div>
        <div className="filter-options-row">
          {REGIONS.map((r) => (
            <button
              key={r.value}
              className={`filter-chip ${selectedRegion === r.value ? 'active' : ''}`}
              onClick={() => onSelectRegion(r.value)}
            >
              {r.icon && <span className="chip-flag-icon">{r.icon}</span>}
              <span>{r.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="filter-divider" />

      {/* Visa Difficulty Segment */}
      <div className="filter-pill-group">
        <div className="filter-group-header">
          <ShieldCheck size={13} className="filter-header-icon" />
          <span>Visa</span>
        </div>
        <div className="filter-options-row">
          {DIFFICULTIES.map((d) => (
            <button
              key={d.value}
              className={`filter-chip ${selectedDifficulty === d.value ? 'active' : ''}`}
              onClick={() => onSelectDifficulty(d.value)}
            >
              {d.value !== 'All' && (
                <span
                  className="diff-dot"
                  style={{ backgroundColor: d.color }}
                />
              )}
              <span>{d.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="filter-divider" />

      {/* Budget Slider */}
      <div className="filter-pill-group budget-slider-group">
        <div className="filter-group-header" style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <DollarSign size={13} className="filter-header-icon" />
            <span>Presupuesto</span>
          </div>
          <span className="budget-value-badge">
            ≤ ${maxMonthlyBudget} <span className="budget-unit">USD/mes</span>
          </span>
        </div>
        <div className="slider-wrapper">
          <input
            type="range"
            min="500"
            max="2500"
            step="50"
            value={maxMonthlyBudget}
            onChange={(e) => onBudgetChange(Number(e.target.value))}
            className="budget-range-input"
          />
        </div>
      </div>

      {/* Results pill */}
      <div className="results-counter-tag">
        <span className="results-dot"></span>
        <span>{resultsCount} {resultsCount === 1 ? 'destino' : 'destinos'}</span>
      </div>
    </div>
  );
};
