const express = require("express");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(`${__dirname}/public`));

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
    res.status(err.status || 500);
    res.send({ message: err.message, error: {} });
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`)); // eslint-disable-line
