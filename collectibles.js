let fs = require("fs");
function importar (marca){
    switch (marca){
        case "Hot Toys":
            array = JSON.parse(fs.readFileSync(__dirname + "/datos/figuras1.json"));
            return array;
        break;
        case "Bandai":
            array = JSON.parse(fs.readFileSync(__dirname + "/datos/figuras2.json"));
            return array;
        break;
        case "Star Wars":
            array = JSON.parse(fs.readFileSync(__dirname + "/datos/figuras3.json"));
            return array;
        break;
        default:
            return "No tenemos esa marca."
    }
}

module.exports = importar