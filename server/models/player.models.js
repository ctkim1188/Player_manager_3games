const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Name field must be filled"],
        minlength: [2, "Name must be at least 2 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Name field must be filled"],
        minlength: [2, "Name must be at least 2 characters long"]
    },
    primaryPosition: {
        type: String,
        required: [true, "must have position"],
        validate:{
            validator: function(pos){
                return pos === "C" || pos === "PF" || pos === "SF" || pos === "SG" || pos === "PG"
            },
            message: "position must be C, PF, SF, SG, or PG"
        }
    },
    gameOneStatus: {
        type: String,
        required: [true, "need a status"],
        default: "ukn",
        validate:{
            validator: function(status){
                return status === "yes" || status === "no" || status === "ukn"
            }
        }
    },
    gameTwoStatus: {
        type: String,
        required: [true, "need a status"],
        default: "ukn",
        validate:{
            validator: function(status){
                return status === "yes" || status === "no" || status === "ukn"
            }
        }
    },
    gameThreeStatus: {
        type: String,
        required: [true, "need a status"],
        default: "ukn",
        validate:{
            validator: function(status){
                return status === "yes" || status === "no" || status === "ukn"
            }
        }
    },




}, {timestamps: true})


const Players = mongoose.model("Players", PlayerSchema);
module.exports = Players