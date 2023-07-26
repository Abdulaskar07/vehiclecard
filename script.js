data1 = document.getElementById("add");
data2 = document.getElementById("head");
data3 = document.getElementById("rate");
data4 = document.getElementById("add");

function add(){
   
   data1.textContent = "Added To Your Cart";
   data1.style = 'background-color:white;color:black';
}

function black(){
    document.getElementById("img").src="black.jpeg";
    data1.style = 'background-color:white;color:black';
    data2.style='background-color:black';
    data3.style='background-color:black';
    data4.style='background-color:black';
    // add();
}
function grey(){
    document.getElementById("img").src="grey.jpeg";
    data1.style = 'background-color:white;color:grey';
    data2.style='background-color:grey';
    data3.style='background-color:grey';
    data4.style='background-color:grey';
}
function red(){
    document.getElementById("img").src="red.jpeg";
    data1.style = 'background-color:white;color:red';
    data2.style='background-color:red';
    data3.style='background-color:red';
    data4.style='background-color:red';
}