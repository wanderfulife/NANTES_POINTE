

// 🚂 ENQUÊTE DÉPLACEMENTS - NANTES
// Survey for understanding mobility patterns in Nantes area

export const templateSurveyQuestions = [
    // POSTE - Survey position (pre-filled by surveyor)
    {
        id: "POSTE",
        text: "Poste d'enquête :",
        type: 'freeText',
        freeTextPlaceholder: "Indiquez votre poste",
        next: "Q1"
    },

    // Q1 - Postal code of departure
    {
        id: "Q1",
        text: "Origine de votre déplacement : pouvez-vous m'indiquer votre code postal de départ",
        type: 'commune',
        next: "Q2"
    },

    // Q2 - One-time or regular trip
    {
        id: "Q2",
        text: "Est-ce un déplacement ponctuel ou régulier ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Ponctuel", next: "Q3" },
            { id: 2, text: "Régulier", next: "Q3" }
        ]
    },

    // Q3 - Travel reason (multiple choice)
    {
        id: "Q3",
        text: "Pourquoi quel motif vous déplacez-vous ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Travail" },
            { id: 2, text: "Loisir" },
            { id: 3, text: "Logement" },
            { id: 4, text: "Services" }
        ],
        next: "Q4"
    },

    // Q4 - Why did you choose to come by car (multiple choice)
    {
        id: "Q4",
        text: "Pourquoi avez-vous choisi de venir en voiture",
        type: 'multipleChoice',
        options: [
            { id: 1, text: "C'est plus pratique" },
            { id: 2, text: "J'ai besoin de ma voiture dans le reste de ma journée / le reste de mon déplacement" },
            { id: 3, text: "Ça me coûte moins cher" },
            { id: 4, text: "Je trouve facilement de la place pour stationner" },
            { id: 5, text: "Je n'ai pas d'alternative vu l'heure où je me déplace" },
            { id: 6, text: "Je n'ai pas d'alternative vu d'où je viens" },
            { id: 7, text: "Autre motif", next_if_selected: "Q4_autre" }
        ],
        next: "Q5"
    },

    {
        id: "Q4_autre",
        text: "Précisez l'autre motif",
        type: 'freeText',
        freeTextPlaceholder: "À renseigner",
        next: "Q5"
    },

    // Q5 - Why did you choose to park here (multiple choice)
    {
        id: "Q5",
        text: "Pourquoi avez-vous choisi de stationner ici ?",
        type: 'multipleChoice',
        options: [
            { id: 1, text: "C'est moins cher" },
            { id: 2, text: "C'est proche de là où je me rends" },
            { id: 3, text: "Il y a toujours de la place" },
            { id: 4, text: "C'est proche de ma correspondance (cf. question suivante sur la poursuite du déplacements)" },
            { id: 5, text: "Autre motif", next_if_selected: "Q5_autre" }
        ],
        next: "Q6"
    },

    {
        id: "Q5_autre",
        text: "Précisez l'autre motif",
        type: 'freeText',
        freeTextPlaceholder: "À renseigner",
        next: "Q6"
    },

    // Q6 - Destination in Nantes (single choice from specific areas)
    {
        id: "Q6",
        text: "Destination de votre déplacement : pouvez-vous m'indiquer dans quelle partie du quartier ou de Nantes vous vous rendez ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Je reste au sein de ce quartier (secteur hangar à bananes, soliliab, Karting)", next: "Q7" },
            { id: 2, text: "Secteur Prairie au Duc", next: "Q7" },
            { id: 3, text: "Secteur École de Design / Machines de l'Île", next: "Q7" },
            { id: 4, text: "Secteur tribunal / École d'architecture", next: "Q7" },
            { id: 5, text: "Dans le reste de l'Île de Nantes, quartier : (nom du quartier)", next: "Q6_quartier" },
            { id: 6, text: "Je descends au Sud de la Loire", next: "Q7" },
            { id: 7, text: "Secteur médiathèque, au nord de la Loire", next: "Q7" },
            { id: 8, text: "Secteur Hôtel Dieu, au nord de la Loire", next: "Q7" },
            { id: 9, text: "Dans le centre-ville de Nantes, au nord de la Loire", next: "Q7" },
            { id: 10, text: "Dans Nantes, mais plus loin que le centre-ville", next: "Q7" },
            { id: 11, text: "Autre motif", next: "Q6_autre" }
        ]
    },

    {
        id: "Q6_quartier",
        text: "Précisez le nom du quartier",
        type: 'freeText',
        freeTextPlaceholder: "À renseigner",
        next: "Q7"
    },

    {
        id: "Q6_autre",
        text: "Précisez l'autre motif",
        type: 'freeText',
        freeTextPlaceholder: "À renseigner",
        next: "Q7"
    },

    // Q7 - How will you continue your journey (single choice)
    {
        id: "Q7",
        text: "Comment poursuivez-vous votre déplacement ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q8" },
            { id: 2, text: "En bus : ligne (numéro à renseigner)", next: "Q7_bus" },
            { id: 3, text: "En tram : ligne (numéro à renseigner)", next: "Q7_tram" },
            { id: 4, text: "En vélos personnels", next: "Q8" },
            { id: 5, text: "Avec un autre engin de déplacements personnels (giroue, trotinette etc.)", next: "Q8" },
            { id: 6, text: "En voiture (covoiturage)", next: "Q8" }
        ]
    },

    {
        id: "Q7_bus",
        text: "Quel numéro de ligne de bus ?",
        type: 'freeText',
        freeTextPlaceholder: "Numéro de ligne",
        next: "Q8"
    },

    {
        id: "Q7_tram",
        text: "Quel numéro de ligne de tram ?",
        type: 'freeText',
        freeTextPlaceholder: "Numéro de ligne",
        next: "Q8"
    },

    // Q8 - If parking was closed, what alternatives (open question)
    {
        id: "Q8",
        text: "Si le parking fermait quelles seraient vos alternatives ?",
        type: 'freeText',
        freeTextPlaceholder: "À renseigner",
        next: "end"
    }
];