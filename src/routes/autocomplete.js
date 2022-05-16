import { getGoogleSuggestions } from '../controllers/getGoogleSuggestions.js';

export async function getAutocomplete(req, res, next) {
    const query = req.query.q;
    if (!query) {
        res.send({
            success: false,
            message: 'The search query is empty.',
        });
        return;
    }

    const results = await getGoogleSuggestions(query);
    res.send({
        success: true,
        data: results,
    });
    next();
}
