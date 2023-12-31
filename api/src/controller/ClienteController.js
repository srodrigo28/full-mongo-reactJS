const ClienteModel = require('../model/ClienteModel');

const { startOfMonth, endOfMonth,
        startOfYear, endOfYear
      } = require('date-fns')

const current = new Date();

class ClienteController{
    async create(req, res){
        const cliente = new ClienteModel(req.body);

        await cliente
            .save()
            .then( response => {
                return res.status(200).json(response);
            })
            .catch(error => {
             return res.status(500).json(error);
            })
    }
    async all(req, res){
        await ClienteModel.find({ cpf: {'$in': req.params.cpf} })
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }
    async all2(req, res){
        await ClienteModel.find()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async update(req, res){
        await TaskModel.findById({'_id': req.params.id}, req.body, { new: true})
        .then( response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async show(req, res) {
        await TaskModel.findById(req.params.id)
            .then(response => {
                if(response)
                    return res.status(200).json(response);
                })
            .catch(error => {
                return res.status(500).json(error)
            })
    }
    async delete(req, res){
        await TaskModel.deleteOne({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async done(req, res) {
        await TaskModel.findByIdAndUpdate(
            { '_id': req.params.id },
            { 'done': req.params.done },
            { new: true })
            .then(response => {
            return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }
    async late(req, res) {
        await ClienteModel
        .find({
            'when': { '$lt': current },
            'macaddress': { '$in': req.params.cpf}
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(500).json(error)
        })
    }
    async month(req, res) {
        await TaskModel
            .find({
                'macaddress': { '$in': req.params.macaddress },
                'when': {
                    '$gte': startOfMonth(current),
                    '$lt': endOfMonth(current)
                }
            })
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }
    async year(req, res) {
        await TaskModel
            .find({
                'macaddress': { '$in': req.params.macaddress },
                'when': {
                    '$gte': startOfYear(current),
                    '$lt': endOfYear(current)
                }
            })
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }
}


module.exports = new ClienteController();