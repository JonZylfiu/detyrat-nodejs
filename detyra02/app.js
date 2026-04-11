const path = require("path");
const fs = require("fs");

const folderpath = path.join(__dirname, "test-folder");


function createFolder() {

    if(fs.existsSync(folderpath)) {
        console.log("Folder already exists!");
        return;
    }
 
    fs.mkdir(folderpath, err => {
        if(err) {
            console.log(err);
            return;
        }

        console.log(`test-folder is created at ${folderpath}`);
    })
}


function copyFile(filename) {
    let origin_path = path.join(__dirname, `${filename}`); 
    let dest_path = path.join(__dirname, `/test-folder/${filename}`)
    
    if(fs.existsSync(dest_path)) {
        console.log("File already exists!");
        return;
    }

    fs.copyFile(origin_path, dest_path, (err) => {
        if(err) {
            console.log(err);
            return;
        }

        console.log("File was copied.");
    })
}

createFolder();

setTimeout(() => {
    copyFile("example.txt");
}, 1000);
