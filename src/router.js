const express = require('express');
const axios = require('axios');

const router = express.Router();

const accessToken = process.env.ACCESS_TOKEN
const apiKey = process.env.API_KEY
const accept = process.env.HEADER_ACCEPT_V2
const tenantId = process.env.TENANT_ID

const headers = {
  'Authorization': `Bearer ${accessToken}`,
  'X-Api-Key': apiKey,
  'Accept': accept
};

// ROTA PARA PEGAR AS ATIVIDADES
router.get('/activities/:activityId', async (req, res) => {
  try {
    const { activityId } = req.params;

    const url = `https://mc.adobe.io/${tenantId}/target/activities/xt/${activityId}`;
    const response = await axios.get(url, { headers });

    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

// ROTA PARA PEGAR AS OFERTAS
router.get('/offers/:offerId', async (req, res) => {
  try {
    const { offerId } = req.params;

    const url = `https://mc.adobe.io/${tenantId}/target/offers/json/${offerId}`;
    const response = await axios.get(url, { headers });

    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

module.exports = router;
