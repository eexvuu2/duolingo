function sendRequest() {
  const myHeaders = new Headers();
  myHeaders.append("accept", "*/*");
  myHeaders.append("accept-language", "en-US,en;q=0.9,id-ID;q=0.8,id;q=0.7");
  myHeaders.append("content-type", "application/json");
  myHeaders.append("origin", "https://www.duolingo.com");
  myHeaders.append("priority", "u=1, i");
  myHeaders.append("referer", "https://www.duolingo.com/");
  myHeaders.append(
    "sec-ch-ua",
    '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"'
  );
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("sec-ch-ua-platform", '"Windows"');
  myHeaders.append("sec-fetch-dest", "empty");
  myHeaders.append("sec-fetch-mode", "cors");
  myHeaders.append("sec-fetch-site", "cross-site");
  myHeaders.append(
    "user-agent",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
  );

  const raw = JSON.stringify({
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjYzMDcyMDAwMDAsImlhdCI6MCwic3ViIjo4OTU0Njc3NTZ9.3oX6f-B3Th5tI_w79bBK6hWD7KQImIzKtpb7QA81dUo",
    gain_type: "xp",
    amount: 40,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://www.duolingopro.net/request", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

// Run the function every 10 minutes
setInterval(sendRequest, 600000);
