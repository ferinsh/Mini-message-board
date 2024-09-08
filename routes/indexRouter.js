const express = require("express");
const indexRouter = express.Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

indexRouter.get("/new", (req, res) => {
    res.render("form")
})

indexRouter.post("/new", (req, res) => {
    // console.log(req.body)
    const messageText = req.body.message;
    const messageUser = req.body.authorName;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    // res.render("index", {messages: messages})
    res.redirect("/");
})

indexRouter.use("/", (req, res) => {
    res.render("index", {messages: messages})
})

module.exports = indexRouter;