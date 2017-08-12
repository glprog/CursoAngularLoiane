var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
var Pessoa = (function () {
    function Pessoa() {
    }
    return Pessoa;
}());
var p = new Pessoa();
var numeros = [1, 2, 3];
numeros.map(function (x) { return x * 2; });
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
