function fib(n) {
    let a = 0;
    let b = 1;
    while (n > 0) {
      [a, b] = [b, a + b];
      n--;
    }
    return a;
  }
  fib();