const whitelist = [
    "http://localhost:5173",
    "https://hanging-lbs-increased-toronto.trycloudflare.com",
    "http://localhost:3500",
];

const corsConfig = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
};

module.exports = corsConfig;   