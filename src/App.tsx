import React, { useState, useMemo } from 'react';
import { COUNTRIES_DATA } from './data/countriesData';
import { Country, Region, VisaDifficulty } from './types';
import { Navbar } from './components/Navbar';
import { InteractiveMap } from './components/InteractiveMap';
import { FilterBar } from './components/FilterBar';
import { CountryDrawer } from './components/CountryDrawer';
import { CountryComparator } from './components/CountryComparator';
import { CountryListView } from './components/CountryListView';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'map' | 'comparator' | 'list'>('map');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<Region | 'All'>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<VisaDifficulty | 'All'>('All');
  const [maxMonthlyBudget, setMaxMonthlyBudget] = useState<number>(3000);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Toggle dark/light theme
  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // Filter countries according to search, region and visa difficulty
  const filteredCountries = useMemo(() => {
    return COUNTRIES_DATA.filter((country) => {
      // Region filter
      if (selectedRegion !== 'All' && country.region !== selectedRegion) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== 'All' && country.visa.difficulty !== selectedDifficulty) {
        return false;
      }
      // Budget filter
      if (country.cost.averageMonthlyTotalUsd > maxMonthlyBudget) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = country.name.toLowerCase().includes(q);
        const matchesLang = country.academic.languages.some((l) => l.language.toLowerCase().includes(q));
        const matchesUni = country.universities.some((u) => u.name.toLowerCase().includes(q) || u.city.toLowerCase().includes(q));
        const matchesTag = country.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesLang && !matchesUni && !matchesTag) {
          return false;
        }
      }
      return true;
    });
  }, [selectedRegion, selectedDifficulty, maxMonthlyBudget, searchQuery]);

  const handleCountrySelect = (country: Country | null) => {
    setSelectedCountry(country);
  };

  return (
    <div className="app-container">
      {/* Header Bar */}
      <Navbar
        currentView={currentView}
        onViewChange={(view) => setCurrentView(view)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        destinationsCount={COUNTRIES_DATA.length}
      />

      {/* Main Layout Area */}
      <main className="main-layout">
        {currentView === 'map' && (
          <>
            <FilterBar
              selectedRegion={selectedRegion}
              onSelectRegion={setSelectedRegion}
              selectedDifficulty={selectedDifficulty}
              onSelectDifficulty={setSelectedDifficulty}
              maxMonthlyBudget={maxMonthlyBudget}
              onBudgetChange={setMaxMonthlyBudget}
              resultsCount={filteredCountries.length}
            />

            <InteractiveMap
              countries={filteredCountries}
              selectedCountry={selectedCountry}
              onSelectCountry={handleCountrySelect}
              theme={theme}
            />

            <CountryDrawer
              country={selectedCountry}
              onClose={() => setSelectedCountry(null)}
            />
          </>
        )}

        {currentView === 'comparator' && (
          <CountryComparator
            countries={COUNTRIES_DATA}
            onSelectCountry={(country) => {
              setSelectedCountry(country);
              setCurrentView('map');
            }}
          />
        )}

        {currentView === 'list' && (
          <>
            <CountryListView
              countries={filteredCountries}
              onSelectCountry={(country) => {
                setSelectedCountry(country);
                setCurrentView('map');
              }}
            />

            <CountryDrawer
              country={selectedCountry}
              onClose={() => setSelectedCountry(null)}
            />
          </>
        )}
      </main>
    </div>
  );
};
export default App;
