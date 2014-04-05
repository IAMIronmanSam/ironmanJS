var isArray = [1,2,3,4,5];
var isNull;

test( "Typeof Number", function() {
    ok( util.TypeOf(4) == "number", "Passed!" );
});

test( "Typeof String", function() {
  ok( util.TypeOf('4') == "string", "Passed!" );
});

test( "Typeof Array", function() {
  ok( util.TypeOf(isArray) == "Array", "Passed!" );
});

test( "Typeof undefined/Null", function() {
  ok( util.TypeOf() == "undefined", "Passed!" );
});

test( "Typeof float", function() {
  ok( util.float(0.1) == "float", "Passed!" );
});