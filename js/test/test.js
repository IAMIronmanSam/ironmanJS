test( "Typeof Number", function() {
    ok( util.TypeOf(4) == "number", "Passed!" );
});

test( "Typeof String", function() {
  ok( util.TypeOf('4') == "string", "Passed!" );
});

test( "Typeof float", function() {
  ok( util.float(0.1) == "float", "Passed!" );
});