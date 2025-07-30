const statusColor = ['#FF7979', "#7ED957", "#598EFF", "#FF0000", "#00BF63", "#0051FF"]

const centroDoMapa = { lat: -27.200476, lng: -52.082809 }; // Entrada do IF
let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
    map = new google.maps.Map(document.getElementById("map"), {
        center: centroDoMapa,
        zoom: 18,
        mapId: 'posteMapas'
    });


    // addAdvancedMarker(centroDoMapa, "teste");

    map.addListener("click", (e) => {
        const confirmacao = confirm("Deseja adicionar um novo marcador aqui?");
        if (confirmacao) {        
            let lat = e.latLng.lat();
            let lng = e.latLng.lng();
            new Poste(lat, lng, "Isada's Corp", 'IFC - Campus Concórdia');
        }
        atualizarMapa();
    });

    
    function addAdvancedMarker(ponto) {
        const infos = ponto.obj;

        glyphColor = statusColor[typeStatusmenos1[ponto.status]]
        glyphBorderColor = statusColor[typeStatusmenos1[ponto.status]+3]

        let lat = infos.lat;
        let lng = infos.lng;
        let title = infos.title;
        
        const image = document.createElement("img");
        image.src = "../assets/icones/lampada.svg";
        image.style.width = '28px';
        image.style.height = '28px';
        
        const pin = new PinElement({
            scale: 1.3,
            glyph: image,
            background: glyphColor,
            borderColor: glyphBorderColor
        });

        const marker = new AdvancedMarkerElement({
            map,
            position: {lat: lat, lng: lng},
            content: pin.element,

            title: title
        });

        marker._globalId = ponto._globalId;
        marker._localId = ponto._localId;
        marker._StringGlobalId = ponto._StringGlobalId;

        const infoWindow = new google.maps.InfoWindow({
          content: infos.content,
        });

        ponto.objHtml = marker;

        marker.addListener("click", () => {
            
            switch (action){
            case 0:
                //Conectar poste
                conectarPostes(marker);
                break;
            case 1:
                // Criar poste
                atualizarMapa();
                infoWindow.open(map, marker);
                
            }
        });
    }

    function removerMarkers() {
        const marks = document.querySelectorAll('gmp-advanced-marker');
        marks.forEach((e) => {
            e.remove();
        })
    }

    function carregarPostes() {

        postes.forEach(function(ponto) {
            ponto.atualizarPontoMaps();
            addAdvancedMarker(ponto);
    });
    }

    function atualizarMapa() {
        removerMarkers()
        carregarPostes()
    }

    carregarPostes();

    postes.forEach((poste) => {


        poste.conexcoes
    })
}

window.initMap = initMap;


/* Resto */
let action = 1;
let posteSelecionado;

function toggleConnect(element) {
    // Por enquanto action é só -> 1 => conectar postes
                                // 0 => Criar postes
    if (action == 1) {
        action = 0;
        toggleArrow(true);
    } else {
        action = 1;
        toggleArrow(false);
    }

    element.classList.toggle('nao-selecionado')
    
}

function conectarPostes(elementHTML) {    
    
    let element = postes[acharIndicePoste(elementHTML._StringGlobalId)];
    
    if (posteSelecionado == element) {
        
        posteSelecionado = null;
        element.style.background = '';
        console.log('des-selecionado - igual');
    }
    else if (posteSelecionado) {    
        posteSelecionado.conexcoes.push(element);

        desenharLinhaEntre(posteSelecionado, element);

        posteSelecionado.objHtml.style.background = '';
        posteSelecionado = null;
        console.log('des-selecionado - sucesso');
    } 
    else {
        posteSelecionado = element;

        elementHTML.style.background = 'var(--corBackground)';
        console.log('selecionado')
    }

}

// Local pro mapa, sla como fica no BD
let Linhas = [];

function desenharLinhaEntre(lat1, lng1, lat2, lng2, mostrar = true) {
    let obj1 = lat1;
    let obj2 = lng1;
    if (typeof(lat1) == 'object') {
        lat1 = obj1.lat;
        lng1 = obj1.lng;
        lat2 = obj2.lat;
        lng2 = obj2.lng;
    }


    const setaIcon = {
    icon: {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 3,
        strokeColor: '#FFC107' //'var(--corBackground)'
    },
    offset: '100%'
    }
    
    setaLine = new google.maps.Polyline({
        path: [
        { lat: lat1, lng: lng1 },
        { lat: lat2, lng: lng2 }
        ],
        strokeColor: mostrar ? '#FFC107' : 'transparent', //'var(--corBackground)'
        strokeOpacity: 1.0,
        strokeWeight: 2,
        icons: [setaIcon]
    });

    setaLine.setMap(map);
    Linhas.push(setaLine);
    
}

function toggleArrow(mostrar) {
    if (!Linhas) return;
    Linhas.forEach((linha) => {

    if (mostrar) {
        linha.setMap(map)
    } else {
        linha.setMap(null)
    }
    
    });
}

/* Função de apoio */
function acharIndicePoste(achar) {
    for (let indice = 0; indice<postes.length; indice++){
        let posteStringId = postes[indice]._StringGlobalId;
        if (posteStringId.slice(0,5) != achar.slice(0,5)) {
            continue;
        }

        if (posteStringId == achar) {
            return indice;
        }
    }
}