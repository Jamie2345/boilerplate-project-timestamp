function displayJsonResponse(data) {
  let code_tag = document.getElementById("output-code");
  let response_title = document.getElementById("output-title");
  code_tag.innerHTML = JSON.stringify(data);

  response_title.innerHTML = "Response";
  code_tag.style.display = "block";
}

function requestTimestamp() {
  let input = document.getElementById('time-input');
  
  url = "api/" + input.value;
  
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => response.json())
    .then((data) => displayJsonResponse(data))
}