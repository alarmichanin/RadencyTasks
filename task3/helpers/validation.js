export const validation = (schema) => async (req, res, next) => {
    const body = req.body;

    try {
        await schema.validate(body);
        next();
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}

// export const validationEmpty = () => (req, res, next) => {
//     const body = req.body;

//     try {
//         if (body || Object.keys(body).length !== 0) throw error;
//         next();
//         return next();
//     } catch (error) {
//         return res.status(449).json(error);
//     }
// }