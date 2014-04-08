var isArray = [1,2,3,4,5];
var isNull;
var isDate = new Date(06/04/2014);

test( "isTypeOf Number", function() {
    ok( util.isTypeOf(4) == "number", "Passed!" );
});

test( "isTypeOf String", function() {
  ok( util.isTypeOf('4') == "string", "Passed!" );
});

test( "isTypeOf Array", function() {
  ok( util.isTypeOf(isArray) == "Array", "Passed!" );
});

test( "isTypeOf undefined/Null", function() {
  ok( util.isTypeOf() == "undefined", "Passed!" );
});

test( "isTypeOf Date", function() {
  ok( util.isTypeOf(isDate) == "Date", "Passed!" );
});

test( "Execption Handling", function() {
  ok( util.isTypeOf($) == "Execption", "Passed!" );
});