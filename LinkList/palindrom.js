/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
    let palindrome = [];
    <!-- this pushes the linked list into the empty array[] -->
    while (head) {
      palindrome.push(head.val);
      head = head.next;
    }
  };
