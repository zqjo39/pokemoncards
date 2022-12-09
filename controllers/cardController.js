const {Card} = require('../models')
const types = ['N/A', 'Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark', 'Fairy'];

module.exports.viewAll = async function(req, res, next) {
    const cards = await Card.findAll();
    let searchType = 'All';
    let searchTypes = ['All'];
    for(let i = 0; i < types.length; i++) {
        searchTypes.push(types[i]);
    }
    res.render('index', {cards, types:searchTypes, searchType});
};

module.exports.renderEditForm = async function(req, res, next) {
    const card = await Card.findByPk(
        req.params.id
    );
    res.render('edit', {card, types});
}

module.exports.updateCard = async function(req, res) {
    await Card.update(
        {
            name: req.body.name,
            hp: req.body.hp,
            type: req.body.type,
            icon: req.body.icon,
            picture: req.body.picture,
            pop: req.body.pop,
            move_one: req.body.move_one,
            dam_one: req.body.dam_one,
            desc_one: req.body.desc_one,
            en_one_on: req.body.en_one_on,
            en_one_tw: req.body.en_one_tw,
            en_one_th: req.body.en_one_th,
            move_two: req.body.move_two,
            dam_two: req.body.dam_two,
            desc_two: req.body.desc_two,
            en_two_on:req.body.en_two_on,
            en_two_tw: req.body.en_two_tw,
            en_two_th: req.body.en_two_th,
            weak: req.body.weak,
            str: req.body.str,
            retreat: req.body.retreat,
            description: req.body.description
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}

module.exports.deleteCard = async function(req, res) {
    await Card.destroy(
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}

module.exports.renderAddForm = function(req, res) {
    const card = {
        name: "",
        hp: 1,
        type: types[0],
        icon: "",
        picture: "",
        pop: "",
        move_one: "",
        dam_one: "",
        desc_one: "",
        en_one_on: "",
        en_one_tw: "",
        en_one_th: "",
        move_two: "",
        dam_two: "",
        desc_two: "",
        en_two_on: "",
        en_two_tw: "",
        en_two_th: "",
        weak: "",
        str: "",
        retreat: "",
        description: "",
    }
    res.render('add', {card, types});
}

module.exports.addCard = async function(req, res) {
    await Card.create(
        {
            name: req.body.name,
            hp: req.body.hp,
            type: req.body.type,
            icon: req.body.type,
            picture: req.body.picture,
            pop: req.body.pop,
            move_one: req.body.move_one,
            dam_one: req.body.dam_one,
            desc_one: req.body.desc_one,
            en_one_on: req.body.en_one_on,
            en_one_tw: req.body.en_one_tw,
            en_one_th: req.body.en_one_th,
            move_two: req.body.move_two,
            dam_two: req.body.dam_two,
            desc_two: req.body.desc_two,
            en_two_on: req.body.en_two_on,
            en_two_tw: req.body.en_two_tw,
            en_two_th: req.body.en_two_th,
            weak: req.body.weak,
            str: req.body.str,
            retreat: req.body.retreat,
            description: req.body.description,
        });
    res.redirect('/');
}