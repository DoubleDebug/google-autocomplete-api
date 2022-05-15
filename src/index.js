import { getGoogleSuggestions } from './getGoogleSuggestions.js';

const query = 'how to';
getGoogleSuggestions(query).then((results) => console.log(results));
