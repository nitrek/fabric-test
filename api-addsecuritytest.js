

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
while(i<10){
var data = JSON.stringify({
  "peers": [
    "a/peer0",
    "b/peer0",
    "b/peer1",
    "c/peer0",
    "c/peer1"
  ],
  "fcn": "addsecurity",
  "args": [
    "security"+i
  ]
});
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://ec2-13-250-248-0.ap-southeast-1.compute.amazonaws.com:4000/channels/common/chaincodes/reference");
xhr.setRequestHeader("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjQ1MTM5MjYsInVzZXJuYW1lIjoidGVzdCIsIm9yZ05hbWUiOiJhIiwiaWF0IjoxNTI0NDc3OTI3fQ.hLCFUX5wx7D-tCa0gFYIpaEETUbWO-abW7vPmIeEy5g");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "6861bdae-3842-be95-11cd-9d3c76850ecf");

xhr.send(data);
i++;
}