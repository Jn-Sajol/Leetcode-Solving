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
var removeNodes = function(head) {
    
    if(!head) return null
    
    head.next = removeNodes(head.next)
    
    if(head.next && head.val < head.next.val) return head.next
    
    return head
    
};