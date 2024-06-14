const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        res.render('homepage');
    } catch (error) {
        console.log('get error');
        res.status(500).json(error);
    }
})

module.exports = router;