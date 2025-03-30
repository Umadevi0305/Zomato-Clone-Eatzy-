const app = require('./app');
const env = require('dotenv');
env.config();
const mongoose = require('mongoose');

// Set PORT to 5000 if undefined
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database is Connected");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
})

