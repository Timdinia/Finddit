export default {
    search: function(searchTerm, seatchLimit, sortBy) {
        return fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${seatchLimit}`)
        .then (res => res.json())
        .then(data => data.data.children.map(data => data.data));
       
    }
}