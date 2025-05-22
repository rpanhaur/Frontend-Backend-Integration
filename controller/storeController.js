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

exports.deleteStore = async function (req, res) {

    try {

        const { id } = req.params

        const result = await stores.destroy({
            where: {
                id: id
            }
        })

        res.json({
            message: 'Store data is Successfully deleted',
            results: result
        })



    } catch (error) {
        res.json({
            message: 'Something is Wrong'
        })


    }


}

exports.updateStore = async function (req, res) {



    try {

        const id = req.params.id

        const { storeName, storeOwner, storeAddress, storePhone } = req.body

        const result = await stores.update({ storeName, storeOwner, storeAddress, storePhone }, {
            where: {
                id: id
            }
        })



        res.json({
            message: 'Store is updated Successfully'
        })

    } catch (error) {

        res.json({
            message: 'Somthing is wrong'
        })

    }





}

exports.singlePage = async function (req, res) {

    try {

        const id = req.params.id




        const result = await stores.findByPk(id)

        res.json({
            message: 'Single page is fetched Successfully',
            result
        })

    } catch (error) {

        res.json({
            message: 'Someting is wrong'
        })

    }





}





