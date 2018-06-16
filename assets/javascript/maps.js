import styles from './maps/styles';

function initMap(){
    
    const coords = {
        lat: 1.850929,
        lng: -76.040929
    };
    let map = new google.maps.Map(document.getElementById('mapa'),{
        center: coords,
        zoom: 16,
        styles: styles
    });

    let marker = new google.maps.Marker({
        position: coords,
        map,
        title: 'Mi Cuidad'
    })
}

initMap();