const {Card} = require('../models')
const types = ['Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark', 'Fairy'];

module.exports.viewAll = async function(req, res, next) {
    const cards = await Card.findAll();
    res.render('index', {cards});
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
            en_two_on: req.body.en_two_on,
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
        hp: "",
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
            en_two_on: req.body.en_two_on,
            en_two_tw: req.body.en_two_tw,
            en_two_th: req.body.en_two_th,
            weak: req.body.weak,
            str: req.body.str,
            retreat: req.body.retreat,
            description: req.body.description
        });
    res.redirect('/');
}

// const cards = [ {
//     id: 1,
//     name: 'Eevee',
//     hp: '50HP',
//     type: 'normal',
//     icon: 'https://archives.bulbagarden.net/media/upload/thumb/9/95/Normal_icon_SwSh.png/64px-Normal_icon_SwSh.png',
//     picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ShF-FL8m6XI1Qz7zIq0Wrvo5p0rvrMdrFA&usqp=CAU',
//     pop: 'NO. 133 Evolution Pokemon HT: 1\' WT: 14.3 lbs.',
//     moveOne: 'Bite',
//     damOne: '30',
//     descOne: '',
//     enOneOn: 'https://archives.bulbagarden.net/media/upload/thumb/9/95/Normal_icon_SwSh.png/64px-Normal_icon_SwSh.png',
//     enOneTw: 'https://archives.bulbagarden.net/media/upload/thumb/9/95/Normal_icon_SwSh.png/64px-Normal_icon_SwSh.png',
//     enOneTh: '',
//     moveTwo: 'Tackle',
//     damTwo: '20',
//     descTwo: '',
//     enTwoOn: 'https://archives.bulbagarden.net/media/upload/thumb/9/95/Normal_icon_SwSh.png/64px-Normal_icon_SwSh.png',
//     enTwoTw: '',
//     enTwoTh: '',
//     weak: 'https://archives.bulbagarden.net/media/upload/thumb/3/3b/Fighting_icon_SwSh.png/64px-Fighting_icon_SwSh.png',
//     str: '#',
//     desc: 'Thanks to its unstable genetic makeup, this special Pokemon conceals many different possible evolutions.'
// },
//     {
//         id: 2,
//         name: 'Decidueye',
//         hp: '140HP',
//         type: 'grass',
//         icon: 'https://archives.bulbagarden.net/media/upload/thumb/a/a8/Grass_icon_SwSh.png/64px-Grass_icon_SwSh.png',
//         picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSObhrqNXxyUSzuI3Fo8N27VuVMbNg5_FN8Yg&usqp=CAU',
//         pop: 'NO. 724 Arrow Quill Pokemon HT: 5\'03" WT: 80.7 lbs.',
//         moveOne: 'Leaf Blade',
//         damOne: '30+',
//         descOne: 'Flip a coin. If heads, this attack deals 30 more damage.',
//         enOneOn: 'https://archives.bulbagarden.net/media/upload/thumb/a/a8/Grass_icon_SwSh.png/64px-Grass_icon_SwSh.png',
//         enOneTw: '',
//         enOneTh: '',
//         moveTwo: 'Brave Bird',
//         damTwo: '120',
//         descTwo: 'This Pokemon does 20 damage to itself.',
//         enTwoOn: 'https://archives.bulbagarden.net/media/upload/thumb/a/a8/Grass_icon_SwSh.png/64px-Grass_icon_SwSh.png',
//         enTwoTw: 'https://archives.bulbagarden.net/media/upload/thumb/9/95/Normal_icon_SwSh.png/64px-Normal_icon_SwSh.png',
//         enTwoTh: 'https://archives.bulbagarden.net/media/upload/thumb/9/95/Normal_icon_SwSh.png/64px-Normal_icon_SwSh.png',
//         weak: 'https://archives.bulbagarden.net/media/upload/thumb/a/ab/Fire_icon_SwSh.png/64px-Fire_icon_SwSh.png',
//         str: '',
//         desc: 'It fires arrow quills from its wings with such precision, they can pierce a pebble at distances over a hundred yards.'
//     }];