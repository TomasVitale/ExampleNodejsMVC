const session = require('express-session');
const Keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
    
    clientId: 'enviame',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'enviame',
    credentials: {
        secret: 'pzEowU0uoZaHrSiFSalYfh24BB3RjC3t'
    }
};

function initKeycloak() {
    if (_keycloak) {
        console.warn("Intentando iniciar Keycloak otra vez!");
        return _keycloak;
    } 
    else {
        console.log("Iniciando Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak no pudo iniciar. Por favor intente de nuevo.');
    } 
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};