const url = "https://reqres.in/api/users";
async function fetchdata() {

    return await fetch(url)
        .then((data) => { return data.json() })
        .then((data) => {
            console.log(data)
            display(data)
            for (let i = 0; i < data.data.length; i++) {
                const name = data.data[i].first_name + data.data[i].last_name;
                const id = data.data[i].id;
                const email = data.data[i].email;
                try {
                    console.log("STARTING TEST CASES")
                    console.log("ID : ", id)
                    console.log("NAME : ", name)
                    console.log("EMAIL : ", email)
                }
                catch (err) {
                    console.log(err)
                }
            }
        })
}
fetchdata();
let display = (result) => {
    let tab =`<tr>
            <th>ID</th>
            <th>Name</th>
            <th>email</th>
        </tr>`;
    for (let i of result.data) {
        tab += `<tr>
            <td>${i.id} </td>
            <td>${i.first_name + " " + i.last_name}</td>
            <td>${i.email}</td>        
        </tr>`;
    }
    document.getElementById("Q2_results").innerHTML = tab
}
