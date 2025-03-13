async function fetchUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();

    let userList = document.getElementById('user-list');
    let content = '';

    for (let i = 0; i < users.length; i++) {
        let user = users[i];

        content += `
            <div class="user-card">
                <h2>${user.name}</h2>
                <p>Username: ${user.username}</p>
                <p>Email: <a href="mailto:${user.email}">${user.email}</a></p>
                <p>Phone: ${user.phone}</p>
                <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                <p>Company: ${user.company.name}</p>
                <p>Address: ${user.address.suite}, ${user.address.street}, ${user.address.city}</p>
            </div>
        `;
    }

    userList.innerHTML = content;
}

// استدعاء الدالة مباشرة
fetchUsers();