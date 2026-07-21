const whilelist = [
    "http://localhost:5173",
    "https://cstj8wfr-5173.asse.devtunnels.ms/"
]

const corsConfig = {
    origin: (origin, callback)=>{
        if(!origin || whitelist.includes(origin)){
            callback(null, true)
        }else{
            callback(new Error("Block by CORS"))
        }
    },
    credentials: true
}