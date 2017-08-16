Uses a recursive function.

Give this program 2 strings, and it will find substrings that are common to both strings. It will then calculate the the ASCII sum of the characters removed from both strings to create the substring, and output the smallest sum.

What does that mean?
You could make 'cat' and 'at' the same, by removing the 'c'. The ASCII value would be 99 (c).
You could also remove 'ac' and 'a' so that both final strings would be 't', but the sum of the ASCII values would be greater than 99.

Here's another example.
'abandon' and 'land'. If 'a', 'b', 'o', 'n', and 'l' are removed, the strings would be the same, 'and'. The ASCII sum for that is 524.

There is one caveat. The final strings, when the characters were removed, had to be consecutive characters in their original strings.
