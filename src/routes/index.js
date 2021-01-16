const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('index.html', {
        title: 'Coffee Shop',
        title_tag: 'Coffee Shop | Home'
    });
});
router.get('/contact', (req, res) => {
    res.render('contact.html', {
        title: 'Coffee Shop',
        title_tag: 'Coffee Shop | Contact'
    })
});
router.get('/about', (req, res) => {
    res.render('about.html', {
        title: 'Coffee Shop',
        title_tag: 'Coffee Shop | About'
    })
});

module.exports = router;