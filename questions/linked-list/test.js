const assert = chai.assert;
const should = chai.should();

describe('Linked-lists', () => {

  it('Linked List class exists', () => {
    const linkedList = new LinkedList();
    should.exist(linkedList);
  });

  it('Linked List should have a head', () => {
    const linkedList = new LinkedList();
    should.exist(linkedList.head);
  })


});