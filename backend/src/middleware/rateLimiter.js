import rateLimit from "../config/upstash.js";

const rateLimiter = async(req, res, next) => {
    try {
        const {success} = await rateLimit.limit('my-rate-limit-key'); // use a unique key similer 

        if(!success){
            return res.status(429).json({message: 'Too many requests, please try again later.'});
        } 
        next(); // allow the request to continue
    } catch (error) {
        console.error('Rate limiting error:', error);
        next(error);
        return res.status(500).json({message: 'Internal Server Error'});      
    }
   
    
}

export default rateLimiter;