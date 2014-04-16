// ┌────────────────────────────────────────────────────────────┐ \\
// │             IronManJS - Javascript Object Manipulation     │\\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Arivazhagan (http://arivazhagan.github.io/)         │ \\
// └────────────────────────────────────────────────────────────

// The purpose of this JS is for Learn and share the best practices of Object Manipulation in Javascript //

function isTypeOf (_param) {
    try {
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
        }
    }
    catch(exception){
        return 'Execption';
    }
}

function getElement (_parent,_child,_param){
    try{
        var isExist = $(_parent).length;
        if(isExist > 0){
            switch(_param){
                case 'all':
                    var _selectedElement = $(_parent+' *');
                    break;
                case 'find':
                    var _selectedElement = $(_parent).find(_child);
                    break;
            }
            if(_selectedElement.length !== 0){
                throw _selectedElement;
            }
            else{
                throw 'child element NOT exist. NO. of Child element:'+_selectedElement.length;
            }
        }
        else{
            throw 'parent element NOT exist';
        }
    }
    catch (exception){
        return exception;
    }
}
