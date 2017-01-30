describe('Fizzbuzz', function(){

  it("returns 'Fizz' when passed numbers divisible by 3", function() {
    expect(Fizzbuzz(3)).toEqual('Fizz');
  });

  it("returns 'Buzz' when passed numbers divisible by 5", function() {
    expect(Fizzbuzz(5)).toEqual('Buzz');
  });

  it("returns 'FizzBuzz' when passed numbers divisible by 15", function() {
    expect(Fizzbuzz(15)).toEqual('FizzBuzz');
  });

  it("returns a number not divisible by either 3 or 5", function() {
    expect(Fizzbuzz(13)).toEqual(13);
  });
});
