const express = require('express'); 
const router = express.Router();

router.get('/', (request, response) => {
    response.render('template', {
        locals: {
            title: 'Meow!',
            message: 'we are cats',
        },
        partials: {
            partial: 'partial-cats-dogs',
        }
    })
});

module.exports = router;