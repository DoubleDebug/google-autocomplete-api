export function filterResults(query, results) {
    const regex = new RegExp(query, 'i');
    
    // remove all results that don't contain the search query
    const filtered = results.filter((r) => regex.test(r));
    
    // remove all duplicates
    return Array.from(new Set(filtered));
}
