const path = require('path');
const fs = require('fs');

const FileManager = {
    dropDirectory: (dir) => {
        const files = fs.readdirSync(dir)
        
        files.forEach((element) => {
            const elementPath = path.join(dir, element)
            if(fs.statSync(elementPath).isDirectory)
                this.dropDirectory(elementPath)
            else
                fs.unlinkSync(elementPath)
        })
        fs.rmdirSync(dir)
    },
    createPdfFile: (dir) => {
        return path.join(dir, new Date().getTime() + 'path.pdf')
    }
}



module.exports = FileManager;