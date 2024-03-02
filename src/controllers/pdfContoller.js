const PdfService = require("../service/pdfService");
const path = require("path");


const  PdfController = {
    downloadPdf: async (req, res) =>{
    const url = req.query.url

    if(!url) return res.status(400).json({message: "must be provided a url query parameter"}); 

    try{
      const pdfPath = await PdfService.downloadPdf(url)
      res.setHeader('Content-Type', 'application/pdf');
      res.download(path.join( pdfPath));
    }catch (e) {
      res.status(500).json({message: e.message})
    }

  }
}

module.exports = PdfController
  