const checkMillionDollarIdea = (req, res, next) => {
    const { weeklyRevenue , numWeeks } = req.body;
    if (!weeklyRevenue || !numWeeks) {
        return res.status(400).send();
    } else if (!Number.isInteger(numWeeks)|| !Number.isInteger(weeklyRevenue)) {
        return res.status(400).send();
    } else {
        if ( numWeeks * weeklyRevenue >= 1000000) {
            next();
        } else {
            return res.status(400).send()
        }
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
