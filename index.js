const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const serverlessExpress = require('@vendia/serverless-express');
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const { cars } = require ("./cars");

app.post("/vehicleData", async (req, res, next) =>  {
    const vehicleData = JSON.stringify({ registrationNumber: req.body.reg });
    const vehicles = await cars(vehicleData);
    console.log(vehicles);
    return res.status(200).json(vehicles);
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});

exports.handler = serverlessExpress({ app });