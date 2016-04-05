
var states = {
// Static states:
//  'END'


// Kategorie 0
    'category0': {
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            question: 'Welche Leistung wünschen Sie?',
            answers: [
                {
                    answer: 'Lackstift',
                    description: 'Lorem ipsum',
                    nextStateId: 'touchupstick.type'
                },
                {
                    answer: 'Einzelne Dellen entfernen',
                    description: 'Lorem ipsum',
                    nextStateId: 'dent.type'
                },
                {
                    answer: 'Spot Repair',
                    description: 'Lorem ipsum',
                    nextStateId: 'spotrepair.type'
                },
                {
                    description: 'Lorem ipsum',
                    nextStateId: 'END',
                    serviceCode: 'haildamage'
                },
                /*
                {
                    answer: 'Sonstige Reparaturen',
                    description: '(Rost, Steinschlag, größere Kratzer etc.)',
                    //nextStateId: 'window.glas.type',
                },
                */
                {
                    answer: 'Services für Scheiben und Glas',
                    description: 'Lorem ipsum',
                    nextStateId: 'window.glas.type',
                    vehicleRequired: true,
                    calculable: true
                },
                {
                    answer: 'Neulackierung des Bauteils',
                    description: 'Lorem ipsum',
                    nextStateId: 'lacquer.components.type',
                    vehicleRequired: true
                },
                {
                    answer: 'Wechsel des Bauteils',
                    description: 'Lorem ipsum',
                    nextStateId: 'replace.components.type',
                    vehicleRequired: true,
                    calculable: true
                },
                {
                    answer: 'Fahrzeug lackieren',
                    description: 'Lorem ipsum',
                    nextStateId: 'vehicle.complete.lacquer.type',
                    vehicleRequired: true
                },
                {
                    answer: 'Sie haben einen Unfallschaden?',
                    description: 'Lorem ipsum',
                    nextStateId: 'accidentaldamage.type'
                },
                {
                    answer: 'Schaden Begutachten lassen',
                    description: 'Lorem ipsum',
                    nextStateId: 'examinedamage.type'
                },
                {
                    description: 'Lorem ipsum',
                    nextStateId: 'END',
                    serviceCode: 'locations.search'
                }
            ]
        }
    },


// Bauteile (Lackieren)
    'lacquer.components.type': {
        viewType: 'radioSelectionWithImg',
        configs: {
            question: 'Für welcher Bauteil suchen Sie den Service?',
            img: {
                file: 'CarPlan.jpg',
                height: 150
            },
            answers: [
                {
                    answer: 'Fahrzeugdach',
                    nextStateId: 'END',
                    serviceCode: 'roof.lacquer'
                },
                {
                    answer: 'Gehäuse Außenspiegel links',
                    nextStateId: 'END',
                    serviceCode: 'mirror.left.lacquer'
                },
                {
                    answer: 'Gehäuse Außenspiegel rechts',
                    nextStateId: 'END',
                    serviceCode: 'mirror.right.lacquer'
                },
/*
                {
                    answer: 'Felgen',
                    nextStateId: 'END',
                    serviceCode: 'rim.lacquer',
                    calcParams: [
                        'Über DAT kalkulierbar, Ergebnisse aber potentiell nicht präzise genug. Alternativen:',
                        '- Festpreis pro Felge / Felgensatz',
                        '- Nicht anbieten'
                    ]
                },
*/
                {
                    answer: 'Heckabschlußblech',
                    nextStateId: 'END',
                    serviceCode: 'rearpanel.lacquer'
                },
                {
                    answer: 'Heckklappe / Kofferraumdeckel',
                    nextStateId: 'END',
                    serviceCode: 'tailgate.lacquer.complete'
                },
                {
                    answer: 'Kotflügel vorne links',
                    nextStateId: 'END',
                    serviceCode: 'fender.front.left.lacquer.complete'
                },
                {
                    answer: 'Kotflügel vorne rechts',
                    nextStateId: 'END',
                    serviceCode: 'fender.front.right.lacquer.complete'
                },
                {
                    answer: 'Kotflügel / Seitenwand hinten links',
                    nextStateId: 'END',
                    serviceCode: 'fender.rear.left.lacquer.complete'
                },
                {
                    answer: 'Kotflügel / Seitenwand hinten rechts',
                    nextStateId: 'END',
                    serviceCode: 'fender.rear.right.lacquer.complete'
                },
                {
                    answer: 'Motorhaube',
                    nextStateId: 'END',
                    serviceCode: 'hood.lacquer.complete'
                },
                {
                    answer: 'Schweller links',
                    nextStateId: 'END',
                    serviceCode: 'sill.left.lacquer'
                },
                {
                    answer: 'Schweller rechts',
                    nextStateId: 'END',
                    serviceCode: 'sill.right.lacquer'
                },
                {
                    answer: 'Stoßfänger vorne',
                    nextStateId: 'END',
                    serviceCode: 'bumper.front.lacquer'
                },
                {
                    answer: 'Stoßfänger hinten',
                    nextStateId: 'END',
                    serviceCode: 'bumper.rear.lacquer'
                },
                {
                    answer: 'Tür links vorne',
                    nextStateId: 'END',
                    serviceCode: 'door.front.left.lacquer'
                },
                {
                    answer: 'Tür rechts vorne',
                    nextStateId: 'END',
                    serviceCode: 'door.front.right.lacquer'
                },
                {
                    answer: 'Tür / Schiebetür links hinten',
                    nextStateId: 'END',
                    serviceCode: 'door.rear.left.lacquer'
                },
                {
                    answer: 'Tür / Schiebetür rechts hinten',
                    nextStateId: 'END',
                    serviceCode: 'door.rear.right.lacquer'
                }
            ]
        }
    },


// Bauteile (Ersetzen)
    'replace.components.type': {
        viewType: 'radioSelectionWithImg',
        configs: {
            question: 'Welcher Bauteil möchten Sie ersetzen?',
            img: {
                file: 'CarPlan.jpg',
                height: 150
            },
            answers: [
                {
                    answer: 'Gehäuse Außenspiegel links',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450268 (Außenspiegel links komplett wechseln)'
                },
                {
                    answer: 'Gehäuse Außenspiegel rechts',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450269 (Außenspiegel rechts komplett wechseln)'
                },
/*
                {
                    answer: 'Felgen',
                    //nextStateId: 'rim.type'
                },
                {
                    answer: 'Frontscheibe austauschen',
                    description: 'Ist eine Reparatur nicht mehr möglich, muss die alte Scheibe fachgerecht herausgetrennt und nach einer gründlichen Reinigung die Neue eingebaut werden. Hierzu verwenden unsere Fachwerkstätten nur hochwertige Scheiben und Hochleistungsklebstoff.',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407537 (Frontscheibe wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Heckabschlußblech erneuern (Single Service)',
                    nextStateId: 'END',
                    serviceCode: 'rearpanel.replace',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Heckscheibe tauschen (Single Service)',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450250',
                    calcParams: ['Repaircode E']
                },
*/
                {
                    answer: 'Heckklappe / Kofferraumdeckel ersetzen',
                    nextStateId: 'END',
                    serviceCode: 'tailgate.replace'
                },
                {
                    answer: 'Kotflügel vorne links',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450270 (Kotflügel komplett vorne links wechseln)'
                },
                {
                    answer: 'Kotflügel vorne rechts',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450271 (Kotflügel komplett vorne rechts wechseln)'
                },
                {
                    answer: 'Motorhaube',
                    nextStateId: 'END',
                    serviceCode: 'hood.replace'
                },
/*
                {
                    answer: 'Nebelscheinwerfer vorne links (Single Service)',
                    nextStateId: 'END',
                    serviceCode: 'service-id-409871 (Nebelscheinwerfer komplett vorne links wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Nebelscheinwerfer vorne rechts (Single Service)',
                    nextStateId: 'END',
                    serviceCode: 'service-id-409872 (Nebelscheinwerfer komplett vorne rechts wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Scheinwerfer vorne links (Single Service)',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407548 (Scheinwerfer komplett vorne links wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Scheinwerfer vorne rechts (Single Service)',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407549 (Scheinwerfer komplett vorne rechts wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Schweller',
                    nextStateId: 'sill.replace.type'
                },
                {
                    answer: 'Seitenscheiben, Dreieckscheiben, Seitenfenster links',
                    nextStateId: 'sidewindow.left.replace.type'
                },
                {
                    answer: 'Seitenscheiben, Dreieckscheiben, Seitenfenster rechts',
                    nextStateId: 'sidewindow.right.replace.type'
                },
*/
                {
                    answer: 'Stoßfänger vorne',
                    nextStateId: 'END',
                    serviceCode: 'bumper.front.replace'
                },
                {
                    answer: 'Stoßfänger hinten',
                    nextStateId: 'END',
                    serviceCode: 'bumper.rear.replace'
                },
                {
                    answer: 'Tür links vorne',
                    nextStateId: 'END',
                    serviceCode: 'door.front.left.replace'
                },
                {
                    answer: 'Tür rechts vorne',
                    nextStateId: 'END',
                    serviceCode: 'door.front.right.replace'
                },
                {
                    answer: 'Tür / Schiebetür links hinten',
                    nextStateId: 'END',
                    serviceCode: 'door.rear.left.replace'
                },
                {
                    answer: 'Tür / Schiebetür rechts hinten',
                    nextStateId: 'END',
                    serviceCode: 'door.rear.right.replace'
                }
            ]
        }
    },


// Begutachtung
    'examinedamage.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Bitte beschreiben Sie Ihren Schaden:',
            checklist: [
                {
                    type: 'radio',
                    answer: 'Ist Ihr Fahrzeug fahrbereit?',
                    options: [
                        {value: 'ja'},
                        {value: 'nein'}
                    ]
                }
            ],
            nextStateId: 'END',
            serviceCode: 'examinedamage'
        }
    },


// Fahrzeug komplett
    'vehicle.complete.type': {
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            question: 'Welchen Service wünschen Sie?',
            answers: [
                {
                    useConstants: [
                        {
                            useKey: 'answer.haildamage.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.haildamage.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'vehicle.haildamage.type'
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
                    nextStateId: 'vehicle.complete.lacquer.type'
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.polish',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.polish',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'END',
                    serviceCode: 'vehicle.complete.polish',
                    calcParams: [
                        'Kein DAT Service, Alternativen',
                        'Oberfläche mal Preis',
                        'Festpreis pro Fahrzeugkategorie (Kleinwagen, Transporter, ...)'
                    ]
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
                    answer: 'Leisteungen für den Außenspiegel links',
                    nextStateId: 'mirror.left.type'
                },
                {
                    answer: 'Leisteungen für den Außenspiegel rechts',
                    nextStateId: 'mirror.right.type'
                },
                {
                    answer: 'Beide Außenspiegel ersetzen',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450284 (Außenspiegel beide komplett wechseln)'
                }
            ]
        }
    },

    'mirror.type': {
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            question: 'Welchen Service wünschen Sie?',
            isTemplate: true,
            answers: [
                {
                    answer: 'Glas ersetzen',
                    description: 'Eine kostengünstige Alternative zum Tausch des kompletten Außenspiegels ist der Austausch des Glases. Dies ist allerdings nur dann möglich, wenn das Gehäuse keine Beschädigungen aufweist.',
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
                    }
                },
                {
                    answer: 'Außenspiegel ersetzen',
                    description: 'Ist das Gehäuse des Außenspiegels beschädigt und unter Umständen sogar gebrochen, hilft nur noch der Austausch gegen ein Neuteil.',
                    nextStateId: 'END',
                    serviceCode: {
                        'mirror.left.type': 'service-id-450268 (Außenspiegel links komplett wechseln)',
                        'mirror.right.type': 'service-id-450269 (Außenspiegel rechts komplett wechseln)'
                    }
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

    'mirror.replace.type': {
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            question: 'Welchen Service wünschen Sie?',
            isTemplate: true,
            answers: [
                {
                    answer: 'Glas ersetzen',
                    description: 'Eine kostengünstige Alternative zum Tausch des kompletten Außenspiegels ist der Austausch des Glases. Dies ist allerdings nur dann möglich, wenn das Gehäuse keine Beschädigungen aufweist.',
                    nextStateId: {
                        'mirror.left.type': 'mirror.left.glas.replace.type',
                        'mirror.right.type': 'mirror.right.glas.replace.type'
                    }
                },
                {
                    answer: 'Außenspiegel ersetzen',
                    description: 'Ist das Gehäuse des Außenspiegels beschädigt und unter Umständen sogar gebrochen, hilft nur noch der Austausch gegen ein Neuteil.',
                    nextStateId: 'END',
                    serviceCode: {
                        'mirror.left.type': 'service-id-450268 (Außenspiegel links komplett wechseln)',
                        'mirror.right.type': 'service-id-450269 (Außenspiegel rechts komplett wechseln)'
                    }
                }
            ]
        }
    },
    'mirror.left.replace.type': {
        useTemplate: 'mirror.replace.type'
    },
    'mirror.right.replace.type': {
        useTemplate: 'mirror.replace.type'
    },

    'mirror.glas.replace': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welchen Service wünschen Sie?',
            isTemplate: true,
            answers: [
                {
                    answer: {
                        'mirror.left.glas.replace.type': 'Glas Außenspiegel links ersetzen',
                        'mirror.right.glas.replace.type': 'Glas Außenspiegel rechts ersetzen'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'mirror.left.glas.replace.type': 'service-id-95663 (Glas Außenspiegel links wechseln)',
                        'mirror.right.glas.replace.type': 'service-id-95641 (Glas Außenspiegel rechts wechseln)'
                    }
                },
                {
                    answer: {
                        'mirror.left.glas.replace.type': 'Glas Außenspiegel links (Weitwinkel) ersetzen',
                        'mirror.right.glas.replace.type': 'Glas Außenspiegel rechts (Weitwinkel) ersetzen'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'mirror.left.glas.replace.type': 'service-id-345091 (Glas Außenspiegel links (Weitwinkel) wechseln)',
                        'mirror.right.glas.replace.type': 'service-id-355773 (Glas Außenspiegel rechts (Weitwinkel) wechseln)'
                    }
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
            question: 'Wie viele Dellen mit welchem durchschnittlichen Durchmesser möchten Sie reparieren lassen?',
            isTemplate: true,
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl Dellen:',
                    defaultValue: '1'
                }
            ],
            nextStateId: 'END',
            serviceCode: 'dent.repair'
        }
    },
/*
    'dent.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Wie viele Dellen mit welchem durchschnittlichen Durchmesser möchten Sie reparieren lassen?',
            isTemplate: true,
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl Dellen:',
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
                'sill.right.dent.type': 'sill.right.dent.repair',
                'tailgate.dent.type': 'tailgate.dent.repair'
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
    'tailgate.dent.type': {
        useTemplate: 'dent.type'
    },
*/


// Fahrzeugdach
    'roof.type': {
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            question: 'Welchen Service wünschen Sie?',
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
                    useConstants: [
                        {
                            useKey: 'answer.scratch.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.scratch.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'roof.scratch.type'
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.rockfall.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.rockfall.repair',
                            forKey: 'description'
                        }
                    ],
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
                    serviceCode: 'roof.lacquer'
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.haildamage.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.haildamage.repair',
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
            question: 'Wie viele Steinschläge möchten Sie reparieren lassen?',
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl Steinschläge:',
                    defaultValue: '1'
                }
            ],
            nextStateId: 'END',
            serviceCode: 'roof.rockfall.repair',
            calcParams: ['Repaircode I', 'Zeit aus Ausbeulhilfe', 'Lackstufe 2 (bis 50%)', 'Metallic 2 Schicht']
        }
    },


// Fahrzeug lackieren
    'vehicle.complete.lacquer.type': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welchen Teil Ihres Fahrzeuges möchten Sie lackieren lassen?',
            answers: [
                {
                    nextStateId: 'END',
                    serviceCode: 'vehicle.complete.outside.lacquer'
                },
                {
                    nextStateId: 'END',
                    serviceCode: 'vehicle.complete.outside.noroof.lacquer'
                },
                {
                    nextStateId: 'END',
                    serviceCode: 'vehicle.complete.leftside.lacquer'
                },
                {
                    nextStateId: 'END',
                    serviceCode: 'vehicle.complete.rightside.lacquer'
                },
                {
                    nextStateId: 'END',
                    serviceCode: 'vehicle.complete.frontsection.lacquer'
                },
                {
                    nextStateId: 'END',
                    serviceCode: 'vehicle.complete.rearsection.lacquer'
                }
            ]
        }
    },


// Felgen
/*
    'rim.type': {
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            question: 'Welchen Service wünschen Sie?',
            answers: [
                {
                    answer: 'Felgen Reparieren',
                    description: 'Kleinere optische Schäden wie Abschürfungen, Kratzer, Beulen oder Korrosionsschäden an Felgen lassen sich meist problemlos beheben. Auch bei einer dem ersten Anschrein nach nur oberflächeren Beschädgigung muss vor der Reparatur jede Felge auf Haarrisse hin untersucht werden.',
                    nextStateId: 'END',
                    serviceCode: 'rim.repair',
                    calcParams: [
                        'Nicht über DAT kalkulierbar, Alternativen wären:',
                        '- Festpreis Reparatur pro Felge / Felgensatz',
                        '- Reparatur nicht anbieten',
						'(Alu/Stahl, Felgengröße, Einzeilig/Mehrteilig, Einfarbig/Mehrfarbig, Spinner, Design (Speichen, Stern, ...)',
                        'Reparatur Alufelge (service-id-554889)',
                        'Reparatur Stahlfelge (service-id-554890)'
                    ]
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.polish',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.polish',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'END',
                    serviceCode: 'rim.polish',
                    calcParams: [
                        'Felgengröße',
                        'Material',
                        'Alufelgen polieren',
                        'Stahlfelgen polieren',
                    ]
                },
                {
                    answer: 'Felgen versiegeln',
                    description: 'Die Felgen werden gereinigt und mit einer Nano-Politur versiegelt, danke Lotus-Effekt haftet weniger Schmutz an den Felgen und das Wasser perlt besser ab.',
                    nextStateId: 'END',
                    serviceCode: 'rim.sealing',
                    calcParams: [
                        'Nicht über DAT kalkulierbar, Alternativen wären:',
                        '- Festpreis pro Felge / Felgensatz',
                        '- Nicht anbieten'
                    ]
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
                    serviceCode: 'rim.lacquer',
                    calcParams: [
                        'Über DAT kalkulierbar, Ergebnisse aber potentiell nicht präzise genug. Alternativen:',
                        '- Festpreis pro Felge / Felgensatz',
                        '- Nicht anbieten'
                    ]
                }
            ]
        }
    },
*/

// Frontscheibe
    'windshield.type': {
        pageTitle: 'Frontscheibe Service View',
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            question: 'Welchen Service wünschen Sie?',
            answers: [
                {
                    answer: 'Frontscheibe reparieren',
                    description: 'Die Reparatur der Frontscheibe ist günstiger und geht schneller, als der Austausch. Allerdings können Schäden nur dann repariert werden, wenn sie nicht im Sichtfeld des Fahrers liegen oder im Randbereich der Scheibe. Repariert werden können oberflächliche Steinschläge und kleine Risse bis maximal 2,5 cm Länge. Zudem dürfen maximal 2 Steinschläge repariert werden, danach bleibt nur noch der Tausch der Scheibe.',
                    nextStateId: 'windshield.repair.type'
                },
                {
                    answer: 'Frontscheiben versiegeln',
                    description: 'Die Scheibe wird gereinigt und mit einer Nano-Politur versiegelt, danke Lotus-Effekt haftet weniger Schmutz an der Scheibe und das Wasser perlt besser ab.',
                    nextStateId: 'END',
                    serviceCode: 'windshield.sealing',
                    calcParams: ['Festpreis']
                },
                {
                    answer: 'Frontscheibe austauschen',
                    description: 'Ist eine Reparatur nicht mehr möglich, muss die alte Scheibe fachgerecht herausgetrennt und nach einer gründlichen Reinigung die Neue eingebaut werden. Hierzu verwenden unsere Fachwerkstätten nur hochwertige Scheiben und Hochleistungsklebstoff.',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407537 (Frontscheibe wechseln)',
                    calcParams: ['Repaircode E']
                }
            ]
        }
    },
    'windshield.repair.type': {
        viewType: 'radioSelectionWithImg',
        configs: {
            question: 'Befindet sich eine Beschädigung im roten Bereich oder sind die Risse länger als 2,5 Zentimeter?',
            img: {
                file: 'frontscheibe-wechseln-noetig.jpg'
            },
            answers: [
                {
                    answer: 'Ja',
                    nextStateId: 'END',
                    serviceCode: 'windshield.replace',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Nein',
                    nextStateId: 'windshield.repair.number.type'
                }
            ]
        }
    },
    'windshield.repair.number.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Wie viele Beschädigungen sind es?',
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl Beschädigungen:',
                    defaultValue: '1'
                }
            ],
            nextStateId: 'END',
            serviceCode: 'windshield.repair',
            calcParams: ['Festpreis je Steinschlag']
        }
    },


// Hagelschaden
    'haildamage.type': {
        viewType: 'radioSelection',
        configs: {
            question: 'Sind die Dellen teilweise größer als 20 mm?',
            isTemplate: true,
            answers: [
                {
                    answer: 'Ja',
                    nextStateId: {
                        'hood.haildamage.type': 'hood.haildamage.severe.type',
                        'roof.haildamage.type': 'roof.haildamage.severe.type',
                        'tailgate.haildamage.type': 'tailgate.haildamage.severe.type',
                        'vehicle.haildamage.type': 'vehicle.haildamage.severe.type'
                    }
                },
                {
                    answer: 'Nein',
                    nextStateId: {
                        'hood.haildamage.type': 'hood.haildamage.minor.type',
                        'roof.haildamage.type': 'roof.haildamage.minor.type',
                        'tailgate.haildamage.type': 'tailgate.haildamage.minor.type',
                        'vehicle.haildamage.type': 'vehicle.haildamage.minor.type'
                    }
                },
            ]
        }
    },
    'hood.haildamage.type': {
        useTemplate: 'haildamage.type'
    },
    'roof.haildamage.type': {
        useTemplate: 'haildamage.type'
    },
    'tailgate.haildamage.type': {
        useTemplate: 'haildamage.type'
    },
    'vehicle.haildamage.type': {
        useTemplate: 'haildamage.type'
    },

    'haildamage.damage.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Wie viele Dellen sind es?',
            isTemplate: true,
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl Dellen:',
                    defaultValue: '1'
                }
            ],
            nextStateId: 'END',
            serviceCode: {
                'hood.haildamage.minor.type': 'hood.haildamage.minor',
                'roof.haildamage.minor.type': 'roof.haildamage.minor',
                'tailgate.haildamage.minor.type': 'tailgate.haildamage.minor',
                'vehicle.haildamage.minor.type': 'vehicle.haildamage.minor',
                'hood.haildamage.severe.type': 'hood.haildamage.severe',
                'roof.haildamage.severe.type': 'roof.haildamage.severe',
                'tailgate.haildamage.severe.type': 'tailgate.haildamage.severe',
                'vehicle.haildamage.severe.type': 'vehicle.haildamage.severe',
            },
            calcParams: {
                'hood.haildamage.minor.type': ['D (nur Drücken)', 'Methode 2', 'Anzahl Dellen', 'Dellengröße'],
                'roof.haildamage.minor.type': ['D (nur Drücken)', 'Methode 2', 'Anzahl Dellen', 'Dellengröße'],
                'tailgate.haildamage.minor.type': ['D (nur Drücken)', 'Methode 2', 'Anzahl Dellen', 'Dellengröße'],
                'vehicle.haildamage.minor.type': ['D (nur Drücken)', 'Methode 2', 'Anzahl Dellen', 'Dellengröße'],
                'default': ['DVL (Vordrücken, Lackieren)', 'Lackstufe 3 (über 50%)', 'Anzahl Dellen']
            }
        }
    },
    'hood.haildamage.minor.type': {
        useTemplate: 'haildamage.damage.type'
    },
    'roof.haildamage.minor.type': {
        useTemplate: 'haildamage.damage.type'
    },
    'tailgate.haildamage.minor.type': {
        useTemplate: 'haildamage.damage.type'
    },
    'vehicle.haildamage.minor.type': {
        useTemplate: 'haildamage.damage.type'
    },
    'hood.haildamage.severe.type': {
        useTemplate: 'haildamage.damage.type'
    },
    'roof.haildamage.severe.type': {
        useTemplate: 'haildamage.damage.type'
    },
    'tailgate.haildamage.severe.type': {
        useTemplate: 'haildamage.damage.type'
    },
    'vehicle.haildamage.severe.type': {
        useTemplate: 'haildamage.damage.type'
    },


// Heckklappe / Kofferraumdeckel
    'tailgate.type': {
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            isTemplate: true,
            question: 'Welchen Service wünschen Sie?',
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
                    nextStateId: 'tailgate.dent.type'
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.scratch.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.scratch.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'tailgate.scratch.type'
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.rockfall.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.rockfall.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'tailgate.rockfall.type'
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.haildamage.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.haildamage.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'tailgate.haildamage.type'
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
                    serviceCode: 'tailgate.lacquer.complete',
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
                    serviceCode: 'tailgate.replace',
                    calcParams: ['Repaircode E', 'Lackstufe 4', 'Metallic 2 Schicht']
                }
            ]
        }
    },


// Lackstift
    'touchupstick.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Wie viele Lackstifte sind nötig?',
            isTemplate: true,
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl Lackstifte:',
                    defaultValue: '1'
                }
            ],
            nextStateId: 'END',
            serviceCode: 'touchupstick',
            unitPrice: 30
            //calcParams: ['Repaircode I', 'Zeit aus Ausbeulhilfe', 'Lackstufe 2 (bis 50%)', 'Metallic 2 Schicht']
        }
    },


// Kotflügel
    'fender.front.type': {
        pageTitle: 'Kotflügel Service View',
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            isTemplate: true,
            question: 'Welchen Service wünschen Sie?',
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
                    useConstants: [
                        {
                            useKey: 'answer.scratch.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.scratch.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: {
                        'fender.front.right.type': 'fender.front.right.scratch.type',
                        'fender.front.left.type': 'fender.front.left.scratch.type',
                    }
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.rust.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.rust.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: {
                        'fender.front.right.type': 'fender.front.right.rust.type',
                        'fender.front.left.type': 'fender.front.left.rust.type',
                    }
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.rockfall.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.rockfall.repair',
                            forKey: 'description'
                        }
                    ],
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
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            isTemplate: true,
            question: 'Welchen Service wünschen Sie für Ihren Kotflügel?',
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
                    useConstants: [
                        {
                            useKey: 'answer.scratch.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.scratch.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: {
                        'fender.rear.right.type': 'fender.rear.right.scratch.type',
                        'fender.rear.left.type': 'fender.rear.left.scratch.type',
                    }
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.rust.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.rust.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: {
                        'fender.rear.right.type': 'fender.rear.right.rust.type',
                        'fender.rear.left.type': 'fender.rear.left.rust.type',
                    }
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.rockfall.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.rockfall.repair',
                            forKey: 'description'
                        }
                    ],
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

    'fender.lacquer.type': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welchen Kotflügel möchten Sie lackieren?',
            answers: [
                {
                    answer: 'Kotflügel vorne links',
                    nextStateId: 'END',
                    serviceCode: 'fender.front.left.lacquer.complete',
                    calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
                },
                {
                    answer: 'Kotflügel vorne rechts',
                    nextStateId: 'END',
                    serviceCode: 'fender.front.right.lacquer.complete',
                    calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
                },
                {
                    answer: 'Kotflügel hinten links',
                    nextStateId: 'END',
                    serviceCode: 'fender.rear.left.lacquer.complete',
                    calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
                },
                {
                    answer: 'Kotflügel hinten rechts',
                    nextStateId: 'END',
                    serviceCode: 'fender.rear.right.lacquer.complete',
                    calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
                }
            ]
        }
    },

    'fender.rust.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Bitte beschreiben Sie Anzahl und Größe der Roststellen.',
            isTemplate: true,
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl Roststellen:',
                    defaultValue: '1'
                },
                {
                    type: 'dropdown',
                    answer: 'Gesamtfläche Roststellen:',
                    options: [
                        {value: 'klein (bis ca. 5 cm Durchmesser)'},
                        {value: 'mittel (zwischen 5 und 10 cm Durchmesser)'},
                        {value: 'groß (größer als 10 cm Durchmesser)'}
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
            question: 'Für welchen Kotflügel?',
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
            question: 'Welchen Kotflügel möchten Sie erneuern?',
            answers: [
                {
                    answer: 'Kotflügel vorne links',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450270 (Kotflügel komplett vorne links wechseln)',
                    calcParams: ['Repaircode E', 'Lackstufe 4 (Neuteil)', 'Metallic 2 Schicht']
                },
                {
                    answer: 'Kotflügel vorne rechts',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450271 (Kotflügel komplett vorne rechts wechseln)',
                    calcParams: ['Repaircode E', 'Lackstufe 4 (Neuteil)', 'Metallic 2 Schicht']
                },
                {
                    answer: 'Kotflügel hinten links',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450272 (Kotflügel komplett hinten links wechseln)',
                    calcParams: ['Repaircode E', 'Lackstufe 4 (Neuteil)', 'Metallic 2 Schicht']
                },
                {
                    answer: 'Kotflügel hinten rechts',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450273 (Kotflügel komplett hinten rechts wechseln)',
                    calcParams: ['Repaircode E', 'Lackstufe 4 (Neuteil)', 'Metallic 2 Schicht']
                }
            ]
        }
    },


// Kratzer
    'scratch.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Bitte beschreiben Sie den oder die Kratzer:',
            isTemplate: true,
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl Kratzer:',
                    defaultValue: '1'
                },
                {
                    type: 'dropdown',
                    answer: 'Gesamtlänge aller Kratzer:',
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
                'sill.left.scratch.type': 'sill.left.scratch.repair',
                'sill.right.scratch.type': 'sill.right.scratch.repair',
                'tailgate.scratch.type': 'tailgate.scratch.repair',
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
    'sill.left.scratch.type': {
        useTemplate: 'scratch.type'
    },
    'sill.right.scratch.type': {
        useTemplate: 'scratch.type'
    },
    'tailgate.scratch.type': {
        useTemplate: 'scratch.type'
    },


// Motorhaube
    'hood.type': {
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            isTemplate: true,
            question: 'Welchen Service wünschen Sie für Ihre Motorhaube?',
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
                    useConstants: [
                        {
                            useKey: 'answer.scratch.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.scratch.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'hood.scratch.type'
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.rockfall.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.rockfall.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'hood.rockfall.type'
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.haildamage.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.haildamage.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'hood.haildamage.type'
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
            question: 'Für welches Bauteil wünschen Sie einen Service?',
            answers: [
/*
                {
                    answer: 'Landign Page: Frontscheibe',
                    nextStateId: 'windshield.type',
                    newWindow: true
                },
*/
                {
                    answer: 'Dreieckscheibe links vorne wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450258 (Dreieckscheibe links vorne wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Dreieckscheibe rechts vorne wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450261 (Dreieckscheibe rechts vorne wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Frontscheibe Steinschlag reparieren',
                    nextStateId: 'END',
                    serviceCode: 'windshield.rockfall.repair',
                    calcParams: ['Repaircode I', 'Zeit aus Ausbeulhilfe', 'Lackstufe 2 (bis 50%)', 'Metallic 2 Schicht']
                },
                {
                    answer: 'Frontscheibe wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407537 (Frontscheibe wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Glas Außenspiegel links ersetzen',
                    nextStateId: 'END',
                    serviceCode: 'service-id-95663 (Glas Außenspiegel links wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Glas Außenspiegel rechts ersetzen',
                    nextStateId: 'END',
                    serviceCode: 'service-id-95641 (Glas Außenspiegel rechts wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Heckscheibe wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450250',
                    calcParams: ['Repaircode E']
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
                    answer: 'Nebelscheinwerfer vorne beide wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-409870 (Nebelscheinwerfer komplett vorne beide wechseln)',
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
                    answer: 'Scheinwerfer vorne beide wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407550 (Scheinwerfer komplett vorne beide wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Seitenscheibe Tür links vorne wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450253 (Seitenscheibe Tür links vorne wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Seitenscheibe Tür rechts vorne wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450254 (Seitenscheibe Tür rechts vorne wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Seitenscheibe Tür links hinten wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450255 (Seitenscheibe Tür links hinten wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Seitenscheibe Tür rechts hinten wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450256 (Seitenscheibe Tür rechts hinten wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Seitenfenster, Dreieckscheibe hinten links wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450262 (Seitenfenster, Dreieckscheibe hinten links wechseln)',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Seitenfenster, Dreieckscheibe hinten rechts wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450263 (Seitenfenster, Dreieckscheibe hinten rechts wechseln)',
                    calcParams: ['Repaircode E']
                }
            ]
        }
    },


// Scheinwerfer, Nebelscheinwerfer
    'headlight.type': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welchen Scheinwerfer / Nebelscheinwerfer möchten Sie tauschen?',
            answers: [
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
                    answer: 'Scheinwerfer vorne beide wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407550 (Scheinwerfer komplett vorne beide wechseln)',
                    calcParams: ['Repaircode E']
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
                    answer: 'Nebelscheinwerfer vorne beide wechseln',
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
            question: 'Welches Bauteil möchten Sie wechseln?',
            isTemplate: true,
            answers: [
                {
                    answer: {
                        'headlight.replace.front.left.type': 'Scheinwerfer vorne links wechseln',
                        'headlight.replace.front.right.type': 'Scheinwerfer vorne rechts wechseln',
                        'headlight.replace.front.both.type': 'Scheinwerfer vorne beide wechseln'
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
                        'headlight.replace.front.left.type': 'Nebelscheinwerfer vorne links wechseln',
                        'headlight.replace.front.right.type': 'Nebelscheinwerfer vorne rechts wechseln',
                        'headlight.replace.front.both.type': 'Nebelscheinwerfer vorne beide wechseln'
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
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            question: 'Welchen Service wünschen Sie?',
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
                    nextStateId: {
                        'sill.left.type': 'sill.left.spotrepair.type',
                        'sill.right.type': 'sill.right.spotrepair.type'
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
                        'sill.left.type': 'sill.left.dent.type',
                        'sill.right.type': 'sill.right.dent.type'
                    }
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.rockfall.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.rockfall.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: {
                        'sill.left.type': 'sill.left.rockfall.type',
                        'sill.right.type': 'sill.right.rockfall.type'
                    }
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.scratch.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.scratch.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: {
                        'sill.left.type': 'sill.left.scratch.type',
                        'sill.right.type': 'sill.right.scratch.type'
                    }
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
                        'sill.left.type': 'sill.left.replace',
                        'sill.right.type': 'sill.right.replace'
                    },
                    calcParams: ['Repaircode E']
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

    'sill.replace.type': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welchen Schweller möchten Sie ersetzen?',
            answers: [
                {
                    answer: 'Schweller links ersetzen',
                    nextStateId: 'END',
                    serviceCode: 'sill.left.replace',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Schweller rechts ersetzen',
                    nextStateId: 'END',
                    serviceCode: 'sill.right.replace',
                    calcParams: ['Repaircode E']
                }
            ]
        }
    },


// Seitenscheiben, Dreieckscheiben, Seitenfenster links
    'sidewindow.replace.type': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welchen Service wünschen Sie?',
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
            question: 'Bitte beschreiben Sie Ihren Schaden:',
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl der Spots:',
                    defaultValue: '1'
                }
            ],
            nextStateId: 'END',
            serviceCode: 'spotrepair',
            unitPrice: 80,
            calcParams: ['Repaircode C', 'Anzahl Spots / Streifschäden']
        }
    },
/*
    'spotrepair.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Bitte beschreiben Sie Ihren Schaden:',
            isTemplate: true,
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl der Spots:',
                    defaultValue: '1'
                },
                {
                    type: 'dropdown',
                    answer: 'Gesamtlänge der Streifschäden:',
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
                'sill.left.spotrepair.type': 'sill.left.spotrepair',
                'sill.right.spotrepair.type': 'sill.right.spotrepair',
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
    'sill.left.spotrepair.type': {
        useTemplate: 'spotrepair.type'
    },
    'sill.right.spotrepair.type': {
        useTemplate: 'spotrepair.type'
    },
*/


// Steinschlag
    'rockfall.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Wie viele Steinschläge in welcher Größe haben Sie?',
            isTemplate: true,
            checklist: [
                {
                    type: 'input',
                    answer: 'Anzahl Steinschläge:',
                    defaultValue: '1'
                },
                {
                    type: 'input',
                    answer: 'Durchmesser Steinschläge (mm):',
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
                'hood.rockfall.type': 'hood.rockfall.repair',
                'sill.left.rockfall.type': 'sill.left.rockfall.repair',
                'sill.right.rockfall.type': 'sill.right.rockfall.repair',
                'tailgate.rockfall.type': 'tailgate.rockfall.repair'
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
    'sill.left.rockfall.type': {
        useTemplate: 'rockfall.type'
    },
    'sill.right.rockfall.type': {
        useTemplate: 'rockfall.type'
    },
    'tailgate.rockfall.type': {
        useTemplate: 'rockfall.type'
    },

// Stoßstange, Stoßfänger
    'bumper.type': {
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            question: 'Welchen Service wünschen Sie für Ihren Stoßfänger?',
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
                    useConstants: [
                        {
                            useKey: 'answer.rockfall.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.rockfall.repair',
                            forKey: 'description'
                        }
                    ],
                    nextStateId: 'bumper.rockfall.type'
                },
                {
                    useConstants: [
                        {
                            useKey: 'answer.scratch.repair',
                            forKey: 'answer'
                        },
                        {
                            useKey: 'description.scratch.repair',
                            forKey: 'description'
                        }
                    ],
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
                    serviceCode: 'bumper.lacquer',
                    calcParams: ['Repaircode M', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
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
                    serviceCode: 'service-id-518536 (Frontschürze komplett wechseln)',
                    calcParams: ['Repaircode E']
                }
            ]
        }
    },


// Unfallschaden
    'accidentaldamage.type': {
        viewType: 'mixSelection',
        configs: {
            question: 'Bitte beschreiben Sie Ihren Schaden:',
            checklist: [
                {
                    type: 'radio',
                    answer: 'Ist Ihr Fahrzeug fahrbereit?',
                    options: [
                        {value: 'ja'},
                        {value: 'nein'}
                    ]
                }
            ],
            nextStateId: 'END',
            serviceCode: 'accidentaldamage',
            calcParams: ['FIN', 'Upload Bilder (0..5)', 'Schadensbeschreibung']
        }
    }

};

(function(states){
    var stateConstants = {
        'answer.replace': 'Wechsel des Bauteils',
        'answer.dent.repair': 'Einzelne Dellen entfernen',
        'answer.haildamage.repair': 'Hagelschaden reparieren',
        'answer.lacquer': 'Neulackierung des Bauteils',
        'answer.polish': 'Polieren',
        'answer.rockfall.repair': 'Steinschläge entfernen',
        'answer.rust.repair': 'Rost entfernen',
        'answer.scratch.repair': 'Kratzer entfernen',
        'answer.spotrepair': 'Spot Repair',

        'description.replace': 'Bei stärkeren Verformungen oder einer notwendigen Instandsetzung von über 50% des Bauteils ist in der Regel der Austausch des Bauteils günstiger, als die Instandsetzung. Je nach Ursache des Schadens können auch benachbarte Bauteile wie z.B. Halterungen in Mitleidenschaft gezogen worden sein, hier wird ist die Vorführung des Fahrzeugs in einem Fachbetrieb empfohlen (&lt;&lt;CrossLink Unfallschaden&gt;&gt;).',
        'description.dent.repair': 'Je nach Position am Fahrzeug lassen sich kleinere, oberflächlich Dellen unter Umständen auch durch Drücken oder ziehen entfernen. Größere, tiefere, an Kanten oder am Bauteilrand liegende Dellen müssen in der Regel mit Feinspachtel geebnet und das Bauteil komplett neu lackiert werden.',
        'description.haildamage.repair': 'Die meisten kleineren Dellen lassen sich ohne Lackierarbeiten entfernen, ausgenommen sind meist tiefe, scharfkantige oder in den Randbereichen eines Bauteils liegende Dellen. Sollte die Lackierung Ihres Fahrzeugs durch den Hagel beschädigt worden sein, ist eine einfache Reparatur nicht mehr möglich. Wählen Sie hierfür bitte die Option "Dellen entfernen".',
        'description.lacquer': 'Eine Neulackierung des Bauteils im Farbton des Fahrzeugs kann erforderlich sein, wenn der Lack im Laufe der Zeit stumpf oder fleckig geworden ist. Beachten Sie bitte, dass eine Neulackierung keine Beseitigung von Beschädigungen wie Kratzern, Dellen oder Steinschlägen beinhaltet.',
        'description.polish': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        'description.rockfall.repair': 'Steinschläge sind nicht nur unansehnlich, sondern die scharfkantigen Steine beschädigen meist auch die Grundierung und es bildet sich Rost, der sich auch unter dem Lack weiter ausbreitet. Je nach Lage am Fahrzeug muss unter Umständen das gesamte Bauteil neu lackiert werden, nachdem die betroffene Stelle ausgebessert worden ist.',
        'description.rust.repair': 'Um Rost langfristig zu entfernen, muss dieser zuerst restlos entfernt werden. Anschließend wird die Stelle großflächig für einen kompletten Neuaufbau des Lacks vorbereitet und anschließend das gesamte Bauteil lackiert. Bei größeren Rostflächen oder Durchrostung, wenden Sie sich bitte an einen Fachbetrieb (&lt;&lt;CrossLink Werkstattsuche&gt;&gt;).',
        'description.scratch.repair': 'Kratzer werden üblicherweise durch Schleifen und Ebnen der Fläche mit Feinspachtel und einer kompletten Lackierung des Bauteils beseitigt. Ist auch die Grundierung beschädigt, muss eventuell bereits entstandener Rost ebenfalls entfernt werden.',
        'description.spotrepair': 'Eine kostengünstige Alternative zur Reparatur kleinerer Beschädigungen ist die Spot Repair Methode. Beseitigt werden können Steinschläge, kleinere Kratzer und Lackfehler bis etwa 3,5 cm Durchmesser, allerdings keine Dellen. Bei Stoßstangen lassen sich so auch kleinere Streifschäden beheben. Spot Repair wird nur empfohlen an Stoßstangen und im unteren Bereich des Fahrzeugs.'
    };

    // beautify object structure

    forEachState(function(state, stateKey){
        // update states that use templates
        if (state.useTemplate) {
            $.extend(true, state, states[state.useTemplate]);

            applyTemplateForState(state, stateKey);
        }

        // set stateConstants for answers
        var answers = state.configs.answers || [];
        $.each(answers, checkAndSetConstants);

        // put stateKey in configs.id
        state.configs = state.configs || {};
        state.configs.id = stateKey;
    });

    forEachState(function(state){
        // set vehicleRequired property for child states
        inheritStateProperties(state, [
            {
                key: 'vehicleRequired',
                inheritValue: true
            },
            {
                key: 'calculable',
                inheritValue: true
            }
        ]);
    });

    function setAndReturnValueOfConfigId(value, stateKey){
        if (typeof value === 'object') {
            if (value[stateKey]) {
                return value[stateKey];
            } else if (value['default']) {
                return value['default'];
            } else {
                return value;
            }
        } else {
            return value;
        }
    }

    function applyTemplateForState(state, stateKey){
        var configs = state.configs;

        configs.question = setAndReturnValueOfConfigId(configs.question, stateKey);
        configs.serviceCode = setAndReturnValueOfConfigId(configs.serviceCode, stateKey);
        if (configs.img) {
            configs.img.file = setAndReturnValueOfConfigId(configs.img.file, stateKey);
        }

        if (configs.checklist) {
            configs.checklist = setAndReturnValueOfConfigId(configs.checklist, stateKey);
            configs.nextStateId = setAndReturnValueOfConfigId(configs.nextStateId, stateKey);
            configs.serviceCode = setAndReturnValueOfConfigId(configs.serviceCode, stateKey);
            configs.calcParams = setAndReturnValueOfConfigId(configs.calcParams, stateKey);
        }

        $.each(configs.answers || [], function(i, answer){
            answer.answer = setAndReturnValueOfConfigId(answer.answer, stateKey);
            answer.nextStateId = setAndReturnValueOfConfigId(answer.nextStateId, stateKey);
            answer.newWindow = setAndReturnValueOfConfigId(answer.newWindow, stateKey);
            answer.serviceCode = setAndReturnValueOfConfigId(answer.serviceCode, stateKey);
            answer.description = setAndReturnValueOfConfigId(answer.description, stateKey);
            answer.calcParams = setAndReturnValueOfConfigId(answer.calcParams, stateKey);
        });
    }

    function forEachState(callback){
        for (var stateKey in states) {
            var state = states[stateKey];
            callback(state, stateKey);
        }
    }

    function checkAndSetConstants(i, answer){
        var useConstants = answer.useConstants;
        if (useConstants) {
            $.each(useConstants, function(j, setting){
                answer[setting.forKey] = stateConstants[setting.useKey];
            });
        }
    }

    function inheritStateProperties(state, properties){
        // check only for states whose property propertiesInherited is not true
        if (state.propertiesInherited !== true) {
            // set propertiesInherited
            state.propertiesInherited = true;

            var answers = state.configs.answers || [];
            if (!answers.length) {
                $.each(properties || [], function(i, property){
                    state.configs[property.key] = property.value;
                });
                //state.configs.vehicleRequired = vehicleRequired;
            }

            //console.log(state.configs.id);
            $.each(answers, function(i, answer){
                setAnswerInheritedProperties(answer, properties);
            });
        }
    }

    function setAnswerInheritedProperties(answer, properties){
        $.each(properties || [], function(i, property){
            /*
            if (answer.vehicleRequired !== true) {
                answer.vehicleRequired = vehicleRequired;
            }
            */
            if (answer[property.key] !== property.inheritValue) {
                answer[property.key] = property.value;
            }
                //console.log(vehicleRequired);
                //console.log(state.configs.id);
                //console.log(answer);
        });
        // need to check children states for vehicleRequired answer
        if (hasAnswerPropertyToInherit(answer, properties) && answer.nextStateId && answer.nextStateId !== 'END') {
            //console.log('set next vehicleRequired for next state: ' + answer.nextStateId);
            inheritStateProperties(states[answer.nextStateId], returnUpdatedProperties(answer, properties));
        }
    }

    function hasAnswerPropertyToInherit(answer, properties){
        var output = false;
        $.each(properties || [], function(i, property){
            if (answer[property.key] === property.inheritValue){
                output = true;
                return;
            }
        });
        return output;
    }

    function returnUpdatedProperties(answer, properties){
        var output = [];
        $.each(properties || [], function(i, property){
            var newProperty = $.extend({},property);
            newProperty.value = answer[newProperty.key];
            output.push(newProperty);
        });
        return output;
    }
})(states);
