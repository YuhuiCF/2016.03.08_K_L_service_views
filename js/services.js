
var services = {
    'bumper.front.lacquer': {
        serviceName: 'Stoßfänger vorne lackieren',
        calcParams: ['Repaircode M', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'bumper.rear.lacquer': {
        serviceName: 'Stoßfänger hinten lackieren',
        calcParams: ['Repaircode M', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },

    'bumper.front.replace': {
        serviceName: 'Stoßfänger vorne ersetzen'
    },
    'bumper.rear.replace': {
        serviceName: 'Stoßfänger hinten ersetzen'
    },

    'dent.repair': {
        serviceName: 'Dellen entfernen',
        unitPrice: 60,
        calcParams: ['Repaircode I', 'Zeit aus Ausbeulhilfe', 'Lackstufe 2 (bis 50%)', 'Metallic 2 Schicht']
    },

    'door.front.left.lacquer': {
        serviceName: 'Tür links vorne lackieren'
    },
    'door.front.right.lacquer': {
        serviceName: 'Tür rechts vorne lackieren'
    },
    'door.rear.left.lacquer': {
        serviceName: 'Tür links hinten lackieren'
    },
    'door.rear.right.lacquer': {
        serviceName: 'Tür rechts hinten lackieren'
    },

    'door.front.left.replace': {
        serviceName: 'Tür links vorne ersetzen'
    },
    'door.front.right.replace': {
        serviceName: 'Tür rechts vorne ersetzen'
    },
    'door.rear.left.replace': {
        serviceName: 'Tür / Schiebetür links hinten ersetzen'
    },
    'door.rear.right.replace': {
        serviceName: 'Tür / Schiebetür rechts hinten ersetzen'
    },

    'examinedamage': {
        serviceName: 'Schadensbegutachtung',
        calcParams: ['FIN', 'Upload Bilder (0..5)', 'Schadensbeschreibung']
    },

    'fender.front.left.lacquer': {
        serviceName: 'Kotflügel vorne links lackieren',
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'fender.front.right.lacquer': {
        serviceName: 'Kotflügel vorne rechts lackieren',
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'fender.rear.left.lacquer': {
        serviceName: 'Kotflügel / Seitenwand hinten links lackieren',
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'fender.rear.right.lacquer': {
        serviceName: 'Kotflügel / Seitenwand hinten rechts lackieren',
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
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'hood.replace': {
        serviceName: 'Motorhaube ersetzen',
        calcParams: ['Repaircode E', 'Lackstufe 4', 'Metallic 2 Schicht']
    },

    'locations.search': {
        serviceName: 'Fachwerkstatt finden',
        unitPrice: 0
    },

    'mirror.left.lacquer': {
        serviceName: 'Gehäuse Außenspiegel links lackieren'
    },
    'mirror.right.lacquer': {
        serviceName: 'Gehäuse Außenspiegel rechts lackieren'
    },

    'rearpanel.lacquer': {
        serviceName: 'Heckabschlußblech lackieren'
    },

    'roof.lacquer': {
        serviceName: 'Fahrzeugdach lackieren',
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Metallic 2 Schicht', 'Oberflächenlackierungstufe 1']
    },

    'service-id-95663': {
        serviceName: 'Glas Außenspiegel links wechseln',
        calcParams: ['Repaircode E']
    },
    'service-id-95641': {
        serviceName: 'Glas Außenspiegel rechts wechseln',
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
        serviceName: 'Frontscheibe austauschen',
        calcParams: ['Repaircode E']
    },

    'service-id-450268': {
        serviceName: 'Außenspiegel links komplett wechseln',
        calcParams: ['Repaircode E']
    },
    'service-id-450269': {
        serviceName: 'Außenspiegel rechts komplett wechseln',
        calcParams: ['Repaircode E']
    },

    'service-id-450270': {
        serviceName: 'Kotflügel komplett vorne links wechseln',
        calcParams: ['Repaircode E', 'Lackstufe 4 (Neuteil)', 'Metallic 2 Schicht']
    },
    'service-id-450271': {
        serviceName: 'Kotflügel komplett vorne rechts wechseln',
        calcParams: ['Repaircode E', 'Lackstufe 4 (Neuteil)', 'Metallic 2 Schicht']
    },

    'service-id-450272': {
        serviceName: 'Kotflügel komplett hinten links wechseln',
        calcParams: ['Repaircode E', 'Lackstufe 4 (Neuteil)', 'Metallic 2 Schicht']
    },
    'service-id-450273': {
        serviceName: 'Kotflügel komplett hinten rechts wechseln',
        calcParams: ['Repaircode E', 'Lackstufe 4 (Neuteil)', 'Metallic 2 Schicht']
    },

    'service-id-450284': {
        serviceName: 'Außenspiegel beide komplett wechseln'
    },

    'sill.left.lacquer': {
        serviceName: 'Schweller links lackieren',
    },
    'sill.right.lacquer': {
        serviceName: 'Schweller rechts lackieren',
    },

    'tailgate.lacquer': {
        serviceName: 'Heckklappe / Kofferraumdeckel lackieren',
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'tailgate.replace': {
        serviceName: 'Heckklappe / Kofferraumdeckel ersetzen',
        calcParams: ['Repaircode E', 'Lackstufe 4', 'Metallic 2 Schicht']
    },

    'touchupstick': {
        serviceName: 'Lackstift',
        unitPrice: 30
    }

    'vehicle.complete.outside.lacquer': {
        serviceName: 'Fahrzeug komplett (mit Dach) lackieren',
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 20']
    },
    'vehicle.complete.outside.noroof.lacquer': {
        serviceName: 'Fahrzeug komplett (ohne Dach) lackieren',
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 49']
    },
    'vehicle.complete.leftside.lacquer': {
        serviceName: 'Fahrzeugseite links lackieren',
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 50']
    },
    'vehicle.complete.rightside.lacquer': {
        serviceName: 'Fahrzeugseite rechts lackieren',
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 60']
    },
    'vehicle.complete.frontsection.lacquer': {
        serviceName: 'Vorderwagen komplett lackieren',
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 40124']
    },
    'vehicle.complete.rearsection.lacquer': {
        serviceName: 'Hinterwagen komplett lackieren',
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 50000']
    },

    'windshield.replace': {
        serviceName: 'Frontscheibe wechseln',
        calcParams: ['Repaircode E']
    }

};

(function(services){

    forEachService(function(service, serviceKey){
        service.serviceCode = serivceKey;
    });

    function forEachService(callback){
        for (var serviceKey in services) {
            var service = services[serviceKey];
            callback(service, serviceKey);
        }
    }
})(services);
