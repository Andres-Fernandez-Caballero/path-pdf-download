const express = require('express');
const puppeteer = require('puppeteer');
const fs= require('fs')
const path=require('path')
const app = express();

app.get('/pdf', async (req, res) => {
  const files = fs.readdirSync('download')
  files.forEach((file) => {
    fs.unlinkSync(path.join('download', file))
  })
  const url = req.query.url;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: 'networkidle0',
  });

  const pdfPath = path.join("download", new Date().getTime() + 'path.pdf')
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    margin: {
      top: '1cm',
      right: '1cm',
      bottom: '1cm',
      left: '1cm',
    },
  });

  await browser.close();

  res.setHeader('Content-Type', 'application/pdf');
  res.download(path.join(__dirname, pdfPath));
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});