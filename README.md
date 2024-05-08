# sp24-cse110-lab5

Name: Jeffrey Lee

Expose: https://jxnlee.github.io/sp24-cse110-lab5/expose.html
Explore: https://jxnlee.github.io/sp24-cse110-lab5/explore.html

Explore Part 3:
1. You would not use a unit test to test the 'message' feature of a messaging application. This is because this feature requires the interaction of various features between different users. Not only does the interaction between multiple users create complexity which makes it difficut for the unit test. But we would need to test the interaction between the send and the rece3ive (which would need to be for different users), which is something the unit test is not capable of.
2. You could use the unit test to test the 'max message length' feature of a messaging application. This is because it is a small scale test that doesn't have many moving parts. This can be executed and tested quickly and isn't significantly impacted by other features (just the writing of the message.)
