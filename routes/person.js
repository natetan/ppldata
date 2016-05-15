var express = require('express');
var router = express.Router();
var Person = require('../models/people');

router.route('/')
	
	.get(function(req, res) {
		Person.find(function(err, people) {
			if (err) {
				res.send(err);
			}
			res.json(people);
		});
	})

	.post(function(req, res) {
		var person = new Person();
		person.name = req.body.name;
		person.age = req.body.age;
		person.info = req.body.info;

		person.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json({ message: "Person added!" });
		});
	});

router.route('/:person_id')
	
	.get(function(req, res) {
		Person.findById(req.params.person_id, function(err, person) {
			if (err) {
				console.log("person error id", err);
				return res.sendStatus(404);
			}
			res.render('person', {
				name: person.name,
				age: person.age,
				info: person.info,
			});
		});
	})

	.put(function(req, res) {
		Person.findById(req.params.person_id, function(err, person) {
			if (err) {
				res.send(err);
			}
			person.name = req.body.name;
			person.age = req.body.age;
			person.info = req.body.info;

			person.save(function(err) {
				if (err) {
					res.send(err);
				}
				res.json({ message: 'person has been updated!' });
			});
		});
	})


module.exports = router;