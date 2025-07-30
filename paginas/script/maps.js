const statusColor = ['#FF7979', "#7ED957", "#598EFF", "#FF0000", "#00BF63", "#0051FF"]

const centroDoMapa = { lat: -27.200476, lng: -52.082809 }; // Entrada do IF

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
    const map = new google.maps.Map(document.getElementById("map"), {
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

        marker.id = ponto.id;

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
        console.log('carregou!');

        postes.forEach(function(ponto) {
            ponto.atualizarPontoMaps();
            addAdvancedMarker(ponto);
    });
    }

    function atualizarMapa() {
        removerMarkers()
        carregarPostes()
    }

    carregarPostes()
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
    } else {
        action = 1;
    }

    element.classList.toggle('nao-selecionado')
    
}

function conectarPostes(elementHTML) {
    let id = parseInt(elementHTML.id)-1;
    
    
    element = postes[id];
    
    console.log(element.conexcoes);
    if (posteSelecionado == element) {
        posteSelecionado = null;
        console.log('des-selecionado');
    }
    else if (posteSelecionado) {    
        posteSelecionado.conexcoes.push(element);

        posteSelecionado.objHtml.style.background = '';
        
        posteSelecionado = null;
        console.log('des-selecionado');
    } 
    else {
        posteSelecionado = element;

        elementHTML.style.background = 'var(--corBackground)';
        console.log('selecionado')
    }

    
}