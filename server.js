const express = require("express");
const Vue = require("vue");
const fs = require("fs");
const renderer = require("vue-server-renderer").createRenderer();

const mainHTML = fs.readFileSync("./public/main.html", "utf-8");
const loaderHTML = fs.readFileSync("./assets/loader.html", "utf-8");

const PORT = process.env.PORT || 8080;
const server = express();

server.use(express.static(`${__dirname}/public`));

server.get("*", (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: loaderHTML
    });
    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end("Internal Server Error");
            return;
        }
        res.end(mainHTML.replace(`<div id=app></div>`, `<div id="app">${html}</div>`));
    });
});

server.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`)); // eslint-disable-line
