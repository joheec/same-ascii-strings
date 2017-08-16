This program returns the smallest ASCII value difference between two strings inorder to make them the same.
What does that mean?

You could make 'cat' and 'at' the same, by removing the 'c'. The ASCII value would be 99.
You could also remove 'ac' and 'a' so that both final strings would be 't', but the sum of the ASCII values would be greater than 99.

Here's another example.
'abandon' and 'land'. If 'a', 'b', 'o', 'n', and 'l' are removed, the strings would be the same, 'and'. The ASCII sum for that is 524.

There is one caveat. The final strings, when the characters were removed, had to be consecutive characters in their original strings.
