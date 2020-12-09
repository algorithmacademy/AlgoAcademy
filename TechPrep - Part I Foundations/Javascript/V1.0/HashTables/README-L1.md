# Hash Tables &mdash; Part I


###### Overview

Hash Tables are extremely useful in computer science (and technical interviews).  They
 allow us to gain the advantages of array-like random access but with non-integers
 instead -- or when the storage array is smaller than the number of possible index keys
 we will potentially need.  A Hash Table is a specialized data structure that uses a
 key as input and computes an index from it, to be used as an array index for improved
 random access (than linear).

Most programming languages provide some kind of Hash Table  by default, and
 Javascript is no exception.  Objects in Javascript are Hash Tables so there usually
 won't be any reason to recreate one in Javascript unless you need a non-default
 behavior.  In this challenge we are going make a good Hash Table without simply 
 wrapping over a Javascript object.

There are a few necessary components to a Hash Table:

 1. An array that usually offers more limited storage capacity than there will be keys
     filling it
 2. A _hash function_ that will transform the key into an index for the array
 3. A _collision_ resolver to deal with multiple different keys that both result
     in the same index

Internal format of a HashTable looks like this:

```

this.table = []
this.length;

|<----------------- Table --------------------->|    Array
 |<---- Bucket ----->|  ...              ...         Array of Arrays
  |<->| Entry    ...      ...    ...       ...
[[[k,v], [k,v], [k,v]], [[k,v], [k,v]],  [[k,v]]]    Array of [key, value]  

```

A more graphical view of a Hash Table below:

![HashTable](assets/HashTable-Wikipedia.png)


###### Edge Cases

 * Table size is too small for the number of items
 * When multiple keys hash to the same bucket and produce a collision
 * Knowing when to resize a mutable hash table.  Many texts suggest rehashing
    when the load factor (number of buckets filled) reaches ~80% or when the 
    average collisions reaches a threshold (5 collisions on average across the
    lookups or inserts).  See [Hash Table Design](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.14.5908)
 

###### NOTES

 * We will only be using strings as a key for this exercise.  Do not attempt
    or consider any other type of key
 * Do not simply pass-through to a Javascript object.  Use an array for storage.
    

###### This Exercise


Open [hashtables-L0.js](ES6/src/hashtables-L0.js) and follow the prompts below to complete the exercise.  Use 
 the [testRunner0.html](ES6/testRunner0.html) file to run the tests and view your progress.


###### Objective

Your objective is to create a Hash Table with the following features:

 1. HashTable class
 2. .hasher() hash function to convert key into index
 3. .set() function to add or set entries
 4. .get() function to get entries
 5. Collision resolution using the _chaining_ technique
 6. .remove() function to remove entries

###### BONUS:

 1. .toString() function to print everything to the console
 2. .rehash() function to expand the key space
 3. Must rehash (resize) when needed


###### Critical Whiteboard Skills

 * Hash Table questions will be more about using a Hash Table to solve unrelated
    problems, not so much about imlementing a Hash Table
 * Recognizing when a Hash Table can reduce a complexity class (E.G., eliminate a
    loop).
 * Knowing when to use a Hash Table vs an array or other data structure
 