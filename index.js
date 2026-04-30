const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Bus Ticket Booking</title>
      <style>
        body {
          font-family: Arial;
          background: #f2f2f2;
          text-align: center;
          padding-top: 50px;
        }
        .container {
          background: white;
          width: 400px;
          margin: auto;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px gray;
        }
        input, select {
          width: 90%;
          padding: 10px;
          margin: 10px;
        }
        button {
          background: green;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
        }
        h2 {
          color: #333;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Bus Ticket Booking</h2>
        <form action="/book" method="POST">
          <input type="text" name="name" placeholder="Enter Your Name" required /><br>

          <input type="text" name="from" placeholder="From Location" required /><br>

          <input type="text" name="to" placeholder="To Location" required /><br>

          <input type="number" name="seats" placeholder="Number of Seats" required /><br>

          <button type="submit">Book Ticket</button>
        </form>
      </div>
    </body>
    </html>
  `);
});

app.post("/book", (req, res) => {
  const { name, from, to, seats } = req.body;

  res.send(`
    <html>
    <head>
      <title>Booking Success</title>
    </head>
    <body style="font-family: Arial; text-align:center; padding-top:50px;">
      <h2>Booking Successful 🎉</h2>
      <p>${name}, your ${seats} seat(s) from <b>${from}</b> to <b>${to}</b> have been booked successfully!</p>
      <a href="/">Book Another Ticket</a>
    </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
