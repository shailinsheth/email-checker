# Email Checker
Accept a list of email addresses and return an integer indicating the number of unique email addresses. Where "unique" email addresses means they will be delivered to the same account using Gmail account matching. Specifically: Gmail will ignore the placement of "." in the username. And it will ignore any portion of the username after a "+".

# Examples:
test.email@gmail.com, test.email+spam@gmail.com and testemail@gmail.com will all go to the same address, and thus the result should be 1.

# Build
```
docker build -t emailchecker .
```

# Run
```
docker run -p 8080:8080 -d emailchecker
```

# Usage
1. Build docker image
2. Run container
3. http://localhost:8080/ 

Note: Make sure Port# 8080 is not in use.