var Models = {
    path: "./Model/",
    models: [
        'activity',
        'check',
        'file',
        'notice',
        'school',
        'suggestion',
        'tip',
        'user',
        'version',
        'word',
    ]
};
exports.Models = new Array();
for (var i = 0; i < Models.models.length; i++) {
    exports.Models[Models.models[i]] = require(Models.path + Models.models[i]);
}

var Dao = {
    path: "./Dao/",
    daos: [
        'user',
        'school',
        'version'
    ]
};
exports.Dao = new Array();
for (var i = 0; i < Dao.daos.length; i++) {
    exports.Dao[Dao.daos[i]] = require(Dao.path + Dao.daos[i]);
}

exports.pool = require('./pool');
