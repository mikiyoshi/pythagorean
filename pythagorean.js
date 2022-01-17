const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 },
];
const result = input.map((obj) => {
  const z = Math.sqrt(obj.x ** 2 + obj.y ** 2);
  console.log(z);
  // same as
  // const z = Math.sqrt(Math.pow(obj.x, 2) + Math.pow(obj.y, 2));
  return z;
});
// result(input);
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

// 数値の配列を平方根の配列にマッピング
// 次のコードは、数値からなる配列を取り、それらの数値の平方根からなる新しい配列を生成します。
// let numbers = [1, 4, 9]
// let roots = numbers.map(function(num) {
//     return Math.sqrt(num)
// })
// roots の内容は [1, 2, 3] となる
// numbers の内容は [1, 4, 9] = [1 ** 2, 2 ** 2, 3 ** 2] のまま

// べき乗 (**)

// べき乗演算子 (**) は、1 つ目のオペランドを2 つ目オペランドの累乗にした結果を返します。これは Math.pow と同等ですが、オペランドとして BigInt も受け入れます。
// console.log(3 ** 4);　3 の 4 乗
// // expected output: 81

// console.log(10 ** -2);
// // expected output: 0.01

// console.log(2 ** 3 ** 2);
// // expected output: 512

// console.log((2 ** 3) ** 2);
// expected output: 64

// Math.pow()

// Math.pow() 関数は base を exponent 乗した値、つまり、baseexponent の値を返します。
// console.log(Math.pow(7, 3));
// // expected output: 343

// console.log(Math.pow(4, 0.5));
// // expected output: 2

// console.log(Math.pow(7, -2));
// // expected output: 0.02040816326530612
// //                  (1/49)

// console.log(Math.pow(-7, 0.5));
// expected output: NaN
