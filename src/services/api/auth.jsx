import * as api from './api';

export function login(email, password) {
    return api.post('/login', { email, password });
}

export function signup(name, email, password) {
    return api.post('/sigin', { name, email, password });
}

export function persistentLogin() {
    return api.get('/session');
}