# Welcome to Algorithm Academy

It started before the summer of 2016.  A couple friends were experiencing difficulty interviewing and
one was soon to interview for a senior dev role at Uber, and another as a developer at facebook and 
were trying to figure out why.

After end-to-end mock interviews it appeared one fundamental issue was their comfort working the 
basic data structures (Linked Lists, Arrays, Stacks, Trees, Graphs, etc).  During interviews they 
would spend a lot of time recalling and working out how to traverse a LinkedList rather than 
spending time reversing it, and so on.  And this seems to be true of the vast majority of people 
I worked with and continue to work with.Many of the algorithm/toy-problem style questions assume 
one is familiar with the data structures, to begin with.

I started http://algoacad.me as a way to personally mentor people one-on-one through the interview
process and http://bootcamped.com to mentor groups.  The process is the same, and the material is
the same.  The Data Structures portion contained in this repo is how I walk people through problem
solving and detect their weaknesses and help overcome them.  It's not designed for the primary 
purpose of learning (alghough it has that characteristic), it is designed so I can figure out what
parts of the technical interview need to be fixed.  As such it might be more thorough than you are
used to.

I will continue to mentor people and use the material here.  I initially wanted it to be open source
but wanted to test it first.

I have decided to open source the _foundational exercises_ portion of the program in these files
initially, and will work to open source the homework and mentoring part of it soon.

As I'm curating files from the private different repos, some parts might be missing.  I'll track them
down and fix it.

The Algorithms portion of the program is broken into two parts:

1) **Foundations of Data Structures**.  This covers topics like arrays, bit manipulation,
 recursion, graphs, searching, sorting, etc.
   
2) **Algorithm Techniques**.  This covers algorithm techniques like brute force,
 dynamic programming, backtracking, divide and conquer, etc.
   
This was designed to be paired with mentoring, not necessary as a self-learning machanism.  Once I 
complete pushing my material here, I will then update a new self-paced learning system to my website
http://algoacad.me .  

At first I'll provide Part 1 and once I've cleaned up the Part 2 material I'll publish
it also.

When I mentor people, I typically follow a schedule that looks resembles the following (for Part 1):

---
```
Week 1
    Day 1:
        * Introductions
        * Expectations
        * Algorithms
        * Complexity
        * Looping & Array Warmpups

    Day 2:
        * Arrays & Dynamic Arrays I
        * Dyanamic Arrays II

    Day 3:
        * Review
        * Abstractions Module
        * Exceptions & Errors Module
        * Dynamic Array III

    Day 4:
        * Review
        * Linked List Warmup
        * Linked Lists I
        * Linked Lists II

    Day 5: Review
        * Review
        * Doubly Linked List Warmp
        * Linked Lists III
        * Linked Lists IV - Challenges


Week 2
    Day 1:
        * Review
        * Stacks
        * Queues

    Day 2:
        * Review
        * Stacks & Queues Challenges

    Day 3:
        * Review
        * Sets I
        * Sets II

    Day 4:
        * Review
        * Hash Tables I

    Day 5:
        * Review
        * Hash Tables II

Week 3
    Day 1:
        * Review
        * Recursion I

    Day 2:
        * Review
        * Recursion II

    Day 3:
        * Review
        * Sorting I

    Day 4:
        * Review
        * Sorting II

    Day 5:
        * Review
        * Searching I

Week 4
    Day 1:
        * Review
        * Trees

    Day 2:
        * Review
        * Binary Search Trees I

    Day 3:
        * Review
        * Binary Search Trees II

    Day 4:
        * Review
        * Graphs I

    Day 5:
        * Review
        * Graphs II
```

Along with the course material I also use various related interview style questions
that directly relate the the topic at hand.  Soon I will add the selection
to this repo that I used during the program along with my solutions.  There are a lot
details tested for in here, and the premise was that when someone is able to answer 
them then during an interview they will not spend too much time trying to remember 
how things work, and can instead focus on the question being asked.

<br />
<br />

The progression assumes that comfort with arrays will lead to comfort with Dynamic
Arrays because of similar coding dynamics, and the comfort with dynamic arrays and Linked
Lists will lead to comfort with HashTables because either can be used as the storage
mechanism, and so on.  

We often see an example implementation and begin to think that it's the way a Stack, 
Queue, or something should be.  We rarely realize we can implement it anyway we wish
as long as the requirements of the data structure or algorithm are met.  In that sense,
interview questions are very similar to the technical requirements we might receive on 
the job.  And so I continue to structure this material in such a way that forces everyone
to both treat the prompts like requirements, but also requires everyone to combine
the various data structures and algorithms to achieve the intended result.

My audience was mostly Javascript programmers but I also mentored programmers with a Java,
Python, and C# background and everything worked fine.  The only difference is the automated
tests and reference code use Javascript.

I open source this because my mentoring is not about algorithms, anyway.  As someone who has 
overseen 200 person developer teams, CEO'd and CTO'd, I have a knack for what we're looking 
for when hiring.  When I mentor its more of a troubleshooting exercise to figure out where in 
the process from writing the resume, to salary negotiation, the problem is and fix it.  Everyone 
grinded LeetCode but some still had struggles there or with systems design.  This is the component
that focused on algorithms.

<br />
<br />

I hope you find this to be helpful during your preparation for interviews.


[My LinkedIn](https://linkedin.com/in/bullockshawn)