const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

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
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-992992",
        id: 4
    }
];

app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
});

app.get("/api/persons", (req, res) => {
    res.json(persons);
});

app.get("/info", (req, res) => {
    const dataSize = persons.length;

    res.send(`
    <p>The phonebook has info for ${dataSize} people</p>
    <p>${new Date()}</p>

    `);
});

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id);
    const person = persons.filter(p => p.id === id);

    res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.param.id);
    persons = persons.filter(p => p.id !== id);

    res.status(204).end();
});

const genId = () => {
    const maxId = persons.length > 0 ? Math.max(...persons.map(p => p.id)) : 0;
    return maxId + 1;
};

app.post("/api/persons", (req, res) => {
    const body = req.body;

    if (!body.name) {
        return res.status(400).json({
            error: "content missing"
        });
    }

    const person = {
        name: body.name,
        number: body.number,
        id: genId()
    };

    persons = persons.concat(person);

    console.log(person);

    res.json(person);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`));
