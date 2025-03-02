class LinkedList {
    constructor(){
        this.head = null
    }

    appendValue(value){
        //adds a new value at end of list. find the last value.
        function goToNextNode(node){
            if (!node.nextNode){
                return node
            }
            return goToNextNode(node.nextNode)
        }
        const firstNode = this.head
        const lastNode = goToNextNode(firstNode)
        lastNode.nextNode = value
    }
    preprendValue(value){
        //adds new val at beginning of list
        const newHead = new Node(value)
        if(this.head){
            newHead.nextNode = this.head
        }
        this.head = newHead
    }
    get size(){
        //setting as a get to treat as a property
    }
}

class Node {
    constructor(value=null, nextNode=null){
        this.value = value
        this.nextNode = nextNode    
    }
}

const list1 = new LinkedList()
list1.preprendValue('B')
list1.preprendValue('A')
list1.appendValue('C')
console.log(list1)