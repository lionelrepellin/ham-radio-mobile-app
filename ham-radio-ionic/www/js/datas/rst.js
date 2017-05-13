var rstCode = [
	{
		title: "R = readability",
		description: " Il s'agit d'une évaluation qualitative de la facilité ou de la difficulté éprouvée pour comprendre l'information transmise : distinguer chaque caractère du texte transmis en télégraphie Morse, comprendre correctement chaque mot en téléphonie. La lisibilité se mesure sur une échelle de 1 à 5",
		items: [
			"Incompréhensible",
    		"A peine compréhensible, quelques mots seulement le sont",
			"Compréhensible avec des difficultés considérables",
			"Compréhensible presque sans difficulté",
			"Parfaitement compréhensible"
		]
	},
	{
		title: "S = signal strength",
		description: "Il s'agit d'une évaluation de la puissance du signal reçu. Bien qu'une mesure précise et quantitative pour la force d'un signal soit possible, en pratique les opérateurs évaluent souvent cette valeur de façon qualitative à partir du S-mètre du récepteur. La force se mesure sur une échelle de 1 à 9",
		items: [
			"Signal très lointain, à peine perceptible",
			"Très faible",
			"Faible",
			"Correct",
			"Assez bon",
			"Bon",
			"Assez fort",
			"Fort",
			"Très fort"
		]
	},
	{
		title: "T = tone",
		description: " Il s'agit d'une évaluation de la qualité de la modulation émise, sur une échelle de 1 à 9. Cette valeur n'est utilisée que dans les transmissions numériques ou en Morse, et est omise pour la téléphonie. Cependant, avec les technologies numériques modernes, les imperfections de la modulation sont de plus en plus facilement détectables par les humains",
		items: [
			"60 Hz ou moins, très grossière",
			"Signal alternatif grossier, très irrégulière",
			"Tonalité irrégulière, rectifiée mais pas filtrée",
			"Note irrégulière, quelques traces de filtrage",
			"Signal rectifié et filtré, mais de nombreuses modulations parasites",
			"Tonalité filtrée, des traces de modulations parasites",
			"Tonalité presque pure, des traces de modulations parasites",
			"Tonalité presque parfaite, de légères traces de modulations parasites",
			"Tonalité parfaite, aucune trace de modulation parasite"
		]
	}
];