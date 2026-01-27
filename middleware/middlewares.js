//Global Err Handling Middleware 
export const globalErr = (err, req, res, next) => {
    res.status(err.status || 500).json(`❌ Error: ${err.message}`);
};

