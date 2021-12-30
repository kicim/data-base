let connect = new XMLHttpRequest();
let url = "https://my-json-server.typicode.com/kicim/data-base/db";
connect.responseType = "json";
connect.open("GET", url);
connect.send();
connect.onload= ()=> {
    template = '';
    let result = connect.response;
    for( let i=0; i < result.products.smartphones.length; i++){
        template += `<h1>${result.products.smartphones[i].name}</h1>`;
    }
    document.body.innerHTML = template;
    console.log("complete");
};