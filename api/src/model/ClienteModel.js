const mongoose = require('../config/database');
const Schema  = mongoose.Schema;

const ClienteSchema = new Schema({
    tel:         { type: String, required: true },
    cpf:         { type: String, required: true },
    nome:        { type: String, required: true },
    email:       { type: String, required: true },
    valorCapital:{ type: String, required: true },
    percentual:  { type: String, required: true },
    valorReceber:{ type: String, required: true },
    when:        { type: Date,   default: Date.now() },

    done: {type: Boolean, default: false },
    created: { type: Date, default: Date.now()},
})

module.exports = mongoose.model('Cliente', ClienteSchema);