const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

/* MAIN ROUTES */

router.get('/home', mainController.home);
router.get('/contact', mainController.contact);
//router.get('/about', mainController.about);

router.get('/', (req, res)=> {
    res.render('index', {
        title: 'Inicio | CRUD MVC',
        list: [
            {
                name:'Jose',
                age: 27
            },
            {
                name:'Andrea',
                age: 22
            },
            {
                name:'Lucas',
                age: 33
            }
        ]

    });
});
router.get('/about', (req, res)=> {
    res.render('nosotros', {
        title:'Nosotros | CRUD MVC'
    });
});

module.exports = router;