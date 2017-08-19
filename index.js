const path = require("path");

module.exports = {
    up: (steps, filepath) => {
        if(typeof steps !== "number") {
            throw new TypeError("steps must be a number");
        }
        if(typeof filepath !== "string") {
            throw new TypeError("filepath must be a string");
        }
        filepath = path.normalize(filepath);
        return path.join("../".repeat(steps), filepath);
    }
};