const API_KEY='0c8d8671e3cf4d92ad79b83be17787d7';
const NEWS_SOURCE = 'the-irish-times';
const headers = new Headers();
//headers.append( 'Access-Control-Allow-Origin', '*');

const init = { method: 'GET', headers: headers, mode:'no-cors', cache:'default'};
const url = `http://newsapi.org/v2/top-headlines?sources=${NEWS_SOURCE}&apiKey=${API_KEY}`;

//Aynchronous Function
async function getDataAsync(){
    try{
        
        const response = await fetch(url, {mode: 'no-cors'});
        const json = await response.json();
        console.log(json.articles);
        //displayData(json);

    }
    catch (err){
        console.log(err);
    }
}
getDataAsync();
console.log('Has getDataAsync() finished yet?')