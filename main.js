

function percent5(percent){
    let bill =document.getElementById("bill").value;
    bill=Number(bill);
    let uvecaniBill=bill*((100+percent)/100);
    console.log(uvecaniBill);
    //uvecaniBill=uvecaniBill-bill;
    let numberOfUsers=document.getElementById("bill2").value;
    numberOfUsers=Number(numberOfUsers);
    if(numberOfUsers>0){
     uvecaniBill=uvecaniBill/numberOfUsers;
     console.log(uvecaniBill);
     Math.round(uvecaniBill,2);
     document.getElementById("price2").innerText=uvecaniBill.toFixed(2);
     document.getElementById("price1").innerText=(uvecaniBill/numberOfUsers).toFixed(2);
     document.getElementById("resetButton").disabled = false;
    }else{
        document.getElementById("error").innerText="Cant be zero";
        document.getElementById("bill2").style.border="2px solid rgb(221, 48, 48)";
    }
}
function reset(){
    document.getElementById("price2").innerText="0.00";
    document.getElementById("price1").innerText="0.00";
    document.getElementById("bill").value='';
    document.getElementById("bill2").value='';
    document.getElementById("custom").value='';
    document.getElementById("resetButton").disabled = true;
}
function custom(){
    let customPercent =document.getElementById("custom").value;
    customPercent=Number(customPercent);
    percent5(customPercent);
}