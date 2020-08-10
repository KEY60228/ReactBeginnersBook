/*
{
  const greet = (friend: 'serval' | 'caracal' | 'cheetah') => {
    switch (friend) {
      case 'serval':
        return 'Hello, Serval!';
      case 'caracal':
        return 'Hello, Caracal!';
      // case 'cheetah':
      //   return 'Hello, Cheetah!';
      default:
        const check: never = friend;
    }
  };
  
  console.log(greet('serval'));
}
*/
/*
const arr = [1, 2, 3];
console.log(arr);
arr[0] = 7;
console.log(arr);

const obj = {a: 1, b: 2};
console.log(obj.b);
obj.b = 5;
console.log(obj.b);
console.log(obj);
*/
{
    var add = function (n, m) { return n + m; };
    console.log(add(1, 3));
}
{
    function subtr(n, m) { return n - m; }
    console.log(subtr(5, 4));
}
{
    var hello = function () { console.log('Hello!'); };
    hello();
}
