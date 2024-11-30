const axios = require('axios');
const rules = require('../config/rules');

const API_URL = 'http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639';

const fetchData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const evaluateRules = (data) => {
  return rules.map(rule => ({
    name: rule.name,
    passed: rule.condition(data),
  }));
};

const getChecklistResults = async (req, res) => {
  try {
    const data = await fetchData();
    const results = evaluateRules(data);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getChecklistResults,
};
