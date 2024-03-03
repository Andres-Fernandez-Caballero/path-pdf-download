const FileManager = require("./fileManager");
const path = require("path");
const puppeteer = require('puppeteer');

const PdfService = {

    downloadPdf: async (url) => {
      
        FileManager.dropDirectory();
            
        const browser = await puppeteer.launch({
          args: ['--no-sandbox', ]
        });
        const page = await browser.newPage();
      
        await page.goto(url, {
          waitUntil: 'networkidle0',
        });
      
        const pdfPath = FileManager.createPdfFile()
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
        return pdfPath     
    }
}

module.exports = PdfService;