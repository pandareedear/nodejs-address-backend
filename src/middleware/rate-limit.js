const { rateLimit } = require("express-rate-limit")

module.exports = rateLimit({
        windowMs: 60 * 1000, 
        limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
        message: { message: "Too many request from this IP"}
    })


