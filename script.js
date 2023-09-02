var wordSearched = document.getElementById("wordSearched");
var button = document.getElementById("submit");
var words = document.getElementById("words");
var defin = document.getElementById("defin");
var result ="";

const dictionary= (word)=>{
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+word).then((response)=>{ 
        return response.json()
    }).then((response)=>{ 
        words.innerHTML = word;
        result=response[0].meanings[0].partOfSpeech+"<br>"+response[0].phonetics[0].text+"<br>";       
        
        for(let i=0;i<response[0].meanings.length;i++){
            result = result + response[0].meanings[i].definitions[0].definition+"<br>";
        }
        defin.innerHTML = result;                
    })
};
button.addEventListener("click",(e)=>{
    //this will not let the page to reload and let the changes disappear
    e.preventDefault();
    dictionary(wordSearched.value);
});
