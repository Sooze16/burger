var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        console.log("create")
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });

    },
    update: function(objColCals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },


    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);

        });
    }

}

module.exports = burger