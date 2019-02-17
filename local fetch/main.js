const req = new XMLHttpRequest();
req.open("GET","./this.json");
let val=0;
const fetch = () => {
    val = JSON.parse(req.responseText);
    var x = val.key[2].key1[0];
    console.log(x);
}
req.send();