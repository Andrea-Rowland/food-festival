const createLoremIpsum = require("./helpers");
require("bootstrap");
const createEl = require("./domMethods");

$(document).ready( function() {
    const currentEvent = JSON.parse(localStorage.getItem("currentEvent")) || {
        title: "Title Placeholder",
        subtitle: "",
        description: ""
    };