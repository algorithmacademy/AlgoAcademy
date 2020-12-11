# Recursion &mdash; Introduction


###### Overview

A recursive function is defined as a function that calls itself.  Any iterative solution can be converted into a
 recursive one.  Sometimes recursion makes solving problems easier than with iterations.  They don't come naturally,
 however, like loops usually do.  
 
Recursion is useful when the computation or action is one that solves a small piece of the overall problem, and
 repeats that same computation or action until the problem is solved.  Recursive functions need a way to know
 when the computation is complete.  To do so, all recursive functions must have a `base case`.  A base case is
 simply a condition that eventually executes and signals the end of the computation (or task).

A general outline of a recursive function looks like this:


```
function(...)
  1. Base Case
  2. Work towards base case
  3. Call function
  4. Return result (if applicable)
```


There are two main kinds of recursion approaches.  

 1. Pure Recursion
 2. Using a Helper Function
 
 
##### Pure Recursion

Pure recursion is when a recursive function advances by calling itself.  Suppose we want to count the number of items 
in an array.  Using the iterative approach, we might write:


```javascript 1.8
function getLength(input) {
  let length = 0;
  for (let i=0; i<input.length; i++) {
    length += 1;
  }
  return length;
}
```


Using pure recursion, we might write this function using the code below.  NOTE: In Javascript, Array.prototype.slice(1)
 removes the first element and returns the rest of the array.  In this way, we get a behavior similar to iterating to
 the next element of the array using iteration.


```javascript 1.8
function getLengthPure(input) {
  if (!input || !input.length) {
    return 0;
  }
  return 1 + getLengthPure(input.slice(1));
}
```

In the example above:

 1. `if` condition is the Base Case
 2. `(input.slice(1))` works towards the base case
 3. `getLengthPure(...)` is the recursive call
 4. `return 1 + ...` returns the answer

The `return 0` statement terminates the recursion by returning a base value withou calling itself again.talk about it


##### Helper Function Approach

We can also achieve recursion by creating a helper function.  This helper function may be an inner function or another
 function somewhere else.  Below is an example:
 

```javascript 1.8
function countFrom1ToN(n) {
  n = Math.abs(n); // Make sure n is positive
  
  function countFrom1ToNRecurse(n) {
    if (!n) {
      return 1;
    }
    
    countFrom1ToNRecurse(n-1);
    console.log(n);
  }

  countFrom1ToNRecurse(n);
}
```

In this case, the format of the recursive call is the same, but the parent function does some preliminary work first
 and may even create some closures to be used by the helper function.
 

##### Callstack

A stack is a First-In-Last-Out (FILO) structure.  The CPU maintains a special stack that tracks which function call
 is active and which one to return back to when its done.  This is called a Call Stack.  The most current function
 is at the top of the stack, and the programs entry point (the first function called) is at the bottom of the call
 stack.

Each function call takes up some space on the call stack.  At the very least, each call will have the following
 information (for more information, Google for _Activation Record_):
 
```text
Function: Return Address
          Parameters
          ...
```

Each time a recursive function calls itself the new function call will have different data than the previous.  When
 the base case is reached, it begins _unwinding_ the call stack which begins the process of working towards the goal,
 vs working toward the base case.
 
Suppose the following recursive function:

```javascript 1.8
  function log_1Ton(n) {
    if (!n) {
      return 0;
    }
    else {
      log_1Ton(n - 1);
      console.log(n);
    }
  }
```

Let us observe the call stack using the number 5 as n:

```text
Action                     Stack Action
------                     ------------
function(5)                push 5 Entry
  function(n-1)            push 4
    function(n-1)          push 3
      function(n-1)        push 2
        function(n-1)      push 1
          function(n-1)    push 0 Base Case
            return         pop 0 
          log(1)           1
          return           pop 1
        log(2)             2
        return             pop 2
      log(3)               3
      return               pop 3
    log(4)                 4
    return                 pop 4
  log(5)                   5
  return                   pop 5
...    
```

As you can see, each function call keeps the value of its arguments and works with that value in the order of the
 call stack.  What if we wanted to log n to 1 (in reverse order)?  We would make a small modification to the 
 above recursive function and log to the console before the recursive call:
 
```javascript 1.8
  function log_1Ton(n) {
    if (!n) {
      return 0;
    }
    else {
      console.log(n);
      log_1Ton(n - 1);
    }
  }
```

```text
Action                     Stack Action
------                     ------------
function(5)                push 5 Entry
  log(5)                   5
  function(n-1)            push 4
    log(4)                 4
    function(n-1)          push 3
      log(3)               3
      function(n-1)        push 2
        log(2)             2
        function(n-1)      push 1
          log(1)           1
          function(n-1)    push 0 Base Case
            return         pop 0
          return           pop 1
        return             pop 2
      return               pop 3
    return                 pop 4
  return                   pop 5
...    
```

Lets walk through the call stack of the first example using the following array: [1, 2, 3]:

```javascript 1.8
function getLengthPure(input) {
  if (!input || !input.length) {
    return 0;
  }
  return 1 + getLengthPure(input.slice(1));
}
```

```text
Action                     Stack Action          Return Variable
------                     ------------          ---------------
function([1,2,3])          push [1,2,3]
  function([2,3])          push [2,3]
    function([3])          push [3]
      function([])         push [] Base Case
        return 0           pop []                0
      1 + 0                [3]              
      return               pop [3]               1
    1 + 1                  [2,3]
    return                 pop [2,3]             2
  1 + 2                    [1,2,3]
  return                   pop [1,2,3]           3
...   
```

##### Variations

Sometimes it might be the case that we need an accumulation variable.  We can pass that in also to be used with each
 unit of computation.  Imagine we want to calculate the sum of all values in an array:
 
```javascript 1.8
function calculateSum(input, n, sum) {
  if (n < 0) {
    return sum;
  }
  
  sum += input[n];
  return calculateSum(input, n-1, sum);
}
```


We can eliminate the `sum` argument thus:

```javascript 1.8
function calculateSum(input, n) {
  if (n < 0) {
    return 0;
  }
  
  return input[n] + calculateSum(input, n-1);
}
```

##### If/Else Decisions

Suppose we want to write a function that calculates only the sum of all even numbers in an array.  We'd
 need to have a way to recurse with if/else conditions.  This is made really easy with the helper function
 approach  The following code demonstrates:
 
```javascript 1.8
function calculateEvens(input) {
  let sum = 0;
  
  function calculateEvensRecurse(input) {
    if (!input || !input.length) {
      return 0;
    }
    
    if (input[0] % 2 == 0) {
      sum += input[0];
    }
    
    calculateEvensRecurse(input.slice(1));
  }
  
  calculateEvensRecurse(input);
  return sum;
}
```

In this case, we didn't even bother to return a value.  We just modified a closure and eventually returned
 it.
 

###### Edge Cases

 * Multiple base cases
 * Available memory (too many calls can lead to out or memory errors)

###### NOTES

 * Solve the exercises using the Helper Function approach
 * Visualize the call stack if needed
 * Don't expect perfection.  It is hard to write a recursive function at first
    

###### This Exercise


Open [recursion-L0.js](ES6/src/recursion-L0.js) and follow the prompts below to complete the exercise.  Use 
 the [testRunner0.html](ES6/testRunner0.html) file to run the tests and view your progress.


###### Objective

Practice the following exercises.  You can try this with the Helper Function technique in the beginning if it
makes things easier.  After doing all these, and Level 1, you can try again using Pure Recursion.

1. Write a recursive function to count and log 1 to N.
2. Write a recursive function to count and log N to 1.
3. Write a recursive function to count and log X to Y inclusive.  Assume X is always less than Y.
4. Write a recursive function to calculate the length of an array.  Return the value.
5. Write a recursive function to calculate the sum of an array
6. Write a recursive function to calculate the average of the values in an array
7. Write a recursive function to return the sum of all evens in an array
8. Write a recursive function to compute the number of digits in an integer
9. Write a recursive function to return whether the integer contains the number K
10. Write a recursive function to calculate the power of a number (exponent, number)

###### BONUS

* After solving these using the Helper Function technique, and after solving L1,  try
 again using the Pure Recursion technique.

###### Critical Whiteboard Skills

 * Know your inputs
 * Know your outputs
 * Know your base case
 * Every recursive decision must work towards the base case or it won't solve the problem
 * Figure out what the repeating unit of work is