class resourceCaller {
    constructor(url) {
        this.url = url;
    }
    async fetchData() {

        return await fetch(this.url).then((data) => { return data.json() })
            .then((data) => {
                console.log(data);
                show(data)
        })
    }
}
class child extends resourceCaller {
    constructor(url) {
        super(url);
    }
    async fetchData1() {
        return fetch(this.url).then((data) => { return data.json() })
            .then((data) => {

                for (let i = 0; i < data.data.length; i++) {
                    const name = data.data[i].first_name + data.data[i].last_name;
                    const ID = data.data[i].id;
                    const email = data.data[i].email;
                    console.log("STARTING TEST CASES")
                    console.log("ID : ", ID)
                    console.log("NAME : ", name)
                    console.log("EMAIL : ", email)
                }
        })
    }
}
let myUrl = new child("https://reqres.in/api/users");
//Parent class
myUrl.fetchData();
//Child Class
myUrl.fetchData1();

let show = (result) => {
    let tab =
        `<tr>
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
    document.getElementById("Q3_results").innerHTML = tab
}
