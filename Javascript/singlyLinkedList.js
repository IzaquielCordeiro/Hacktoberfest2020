
// Creating a Singly Linked List.

/*
    A singly Linked List has head and Tail.
    First element keep reference of the next element.

*/


class LinkedList{

    constructor(value){

        // Creating Objects 
        this.head ={
            value: value,
            next: null
        };

        this.tail = this.head;
        this.length = 1;
        return this;
    }

    // Creating other functions of the SLL.

    append(value){

        // Adding new Node at the last.

        const newNode ={
            value: value,
            next: null
        };

        // Shifting the tail from head to this newNode that formed.
        this.tail.next= newNode;

        // the value of tail is now this NewNode.
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){

        // Adding new Node at the first.

        const newNode={
            value: value,
            next: null
        };

        // now the head of the this LinkedList is the newNode.
        this.head = newNode;

        // reference 
        newNode.next = this.head;

        this.length++;
        return this;

    }

    insert(index,value){

        if(index >= this.length){
            return this.append(value);
        }

        const newNode={
            value: value,
            next: null
        };

        // Stroing the values of the indexed Node
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;

        // Adding the newNode next to the last Node
        leader.next = newNode;
        newNode.next = holdingPointer;
        
        this.length++;
        return this.printList();
    }

    remove(index){

           // Stroing the values of the indexed Node
           const leader = this.traverseToIndex(index - 1);
           const unwantedNode = leader.next;

           // Removing Value;
           leader.next = unwantedNode.next;
           this.length--;
           return this.printList();

    }

    traverseToIndex(index){
        // Going to return the value of the Index Node.
        var counter =0;
        var currentNode = this.head;

        while( counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    printList(){
        let array = [];
        let currentNode = this.head;

        while(currentNode != null){
            // adding Value to the array
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
}

var myNewLL = new LinkedList(10);
myNewLL.append(5);
myNewLL.printList();