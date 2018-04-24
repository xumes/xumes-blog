const express = require('express')
const router = express.Router()

router.get('/postagens', (req, res) => {
    res.json({
        titulo: 'Meu primeiro post',
        conteudo: 'Era uma vez, uma publicação',
        autor: 'Reginaldo Santos'
    })
})

module.exports = router