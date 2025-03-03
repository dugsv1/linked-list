export class LinkedList {
    constructor(){
        this.head = null
    }

    #goToLastNode(node){
        if (!node.nextNode){
            return node
        }
        return this.#goToLastNode(node.nextNode)
    }

    append(value){
        //adds a new value at end of list. find the last value.
        if (!this.head) {
            this.head = new Node(value)
            return
        }
        const firstNode = this.head
        const lastNode = this.#goToLastNode(firstNode)
        lastNode.nextNode = new Node(value)
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
        let size = 0
        let node = this.head
        while (node){
            size++
            node = node.nextNode
        }
        return size
    }
    get first(){
        if (this.head){
            return this.head.value
        }
        return null
    }
    get tail(){
        let first = this.head
        const last = this.#goToLastNode(first)
        return last.value
    }
    pop(){
        let node = this.head
        while (node){
            if (node.nextNode.nextNode === null){
                node.nextNode = null
            }
            node = node.nextNode
        }
    }
    contains(value){
        let node = this.head
        while (node){
            if (node.value == value){
                return true
            }
            node = node.nextNode
        }
        return false
    }
    find(value){
        let node = this.head
        let counter = 0
        while (node){
            if (node.value === value){
                return counter
            }
            node = node.nextNode
            counter++
        }
    }
    atIndex(index){
        let counter = 0
        let node = this.head
        while (node){
            if (counter === parseInt(index)){
                return node.value
            }
            node = node.nextNode
            counter++
        }
        return null
    }
    insert(value, index){
        // grab the child, make it a grandchild, make current the child
        let node = this.head
        let counter = 0
        let parent
        while (node){
            if (counter === index){
                const newNode = new Node(value)
                const tempChild = node
                parent.nextNode = newNode
                newNode.nextNode = tempChild
                break
            }
            parent = node
            node = node.nextNode
            counter ++
        }
    }
    removeAt(index){
        // grab the child, make it a grandchild, make current the child
        let node = this.head
        let counter = 0
        let parent
        while (node){
            if (counter === index){
                parent.nextNode = node.nextNode
                break
            }
            parent = node
            node = node.nextNode
            counter ++
        }
    }
    toString(){
        let output = []
        let node = this.head
        while (node){
            output.push(node.value)
            node = node.nextNode
        }
        output.push('null')
        return output.join('->')
    }
}

export class Node {
    constructor(value=null, nextNode=null){
        this.value = value
        this.nextNode = nextNode    
    }
}

const list1 = new LinkedList()
list1.preprendValue('B')
list1.preprendValue('A')
list1.append('C')
list1.append('D')

// console.log(list1)
console.log(list1.toString())
// console.log(list1.size)

// console.log(list1.first)
// console.log(list1.tail)
console.log(list1.atIndex(3))
console.log(list1.find('C'))
list1.insert('A2',1)

console.log(list1.toString())
list1.removeAt(1)
console.log(list1.toString())