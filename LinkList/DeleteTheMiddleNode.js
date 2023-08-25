/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let fast = head;
    let slow = head;
    let prev = null;
    while(fast!==null && fast.next!==null){

        // finding the middle and seeting the previous pointer as well
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // removing the middle and assigning the next value to to previous one's.
    if (prev){
        prev.next =slow.next;
    }
    else{
        head = slow.next
    }
    return head;
    
};
deleteMiddle();