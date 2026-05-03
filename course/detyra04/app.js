import fetch from "node-fetch";
import fs, { read } from "fs";
import { Transform } from "stream";


// function fetchData() {
//     const posts = fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     });
// }

// fetchData();

async function fetchData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json();
        return data;
    } catch(e) {
        throw new Error("Wrong API URL");
    }
}


async function saveData() {

    if(!fs.existsSync("./data.txt")) {
        throw new Error("File does not exist!");
    }

    try {
        const data = await fetchData();
        const stringifiedData = JSON.stringify(data);
        
        return new Promise((resolve, reject) => {
            const writeStream = fs.createWriteStream("./data.txt", { encoding: "utf-8" });

            writeStream.write(stringifiedData);
            writeStream.end();

            writeStream.on("finish", resolve);
            writeStream.on("error", reject);
        });
    } catch(e) {
        throw new Error("Data could not be written");
    }
} 


async function readData() {
    if (!fs.existsSync("./data.txt")) {
        throw new Error("File does not exist!");
    }

    try {
        return new Promise((resolve, reject) => {
            const readStream = fs.createReadStream("./data.txt", { encoding: "utf-8" });
            let res = "";

            readStream.on("data", chunk => {
                res += chunk;
            });

            readStream.on("end", () => {
                console.log(res || "null");
                resolve(res);
            });

            readStream.on("error", err => {
                reject(err);
            });
        });
    } catch(error) {
        throw new Error("Data could not be read");
    }
}

async function main() {
    try {
        await saveData();
        await readData();
    } catch(e) {
        console.log(e);
    }

}


main();

