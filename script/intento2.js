

function search(){
let unis = [
            {name:"Stanford",high:1570,low:1380,tuition:44757,isPublic:false},
            {name:"UC Berkeley", high:1500,low:1250,tuition:13844,isPublic:true},
            {name:"UC Santa Cruz",high:1280,low:1000,tuition:13398,isPublic:true},
            {name:"USF",high:1270,low:1070,tuition:41450,isPublic:false},
            {name:"SCU",high:1380,low:1190,tuition:43812,isPublic:false},
            {name:"Mills College",high:1250,low:1140,tuition:41918,isPublic:false}
        ];
var public = document.getElementById("publicButton").checked;
var private = document.getElementById("pivateButton").checked;
var dontCare = document.getElementById("dontcareButton").checked;


var filter = function(uni){
    var output = false;
    if(uni.isPublic && ((public)||(dontCare))){
        output = true;
    }
    else if (!uni.isPublic && (private || dontCare)){
        output = true;
    }
    else {
        output = false;
    }
    if(output)
    {   
        var maxTuition = document.getElementById("maxTuition").value == '' ? 99999999 : document.getElementById("maxTuition").value;
        if(uni.tuition <= maxTuition){
            output =  true
        }
        else{
            output = false;
        }
        
        if(output){
            var maxSat = document.getElementById("maxSat").value == '' ? 999999999: document.getElementById("maxSat").value;
            var minSat = document.getElementById("minSat").value = '' ? 0 : document.getElementById("minSat").value;

            if((uni.high <= maxSat)&&(uni.low>=minSat)){
                output =  true
            }
            else{
                output = false;
            }
            
        }
      

    }
    
    return output;
};
var cuerpo = document.getElementById("cuerpo");
cuerpo.innerHTML = '';


unis.forEach(uni => {
            if(filter(uni)){
            let fila = document.getElementById("cuerpo").insertRow();
           fila.insertCell(0).innerHTML = uni.name;
           fila.insertCell(1).innerHTML = uni.high;
           fila.insertCell(2).innerHTML = uni.low;
           fila.insertCell(3).innerHTML = uni.tuition;
            }
        });
}
search();
 var update = document.getElementById("updateButton");
 update.addEventListener("click",search,false);



    