Here is a JavaScript solution for removing duplicates from a sorted linked list:

```javascript
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertLast(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    removeDuplicates() {
        let current = this.head;
        while (current && current.next) {
            if (current.data === current.next.data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let list = new LinkedList();
list.insertLast(1);
list.insertLast(2);
list.insertLast(2);
list.insertLast(3);
list.insertLast(3);
list.insertLast(3);
list.insertLast(4);
console.log("Before removing duplicates:");
list.printList();
list.removeDuplicates();
console.log("After removing duplicates:");
list.printList();
```

This code first creates a linked list with some duplicate values. It then removes the duplicates and prints the list before and after the removal of duplicates.