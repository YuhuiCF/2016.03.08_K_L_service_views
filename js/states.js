
var states = {
// Static states:
//  'LASTSTATE'
//  'END'


// Kategorie 0
    'category0': {
        viewType: 'radioSelectionWithBlockDescription',
        configs: {
            question: 'Wählen Sie Ihre Serviceleistung',
            answers: [
                {
                    answer: 'Karosserieteile & Glas',
                    description: 'Lassen Sie Kratzer, Dellen, Steinschläge oder Glasschäden vom Fachmann reparieren oder einzelne Karosserieteile erneuern.',
                    nextStateId: 'components'
                },
                {
                    answer: 'Fahrzeug komplett',
                    description: 'Lassen Sie Ihr komplettes Fahrzeug polieren, größere Hagelschäden reparieren oder Ihr Fahrzeug neu lackieren',
                    nextStateId: 'vehicle.complete.type'
                },
                {
                    answer: 'Unfallschaden',
                    description: 'Bei größeren Schäden begutachten unsere Experten Ihren Schaden und unterbreiten Ihnen ein konkretes Angebot.<br>Finden Sie Ihren Experten und vereinbaren Sie online einen Termin zur Begutachtung. Sollte Ihr Fahrzeug nicht mehr fahrbereit sein, dann kommen wir auch gerne zu Ihnen.',
                    //nextStateId: 'window.glas.type'
                }
            ]
        }
    },


// Bauteile
    'components': {
        viewType: 'radioSelectionWithImg',
        configs: {
            question: 'Für welcher Bauteil suchen Sie einen Service?',
            img: {
                file: 'CarPlan.jpg',
                height: 150
            },
            answers: [
                {
                    answer: 'Kotflügel (Landing Page)',
                    nextStateId: 'fender.position.type',
                    newWindow: true
                },
                {
                    answer: 'Scheiben und Glas (Landing Page)',
                    nextStateId: 'window.glas.type',
                    newWindow: true
                },
                {
                    answer: 'Außenspiegel links',
                    nextStateId: 'mirror.left.type'
                },
                {
                    answer: 'Außenspiegel rechts',
                    nextStateId: 'mirror.right.type'
                },
                {
                    answer: 'Fahrzeugdach',
                    nextStateId: 'roof.type'
                },
                {
                    answer: 'Frontscheibe',
                    nextStateId: 'windshield.type'
                },
                {
                    answer: 'Heckscheibe wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450250',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Kotflügel vorne links',
                    nextStateId: 'fender.front.left.type'
                },
                {
                    answer: 'Kotflügel vorne rechts',
                    nextStateId: 'fender.front.right.type'
                },
                {
                    answer: 'Kotflügel (Seitenwand) hinten links',
                    nextStateId: 'fender.rear.left.type'
                },
                {
                    answer: 'Kotflügel (Seitenwand) hinten rechts',
                    nextStateId: 'fender.rear.right.type'
                },
                {
                    answer: 'Motorhaube',
                    nextStateId: 'hood.type'
                },
                {
                    answer: 'Nebelscheinwerfer vorne links wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-409871 (Nebelscheinwerfer komplett vorne links wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Nebelscheinwerfer vorne rechts wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-409872 (Nebelscheinwerfer komplett vorne rechts wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Scheinwerfer vorne links wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407548 (Scheinwerfer komplett vorne links wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Scheinwerfer vorne rechts wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407549 (Scheinwerfer komplett vorne rechts wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Seitenscheiben, Dreieckscheiben, Seitenfenster links',
                    nextStateId: 'sidewindow.replace.type'
                },
                {
                    answer: 'Stoßfänger / Stoßstange',
                    nextStateId: 'bumper.type'
                }
            ]
        }
    },


// Fahrzeug komplett
    'vehicle.complete.type': {
        viewType: 'radioSelectionWithBlockDescription',
        configs: {
            question: 'Das Fahrzeug braucht Untersuchungen',
            answers: [
                {
                    useConstants: [
                        {
                            useKey: 'answer.lacquer',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.lacquer',
                            forKey: 'description'
                        }
                    ],
                    //nextStateId: 'mirror.left.type'
                },
                {
                    answer: 'Polieren',
                    //nextStateId: 'mirror.right.type'
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.haildamage',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.haildamage',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'vehicle.haildamage.type'
                }
            ]
        }
    },


// Außenspiegel
    'mirror.quick.type': {
        viewType: 'radioSelection',
        configs: {
            question: 'Was möchten Sie mit Ihrem Außenspiegel machen?',
            answers: [
                {
                    answer: 'Außenspiegel links ist defekt',
                    nextStateId: 'mirror.left.type'
                },
                {
                    answer: 'Außenspiegel rechts ist defekt',
                    nextStateId: 'mirror.right.type'
                },
                {
                    answer: 'Beide komplett wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450284 (Außenspiegel beide komplett wechseln)',
                    calcParams: ['Repaircode E']
                }
            ]
        }
    },
    'mirror.type': {
        viewType: 'radioSelectionWithBlockDescription',
        configs: {
            question: {
                'mirror.left.type': 'Was möchten Sie mit Ihrem Außenspiegel (links) machen?',
                'mirror.right.type': 'Was möchten Sie mit Ihrem Außenspiegel (rechts) machen?'
            },
            isTemplate: true,
            answers: [
                {
                    answer: 'Glas tauschen',
                    description: 'Eine kostengünstige Alternative zum Tausch des kompletten Seitenspiegels ist der Austausch des Glases.',
                    nextStateId: {
                        'mirror.left.type': 'mirror.left.glas.replace.type',
                        'mirror.right.type': 'mirror.right.glas.replace.type'
                    }
                },
                {
                    answer: 'Kratzer, Steinschlag reparieren',
                    description: 'Kleine Beschädigungen lassen sich oft reparieren, indem die Beschädigungen beseitigt werden und der Spiegel neu lackiert wird. Eine fachgerecht instandgesetzter Seitenspiegel sieht aus wie neu.',
                    nextStateId: 'END',
                    serviceCode: {
                        'mirror.left.type': 'mirror.left.scratch.rockfall.repair',
                        'mirror.right.type': 'mirror.right.scratch.rockfall.repair'
                    },
                    calcParams: ['Repaircode M', 'Lackstufe 1', 'Metallic 2 Schicht']
                },
                {
                    answer: 'Außenspiegel ersetzen',
                    description: 'Ist das Gehäuse des Spiegels stark beschädigt und unter Umständen sogar gebrochen, hilft nur noch der Austausch gegen ein Neuteil.',
                    nextStateId: 'END',
                    serviceCode: {
                        'mirror.left.type': 'service-id-450268 (Außenspiegel links komplett wechseln)',
                        'mirror.right.type': 'service-id-450269 (Außenspiegel rechts komplett wechseln)'
                    },
                    calcParams: ['Repaircode E']
                }
            ]
        }
    },
    'mirror.left.type': {
        useTemplate: 'mirror.type'
    },
    'mirror.right.type': {
        useTemplate: 'mirror.type'
    },

    'mirror.glas.replace': {
        viewType: 'radioSelection',
        configs: {
            question: 'Wählen Sie bitte einen Service:',
            isTemplate: true,
            answers: [
                {
                    answer: {
                        'mirror.left.glas.replace.type': 'Glas Außenspiegel links wechseln',
                        'mirror.right.glas.replace.type': 'Glas Außenspiegel rechts wechseln'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'mirror.left.glas.replace.type': 'service-id-95663 (Glas Außenspiegel links wechseln)',
                        'mirror.right.glas.replace.type': 'service-id-95641 (Glas Außenspiegel rechts wechseln)'
                    },
                    calcParams: ['Repaircode E']
                },
                {
                    answer: {
                        'mirror.left.glas.replace.type': 'Glas Außenspiegel links (Weitwinkel) wechseln',
                        'mirror.right.glas.replace.type': 'Glas Außenspiegel rechts (Weitwinkel) wechseln'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'mirror.left.glas.replace.type': 'service-id-345091 (Glas Außenspiegel links (Weitwinkel) wechseln)',
                        'mirror.right.glas.replace.type': 'service-id-355773 (Glas Außenspiegel rechts (Weitwinkel) wechseln)'
                    },
                    calcParams: ['Repaircode E']
                }
            ]
        }
    },
    'mirror.left.glas.replace.type': {
        useTemplate: 'mirror.glas.replace'
    },
    'mirror.right.glas.replace.type': {
        useTemplate: 'mirror.glas.replace'
    },


// Dellen
    'dent.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Bitte geben Sie genauere Beschreibungen der Dellen:',
            isTemplate: true,
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl Dellen: ',
                    defaultValue: '1'
                },
                {
                    type: 'dropdown',
                    answer: 'Größe der Dellen:',
                    options: [
                        {value: '20 mm'},
                        {value: '30 mm'},
                        {value: '40 mm'},
                        {value: '50 mm'},
                        {value: 'etwa 100 mm'},
                        {value: 'etwa 200 mm'}
                    ],
                    defaultValue: '30 mm',
                }
            ],
            nextStateId: 'END',
            serviceCode: {
                'bumper.dent.type': 'bumper.dent.repair',
                'fender.front.right.dent.type': 'fender.front.right.dent.repair',
                'fender.front.left.dent.type': 'fender.front.left.dent.repair',
                'fender.rear.right.dent.type': 'fender.rear.right.dent.repair',
                'fender.rear.left.dent.type': 'fender.rear.left.dent.repair',
                'hood.dent.type': 'hood.dent.repair',
                'roof.dent.type': 'roof.dent.repair',
                'sill.left.dent.type': 'sill.left.dent.repair',
                'sill.right.dent.type': 'sill.right.dent.repair'
            },
            calcParams: ['Repaircode I', 'Zeit aus Ausbeulhilfe', 'Lackstufe 2 (bis 50%)', 'Metallic 2 Schicht']
        }
    },
    'bumper.dent.type': {
        useTemplate: 'dent.type'
    },
    'fender.front.right.dent.type': {
        useTemplate: 'dent.type'
    },
    'fender.front.left.dent.type': {
        useTemplate: 'dent.type'
    },
    'fender.rear.right.dent.type': {
        useTemplate: 'dent.type'
    },
    'fender.rear.left.dent.type': {
        useTemplate: 'dent.type'
    },
    'hood.dent.type': {
        useTemplate: 'dent.type'
    },
    'roof.dent.type': {
        useTemplate: 'dent.type'
    },
    'sill.left.dent.type': {
        useTemplate: 'dent.type'
    },
    'sill.right.dent.type': {
        useTemplate: 'dent.type'
    },


// Fahrzeugdach
    'roof.type': {
        viewType: 'radioSelectionWithBlockDescription',
        configs: {
            question: 'Welcher Service suchen Sie für Ihr Fahrzeugdach?',
            answers: [
                {
                    useConstants: [
                        {
                            useKey: 'answer.dent.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.dent.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'roof.dent.type'
                },
                {
                    answer: 'Kratzer reparieren',
                    nextStateId: 'roof.scratch.type'
                },
                {
                    answer: 'Steinschlag reparieren',
                    nextStateId: 'roof.rockfall.type'
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.lacquer',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.lacquer',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'END',
                    serviceCode: 'roof.lacquer',
                    calcParams: ['Repaircode L', 'Lackstufe 1', 'Metallic 2 Schicht', 'Oberflächenlackierungstufe 1']
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.haildamage',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.haildamage',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'roof.haildamage.type',
                }
            ]
        }
    },
    'roof.rockfall.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Bitte geben Sie genauere Beschreibungen des Steinschlags:',
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl Steinschlag: ',
                    defaultValue: '1'
                }
            ],
            nextStateId: 'END',
            serviceCode: 'roof.rockfall.repair',
            calcParams: ['Repaircode I', 'Zeit aus Ausbeulhilfe', 'Lackstufe 2 (bis 50%)', 'Metallic 2 Schicht']
        }
    },

// Frontscheibe
    'windshield.type': {
        pageTitle: 'Frontscheibe Service View',
        viewType: 'radioSelectionWithBlockDescription',
        configs: {
            question: 'Was möchten Sie mit Ihrer Frontscheibe machen?',
            answers: [
                {
                    answer: 'Scheibe reparieren',
                    description: 'Die Reparatur der Frontscheibe ist günstiger und geht schneller, als der Austausch. Allerdings können Schäden nur dann repariert werden, wenn sie nicht im Sichtfeld des Fahrers liegen oder im Randbereich der Scheibe. Repariert werden können oberflächliche Steinschläge und kleine Risse bis maximal 2,5 cm Länge.  Zudem dürfen maximal 2 Steinschläge repariert werden, danach bleibt nur noch der Tausch der Scheibe.',
                    nextStateId: 'windshield.repair.type'
                },
                {
                    answer: 'Scheibenversieglung',
                    description: 'Die Scheibe wird gereinigt und mit einer Nano-Politur versiegelt, danke Lotus-Effekt haftet weniger Schmutz an der Scheibe und das Wasser perlt besser ab.',
                    nextStateId: 'END',
                    serviceCode: 'windshield.sealing',
                    calcParams: ['Festpreis']
                },
                {
                    answer: 'Austausch der Scheibe',
                    description: 'Ist eine Reparatur nicht mehr möglich, muss die alte Scheibe fachgerecht herausgetrennt und nach einer gründlichen Reinigung die Neue eingebaut werden. Hierzu verwenden unsere Fachwerkstätten nur hochwertige Scheiben und Hochleistungsklebstoff.',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407537 (Frontscheibe wechseln)',
                    calcParams: ['Repaircode E']
                }
            ]
        }
    },
    'windshield.repair.type': {
        viewType: 'radioSelection',
        configs: {
            question: 'Haben Sie Loch oder Riss auf der Frontscheibe?',
            answers: [
                {
                    answer: 'Loch',
                    nextStateId: 'windshield.repair.hole.position'
                },
                {
                    answer: 'Riss',
                    nextStateId: 'windshield.advise.replace'
                }
            ]
        }
    },
    'windshield.repair.hole.position': {
        viewType: 'radioSelectionWithImg',
        configs: {
            question: 'Befindet sich wenichstens ein Loch im roten Bereich?',
            img: {
                file: 'frontscheibe-wechseln-noetig.jpg'
            },
            answers: [
                {
                    answer: 'Ja',
                    nextStateId: 'windshield.advise.replace'
                },
                {
                    answer: 'Nein',
                    nextStateId: 'END',
                    serviceCode: 'windshield.repair',
                    calcParams: ['Festpreis je Steinschlag']
                }
            ]
        }
    },
    'windshield.advise.replace': {
        viewType: 'adviseSelection',
        configs: {
            question: 'Wir empfehlen Ihnen die Frontscheibe zu wechseln',
            answers: [
                {
                    answer: 'Akzeptieren',
                    nextStateId: 'END',
                    serviceCode: 'windshield.replace',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Zurück',
                    nextStateId: 'LASTSTATE'
                }
            ]
        }
    },

// Hagelschaden
    'haildamage.type': {
        viewType: 'radioSelection',
        configs: {
            question: 'Haben Sie Dellen ab 20 mm?',
            isTemplate: true,
            answers: [
                {
                    answer: 'Ja',
                    nextStateId: {
                        'vehicle.haildamage.type': 'vehicle.haildamage.severe.type',
                        'roof.haildamage.type': 'roof.haildamage.severe.type'
                    }
                },
                {
                    answer: 'Nein',
                    nextStateId: {
                        'vehicle.haildamage.type': 'vehicle.haildamage.minor.type',
                        'roof.haildamage.type': 'roof.haildamage.minor.type'
                    }
                },
            ]
        }
    },
    'vehicle.haildamage.type': {
        useTemplate: 'haildamage.type'
    },
    'roof.haildamage.type': {
        useTemplate: 'haildamage.type'
    },

    'haildamage.damage.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Bitte geben Sie die Anzahl der Dellen:',
            isTemplate: true,
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl Dellen: ',
                    defaultValue: '1'
                }
            ],
            nextStateId: 'END',
            serviceCode: {
                'vehicle.haildamage.severe.type': 'vehicle.haildamage.severe',
                'roof.haildamage.severe.type': 'roof.haildamage.severe',
                'vehicle.haildamage.minor.type': 'vehicle.haildamage.minor',
                'roof.haildamage.minor.type': 'roof.haildamage.minor',
            },
            calcParams: {
                'vehicle.haildamage.severe.type': ['D (nur Drücken)', 'Methode 2', 'Anzahl Dellen', 'Dellengröße'],
                'roof.haildamage.severe.type': ['D (nur Drücken)', 'Methode 2', 'Anzahl Dellen', 'Dellengröße'],
                'default': ['DVL (Vordrücken, Lackieren)', 'Lackstufe 3 (über 50%)', 'Anzahl Dellen']
            }
        }
    },
    'vehicle.haildamage.severe.type': {
        useTemplate: 'haildamage.damage.type'
    },
    'roof.haildamage.severe.type': {
        useTemplate: 'haildamage.damage.type'
    },
    'vehicle.haildamage.minor.type': {
        useTemplate: 'haildamage.damage.type'
    },
    'roof.haildamage.minor.type': {
        useTemplate: 'haildamage.damage.type'
    },


// Kotflügel
    'fender.front.type': {
        pageTitle: 'Kotflügel Service View',
        viewType: 'radioSelectionWithBlockDescription',
        configs: {
            isTemplate: true,
            question: {
                'fender.front.right.type': 'Was möchten Sie mit Ihrem Kotflügel (vorne rechts) machen?',
                'fender.front.left.type': 'Was möchten Sie mit Ihrem Kotflügel (vorne links) machen?'
            },
            answers: [
                {
                    useConstants: [
                        {
                            useKey: 'answer.spotrepair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.spotrepair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: {
                        'fender.front.right.type': 'fender.front.right.spotrepair.type',
                        'fender.front.left.type': 'fender.front.left.spotrepair.type'
                    }
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.dent.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.dent.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: {
                        'fender.front.right.type': 'fender.front.right.dent.type',
                        'fender.front.left.type': 'fender.front.left.dent.type'
                    }
                },
                {
                    answer: 'Kratzer reparieren',
                    description: 'Kratzer Lorem Ipsum',
                    nextStateId: {
                        'fender.front.right.type': 'fender.front.right.scratch.type',
                        'fender.front.left.type': 'fender.front.left.scratch.type',
                    }
                },
                {
                    answer: 'Oberflächenrost entfernen',
                    description: 'Oberflächenrost Lorem Ipsum',
                    nextStateId: {
                        'fender.front.right.type': 'fender.front.right.rust.type',
                        'fender.front.left.type': 'fender.front.left.rust.type',
                    }
                },
                {
                    answer: 'Steinschlag reparieren',
                    description: 'Steinschlag Lorem Ipsum',
                    nextStateId: {
                        'fender.front.right.type': 'fender.front.right.rockfall.type',
                        'fender.front.left.type': 'fender.front.left.rockfall.type',
                    }
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.lacquer',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.lacquer',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'END',
                    serviceCode: {
                        'fender.front.right.type': 'fender.front.right.lacquer.complete',
                        'fender.front.left.type': 'fender.front.left.lacquer.complete'
                    },
                    calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.replace',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.replace',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'END',
                    serviceCode: {
                        'fender.front.right.type': 'service-id-450271 (Kotflügel komplett vorne rechts wechseln)',
                        'fender.front.left.type': 'service-id-450270 (Kotflügel komplett vorne links wechseln)'
                    },
                    calcParams: ['Repaircode E', 'Lackstufe 4 (Neuteil)', 'Metallic 2 Schicht']
                }
            ]
        }
    },
    'fender.rear.type': {
        pageTitle: 'Kotflügel Service View',
        viewType: 'radioSelectionWithBlockDescription',
        configs: {
            isTemplate: true,
            question: {
                'fender.rear.right.type': 'Was möchten Sie mit Ihrem Kotflügel (Seitenwand) hinten rechts machen?',
                'fender.rear.left.type': 'Was möchten Sie mit Ihrem Kotflügel (Seitenwand) hinten links machen?'
            },
            answers: [
                {
                    useConstants: [
                        {
                            useKey: 'answer.dent.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.dent.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: {
                        'fender.rear.right.type': 'fender.rear.right.dent.type',
                        'fender.rear.left.type': 'fender.rear.left.dent.type'
                    }
                },
                {
                    answer: 'Kratzer reparieren',
                    description: 'Kratzer Lorem Ipsum',
                    nextStateId: {
                        'fender.rear.right.type': 'fender.rear.right.scratch.type',
                        'fender.rear.left.type': 'fender.rear.left.scratch.type',
                    }
                },
                {
                    answer: 'Oberflächenrost entfernen',
                    description: 'Oberflächenrost Lorem Ipsum',
                    nextStateId: {
                        'fender.rear.right.type': 'fender.rear.right.rust.type',
                        'fender.rear.left.type': 'fender.rear.left.rust.type',
                    }
                },
                {
                    answer: 'Steinschlag reparieren',
                    description: 'Steinschlag Lorem Ipsum',
                    nextStateId: {
                        'fender.rear.right.type': 'fender.rear.right.rockfall.type',
                        'fender.rear.left.type': 'fender.rear.left.rockfall.type',
                    }
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.lacquer',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.lacquer',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'END',
                    serviceCode: {
                        'fender.rear.right.type': 'fender.rear.right.lacquer',
                        'fender.rear.left.type': 'fender.rear.left.lacquer'
                    },
                    calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.replace',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.replace',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'END',
                    serviceCode: {
                        'fender.rear.right.type': 'service-id-450273 (Kotflügel komplett hinten rechts wechseln)',
                        'fender.rear.left.type': 'service-id-450272 (Kotflügel komplett hinten links wechseln)'
                    },
                    calcParams: ['Repaircode E', 'Lackstufe 4 (Neuteil)', 'Metallic 2 Schicht']
                }
            ]
        }
    },
    'fender.front.right.type': {
        useTemplate: 'fender.front.type'
    },
    'fender.front.left.type': {
        useTemplate: 'fender.front.type'
    },
    'fender.rear.right.type': {
        useTemplate: 'fender.rear.type'
    },
    'fender.rear.left.type': {
        useTemplate: 'fender.rear.type'
    },

    'fender.rust.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Bitte geben Sie genauere Beschreibungen des Rosts:',
            isTemplate: true,
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl der Roststellen:',
                    defaultValue: '1'
                },
                {
                    type: 'dropdown',
                    answer: 'Gesamtfläche der Roststellen:',
                    options: [
                        {value: 'klein, < 5 cm Durchmesser'},
                        {value: 'mittel, 5 bis 10 cm Durchmesser'},
                        {value: 'groß, > 10 cm Durchmesser'}
                    ]
                }
            ],
            nextStateId: 'END',
            serviceCode: {
                'fender.front.right.rust.type': 'fender.front.right.rust.repair',
                'fender.front.left.rust.type': 'fender.front.left.rust.repair',
                'fender.rear.right.rust.type': 'fender.rear.right.rust.repair',
                'fender.rear.left.rust.type': 'fender.rear.left.rust.repair'
            },
            calcParams: ['Repaircode I', 'Zeit aus Ausbeulhilfe', 'Lackstufe 2 (bis 50%)', 'Metallic 2 Schicht']
        }
    },
    'fender.front.left.rust.type': {
        useTemplate: 'fender.rust.type'
    },
    'fender.front.right.rust.type': {
        useTemplate: 'fender.rust.type'
    },
    'fender.rear.left.rust.type': {
        useTemplate: 'fender.rust.type'
    },
    'fender.rear.right.rust.type': {
        useTemplate: 'fender.rust.type'
    },

    'fender.position.type': {
        viewType: 'radioSelection',
        configs: {
            question: 'Für welcher Kotflügel?',
            answers: [
                {
                    answer: 'Kotflügel vorne rechts',
                    nextStateId: 'fender.front.right.type'
                },
                {
                    answer: 'Kotflügel vorne links',
                    nextStateId: 'fender.front.left.type'
                },
                {
                    answer: 'Kotflügel hinten rechts',
                    nextStateId: 'fender.rear.right.type'
                },
                {
                    answer: 'Kotflügel hinten links',
                    nextStateId: 'fender.rear.left.type'
                }
            ]
        }
    },
    'fender.replace.type': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welcher Kotflügel möchten Sie wechseln?',
            answers: [
                {
                    answer: 'Kotflügel komplett vorne rechts wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450271 (Kotflügel komplett vorne rechts wechseln)'
                },
                {
                    answer: 'Kotflügel komplett vorne links wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450270 (Kotflügel komplett vorne links wechseln)'
                },
                {
                    answer: 'Kotflügel komplett hinten rechts wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450273 (Kotflügel komplett hinten rechts wechseln)'
                },
                {
                    answer: 'Kotflügel komplett hinten links wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450272 (Kotflügel komplett hinten links wechseln)'
                }
            ]
        }
    },


// Kratzer
    'scratch.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Bitte geben Sie genauere Beschreibungen der Kratzern:',
            isTemplate: true,
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl Kratzer:',
                    defaultValue: '1'
                },
                {
                    type: 'dropdown',
                    answer: 'Länge des Kratzers:',
                    options: [
                        {value: '0 bis 5 cm'},
                        {value: '5 bis 10 cm'},
                        {value: '10 bis 15 cm'},
                        {value: '15 bis 20 cm'},
                        {value: '20 bis 25 cm'},
                        {value: '25 bis 30 cm'},
                        {value: 'mehr als 30 cm'}
                    ]
                }
            ],
            nextStateId: 'END',
            serviceCode: {
                'bumper.scratch.type': 'bumper.scratch.repair',
                'fender.front.right.scratch.type': 'fender.front.right.scratch.repair',
                'fender.front.left.scratch.type': 'fender.front.left.scratch.repair',
                'fender.rear.right.scratch.type': 'fender.rear.right.scratch.repair',
                'fender.rear.left.scratch.type': 'fender.rear.left.scratch.repair',
                'hood.scratch.type': 'hood.scratch.repair',
                'roof.scratch.type': 'roof.scratch.repair',
            },
            calcParams: ['Repaircode I', 'Zeit aus Ausbeulhilfe', 'Lackstufe 2 (bis 50%)', 'Metallic 2 Schicht']
        }
    },
    'bumper.scratch.type': {
        useTemplate: 'scratch.type'
    },
    'fender.front.right.scratch.type': {
        useTemplate: 'scratch.type'
    },
    'fender.front.left.scratch.type': {
        useTemplate: 'scratch.type'
    },
    'fender.rear.right.scratch.type': {
        useTemplate: 'scratch.type'
    },
    'fender.rear.left.scratch.type': {
        useTemplate: 'scratch.type'
    },
    'hood.scratch.type': {
        useTemplate: 'scratch.type'
    },
    'roof.scratch.type': {
        useTemplate: 'scratch.type'
    },


// Motorhaube
    'hood.type': {
        pageTitle: 'Kotflügel Service View',
        viewType: 'radioSelectionWithBlockDescription',
        configs: {
            isTemplate: true,
            question: 'Was möchten Sie mit Ihrem Motorhaube machen?',
            answers: [
                {
                    useConstants: [
                        {
                            useKey: 'answer.dent.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.dent.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'hood.dent.type'
                },
                {
                    answer: 'Kratzer reparieren',
                    description: 'Kratzer Lorem Ipsum',
                    nextStateId: 'hood.scratch.type'
                },
                {
                    answer: 'Steinschlag reparieren',
                    description: 'Steinschlag Lorem Ipsum',
                    nextStateId: 'hood.rockfall.type'
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.lacquer',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.lacquer',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'END',
                    serviceCode: 'hood.lacquer.complete',
                    calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.replace',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.replace',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'END',
                    serviceCode: 'hood.replace',
                    calcParams: ['Repaircode E', 'Lackstufe 4', 'Metallic 2 Schicht']
                }
            ]
        }
    },


// Scheiben & Glas
    'window.glas.type': {
        pageTitle: 'Scheiben & Glas Service View',
        viewType: 'radioSelection',
        configs: {
            question: 'Scheiben und Glas service?',
            answers: [
                {
                    answer: 'Frontscheibe (Landing Page)',
                    nextStateId: 'windshield.type',
                    newWindow: true
                },
                {
                    answer: 'Frontscheibe',
                    nextStateId: 'windshield.type'
                },
                {
                    answer: 'Heckscheibe wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450250',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Seitenscheiben',
                    nextStateId: 'sidewindow.replace.type'
                },
                {
                    answer: 'Scheinwerfer, Nebelscheinwerfer',
                    nextStateId: 'headlight.type'
                },
                {
                    answer: 'Außenspiegel',
                    nextStateId: 'mirror.quick.type'
                }
            ]
        }
    },


// Scheinwerfer, Nebelscheinwerfer
    'headlight.type': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welche Scheinwerfer oder Nebelscheinwerfer möchten Sie wechseln',
            answers: [
                {
                    answer: 'Scheinwerfer komplett vorne links wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407548 (Scheinwerfer komplett vorne links wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Scheinwerfer komplett vorne rechts wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407549 (Scheinwerfer komplett vorne rechts wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Scheinwerfer komplett vorne beide wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407550 (Scheinwerfer komplett vorne beide wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Nebelscheinwerfer komplett vorne links wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-409871 (Nebelscheinwerfer komplett vorne links wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Nebelscheinwerfer komplett vorne rechts wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-409872 (Nebelscheinwerfer komplett vorne rechts wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Nebelscheinwerfer komplett vorne beide wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-409870 (Nebelscheinwerfer komplett vorne beide wechseln)',
                    calcParams: ['Repaircode E']
                }
            ]
        }
    },

    'headlight.replace.type': {
        viewType: 'radioSelection',
        configs: {
            question: 'Was möchten Sie wechseln',
            isTemplate: true,
            answers: [
                {
                    answer: {
                        'headlight.replace.front.left.type': 'Scheinwerfer komplett vorne links wechseln',
                        'headlight.replace.front.right.type': 'Scheinwerfer komplett vorne rechts wechseln',
                        'headlight.replace.front.both.type': 'Scheinwerfer komplett vorne beide wechseln'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'headlight.replace.front.left.type': 'service-id-407548 (Scheinwerfer komplett vorne links wechseln)',
                        'headlight.replace.front.right.type': 'service-id-407549 (Scheinwerfer komplett vorne rechts wechseln)',
                        'headlight.replace.front.both.type': 'service-id-407550 (Scheinwerfer komplett vorne beide wechseln)'
                    },
                    calcParams: ['Repaircode E']
                },
                {
                    answer: {
                        'headlight.replace.front.left.type': 'Nebelscheinwerfer komplett vorne links wechseln',
                        'headlight.replace.front.right.type': 'Nebelscheinwerfer komplett vorne rechts wechseln',
                        'headlight.replace.front.both.type': 'Nebelscheinwerfer komplett vorne beide wechseln'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'headlight.replace.front.left.type': 'service-id-409871 (Nebelscheinwerfer komplett vorne links wechseln)',
                        'headlight.replace.front.right.type': 'service-id-409872 (Nebelscheinwerfer komplett vorne rechts wechseln)',
                        'headlight.replace.front.both.type': 'service-id-409870 (Nebelscheinwerfer komplett vorne beide wechseln)'
                    },
                    calcParams: ['Repaircode E']
                }
            ]
        }
    },
    'headlight.replace.front.left.type': {
        useTemplate: 'headlight.replace.type'
    },
    'headlight.replace.front.right.type': {
        useTemplate: 'headlight.replace.type'
    },
    'headlight.replace.front.both.type': {
        useTemplate: 'headlight.replace.type'
    },


// Schweller
    'sill.type': {
        viewType: 'radioSelectionWithBlockDescription',
        configs: {
            question: 'Was möchten Sie machen?',
            isTemplate: true,
            answers: [
                {
                    useConstants: [
                        {
                            useKey: 'answer.spotrepair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.spotrepair',
                            forKey: 'description'
                        }
                    ],
                    //nextStateId: 'sill.spotrepair.type'
                },
                {
                    answer: 'Steinschlag reparieren',
                    description: 'Steinschlag Lorem Ipsum',
                    //nextStateId: 'bumper.rockfall.type'
                },
                {
                    answer: 'Kratzer reparieren',
                    description: 'Kratzer Lorem Ipsum',
                    //nextStateId: 'sill.left.scratch.type'
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.dent.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.dent.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: {
                        'sill.left.type': 'sill.left.dent.type',
                        'sill.right.type': 'sill.right.dent.type'
                    }
                }
            ]
        }
    },
    'sill.left.type': {
        useTemplate: 'sill.type'
    },
    'sill.right.type': {
        useTemplate: 'sill.type'
    },


// Seitenscheiben, Dreieckscheiben, Seitenfenster links
    'sidewindow.replace.type': {
        viewType: 'radioSelection',
        configs: {
            question: 'Was möchten Sie wechseln',
            isTemplate: true,
            answers: [
                {
                    answer: {
                        'sidewindow.left.replace.type': 'Dreieckscheibe links vorne wechseln',
                        'sidewindow.right.replace.type': 'Dreieckscheibe rechts vorne wechseln'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'sidewindow.left.replace.type': 'service-id-450258',
                        'sidewindow.right.replace.type': 'service-id-450261'
                    },
                    calcParams: ['Repaircode E']
                },
                {
                    answer: {
                        'sidewindow.left.replace.type': 'Seitenscheibe Tür links vorne wechseln',
                        'sidewindow.right.replace.type': 'Seitenscheibe Tür rechts vorne wechseln'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'sidewindow.left.replace.type': 'service-id-450253',
                        'sidewindow.right.replace.type': 'service-id-450254'
                    },
                    calcParams: ['Repaircode E']
                },
                {
                    answer: {
                        'sidewindow.left.replace.type': 'Seitenscheibe Tür links hinten wechseln',
                        'sidewindow.right.replace.type': 'Seitenscheibe Tür rechts hinten wechseln'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'sidewindow.left.replace.type': 'service-id-450255',
                        'sidewindow.right.replace.type': 'service-id-450256'
                    },
                    calcParams: ['Repaircode E']
                },
                {
                    answer: {
                        'sidewindow.left.replace.type': 'Seitenfenster, Dreieckscheibe hinten links wechseln',
                        'sidewindow.right.replace.type': 'Seitenfenster, Dreieckscheibe hinten links wechseln'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'sidewindow.left.replace.type': 'service-id-450262',
                        'sidewindow.right.replace.type': 'service-id-450263'
                    },
                    calcParams: ['Repaircode E']
                }
            ]
        }
    },
    'sidewindow.left.replace.type': {
        useTemplate: 'sidewindow.replace.type'
    },
    'sidewindow.right.replace.type': {
        useTemplate: 'sidewindow.replace.type'
    },


// Spotrepair
    'spotrepair.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Bitte geben Sie genauere Beschreibungen Für Spots und Streifschäden:',
            isTemplate: true,
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl der Spots:',
                    defaultValue: '1'
                },
                {
                    type: 'dropdown',
                    answer: 'Länge der Streifschäden:',
                    options: [
                        {value: '0 bis 0.5 cm'},
                        {value: '0.5 bis 1 cm'},
                        {value: '1 bis 1.5 cm'},
                        {value: '1.5 bis 2 cm'},
                        {value: '2 bis 2.5 cm'},
                        {value: '2.5 bis 3 cm'},
                        {value: '3 bis 3.5 cm'}
                    ]
                }
            ],
            nextStateId: 'END',
            serviceCode: {
                'bumper.spotrepair.type': 'bumper.spotrepair',
                'fender.front.right.spotrepair.type': 'fender.front.right.spotrepair',
                'fender.front.left.spotrepair.type': 'fender.front.left.spotrepair',
                'fender.rear.right.spotrepair.type': 'fender.rear.right.spotrepair',
                'fender.rear.left.spotrepair.type': 'fender.rear.left.spotrepair',
            },
            calcParams: ['Repaircode C', 'Anzahl Spots / Streifschäden']
        }
    },
    'bumper.spotrepair.type': {
        useTemplate: 'spotrepair.type'
    },
    'fender.front.right.spotrepair.type': {
        useTemplate: 'spotrepair.type'
    },
    'fender.front.left.spotrepair.type': {
        useTemplate: 'spotrepair.type'
    },
    'fender.rear.right.spotrepair.type': {
        useTemplate: 'spotrepair.type'
    },
    'fender.rear.left.spotrepair.type': {
        useTemplate: 'spotrepair.type'
    },


// Steinschlag
    'rockfall.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Bitte geben Sie genauere Beschreibungen für die Steinschläge:',
            isTemplate: true,
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl Steinschläge:',
                    defaultValue: '1'
                },
                {
                    type: 'input',
                    answer: 'Steinschlagdurchmesser (mm):',
                    defaultValue: '10'
                }
            ],
            nextStateId: 'END',
            serviceCode: {
                'bumper.rockfall.type': 'bumper.rockfall.repair',
                'fender.front.left.rockfall.type': 'fender.front.left.rockfall.repair',
                'fender.front.right.rockfall.type': 'fender.front.right.rockfall.repair',
                'fender.rear.left.rockfall.type': 'fender.rear.left.rockfall.repair',
                'fender.rear.right.rockfall.type': 'fender.rear.right.rockfall.repair',
                'hood.rockfall.type': 'hood.rockfall.repair'
            },
            calcParams: ['Repaircode I', 'Zeit aus Ausbeulhilfe', 'Lackstufe 2 (bis 50%)', 'Metallic 2 Schicht']
        }
    },
    'bumper.rockfall.type': {
        useTemplate: 'rockfall.type'
    },
    'fender.front.left.rockfall.type': {
        useTemplate: 'rockfall.type'
    },
    'fender.front.right.rockfall.type': {
        useTemplate: 'rockfall.type'
    },
    'fender.rear.left.rockfall.type': {
        useTemplate: 'rockfall.type'
    },
    'fender.rear.right.rockfall.type': {
        useTemplate: 'rockfall.type'
    },
    'hood.rockfall.type': {
        useTemplate: 'rockfall.type'
    },

// Stoßstange, Stoßfänger
    'bumper.type': {
        viewType: 'radioSelectionWithBlockDescription',
        configs: {
            question: 'Was möchten Sie mit Ihrem Stoßfänger / Stoßstange machen?',
            answers: [
                {
                    useConstants: [
                        {
                            useKey: 'answer.spotrepair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.spotrepair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'bumper.spotrepair.type'
                },
                {
                    answer: 'Steinschlag reparieren',
                    description: 'Steinschlag Lorem Ipsum',
                    nextStateId: 'bumper.rockfall.type'
                },
                {
                    answer: 'Kratzer reparieren',
                    description: 'Kratzer Lorem Ipsum',
                    nextStateId: 'bumper.scratch.type'
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.dent.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.dent.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'bumper.dent.type'
                },
                {
                    answer: 'Lackieren',
                    description: 'Lackieren Lorem Ipsum',
                    //nextStateId: 'bumper.rockfall.type'
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.replace',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.replace',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'bumper.replace.type'
                }
            ]
        }
    },

    'bumper.replace.type': {
        viewType: 'radioSelection',
        configs: {
            question: 'Möchten Sie Ihre Frontschürze komplett wechseln',
            answers: [
                {
                    answer: 'Ja',
                    nextStateId: 'END',
                    serviceCode: 'service-id-518536 (Frontschürze komplett wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Nein',
                    nextStateId: 'END',
                    serviceCode: 'service-id-518537 (Frontschürze wechseln)',
                    calcParams: ['Repaircode E']
                }
            ]
        }
    }

};

var stateConstants = {
    'answer.replace': 'Austausch des Bauteils',
    'answer.dent.repair': 'Einzelne Dellen entfernen',
    'answer.haildamage': 'Hagelschaden reparieren',
    'answer.lacquer': 'Neulackierung des Bauteils',
    'answer.spotrepair': 'Spot Repair',

    'description.replace': 'Bei stärkeren Verformungen oder einer notwendigen Instandsetzung von über 50% des Bauteils ist in der Regel der Austausch des Bauteils günstiger, als die Instandsetzung. Je nach Ursache des Schadens können auch benachbarte Bauteile wie z.B. Halterungen in Mitleidenschaft gezogen worden sein, hier wird ist die Vorführung des Fahrzeugs in einem Fachbetrieb empfohlen (<<CrossLink Unfallschaden>>).',
    'description.dent.repair': 'Je nach Position am Fahrzeug lassen sich kleinere, oderflächliche Dellen unter Umständen auch durch Drücken oder ziehen entfernen. Größere, tiefere, an Kanten oder am Bauteilrand liegende Dellen müssen in der Regel mit Feinspachtel geebnet und das Bauteil komplett neu lackiert werden.',
    'description.haildamage': 'Die meisten kleineren Dellen lassen sich ohne Lackierarbeiten entfernen, ausgenommen sind meist tiefe, scharfkantige oder in den Randbereichen eines Bauteile liegende Dellen. Sollte die Lackierung Ihres Fahrzeugs durch den Hagel beschädigt worden sein, ist eine einfache Reparatur nicht mehr möglich, wählen Sie hierfür bitte die Option "Dellen entfernen".',
    'description.lacquer': 'Eine Neulackierung des Bauteils im Farbton des Fahrzeugs kann erforderlich sein, wenn der Lack im Laufe der Zeit stumpf geworden ist oder der Lack fleckig geworden ist. Beachten Sie bitte, dass eine Neulackierung keine Beseitigung von Beschädigungen wie Kratzern, Dellen oder Steinschlägen beinhaltet.',
    'description.spotrepair': 'Eine kostengünstige Alternative zur Reparatur kleinerer Beschädigungen ist die Spot Repair Methode. Beseitigt werden können Steinschläge, kleinere Kratzer und Lackfehler bis etwa 3,5 cm Durchmesser, allerdings keine Dellen. Bei Stoßstangen lassen sich so auch kleinere Streifschäden beheben. Spot Repair wird nur empfohlen an Stoßstangen und im unteren Bereich des Fahrzeugs.'
};

for (var stateKey in states) {
    states[stateKey].configs = states[stateKey].configs || {};
    states[stateKey].configs.id = stateKey;

    // set stateConstants for answers
    var answers = states[stateKey].configs.answers || [];
    $.each(answers, checkAndSetConstants);
}

function checkAndSetConstants(i, answer){
    var useConstants = answer.useConstants;
    if (useConstants) {
        $.each(useConstants, function(j, setting){
            answer[setting.forKey] = stateConstants[setting.useKey];
        });
    }
}
