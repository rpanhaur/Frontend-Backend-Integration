const { stores } = require("../database/connection")

//Fetching Data from Backend when user call get methond in frontend
exports.fetchStore = async function (req, res) {

    try {
        const data = await stores.findAll()

        res.json({
            message: 'Store data is Successfuly fetched',
            datas: data
        })

    } catch (error) {

        res.json({
            message: 'Something is Wrong'
        })

    }
}

//User use the post method to post data from frontend

exports.postStore = async function (req, res) {

    try {
        const { storeName, storeOwner, storeAddress, storePhone } = req.body

        const result = await stores.create({
            storeName,
            storeOwner,
            storeAddress,
            storePhone


        })

        res.json({
            message: 'Store data is Successfully posted',
            results: result
        })

    } catch (error) {

        res.json({
            message: 'Something is Wrong'
        })

    }

}