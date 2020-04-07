const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const { id } = req.body;
        console.log(req.body);

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if (!ong) {
            return res.status(400).json({ error: 'No ONG found'});
        }

        return res.json(ong);
    }
}