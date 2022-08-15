import * as api from './api';

export function getAllCategories() {
    return api.get('/categories');
}

export function getUserCategories() {
    return api.get(`/usercategories`);
}

export function updateUserCategory(category) {
    return api.post(`/categories`, category);
}