const express = require("express");
const app = express();

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-123456",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "12-43-23455",
        id: 1
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-992992",
        id: 1
    }
];

app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
});

app.get("/api/persons", (req, res) => {
    res.json(persons);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`));
