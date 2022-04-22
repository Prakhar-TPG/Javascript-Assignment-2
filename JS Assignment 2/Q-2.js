const url=  "https://reqres.in/api/users";
async function fetchdata(){

return fetch(url)
.then((data)=>{return data.json()})
    .then((data)=>{
        console.log(data)
        for(let i=0;i<data.data.length;i++){
            const name = data.data[i].first_name + data.data[i].last_name;
            const ID = data.data[i].id;
            const email= data.data[i].email;
        try{
            console.log("STARTING TEST CASES")
            console.log( "ID : " , ID)
            console.log( "NAME : " , name)
            console.log( "EMAIL : " , email)
            }
        catch(err){
            console.log(err)
}
}
    })
}
fetchdata();