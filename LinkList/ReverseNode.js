/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var reverseKGroup = function (head, k) {
    // Count the number of ListNodes
    let n = 0;
    for (let i = head; i != null; n++, i = i.next);

    // Create a dummy LinkedList
    let dummy = new ListNode(0);
    dummy.next = head;

    // Loop through the nodes until we no longer have k or more remaining
    for (let prev = dummy, tail = head; n >= k; n -= k) {
        // Loop through this batch of nodes being reversed
        for (let i = 1; i < k; i++) {
            // Flip the nodes to point in the opposite direction (reverse them)
            let next = tail.next.next;
            tail.next.next = prev.next;
            prev.next = tail.next;
            tail.next = next;
        }

        // Swap the current head for the reversed one
        prev = tail;
        tail = tail.next;
    }
    return dummy.next;
};
reverseKGroup();