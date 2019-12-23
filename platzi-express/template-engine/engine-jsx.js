//Librería nativa File sistem
const fs = require('fs');

//finción para quitar settings y locals innecesarios (para este custom engine)
function getKeysFromOtions(options){
    const{settings, _locals, ...objectKeys} = options
    return Object.keys(objectKeys);
}

function getRenderedContent(content, options){
    const keys = getKeysFromOtions(options);
    let contentString = content.toString();

    for(let key of keys){
        contentString = contentString.replace(new RegExp(`\{${key}\}`, "gi"), 
        options[key])
    }
    return contentString;
}

function expressJsx(filePath, options, callback){
    fs.readFile(filePath, function(err, content){
        if(err)
            return callback(err);
        const rendered = getRenderedContent(content, options);
        return callback(null, rendered);
    });
}

module.exports = expressJsx;