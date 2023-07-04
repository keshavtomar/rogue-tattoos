const fs = require("fs");

const { encode } = require("blurhash");
const sharp = require("sharp");
const imagePath = "../public/images/gallery";
const path = require('path');



const encodeImageToBlurhash = (path) => new Promise((resolve, reject) => {
    sharp(path)
        .raw()
        .ensureAlpha()
        .resize(32, 32, { fit: "inside" })
        .toBuffer((err, buffer, { width, height }) => {
            if (err) return reject(err);
            resolve(encode(new Uint8ClampedArray(buffer), width, height, 4, 4));
        });
});


const here = async (data) => {
    const filePath = path.join(__dirname, 'imgData.jsx');
    const fileContent = JSON.stringify(data);

    try {
        await fs.writeFile(filePath, fileContent);
        console.log('Data written to file successfully.');
    } catch (error) {
        console.error('Error writing to file:', error);
    }
}


const encodeAllImages = async () => {
    const imagesNames = await fs.promises.readdir(imagePath);
    console.log("Here is the ");
    const data = [];

    for (const name of imagesNames) {
        // console.log(imagePath + name);
        const encodedHash = await encodeImageToBlurhash(
            imagePath + "/" + name
        );
        data.push({ name, src: name, blurhash: encodedHash });
        // console.log("Hash: ", encodedHash);
    }

    console.log(data);

}


encodeAllImages();

console.log("hello");