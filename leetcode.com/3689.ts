/**
The actual answer to this problem is k * (max(nums) - min(nums)). That's it. One pass through the array, one subtraction, one multiplication.
Every "feature" in the problem statement — choose exactly k subarrays, overlapping allowed, repetition allowed, sum the values — exists to disguise that fact.
Once you notice that repetition is allowed and picks are independent, the entire problem collapses to "find the subarray with the biggest max-min gap, and pick it k times."
And the biggest possible max-min gap of any subarray is just max(nums) - min(nums), achieved by the whole array.
I understand the lesson being taught: don't get bulldozed by problem statements that sound harder than they are.
That's a real skill.
But dressing up a one-liner in language designed to nudge solvers toward dynamic programming isn't testing analytical ability — it's testing whether you've seen the trick before.
Engineers who've done a hundred of these will pattern-match instantly; engineers who haven't will burn an hour building a DP solution that works but is wildly over-engineered for the actual ask.

A better version of this problem would just be: "Given an array, return k * (max - min). Prove that no choice of k subarrays can do better."
That tests the same insight without rewarding prior exposure to the wrapper.
*/

/** https://leetcode.com/problems/maximum-total-subarray-value-i/description/?envType=daily-question&envId=2026-06-09
You are given an integer array nums of length n and an integer k.
You need to choose exactly k non-empty subarrays nums[l..r] of nums. Subarrays may overlap, and the exact same subarray (same l and r) can be chosen more than once.
The value of a subarray nums[l..r] is defined as: max(nums[l..r]) - min(nums[l..r]).
The total value is the sum of the values of all chosen subarrays.
Return the maximum possible total value you can achieve.

Example 1:
Input: nums = [1,3,2], k = 2
Output: 4
Explanation:
One optimal approach is:
Choose nums[0..1] = [1, 3]. The maximum is 3 and the minimum is 1, giving a value of 3 - 1 = 2.
Choose nums[0..2] = [1, 3, 2]. The maximum is still 3 and the minimum is still 1, so the value is also 3 - 1 = 2.
Adding these gives 2 + 2 = 4.

Example 2:
Input: nums = [4,2,5,1], k = 3
Output: 12
Explanation:
One optimal approach is:
Choose nums[0..3] = [4, 2, 5, 1]. The maximum is 5 and the minimum is 1, giving a value of 5 - 1 = 4.
Choose nums[0..3] = [4, 2, 5, 1]. The maximum is 5 and the minimum is 1, so the value is also 4.
Choose nums[2..3] = [5, 1]. The maximum is 5 and the minimum is 1, so the value is again 4.
Adding these gives 4 + 4 + 4 = 12.

Constraints:
1 <= n == nums.length <= 5 * 10​​​​​​​4
0 <= nums[i] <= 109
1 <= k <= 105
*/

function maxTotalValue(nums: number[], k: number): number {
  return k * (Math.max(...nums) - Math.min(...nums));
};
