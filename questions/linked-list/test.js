const assert = chai.assert;
const should = chai.should();

describe('Linked-lists', () => {

  describe('Methods', () => {

    it('class exists', () => {
      const linkedList = new LinkedList();
      should.exist(linkedList);
    });

    it('should have a head', () => {
      const linkedList = new LinkedList();
      should.exist(linkedList.head);
    });

    it('should have a tail', () => {
      const linkedList = new LinkedList();
      should.exist(linkedList.tail);
    });

    it('should add nodes to tail', () => {
      const linkedList = new LinkedList();
      linkedList.addToTail(7);
      linkedList.addToTail(23);
      assert(linkedList.tail === 23, 'expected tail to equal 23');
    });

    it('should remove and re-assign head', () => {
      const linkedList = new LinkedList();
      linkedList.addToTail(7);
      linkedList.addToTail(23);
      linkedList.removeHead();
      assert(linkedList.head === 23, 'expected head to equal 23');

    });

    it('should have contains method that returns boolean', () => {
      const linkedList = new LinkedList();
      linkedList.addToTail(7);
      linkedList.addToTail(23);
      linkedList.addToTail(33);
      linkedList.addToTail(4);
      assert(linkedList.contains(33) === true, 'expected contains to return true, instead returned false');
      assert(linkedList.contains(24) === false, 'expected contains to return false, instead returned true');

    });

    it('should sort linked list', () => {
      const linkedList = new LinkedList();
      linkedList.addToTail(7);
      linkedList.addToTail(23);
      linkedList.addToTail(33);
      linkedList.addToTail(4);
      linkedlist.sort();

      const linkedListSortedValues = [];
      const sortedValues = [4, 7, 23, 33];

      assert(sortedValues == linkedListSortedValues, 'expected linked list to be sorted');
    });

    it('should remove duplicates from an unsorted linked list', () => {
      const linkedList = new LinkedList();
      linkedList.addToTail(7);
      linkedList.addToTail(23);
      linkedList.addToTail(33);
      linkedList.addToTail(7);
      linkedList.removeDuplicates();

      const linkedListNoDuplicates = [];
      const expectation = [7, 23, 33];

      assert(linkedListNoDuplicates == expectation, 'expected linked list not to contain duplicate value');
    });

    it('should return nth to last node', () => {
      const linkedList = new LinkedList();
      linkedList.addToTail(7);
      linkedList.addToTail(23);
      linkedList.addToTail(33);
      linkedList.addToTail(4);
      assert(linkedList.returnNthToLastNode(3) == 23, 'expected to return the third to last node');    
    });

    it('should delete middle node', () => {
      const linkedList = new LinkedList();
      linkedList.addToTail(7);
      linkedList.addToTail(23);
      linkedList.addToTail(33);
      linkedList.addToTail(4);
      linkedList.deleteMiddleNode(23);

      const linkedListValues = [];
      const expectation = [7, 33, 4];

      assert(linkedListValues == expectation)

    });

    it('should partition the linked list based on a passed in value', () => {
      const linkedList = new LinkedList();
      linkedList.addToTail(10);
      linkedList.addToTail(6);
      linkedList.addToTail(8);
      linkedList.addToTail(5);
      linkedList.addToTail(4);
      linkedList.partition(6);

      const partition = [];
      const expectation = [5, 4, 6, 10, 8]

      asser(partition == expectation, 'expected partition of values to be [5, 4, 6, 10, 8]')

    });

    it('should check if a linked list is a palindrome', () => {
      const linkedList = new LinkedList();
      linkedList.addToTail(0);
      linkedList.addToTail(1);
      linkedList.addToTail(2);
      linkedList.addToTail(1);
      linkedList.addToTail(0);
      assert(linkedList.isPalindrome() === true, 'expected to be true');

    });

    it('should determine if a linked list is a circular linked list(corrupt)', () => {
      const linkedList = new LinkedList();
      linkedList.addToTail(7);
      linkedList.addToTail(23);
      linkedList.addToTail(33);
      linkedList.addToTail(4);
      linkedList.addToTail(5);
      
      assert(linkedList.detectLoop() === false, 'expected to return false');
    });

    it('should return node that begins the loop, if linked list is corrupt', () => {
      const linkedList = new LinkedList();
      linkedList.addToTail(7);
      linkedList.addToTail(23);
      linkedList.addToTail(33);
      linkedList.addToTail(4);
      linkedList.addToTail(5);
      linkedList.addToTail(23);
      
      assert(linkedList.detectLoop() === 23, 'expected 23 to be returned');
    })
  });

  describe('Functions to process linked lists as inputs', () => {

  });

});