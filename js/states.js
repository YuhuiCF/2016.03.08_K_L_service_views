
var states = {
// Static states:
//  'END'
//  'SERVICEGROUP'

    'SERVICEGROUP': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welche Leistung wünschen Sie?',
            answers: []
        }
    },


// Kategorie 0
    'category0': {
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            question: 'Welche Leistung wünschen Sie?',
            answers: [
                {
                    answer: 'Lackstift',
                    description: 'Lorem ipsum',
                    nextStateId: 'touchupstick.view'
                },
                {
                    answer: 'Einzelne Dellen entfernen',
                    description: 'Lorem ipsum',
                    nextStateId: 'dent.repair.view'
                },
                {
                    answer: 'Spot Repair',
                    description: 'Lorem ipsum',
                    nextStateId: 'spotrepair.view'
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
                    //nextStateId: 'window.glas.view',
                },
                */
                {
                    answer: 'Services für Scheiben und Glas',
                    description: 'Lorem ipsum',
                    nextStateId: 'window.glas.view'
                },
                {
                    answer: 'Neulackierung des Bauteils',
                    description: 'Lorem ipsum',
                    nextStateId: 'lacquer.components.view'
                },
                {
                    answer: 'Wechsel des Bauteils',
                    description: 'Lorem ipsum',
                    nextStateId: 'replace.components.view'
                },
                {
                    answer: 'Fahrzeug lackieren',
                    description: 'Lorem ipsum',
                    nextStateId: 'vehicle.complete.lacquer.view'
                },
                {
                    answer: 'Sie haben einen Unfallschaden?',
                    description: 'Lorem ipsum',
                    nextStateId: 'accidentaldamage.view'
                },
                {
                    answer: 'Schaden Begutachten lassen',
                    description: 'Lorem ipsum',
                    nextStateId: 'examinedamage.view'
                },
                {
                    description: 'Lorem ipsum',
                    nextStateId: 'END',
                    serviceCode: 'locations.search'
                },
                {
                    answer: 'Landing pages',
                    description: 'Available Service Landing Pages',
                    nextStateId: 'landingpages'
                }
            ]
        }
    },


// Bauteile (Lackieren)
    'lacquer.components.view': {
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
                    serviceCode: 'tailgate.lacquer'
                },
                {
                    answer: 'Kotflügel vorne links',
                    nextStateId: 'END',
                    serviceCode: 'fender.front.left.lacquer'
                },
                {
                    answer: 'Kotflügel vorne rechts',
                    nextStateId: 'END',
                    serviceCode: 'fender.front.right.lacquer'
                },
                {
                    answer: 'Kotflügel / Seitenwand hinten links',
                    nextStateId: 'END',
                    serviceCode: 'fender.rear.left.lacquer'
                },
                {
                    answer: 'Kotflügel / Seitenwand hinten rechts',
                    nextStateId: 'END',
                    serviceCode: 'fender.rear.right.lacquer'
                },
                {
                    answer: 'Motorhaube',
                    nextStateId: 'END',
                    serviceCode: 'hood.lacquer'
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
    'replace.components.view': {
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
                    serviceCode: 'service-id-450268'
                },
                {
                    answer: 'Gehäuse Außenspiegel rechts',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450269'
                },
/*
                {
                    answer: 'Felgen',
                    //nextStateId: 'rim.view'
                },
                {
                    answer: 'Frontscheibe austauschen',
                    description: 'Ist eine Reparatur nicht mehr möglich, muss die alte Scheibe fachgerecht herausgetrennt und nach einer gründlichen Reinigung die Neue eingebaut werden. Hierzu verwenden unsere Fachwerkstätten nur hochwertige Scheiben und Hochleistungsklebstoff.',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407537',
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
                    serviceCode: 'service-id-450270'
                },
                {
                    answer: 'Kotflügel vorne rechts',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450271'
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
                    serviceCode: 'service-id-409871',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Nebelscheinwerfer vorne rechts (Single Service)',
                    nextStateId: 'END',
                    serviceCode: 'service-id-409872',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Scheinwerfer vorne links (Single Service)',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407548',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Scheinwerfer vorne rechts (Single Service)',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407549',
                    calcParams: ['Repaircode E']
                },
                {
                    answer: 'Schweller',
                    nextStateId: 'sill.replace.view'
                },
                {
                    answer: 'Seitenscheiben, Dreieckscheiben, Seitenfenster links',
                    nextStateId: 'sidewindow.left.replace.view'
                },
                {
                    answer: 'Seitenscheiben, Dreieckscheiben, Seitenfenster rechts',
                    nextStateId: 'sidewindow.right.replace.view'
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


    'landingpages': {
        viewType: 'radioSelection',
        configs: {
            question: 'Landing Page:',
            answers: [
                {
                    answer: 'Autotür lackieren',
                    newWindow: true,
                    nextStateId: 'door.lacquer.view'
                },
                {
                    answer: 'Außenspiegel',
                    newWindow: true,
                    nextStateId: 'mirror.services.template.view'
                },
                {
                    answer: 'Fahrzeug lackieren',
                    newWindow: true,
                    nextStateId: 'vehicle.complete.lacquer.view'
                },
                {
                    answer: 'Frontscheibe wechseln',
                    newWindow: true,
                    nextStateId: 'SERVICEGROUP',
                    serviceCodes: ['service-id-407537']
                },
                /*
                {
                    answer: 'Kotflügel vorne rechts',
                    newWindow: true,
                    nextStateId: 'fender.front.right.view'
                },
                */
                {
                    answer: 'Scheiben und Glas',
                    newWindow: true,
                    nextStateId: 'window.glas.view'
                },
                {
                    answer: 'Spiegelglas wechseln',
                    newWindow: true,
                    nextStateId: 'mirror.glas.replace.view'
                }
            ]
        }
    },


// Begutachtung
    'examinedamage.view': {
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
    'vehicle.complete.view': {
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
                    nextStateId: 'vehicle.haildamage.view'
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
                    nextStateId: 'vehicle.complete.lacquer.view'
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
    'mirror.components.view': {
        pageTitle: 'Außenspiegel',
        viewType: 'radioSelection',
        configs: {
            question: 'Leistungen',
            answers: [
                {
                    answer: 'Leistungen für den Außenspiegel links',
                    nextStateId: 'mirror.left.view'
                },
                {
                    answer: 'Leistungen für den Außenspiegel rechts',
                    nextStateId: 'mirror.right.view'
                },
                {
                    answer: 'Beide Außenspiegel ersetzen',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450284'
                }
            ]
        }
    },

    'mirror.services.view': {
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            question: 'Welchen Service wünschen Sie?',
            isTemplate: true,
            answers: [
                {
                    answer: 'Glas ersetzen',
                    //description: 'Eine kostengünstige Alternative zum Tausch des kompletten Außenspiegels ist der Austausch des Glases. Dies ist allerdings nur dann möglich, wenn das Gehäuse keine Beschädigungen aufweist.',
                    nextStateId: 'mirror.glas.replace.view'
                },
                {
                    answer: 'Außenspiegel ersetzen',
                    //description: 'Ist das Gehäuse des Außenspiegels beschädigt und unter Umständen sogar gebrochen, hilft nur noch der Austausch gegen ein Neuteil.',
                    nextStateId: 'mirror.replace.view'
                },
                {
                    answer: 'Außenspiegel lackieren',
                    //description: 'Eine kostengünstige Alternative zum Tausch des kompletten Außenspiegels ist der Austausch des Glases. Dies ist allerdings nur dann möglich, wenn das Gehäuse keine Beschädigungen aufweist.',
                    nextStateId: 'mirror.lacquer.view'
                }
            ]
        }
    },

    'mirror.services.template.view': {
        pageTitle: {
            'mirror.left.view': 'Außenspiegel links',
            'mirror.right.view': 'Außenspiegel rechts'
        },
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            question: 'Welchen Service wünschen Sie?',
            isTemplate: true,
            answers: [
                {
                    answer: 'Glas ersetzen',
                    //description: 'Eine kostengünstige Alternative zum Tausch des kompletten Außenspiegels ist der Austausch des Glases. Dies ist allerdings nur dann möglich, wenn das Gehäuse keine Beschädigungen aufweist.',
                    nextStateId: {
                        'mirror.left.view': 'mirror.left.glas.replace.view',
                        'mirror.right.view': 'mirror.right.glas.replace.view'
                    }
                },
                /*
                {
                    answer: 'Kratzer, Steinschlag reparieren',
                    description: 'Kleine Beschädigungen lassen sich oft reparieren, indem die Beschädigungen beseitigt werden und der Spiegel neu lackiert wird. Eine fachgerecht instandgesetzter Seitenspiegel sieht aus wie neu.',
                    nextStateId: 'END',
                    serviceCode: {
                        'mirror.left.view': 'mirror.left.scratch.rockfall.repair',
                        'mirror.right.view': 'mirror.right.scratch.rockfall.repair'
                    },
                    calcParams: ['Repaircode M', 'Lackstufe 1', 'Metallic 2 Schicht']
                },
                */
                {
                    answer: 'Außenspiegel ersetzen',
                    //description: 'Ist das Gehäuse des Außenspiegels beschädigt und unter Umständen sogar gebrochen, hilft nur noch der Austausch gegen ein Neuteil.',
                    nextStateId: 'END',
                    serviceCode: {
                        'mirror.left.view': 'service-id-450268',
                        'mirror.right.view': 'service-id-450269'
                    }
                },
                {
                    answer: 'Außenspiegel lackieren',
                    //description: 'Eine kostengünstige Alternative zum Tausch des kompletten Außenspiegels ist der Austausch des Glases. Dies ist allerdings nur dann möglich, wenn das Gehäuse keine Beschädigungen aufweist.',
                    nextStateId: 'END',
                    serviceCode: {
                        'mirror.left.view': 'mirror.left.lacquer',
                        'mirror.right.view': 'mirror.right.lacquer'
                    }
                }
            ]
        }
    },
    'mirror.left.view': {
        useTemplate: 'mirror.services.template.view'
    },
    'mirror.right.view': {
        useTemplate: 'mirror.services.template.view'
    },

    'mirror.lacquer.view': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welchen Service wünschen Sie?',
            answers: [
                {
                    nextStateId: 'END',
                    serviceCode: 'mirror.left.lacquer'
                },
                {
                    nextStateId: 'END',
                    serviceCode: 'mirror.right.lacquer'
                }
            ]
        }
    },

    'mirror.replace.view': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welchen Service wünschen Sie?',
            answers: [
                {
                    nextStateId: 'END',
                    serviceCode: 'service-id-450268'
                },
                {
                    nextStateId: 'END',
                    serviceCode: 'service-id-450269'
                }
            ]
        }
    },

    'mirror.all.replace.template.view': {
        pageTitle: 'Außenspiegel und Glas ersetzen',
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            question: 'Welchen Service wünschen Sie?',
            isTemplate: true,
            answers: [
                {
                    answer: 'Glas ersetzen',
                    description: 'Eine kostengünstige Alternative zum Tausch des kompletten Außenspiegels ist der Austausch des Glases. Dies ist allerdings nur dann möglich, wenn das Gehäuse keine Beschädigungen aufweist.',
                    nextStateId: {
                        'mirror.left.view': 'mirror.left.glas.replace.view',
                        'mirror.right.view': 'mirror.right.glas.replace.view'
                    }
                },
                {
                    answer: 'Außenspiegel ersetzen',
                    description: 'Ist das Gehäuse des Außenspiegels beschädigt und unter Umständen sogar gebrochen, hilft nur noch der Austausch gegen ein Neuteil.',
                    nextStateId: 'END',
                    serviceCode: {
                        'mirror.left.view': 'service-id-450268',
                        'mirror.right.view': 'service-id-450269'
                    }
                }
            ]
        }
    },
    'mirror.left.replace.view': {
        useTemplate: 'mirror.all.replace.template.view'
    },
    'mirror.right.replace.view': {
        useTemplate: 'mirror.all.replace.template.view'
    },

    'mirror.glas.replace.view': {
        pageTitle: 'Spiegelglas wechseln',
        viewType: 'radioSelection',
        configs: {
            question: 'Welchen Service wünschen Sie?',
            isTemplate: true,
            answers: [
                {
                    nextStateId: 'END',
                    serviceCode: 'service-id-95663'
                },
                {
                    nextStateId: 'END',
                    serviceCode: 'service-id-95641'
                },
                {
                    nextStateId: 'END',
                    serviceCode: 'service-id-345091'
                },
                {
                    nextStateId: 'END',
                    serviceCode: 'service-id-355773'
                }
            ]
        }
    },

    'mirror.glas.replace.template.view': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welchen Service wünschen Sie?',
            isTemplate: true,
            answers: [
                {
                    answer: {
                        'mirror.left.glas.replace.view': 'Glas Außenspiegel links ersetzen',
                        'mirror.right.glas.replace.view': 'Glas Außenspiegel rechts ersetzen'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'mirror.left.glas.replace.view': 'service-id-95663',
                        'mirror.right.glas.replace.view': 'service-id-95641'
                    }
                },
                {
                    answer: {
                        'mirror.left.glas.replace.view': 'Glas Außenspiegel links (Weitwinkel) ersetzen',
                        'mirror.right.glas.replace.view': 'Glas Außenspiegel rechts (Weitwinkel) ersetzen'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'mirror.left.glas.replace.view': 'service-id-345091',
                        'mirror.right.glas.replace.view': 'service-id-355773'
                    }
                }
            ]
        }
    },
    'mirror.left.glas.replace.view': {
        useTemplate: 'mirror.glas.replace.template.view'
    },
    'mirror.right.glas.replace.view': {
        useTemplate: 'mirror.glas.replace.template.view'
    },


// Dellen
    'dent.repair.view': {
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
    'dent.repair.view': {
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
                'bumper.dent.view': 'bumper.dent.repair',
                'fender.front.right.dent.view': 'fender.front.right.dent.repair',
                'fender.front.left.dent.view': 'fender.front.left.dent.repair',
                'fender.rear.right.dent.view': 'fender.rear.right.dent.repair',
                'fender.rear.left.dent.view': 'fender.rear.left.dent.repair',
                'hood.dent.view': 'hood.dent.repair',
                'roof.dent.view': 'roof.dent.repair',
                'sill.left.dent.view': 'sill.left.dent.repair',
                'sill.right.dent.view': 'sill.right.dent.repair',
                'tailgate.dent.view': 'tailgate.dent.repair'
            },
            calcParams: ['Repaircode I', 'Zeit aus Ausbeulhilfe', 'Lackstufe 2 (bis 50%)', 'Metallic 2 Schicht']
        }
    },
    'bumper.dent.view': {
        useTemplate: 'dent.repair.view'
    },
    'fender.front.right.dent.view': {
        useTemplate: 'dent.repair.view'
    },
    'fender.front.left.dent.view': {
        useTemplate: 'dent.repair.view'
    },
    'fender.rear.right.dent.view': {
        useTemplate: 'dent.repair.view'
    },
    'fender.rear.left.dent.view': {
        useTemplate: 'dent.repair.view'
    },
    'hood.dent.view': {
        useTemplate: 'dent.repair.view'
    },
    'roof.dent.view': {
        useTemplate: 'dent.repair.view'
    },
    'sill.left.dent.view': {
        useTemplate: 'dent.repair.view'
    },
    'sill.right.dent.view': {
        useTemplate: 'dent.repair.view'
    },
    'tailgate.dent.view': {
        useTemplate: 'dent.repair.view'
    },
*/


// Fahrzeugdach
    'roof.view': {
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
                    nextStateId: 'roof.dent.view'
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
                    nextStateId: 'roof.scratch.view'
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
                    nextStateId: 'roof.rockfall.repair.view'
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
                    nextStateId: 'roof.haildamage.view',
                }
            ]
        }
    },
    'roof.rockfall.repair.view': {
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
    'vehicle.complete.lacquer.view': {
        pageTitle: 'Fahrzeug lackieren',
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
    'rim.view': {
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
    'windshield.view': {
        pageTitle: 'Frontscheibe Service View',
        viewType: 'singleSelectionWithBlockDescription',
        configs: {
            question: 'Welchen Service wünschen Sie?',
            answers: [
                {
                    answer: 'Frontscheibe reparieren',
                    description: 'Die Reparatur der Frontscheibe ist günstiger und geht schneller, als der Austausch. Allerdings können Schäden nur dann repariert werden, wenn sie nicht im Sichtfeld des Fahrers liegen oder im Randbereich der Scheibe. Repariert werden können oberflächliche Steinschläge und kleine Risse bis maximal 2,5 cm Länge. Zudem dürfen maximal 2 Steinschläge repariert werden, danach bleibt nur noch der Tausch der Scheibe.',
                    nextStateId: 'windshield.repair.view'
                },
                /*
                {
                    answer: 'Frontscheiben versiegeln',
                    description: 'Die Scheibe wird gereinigt und mit einer Nano-Politur versiegelt, danke Lotus-Effekt haftet weniger Schmutz an der Scheibe und das Wasser perlt besser ab.',
                    nextStateId: 'END',
                    serviceCode: 'windshield.sealing',
                    calcParams: ['Festpreis']
                },
                */
                {
                    answer: 'Frontscheibe austauschen',
                    description: 'Ist eine Reparatur nicht mehr möglich, muss die alte Scheibe fachgerecht herausgetrennt und nach einer gründlichen Reinigung die Neue eingebaut werden. Hierzu verwenden unsere Fachwerkstätten nur hochwertige Scheiben und Hochleistungsklebstoff.',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407537'
                }
            ]
        }
    },
    'windshield.repair.view': {
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
                    serviceCode: 'service-id-407537'
                },
                {
                    answer: 'Nein',
                    nextStateId: 'windshield.repair.number.view'
                }
            ]
        }
    },
    /*
    'windshield.repair.number.view': {
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
    */


// Hagelschaden
/*
    'haildamage.view': {
        viewType: 'radioSelection',
        configs: {
            question: 'Sind die Dellen teilweise größer als 20 mm?',
            isTemplate: true,
            answers: [
                {
                    answer: 'Ja',
                    nextStateId: {
                        'hood.haildamage.view': 'hood.haildamage.severe.view',
                        'roof.haildamage.view': 'roof.haildamage.severe.view',
                        'tailgate.haildamage.view': 'tailgate.haildamage.severe.view',
                        'vehicle.haildamage.view': 'vehicle.haildamage.severe.view'
                    }
                },
                {
                    answer: 'Nein',
                    nextStateId: {
                        'hood.haildamage.view': 'hood.haildamage.minor.view',
                        'roof.haildamage.view': 'roof.haildamage.minor.view',
                        'tailgate.haildamage.view': 'tailgate.haildamage.minor.view',
                        'vehicle.haildamage.view': 'vehicle.haildamage.minor.view'
                    }
                },
            ]
        }
    },
    'hood.haildamage.view': {
        useTemplate: 'haildamage.view'
    },
    'roof.haildamage.view': {
        useTemplate: 'haildamage.view'
    },
    'tailgate.haildamage.view': {
        useTemplate: 'haildamage.view'
    },
    'vehicle.haildamage.view': {
        useTemplate: 'haildamage.view'
    },

    'haildamage.damage.view': {
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
                'hood.haildamage.minor.view': 'hood.haildamage.minor',
                'roof.haildamage.minor.view': 'roof.haildamage.minor',
                'tailgate.haildamage.minor.view': 'tailgate.haildamage.minor',
                'vehicle.haildamage.minor.view': 'vehicle.haildamage.minor',
                'hood.haildamage.severe.view': 'hood.haildamage.severe',
                'roof.haildamage.severe.view': 'roof.haildamage.severe',
                'tailgate.haildamage.severe.view': 'tailgate.haildamage.severe',
                'vehicle.haildamage.severe.view': 'vehicle.haildamage.severe',
            },
            calcParams: {
                'hood.haildamage.minor.view': ['D (nur Drücken)', 'Methode 2', 'Anzahl Dellen', 'Dellengröße'],
                'roof.haildamage.minor.view': ['D (nur Drücken)', 'Methode 2', 'Anzahl Dellen', 'Dellengröße'],
                'tailgate.haildamage.minor.view': ['D (nur Drücken)', 'Methode 2', 'Anzahl Dellen', 'Dellengröße'],
                'vehicle.haildamage.minor.view': ['D (nur Drücken)', 'Methode 2', 'Anzahl Dellen', 'Dellengröße'],
                'default': ['DVL (Vordrücken, Lackieren)', 'Lackstufe 3 (über 50%)', 'Anzahl Dellen']
            }
        }
    },
    'hood.haildamage.minor.view': {
        useTemplate: 'haildamage.damage.view'
    },
    'roof.haildamage.minor.view': {
        useTemplate: 'haildamage.damage.view'
    },
    'tailgate.haildamage.minor.view': {
        useTemplate: 'haildamage.damage.view'
    },
    'vehicle.haildamage.minor.view': {
        useTemplate: 'haildamage.damage.view'
    },
    'hood.haildamage.severe.view': {
        useTemplate: 'haildamage.damage.view'
    },
    'roof.haildamage.severe.view': {
        useTemplate: 'haildamage.damage.view'
    },
    'tailgate.haildamage.severe.view': {
        useTemplate: 'haildamage.damage.view'
    },
    'vehicle.haildamage.severe.view': {
        useTemplate: 'haildamage.damage.view'
    },
    */


// Heckklappe / Kofferraumdeckel
    'tailgate.view': {
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
                    nextStateId: 'tailgate.dent.view'
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
                    nextStateId: 'tailgate.scratch.view'
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
                    nextStateId: 'tailgate.rockfall.view'
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
                    nextStateId: 'tailgate.haildamage.view'
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
                    serviceCode: 'tailgate.lacquer'
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
                    serviceCode: 'tailgate.replace'
                }
            ]
        }
    },


// Lackstift
    'touchupstick.view': {
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
            serviceCode: 'touchupstick'
        }
    },


// Kotflügel
    'fender.front.view': {
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
                        'fender.front.right.view': 'fender.front.right.spotrepair.view',
                        'fender.front.left.view': 'fender.front.left.spotrepair.view'
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
                        'fender.front.right.view': 'fender.front.right.dent.view',
                        'fender.front.left.view': 'fender.front.left.dent.view'
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
                        'fender.front.right.view': 'fender.front.right.scratch.view',
                        'fender.front.left.view': 'fender.front.left.scratch.view',
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
                        'fender.front.right.view': 'fender.front.right.rust.view',
                        'fender.front.left.view': 'fender.front.left.rust.view',
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
                        'fender.front.right.view': 'fender.front.right.rockfall.view',
                        'fender.front.left.view': 'fender.front.left.rockfall.view',
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
                        'fender.front.right.view': 'fender.front.right.lacquer',
                        'fender.front.left.view': 'fender.front.left.lacquer'
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
                        'fender.front.right.view': 'service-id-450271',
                        'fender.front.left.view': 'service-id-450270'
                    }
                }
            ]
        }
    },
    'fender.rear.view': {
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
                        'fender.rear.right.view': 'fender.rear.right.dent.view',
                        'fender.rear.left.view': 'fender.rear.left.dent.view'
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
                        'fender.rear.right.view': 'fender.rear.right.scratch.view',
                        'fender.rear.left.view': 'fender.rear.left.scratch.view',
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
                        'fender.rear.right.view': 'fender.rear.right.rust.view',
                        'fender.rear.left.view': 'fender.rear.left.rust.view',
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
                        'fender.rear.right.view': 'fender.rear.right.rockfall.view',
                        'fender.rear.left.view': 'fender.rear.left.rockfall.view',
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
                        'fender.rear.right.view': 'fender.rear.right.lacquer',
                        'fender.rear.left.view': 'fender.rear.left.lacquer'
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
                        'fender.rear.right.view': 'service-id-450273',
                        'fender.rear.left.view': 'service-id-450272'
                    }
                }
            ]
        }
    },
    'fender.front.right.view': {
        useTemplate: 'fender.front.view'
    },
    'fender.front.left.view': {
        useTemplate: 'fender.front.view'
    },
    'fender.rear.right.view': {
        useTemplate: 'fender.rear.view'
    },
    'fender.rear.left.view': {
        useTemplate: 'fender.rear.view'
    },

    'fender.lacquer.view': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welchen Kotflügel möchten Sie lackieren?',
            answers: [
                {
                    answer: 'Kotflügel vorne links',
                    nextStateId: 'END',
                    serviceCode: 'fender.front.left.lacquer'
                },
                {
                    answer: 'Kotflügel vorne rechts',
                    nextStateId: 'END',
                    serviceCode: 'fender.front.right.lacquer'
                },
                {
                    answer: 'Kotflügel hinten links',
                    nextStateId: 'END',
                    serviceCode: 'fender.rear.left.lacquer'
                },
                {
                    answer: 'Kotflügel hinten rechts',
                    nextStateId: 'END',
                    serviceCode: 'fender.rear.right.lacquer'
                }
            ]
        }
    },

/*
    'fender.rust.view': {
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
                'fender.front.right.rust.view': 'fender.front.right.rust.repair',
                'fender.front.left.rust.view': 'fender.front.left.rust.repair',
                'fender.rear.right.rust.view': 'fender.rear.right.rust.repair',
                'fender.rear.left.rust.view': 'fender.rear.left.rust.repair'
            },
            calcParams: ['Repaircode I', 'Zeit aus Ausbeulhilfe', 'Lackstufe 2 (bis 50%)', 'Metallic 2 Schicht']
        }
    },
    'fender.front.left.rust.view': {
        useTemplate: 'fender.rust.view'
    },
    'fender.front.right.rust.view': {
        useTemplate: 'fender.rust.view'
    },
    'fender.rear.left.rust.view': {
        useTemplate: 'fender.rust.view'
    },
    'fender.rear.right.rust.view': {
        useTemplate: 'fender.rust.view'
    },
    */

    'fender.position.view': {
        viewType: 'radioSelection',
        configs: {
            question: 'Für welchen Kotflügel?',
            answers: [
                {
                    answer: 'Kotflügel vorne rechts',
                    nextStateId: 'fender.front.right.view'
                },
                {
                    answer: 'Kotflügel vorne links',
                    nextStateId: 'fender.front.left.view'
                },
                {
                    answer: 'Kotflügel hinten rechts',
                    nextStateId: 'fender.rear.right.view'
                },
                {
                    answer: 'Kotflügel hinten links',
                    nextStateId: 'fender.rear.left.view'
                }
            ]
        }
    },

    'fender.replace.view': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welchen Kotflügel möchten Sie erneuern?',
            answers: [
                {
                    answer: 'Kotflügel vorne links',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450270'
                },
                {
                    answer: 'Kotflügel vorne rechts',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450271'
                },
                {
                    answer: 'Kotflügel hinten links',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450272'
                },
                {
                    answer: 'Kotflügel hinten rechts',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450273'
                }
            ]
        }
    },


// Kratzer
/*
    'scratch.view': {
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
                'bumper.scratch.view': 'bumper.scratch.repair',
                'fender.front.right.scratch.view': 'fender.front.right.scratch.repair',
                'fender.front.left.scratch.view': 'fender.front.left.scratch.repair',
                'fender.rear.right.scratch.view': 'fender.rear.right.scratch.repair',
                'fender.rear.left.scratch.view': 'fender.rear.left.scratch.repair',
                'hood.scratch.view': 'hood.scratch.repair',
                'roof.scratch.view': 'roof.scratch.repair',
                'sill.left.scratch.view': 'sill.left.scratch.repair',
                'sill.right.scratch.view': 'sill.right.scratch.repair',
                'tailgate.scratch.view': 'tailgate.scratch.repair',
            },
            calcParams: ['Repaircode I', 'Zeit aus Ausbeulhilfe', 'Lackstufe 2 (bis 50%)', 'Metallic 2 Schicht']
        }
    },
    'bumper.scratch.view': {
        useTemplate: 'scratch.view'
    },
    'fender.front.right.scratch.view': {
        useTemplate: 'scratch.view'
    },
    'fender.front.left.scratch.view': {
        useTemplate: 'scratch.view'
    },
    'fender.rear.right.scratch.view': {
        useTemplate: 'scratch.view'
    },
    'fender.rear.left.scratch.view': {
        useTemplate: 'scratch.view'
    },
    'hood.scratch.view': {
        useTemplate: 'scratch.view'
    },
    'roof.scratch.view': {
        useTemplate: 'scratch.view'
    },
    'sill.left.scratch.view': {
        useTemplate: 'scratch.view'
    },
    'sill.right.scratch.view': {
        useTemplate: 'scratch.view'
    },
    'tailgate.scratch.view': {
        useTemplate: 'scratch.view'
    },
*/

// Motorhaube
    'hood.view': {
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
                    nextStateId: 'hood.dent.view'
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
                    nextStateId: 'hood.scratch.view'
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
                    nextStateId: 'hood.rockfall.view'
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
                    nextStateId: 'hood.haildamage.view'
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
                    serviceCode: 'hood.lacquer'
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
                    serviceCode: 'hood.replace'
                }
            ]
        }
    },


// Scheiben & Glas
    'window.glas.view': {
        pageTitle: 'Scheiben und Glas',
        viewType: 'radioSelection',
        configs: {
            question: 'Für welches Bauteil wünschen Sie einen Service?',
            answers: [
/*
                {
                    answer: 'Landing Page: Frontscheibe',
                    nextStateId: 'windshield.view',
                    newWindow: true
                },
*/
                {
                    answer: 'Dreieckscheibe links vorne wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450258',
                },
                {
                    answer: 'Dreieckscheibe rechts vorne wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450261',
                },
                /*
                {
                    answer: 'Frontscheibe Steinschlag reparieren',
                    nextStateId: 'END',
                    serviceCode: 'windshield.rockfall.repair',
                    calcParams: ['Repaircode I', 'Zeit aus Ausbeulhilfe', 'Lackstufe 2 (bis 50%)', 'Metallic 2 Schicht']
                },
                */
                {
                    answer: 'Frontscheibe wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407537',
                },
                {
                    answer: 'Glas Außenspiegel links ersetzen',
                    nextStateId: 'END',
                    serviceCode: 'service-id-95663',
                },
                {
                    answer: 'Glas Außenspiegel rechts ersetzen',
                    nextStateId: 'END',
                    serviceCode: 'service-id-95641',
                },
                {
                    answer: 'Heckscheibe wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450250',
                },
                {
                    answer: 'Nebelscheinwerfer vorne links wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-409871',
                },
                {
                    answer: 'Nebelscheinwerfer vorne rechts wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-409872',
                },
                {
                    answer: 'Nebelscheinwerfer vorne beide wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-409870',
                },
                {
                    answer: 'Scheinwerfer vorne links wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407548',
                },
                {
                    answer: 'Scheinwerfer vorne rechts wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407549',
                },
                {
                    answer: 'Scheinwerfer vorne beide wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407550',
                },
                {
                    answer: 'Seitenscheibe Tür links vorne wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450253',
                },
                {
                    answer: 'Seitenscheibe Tür rechts vorne wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450254',
                },
                {
                    answer: 'Seitenscheibe Tür links hinten wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450255',
                },
                {
                    answer: 'Seitenscheibe Tür rechts hinten wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450256',
                },
                {
                    answer: 'Seitenfenster, Dreieckscheibe hinten links wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450262',
                },
                {
                    answer: 'Seitenfenster, Dreieckscheibe hinten rechts wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-450263',
                }
            ]
        }
    },


// Scheinwerfer, Nebelscheinwerfer
    'headlight.view': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welchen Scheinwerfer / Nebelscheinwerfer möchten Sie tauschen?',
            answers: [
                {
                    answer: 'Scheinwerfer vorne links wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407548'
                },
                {
                    answer: 'Scheinwerfer vorne rechts wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407549'
                },
                {
                    answer: 'Scheinwerfer vorne beide wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-407550'
                },
                {
                    answer: 'Nebelscheinwerfer vorne links wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-409871'
                },
                {
                    answer: 'Nebelscheinwerfer vorne rechts wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-409872'
                },
                {
                    answer: 'Nebelscheinwerfer vorne beide wechseln',
                    nextStateId: 'END',
                    serviceCode: 'service-id-409870'
                }
            ]
        }
    },

    'headlight.replace.view': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welches Bauteil möchten Sie wechseln?',
            isTemplate: true,
            answers: [
                {
                    answer: {
                        'headlight.replace.front.left.view': 'Scheinwerfer vorne links wechseln',
                        'headlight.replace.front.right.view': 'Scheinwerfer vorne rechts wechseln',
                        'headlight.replace.front.both.view': 'Scheinwerfer vorne beide wechseln'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'headlight.replace.front.left.view': 'service-id-407548',
                        'headlight.replace.front.right.view': 'service-id-407549',
                        'headlight.replace.front.both.view': 'service-id-407550'
                    }
                },
                {
                    answer: {
                        'headlight.replace.front.left.view': 'Nebelscheinwerfer vorne links wechseln',
                        'headlight.replace.front.right.view': 'Nebelscheinwerfer vorne rechts wechseln',
                        'headlight.replace.front.both.view': 'Nebelscheinwerfer vorne beide wechseln'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'headlight.replace.front.left.view': 'service-id-409871',
                        'headlight.replace.front.right.view': 'service-id-409872',
                        'headlight.replace.front.both.view': 'service-id-409870'
                    }
                }
            ]
        }
    },
    'headlight.replace.front.left.view': {
        useTemplate: 'headlight.replace.view'
    },
    'headlight.replace.front.right.view': {
        useTemplate: 'headlight.replace.view'
    },
    'headlight.replace.front.both.view': {
        useTemplate: 'headlight.replace.view'
    },


// Schweller
    'sill.view': {
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
                        'sill.left.view': 'sill.left.spotrepair.view',
                        'sill.right.view': 'sill.right.spotrepair.view'
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
                        'sill.left.view': 'sill.left.dent.view',
                        'sill.right.view': 'sill.right.dent.view'
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
                        'sill.left.view': 'sill.left.rockfall.view',
                        'sill.right.view': 'sill.right.rockfall.view'
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
                        'sill.left.view': 'sill.left.scratch.view',
                        'sill.right.view': 'sill.right.scratch.view'
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
                        'sill.left.view': 'sill.left.replace',
                        'sill.right.view': 'sill.right.replace'
                    }
                }
            ]
        }
    },
    'sill.left.view': {
        useTemplate: 'sill.view'
    },
    'sill.right.view': {
        useTemplate: 'sill.view'
    },

    'sill.replace.view': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welchen Schweller möchten Sie ersetzen?',
            answers: [
                {
                    answer: 'Schweller links ersetzen',
                    nextStateId: 'END',
                    serviceCode: 'sill.left.replace'
                },
                {
                    answer: 'Schweller rechts ersetzen',
                    nextStateId: 'END',
                    serviceCode: 'sill.right.replace'
                }
            ]
        }
    },


// Seitenscheiben, Dreieckscheiben, Seitenfenster links
    'sidewindow.replace.view': {
        viewType: 'radioSelection',
        configs: {
            question: 'Welchen Service wünschen Sie?',
            isTemplate: true,
            answers: [
                {
                    answer: {
                        'sidewindow.left.replace.view': 'Dreieckscheibe links vorne wechseln',
                        'sidewindow.right.replace.view': 'Dreieckscheibe rechts vorne wechseln'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'sidewindow.left.replace.view': 'service-id-450258',
                        'sidewindow.right.replace.view': 'service-id-450261'
                    }
                },
                {
                    answer: {
                        'sidewindow.left.replace.view': 'Seitenscheibe Tür links vorne wechseln',
                        'sidewindow.right.replace.view': 'Seitenscheibe Tür rechts vorne wechseln'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'sidewindow.left.replace.view': 'service-id-450253',
                        'sidewindow.right.replace.view': 'service-id-450254'
                    }
                },
                {
                    answer: {
                        'sidewindow.left.replace.view': 'Seitenscheibe Tür links hinten wechseln',
                        'sidewindow.right.replace.view': 'Seitenscheibe Tür rechts hinten wechseln'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'sidewindow.left.replace.view': 'service-id-450255',
                        'sidewindow.right.replace.view': 'service-id-450256'
                    }
                },
                {
                    answer: {
                        'sidewindow.left.replace.view': 'Seitenfenster, Dreieckscheibe hinten links wechseln',
                        'sidewindow.right.replace.view': 'Seitenfenster, Dreieckscheibe hinten links wechseln'
                    },
                    nextStateId: 'END',
                    serviceCode: {
                        'sidewindow.left.replace.view': 'service-id-450262',
                        'sidewindow.right.replace.view': 'service-id-450263'
                    }
                }
            ]
        }
    },
    'sidewindow.left.replace.view': {
        useTemplate: 'sidewindow.replace.view'
    },
    'sidewindow.right.replace.view': {
        useTemplate: 'sidewindow.replace.view'
    },


// Spotrepair
    'spotrepair.view': {
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
            serviceCode: 'spotrepair'
        }
    },
/*
    'spotrepair.view': {
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
                'bumper.spotrepair.view': 'bumper.spotrepair',
                'fender.front.right.spotrepair.view': 'fender.front.right.spotrepair',
                'fender.front.left.spotrepair.view': 'fender.front.left.spotrepair',
                'fender.rear.right.spotrepair.view': 'fender.rear.right.spotrepair',
                'fender.rear.left.spotrepair.view': 'fender.rear.left.spotrepair',
                'sill.left.spotrepair.view': 'sill.left.spotrepair',
                'sill.right.spotrepair.view': 'sill.right.spotrepair',
            },
            calcParams: ['Repaircode C', 'Anzahl Spots / Streifschäden']
        }
    },
    'bumper.spotrepair.view': {
        useTemplate: 'spotrepair.view'
    },
    'fender.front.right.spotrepair.view': {
        useTemplate: 'spotrepair.view'
    },
    'fender.front.left.spotrepair.view': {
        useTemplate: 'spotrepair.view'
    },
    'fender.rear.right.spotrepair.view': {
        useTemplate: 'spotrepair.view'
    },
    'fender.rear.left.spotrepair.view': {
        useTemplate: 'spotrepair.view'
    },
    'sill.left.spotrepair.view': {
        useTemplate: 'spotrepair.view'
    },
    'sill.right.spotrepair.view': {
        useTemplate: 'spotrepair.view'
    },
*/


// Steinschlag
/*
    'rockfall.view': {
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
                'bumper.rockfall.view': 'bumper.rockfall.repair',
                'fender.front.left.rockfall.view': 'fender.front.left.rockfall.repair',
                'fender.front.right.rockfall.view': 'fender.front.right.rockfall.repair',
                'fender.rear.left.rockfall.view': 'fender.rear.left.rockfall.repair',
                'fender.rear.right.rockfall.view': 'fender.rear.right.rockfall.repair',
                'hood.rockfall.view': 'hood.rockfall.repair',
                'sill.left.rockfall.view': 'sill.left.rockfall.repair',
                'sill.right.rockfall.view': 'sill.right.rockfall.repair',
                'tailgate.rockfall.view': 'tailgate.rockfall.repair'
            },
            calcParams: ['Repaircode I', 'Zeit aus Ausbeulhilfe', 'Lackstufe 2 (bis 50%)', 'Metallic 2 Schicht']
        }
    },
    'bumper.rockfall.view': {
        useTemplate: 'rockfall.view'
    },
    'fender.front.left.rockfall.view': {
        useTemplate: 'rockfall.view'
    },
    'fender.front.right.rockfall.view': {
        useTemplate: 'rockfall.view'
    },
    'fender.rear.left.rockfall.view': {
        useTemplate: 'rockfall.view'
    },
    'fender.rear.right.rockfall.view': {
        useTemplate: 'rockfall.view'
    },
    'hood.rockfall.view': {
        useTemplate: 'rockfall.view'
    },
    'sill.left.rockfall.view': {
        useTemplate: 'rockfall.view'
    },
    'sill.right.rockfall.view': {
        useTemplate: 'rockfall.view'
    },
    'tailgate.rockfall.view': {
        useTemplate: 'rockfall.view'
    },
*/


// Stoßstange, Stoßfänger
    'bumper.view': {
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
                    nextStateId: 'bumper.spotrepair.view'
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
                    nextStateId: 'bumper.rockfall.view'
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
                    nextStateId: 'bumper.scratch.view'
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
                    nextStateId: 'bumper.dent.view'
                },
                /*
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
                */
            ]
        }
    },


// Tür
    'door.components.view': {
        pageTitle: 'Autotür',
        viewType: 'radioSelection',
        configs: {
            question: 'Leistungen:',
            answers: [
                {
                    answer: 'Leistungen für die Tür vorne links',
                    nextStateId: 'door.front.left.view'
                },
                {
                    answer: 'Leistungen für die Tür vorne rechts',
                    nextStateId: 'door.front.right.view'
                },
                {
                    answer: 'Leistungen für die Tür hinten links',
                    nextStateId: 'door.rear.left.view'
                },
                {
                    answer: 'Leistungen für die Tür hinten rechts',
                    nextStateId: 'door.rear.right.view'
                },
            ]
        }
    },

    'door.services.template.view': {
        pageTitle: {
            'door.front.left.view': 'Autotür vorne links',
            'door.front.right.view': 'Autotür vorne rechts',
            'door.rear.left.view': 'Autotür hinten links',
            'door.rear.right.view': 'Autotür hinten rechts'
        },
        viewType: 'radioSelection',
        configs: {
            question: 'Welchen Service wünschen Sie?',
            isTemplate: true,
            answers: [
                {
                    answer: 'Tür lackieren',
                    nextStateId: 'END',
                    serviceCode: {
                        'door.front.left.view': 'door.front.left.lacquer',
                        'door.front.right.view': 'door.front.right.lacquer',
                        'door.rear.left.view': 'door.rear.left.lacquer',
                        'door.rear.right.view': 'door.rear.right.lacquer'
                    }
                },
                {
                    answer: 'Tür ersetzen',
                    nextStateId: 'END',
                    serviceCode: {
                        'door.front.left.view': 'door.front.left.replace',
                        'door.front.right.view': 'door.front.right.replace',
                        'door.rear.left.view': 'door.rear.left.replace',
                        'door.rear.right.view': 'door.rear.right.replace'
                    }
                }
            ]
        }
    },
    'door.front.left.view': {
        useTemplate: 'door.services.template.view'
    },
    'door.front.right.view': {
        useTemplate: 'door.services.template.view'
    },
    'door.rear.left.view': {
        useTemplate: 'door.services.template.view'
    },
    'door.rear.right.view': {
        useTemplate: 'door.services.template.view'
    },

    'door.services.view': {
        pageTitle: 'Autotür Leistungen',
        viewType: 'radioSelection',
        configs: {
            question: 'Leistungen:',
            answers: [
                {
                    answer: 'Autotür lackieren',
                    nextStateId: 'door.lacquer.view'
                },
                {
                    answer: 'Autotür ersetzen',
                    nextStateId: 'door.replace.view'
                }
            ]
        }
    },

    'door.lacquer.view': {
        pageTitle: 'Autotür lackieren',
        viewType: 'radioSelection',
        configs: {
            question: 'Leistungen:',
            answers: [
                {
                    nextStateId: 'END',
                    serviceCode: 'door.front.left.lacquer'
                },
                {
                    nextStateId: 'END',
                    serviceCode: 'door.front.right.lacquer'
                },
                {
                    nextStateId: 'END',
                    serviceCode: 'door.rear.left.lacquer'
                },
                {
                    nextStateId: 'END',
                    serviceCode: 'door.rear.right.lacquer'
                },
            ]
        }
    },

    'door.replace.view': {
        pageTitle: 'Autotür ersetzen',
        viewType: 'radioSelection',
        configs: {
            question: 'Leistungen:',
            answers: [
                {
                    nextStateId: 'END',
                    serviceCode: 'door.front.left.replace'
                },
                {
                    nextStateId: 'END',
                    serviceCode: 'door.front.right.replace'
                },
                {
                    nextStateId: 'END',
                    serviceCode: 'door.rear.left.replace'
                },
                {
                    nextStateId: 'END',
                    serviceCode: 'door.rear.right.replace'
                },
            ]
        }
    },


// Unfallschaden
    'accidentaldamage.view': {
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
            serviceCode: 'accidentaldamage'
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
        state.pageTitle = setAndReturnValueOfConfigId(state.pageTitle, stateKey);

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
            //configs.calcParams = setAndReturnValueOfConfigId(configs.calcParams, stateKey);
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
})(states);
