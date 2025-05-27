const { fetchStore, postStore, deleteStore, updateStore, singlePage } = require('../controller/storeController')

const router = require('express').Router()

router.route('/program').get(fetchStore).post(postStore)
router.route('/program/:id').delete(deleteStore).patch(updateStore).get(singlePage)

module.exports = router