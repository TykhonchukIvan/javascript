class LinkedList {
  constructor(element) {
    this.node = {
      value: element,
      prevElement: null,
      nextElement: null,
    };

    this.root = this.node;
  }

  addElement (element) {
    const newNode = {
      value: element,
      prevElement: this.node,
      nextElement: this.root,
    };
    this.node.nextElement = newNode;
    this.node = newNode;
    this.root.prevElement = this.node;
  }

  find (value) {
    let iterator = this.node;

    while (iterator.value !== value) {
      iterator = iterator.prevElement
    }
    return iterator
  }

  delete (value) {
    const deleted = this.find(value);
    const next = deleted.nextElement;
    const prev = deleted.prevElement;
    prev.nextElement = next;
    next.prevElement = prev;

    return this.node;
  }
}

const linkedList = new LinkedList('first');

linkedList.addElement('second');
linkedList.addElement('third');
linkedList.addElement('fourth');
linkedList.addElement('fifth');

console.log(linkedList.delete('third'));

