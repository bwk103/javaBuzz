describe('Fizzbuzz', function(){

  it("returns 'Fizz' when passed the number 3", function() {
    expect(Fizzbuzz(3)).toEqual('Fizz');
  });

  it("returns 'Buzz' when passed the number 5", function() {
    expect(Fizzbuzz(5)).toEqual('Buzz');
  });
});
