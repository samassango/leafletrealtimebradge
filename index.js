const express = require("express");
const request = require("request");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the bradge");
});

app.get("/currentlocation", (req, res) => {
  request(
    "https://wanderdrone.appspot.com/",
    { json: true },
    (error, response, body) => {
      if (error) console.log(error);
      res.json(body);
    }
  );
});

app.get("/adafruit/currentlocation", (req, res) => {
  request(
    "https://io.adafruit.com/api/v2/Phathwa/feeds/location001/data?limit=1&x-aio-key=a8eed882129f4b828bd3de8333b99176",
    { json: true },
    (error, response, body) => {
      if (error) console.log(error);
      if (body === undefined) return;
      const data = { ...body[0].location, properties: body[0] };
      //-25.749267, 28.268400
      //   const num = getRandomArbitrary(0.00001, 0.00009);
      //   const lat = -25.749267 + num; //utils.getRandomInRange(-10, 20, 4);
      //   const lon = 28.2684 + num; //utils.getRandomInRange(-10, 20, 4);
      //   const data = {
      //     geometry: {
      //       type: "Point",
      //       coordinates: [lat, lon]
      //     },
      //     type: "Feature",
      //     properties: {}
      //   };

      res.json(data);
    }
  );
});

app.get("/adafruit/destinationlocation", (req, res) => {
  const lat = -25.7815122;
  const lon = 28.2756831;
  res.json({
    geometry: {
      type: "Point",
      coordinates: [lat, lon]
    },
    type: "Feature",
    properties: {}
  });
});

app.listen(4400, () => {
  console.log("listening to port 4400");
});
