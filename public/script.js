console.log('~Sanity check!~');

document.getElementById("add-to-do")
.addEventListener('click', () => {

  const user_id = document.getElementById("").value
  const item = document.getElementById("to-do-item").value

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const options = {
    method: 'PUT',
    headers: myHeaders,
    body: JSON.stringify({ user_id, item })
  };

  return fetch(`/`, options)

})
