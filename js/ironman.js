// ┌────────────────────────────────────────────────────────────┐ \\
// │ 			IronManJS - Javascript Object Manipulation 		│ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Arivazhagan (http://arivazhagan.github.io/) 		│ \\
// └────────────────────────────────────────────────────────────

// The purpose of this JS is for Learn and share the best practices of Object Manipulation in Javascript //
var util = {};

util.isTypeOf = function(_param) {
    try{
    var isType = typeof _param;
        switch(isType){
        case 'number':
            return isType;
        case 'string':
            return isType;
        case 'object':
            return _param.constructor.name;
        case 'undefined':
            return isType;
        default:
          throw "Execption";
            break;
        }
    }
    catch(exe){
        return 'Execption';
    }
};

util.objManipulation = function (_obj){

};
