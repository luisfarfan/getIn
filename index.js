/**
 * El siguiente ejercicio es crear una función que implemente la siguiente lógica.
 * const a = getIn(obj, path, defaultValue)
 * Ejemplo:
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 * getIn(object, 'a.b.c', 'default');
 * // => 'default'

 * var object2 = {a: { b: { c: 3 } } };
 * getIn(object2, 'a.b.c', 5);
 * // => 3
 * getIn(object2, 'a.b.d', 5) ;
 * // => 5

 * Happy Conding,
 * */

var object = {'a': {'b': {'c': 3}}};

const getIn = (object, path, defaultValue) => {
    if (typeof object !== 'object' || typeof path !== 'string') {
        return defaultValue;
    }
    const pathSplited = path.split('.');
    const keyToFind = pathSplited.length ? pathSplited[0] : path;
    if (pathSplited.length === 0 || pathSplited.length === 1) {
        return object[keyToFind] ? object[keyToFind] : defaultValue;
    } else {
        for (let i = 0; i <= pathSplited.length; i++) {
            if (i === pathSplited.length - 1) {

            }
        }
    }
}