const accessMiddleware = (roles = []) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized access.' });
        }
        
        if (roles.includes(req.user.role)) {
            return next();
        }
        
        return res.status(403).json({ message: 'Forbidden: You do not have access to this resource.' });
    };
};

export default { accessMiddleware }