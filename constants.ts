import { StepData, RegulationPhase } from './types';

export const STEPS: StepData[] = [
  {
    id: 1,
    title: "Verwachtingen verhelderen",
    shortDescription: "Bespreek leeruitkomsten en verwachtingen.",
    phase: RegulationPhase.PREPARATION,
    fullDescription: [
      "Je bespreekt met docenten, medestudenten en begeleiders wat de leeruitkomsten betekenen.",
      "Je maakt helder wat er van je verwacht wordt en welk niveau je moet laten zien."
    ],
    questions: [
      "Waarom zijn deze leeruitkomsten belangrijk voor mijn ontwikkeling?",
      "Hoe kan ik de leeruitkomsten aantonen?",
      "Welk bewijsmateriaal is geschikt?"
    ],
    aiRole: "Ik ben een coach en verhelderaar. Help de student doelen concreet te maken (SMART) en het 'waarom' te begrijpen. Geef geen antwoorden, maar stel vragen over voorkennis en relevantie.",
    aiPromptSuggestions: [
      "Help mij het doel van deze opdracht te begrijpen.",
      "Stel me vragen over mijn voorkennis voor dit onderwerp.",
      "Waarom is deze leeruitkomst nuttig voor mijn toekomstige beroep?"
    ]
  },
  {
    id: 2,
    title: "Plannen maken",
    shortDescription: "Maak een dynamisch leerplan en bepaal je strategie.",
    phase: RegulationPhase.PREPARATION,
    fullDescription: [
      "Je denkt na over hoe je gaat leren, welke activiteiten je onderneemt en met wie.",
      "Dit leg je vast in een dynamisch leerplan, dat je onderweg kunt bijstellen."
    ],
    questions: [
      "Waar sta ik nu ten opzichte van de leeruitkomsten?",
      "Wat ga ik doen om te leren (welke strategie)?",
      "Wie heb ik daarbij nodig?"
    ],
    aiRole: "Ik ben een planner en strateeg. Help de student kiezen tussen strategieën (oefenen, begrijpen, toepassen). Maak structuren, mindmaps of schema's, maar laat de student de inhoud bepalen.",
    aiPromptSuggestions: [
      "Welke leerstrategie past bij het leren van feiten vs. inzicht?",
      "Help me een planning te maken voor de komende 2 weken.",
      "Maak een schema van de stappen die ik moet zetten."
    ]
  },
  {
    id: 3,
    title: "Proberen, oefenen en leren",
    shortDescription: "Voer je plan uit en vraag om feedback.",
    phase: RegulationPhase.EXECUTION,
    fullDescription: [
      "Je voert je leerplan uit: literatuur bestuderen, oefenen, praktijkervaring opdoen.",
      "Je leert van wat goed gaat én van fouten.",
      "Je vraagt en verwerkt feedback."
    ],
    questions: [
      "Wat heb ik geleerd?",
      "Welke feedback heb ik gevraagd en gebruikt?",
      "Past mijn aanpak nog bij mijn leerplan?"
    ],
    aiRole: "Ik ben een interactieve studiepartner en feedbackmachine. Geef 'minimal feedback' (hints, geen oplossingen). Help bij het doorgronden van complexe info door verdiepende vragen te stellen.",
    aiPromptSuggestions: [
      "Ik loop vast met deze theorie, kun je me een hint geven?",
      "Stel me kritische vragen over mijn huidige aanpak.",
      "Simuleer een peer-feedback gesprek over mijn concept."
    ]
  },
  {
    id: 4,
    title: "Leren zichtbaar maken",
    shortDescription: "Verzamel bewijsmateriaal in je portfolio.",
    phase: RegulationPhase.EXECUTION,
    fullDescription: [
      "Je verzamelt materialen in je ontwikkelportfolio (analyses, verslagen, toetsresultaten).",
      "Je laat zien wat je met feedback hebt gedaan."
    ],
    questions: [
      "Laat mijn materiaal zien wat ik geleerd heb?",
      "Past het bij de leeruitkomsten?",
      "Heb ik feedback zichtbaar verwerkt?"
    ],
    aiRole: "Ik ben een denkspiegel. Controleer of de bewijslast logisch is en aansluit bij leerdoelen. Wijs op inconsistenties in redeneringen. Doe het denkwerk niet voor de student.",
    aiPromptSuggestions: [
      "Kijk naar mijn redenering, is deze logisch opgebouwd?",
      "Hoe kan ik beter aantonen dat ik deze feedback heb verwerkt?",
      "Stel me vragen om mijn argumentatie aan te scherpen."
    ]
  },
  {
    id: 5,
    title: "Pas op de plaats maken",
    shortDescription: "Reflecteer op je voortgang en balans.",
    phase: RegulationPhase.REFLECTION,
    fullDescription: [
      "Je reflecteert op waar je staat: hoeveel bewijs heb je verzameld en wat moet er nog gebeuren?",
      "Dit is het moment voor prestatiefeedback (gesprek, pitch, evaluatie)."
    ],
    questions: [
      "Laat mijn portfolio zien waar ik sta?",
      "Voldoet mijn bewijs aan de verwachtingen?",
      "Wat moet ik nog doen om de leeruitkomsten te behalen?"
    ],
    aiRole: "Ik ben een reflectiefacilitator. Stel reflectievragen: 'Wat werkte wel/niet?'. Help bij het maken van een herzieningsplan. Beoordeel niet met cijfers, maar op criteria.",
    aiPromptSuggestions: [
      "Help me reflecteren op wat er de afgelopen weken goed ging.",
      "Welke vragen kan ik verwachten tijdens een evaluatiegesprek?",
      "Ik twijfel of ik genoeg heb gedaan, hoe check ik dit?"
    ]
  },
  {
    id: 6,
    title: "Klaarmaken portfolio voor tentamen",
    shortDescription: "Selecteer en onderbouw je eindbeoordeling.",
    phase: RegulationPhase.REFLECTION,
    fullDescription: [
      "Je selecteert bewijsmateriaal voor je assessmentportfolio.",
      "Je onderbouwt waarom dit aantoont dat je de leeruitkomsten beheerst."
    ],
    questions: [
      "Laat het gekozen materiaal duidelijk zien dat ik de leeruitkomsten beheers?",
      "Voldoet mijn portfolio aan de criteria (bv. VRAAKKT)?",
      "Heb ik verplicht bewijsmateriaal opgenomen?"
    ],
    aiRole: "Ik ben een beoordelingsspiegel. Vergelijk (tekstuele) input met rubrics/criteria. Geef aan welke elementen onderbelicht zijn. Herschrijf niets, maar geef suggesties voor verbetering.",
    aiPromptSuggestions: [
      "Hier is mijn onderbouwing, mist er nog een koppeling met de criteria?",
      "Formuleer drie verbetersuggesties voor mijn reflectieverslag.",
      "Check of mijn portfolio structuur logisch is voor een assessor."
    ]
  }
];