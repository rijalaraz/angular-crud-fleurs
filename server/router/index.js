
const fleur = require('./routes/fleur.route');

module.exports = function (app) {
    app.use('/fleurs', fleur );
};