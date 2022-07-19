// 5. Given a String S, reverse the string without reversing its individual words. Words are separated by dots.
function reverse(S) {
    return S.split('.').reverse().join('.');
}
console.log(reverse("i.like.this.program.very.much"));
console.log(reverse("pqr.mno"));
// Example 1
// S = i.like.this.program.very.much
// Output: much.very.program.this.like.i
// Explanation: After reversing the whole
// string(not individual words), the input
// string becomes
// Much.very.program.this.like.i

// Example 2
// Input:
// S = pqr.mno
// Output: mno.pqr
// Explanation: After reversing the whole
// string , the input string becomes
// mno.pqr