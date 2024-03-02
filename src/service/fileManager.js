const path = require('path');
const fs = require('fs');

const downloadFolder = path.join(__dirname, '../', 'download');

const FileManager = {
    dropDirectory,
    createPdfFile,
}


function dropDirectory() {
    if(!fs.existsSync(downloadFolder)) return 

    const files = fs.readdirSync(downloadFolder)
    fs.existsSync(downloadFolder)
    files.forEach((element) => {
        const elementPath = path.join(downloadFolder, element)
        if (fs.statSync(elementPath).isDirectory())
            this.dropDirectory(elementPath)
        else
            fs.unlinkSync(elementPath)
    })
    fs.rmdirSync(downloadFolder)
}

function createPdfFile(){
    if(!fs.existsSync(downloadFolder))
        fs.mkdirSync(downloadFolder)

    return path.join(downloadFolder, new Date().getTime() + 'path.pdf')
}

module.exports = FileManager;