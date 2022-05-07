const API_URL = 'https://jsonplaceholder.typicode.com/photos';

const fetchImages = async () => {
    const req = await fetch(API_URL);
    const res = await req.json();

    return res;
}

const imageService = {
    fetchImages
}

export default imageService;