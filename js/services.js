
var services = {
    'bumper.front.lacquer': {
        calcParams: ['Repaircode M', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'bumper.rear.lacquer': {
        calcParams: ['Repaircode M', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },

    'bumper.front.replace': {},
    'bumper.rear.replace': {},

    'dent.repair': {
        unitPrice: 60,
        calcParams: ['Repaircode I', 'Zeit aus Ausbeulhilfe', 'Lackstufe 2 (bis 50%)', 'Metallic 2 Schicht']
    },

    'door.front.left.lacquer': {},
    'door.front.right.lacquer': {},
    'door.rear.left.lacquer': {},
    'door.rear.right.lacquer': {},

    'door.front.left.replace': {},
    'door.front.right.replace': {},
    'door.rear.left.replace': {},
    'door.rear.right.replace': {},

    'examinedamage': {
        calcParams: ['FIN', 'Upload Bilder (0..5)', 'Schadensbeschreibung']
    },

    'fender.front.left.lacquer.complete': {
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'fender.front.right.lacquer.complete': {
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'fender.rear.left.lacquer.complete': {
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'fender.rear.right.lacquer.complete': {
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },

    'haildamage': {
        answer: 'Hagelschaden reparieren',
        additionalConfiguration: {
            openText: 'Hagelrechner öffnen',
            closeText: 'Hagelrechner schließen',
            triggerOpenEvent: 'openHailCalculator',
            triggerCloseEvent: 'closeHailCalculator'
        }
    },

    'hood.lacquer.complete': {
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'hood.replace': {
        calcParams: ['Repaircode E', 'Lackstufe 4', 'Metallic 2 Schicht']
    },

    'locations.search': {
        answer: 'Fachwerkstatt finden',
        unitPrice: 0
    },

    'mirror.left.lacquer': {},
    'mirror.right.lacquer': {},

    'mirror.left.scratch.rockfall.repair': {
        calcParams: ['Repaircode M', 'Lackstufe 1', 'Metallic 2 Schicht']
    },
    'mirror.right.scratch.rockfall.repair': {
        calcParams: ['Repaircode M', 'Lackstufe 1', 'Metallic 2 Schicht']
    },

    'rearpanel.lacquer': {},

    'roof.lacquer': {
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Metallic 2 Schicht', 'Oberflächenlackierungstufe 1']
    },

    'service-id-95663 (Glas Außenspiegel links wechseln)': {
        calcParams: ['Repaircode E']
    },
    'service-id-95641 (Glas Außenspiegel rechts wechseln)': {
        calcParams: ['Repaircode E']
    },

    'service-id-345091 (Glas Außenspiegel links (Weitwinkel) wechseln)': {
        calcParams: ['Repaircode E']
    },
    'service-id-355773 (Glas Außenspiegel rechts (Weitwinkel) wechseln)': {
        calcParams: ['Repaircode E']
    },

    'service-id-450268 (Außenspiegel links komplett wechseln)': {
        calcParams: ['Repaircode E']
    },
    'service-id-450269 (Außenspiegel rechts komplett wechseln)': {
        calcParams: ['Repaircode E']
    },

    'service-id-450270 (Kotflügel komplett vorne links wechseln)': {
        calcParams: ['Repaircode E', 'Lackstufe 4 (Neuteil)', 'Metallic 2 Schicht']
    },
    'service-id-450271 (Kotflügel komplett vorne rechts wechseln)': {
        calcParams: ['Repaircode E', 'Lackstufe 4 (Neuteil)', 'Metallic 2 Schicht']
    },

    'service-id-450284 (Außenspiegel beide komplett wechseln)': {},

    'sill.left.lacquer': {},
    'sill.right.lacquer': {},

    'tailgate.lacquer.complete': {
        calcParams: ['Repaircode L', 'Lackstufe 1 (Oberfläche)', 'Metallic 2 Schicht']
    },
    'tailgate.replace': {
        calcParams: ['Repaircode E', 'Lackstufe 4', 'Metallic 2 Schicht']
    },

    'vehicle.complete.outside.lacquer': {
        answer: 'Fahrzeug komplett (mit Dach)',
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 20']
    },
    'vehicle.complete.outside.noroof.lacquer': {
        answer: 'Fahrzeug komplett (ohne Dach)',
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 49']
    },
    'vehicle.complete.leftside.lacquer': {
        answer: 'Fahrzeugseite links',
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 50']
    },
    'vehicle.complete.rightside.lacquer': {
        answer: 'Fahrzeugseite rechts',
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 60']
    },
    'vehicle.complete.frontsection.lacquer': {
        answer: 'Vorderwagen',
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 40124']
    },
    'vehicle.complete.rearsection.lacquer': {
        answer: 'Hinterwagen',
        calcParams: ['Repaircode L', 'Lackstufe 1', 'Farbe 2-Schicht Metallic', 'DVN 50000']
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
