const express = require('express'); 
const router = express.Router();

router.get('/', (request, response) => {
    const snippet = `<h1>Dogs and cats living together...mass hysteria!!</h1>`;
    response.render('template', {
        locals: {
            title: "Cats and dogs living together...mass hysteria!!",
            message: "kitties and puppies"
        },
        partials: {
            partial: "partial-cats-dogs"
        }
    })
});

module.exports = router;