# algorithms-data-structures

# Big O Notation in Programming

Big O Notation is a way to describe the efficiency of an algorithm. It helps us understand how an algorithm's runtime or space requirements grow as the size of the input increases. It focuses on **worst-case scenarios** and is crucial for comparing the scalability of algorithms.

---

## Why Big O Matters?

When working with algorithms, we need to:
- **Predict performance** as the input size grows.
- **Choose the most efficient solution** for a problem.
- **Avoid bottlenecks** in code execution.

---

## Common Big O Notations

Here's a summary of common Big O complexities:

| Notation         | Name             | Description                                                                 |
|------------------|------------------|-----------------------------------------------------------------------------|
| **O(1)**         | Constant Time    | The runtime is the same regardless of input size.                          |
| **O(log n)**     | Logarithmic Time | The runtime grows logarithmically with input size.                         |
| **O(n)**         | Linear Time      | The runtime grows proportionally to the input size.                        |
| **O(n log n)**   | Log-Linear Time  | The runtime grows faster than linear but slower than quadratic.            |
| **O(n²)**        | Quadratic Time   | The runtime grows proportionally to the square of the input size.          |
| **O(2ⁿ)**        | Exponential Time | The runtime doubles with each additional input.                            |
| **O(n!)**        | Factorial Time   | The runtime grows factorially as the input size increases.                 |

---

## Examples in JavaScript/TypeScript

### **O(1) - Constant Time**

The operation takes the same amount of time, regardless of input size.

```ts
function getFirstElement(arr: number[]): number {
  return arr[0]; // Always takes the same time
}

