import * as api from './api';

export function getNews() {
    return api.get('/news');
}

export function getTops() {
    return api.get('/tops');
}