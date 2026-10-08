import { Country } from '../types';

export const COUNTRIES_DATA: Country[] = [
  {
    code: 'ESP',
    name: 'España',
    flagEmoji: '🇪🇸',
    region: 'Europa',
    capital: 'Madrid',
    climateSummary: 'Mediterráneo templado, veranos cálidos e inviernos suaves.',
    coordinates: [40.4637, -3.7492],
    summary: 'Destino predilecto por excelencia en habla hispana y Europa. Excelente vida universitaria, cultura rica y conexión directa con el espacio Schengen.',
    tags: ['Schengen', 'Español', 'Alta vida estudiantil', 'Económico vs Europa Central'],
    academic: {
      minGpa: 7.5,
      gpaScale: '0 a 10',
      languages: [
        {
          language: 'Español',
          level: 'B2 / Nativo',
          certificatesAccepted: ['DELE B2', 'Certificado Universitario']
        },
        {
          language: 'Inglés',
          level: 'B2 (si el programa es bilingüe)',
          certificatesAccepted: ['TOEFL iBT 80+', 'IELTS 6.0+']
        }
      ],
      minCompletedCreditsPercent: 50,
      popularFields: ['Administración & Negocios', 'Derecho', 'Ingenierías', 'Humanidades', 'Turismo'],
      notes: 'La convalidación de créditos (ECTS) es sumamente transparente en la mayoría de convenios bilaterales.'
    },
    visa: {
      visaType: 'Visado de Estudiante (Tipo D)',
      difficulty: 'Moderado',
      workPermitAllowed: true,
      workHoursPerWeek: 30,
      monthlyProofOfFundsUsd: 650,
      totalFundsRequiredUsd: 3900,
      healthInsuranceRequired: true,
      processingTimeWeeks: '4 - 8 semanas',
      keyDocuments: [
        'Carta de Aceptación oficial de la universidad española',
        'Comprobante de fondos financieros (IPREM mensual)',
        'Seguro médico completo sin copagos autorizado en España',
        'Certificado de antecedentes penales apostillado',
        'Certificado médico oficial'
      ],
      embassyPortalUrl: 'https://www.exteriores.gob.es',
      tips: [
        'Tramita la TIE (Tarjeta de Identidad de Extranjero) en los primeros 30 días tras tu llegada.',
        'La ley actual permite trabajar hasta 30h semanales siempre que sea compatible con los estudios.'
      ]
    },
    cost: {
      currency: 'Euro (EUR)',
      currencySymbol: '€',
      exchangeRateToUsd: 1.08,
      averageMonthlyTotalUsd: 850,
      breakdown: {
        housingUsd: 420,
        foodUsd: 220,
        transportUsd: 30,
        leisureAndPersonalUsd: 180
      },
      studentDiscountAvailability: 'Alta'
    },
    universities: [
      {
        id: 'uam',
        name: 'Universidad Autónoma de Madrid',
        city: 'Madrid',
        state: 'Madrid',
        description: 'Una de las universidades líderes en investigación y ciencias jurídicas y biomédicas de España, con un vibrante campus en Cantoblanco.',
        countryCode: 'ESP',
        worldRank: 199,
        partnerAgreements: ['Erasmus+', 'Convenio Bilateral Santander'],
        featuredPrograms: ['Economía', 'Biotecnología', 'Derecho Internacional'],
        campusLifeRating: 4.8,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.uam.es',
        coordinates: [40.5487, -3.6908]
      },
      {
        id: 'ub',
        name: 'Universitat de Barcelona',
        city: 'Barcelona',
        state: 'Barcelona',
        description: 'La principal universidad pública de Cataluña con más de cinco siglos de historia y máximo prestigio en ciencias de la salud y humanidades.',
        countryCode: 'ESP',
        worldRank: 164,
        partnerAgreements: ['Erasmus+', 'Red Coimbra'],
        featuredPrograms: ['Medicina', 'Ciencias Sociales', 'Bellas Artes'],
        campusLifeRating: 4.9,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.ub.edu',
        coordinates: [41.3879, 2.1648]
      },
      {
        id: 'upv',
        name: 'Universitat Politècnica de València',
        city: 'Valencia',
        state: 'Valencia',
        description: 'Referente español en ingeniería, arquitectura y tecnología, ubicada en un campus costero con un ambiente estudiantil inigualable.',
        countryCode: 'ESP',
        worldRank: 310,
        partnerAgreements: ['Erasmus+', 'Magalhães'],
        featuredPrograms: ['Ingeniería Informática', 'Arquitectura', 'Telecomunicaciones'],
        campusLifeRating: 4.7,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.upv.es',
        coordinates: [39.4812, -0.3470]
      }
    ]
  },
  {
    code: 'DEU',
    name: 'Alemania',
    flagEmoji: '🇩🇪',
    region: 'Europa',
    capital: 'Berlín',
    climateSummary: 'Continental templado, inviernos fríos y veranos moderados.',
    coordinates: [51.1657, 10.4515],
    summary: 'Potencia científica, de innovación e ingeniería. Educación de clase mundial, excelente transporte público y subsidios estudiantiles altamente ventajosos.',
    tags: ['Schengen', 'Ingeniería', 'Cuenta Bloqueada', 'Costo Educativo Gratuito'],
    academic: {
      minGpa: 8.0,
      gpaScale: '0 a 10',
      languages: [
        {
          language: 'Alemán',
          level: 'B1 / B2 (para cursos en alemán)',
          certificatesAccepted: ['TestDaF 4', 'Goethe-Zertifikat B2']
        },
        {
          language: 'Inglés',
          level: 'B2 / C1 (amplia oferta de máster y materias en inglés)',
          certificatesAccepted: ['TOEFL iBT 90+', 'IELTS 6.5+']
        }
      ],
      minCompletedCreditsPercent: 50,
      popularFields: ['Ingeniería Mecánica', 'Ciencias de la Computación', 'Física', 'Automotriz', 'Filosofía'],
      notes: 'Muchas universidades ofrecen programas 100% en inglés para estudiantes de intercambio.'
    },
    visa: {
      visaType: 'Nationales Visum für Studienzwecke (§16b)',
      difficulty: 'Exigente',
      workPermitAllowed: true,
      workHoursPerWeek: 20,
      monthlyProofOfFundsUsd: 992,
      totalFundsRequiredUsd: 5950,
      healthInsuranceRequired: true,
      processingTimeWeeks: '6 - 12 semanas',
      keyDocuments: [
        'Zulassungsbescheid (Carta de admisión universitaria)',
        'Cuenta bancaria bloqueada (Sperrkonto) con min. 992€/mes (o beca DAAD)',
        'Seguro médico público alemán (TK, AOK, Barmer)',
        'Curriculum Vitae y Carta de Motivación estructurada'
      ],
      embassyPortalUrl: 'https://www.auswaertiges-amt.de',
      tips: [
        'Abre la cuenta bloqueada con antelación vía plataformas como Fintiba o Expatrio.',
        'El Semesterticket incluye transporte público ilimitado en toda la región o país.'
      ]
    },
    cost: {
      currency: 'Euro (EUR)',
      currencySymbol: '€',
      exchangeRateToUsd: 1.08,
      averageMonthlyTotalUsd: 980,
      breakdown: {
        housingUsd: 480,
        foodUsd: 260,
        transportUsd: 40,
        leisureAndPersonalUsd: 200
      },
      studentDiscountAvailability: 'Alta'
    },
    universities: [
      {
        id: 'tum',
        name: 'Technical University of Munich (TUM)',
        city: 'Múnich',
        state: 'Bayern',
        description: 'Universidad de excelencia alemana líder mundial en ingeniería, computación e innovación con fuertes lazos a la industria bávara.',
        countryCode: 'DEU',
        worldRank: 37,
        partnerAgreements: ['TUMexchange', 'Erasmus+'],
        featuredPrograms: ['Inteligencia Artificial', 'Robótica', 'Gestión Tecnológica'],
        campusLifeRating: 4.8,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.tum.de',
        coordinates: [48.1497, 11.5683]
      },
      {
        id: 'hu-berlin',
        name: 'Humboldt-Universität zu Berlin',
        city: 'Berlín',
        state: 'Berlin',
        description: 'Cuna de 29 premios Nobel, pionera del modelo universitario humboldtiano que integra investigación y docencia en el corazón de Berlín.',
        countryCode: 'DEU',
        worldRank: 120,
        partnerAgreements: ['Erasmus+', 'Circle U.'],
        featuredPrograms: ['Ciencias Políticas', 'Neurociencias', 'Historia'],
        campusLifeRating: 4.9,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.hu-berlin.de',
        coordinates: [52.5180, 13.3934]
      },
      {
        id: 'rwth',
        name: 'RWTH Aachen University',
        city: 'Aquisgrán',
        state: 'Nordrhein-Westfalen',
        description: 'Una de las instituciones técnicas más prestigiosas de Europa, especializada en ingeniería mecánica, automotriz y aeroespacial.',
        countryCode: 'DEU',
        worldRank: 106,
        partnerAgreements: ['IDEA League', 'Erasmus+'],
        featuredPrograms: ['Ingeniería Eléctrica', 'Materiales', 'Aeroespacial'],
        campusLifeRating: 4.5,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.rwth-aachen.de',
        coordinates: [50.7780, 6.0610]
      }
    ]
  },
  {
    code: 'USA',
    name: 'Estados Unidos',
    flagEmoji: '🇺🇸',
    region: 'Norteamérica',
    capital: 'Washington D.C.',
    climateSummary: 'Muy diverso: templado en el norte, cálido en el sur, continental.',
    coordinates: [37.0902, -95.7129],
    summary: 'Líder en infraestructura universitaria, vida de campus deportiva y centros de investigación de élite. Gran prestigio académico e inmersión lingüística.',
    tags: ['Inglés', 'Campus Life', 'Alta Tecnología', 'Visa J-1'],
    academic: {
      minGpa: 8.5,
      gpaScale: '0 a 10 (o 3.2/4.0)',
      languages: [
        {
          language: 'Inglés',
          level: 'C1 / Avanzado',
          certificatesAccepted: ['TOEFL iBT 90 - 100', 'IELTS 7.0', 'Duolingo 120+']
        }
      ],
      minCompletedCreditsPercent: 50,
      popularFields: ['Computer Science', 'Business & Finance', 'Biomedical', 'Cinema & Media', 'Data Science'],
      notes: 'La mayoría de universidades exigen pruebas TOEFL/IELTS con antigüedad menor a 2 años.'
    },
    visa: {
      visaType: 'Visa de Visitante de Intercambio (J-1)',
      difficulty: 'Exigente',
      workPermitAllowed: true,
      workHoursPerWeek: 20,
      monthlyProofOfFundsUsd: 1500,
      totalFundsRequiredUsd: 9000,
      healthInsuranceRequired: true,
      processingTimeWeeks: '4 - 10 semanas',
      keyDocuments: [
        'Formulario DS-2019 emitido por la universidad anfitriona',
        'Pago de la tarifa SEVIS I-901 ($220 USD)',
        'Formulario DS-160 con confirmación y cita consular',
        'Estados de cuenta bancarios que demuestren solvencia total',
        'Demostración de lazos de arraigo con el país de origen'
      ],
      embassyPortalUrl: 'https://travel.state.gov',
      tips: [
        'El trabajo permitido solo es dentro del campus (On-Campus Employment).',
        'Agenda tu entrevista consular apenas recibas el DS-2019.'
      ]
    },
    cost: {
      currency: 'Dólar Estadounidense (USD)',
      currencySymbol: '$',
      exchangeRateToUsd: 1.00,
      averageMonthlyTotalUsd: 1650,
      breakdown: {
        housingUsd: 900,
        foodUsd: 400,
        transportUsd: 100,
        leisureAndPersonalUsd: 250
      },
      studentDiscountAvailability: 'Media'
    },
    universities: [
      {
        id: 'uc-berkeley',
        name: 'University of California, Berkeley',
        city: 'Berkeley',
        state: 'California',
        description: 'La universidad pública #1 del mundo, epicentro del pensamiento crítico, biotecnología y tecnología junto a Silicon Valley.',
        countryCode: 'USA',
        worldRank: 10,
        partnerAgreements: ['UCEAP Program', 'Bilateral Exchange'],
        featuredPrograms: ['Computer Science', 'Economics', 'Biochemistry'],
        campusLifeRating: 4.9,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.berkeley.edu',
        coordinates: [37.8719, -122.2585]
      },
      {
        id: 'umich',
        name: 'University of Michigan',
        city: 'Ann Arbor',
        state: 'Michigan',
        description: 'Gigante académico y de investigación con una vibrante vida de campus deportiva NCAA y programas de élite en negocios e ingeniería.',
        countryCode: 'USA',
        worldRank: 33,
        partnerAgreements: ['Global Exchange Network'],
        featuredPrograms: ['Aerospace Engineering', 'Ross School of Business', 'Psychology'],
        campusLifeRating: 4.9,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://umich.edu',
        coordinates: [42.2780, -83.7382]
      }
    ]
  },
  {
    code: 'CAN',
    name: 'Canadá',
    flagEmoji: '🇨🇦',
    region: 'Norteamérica',
    capital: 'Ottawa',
    climateSummary: 'Inviernos fríos con nieve abundante, veranos agradables y cálidos.',
    coordinates: [56.1304, -106.3468],
    summary: 'Sociedad multicultural, segura y con un sistema educativo de primer nivel. Entornos naturales espectaculares y oportunidades de bilingüismo (inglés/francés).',
    tags: ['Multicultural', 'Bilingüe', 'Naturaleza', 'Seguridad'],
    academic: {
      minGpa: 8.0,
      gpaScale: '0 a 10',
      languages: [
        {
          language: 'Inglés',
          level: 'B2 / C1',
          certificatesAccepted: ['TOEFL iBT 86+', 'IELTS 6.5+']
        },
        {
          language: 'Francés',
          level: 'B2 (si se estudia en Quebec)',
          certificatesAccepted: ['DALF B2', 'TEF']
        }
      ],
      minCompletedCreditsPercent: 45,
      popularFields: ['Environmental Sciences', 'Software Engineering', 'Finance', 'International Relations'],
      notes: 'Para estancias menores a 6 meses solo se requiere eTA (Electronic Travel Authorization) según nacionalidad.'
    },
    visa: {
      visaType: 'Study Permit (o eTA para estancias < 6 meses)',
      difficulty: 'Moderado',
      workPermitAllowed: false,
      workHoursPerWeek: 0,
      monthlyProofOfFundsUsd: 1100,
      totalFundsRequiredUsd: 6600,
      healthInsuranceRequired: true,
      processingTimeWeeks: '6 - 10 semanas',
      keyDocuments: [
        'Letter of Acceptance (LOA) con DLI number',
        'Pruebas de solvencia financiera (fondos líquidos)',
        'CAQ (Certificat d’acceptation du Québec) solo si vas a Quebec',
        'Examen médico y datos biométricos'
      ],
      embassyPortalUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship.html',
      tips: [
        'Si tu intercambio dura exactamente 1 semestre (< 6 meses), generalmente no requieres Study Permit formal.'
      ]
    },
    cost: {
      currency: 'Dólar Canadiense (CAD)',
      currencySymbol: 'CA$',
      exchangeRateToUsd: 0.74,
      averageMonthlyTotalUsd: 1250,
      breakdown: {
        housingUsd: 650,
        foodUsd: 320,
        transportUsd: 80,
        leisureAndPersonalUsd: 200
      },
      studentDiscountAvailability: 'Alta'
    },
    universities: [
      {
        id: 'ubc',
        name: 'University of British Columbia (UBC)',
        city: 'Vancouver',
        state: 'British Columbia',
        description: 'Campus costero espectacular entre bosques y océano, referente canadiense en sustentabilidad, ciencias de la computación y negocios.',
        countryCode: 'CAN',
        worldRank: 34,
        partnerAgreements: ['Go Global Exchange', 'Universitas 21'],
        featuredPrograms: ['Sostenibilidad', 'Computer Science', 'Forestry'],
        campusLifeRating: 4.9,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.ubc.ca',
        coordinates: [49.2606, -123.2460]
      },
      {
        id: 'mcgill',
        name: 'McGill University',
        city: 'Montreal',
        state: 'Québec',
        description: 'Considerada la Harvard de Canadá, ubicada en el corazón cosmopolita y bilingüe de Montreal con enorme prestigio médico y humanista.',
        countryCode: 'CAN',
        worldRank: 30,
        partnerAgreements: ['Global Student Exchange', 'U21'],
        featuredPrograms: ['Medicina', 'Derecho', 'Música', 'Neurociencia'],
        campusLifeRating: 4.8,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.mcgill.ca',
        coordinates: [45.5048, -73.5772]
      }
    ]
  },
  {
    code: 'JPN',
    name: 'Japón',
    flagEmoji: '🇯🇵',
    region: 'Asia',
    capital: 'Tokio',
    climateSummary: 'Cuatro estaciones bien marcadas; floración de cerezos en primavera, veranos húmedos.',
    coordinates: [36.2048, 138.2529],
    summary: 'Fusión perfecta entre tradición milenaria y vanguardia tecnológica. Uno de los países más seguros y limpios del planeta, con becas JASSO muy atractivas.',
    tags: ['Asia', 'Tecnología', 'Seguridad Extrema', 'Beca JASSO'],
    academic: {
      minGpa: 8.2,
      gpaScale: '0 a 10',
      languages: [
        {
          language: 'Inglés',
          level: 'B2 / C1 (programas internacionales)',
          certificatesAccepted: ['TOEFL iBT 80+', 'IELTS 6.0+']
        },
        {
          language: 'Japonés',
          level: 'N3 / N2 (si cursas en japonés)',
          certificatesAccepted: ['JLPT N3-N2']
        }
      ],
      minCompletedCreditsPercent: 50,
      popularFields: ['Robótica', 'Diseño & Animación', 'Ingeniería Electrónica', 'Estudios Asiáticos', 'Negocios'],
      notes: 'Muchas universidades no exigen japonés previo si tomas materias de intercambio en inglés.'
    },
    visa: {
      visaType: 'Student Visa (Ryugaku)',
      difficulty: 'Moderado',
      workPermitAllowed: true,
      workHoursPerWeek: 28,
      monthlyProofOfFundsUsd: 850,
      totalFundsRequiredUsd: 5100,
      healthInsuranceRequired: true,
      processingTimeWeeks: '4 - 8 semanas',
      keyDocuments: [
        'Certificate of Eligibility (COE) gestionado por la universidad japonesa',
        'Formulario de solicitud de visa completado',
        'Fotografías recientes en formato estándar japonés',
        'Pasaporte válido con vigencia amplia'
      ],
      embassyPortalUrl: 'https://www.mofa.go.jp',
      tips: [
        'Al llegar al aeropuerto solicita el sello de permiso de trabajo (Shikakugai Katsudo Kyoka) en migración.',
        'El seguro médico nacional (NHI) cuesta aproximadamente $15-20 USD al mes para estudiantes.'
      ]
    },
    cost: {
      currency: 'Yen Japonés (JPY)',
      currencySymbol: '¥',
      exchangeRateToUsd: 0.0067,
      averageMonthlyTotalUsd: 890,
      breakdown: {
        housingUsd: 410,
        foodUsd: 280,
        transportUsd: 70,
        leisureAndPersonalUsd: 130
      },
      studentDiscountAvailability: 'Alta'
    },
    universities: [
      {
        id: 'u-tokyo',
        name: 'University of Tokyo (Todai)',
        city: 'Tokio',
        state: 'Tokyo',
        description: 'La universidad más prestigiosa de Japón y Asia, formadora de primeros ministros, líderes tecnológicos y laureados con el Premio Nobel.',
        countryCode: 'JPN',
        worldRank: 28,
        partnerAgreements: ['USTEP Exchange Program', 'IARU'],
        featuredPrograms: ['Physics', 'Engineering', 'Asian Studies'],
        campusLifeRating: 4.8,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.u-tokyo.ac.jp',
        coordinates: [35.7128, 139.7620]
      },
      {
        id: 'kyoto-u',
        name: 'Kyoto University',
        city: 'Kioto',
        state: 'Kyōto',
        description: 'Conocida por su tradición de libertad académica y excelencia en ciencias puras, física y química en la histórica capital cultural japonesa.',
        countryCode: 'JPN',
        worldRank: 46,
        partnerAgreements: ['KUINEP Program', 'Bilateral'],
        featuredPrograms: ['Química', 'Ciencias de la Vida', 'Economía'],
        campusLifeRating: 4.9,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.kyoto-u.ac.jp',
        coordinates: [35.0262, 135.7808]
      },
      {
        id: 'waseda',
        name: 'Waseda University',
        city: 'Tokio',
        state: 'Tokyo',
        description: 'Universidad privada icónica con una comunidad estudiantil internacional masiva y fuertes convenios globales en ciencias políticas y negocios.',
        countryCode: 'JPN',
        worldRank: 198,
        partnerAgreements: ['Global Exchange Network'],
        featuredPrograms: ['Political Science', 'International Business', 'Media Studies'],
        campusLifeRating: 4.9,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.waseda.jp',
        coordinates: [35.7090, 139.7225]
      }
    ]
  },
  {
    code: 'KOR',
    name: 'Corea del Sur',
    flagEmoji: '🇰🇷',
    region: 'Asia',
    capital: 'Seúl',
    climateSummary: 'Templado con cuatro estaciones marcadas; primaveras y otoños especialmente hermosos.',
    coordinates: [35.9078, 127.7669],
    summary: 'Epicentro del dinamismo digital, innovación y cultura pop (K-Culture). Universidades hipermodernas con vida en campus 24/7 y becas GKS.',
    tags: ['K-Culture', 'Alta Tecnología', 'Vida Nocturna Segura', 'Top Rankings'],
    academic: {
      minGpa: 8.0,
      gpaScale: '0 a 10',
      languages: [
        {
          language: 'Inglés',
          level: 'B2',
          certificatesAccepted: ['TOEFL iBT 80+', 'IELTS 6.0+']
        },
        {
          language: 'Coreano',
          level: 'TOPIK 3+ (opcional para carreras en inglés)',
          certificatesAccepted: ['TOPIK Level 3-4']
        }
      ],
      minCompletedCreditsPercent: 40,
      popularFields: ['Tecnología Móvil & Semiconductores', 'Media & Entretenimiento', 'Diseño', 'Negocios Globales'],
      notes: 'Muchas universidades ofrecen cursos de idioma coreano gratuitos para alumnos de intercambio.'
    },
    visa: {
      visaType: 'Visa de Estudiante D-2-6 (Intercambio)',
      difficulty: 'Moderado',
      workPermitAllowed: true,
      workHoursPerWeek: 20,
      monthlyProofOfFundsUsd: 900,
      totalFundsRequiredUsd: 4500,
      healthInsuranceRequired: true,
      processingTimeWeeks: '3 - 6 semanas',
      keyDocuments: [
        'Certificate of Admission emitido por la universidad coreana',
        'Certificado de fondos bancarios del estudiante o tutores',
        'Historial académico oficial y carta de nominación',
        'Pasaporte vigente'
      ],
      embassyPortalUrl: 'https://www.hikorea.go.kr',
      tips: [
        'Deberás registrarte para el Alien Registration Card (ARC) en la oficina de migración en Seúl.'
      ]
    },
    cost: {
      currency: 'Won Surcoreano (KRW)',
      currencySymbol: '₩',
      exchangeRateToUsd: 0.00075,
      averageMonthlyTotalUsd: 870,
      breakdown: {
        housingUsd: 380,
        foodUsd: 300,
        transportUsd: 60,
        leisureAndPersonalUsd: 130
      },
      studentDiscountAvailability: 'Alta'
    },
    universities: [
      {
        id: 'snu',
        name: 'Seoul National University (SNU)',
        city: 'Seúl',
        state: 'Seoul',
        description: 'El pilar del grupo SKY y máxima cúspide académica de Corea del Sur, con instalaciones de vanguardia en las faldas de la montaña Gwanak.',
        countryCode: 'KOR',
        worldRank: 41,
        partnerAgreements: ['SNU Exchange Program'],
        featuredPrograms: ['Ingeniería Electrónica', 'Negocios', 'Medicina'],
        campusLifeRating: 4.8,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://en.snu.ac.kr',
        coordinates: [37.4563, 126.9500]
      },
      {
        id: 'yonsei',
        name: 'Yonsei University',
        city: 'Seúl',
        state: 'Seoul',
        description: 'Famosa por su vibrante campus en el distrito universitario de Sinchon y su prestigioso colegio internacional Underwood.',
        countryCode: 'KOR',
        worldRank: 76,
        partnerAgreements: ['Underwood International College'],
        featuredPrograms: ['Global Affairs', 'Economía', 'Bioingeniería'],
        campusLifeRating: 4.9,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.yonsei.ac.kr',
        coordinates: [37.5658, 126.9386]
      },
      {
        id: 'kaist',
        name: 'KAIST',
        city: 'Daejeon',
        state: 'Daejeon',
        description: 'El MIT de Asia Oriental, centro neurálgico de investigación científica, robótica e inteligencia artificial en Corea del Sur.',
        countryCode: 'KOR',
        worldRank: 56,
        partnerAgreements: ['KAIST Global Exchange'],
        featuredPrograms: ['Ciencia de la Computación', 'Inteligencia Artificial', 'Aeroespacial'],
        campusLifeRating: 4.7,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.kaist.ac.kr',
        coordinates: [36.3722, 127.3604]
      }
    ]
  },
  {
    code: 'FRA',
    name: 'Francia',
    flagEmoji: '🇫🇷',
    region: 'Europa',
    capital: 'París',
    climateSummary: 'Oceánico y mediterráneo al sur; templado en la mayor parte del territorio.',
    coordinates: [46.2276, 2.2137],
    summary: 'Referente mundial en artes, gastronomía, ciencias sociales y escuelas de negocios (Grandes Écoles). Subsidio de vivienda estatal (CAF) para todos los estudiantes.',
    tags: ['Schengen', 'Subsidio CAF', 'Grandes Écoles', 'Arte & Cultura'],
    academic: {
      minGpa: 7.8,
      gpaScale: '0 a 10',
      languages: [
        {
          language: 'Francés',
          level: 'B2 (para universidades públicas)',
          certificatesAccepted: ['DELF B2', 'DALF C1', 'TCF']
        },
        {
          language: 'Inglés',
          level: 'B2 / C1 (en escuelas de negocios)',
          certificatesAccepted: ['TOEFL iBT 85+', 'IELTS 6.5']
        }
      ],
      minCompletedCreditsPercent: 50,
      popularFields: ['Business & Management', 'Arquitectura & Moda', 'Gastronomía', 'Matemáticas', 'Filosofía'],
      notes: 'Todos los estudiantes internacionales pueden solicitar la ayuda de vivienda CAF (hasta ~150-200€/mes de reembolso).'
    },
    visa: {
      visaType: 'Visa de Long Séjour valant Titre de Séjour (VLS-TS)',
      difficulty: 'Moderado',
      workPermitAllowed: true,
      workHoursPerWeek: 20,
      monthlyProofOfFundsUsd: 680,
      totalFundsRequiredUsd: 4080,
      healthInsuranceRequired: true,
      processingTimeWeeks: '4 - 7 semanas',
      keyDocuments: [
        'Attestation Études en France (Campus France)',
        'Carta de Aceptación Universitaria',
        'Comprobante de recursos financieros (min. 615€/mes)',
        'Justificante de alojamiento para los primeros meses',
        'Pasaporte y fotos biométricas'
      ],
      embassyPortalUrl: 'https://france-visas.gouv.fr',
      tips: [
        'Debes realizar primero el proceso de entrevista y validación con Campus France.',
        'La seguridad social (Sécurité Sociale) es gratuita para estudiantes en Francia.'
      ]
    },
    cost: {
      currency: 'Euro (EUR)',
      currencySymbol: '€',
      exchangeRateToUsd: 1.08,
      averageMonthlyTotalUsd: 920,
      breakdown: {
        housingUsd: 460,
        foodUsd: 250,
        transportUsd: 45,
        leisureAndPersonalUsd: 165
      },
      studentDiscountAvailability: 'Alta'
    },
    universities: [
      {
        id: 'sorbonne',
        name: 'Sorbonne Université',
        city: 'París',
        state: 'Paris',
        description: 'Heredera histórica de la universidad de París fundada en 1257 en el Barrio Latino, referente en medicina, ciencias y literatura.',
        countryCode: 'FRA',
        worldRank: 59,
        partnerAgreements: ['Erasmus+', '4EU+ Alliance'],
        featuredPrograms: ['Humanidades', 'Medicina', 'Matemáticas'],
        campusLifeRating: 4.8,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.sorbonne-universite.fr',
        coordinates: [48.8499, 2.3430]
      },
      {
        id: 'sciences-po',
        name: 'Sciences Po Paris',
        city: 'París',
        state: 'Paris',
        description: 'Institución líder mundial en ciencias políticas, relaciones internacionales, economía y asuntos públicos en Saint-Germain-des-Prés.',
        countryCode: 'FRA',
        worldRank: 242,
        partnerAgreements: ['Global Exchange Partnerships'],
        featuredPrograms: ['Ciencias Políticas', 'Relaciones Internacionales', 'Economía'],
        campusLifeRating: 4.9,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.sciencespo.fr',
        coordinates: [48.8540, 2.3289]
      }
    ]
  },
  {
    code: 'AUS',
    name: 'Australia',
    flagEmoji: '🇦🇺',
    region: 'Oceanía',
    capital: 'Canberra',
    climateSummary: 'Mayormente soleado, templado en la costa este y sur, tropical al norte.',
    coordinates: [-25.2744, 133.7751],
    summary: 'Calidad de vida insuperable, playas emblemáticas y universidades del "Group of Eight". Permisos de trabajo estudiantil muy flexibles y salarios mínimos altos.',
    tags: ['Group of Eight', 'Salarios Altos', 'Playas & Surf', 'Visa Subclass 500'],
    academic: {
      minGpa: 8.0,
      gpaScale: '0 a 10',
      languages: [
        {
          language: 'Inglés',
          level: 'C1 / Avanzado',
          certificatesAccepted: ['IELTS 6.5+ (mínimo 6.0 por banda)', 'TOEFL iBT 85+', 'PTE Academic 58+']
        }
      ],
      minCompletedCreditsPercent: 50,
      popularFields: ['Marine Biology', 'Mining & Resources', 'Business Analytics', 'Sports Science', 'Nursing'],
      notes: 'Muy estricto con los puntajes de idioma por banda individual.'
    },
    visa: {
      visaType: 'Student Visa (Subclass 500)',
      difficulty: 'Moderado',
      workPermitAllowed: true,
      workHoursPerWeek: 24, // 48 horas por quincena
      monthlyProofOfFundsUsd: 1400,
      totalFundsRequiredUsd: 8400,
      healthInsuranceRequired: true,
      processingTimeWeeks: '4 - 8 semanas',
      keyDocuments: [
        'Confirmation of Enrolment (CoE)',
        'Overseas Student Health Cover (OSHC)',
        'Genuine Student (GS) statement',
        'Evidencia de fondos financieros suficientes',
        'Biometría y examen médico oficial'
      ],
      embassyPortalUrl: 'https://immi.homeaffairs.gov.au',
      tips: [
        'El salario mínimo en Australia es uno de los más altos del mundo (~$23.23 AUD/hora).',
        'Contrata tu seguro médico OSHC con la misma universidad para simplificar trámites.'
      ]
    },
    cost: {
      currency: 'Dólar Australiano (AUD)',
      currencySymbol: 'A$',
      exchangeRateToUsd: 0.65,
      averageMonthlyTotalUsd: 1550,
      breakdown: {
        housingUsd: 850,
        foodUsd: 380,
        transportUsd: 90,
        leisureAndPersonalUsd: 230
      },
      studentDiscountAvailability: 'Media'
    },
    universities: [
      {
        id: 'unimelb',
        name: 'The University of Melbourne',
        city: 'Melbourne',
        state: 'Victoria',
        description: 'La universidad #1 de Australia, con su histórico campus Parkville en la capital cultural y más habitable del país.',
        countryCode: 'AUS',
        worldRank: 13,
        partnerAgreements: ['Group of Eight', 'Universitas 21'],
        featuredPrograms: ['Biomedicina', 'Finanzas', 'Arquitectura'],
        campusLifeRating: 4.9,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.unimelb.edu.au',
        coordinates: [-37.7963, 144.9614]
      },
      {
        id: 'unsw',
        name: 'UNSW Sydney',
        city: 'Sídney',
        state: 'New South Wales',
        description: 'Líder en ingeniería, finanzas y energías renovables, ubicada a pocos minutos de las icónicas playas de Sídney.',
        countryCode: 'AUS',
        worldRank: 19,
        partnerAgreements: ['Group of Eight', 'PLuS Alliance'],
        featuredPrograms: ['Quantum Computing', 'Energías Renovables', 'Negocios'],
        campusLifeRating: 4.8,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.unsw.edu.au',
        coordinates: [-33.9173, 151.2313]
      }
    ]
  },
  {
    code: 'CHL',
    name: 'Chile',
    flagEmoji: '🇨🇱',
    region: 'Latinoamérica',
    capital: 'Santiago',
    climateSummary: 'Mediterráneo en el centro, desértico al norte y glaciares/fiordos al sur.',
    coordinates: [-35.6751, -71.5430],
    summary: 'Líder en rankings universitarios de América Latina. Excelente economía, paisajes de cordillera imponentes y gran oferta de investigación astronómica y ambiental.',
    tags: ['Latinoamérica', 'Top Rankings LATAM', 'Astronomía', 'Naturaleza Extrema'],
    academic: {
      minGpa: 7.5,
      gpaScale: '0 a 10 (o 5.0/7.0)',
      languages: [
        {
          language: 'Español',
          level: 'B2 / Nativo',
          certificatesAccepted: ['Español Nativo', 'DELE B2']
        }
      ],
      minCompletedCreditsPercent: 40,
      popularFields: ['Astronomía & Astrofísica', 'Minería', 'Economía', 'Ingeniería Sísmica', 'Ecología'],
      notes: 'Excelente destino para estudiantes interesados en ciencias de la tierra, astronomía y finanzas en la región.'
    },
    visa: {
      visaType: 'Visa de Residencia Temporal de Estudiante',
      difficulty: 'Fácil',
      workPermitAllowed: false,
      workHoursPerWeek: 0,
      monthlyProofOfFundsUsd: 500,
      totalFundsRequiredUsd: 3000,
      healthInsuranceRequired: true,
      processingTimeWeeks: '3 - 6 semanas',
      keyDocuments: [
        'Carta de Aceptación Universitaria original',
        'Certificado de solvencia económica notariado',
        'Certificado de antecedentes penales apostillado',
        'Seguro de salud internacional para la duración de la estancia'
      ],
      embassyPortalUrl: 'https://serviciomigraciones.cl',
      tips: [
        'Todo el trámite se realiza de forma digital a través del portal de migraciones de Chile.'
      ]
    },
    cost: {
      currency: 'Peso Chileno (CLP)',
      currencySymbol: 'CLP$',
      exchangeRateToUsd: 0.00105,
      averageMonthlyTotalUsd: 680,
      breakdown: {
        housingUsd: 320,
        foodUsd: 200,
        transportUsd: 40,
        leisureAndPersonalUsd: 120
      },
      studentDiscountAvailability: 'Alta'
    },
    universities: [
      {
        id: 'puc-chile',
        name: 'Pontificia Universidad Católica de Chile (UC)',
        city: 'Santiago',
        state: 'Región Metropolitana de Santiago',
        description: 'Rankeada consistentemente como una de las mejores universidades de Latinoamérica por su excelencia docente y rigurosidad investigativa.',
        countryCode: 'CHL',
        worldRank: 93,
        partnerAgreements: ['CINDA', 'Universitas 21'],
        featuredPrograms: ['Astronomía', 'Economía & Negocios', 'Arquitectura'],
        campusLifeRating: 4.8,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.uc.cl',
        coordinates: [-33.4415, -70.6402]
      },
      {
        id: 'uchile',
        name: 'Universidad de Chile',
        city: 'Santiago',
        state: 'Región Metropolitana de Santiago',
        description: 'La institución pública más antigua de Chile, formadora de presidentes y poetas laureados como Gabriela Mistral y Pablo Neruda.',
        countryCode: 'CHL',
        worldRank: 159,
        partnerAgreements: ['APRU', 'AUGM'],
        featuredPrograms: ['Medicina', 'Ingeniería en Minas', 'Derecho'],
        campusLifeRating: 4.7,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://uchile.cl',
        coordinates: [-33.4439, -70.6508]
      }
    ]
  },
  {
    code: 'MEX',
    name: 'México',
    flagEmoji: '🇲🇽',
    region: 'Latinoamérica',
    capital: 'Ciudad de México',
    climateSummary: 'Cálido y templado, gran diversidad de ecosistemas de montaña a costas caribeñas y pacíficas.',
    coordinates: [23.6345, -102.5528],
    summary: 'Riqueza cultural, gastronómica e histórica legendaria. Instituciones de enorme prestigio internacional y programas de intercambio vibrantes.',
    tags: ['Cultura & Gastronomía', 'Top LATAM', 'Hospitalidad', 'Costo Accesible'],
    academic: {
      minGpa: 8.0,
      gpaScale: '0 a 10',
      languages: [
        {
          language: 'Español',
          level: 'B2 / Nativo',
          certificatesAccepted: ['Español Nativo', 'DELE B2']
        },
        {
          language: 'Inglés',
          level: 'B2 (materias bilingües en Tec de Monterrey / ITAM)',
          certificatesAccepted: ['TOEFL iBT 80+']
        }
      ],
      minCompletedCreditsPercent: 40,
      popularFields: ['Ingeniería y Tecnologías', 'Arqueología & Antropología', 'Negocios & Emprendimiento', 'Medicina'],
      notes: 'Instituciones como el Tecnológico de Monterrey cuentan con decenas de campus modernos en todo el país.'
    },
    visa: {
      visaType: 'Visa de Residente Temporal Estudiante (<180 días solo pasaporte o FMM según país)',
      difficulty: 'Fácil',
      workPermitAllowed: false,
      workHoursPerWeek: 0,
      monthlyProofOfFundsUsd: 550,
      totalFundsRequiredUsd: 3300,
      healthInsuranceRequired: true,
      processingTimeWeeks: '2 - 4 semanas',
      keyDocuments: [
        'Carta de Aceptación oficial de la institución educativa mexicana',
        'Comprobante de solvencia económica o carta de beca',
        'Pasaporte vigente con copia',
        'Fotografías tamaño pasaporte'
      ],
      embassyPortalUrl: 'https://www.gob.mx/sre',
      tips: [
        'Para estancias menores a 180 días, muchas nacionalidades no requieren visa consular previa.'
      ]
    },
    cost: {
      currency: 'Peso Mexicano (MXN)',
      currencySymbol: 'MX$',
      exchangeRateToUsd: 0.052,
      averageMonthlyTotalUsd: 620,
      breakdown: {
        housingUsd: 280,
        foodUsd: 180,
        transportUsd: 35,
        leisureAndPersonalUsd: 125
      },
      studentDiscountAvailability: 'Alta'
    },
    universities: [
      {
        id: 'unam',
        name: 'Universidad Nacional Autónoma de México (UNAM)',
        city: 'Ciudad de México',
        state: 'Distrito Federal',
        description: 'La universidad más grande de Iberoamérica, con su Campus Central declarado Patrimonio de la Humanidad por la UNESCO.',
        countryCode: 'MEX',
        worldRank: 93,
        partnerAgreements: ['UDUAL', 'Red Macro'],
        featuredPrograms: ['Arquitectura', 'Ciencias Sociales', 'Filosofía', 'Ingeniería'],
        campusLifeRating: 4.9,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.unam.mx',
        coordinates: [19.3328, -99.1868]
      },
      {
        id: 'tec-monterrey',
        name: 'Tecnológico de Monterrey (ITESM)',
        city: 'Monterrey',
        state: 'Nuevo León',
        description: 'Líder privado en innovación, emprendimiento y tecnología con el revolucionario modelo educativo Tec21 y campus hipermodernos.',
        countryCode: 'MEX',
        worldRank: 184,
        partnerAgreements: ['APRU', 'Universitas 21'],
        featuredPrograms: ['Emprendimiento', 'Ingeniería en Software', 'Biotecnología', 'Finanzas'],
        campusLifeRating: 5.0,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://tec.mx',
        coordinates: [25.6514, -100.2895]
      }
    ]
  },
  {
    code: 'GBR',
    name: 'Reino Unido',
    flagEmoji: '🇬🇧',
    region: 'Europa',
    capital: 'Londres',
    climateSummary: 'Oceánico templado con cielos frecuentemente nublados e inviernos moderados.',
    coordinates: [55.3781, -3.4360],
    summary: 'Tradición académica centenaria con universidades de renombre universal como Oxford y Cambridge. Vida cultural vibrante y epicentro global de finanzas y artes.',
    tags: ['Russell Group', 'Inglés Nativo', 'Historia & Cultura', 'Visa Student Route'],
    academic: {
      minGpa: 8.5,
      gpaScale: '0 a 10',
      languages: [
        {
          language: 'Inglés',
          level: 'C1 / Avanzado',
          certificatesAccepted: ['IELTS Academic for UKVI 6.5 - 7.0', 'PTE Academic']
        }
      ],
      minCompletedCreditsPercent: 50,
      popularFields: ['Literatura & Humanidades', 'Economía & Finanzas', 'Derecho', 'Computer Science'],
      notes: 'Para estancias cortas (< 6 meses) la visa Standard Visitor permite estudiar sin necesidad de Student Visa formal.'
    },
    visa: {
      visaType: 'Student Visa (para >6 meses) o Standard Visitor (≤6 meses)',
      difficulty: 'Exigente',
      workPermitAllowed: true,
      workHoursPerWeek: 20,
      monthlyProofOfFundsUsd: 1700,
      totalFundsRequiredUsd: 10200,
      healthInsuranceRequired: true,
      processingTimeWeeks: '3 - 6 semanas',
      keyDocuments: [
        'Confirmation of Acceptance for Studies (CAS)',
        'Pago del recargo de salud (Immigration Health Surcharge - IHS)',
        'Prueba de solvencia económica demostrada por min. 28 días consecutivos en cuenta',
        'Certificado de idioma oficial para UKVI'
      ],
      embassyPortalUrl: 'https://www.gov.uk/student-visa',
      tips: [
        'Si vas solo por 1 semestre (menos de 6 meses), la visa Standard Visitor simplifica enormemente los costos.'
      ]
    },
    cost: {
      currency: 'Libra Esterlina (GBP)',
      currencySymbol: '£',
      exchangeRateToUsd: 1.29,
      averageMonthlyTotalUsd: 1600,
      breakdown: {
        housingUsd: 850,
        foodUsd: 380,
        transportUsd: 120,
        leisureAndPersonalUsd: 250
      },
      studentDiscountAvailability: 'Alta'
    },
    universities: [
      {
        id: 'ucl',
        name: 'University College London (UCL)',
        city: 'Londres',
        state: 'Camden',
        description: 'Miembro del selecto grupo Russell y top 10 mundial, pionera en admitir estudiantes sin distinción de credo o género en el centro de Londres.',
        countryCode: 'GBR',
        worldRank: 9,
        partnerAgreements: ['Russell Group', 'Study Abroad Exchange'],
        featuredPrograms: ['Arquitectura (Bartlett)', 'Neurociencias', 'Economía'],
        campusLifeRating: 4.8,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.ucl.ac.uk',
        coordinates: [51.5246, -0.1340]
      },
      {
        id: 'edinburgh',
        name: 'The University of Edinburgh',
        city: 'Edimburgo',
        state: 'Edinburgh',
        description: 'Fundada en 1583, cuna de la Ilustración escocesa y referente mundial en medicina, inteligencia artificial y literatura.',
        countryCode: 'GBR',
        worldRank: 22,
        partnerAgreements: ['Russell Group', 'Coimbra Group'],
        featuredPrograms: ['Informática & IA', 'Filosofía', 'Historia'],
        campusLifeRating: 4.9,
        estimatedTuitionSemesterUsd: 0,
        websiteUrl: 'https://www.ed.ac.uk',
        coordinates: [55.9445, -3.1892]
      }
    ]
  }
];
