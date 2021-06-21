const express = require('express'); 
const router = express.Router();

router.get('/', (request, response) => {
    response.render('template',{
        locals:{
            title: "Hello Express Templates World!"
        },
        partials: {
            partial: "partial-index"
        }
    })
});

module.exports = router;