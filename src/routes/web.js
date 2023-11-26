const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
    //res.send('Hello World! hehe')
    res.render('sample.ejs')
})
router.get('/abc', (req, res) => {
    res.send('check ABC')
})

router.get('/baba', (req, res) => {
    res.send('<h1>check ABC</h1>')
})

module.exports = router