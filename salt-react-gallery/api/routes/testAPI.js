const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', function(req, res, next) {
    getPhotos(req.query.query, req.query.page)
        .then(data => res.send(data.data.results));
});

const getPhotos = async (searchQuery, page) => {
    return await axios.get('https://api.unsplash.com/search/photos', {
          headers: {
            Authorization: `Client-ID v0p8QD5Xh-umkECjOm4Keo8AiJmQ9CbLyER60jCTnYo`
          },
          params: {
            query: searchQuery,
            page,
          }
        });
};

module.exports = router;
