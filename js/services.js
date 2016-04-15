
var services = {
    'accidentaldamage': {
        serviceName: 'Unfallschaden',
        isViewRequired: true,
        calcParams: ['FIN', 'Upload Bilder (0..5)', 'Schadensbeschreibung']
    },

    'bumper.front.lacquer': {
        serviceName: 'Stoßfänger vorne lackieren',
        isVehicleRequired: true,
        calcParams: ['Repaircode M', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'bumper.rear.lacquer': {
        serviceName: 'Stoßfänger hinten lackieren',
        isVehicleRequired: true,
        calcParams: ['Repaircode M', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },

    'bumper.front.replace': {
        serviceName: 'Stoßfänger vorne ersetzen',
        isVehicleRequired: true,
        isCalculable: true,
    },
    'bumper.rear.replace': {
        serviceName: 'Stoßfänger hinten ersetzen',
        isVehicleRequired: true,
        isCalculable: true,
    },

    'dent.repair': {
        serviceName: 'Dellen entfernen',
        isViewRequired: true,
        unitPrice: 60,
        calcParams: ['Repaircode I', 'Zeit aus Ausbeulhilfe', 'Lackstufe 2 (bis 50%)', 'Metallic 2 Schicht']
    },

    'door.front.left.lacquer': {
        serviceName: 'Tür links vorne lackieren',
        isVehicleRequired: true
    },
    'door.front.right.lacquer': {
        serviceName: 'Tür rechts vorne lackieren',
        isVehicleRequired: true
    },
    'door.rear.left.lacquer': {
        serviceName: 'Tür links hinten lackieren',
        isVehicleRequired: true
    },
    'door.rear.right.lacquer': {
        serviceName: 'Tür rechts hinten lackieren',
        isVehicleRequired: true
    },

    'door.front.left.replace': {
        serviceName: 'Tür links vorne ersetzen',
        isVehicleRequired: true,
        isCalculable: true
    },
    'door.front.right.replace': {
        serviceName: 'Tür rechts vorne ersetzen',
        isVehicleRequired: true,
        isCalculable: true
    },
    'door.rear.left.replace': {
        serviceName: 'Tür / Schiebetür links hinten ersetzen',
        isVehicleRequired: true,
        isCalculable: true
    },
    'door.rear.right.replace': {
        serviceName: 'Tür / Schiebetür rechts hinten ersetzen',
        isVehicleRequired: true,
        isCalculable: true
    },

    'examinedamage': {
        serviceName: 'Schadensbegutachtung',
        isViewRequired: true,
        calcParams: ['FIN', 'Upload Bilder (0..5)', 'Schadensbeschreibung']
    },

    'fender.front.left.lacquer': {
        serviceName: 'Kotflügel vorne links lackieren',
        isVehicleRequired: true,
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'fender.front.right.lacquer': {
        serviceName: 'Kotflügel vorne rechts lackieren',
        isVehicleRequired: true,
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'fender.rear.left.lacquer': {
        serviceName: 'Kotflügel / Seitenwand hinten links lackieren',
        isVehicleRequired: true,
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'fender.rear.right.lacquer': {
        serviceName: 'Kotflügel / Seitenwand hinten rechts lackieren',
        isVehicleRequired: true,
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },

    'haildamage': {
        serviceName: 'Hagelschaden reparieren',
        additionalConfiguration: {
            openText: 'Hagelrechner öffnen',
            closeText: 'Hagelrechner schließen',
            triggerOpenEvent: 'openHailCalculator',
            triggerCloseEvent: 'closeHailCalculator'
        }
    },

    'hood.lacquer': {
        serviceName: 'Motorhaube lackieren',
        isVehicleRequired: true,
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'hood.replace': {
        serviceName: 'Motorhaube ersetzen',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E', 'Lackstufe 4', 'Metallic 2 Schicht']
    },

    'locations.search': {
        serviceName: 'Fachwerkstatt finden',
        unitPrice: 0
    },

    'mirror.left.lacquer': {
        serviceName: 'Gehäuse Außenspiegel links lackieren',
        isVehicleRequired: true
    },
    'mirror.right.lacquer': {
        serviceName: 'Gehäuse Außenspiegel rechts lackieren',
        isVehicleRequired: true
    },

    'rearpanel.lacquer': {
        serviceName: 'Heckabschlußblech lackieren',
        isVehicleRequired: true
    },

    'roof.lacquer': {
        serviceName: 'Fahrzeugdach lackieren',
        isVehicleRequired: true,
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Metallic 2 Schicht', 'Oberflächenlackierungstufe 1']
    },

    'service-id-95641': {
        serviceName: 'Glas Außenspiegel rechts wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },
    'service-id-95663': {
        serviceName: 'Glas Außenspiegel links wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },

    'service-id-345091': {
        serviceName: 'Glas Außenspiegel links (Weitwinkel) wechseln',
        calcParams: ['Repaircode E']
    },
    'service-id-355773': {
        serviceName: 'Glas Außenspiegel rechts (Weitwinkel) wechseln',
        calcParams: ['Repaircode E']
    },

    'service-id-407537': {
        serviceName: 'Frontscheibe wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },

    'service-id-407548': {
        serviceName: 'Scheinwerfer komplett vorne links wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },
    'service-id-407549': {
        serviceName: 'Scheinwerfer komplett vorne rechts wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },
    'service-id-407550': {
        serviceName: 'Scheinwerfer komplett vorne beide wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },

    'service-id-409870': {
        serviceName: 'Nebelscheinwerfer komplett vorne beide wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },
    'service-id-409871': {
        serviceName: 'Nebelscheinwerfer komplett vorne links wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },
    'service-id-409872': {
        serviceName: 'Nebelscheinwerfer komplett vorne rechts wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },

    'service-id-450250': {
        serviceName: 'Heckscheibe wechseln',
        isVehicleRequired: true,
        isCalculable: true,
    },

    'service-id-450253': {
        serviceName: 'Seitenscheibe Tür links vorne wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },
    'service-id-450254': {
        serviceName: 'Seitenscheibe Tür rechts vorne wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },

    'service-id-450255': {
        serviceName: 'Seitenscheibe Tür links hinten wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },
    'service-id-450256': {
        serviceName: 'Seitenscheibe Tür rechts hinten wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },

    'service-id-450258': {
        serviceName: 'Dreieckscheibe links vorne wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },
    'service-id-450261': {
        serviceName: 'Dreieckscheibe rechts vorne wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },

    'service-id-450262': {
        serviceName: 'Seitenfenster, Dreieckscheibe hinten links wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },
    'service-id-450263': {
        serviceName: 'Seitenfenster, Dreieckscheibe hinten rechts wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },

    'service-id-450268': {
        serviceName: 'Außenspiegel links komplett wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },
    'service-id-450269': {
        serviceName: 'Außenspiegel rechts komplett wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },

    'service-id-450270': {
        serviceName: 'Kotflügel komplett vorne links wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E', 'Lackstufe 4 (Neuteil)', 'Metallic 2 Schicht']
    },
    'service-id-450271': {
        serviceName: 'Kotflügel komplett vorne rechts wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E', 'Lackstufe 4 (Neuteil)', 'Metallic 2 Schicht']
    },

    'service-id-450272': {
        serviceName: 'Kotflügel komplett hinten links wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E', 'Lackstufe 4 (Neuteil)', 'Metallic 2 Schicht']
    },
    'service-id-450273': {
        serviceName: 'Kotflügel komplett hinten rechts wechseln',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E', 'Lackstufe 4 (Neuteil)', 'Metallic 2 Schicht']
    },

    'service-id-450284': {
        serviceName: 'Außenspiegel beide komplett wechseln',
        isVehicleRequired: true,
        isCalculable: true,
    },

    'sill.left.lacquer': {
        serviceName: 'Schweller links lackieren',
        isVehicleRequired: true
    },
    'sill.right.lacquer': {
        serviceName: 'Schweller rechts lackieren',
        isVehicleRequired: true
    },

    'sill.left.replace': {
        serviceName: 'Schweller links ersetzen',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },
    'sill.right.replace': {
        serviceName: 'Schweller rechts ersetzen',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E']
    },

    'spotrepair': {
        serviceName: 'Spot Repair',
        isViewRequired: true,
        unitPrice: 80,
        calcParams: ['Repaircode C', 'Anzahl Spots / Streifschäden']
    },

    'tailgate.lacquer': {
        serviceName: 'Heckklappe / Kofferraumdeckel lackieren',
        isVehicleRequired: true,
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'tailgate.replace': {
        serviceName: 'Heckklappe / Kofferraumdeckel ersetzen',
        isVehicleRequired: true,
        isCalculable: true,
        calcParams: ['Repaircode E', 'Lackstufe 4', 'Metallic 2 Schicht']
    },

    'touchupstick': {
        serviceName: 'Lackstift',
        isViewRequired: true,
        unitPrice: 30
    },

    'vehicle.complete.outside.lacquer': {
        serviceName: 'Fahrzeug komplett (mit Dach) lackieren',
        isVehicleRequired: true,
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 20']
    },
    'vehicle.complete.outside.noroof.lacquer': {
        serviceName: 'Fahrzeug komplett (ohne Dach) lackieren',
        isVehicleRequired: true,
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 49']
    },
    'vehicle.complete.leftside.lacquer': {
        serviceName: 'Fahrzeugseite links lackieren',
        isVehicleRequired: true,
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 50']
    },
    'vehicle.complete.rightside.lacquer': {
        serviceName: 'Fahrzeugseite rechts lackieren',
        isVehicleRequired: true,
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 60']
    },
    'vehicle.complete.frontsection.lacquer': {
        serviceName: 'Vorderwagen komplett lackieren',
        isVehicleRequired: true,
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 40124']
    },
    'vehicle.complete.rearsection.lacquer': {
        serviceName: 'Hinterwagen komplett lackieren',
        isVehicleRequired: true,
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 50000']
    }

};

(function(services){

    forEachService(function(service, serviceKey){
        service.serviceCode = serviceKey;
    });

    function forEachService(callback){
        for (var serviceKey in services) {
            var service = services[serviceKey];
            callback(service, serviceKey);
        }
    }
})(services);
