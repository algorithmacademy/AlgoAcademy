# Linked Lists - Part 0 | Introduction & Warmups


###### Overview

A Linked List node is nothing more than a structure with some data and a reference
 to the next node.  It has no direct way to access any previous nodes.  That's what
 make it a favorite among interviewers.

There are 3 main concerns with Linked Lists:

```text
   HEAD  :   the first node
   TAIL  :   the last node
   MIDDLE:   everything else
```

If an add or remove operation can use the HEAD or TAIL then we can gain special
 optimizations by not having to find the previous node as we must with any middle
 operation.

For any middle node operation, we must locate the previous node first.

As such, we can visual a Linked List like this:
 
```text
 SECTION:            HEAD             MIDDLE           MIDDLE           TAIL
 STRUCTURE: NULL -> [Data, Next] --> [Data, Next] --> [Data, Next] --> [Data, Next] -> NULL
 META:                    (Prev)           (Prev)           (Prev)
 META (Index):       0                1                2                3
```

For any middle or tail node, there's always a previous node but there's no way to
 directly know what it is, it has to be _found_.


###### NOTES

  * DO NOTE COPY AND PASTE any code.  Complete each warmup by writing the necessary code
     (again if you already wrote it before).
 

###### This Exercise

Open [linkedLists-L0.js](ES6/src/linkedLists-L0.js) and follow the prompts below to complete the exercise.  Use 
 the [testRunner0.html](ES6/testRunner0.html) file to run the tests and view your progress.
 

###### Objective

Complete the following exercises:

 1. Write a function that creates and returns a new node.
 2. Write a function that creates and returns a new node.  If its the first node, then
     set first to it.
 3. Write a function that creates a new node and makes it the first node in the list.
 4. Write a function that creates a new node and makes it the second node in the list.
 5. Extend the previous functions to set the last as-necessary.
 6. Write a function that creates a new node and always appends it to the end.
 7. Write a function that removes the first node.
 8. Write a function that removes the second node in the list.
 9. Write a function that returns any node in the list. 
 10. Write a function that returns the previous node.
 11. Write a function that removes the last node in the list.
 12. Write a function that inserts a new node at any position in the list.
 13. Write a function that removes any node in the list.
 14. Write a function that creates an array of all the data in the list and returns the array.

