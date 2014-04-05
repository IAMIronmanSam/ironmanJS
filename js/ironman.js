// ┌────────────────────────────────────────────────────────────┐ \\
// │ 			IronManJS - Javascript Object Manipulation 		│ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Arivazhagan (http://arivazhagan.github.io/) 		│ \\
// └────────────────────────────────────────────────────────────

// The purpose of this JS is for Learn and share the best practices of Object Manipulation in Javascript //
var util = {};
util.TypeOf = function(_param) {
    var isType = typeof _param;
    switch(isType){
    case 'number':
        return isType;
    case 'string':
        return isType;
    default:
        util.float(_param);
        break;
    }
};

util.float = function(_param){
    if(_param%1)
    {
        return "float";
    }
};
