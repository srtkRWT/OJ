const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const {
    DB_CONNECT,
    PORT = 3000
} = process.env;

mongoose.connect(DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connected to db')
);

app.use(express.json());

const adminRoute = require('.admin/route');
const mcqRoute = require('.mcq/route');
const moderatorRoute = require('.moderator/route');
const studentRoute = require('.student/route');
const testRoute = require('.test/route');
const test_seriesRoute = require('.test_series/route');


app.use('/api/admin', adminRoute);
app.use('/api/mcq', mcqRoute);
app.use('/api/moderator', moderatorRoute);
app.use('/api/student', studentRoute);
app.use('/api/test', testRoute);
app.use('/api/test_series', test_seriesRoute);

app.listen(PORT, () => {
    console.log("running server");
});