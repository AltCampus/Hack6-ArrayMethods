function add(a, b) {
 var sum = "";
    var r = 0;
    var a1, a2, i;
    // Pick the shortest string as first parameter and the longest as second parameter in my algorithm
    if (a.length < b.length) {
      a1 = a;
      a2 = b;
    }
    else {
      a1 = b;
      a2 = a;
    }
    a1 = a1.split("").reverse();
    a2 = a2.split("").reverse();
    // Sum a1 and a2 digits
    for (i = 0; i < a2.length; i++) {
      var t = ((i < a1.length) ? parseInt(a1[i]) : 0) + parseInt(a2[i]) + r;
      sum += t % 10;
      r = t < 10 ? 0 : Math.floor(t / 10);
    }
    // Append the last remain
    if (r > 0)
    sum += r;
    sum = sum.split("").reverse();
    // Trim the leading "0"
    while (sum[0] == "0")
    sum.shift();
    return sum.length > 0 ? sum.join("") : "0";
  }