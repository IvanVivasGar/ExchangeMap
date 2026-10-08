export type Region = 'Europa' | 'Norteamérica' | 'Latinoamérica' | 'Asia' | 'Oceanía';
export type VisaDifficulty = 'Fácil' | 'Moderado' | 'Exigente';

export interface AcademicRequirements {
  minGpa: number; // escala 0 - 10 o 0 - 4
  gpaScale: string;
  languages: {
    language: string;
    level: string; // ej. B2, C1, TOEFL 90+, IELTS 6.5
    certificatesAccepted: string[];
  }[];
  minCompletedCreditsPercent: number;
  popularFields: string[];
  notes?: string;
}

export interface VisaRequirements {
  visaType: string;
  difficulty: VisaDifficulty;
  workPermitAllowed: boolean;
  workHoursPerWeek?: number;
  monthlyProofOfFundsUsd: number;
  totalFundsRequiredUsd?: number;
  healthInsuranceRequired: boolean;
  processingTimeWeeks: string;
  keyDocuments: string[];
  embassyPortalUrl?: string;
  tips: string[];
}

export interface University {
  id: string;
  name: string;
  city: string;
  state?: string;
  countryCode: string;
  worldRank?: number;
  partnerAgreements: string[];
  featuredPrograms: string[];
  campusLifeRating: number; // 1 to 5
  estimatedTuitionSemesterUsd: number; // 0 if fee-waiver exchange
  websiteUrl: string;
  coordinates: [number, number]; // lat, lng
  description?: string;
}

export interface CostOfLiving {
  currency: string;
  currencySymbol: string;
  exchangeRateToUsd: number;
  averageMonthlyTotalUsd: number;
  breakdown: {
    housingUsd: number;
    foodUsd: number;
    transportUsd: number;
    leisureAndPersonalUsd: number;
  };
  studentDiscountAvailability: 'Alta' | 'Media' | 'Baja';
}

export interface Country {
  code: string; // ISO 2 o 3 letras
  name: string;
  flagEmoji: string;
  region: Region;
  capital: string;
  climateSummary: string;
  coordinates: [number, number]; // lat, lng
  academic: AcademicRequirements;
  visa: VisaRequirements;
  cost: CostOfLiving;
  universities: University[];
  tags: string[];
  summary: string;
  bannerImage?: string;
}
