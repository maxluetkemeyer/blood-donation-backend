export const decrypt = (req, res, next) => {
    // TODO: Decryption algorithm
    const decrypted = req.body;

    try {
        req.body = JSON.parse(decrypted);
    } catch (error) {
        res.send("Invalid");
        return;
    }

    next();
};
