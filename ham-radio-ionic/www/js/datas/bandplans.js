// var _2200m = {
//   "label": 2200,
//   "frequencies": [
//     {
//       "start": 100,
//       "end": 200,
//       "modeId": 2,
//       "purpose": [
//         {
//           "start": null,
//           "end": null,
//           "note": ""
//         }
//       ]
//     }
//   ],
//   "psk31": null,
//   "jt9": null,
//   "jt65": null,
//   "qrp": [],
//   "qrss": null,
//   "sstv": null,
//   "uft": null,
//   "emergency": null,
//   "digitalVoice": null,
//   "contests": [],
//   "status": null,
//   "remarks": null
// };


var _2200m = {
  "label": "2200m",
  "frequencies": [
    {
      "start": 135.7,
      "end": 137.8,
      "modeId": 2,
      "purpose": [
        {
          "start": null,
          "end": null,
          "note": "CW, QRSS et Modes Digitaux à bande étroite"
        }
      ]
    }
  ],
  "psk31": null,
  "jt9": null,
  "jt65": null,
  "wspr": [],
  "qrp": [],
  "qrss": null,
  "sstv": null,
  "uft": null,
  "emergency": null,
  "digitalVoice": null,
  "contests": [],
  "status": "Conformément à la recommandation CEPT / ERC / T / R 62-01, l'utilisation par le service amateur est limité à la bande 135,7 - 137,8 kHz (P.A.R. ≤ 1 Watt)",
  "remarks": [
      "Aucun plan de bande rigide n'est proposé pour le 136 kHz, mais il est recommandé aux utilisateurs la nécessité d'éviter toute interférence avec l'utilisateur primaire, particulièrement dans les pays suivants où l'activité radioamateur n'est pas autorisée: Algérie, Egypte, Iran, Iraq, Libye, Liban, Syrie, Soudan et Tunisie. Il est demandé aux radioamateurs de donner la priorité aux communications longue distance et aux expérimentations. Lorsque cela est possible les longs tests ou expérimentations devraient être placés près des limites de bande. (WRC-07 et Cavtat 2008)"
  ]
};

var _630m = {
  "label": "630m",
  "frequencies": [
    {
      "start": 472,
      "end": 475,
      "modeId": 1,
      "purpose": []
    },
    {
      "start": 475,
      "end": 479,
      "modeId": 2,
      "purpose": []
    }
  ],
  "psk31": null,
  "jt9": null,
  "jt65": null,
  "wspr": [],
  "qrp": [],
  "qrss": null,
  "sstv": null,
  "uft": null,
  "emergency": null,
  "digitalVoice": null,
  "contests": [],
  "status": "P.A.R. ≤ 1 Watt – Statut secondaire)",
  "remarks": [
      "Le service radioamateur ne doit pas être utilisé dans ces pays: Algérie, Arabie saoudite, Azerbaïdjan, Bahreïn, Biélorussie, Chine, Comores, Djibouti, Égypte, Émirats arabes unis, Russie, Irak, Jordanie, Kazakhstan, Koweït, Liban, Libye, Mauritanie, Oman, Ouzbékistan, Qatar, Syrie, Kirghizistan, Somalie, Soudan, Tunisie et Yémen; car l'utilisation de la bande comprise de 415 kHz à 526,5 kHz est exclusive aux services maritime et aéronautique. Cette bande est utilisable pour le trafic radio régional par onde de sol, utilisable pour les radiocommunications (sur terre jusqu'à environ 200 km) indépendamment de l'ionosphère ou (des perturbations de l'ionosphère). Cette bande est utilisable pour le trafic radio interrégional lorsqu’il fait nuit entre le lieu d’émission et de réception. Cette bande est utilisable pour les systèmes de transmission par le sol des radiocommunications en milieu souterrain, utilisé en spéléologie, en particulier pour les opérations de secours. (source Wikipedia)"
  ]
};

var _160m = {
  "label": "160m",
  "frequencies": [
    {
      "start": 1810,
      "end": 1838,
      "modeId": 1,
      "purpose": []
    },
    {
      "start": 1838,
      "end": 1840,
      "modeId": 3,
      "purpose": []
    },
    {
      "start": 1840,
      "end": 1850,
      "modeId": 4,
      "purpose": [
        {
          "start": 1840,
          "end": 1843,
          "note": "Digimodes"
        }
      ]
    }
  ],
  "psk31": 1838,
  "jt9": 1838,
  "jt65": 1838,
  "wspr": [1836.6, 1838 - 1838.2],
  "qrp": [
    {
      "frequency": 1836,
      "modeId": 1
    }
  ],
  "qrss": null,
  "sstv": null,
  "uft": 1835,
  "emergency": null,
  "digitalVoice": null,
  "contests": [],
  "status": "1,810 - 1,850 MHz Bande attribuée en exclusivité au service d'amateur, avec une catégorie de service primaire (Articles RR 415 et 419) Références : NOR : PRM X 99 03390A",
  "remarks": [
      "Les pays qui ont une attribution SSB seulement en dessous de 1,840 MHz peuvent continuer à l'utiliser, mais leurs sociétés nationales sont priées de se mettre en rapport avec leurs administrations afin d'ajuster les allocations « Phone » selon le plan des bandes IARU Région 1 (Davos 2005)"
    ]
};

var _80m = {
  "label": "80m",
  "frequencies": [
    {
      "start": 3500,
      "end": 3580,
      "modeId": 1,
      "purpose": [
        {
          "start": 3500,
          "end": 3510,
          "note": "Priorité pour liaisons intercontinentales"
        }
      ]
    },
    {
      "start": 3580,
      "end": 3600,
      "modeId": 3,
      "purpose": [
        {
          "start": 3580,
          "end": 3590,
          "note": "Digimodes"
        },
        {
          "start": 3590,
          "end": 3600,
          "note": "Digimodes, stations automatiques numériques"
        }
      ]
    },
    {
      "start": 3600,
      "end": 3800,
      "modeId": 4,
      "purpose": [
        {
          "start": 3600,
          "end": 3620,
          "note": "Digimodes, stations automatiques numériques"
        },
        {
          "start": 3775,
          "end": 3800,
          "note": "Priorité pour liaisons intercontinentales"
        }
      ]
    }
  ],
  "psk31": 3580,
  "jt9": 3578,
  "jt65": 3576,
  "wspr": [3592.6, 3594, 3594.2],
  "qrp": [
    {
      "frequency": 3560,
      "modeId": 1
    },
    {
      "frequency": 3690,
      "modeId": 9
    }
  ],
  "qrss": 3555,
  "sstv": 3735,
  "uft": 3545,
  "emergency": 3760,
  "digitalVoice": 3630,
  "contests": [
    {
      "start": 3510,
      "end": 3560,
      "modeId": 1
    },
    {
      "start": 3600,
      "end": 3650,
      "modeId": 9
    },
    {
      "start": 3700,
      "end": 3800,
      "modeId": 9
    }
  ],
  "status": "3,500 - 3,750 MHz : Bande partagée avec d'autres services de radiocommunications primaire, service d'amateur à égalité de droits (Article RR 346)<br /> 3,750 - 3,800 MHz : Bande partagée avec d'autres services de radiocommunications primaire, service d'amateur à égalité de droits (Article RR 346) <br/>Références : NOR : PRM X 99 03390A",
  "remarks": [
      "Les liaisons intercontinentales devraient être prioritaires dans les segments 3,500 – 3,510 et 3,775 – 3,800 MHz.",
      "Les segments concours ne devraient pas inclure les segments 3,500 – 3,510 et 3,775 – 3,800 MHz qui sont réservés aux liaisons intercontinentales même s’il n’y a pas de trafic DX en cours.",
      "Les sociétés membres sont autorisées à instaurer d’autres limites pour les segments concours lors des championnats nationaux à l’intérieur de ceux recommandés par le plan de bande HF IARU Région 1.",
      "Le segment 3,510 – 3,600 MHz peut être utilisé pour les balises automatiques ARDF (CW A1A) (Recommandation DV05_C4_Rec_12).",
      "Les sociétés membres devraient se mettre en rapport avec leurs autorités de télécommunications pour leur demander de ne pas attribuer à d’autres utilisateurs les fréquences assignées au trafic intercontinental dans le plan des bandes HF IARU Région 1."
    ]
};

/* pas de fréquence clairement définie pour le PSK31 sur 40m */
var _40m = {
  "label": "40m",
  "frequencies": [
    {
      "start": 7000,
      "end": 7040,
      "modeId": 1,
      "purpose": []
    },
    {
      "start": 7040,
      "end": 7050,
      "modeId": 3,
      "purpose": [
        {
          "start": 7040,
          "end": 7047,
          "note": "Digimodes"
        },
        {
          "start": 7047,
          "end": 7050,
          "note": "Digimodes, stations automatiques numériques"
        }
      ]
    },
    {
      "start": 7050,
      "end": 7200,
      "modeId": 4,
      "purpose": [
        {
          "start": 7050,
          "end": 7053,
          "note": "Digimodes, stations automatiques numériques"
        },
        {
          "start": 7053,
          "end": 7060,
          "note": "Digimodes"
        },
        {
          "start": 7175,
          "end": 7200,
          "note": "Priorité pour les liaisons intercontinentales"
        }
      ]
    }
  ],
  "psk31": 7070,
  "jt9": 7078,
  "jt65": 7039,
  "wspr": [7038.6, 7040, 7040.2],
  "qrp": [
    {
      "frequency": 7030,
      "modeId": 1
    },
    {
      "frequency": 7090,
      "modeId": 9
    }
  ],
  "qrss": null,
  "sstv": 7165,
  "uft": 7013,
  "emergency": 7110,
  "digitalVoice": 7070,
  "contests": [
    {
      "start": 7060,
      "end": 7100,
      "modeId": 9
    },
    {
      "start": 7130,
      "end": 7200,
      "modeId": 9
    }
  ],
  "status": "Bande attribuée en exclusivité au service d'amateur, avec une catégorie de service primaire (Articles RR415 et 419). Références : NOR : PRM X 99 03390A",
  "remarks": [ 
      "Le segment 7,000 - 7,025, préféré concours CW, a été supprimé lors de la conférence de Sun City (Août 2011)."
    ]
};

var _30m = {
  "label": "30m",
  "frequencies": [
    {
      "start": 10100,
      "end": 10140,
      "modeId": 1,
      "purpose": []
    },
    {
      "start": 10140,
      "end": 10150,
      "modeId": 3,
      "purpose": [
        {
          "start": 10140,
          "end": 10150,
          "note": "Digimodes"
        }
      ]
    }
  ],
  "psk31": 10140,
  "jt9": 10140,
  "jt65": 10139,
  "wspr": [10138.7, 10140.1, 10140.3],
  "qrp": [
    {
      "frequency": 10106,
      "modeId": 1
    },
    {
      "frequency": 10116,
      "modeId": 1
    }
  ],
  "qrss": null,
  "sstv": null,
  "uft": 10135,
  "emergency": null,
  "digitalVoice": null,
  "contests": [],
  "status": "10,100 - 10,150 MHz Bande partagée avec d'autres services de radiocommunication primaires ou secondaires : Services d'amateurs avec une catégorie de service secondaire (Articles RR 417, 421, 422, 423). Références : NOR : PRM X 99 03390A",
  "remarks": [
      "En France métropolitaine (et hémisphère Nord), PAS de téléphonie dans la bande 30m",
      "La SSB peut être utilisée pour des urgences relevant de la sécurité immédiate de la vie ou de la propriété et uniquement par des stations réellement impliquées dans ces communications d'urgence.",
      "Sur la bande 10 MHz, il ne peut pas y avoir de diffusion de bulletin d'information dans aucun mode que ce soit."
    ]
};

var _20m = {
  "label": "20m",
  "frequencies": [
    {
      "start": 14000,
      "end": 14070,
      "modeId": 1,
      "purpose": []
    },
    {
      "start": 14070,
      "end": 14099,
      "modeId": 3,
      "purpose": [
        {
          "start": 14070,
          "end": 14089,
          "note": "Digimodes"
        },
        {
          "start": 14089,
          "end": 14099,
          "note": "Digimodes, stations automatiques numériques"
        }
      ]
    },
    {
      "start": 14099,
      "end": 14101,
      "modeId": 6,
      "purpose": []
    },
    {
      "start": 14101,
      "end": 14350,
      "modeId": 4,
      "purpose": [
        {
          "start": 14101,
          "end": 14112,
          "note": "Digimodes, stations automatiques numériques"
        },
        {
          "start": 14190,
          "end": 14200,
          "note": "Prioritaire pour expéditions DX"
        }
      ]
    }
  ],
  "psk31": 14070,
  "jt9": 14078,
  "jt65": 14076,
  "wspr": [14095.6, 14097, 14097.2],
  "qrp": [
    {
      "frequency": 14060,
      "modeId": 1
    },
    {
      "frequency": 14285,
      "modeId": 9
    }
  ],
  "qrss": 14055,
  "sstv": 14230,
  "uft": 14045,
  "emergency": 14300,
  "digitalVoice": 14130,
  "contests": [
    {
      "start": 14000,
      "end": 14060,
      "modeId": 1
    },
    {
      "start": 14125,
      "end": 14300,
      "modeId": 9
    }
  ],
  "status": "14,000 - 14,250 MHz Bande attribuée en exclusivité au service d'amateur, avec une catégorie de service primaire (Articles RR 415 et 419)<br/>14,250 -14,350 MHz Bande attribuée en exclusivité au service d'amateur, avec une catégorie de service primaire (Articles RR 415 et 419). Références : NOR : PRM X 99 03390A",
  "remarks": null
};


var _17m = {
  "label": "17m",
  "frequencies": [
    {
      "start": 18068,
      "end": 18095,
      "modeId": 1,
      "purpose": []
    },
    {
      "start": 18095,
      "end": 18109,
      "modeId": 3,
      "purpose": [
        {
          "start": 18095,
          "end": 18105,
          "note": "Digimodes"
        },
        {
          "start": 18105,
          "end": 18109,
          "note": "Digimodes, stations automatiques numériques"
        }
      ]
    },
    {
      "start": 18109,
      "end": 18111,
      "modeId": 6,
      "purpose": []
    },
    {
      "start": 18111,
      "end": 18168,
      "modeId": 4,
      "purpose": [
        {
          "start": 18111,
          "end": 18120,
          "note": "Digimodes, stations automatiques numériques"
        }
      ]
    }
  ],
  "psk31": 18100,
  "jt9": 18104,
  "jt65": 18102,
  "wspr": [18104.6, 18106, 18106.2],
  "qrp": [
    {
      "frequency": 18086,
      "modeId": 1
    },
    {
      "frequency": 18130,
      "modeId": 9
    }
  ],
  "qrss": null,
  "sstv": null,
  "uft": 18083,
  "emergency": 18160,
  "digitalVoice": 18150,
  "contests": [],
  "status": "18,068 - 18,168 MHz Bande attribuée en exclusivité au service d'amateur, avec une catégorie de service primaire (Article RR 415 et 419). Références : NOR : PRM X 99 03390A",
  "remarks": null
};


var _15m = {
  "label": "15m",
  "frequencies": [
    {
      "start": 21000,
      "end": 21070,
      "modeId": 1,
      "purpose": []
    },
    {
      "start": 21070,
      "end": 21110,
      "modeId": 3,
      "purpose": [
        {
          "start": 21070,
          "end": 21090,
          "note": "Digimodes"
        },
        {
          "start": 21090,
          "end": 21110,
          "note": "Digimodes, stations automatiques numériques"
        }
      ]
    },
    {
      "start": 21110,
      "end": 21120,
      "modeId": 5,
      "purpose": [
        {
          "start": 21110,
          "end": 21120,
          "note": "Digimodes, stations automatiques numériques"
        }
      ]
    },
    {
      "start": 21120,
      "end": 21149,
      "modeId": 3,
      "purpose": []
    },
    {
      "start": 21149,
      "end": 21151,
      "modeId": 6,
      "purpose": []
    },
    {
      "start": 21151,
      "end": 21450,
      "modeId": 4,
      "purpose": []
    }
  ],
  "psk31": 21070,
  "jt9": 21078,
  "jt65": 21076,
  "wspr": [21094.6, 21096, 21096.2],
  "qrp": [
    {
      "frequency": 21060,
      "modeId": 1
    },
    {
      "frequency": 21285,
      "modeId": 9
    }
  ],
  "qrss": 21055,
  "sstv": 21340,
  "uft": 21045,
  "emergency": 21360,
  "digitalVoice": 21180,
  "contests": [],
  "status": "21,000 - 21,450 MHz Bande attribuée en exclusivité au service d'amateur, avec une catégorie de service primaire (Articles RR 415 et 419.) Références : NOR : PRM X 99 03390A",
  "remarks": null
};


var _12m = {
  "label": "12m",
  "frequencies": [
    {
      "start": 24890,
      "end": 24915,
      "modeId": 1,
      "purpose": []
    },
    {
      "start": 24915,
      "end": 24929,
      "modeId": 3,
      "purpose": [
        {
          "start": 24915,
          "end": 24925,
          "note": "Digimodes"
        },
        {
          "start": 24925,
          "end": 24929,
          "note": "Digimodes, stations automatiques numériques"
        }
      ]
    },
    {
      "start": 24929,
      "end": 24931,
      "modeId": 6,
      "purpose": []
    },
    {
      "start": 24931,
      "end": 24990,
      "modeId": 4,
      "purpose": [
        {
          "start": 24931,
          "end": 24940,
          "note": "Digimodes, stations automatiques numériques"
        }
      ]
    }
  ],
  "psk31": 24920,
  "jt9": 24919,
  "jt65": 24917,
  "wspr": [24924.6, 24926, 24926.2],
  "qrp": [
    {
      "frequency": 24906,
      "modeId": 1
    },
    {
      "frequency": 24950,
      "modeId": 9
    }
  ],
  "qrss": null,
  "sstv": null,
  "uft": 24903,
  "emergency": null,
  "digitalVoice": 24960,
  "contests": [],
  "status": "24,890 - 24,990 MHz Bande attribuée en exclusivité au service d'amateur, avec une catégorie de service primaire (Articles RR 415 et 419). Références : NOR : PRM X 99 03390A",
  "remarks": null
};

/* manque le 29.600 - Fréquence d’appel FM et 29.610 - Simplex FM pour relais perroquet => mode 'une fréquence' */
var _10m = {
  "label": "10m",
  "frequencies": [
    {
      "start": 28000,
      "end": 28070,
      "modeId": 1,
      "purpose": []
    },
    {
      "start": 28070,
      "end": 28190,
      "modeId": 3,
      "purpose": [
        {
          "start": 28070,
          "end": 28120,
          "note": "Digimodes"
        },
        {
          "start": 28120,
          "end": 28150,
          "note": "Digimodes, stations automatiques numériques"
        }
      ]
    },
    {
      "start": 28190,
      "end": 28225,
      "modeId": 6,
      "purpose": [
        {
          "start": 28190,
          "end": 28199,
          "note": "Balises régionales en temps partagé"
        },
        {
          "start": 28199,
          "end": 28201,
          "note": "Balises internationales en temps partagé"
        },
        {
          "start": 28201,
          "end": 28225,
          "note": "Balises en service continu"
        }
      ]
    },
    {
      "start": 28225,
      "end": 29000,
      "modeId": 4,
      "purpose": [
        {
          "start": 28225,
          "end": 28300,
          "note": "Balises"
        },
        {
          "start": 28300,
          "end": 28320,
          "note": "Digimodes, stations automatiques numériques"
        }
      ]
    },
    {
      "start": 29000,
      "end": 29510,
      "modeId": 7,
      "purpose": [
        {
          "start": 29000,
          "end": 29100,
          "note": "BP max. augmentée de 2700 Hz à 6000 Hz"
        },
        {
          "start": 29100,
          "end": 29200,
          "note": "Simplex FM - Canaux espacés de 10kHz"
        },
        {
          "start": 29200,
          "end": 29300,
          "note": "Digimodes, stations automatiques numériques"
        },
        {
          "start": 29300,
          "end": 29510,
          "note": "Levée de la restriction liaison satellite descendante"
        }
      ]
    },
    {
      "start": 29510,
      "end": 29520,
      "modeId": 8,
      "purpose": []
    },
    {
      "start": 29520,
      "end": 29700,
      "modeId": 7,
      "purpose": [
        {
          "start": 29520,
          "end": 29590,
          "note": "Entrée relais FM (RH1-RH8)"
        },
        {
          "start": 29620,
          "end": 29700,
          "note": "Sortie relais FM (RH1 -RH8)"
        }
      ]
    }
  ],
  "psk31": 28120,
  "jt9": 28078,
  "jt65": 28076,
  "wspr": [28124.6,	28126, 28126.2],
  "qrp": [
    {
      "frequency": 28060,
      "modeId": 1
    },
    {
      "frequency": 28360,
      "modeId": 9
    }
  ],
  "qrss": 28055,
  "sstv": 28680,
  "uft": 28045,
  "emergency": null,
  "digitalVoice": 28330,
  "contests": [],
  "status": "28,000 - 29,700 MHz Bande attribuée en exclusivité au service d'amateur, avec une catégorie de service primaire (Articles RR 415 et 419) Références : NOR : PRM X 99 03390A",
  "remarks": [ 
      "Les sociétés membres devraient informer les opérateurs de ne pas transmettre entre 29,300 et 29,510 MHz pour éviter les interférences avec le trafic satellite descendant.",
      "L’utilisation de la NBFM devrait être pratiquée sur les fréquences de 29,110 à 29,290 au pas de 10 kHz, avec excursion de ± 2,5 kHz et 2,5 kHz maximum comme fréquence modulante."
      ]
};

/*
"id": 1, "label": "CW", "bandwidth": 200,
"id": 2, "label": "CW et Digimodes", "bandwidth": 200,
"id": 3, "label": "Modes bandes étroites", "bandwidth": 500,
"id": 4, "label": "Tous modes", "bandwidth": 2700,
"id": 5, "label": "Tous modes (sauf SSB)", "bandwidth": 2700,
"id": 6, "label": "IBP - International Beacon Project", "bandwidth": null,
"id": 7, "label": "Tous modes", "bandwidth": 6000,
"id": 8, "label": "Bande de garde", "bandwidth": null,
"id": 9, "label": "SSB", "bandwidth": 2700,
"id": 10, "label": "Télégraphie exclusive", "bandwidth": 500,
"id": 11, "label": "SSB - Télégraphie", "bandwidth": 2700,
"id": 12, "label": "MGM bande étroire Télégraphie", "bandwidth": 2700,
"id": 13, "label": "MGM - Télégraphie", "bandwidth": 1000,
"id": 14, "label": "Tous modes", "bandwidth": 12000,
*/

var _6m = {
  "label": "6m",
  "frequencies": [
    {
      "start": 50000,
      "end": 50100,
      "modeId": 2,
      "purpose": [
        {
          "start": null,
          "end": null,
          "note": ""
        }
      ]
    }
  ],
  "psk31": 50290,
  "jt9": null,
  "jt65": 50276,
  "wspr": [50293, 50294.4, 50294.6],
  "qrp": [
    {
      "frequency": 50096,
      "modeId": 1
    },
    {
      "frequency": 50185,
      "modeId": 9
    }
  ],
  "qrss": null,
  "sstv": null,
  "uft": 50085,
  "emergency": null,
  "digitalVoice": null,
  "contests": [],
  "status": null,
  "remarks": null
};


var _2m = {
    "label": "2m",
    "frequencies": [
      {
          "start": 50000,
          "end": 50100,
          "modeId": 2,
          "purpose": [
            {
                "start": null,
                "end": null,
                "note": ""
            }
          ]
      }
    ],
    "psk31": null,
    "jt9": null,
    "jt65": null,
    "wspr": [144488.5, 144489.9, 144490.1],
    "qrp": [],
    "qrss": null,
    "sstv": null,
    "uft": 144045,
    "emergency": null,
    "digitalVoice": null,
    "contests": [],
    "status": null,
    "remarks": null
};


// fréquences UFT pour le 2m !
// http://www.uft.net/pages/Vigie/Vigie_UFT.php?lng=fr&tconfig=0

var bandplan = {
  "bands": [
      _2200m,
      _630m,
      _160m,
      _80m,
      _40m,
      _30m,
      _20m,
      _17m,
      _15m,
      _12m,
      _10m,
      _6m,
      _2m
    ],
  "modes": [
    {
      "id": 1,
      "label": "CW",
      "bandwidth": 200,
      "background": "#ff3333",
      "visible": true
    },
    {
      "id": 2,
      "label": "CW et Digimodes",
      "bandwidth": 200,
      "background": "#FFFF55",
      "visible": true
    },
    {
      "id": 3,
      "label": "Modes bandes étroites",
      "bandwidth": 500,
      "background": "#FFFF00",
      "visible": true
    },
    {
      "id": 4,
      "label": "Tous modes",
      "bandwidth": 2700,
      "background": "#00CC00",
      "visible": true
    },
    {
      "id": 5,
      "label": "Tous modes (sauf SSB)",
      "bandwidth": 2700,
      "background": "#ffa31a",
      "visible": true
    },
    {
      "id": 6,
      "label": "IBP - International Beacon Project",
      "bandwidth": null,
      "background": "#A6A6A6",
      "visible": true
    },
    {
      "id": 7,
      "label": "Tous modes",
      "bandwidth": 6000,
      "background": "#3385ff",
      "visible": true
    },
    {
      "id": 8,
      "label": "Bande de garde",
      "bandwidth": null,
      "background": "#00FF55",
      "visible": false
    },
    {
      "id": 9,
      "label": "SSB",
      "bandwidth": 2700,
      "background": "#00FF55",
      "visible": false
    },
    {
      "id": 10,
      "label": "Télégraphie exclusive",
      "bandwidth": 500,
      "background": "#00DD99",
      "visible": false
    },
    {
      "id": 11,
      "label": "SSB - Télégraphie",
      "bandwidth": 2700,
      "background": "#99AA00",
      "visible": false
    },
    {
      "id": 12,
      "label": "MGM bande étroire Télégraphie",
      "bandwidth": 2700,
      "background": "#FF9900",
      "visible": false
    },
    {
      "id": 13,
      "label": "MGM - Télégraphie",
      "bandwidth": 1000,
      "background": "#999900",
      "visible": false
    },
    {
      "id": 14,
      "label": "Tous modes",
      "bandwidth": 12000,
      "background": "#99FFFF",
      "visible": false
    }

  ],
  "bandplans": [
    {
      "label": "LF",
      "longLabel": "Basse Fréquence",
      "start":  30,
      "end": 300
    },
    {
      "label": "MF",
      "longLabel": "Moyenne Fréquence",
      "start": 300,
      "end": 3000
    },
    {
      "label": "HF",
      "longLabel": "Haute Fréquence",
      "start": 3000,
      "end": 30000
    },
    {
      "label": "VHF",
      "longLabel": "Très Haute Fréquence",
      "start": 30000,
      "end": 300000
    },
    {
      "label": "UHF",
      "longLabel": "Ultra Haute Fréquence",
      "start": 300000,
      "end": 3000000
    },
    {
      "label": "SHF",
      "longLabel": "Super Haute Fréquence",
      "start": 3000000,
      "end": 30000000
    },
    {
      "label": "EHF",
      "longLabel": "Extrêmement Haute Fréquence",
      "start": 30000000,
      "end": 300000000
    }
  ]
};