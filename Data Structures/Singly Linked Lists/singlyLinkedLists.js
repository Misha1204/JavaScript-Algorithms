// Piece of data - val

class Node  {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        return currentHead;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;

        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, value) {
        let foundNode = this.get(index);
        if(foundNode) {
            this.get(index).value = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) {
            this.unshift(value);
            return true;
        }
        if(index === this.length) {
            this.push(value);
            return true;
        }

        let newNode = new Node(value);
        let previousNode = this.get(index - 1);
        let temp = previousNode.next;
        previousNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        const previousNode = this.get(index - 1);
        const removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    reverse() {
        console.log("||||||||||||||||||||||||||||||||||||")
        let node = this.head; // 1
        this.head = this.tail;
        this.tail = node;
        let next;
        let previousNode = null;

        console.log(this.head); // 205
        console.log(this.tail); // 1

        for(let i = 0; i < this.length; i++) {
            next = node.next; // 61
            console.log(next);
            node.next = previousNode; // 1
            previousNode = node; // 1
            console.log(previousNode);
            node = next; // 5
            console.log(node);
            console.log("===================================================");
        }
        console.log(this.print());
    }

    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.value);
            current = current.next;
        }

        console.log(arr);
    }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(5);
list.push(61);
list.push(87);
list.push(102);
list.push(205);

list.print();
list.reverse();
