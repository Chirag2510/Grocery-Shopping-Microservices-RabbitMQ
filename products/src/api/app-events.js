module.exports = (app) => {

    app.use('/app-events', async (req, res, next) => {

        const { payload } = req.body;

        service.SubscribeEvents(payload);

        console.log("Product service received event");
        return res.status(200).json(payload);
    })
}