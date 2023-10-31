
const isPalindrome = function(head) {
    let palindrome = [];
    <!-- this pushes the linked list into the empty array[] -->
    while (head) {
      palindrome.push(head.val);
      head = head.next;
    }
    
<!-- This checks if the value is a palindrome or not -->
    for (let i = 0, j = palindrome.length - 1; i < j; i++, j--) {
      if (palindrome[i] !== palindrome[j]) {
        return false;
      }
    }
    
    return true;
  };
