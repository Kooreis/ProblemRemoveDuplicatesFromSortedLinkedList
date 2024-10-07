# Question: How do you remove duplicates from a sorted linked list? JavaScript Summary

The provided JavaScript code defines a linked list and provides a method to remove duplicate values from it. The linked list is implemented through a Node class, which represents an individual node in the list, and a LinkedList class, which manages the overall list. The LinkedList class includes methods to insert a new node at the end of the list, remove duplicate nodes, and print the list. The removeDuplicates method works by iterating through the list and comparing the data of the current node with the data of the next node. If they are the same, it bypasses the next node by setting the next property of the current node to the node after the next one, effectively removing the duplicate. If they are not the same, it moves to the next node. The code then creates a linked list, inserts some values into it, prints the list, removes the duplicates, and prints the list again to demonstrate the removal of duplicates.

---

# TypeScript Differences

The TypeScript version of the solution is similar to the JavaScript version in terms of logic and structure. Both versions use a class to define a node in the linked list and a function to remove duplicates from the list. The main differences are due to TypeScript's static typing feature.

1. Type Annotations: In TypeScript, we explicitly declare the type of each variable. For example, in the `ListNode` class, `val` is declared as a number and `next` is declared as either `ListNode` or `null`. Similarly, in the `removeDuplicates` function, `head` is declared as either `ListNode` or `null`.

2. Optional Parameters and Default Values: In the `ListNode` constructor, `val` and `next` are optional parameters. If they are not provided when creating a new `ListNode`, they will default to `0` and `null`, respectively. This is a feature of TypeScript that is not available in JavaScript.

3. Function Return Type: The `removeDuplicates` function is declared to return either `ListNode` or `null`. This is another feature of TypeScript that is not available in JavaScript.

4. Test Case: The way the test case is set up is slightly different. In the JavaScript version, a `LinkedList` class is used to manage the list and nodes are added using the `insertLast` method. In the TypeScript version, nodes are created individually and linked together manually.

Overall, the TypeScript version provides better type safety and can prevent potential type-related errors at compile time.

---

# C++ Differences

The C++ and JavaScript versions of the solution are quite similar in their approach to solving the problem. Both versions use a linked list data structure and a similar algorithm to remove duplicates from the list. They iterate through the list, comparing each node with the next one. If two consecutive nodes have the same data, the next node is removed from the list.

However, there are some differences due to the language features and methods used in each version:

1. Memory Management: In the C++ version, memory is manually managed. When a duplicate node is removed, the `free` function is used to deallocate the memory occupied by the node. In JavaScript, memory management is automatic, so there's no need to manually deallocate memory.

2. Object and Class Definitions: In JavaScript, classes are used to define the Node and LinkedList objects, and methods are defined inside the class. In C++, structs are used to define the Node object, and functions are defined outside the struct.

3. Insertion of Nodes: In the JavaScript version, nodes are added to the end of the list using the `insertLast` method. In the C++ version, nodes are added to the beginning of the list using the `push` function.

4. Printing the List: In JavaScript, `console.log` is used to print the list, while in C++, `cout` is used.

5. Null Checking: In the C++ version, there is an explicit check for `NULL` at the beginning of the `removeDuplicates` function. In the JavaScript version, this check is not necessary because the `while` loop condition (`current && current.next`) automatically handles the case where `current` is `null`.

6. References: In C++, pointers are used to reference and manipulate nodes in the linked list. In JavaScript, references to objects are used instead.

---
