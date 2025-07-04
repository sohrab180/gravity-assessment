import React, { useState } from 'react';

function LongestIncreasingSubsequence() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const calculateLIS = () => {
        const nums = input.split(',').map(num => parseInt(num.trim()));
        if (nums.some(isNaN)) {
            alert('❌ Please enter valid numbers separated by commas!');
            return;
        }

        const dp = new Array(nums.length).fill(1);
        let maxLen = 1;

        for (let i = 1; i < nums.length; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            maxLen = Math.max(maxLen, dp[i]);
        }

        setResult(maxLen);
    };

    return (
        <div className="dsa-card">
            <h2 className="problem-title">📈 Longest Increasing Subsequence</h2>
            <p className="description">
                Enter a sequence of numbers, and find the length of its longest increasing subsequence.
            </p>
            <div className="input-group">
                <input
                    type="text"
                    className="input-field"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g., 10, 9, 2, 5, 3, 7, 101, 18"
                />
                <button className="calculate-btn" onClick={calculateLIS}>
                    🔍 Calculate
                </button>
            </div>
            {result !== null && (
                <div className="result-box">
                    <h3>✅ Result:</h3>
                    <p>The length of the longest increasing subsequence is: <strong>{result}</strong></p>
                </div>
            )}
        </div>
    );
}

export default LongestIncreasingSubsequence;
