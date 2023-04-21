const type=require('./dbcharcters.js')

function rand(x){
    return(Math.floor(Math.random()*x))
}

function typing(x){

var temp=""

if(x=="basic"){
temp=type.basic[rand(type.basic.length)]
}

else if(x=="common_words"){
    temp=type.common_words[rand(type.common_words.length)]

}

else if(x=="advance_words"){
    temp=type.advance_words[rand(type.advance_words.length)]

}

else if(x=="simple_sentences"){
    temp=type.simple_sentences[rand(type.simple_sentences.length)]

}

else if(x=="advance_sentences"){
    temp=type.advance_sentences[rand(type.advance_sentences.length)]

}

else if(x=="essays"){
    temp=type.essays[rand(type.essays.length)]

}

else{
    return "bad connection or configuration"
}

return temp
}

module.exports={typing};