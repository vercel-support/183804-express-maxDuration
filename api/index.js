const app = require('express')();
const { v4 } = require('uuid');

// sleep function
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.get('/api', async (req, res) => {
  const path = `/api/item/${v4()}`;
  await sleep(30 * 1000);
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;
