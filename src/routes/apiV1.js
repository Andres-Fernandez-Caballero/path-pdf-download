const {Router} = require('express');
const PdfController = require('../controllers/pdfContoller');
const apiV1Router = Router();

/**
 * 
 * must recieve a query string like ?url=http://google.com
 */
apiV1Router.get('/api/v1/download/pdf', PdfController.downloadPdf)

module.exports = apiV1Router;