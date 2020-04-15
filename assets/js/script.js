// mapboxgl

mapboxgl.accessToken = 'pk.eyJ1Ijoic2NoYXVib2dhIiwiYSI6ImNrN3VuaDhiMDE5NGkzZnF0dHR0dWJsZzAifQ.aC2Z3EG5ETarbmeCP7mXdQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/schauboga/ck7uomjjm1k7e1imqlm50hqvl',
    center: [7.5890, 50.3569],
    zoom: 9,
    interactive: false
});

const mapContainer = document.getElementById('map-container');

function setMouseMoveMapContainerRotation(event) {
    const rotateX = 1 - (event.clientY / document.body.clientHeight) * 2;
    const rotateY = 1 - (event.clientX / document.body.clientWidth) * 2;
    mapContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
};

function setDeviceMotionMapContainerRotation(event) {
    console.log(event.accelerationIncludingGravity);
}

document.addEventListener('mousemove', setMouseMoveMapContainerRotation, true);
window.addEventListener('devicemotion', setDeviceMotionMapContainerRotation, true);

// helper

function onResize() {
    setViewProperties();
}

function setViewProperties() {
    const vh = window.innerHeight * 0.01;
    const vw = window.innerWidth * 0.01;
    const style = document.documentElement.style;
    style.setProperty('--vh', `${vh}px`);
    style.setProperty('--vw', `${vw}px`);
    style.setProperty('--vmin', `${Math.min(vh, vw)}px`);
    style.setProperty('--vmax', `${Math.max(vh, vw)}px`);
}

window.addEventListener('resize', onResize, true);

setViewProperties();

