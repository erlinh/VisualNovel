var express = require('express');
var StoryRouter = express.Router();
const Storyline = require('../models/Storyline');

StoryRouter.get('/', async (req,res)=>{

    

    try {
        const allStorylines = await Storyline.find({});
        console.log(allStorylines);
        res.json(allStorylines);
    }
    catch (err){
        res.send('Error while getting content' + err);
    }
});

module.exports = StoryRouter;