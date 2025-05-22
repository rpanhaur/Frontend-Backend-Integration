const { fetchStore, postStore, deleteStore, updateStore, singlePage } = require('../controller/storeController')

const router = require('express').Router()

router.route('/store').get(fetchStore).post(postStore)
router.route('/store/:id').delete(deleteStore).patch(updateStore).get(singlePage)

module.exports = router