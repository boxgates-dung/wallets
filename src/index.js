import express from "express";
import routes from "./routes";
import config from "./config.json";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
routes(app, express.Router());

const PORT = config.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
