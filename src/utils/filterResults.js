export function filterResults(query, results) {
    const regex = new RegExp(query, 'i');
    const filtered = results
        .filter((r) => r !== '') // filter empty results
        .filter((r) => regex.test(r)); // remove result metadata (movie info, book info, etc)
    return Array.from(new Set(filtered)); // remove duplicates
}
