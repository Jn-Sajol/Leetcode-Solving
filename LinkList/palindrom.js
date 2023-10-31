
const isPalindrome = function(head) {
    let palindrome = [];
    while (head) {
      palindrome.push(head.val);
      head = head.next;
    }
    
    for (let i = 0, j = palindrome.length - 1; i < j; i++, j--) {
      if (palindrome[i] !== palindrome[j]) {
        return false;
      }
    }
    
    return true;
  };
isPalindrome()

/**Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9 */