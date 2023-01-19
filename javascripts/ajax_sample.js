let number= 0;
let data = [];
const videoArea= document.getElementById("video");
const titleArea= document.getElementById("title");
const contentArea= document.getElementById("content");
const button= document.getElementById('btn');

function getData() {
    const request=new XMLHttpRequest();
    request.onreadystatechange=function() {
        if (request.readyState== 4) {
            if(request.status== 200) {
                data = JSON.parse(request.response);
                //console.log(request.response);
            }
        }
    }
    request.open("GET", "ajax.json", false);
    //request.responseType= "json";
    request.send(null);
}

function changeVideo(){
    button.addEventListener('click', e=> {
        if (!Object.keys(data).length){
            getData();
            //while(!Object.keys(data).length){};
        }

        titleArea.innerHTML= data[number].title;
        contentArea.innerHTML= data[number].content;
        videoArea.setAttribute("src", data[number].url);
        number== 2 ? number= 0 : number++;
    });
}
window.onload= changeVideo;