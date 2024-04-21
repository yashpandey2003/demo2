const express = require('express');
const cors = require("cors");
const authRoute = require("./routers/auth-router");
const contactRoute = require('./routers/contact-router');
const serviceRoute = require('./routers/service-router');
const requirementRouter = require('./routers/requirement-router');
const app = express();
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, HEAD",
    credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/info", requirementRouter);
app.use(errorMiddleware);

const PORT = 5000;


connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`);
    })

});



