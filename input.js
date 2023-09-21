function convertToPostfix(infix) {
  var output = "";
  var stack = [];
  for (var i = 0; i < infix.length; i++) {
     var ch = infix.charAt(i);
     if (ch == '+' || ch == '-' || ch == '*' || ch == '/') {
        while (stack.length != 0 && stack[stack.length - 1] != '(' &&
        getPrecedence(ch) <= getPrecedence(stack[stack.length - 1])) {
           output += stack.pop();
           output += ' ';
        }
        stack.push(ch);
     }
     else if (ch == '(') {
        stack.push(ch);
     }
     else if (ch == ')') {
        while (stack.length != 0 && stack[stack.length - 1] != '(') {
           output += stackHTML.pop();
           output += ' ';
        }
        stack.pop();
     } else {
        output += ch;
     }
  }
  while (stack.length != 0) {
     output += stack.pop();
     output += ' ';
  }
  return output;
}
function getPrecedence(ch) {
  if (ch == '+' || ch == '-') {
     return 1;
  }
  else if (ch == '*' || ch == '/') {
     return 2;
  } else {
     return 0;
  }
}

function Write() {
    var expression = document.getElementById("myname").value;
    //var x = expression.split(""); // splits each character and stores it in an array
    
    var final = convertToPostfix(expression);
    document.getElementById("123").value=final;
  }