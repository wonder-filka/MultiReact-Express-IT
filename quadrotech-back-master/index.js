const express = require("express");
const mailer = require("./sendEmail");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const logger = require("./logger");

const port = process.env.PORT || 3001;

const corsOptions = {
  origin: [
    "https://quadro-tech.com",
    "https://admin.quadro-tech.com",
    "https://api.quadro-tech.com",
    "http://localhost:3000"
  ],
};

app.use(function (req, res, next) {
  if (
    req.headers["x-forwarded-proto"] !== "https" &&
    process.env.NODE_ENV === "production"
  ) {
    res.redirect("https://" + req.hostname + req.url);
  } else {
    next();
  }
});
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  next();
});

const casesRouter = require("./app/controllers/casesController");
const deleteRouter = require("./app/controllers/deleteCase");
const saveFileRouter = require("./app/controllers/savefile");
const updateEnRouter = require("./app/controllers/updateEn");
const updateDeRouter = require("./app/controllers/updateDe");
const updateEsRouter = require("./app/controllers/updateEs");
const deleteEnRouter = require("./app/controllers/deleteEn");
const deleteEsRouter = require("./app/controllers/deleteEs");
const deleteDeRouter = require("./app/controllers/deleteDe");
const addCaseRouter = require("./app/controllers/addCase");
const users = require("./app/controllers/users");
const enRouter = require("./app/controllers/enTranslate");
const deRouter = require("./app/controllers/deTranslate");
const esRouter = require("./app/controllers/esTranslate");

app.use(bodyParser.json());
app.use(express.static("images"));

app.post("/my-endpoint", (req, res) => {
  const { name, lastname, phone, email, company, message } = req.body;
  const messagetoEmail = {
    from: "Website Sky UA <manager@skyua.org>",
    to: "lolly.oops.shop@gmail.com",
    subject: "Mail from web site",
    text: `
         Mail from web site
       Name: ${name}
       Lastname: ${lastname}
       Phone: ${phone}
       Email: ${email}
       Company: ${company}
       Message: ${message}
      `,
  };
  mailer(messagetoEmail);
  res.send(
    `Name: ${name}, Lastname: ${lastname}, Phone: ${phone}, Email: ${email}, Company: ${company}, Message: ${message}, `
  );
});

app.use("/cases", casesRouter);
app.use("/cases/:id", deleteRouter);
app.use("/save-files", saveFileRouter);
app.use("/update-en", updateEnRouter);
app.use("/update-de", updateDeRouter);
app.use("/update-es", updateEsRouter);
app.use("/delete-en", deleteEnRouter);
app.use("/delete-de", deleteDeRouter);
app.use("/delete-es", deleteEsRouter);

app.use("/add-case", addCaseRouter);
app.use("/users", users);

app.use("/en", enRouter);
app.use("/de", deRouter);
app.use("/es", esRouter);

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  logger.info(`Test backend listening on port ${port}`);
});
