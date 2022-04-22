class resourceCaller {
    constructor(url) {
        this.url = url;
    }
    async fetchData() {

        return fetch(this.url).then((data) => { return data.json() })
            .then((data) => {
                console.log(data);
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