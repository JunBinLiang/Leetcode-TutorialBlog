import React from "react";
import "./problems.css";

const Problem = () => {
  return (
    <div>
      <h1 style={{ alignContent: "center" }}>Two Sum</h1>
      <article>
        <h5>Statements</h5>
        <p className="paragraph">
          Given an array of integers nums and an integer target, return indices
          of the two numbers such that they add up to target.
          <br /> You may assume that each <b>Input:</b>would have exactly one
          solution, and you may not use the same element twice. <br /> You can
          return the answer <b>in order </b>
        </p>
      </article>
      <article>
        <h5>Example 1:</h5>
        <p className="paragraph">
          <b>Input:</b> nums = [2,7,11,15], target = 9 <br />
          <b>Output: </b> [0,1] <br />
          <b>Output: </b> Because nums[0] + nums[1] == 9, we return [0, 1].
        </p>
      </article>
      <article>
        <h5>Example 2:</h5>
        <p className="paragraph">
          <b>Input:</b> nums = [3,2,4], target = 6<br />
          <b>Output: </b> [1,2] <br />
        </p>
      </article>
      <article>
        <h5>Example 3:</h5>
        <p className="paragraph">
          <b>Input:</b> nums = [3,3], target = 6<br />
          <b>Output: </b> [0,1]
          <br />
        </p>
      </article>
      <article>
        <h5>Input Format:</h5>
        <p className="paragraph">
          For example 1, your input should be : 4 2 7 11 15 9 <br />
          The first numberstands for the lenght of the array <br />
          The next n numbers are the elements of the array <br />
          The last number is the target
          <br />
        </p>
      </article>
    </div>
  );
};
export default Problem;
