const fs = require('fs');
const fsPromises = fs.promises;
const sanityClient = require('@sanity/client');

sanityClient({
    projectId: 'fjxc2rhg',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2022-04-16'

});

const jsonFormatter = (images) => {
    let json = [];
    images.map((img, index) => {
        json = [...json,
        { "_id": `${index}`, "_type": "gallery", "image": { "_type": "image", "_sanityAsset": `image@file:///home/quinaiton/dev/sladeWelding/frontend/public/${img}` } }
        ];
    });
    return json;
};



const fetchImageUrls = async () => {
    try {
        let images = await fsPromises.readdir('/home/quinaiton/dev/sladeWelding/frontend/public');
        const imageJson = jsonFormatter(images);
        await fsPromises.writeFile('/home/quinaiton/dev/sladeWelding/sanity/schemas/imageJson.ndjson', JSON.stringify(imageJson));
    } catch (err) {
        console.error(err);
    }
};

fetchImageUrls();