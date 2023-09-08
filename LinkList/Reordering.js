/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (head === null) {
      return;
    }
    /**
     * The goal is to reverse the second half of the list and merge it onto
     * the first half of the list. The first half will have at most one more
     * element than the second half.
     */
    let second = split(head);
    second = reverse(second);
    merge(head, second);
  };
  
  
  