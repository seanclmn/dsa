/**
 You are given an array prices where prices[i] is the price of a given stock on the ith day.
 You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let left = 0, right = 1

    while(right < prices.length){
        if(prices[right] > prices[left]){
            maxProfit = Math.max(maxProfit, prices[right]-prices[left])
        }else {
            left = right
        }
        right++
    }

    return maxProfit
};
