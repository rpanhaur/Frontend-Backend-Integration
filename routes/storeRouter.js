const { fetchStore, postStore } = require('../controller/storeController')

const router = require('express').Router()

router.route('/store').get(fetchStore).post(postStore)
// router.route('/store/:id').delete().patch().get()

module.exports = router