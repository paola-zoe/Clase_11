let figuras = require("./collectibles");

let hotToys = figuras("Hot Toys");
let bandai = figuras("Bandai");
let starWars = figuras("Star Wars");

let unifiedCollectibles = [...hotToys,...bandai,...starWars];

let collectibles ={
    figuras: unifiedCollectibles,
    listFigures : function (){
        this.figuras.forEach(function(figura){
            return console.log(figura);
        })
    },
    figuresByBrand : function (marcaDeLaFigura){
        var figurasFiltradas= this.figuras.filter(function(filtrar){
            return filtrar.marcaDeLaFigura === marcaDeLaFigura;
        })
        return console.log(figurasFiltradas);
    },
}
console.log("----------------Articulos Disponibles----------------");
console.log(collectibles.listFigures());
console.log("----------------Articulos Filtrados----------------");
console.log(collectibles.figuresByBrand("Bandai"));