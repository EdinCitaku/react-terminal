const fs = require('fs');
const path = require('path');

function dirTree(filename) {
    var stats = fs.lstatSync(filename),
        info = {
            path: filename,
            name: path.basename(filename)
        };

    if (stats.isDirectory()) {
        info.type = "folder";
        info.children = fs.readdirSync(filename).map(function(child) {
            return dirTree(filename + '/' + child);
        });
    } 
    else {
        content = fs.readFileSync(filename, 'utf8');
        info.type = "file";
        info.content = content
    }
    return info;
}

var content = dirTree("pages");
fs.writeFileSync('./src/files/files.json', JSON.stringify(content));