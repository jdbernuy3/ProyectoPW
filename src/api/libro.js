import base from './base.js';

const endpoint = '/libro';

const findAll = async () => await base.get(endpoint);

const findOne = async (id) => await base.get(endpoint + '/' + id);

const update = async (payload) => await base.put(endpoint, payload);

const create = async (payload) => await base.post(endpoint, payload);

const remove = async (id) => await base.remove(endpoint + '/' + id);

const findOneComplete = async (id) => await base.get(endpoint + '/findOneComplete/' + id);

const api = { findAll, findOne, update, create, remove, findOneComplete};

export default api;
