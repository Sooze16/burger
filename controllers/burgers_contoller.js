var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {

    burger.selectAll(function(data) {
        var hdbrsObject = {
            burgers: data
        };
        console.log(hdbrsObject);
        res.render("index", hdbrsObject);

    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"],

        [req.body.burgerName, req.body.devoured],
        function(result) {
            res.json({ id: results.insertId });
        }

    );
});

router.put("api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();

        } else {
            res.status(200).end();
        }

    });
});

router.delete("api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.delete({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();

        } else {
            res.status(200).end();
        }

    });
});

module.exports = router;