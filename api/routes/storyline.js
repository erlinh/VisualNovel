var express = require('express');
var StoryRouter = express.Router();
const Storyline = require('../models/Storyline');

StoryRouter.get('/', async (req,res)=>{  
    try {
        const pullStorylines = await Storyline.find({});
        console.log(pullStorylines);
        // res.json(pullStorylines)

        const allStorylines = {pullStorylines};
        res.json(allStorylines);
    }
    catch (err){
        res.send('Error while getting content' + err);
    }
});

module.exports = StoryRouter;