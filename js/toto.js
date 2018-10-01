

let url = ''

if(window.location.hostname == 'localhost' || window.location.hostname == '127.0.0.1'){
    url = 'http://127.0.0.1:8887'
}
// Replace ./data.json with your JSON feed
fetch(url + '/data/toto.json').then(response => {
    return response.json();
}).then(data => {
    // Work with JSON data here
    console.log(data);
}).catch(err => {
    // Do something for an error here
});