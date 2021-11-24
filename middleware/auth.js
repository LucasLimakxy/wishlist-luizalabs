const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config().parsed;

module.exports = (req, res, next) => {
    const auth_header = req.headers.authorization;

    if (!auth_header) {
        return res.status(401).json('No token provide.');
    }

    const parts = auth_header.split(' ');

    if (!parts.lenght === 2) {
        return res.status(401).json('Token error.');
    }

    const [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json('Token unformatted.');
    }

    jwt.verify(token, dotenv.SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json('Token invalid.');
    });

    return next();
}