const path = require('path');
const fs = require('fs');

const FileManager = {
    dropDirectory: (dir) => {
        const files = fs.readdirSync(dir)
        console.log(files.length);
        files.forEach((file) => {
            fs.unlinkSync(path.join(dir, file))
        })
    },
    createPdfFile: (dir) => {
        return path.join(dir, new Date().getTime() + 'path.pdf')
    }
}

module.exports = FileManager;