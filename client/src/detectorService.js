import http from "../http";

const getAll = () => {
    return http.get("/detector");
};

const get = id => {
    return http.get(`/detector/${id}`);
};

const create = data => {
    return http.post("/detector", data);
};

const update = (id, data) => {
    return http.put(`/detector/${id}`, data);
};

const remove = id => {
    return http.delete(`/detector/${id}`);
};

const removeAll = () => {
    return http.delete(`/detector`);
};

const findByTitle = title => {
    return http.get(`/detector?title=${title}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
};