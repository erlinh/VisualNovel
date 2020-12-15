const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StorylineSchema = new Schema ({
    content:[{
        type:Schema.Types.Mixed,
        required:true,
      }]
});

const Storyline = mongoose.model("storyline", StorylineSchema);

module.exports = Storyline;