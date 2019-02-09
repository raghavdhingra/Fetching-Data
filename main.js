const req = new XMLHttpRequest();
req.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
let name = 0, species = 0, arr = 0, parent = 0, like = 0, dislike = 0, cos = 0, j = 0, arrlike = 0;
const fetch = () => {
    if (cos == 0){
    arr = JSON.parse(req.responseText);
    console.log(arr[0].foods);
    for (var i=0;i<arr.length;i++){
        name = arr[i].name;
        species = arr[i].species;
        parent = document.createElement('div');
        parent.style.opacity = 0;
        parent.style.animationDelay=i+'s';
        parent.id = 'id_'+i;
        parent.className = 'anim';
        parent.innerHTML=`<b>${name}</b> is a ${species}.<br>It likes - `;
        arrlike = arr[i].foods.likes;
        arrdislike = arr[i].foods.dislikes;
        for (j=0; j<arrlike.length;j++){
            parent.innerHTML+=`${arrlike[j]}, `;
        }
        parent.innerHTML+='<br>it dislikes - ';
        for (k=0;k<arrdislike.length;k++){
            parent.innerHTML+=`${arrdislike[k]}, `;
        }
        document.getElementById('parent').appendChild(parent);
    }
    cos=1;
}
else{
    alert('You Have Already Fetched The Data From The Server.');
} 
}
req.send();