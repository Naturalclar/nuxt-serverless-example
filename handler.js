const { createNuxtApp } = require("./dist-server");
const config = require("./nuxt.config.js");

module.exports.render = createNuxtApp(config);
