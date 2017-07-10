
const pool = require('../db');

exports.getFleurs = (req, res) => {
    pool.getConnection(function(err, connection) {
        const sql = 'SELECT * FROM fleurs';
        // Use the connection
        connection.query( sql , function (error, results, fields) {

            res.status(200).json({data: results, message: 'data success!'});

            // And done with the connection.
            connection.release();

            // Handle error after the release.
            if (error) {
                res.status(500).send(error)
            }

            // Don't use the connection here, it has been returned to the pool.
        });
    });
}


exports.getFleur = (req, res) => {
    pool.getConnection(function(err, connection) {
        const sql = 'SELECT * FROM fleurs WHERE id = ' + req.params.id;
        // Use the connection
        connection.query( sql , function (error, results, fields) {

            res.status(200).json({data: results, message: 'data success!'});

            // And done with the connection.
            connection.release();

            // Handle error after the release.
            if (error) {
                res.status(500).send(error)
            }

            // Don't use the connection here, it has been returned to the pool.
        });
    });
}


exports.addFleur = (req, res) => {
    pool.getConnection(function(err, connection) {

        var aError = [];
        
        var msgNom = '';
        if( !req.body.nom || req.body.nom === '' ){
            msgNom = "Le champ Nom est obligatoire.";
        }else if( req.body.nom.length < 4 ){
            msgNom = "Le champ Nom doit contenir au moins 4 caractères.";
        }else if( req.body.nom.length > 24 ){
            msgNom = "Le champ Nom ne doit pas contenir plus de 24 caractères.";
        }
        if(msgNom !== ''){
            aError.push({
                field: "nom",
                message: msgNom
            });
        }

        var msgCouleur = '';
        if( !req.body.couleur || req.body.couleur === '' ){
            msgCouleur = "Le champ Couleur est obligatoire.";
        }
        if(msgCouleur !== ''){
            aError.push({
                field: "couleur",
                message: msgCouleur
            });
        }

        var msgPrix = '';
        if( !req.body.prix || req.body.prix === '' ){
            msgPrix = "Le champ Prix est obligatoire.";
        }else if( req.body.prix.toString().length > 2 ){
            msgPrix = "Le champ Prix ne doit pas contenir plus de 2 chiffres.";
        }
        if(msgPrix !== ''){
            aError.push({
                field: "prix",
                message: msgPrix
            });
        }
        
        if( aError.length > 0 ){
            res.status(422).json(aError);
            return false;
        }
        

        const sql = " INSERT INTO fleurs (nom, couleur, prix) VALUES ('"+ req.body.nom +"', '"+ req.body.couleur +"', '"+ req.body.prix +"') ";
        // Use the connection
        connection.query( sql , function (error, results, fields) {

            res.status(200).json({data: results, message: 'add success!'});

            // And done with the connection.
            connection.release();

            // Handle error after the release.
            if (error) {
                res.status(500).send(error)
            }

            // Don't use the connection here, it has been returned to the pool.
        });
    });
}


exports.updateFleur = (req, res) => {
    pool.getConnection(function(err, connection) {
        const sql = " UPDATE `fleurs` SET `nom` = '"+ req.body.nom +"', `couleur` = '"+ req.body.couleur +"', `prix` = '"+ req.body.prix +"' WHERE `id` = " + req.params.id;
        // Use the connection
        connection.query( sql , function (error, results, fields) {

            res.status(200).json({data: results, message: 'update success!'});

            // And done with the connection.
            connection.release();

            // Handle error after the release.
            if (error) {
                res.status(500).send(error)
            }

            // Don't use the connection here, it has been returned to the pool.
        });
    });
}

exports.deleteFleur = (req, res) => {
    pool.getConnection(function(err, connection) {
        const sql = 'DELETE FROM fleurs WHERE id = ' + req.params.id;
        // Use the connection
        connection.query( sql , function (error, results, fields) {

            res.status(200).json({data: results, message: 'delete success!'});

            // And done with the connection.
            connection.release();

            // Handle error after the release.
            if (error) {
                res.status(500).send(error)
            }

            // Don't use the connection here, it has been returned to the pool.
        });
    });
}


