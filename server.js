const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/getEmailCount', (req, res) => {
    var emails = req.query.emails;
    var uniqueEmailCount = getEmailCount(emails);
    res.send("Unique email count is " + uniqueEmailCount);
})

function getEmailCount(emails) {
    var listEmails = emails.split(",");
    var emailSet = new Set()
    console.log(listEmails);
    if (listEmails.length > 0) {
        listEmails.forEach(email => {
            var trimmedEmail = email.trim().toUpperCase();
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
                var emailWithoutDomain = trimmedEmail.split("@")[0]
                emailWithoutDomain = emailWithoutDomain.replace(".", "")
                emailWithoutDomain = emailWithoutDomain.split("+")[0]
                console.log(emailWithoutDomain)
                emailSet.add(emailWithoutDomain)
            }
        }
        )
    }
    return emailSet.size;
}

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});