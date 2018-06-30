let opUsed;
const onClick = (btn, fn) => {
  btn.addEventListener("click", fn);
};

const initOpListeners = (btn, op) => {
  onClick(btn, () => {
    res.innerText += op;
    opUsed = op;
  });
};

const initDigitListeners = (btn, digit) => {
  onClick(btn, () => {
    res.innerText += digit;
  });
}

const operations = {
  '+': (a, b) => a+b,
  '-': (a, b) => a-b,
  '*': (a, b) => a*b,
  '/': (a, b) => Math.floor(a/b)
};

initDigitListeners(btn0, '0');
initDigitListeners(btn1, '1');
initOpListeners(btnSum, '+');
initOpListeners(btnSub, '-');
initOpListeners(btnMul, '*');
initOpListeners(btnDiv, '/');

onClick(btnClr, () => {
  res.innerText = '';
});

onClick(btnEql, () => {
  const [op1, op2] = res.innerText.split(opUsed);
  const [n1, n2] = [parseInt(op1, 2), parseInt(op2, 2)];
  var result = Number(operations[opUsed](n1, n2)).toString(2);
  res.innerText = result;
});
