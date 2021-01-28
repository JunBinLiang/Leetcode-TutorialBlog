import p1 from "./LeetCode/1.md";
import p1cpp from "./LeetCode/1cpp.md";
import sta1 from "./problems/1.md";
import test1 from "./test/test1.md";
import submit1 from "./submit/submit1.md";
import input1p1 from "./input/1.1.md";
import input1p2 from "./input/1.2.md";
import input1p3 from "./input/1.3.md";

import submit2 from "./submit/submit2.md";
import input2p1 from "./input/2.1.md";
import input2p2 from "./input/2.2.md";
import input2p3 from "./input/2.3.md";
import input2p4 from "./input/2.4.md";
import input2p5 from "./input/2.5.md";
import input2p6 from "./input/2.6.md";
import sta2 from "./problems/2.md";
import p2 from "./LeetCode/2.md";
import test2 from "./test/test2.md";

import submit3 from "./submit/submit3.md";
import input3p1 from "./input/3.1.md";
import input3p2 from "./input/3.2.md";
import input3p3 from "./input/3.3.md";
import input3p4 from "./input/3.4.md";
import input3p5 from "./input/3.5.md";
import input3p6 from "./input/3.6.md";
import sta3 from "./problems/3.md";
import p3 from "./LeetCode/3.md";
import test3 from "./test/test3.md";
import solution1 from "./solutions/example.md";
let leetcodes = [[p1, p1cpp], [p2], [p3]];
let statements = [sta1, sta2, sta3];
let names = ["Two Sum", "Present From 66", "Eating Chocolate"];
let Test = [test1, test2, test3];
let Submit = [submit1, submit2, submit3];
let testcases = [3, 6, 6];
let inputs = [
  [input1p1, input1p2, input1p3],
  [input2p1, input2p2, input2p3, input2p4, input2p5, input2p6],
  [input3p1, input3p2, input3p3, input3p4, input3p5, input3p6],
];
let category = [[0], [0], [0], [0], [0], [1, 2]];
let difficulty = [0, 1, 2];
let stars = ["\u2B50", "\u2B50\u2B50", "\u2B50\u2B50\u2B50"];
let solution = [solution1, solution1, solution1];
let inputTypes = [[0,1],[1,1,1,1],[1,1]];


//let parsers=[arrayParser,isNumber,isString];//different parsers

export {
  leetcodes,
  statements,
  names,
  Test,
  Submit,
  testcases,
  inputs,
  category,
  difficulty,
  stars,
  solution,
  inputTypes
};
