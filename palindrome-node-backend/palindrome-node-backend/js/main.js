document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userName = document.querySelector("#userName").value;
  console.log(userName)

  fetch(`/api?checkForPalindrome=${userName}`)//after question mark everything is a params
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#palindromeName").textContent = data.word
    });

}
