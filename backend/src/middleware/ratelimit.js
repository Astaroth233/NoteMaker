import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try { // per-IP rate limiting
        const { success } = await rateLimit.limit("my-limit-key");

        if (!success) {
            return res
                .status(429)
                .json({ message: "Too many requests, please try again later" });
        }

        next(); // proceed if allowed
    } catch (err) {
        console.error("Rate limiter error:", err);
        next(); // allow request to continue if limiter fails
    }
};

export default rateLimiter;