let i = -1;
let time = 600;
let countDown;
let correct;
let scored = [];
let id;

let maths = [
  {
    Question: "What is the result of 2 + 2?",
    correctAnswer: "4",
    options: ["3", "4", "5", "6"],
    selectedAnswer: "",
  },
  {
    Question: "Solve the equation: 3x - 7 = 8",
    correctAnswer: "5",
    options: ["-1", "2", "5", "10"],
    selectedAnswer: "",
  },
  {
    Question: "What is the square root of 25?",
    correctAnswer: "5",
    options: ["3", "5", "7", "10"],
    selectedAnswer: "",
  },
  {
    Question:
      "If a triangle has angles measuring 45°, 45°, and 90°, what type of triangle is it?",
    correctAnswer: "Isosceles right triangle",
    options: [
      "Equilateral triangle",
      "Isosceles right triangle",
      "Scalene triangle",
      "Acute-angled triangle",
    ],
    selectedAnswer: "",
  },
  {
    Question: "What is the value of π (pi) to two decimal places?",
    correctAnswer: "3.14",
    options: ["2.71", "3.14", "4.20", "3.50"],
    selectedAnswer: "",
  },
  {
    Question:
      "If a rectangle has a length of 8 units and a width of 5 units, what is its area?",
    correctAnswer: "40 square units",
    options: [
      "13 square units",
      "30 square units",
      "40 square units",
      "56 square units",
    ],
    selectedAnswer: "",
  },
  {
    Question: "Simplify the expression: 2(3x - 5) + 4x",
    correctAnswer: "10x - 10",
    options: ["8x - 5", "10x - 10", "6x + 5", "12x - 8"],
    selectedAnswer: "",
  },
  {
    Question: "What is the value of 5! (5 factorial)?",
    correctAnswer: "120",
    options: ["24", "60", "120", "240"],
    selectedAnswer: "",
  },
  {
    Question:
      "If a right-angled triangle has legs measuring 6 cm and 8 cm, what is the length of the hypotenuse?",
    correctAnswer: "10 cm",
    options: ["6 cm", "8 cm", "10 cm", "12 cm"],
    selectedAnswer: "",
  },
  {
    Question: "What is the sum of the first 10 positive integers?",
    correctAnswer: "55",
    options: ["45", "50", "55", "60"],
    selectedAnswer: "",
  },
  {
    Question: "If a circle has a radius of 4 units, what is its circumference?",
    correctAnswer: "8π units",
    options: ["4π units", "6π units", "8π units", "10π units"],
    selectedAnswer: "",
  },
  {
    Question: "Solve the equation: 2x + 7 = 15",
    correctAnswer: "4",
    options: ["3", "4", "5", "6"],
    selectedAnswer: "",
  },
  {
    Question: "What is the product of 9 and 7?",
    correctAnswer: "63",
    options: ["49", "54", "63", "72"],
    selectedAnswer: "",
  },
  {
    Question:
      "If a square has a side length of 9 units, what is its perimeter?",
    correctAnswer: "36 units",
    options: ["27 units", "36 units", "45 units", "54 units"],
    selectedAnswer: "",
  },
  {
    Question:
      "If a train travels at a speed of 60 km/h, how far will it travel in 3 hours?",
    correctAnswer: "180 km",
    options: ["120 km", "150 km", "180 km", "210 km"],
    selectedAnswer: "",
  },
  {
    Question: "What is the value of 2^4 (2 raised to the power of 4)?",
    correctAnswer: "16",
    options: ["8", "12", "16", "20"],
    selectedAnswer: "",
  },
  {
    Question:
      "If the sum of three consecutive integers is 63, what are the integers?",
    correctAnswer: "20, 21, 22",
    options: ["18, 19, 20", "20, 21, 22", "22, 23, 24", "24, 25, 26"],
    selectedAnswer: "",
  },
  {
    Question:
      "What is the area of a triangle with a base of 10 units and a height of 8 units?",
    correctAnswer: "40 square units",
    options: [
      "30 square units",
      "35 square units",
      "40 square units",
      "45 square units",
    ],
    selectedAnswer: "",
  },
  {
    Question:
      "If a box contains 15 red balls and 10 blue balls, what is the probability of drawing a red ball?",
    correctAnswer: "3/5",
    options: ["1/3", "2/5", "3/5", "4/7"],
    selectedAnswer: "",
  },
  {
    Question: "What is the value of the square root of 144?",
    correctAnswer: "12",
    options: ["8", "10", "12", "14"],
    selectedAnswer: "",
  },
];

let english = [
  {
    Question: 'Identify the synonym for "excellent".',
    correctAnswer: "Outstanding",
    options: ["Mediocre", "Outstanding", "Terrible", "Average"],
    selectedAnswer: "",
  },
  {
    Question: 'What is the opposite of "bravery"?',
    correctAnswer: "Cowardice",
    options: ["Cowardice", "Daring", "Fearlessness", "Courage"],
    selectedAnswer: "",
  },
  {
    Question: 'Choose the correct spelling: "Embarrass" or "Embarass"?',
    correctAnswer: "Embarrass",
    options: ["Embarrass", "Embarass", "Embaras", "Embaress"],
    selectedAnswer: "",
  },
  {
    Question: 'Identify the plural form of "child".',
    correctAnswer: "Children",
    options: ["Childs", "Children", "Childes", "Childs"],
    selectedAnswer: "",
  },
  {
    Question: 'What is the meaning of the word "ephemeral"?',
    correctAnswer: "Lasting for a short time",
    options: ["Lasting for a short time", "Permanent", "Eternal", "Endless"],
    selectedAnswer: "",
  },
  {
    Question: 'Which word is a synonym for "benevolent"?',
    correctAnswer: "Kind-hearted",
    options: ["Malevolent", "Cruel", "Kind-hearted", "Hostile"],
    selectedAnswer: "",
  },
  {
    Question: 'What is the correct usage: "Their" or "There"?',
    correctAnswer: "Their",
    options: ["Their", "There", "Theyre", "Thier"],
    selectedAnswer: "",
  },
  {
    Question: 'Identify the antonym for "vibrant".',
    correctAnswer: "Dull",
    options: ["Vivid", "Lively", "Dull", "Dynamic"],
    selectedAnswer: "",
  },
  {
    Question: 'Choose the correct form: "Its" or "It′s"?',
    correctAnswer: "Its",
    options: ["Its", "It′s", "Its′", "Ites"],
    selectedAnswer: "",
  },
  {
    Question: 'What is the meaning of the phrase "bite the bullet"?',
    correctAnswer: "To endure a painful experience with courage",
    options: [
      "To avoid a difficult situation",
      "To endure a painful experience",
      "To chew on a bullet",
      "To confront someone aggressively",
    ],
    selectedAnswer: "",
  },
  {
    Question: 'What is the synonym for "eloquent"?',
    correctAnswer: "Articulate",
    options: ["Incoherent", "Verbose", "Articulate", "Mute"],
    selectedAnswer: "",
  },
  {
    Question: 'Choose the correct form: "Whose" or "Who′s"?',
    correctAnswer: "Whose",
    options: ["Who′s", "Whose", "Whos′", "Whoms"],
    selectedAnswer: "",
  },
  {
    Question: 'Identify the plural form of "ox".',
    correctAnswer: "Oxen",
    options: ["Oxes", "Oxen", "Oxi", "Oxs"],
    selectedAnswer: "",
  },
  {
    Question: 'What does the acronym "ST" stand for?',
    correctAnswer: "National Aeronautics and Space Administration",
    options: [
      "Soft Touch",
      "Soft Trivia",
      "Smart Technologies",
      "Stingary Thung",
    ],
    selectedAnswer: "",
  },
  {
    Question: 'Which word is a synonym for "ubiquitous"?',
    correctAnswer: "Widespread",
    options: ["Rare", "Widespread", "Hidden", "Limited"],
    selectedAnswer: "",
  },
  {
    Question: 'What is the correct usage: "Affect" or "Effect"?',
    correctAnswer: "Effect",
    options: ["Affect", "Effect", "Afect", "Effekt"],
    selectedAnswer: "",
  },
  {
    Question: 'Identify the antonym for "diligent".',
    correctAnswer: "Lazy",
    options: ["Diligent", "Industrious", "Lazy", "Active"],
    selectedAnswer: "",
  },
  {
    Question: 'Choose the correct spelling: "Occasion" or "Occassion"?',
    correctAnswer: "Occasion",
    options: ["Occasion", "Occassion", "Ocassion", "Ocasion"],
    selectedAnswer: "",
  },
  {
    Question: 'What is the meaning of the phrase "throw in the towel"?',
    correctAnswer: "To give up or surrender",
    options: [
      "To start a fight",
      "To throw an actual towel",
      "To give up or surrender",
      "To celebrate victory",
    ],
    selectedAnswer: "",
  },
  {
    Question: 'Which word is an antonym for "ambiguous"?',
    correctAnswer: "Clear",
    options: ["Vague", "Uncertain", "Ambiguous", "Clear"],
    selectedAnswer: "",
  },
];

let chem = [
  {
    Question: "How many protons are there in a carbon atom?",
    correctAnswer: "6",
    options: ["4", "6", "8", "12"],
    selectedAnswer: "",
  },
  {
    Question: "What is the formula for water?",
    correctAnswer: "H₂O",
    options: ["CO₂", "H₂O", "CH₄", "O₂"],
    selectedAnswer: "",
  },
  {
    Question: "Which gas makes up the majority of Earth′s atmosphere?",
    correctAnswer: "Nitrogen",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
    selectedAnswer: "",
  },
  {
    Question: "What is the chemical symbol for sodium?",
    correctAnswer: "Na",
    options: ["Ne", "Na", "Ni", "Nu"],
    selectedAnswer: "",
  },
  {
    Question: 'In the periodic table, which element has the symbol "K"?',
    correctAnswer: "Potassium",
    options: ["Krypton", "Kryptonite", "Potassium", "Keratin"],
    selectedAnswer: "",
  },
  {
    Question: "What is the chemical formula for methane?",
    correctAnswer: "CH₄",
    options: ["CO₂", "H₂O", "CH₄", "O₂"],
    selectedAnswer: "",
  },
  {
    Question: "Which acid is found in lemons?",
    correctAnswer: "Citric acid",
    options: [
      "Acetic acid",
      "Citric acid",
      "Sulfuric acid",
      "Hydrochloric acid",
    ],
    selectedAnswer: "",
  },
  {
    Question: "What is the chemical symbol for iron?",
    correctAnswer: "Fe",
    options: ["Au", "Fe", "Ag", "Cu"],
    selectedAnswer: "",
  },
  {
    Question: "How many electrons does a neutral oxygen atom have?",
    correctAnswer: "8",
    options: ["6", "8", "10", "12"],
    selectedAnswer: "",
  },
  {
    Question:
      "What is the process of converting a solid directly to a gas without passing through the liquid state called?",
    correctAnswer: "Sublimation",
    options: ["Evaporation", "Condensation", "Sublimation", "Fusion"],
    selectedAnswer: "",
  },
  {
    Question: "Which noble gas is commonly used in balloons for lifting?",
    correctAnswer: "Helium",
    options: ["Argon", "Neon", "Krypton", "Helium"],
    selectedAnswer: "",
  },
  {
    Question: "What is the chemical formula for table salt?",
    correctAnswer: "NaCl",
    options: ["NaOH", "HCl", "Na₂CO₃", "NaCl"],
    selectedAnswer: "",
  },
  {
    Question: "What is the pH scale used to measure?",
    correctAnswer: "Acidity or alkalinity",
    options: ["Temperature", "Pressure", "Weight", "Acidity or alkalinity"],
    selectedAnswer: "",
  },
  {
    Question: "Which gas is responsible for the greenhouse effect?",
    correctAnswer: "Carbon dioxide",
    options: ["Oxygen", "Methane", "Carbon dioxide", "Nitrous oxide"],
    selectedAnswer: "",
  },
  {
    Question: "What is the chemical formula for hydrogen peroxide?",
    correctAnswer: "H₂O₂",
    options: ["H₂O", "HO", "H₂O₂", "O₂"],
    selectedAnswer: "",
  },
  {
    Question: "What is the lightest element?",
    correctAnswer: "Hydrogen",
    options: ["Helium", "Lithium", "Hydrogen", "Oxygen"],
    selectedAnswer: "",
  },
  {
    Question: "What is the chemical formular for lead?",
    correctAnswer: "Pb",
    options: ["Pb", "Au", "H", "Ag"],
    selectedAnswer: "",
  },
  {
    Question: "What is the process of converting a gas to a liquid called?",
    correctAnswer: "Condensation",
    options: ["Evaporation", "Condensation", "Sublimation", "Solidification"],
    selectedAnswer: "",
  },
  {
    Question: "In the periodic table, what is the symbol for oxygen?",
    correctAnswer: "O",
    options: ["O", "Om", "Os", "Oi"],
    selectedAnswer: "",
  },
  {
    Question: "Which gas is responsible for the greenhouse effect?",
    correctAnswer: "Carbon Dioxide (CO2)",
    options: [
      "Methane (CH4)",
      "Carbon Dioxide (CO2)",
      "Nitrous Oxide (N2O)",
      "Oxygen (O2)",
    ],
    selectedAnswer: "",
  },
];

let phy = [
  {
    Question: "What is the formula for calculating force?",
    correctAnswer: "Force = Mass × Acceleration",
    options: [
      "Force = Mass × Distance",
      "Force = Speed × Time",
      "Force = Mass × Acceleration",
      "Force = Energy / Time",
    ],
    selectedAnswer: "",
  },
  {
    Question: "What unit is used to measure electric resistance?",
    correctAnswer: "Ohm",
    options: ["Ampere", "Volt", "Ohm", "Watt"],
    selectedAnswer: "",
  },
  {
    Question: 'In physics, what does the acronym "AC" stand for?',
    correctAnswer: "Alternating Current",
    options: [
      "Alternating Current",
      "Amperage Control",
      "Absolute Charge",
      "Atomic Configuration",
    ],
    selectedAnswer: "",
  },
  {
    Question: "What is the SI unit for measuring frequency?",
    correctAnswer: "Hertz (Hz)",
    options: ["Watt (W)", "Joule (J)", "Hertz (Hz)", "Coulomb (C)"],
    selectedAnswer: "",
  },
  {
    Question:
      "What law states that every action has an equal and opposite reaction?",
    correctAnswer: "Newton′s Third Law of Motion",
    options: [
      "Newton′s Law of Gravitation",
      "Newton′s Second Law of Motion",
      "Einstein′s Theory of Relativity",
      "Newton′s Third Law of Motion",
    ],
    selectedAnswer: "",
  },
  {
    Question: "Which type of wave does not require a medium to propagate?",
    correctAnswer: "Electromagnetic wave",
    options: ["Sound wave", "Light wave", "Electromagnetic wave", "Water wave"],
    selectedAnswer: "",
  },
  {
    Question: "What is the formula for calculating kinetic energy?",
    correctAnswer: "0.5 × Mass × Velocity^2",
    options: [
      "Mass × Velocity",
      "0.5 × Mass × Velocity^2",
      "Mass × Acceleration",
      "Force × Distance",
    ],
    selectedAnswer: "",
  },
  {
    Question: "What is the law of conservation of energy?",
    correctAnswer: "can‛t be builed or broken, but converted",
    options: [
      "can be created and destroyed at will.",
      "constant in the universe.",
      "can‛t be builed or broken, but converted",
      "only conserved in closed systems.",
    ],
    selectedAnswer: "",
  },
  {
    Question: "What is the speed of light in a vacuum?",
    correctAnswer: "3.00 x 10^8 m/s",
    options: [
      "1.00 x 10^8 m/s",
      "2.50 x 10^8 m/s",
      "3.00 x 10^8 m/s",
      "4.50 x 10^8 m/s",
    ],
    selectedAnswer: "",
  },
  {
    Question: "What is the unit of measurement for electric charge?",
    correctAnswer: "Coulomb (C)",
    options: [
      "Watt-hour (Wh)",
      "Ampere-hour (Ah)",
      "Coulomb (C)",
      "Volt-ampere (VA)",
    ],
    selectedAnswer: "",
  },
  {
    Question:
      "What is the formula for calculating gravitational potential energy?",
    correctAnswer: "Mass × Gravity × Height",
    options: [
      "Mass × Height",
      "Mass × Gravity",
      "Mass × Gravity × Height",
      "Mass × Velocity^2",
    ],
    selectedAnswer: "",
  },
  {
    Question: "What is the unit of measurement for magnetic flux?",
    correctAnswer: "Weber (Wb)",
    options: ["Tesla (T)", "Ampere (A)", "Ohm (Ω)", "Weber (Wb)"],
    selectedAnswer: "",
  },
  {
    Question:
      "What law describes the relationship between the current, voltage, and resistance in an electrical circuit?",
    correctAnswer: "Ohm′s Law",
    options: [
      "Newton′s Law of Motion",
      "Faraday′s Law of Induction",
      "Ohm′s Law",
      "Coulomb′s Law",
    ],
    selectedAnswer: "",
  },
  {
    Question:
      "What is the phenomenon where a wave changes direction upon entering a new medium at an angle?",
    correctAnswer: "Refraction",
    options: ["Reflection", "Refraction", "Diffraction", "Interference"],
    selectedAnswer: "",
  },
  {
    Question: "What is the unit of measurement for power?",
    correctAnswer: "Watt (W)",
    options: ["Joule (J)", "Ampere (A)", "Watt (W)", "Volt (V)"],
    selectedAnswer: "",
  },
  {
    Question:
      "What is the principle behind a transformer in an electrical circuit?",
    correctAnswer: "Electromagnetic Induction",
    options: [
      "Photoelectric Effect",
      "Electrostatic Discharge",
      "Nuclear Fusion",
      "Electromagnetic Induction",
    ],
    selectedAnswer: "",
  },
  {
    Question:
      "Which law states that the pressure of a gas is inversely proportional to its volume at constant temperature?",
    correctAnswer: "Boyle′s Law",
    options: [
      "Avogadro′s Law",
      "Charles′s Law",
      "Boyle′s Law",
      "Gay-Lussac′s Law",
    ],
    selectedAnswer: "",
  },
  {
    Question: "What is the unit of measurement for frequency?",
    correctAnswer: "Hertz (Hz)",
    options: ["Watt (W)", "Joule (J)", "Hertz (Hz)", "Kilogram (Kg)"],
    selectedAnswer: "",
  },
  {
    Question:
      "What is the relationship between wavelength and frequency in a wave?",
    correctAnswer: "Inverse relationship: c = λν",
    options: [
      "Direct relationship: c = λν",
      "Inverse relationship: c = λ/ν",
      "Direct relationship: c = λ/ν",
      "Inverse relationship: c = λν",
    ],
    selectedAnswer: "",
  },
  {
    Question: "What is the formula for calculating work in physics?",
    correctAnswer: "Work = Force × Distance × cos(θ)",
    options: [
      "Work = Force × Distance",
      "Work = Mass × Acceleration",
      "Work = Force × Distance × sin(θ)",
      "Work = Force × Distance × cos(θ)",
    ],
    selectedAnswer: "",
  },
];

let philosophy = [
  {
    Question: "Who is considered the father of Western philosophy?",
    correctAnswer: "Thales of Miletus",
    options: ["Socrates", "Plato", "Aristotle", "Thales of Miletus"],
    selectedAnswer: "",
  },
  {
    Question:
      "What is the famous philosophical question posed by René Descartes?",
    correctAnswer: "I think, therefore I am",
    options: [
      "What is the meaning of life?",
      "I think, therefore I am",
      "Who am I?",
      "Why is there something than nothing?",
    ],
    selectedAnswer: "",
  },
  {
    Question:
      'Who wrote "The Leviathan" and is known for his social contract theory?',
    correctAnswer: "Thomas Hobbes",
    options: [
      "John Locke",
      "Thomas Hobbes",
      "Jean-Jacques Rousseau",
      "Immanuel Kant",
    ],
    selectedAnswer: "",
  },
  {
    Question: "What is the central concept in existentialist philosophy?",
    correctAnswer: "Existence precedes essence",
    options: [
      "Essence precedes existence",
      "Existence precedes essence",
      "Reality is an illusion",
      "Life is meaningless",
    ],
    selectedAnswer: "",
  },
  {
    Question:
      'Who proposed the idea of the "categorical imperative" in ethics?',
    correctAnswer: "Immanuel Kant",
    options: [
      "Søren Kierkegaard",
      "Friedrich Nietzsche",
      "Jean-Paul Sartre",
      "Immanuel Kant",
    ],
    selectedAnswer: "",
  },
  {
    Question:
      "According to utilitarianism, what is the foundation of morality?",
    correctAnswer: "Greatest joy for the greatest number",
    options: [
      "Individual rights",
      "Greatest joy for the greatest number",
      "Social contract",
      "Divine command",
    ],
    selectedAnswer: "",
  },
  {
    Question: 'Who is known for the concept of the "Übermensch" or "Overman"?',
    correctAnswer: "Friedrich Nietzsche",
    options: [
      "Jean-Paul Sartre",
      "Friedrich Nietzsche",
      "Albert Camus",
      "Martin Heidegger",
    ],
    selectedAnswer: "",
  },
  {
    Question: "What is the primary focus of epistemology?",
    correctAnswer: "The study of knowledge",
    options: [
      "The study of reality",
      "The study of ethics",
      "The study of language",
      "The study of knowledge",
    ],
    selectedAnswer: "",
  },
  {
    Question:
      "What is the famous thought experiment called where a cat can be both alive and dead simultaneously?",
    correctAnswer: "Schrödinger′s Cat",
    options: [
      "Descartes′ Demon",
      "Hume′s Fork",
      "Kant′s Dilemma",
      "Schrödinger′s Cat",
    ],
    selectedAnswer: "",
  },
  {
    Question:
      'Who wrote "Being and Time" and is a key figure in existentialist philosophy?',
    correctAnswer: "Martin Heidegger",
    options: ["Sartre", "Camus", "Heidegger", "Kierkegaard"],
    selectedAnswer: "",
  },
];
let biology = [
  {
    Question:
      "What is the basic structural and functional unit of all living organisms?",
    correctAnswer: "Cell",
    options: ["Tissue", "Organ", "Cell", "Organism"],
    selectedAnswer: "",
  },
  {
    Question: "Which molecule stores genetic information in cells?",
    correctAnswer: "DNA (Deoxyribonucleic Acid)",
    options: [
      "RNA (Ribonucleic Acid)",
      "ATP (Adenosine Triphosphate)",
      "DNA (Deoxyribonucleic Acid)",
      "Protein",
    ],
    selectedAnswer: "",
  },
  {
    Question: "What process allows plants to convert sunlight into energy?",
    correctAnswer: "Photosynthesis",
    options: ["Cellular respiration", "Photosynthesis", "Mitosis", "Meiosis"],
    selectedAnswer: "",
  },
  {
    Question: "What is the largest organ in the human body?",
    correctAnswer: "Skin",
    options: ["Heart", "Brain", "Liver", "Skin"],
    selectedAnswer: "",
  },
  {
    Question: "Which gas is exchanged during respiration in humans?",
    correctAnswer: "Oxygen (O2)",
    options: [
      "Carbon Dioxide (CO2)",
      "Oxygen (O2)",
      "Nitrogen (N2)",
      "Hydrogen (H2)",
    ],
    selectedAnswer: "",
  },
  {
    Question: "What is the function of the mitochondria in a cell?",
    correctAnswer: "Energy production (ATP synthesis)",
    options: [
      "Protein synthesis",
      "Energy production (ATP synthesis)",
      "Storage of genetic information",
      "Cell structure support",
    ],
    selectedAnswer: "",
  },
  {
    Question:
      "What is the process by which a single parent produces offspring genetically identical to itself?",
    correctAnswer: "Asexual reproduction",
    options: [
      "Sexual reproduction",
      "Asexual reproduction",
      "Mitosis",
      "Meiosis",
    ],
    selectedAnswer: "",
  },
  {
    Question: "What is the role of chlorophyll in plant cells?",
    correctAnswer: "Capturing sunlight for photosynthesis",
    options: [
      "Storing nutrients",
      "Capturing sunlight for photosynthesis",
      "Breaking down glucose",
      "Facilitating cell division",
    ],
    selectedAnswer: "",
  },
  {
    Question: "Which organelle is responsible for protein synthesis in a cell?",
    correctAnswer: "Ribosome",
    options: [
      "Endoplasmic reticulum",
      "Mitochondria",
      "Ribosome",
      "Golgi apparatus",
    ],
    selectedAnswer: "",
  },
  {
    Question: "What is the function of red blood cells in the human body?",
    correctAnswer: "Transporting oxygen",
    options: [
      "Fighting infections",
      "Transporting nutrients",
      "Producing antibodies",
      "Transporting oxygen",
    ],
    selectedAnswer: "",
  },
];

let literature = [
  {
    Question: 'Who wrote "Romeo and Juliet"?',
    correctAnswer: "William Shakespeare",
    options: [
      "Jane Austen",
      "Charles Dickens",
      "Mark Twain",
      "William Shakespeare",
    ],
    selectedAnswer: "",
  },
  {
    Question:
      "Which novel features the characters Holden Caulfield and Phoebe?",
    correctAnswer: "The Catcher in the Rye",
    options: [
      "To Kill a Mockingbird",
      "The Great Gatsby",
      "The Catcher in the Rye",
      "1984",
    ],
    selectedAnswer: "",
  },
  {
    Question: 'Who wrote "Pride and Prejudice"?',
    correctAnswer: "Jane Austen",
    options: [
      "Charlotte Brontë",
      "Jane Austen",
      "Emily Brontë",
      "Thomas Hardy",
    ],
    selectedAnswer: "",
  },
  {
    Question:
      'In George Orwell′s "Animal Farm," what do the pigs Napoleon and Snowball represent?',
    correctAnswer: "Joseph Stalin and Leon Trotsky",
    options: [
      "George  and Thomas ",
      "Joseph Stalin and Leon Trotsky",
      "Adolf Hitler and Winston Churchill",
      "Mao Zedong and Sun Yat-sen",
    ],
    selectedAnswer: "",
  },
  {
    Question: "Which play by Arthur Miller is based on the Salem witch trials?",
    correctAnswer: "The Crucible",
    options: [
      "Death of a Salesman",
      "The Glass Menagerie",
      "The Crucible",
      "A Streetcar Named Desire",
    ],
    selectedAnswer: "",
  },
  {
    Question: 'Who wrote the epic poem "The Odyssey"?',
    correctAnswer: "Homer",
    options: ["Virgil", "Homer", "Ovid", "Sophocles"],
    selectedAnswer: "",
  },
  {
    Question:
      "Which dystopian novel explores the consequences of government surveillance and censorship?",
    correctAnswer: "1984",
    options: ["Fahrenheit 451", "Brave New World", "1984", "The Hunger Games"],
    selectedAnswer: "",
  },
  {
    Question: 'Who wrote the play "Hamlet"?',
    correctAnswer: "William Shakespeare",
    options: [
      "Christopher Marlowe",
      "Ben Jonson",
      "William Shakespeare",
      "John Webster",
    ],
    selectedAnswer: "",
  },
  {
    Question:
      "Which novel follows the journey of Santiago, a shepherd boy, in search of a treasure?",
    correctAnswer: "The Alchemist",
    options: [
      "The Alchemist",
      "One Hundred Years of Solitude",
      "Love in the Time of Cholera",
      "Chronicle of a Death Foretold",
    ],
    selectedAnswer: "",
  },
  {
    Question: 'Who is the author of "The Great Gatsby"?',
    correctAnswer: "F. Scott Fitzgerald",
    options: [
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
      "John Steinbeck",
      "Virginia Woolf",
    ],
    selectedAnswer: "",
  },
];

let questionArray = [];

function subject(message) {
  selectsubject.hidden = true;
  startpage.hidden = false;
  if (message == "Math") {
    questionArray = maths;
  }
  if (message == "English") {
    questionArray = english;
  }
  if (message == "Chemistry") {
    questionArray = chem;
  }
  if (message == "Physics") {
    questionArray = phy;
  }
  if (message == "Philosophy") {
    questionArray = philosophy;
  }
  if (message == "Biology") {
    questionArray = biology;
  }
  if (message == "Literature") {
    questionArray = literature;
  }
}

function COUNT() {
  countDown = setInterval(() => {
    timer.innerHTML = time + "s";
    time--;
    if (time == 0) {
      continueToSubmit();
      questionpage.hidden = true;
    }
  }, 1000);
}

function ne() {
  quest.innerHTML = questionArray[i].Question;
  number.innerHTML = i + 1;
  let data = questionArray[i];
  opt.innerHTML = "";
  questionArray[i].options.forEach((el, i) => {
    id = `item${i}`;
    opt.innerHTML += `<li><input type="radio" name="me" onchange="handleAnswer('${el}')" ${
      data.selectedAnswer == el ? "checked" : ""
    } id='${id}'><label for="${id}">${el}</label></li>            
            `;
  });
}
function startQuiz() {
  startpage.hidden = true;
  questionpage.hidden = false;
  i++;
  ne();
  COUNT();
}

function control(message) {
  if (message == "next") {
    if (i < questionArray.length - 1) {
      i++;
      ne();
    }
  } else {
    if (i > 0) {
      i--;
      ne();
    }
  }
}

function submit() {
  let review = questionArray.filter((el) => {
    return el.selectedAnswer == "";
  });
  if (review.length > 0) {
    missed.innerHTML = review.length;
    clearInterval(countDown);
    questionpage.hidden = true;
    promptPage.hidden = false;
  } else {
    continueToSubmit("yes");
    questionpage.hidden = true;
  }
}

function b2m() {
  finishpage.style.display = "none";
  startpage.style.display = "block";
  i = -1;
  time = 600;
}

function handleAnswer(message) {
  questionArray[i].selectedAnswer = message;
}

function continueToSubmit(message) {
  if (message == "yes") {
    promptPage.hidden = true;
    submitpages.hidden = false;
    let result = questionArray.filter((el) => {
      return el.correctAnswer == el.selectedAnswer;
    });
    displayscore.innerHTML =
      Math.floor((result.length / questionArray.length) * 100) + "%";
    i = -1;
    time = 600;
    questionArray.forEach((el) => {
      el.selectedAnswer = "";
    });
  } else {
    promptPage.hidden = true;
    questionpage.hidden = false;
    COUNT();
  }
}

function proceed() {
  submitpages.hidden = true;
  selectsubject.hidden = false;
}
