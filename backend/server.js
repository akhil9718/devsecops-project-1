const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "DevSecOps Project API Running Successfully 🚀"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        application: "DevSecOps Project",
        version: "1.0.0"
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});