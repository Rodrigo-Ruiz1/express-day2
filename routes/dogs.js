const express = require('express'); 
const router = express.Router();

router.get('/', (request, response) => {
    const snippet = `<h1>Woof!!</h1>`;
    response.render('template', {
        locals: {
            title: "Woof woof!",
            message: "we are dogs",
        },
        partials: {
            partial: 'partial-cats-dogs',
        }
    });
        
});

module.exports = router;