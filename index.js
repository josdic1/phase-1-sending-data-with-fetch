// Add your code here
function submitData(name, email) {
    const newUser = { name, email };
  
    return fetch(`http://localhost:3000/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to submit: ${r.statusText}`);
        return r.json();
      })
      .then((data) => {
        let userList = document.querySelector('ul');
        if (!userList) {
          userList = document.createElement('ul');
          document.body.appendChild(userList);
        }
  
        const li = document.createElement('li');
        li.textContent = `${data.name} (ID: ${data.id})`;
        userList.appendChild(li);
        return data;
      })
      .catch((error) => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessage);
      });
  }
 