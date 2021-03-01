function calculateTotal() {
    var total = 0;
    var gtmanual = document.getElementById("gtmanual");
    var gtautomatic = document.getElementById("gtautomatic");
    var gtsmanual = document.getElementById("gtsmanual");
    var gtssport = document.getElementById("gtssport");
    var comboa = document.getElementById("comboa");
    var combob = document.getElementById("combob");

    if (document.getElementById("stereo").checked)
      total = total + 550;
    if (document.getElementById("security").checked)
      total = total + 399;
    if (document.getElementById("mirror").checked)
      total = total + 295;
    if(gtmanual.checked==true){
        total = total + 17790;
    }
    if(gtautomatic.checked==true){
        total = total + 18590;
    }
    if(gtsmanual.checked==true){
        total = total + 22455;
    }
    if(gtssport.checked==true){
        total = total + 23155;
    }
    if(comboa.checked==true){
        total = total + 1235;
    }
    if(combob.checked==true){
        total = total + 3354;
    }
    document.getElementById("total").value = total;
  }

  document.getElementById("totalButton").addEventListener("click",calculateTotal,false);

  function carPhoto(){
    var sel=document.getElementById("rental").value;
    document.getElementById("car").src=sel;
  }
  
  document.getElementById("rental").addEventListener("change",carPhoto);
