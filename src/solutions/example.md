# Solution

#### Approach 1: Brute Force

The brute force approach is simple. Loop through each element xx and find if there is another value that equals to _target - xtarget−x_.

##### Complexity Analysis

- Time complexity : _O(n^2)_. For each element, we try to find its complement by looping through the rest of array which takes _O(n)_ time. Therefore, the time complexity is _O(n^2)_.

- Space complexity : _O(1)_.

##### Java

```java
public int[] twoSum(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) {
        for (int j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return new int[] { i, j };
            }
        }
    }
    throw new IllegalArgumentException("No two sum solution");
}
```
