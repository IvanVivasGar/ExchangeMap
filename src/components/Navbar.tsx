import React from 'react';
import { Compass, Map, Scale, ListFilter, Sun, Moon, Search, Globe } from 'lucide-react';

interface NavbarProps {
  currentView: 'map' | 'comparator' | 'list';
  onViewChange: (view: 'map' | 'comparator' | 'list') => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  destinationsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onViewChange,
  searchQuery,
  onSearchChange,
  theme,
  onToggleTheme,
  destinationsCount
}) => {
  return (
    <header className="navbar">
      <div className="brand-section" onClick={() => onViewChange('map')}>
        <div className="brand-logo">
          <Compass size={20} className="brand-logo-icon" />
        </div>
        <div className="brand-text-container">
          <span className="brand-title">ExchangeMap</span>
          <span className="brand-subtitle">Student Mobility OS</span>
        </div>
      </div>

      <div className="nav-center-actions">
        <button
          className={`view-toggle-btn ${currentView === 'map' ? 'active' : ''}`}
          onClick={() => onViewChange('map')}
          id="btn-nav-map"
        >
          <Map size={15} />
          <span>Mapa</span>
        </button>

        <button
          className={`view-toggle-btn ${currentView === 'comparator' ? 'active' : ''}`}
          onClick={() => onViewChange('comparator')}
          id="btn-nav-comparator"
        >
          <Scale size={15} />
          <span>Comparador</span>
        </button>

        <button
          className={`view-toggle-btn ${currentView === 'list' ? 'active' : ''}`}
          onClick={() => onViewChange('list')}
          id="btn-nav-list"
        >
          <ListFilter size={15} />
          <span>Catálogo</span>
        </button>
      </div>

      <div className="nav-right-actions">
        <div className="search-input-wrapper">
          <Search size={15} className="search-icon-svg" />
          <input
            type="text"
            className="search-input"
            placeholder="Buscar país, idioma o universidad..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            id="search-country-input"
          />
          {searchQuery ? (
            <button className="search-clear-btn" onClick={() => onSearchChange('')}>
              ×
            </button>
          ) : (
            <span className="search-shortcut-badge">⌘K</span>
          )}
        </div>

        <div className="destination-counter-badge" title="Destinos disponibles">
          <Globe size={13} />
          <span>{destinationsCount} Destinos</span>
        </div>

        <button
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          id="btn-theme-toggle"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  );
};

