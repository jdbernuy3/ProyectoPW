import base from './base.js';

const endpoint = '/libro';

const findAll = async () => await base.get(endpoint);

const findOne = async (userId) => await base.get(endpoint,userId);

const update = async (payload) => await base.put(endpoint, payload);

const create = async (payload) => await base.post(endpoint, payload);

const api = { findAll, findOne, update, create };

export default api;
