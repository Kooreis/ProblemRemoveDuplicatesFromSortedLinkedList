Here is a TypeScript solution for removing duplicates from a sorted linked list:

```typescript
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function removeDuplicates(head: ListNode | null): ListNode | null {
    let current = head;
    while (current !== null && current.next !== null) {
        if (current.next.val === current.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}

// Test the function
let node3 = new ListNode(3, null);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(2, node2);
let head = new ListNode(1, node1);

let newHead = removeDuplicates(head);

while (newHead !== null) {
    console.log(newHead.val);
    newHead = newHead.next;
}
```

In this code, we first define a `ListNode` class to represent a node in the linked list. Each `ListNode` has a `val` property to hold the value of the node and a `next` property to point to the next node in the list.

The `removeDuplicates` function takes the head of a sorted linked list and removes all duplicates. It does this by iterating through the list and checking if the value of the next node is the same as the current node. If it is, it removes the next node by setting the `next` property of the current node to the node after the next node. If the next node's value is not the same as the current node's value, it moves on to the next node.

Finally, we test the function by creating a sorted linked list with duplicates and calling `removeDuplicates` on it. We then print out the values of the new list to verify that all duplicates have been removed.