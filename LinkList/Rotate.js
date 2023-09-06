const rotateRight = (head, k) => {
  if (!head || !head.next || !k) return head;
  const list = [];
  let len = 0;
  // put linked list into array
  for (let cur = head; cur; cur = cur.next) {
    list[len++] = cur;
  }
  // calculate the break position
  const newHead = len - (k % len);
  if (newHead === len) return head;
  // change pointer
  list[len - 1].next = head;
  list[newHead - 1].next = null;
  return list[newHead];
};
rotateRight();