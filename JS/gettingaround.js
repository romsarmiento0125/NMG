$(document).ready(function () {
  //tricycle
  var trislider = document.getElementById("trirange");
  var trikm= document.getElementById("kmtrival")
  var trioutput = document.getElementById("trival");
  
  trikm.innerHTML = trislider.value;
  trislider.oninput = function(){
    trikm.innerHTML = this.value;
    if(this.value <= 5){
      trioutput.innerHTML = 15;
    }
    else{
      trioutput.innerHTML = this.value*5;
    }
    
  }
  
  trislider.addEventListener("mousemove", function(){
    var trix = trislider.value;
    var tricolor = 'linear-gradient(90deg, rgb(23, 21, 85)' + trix*2 + '%, rgb(240, 240, 240)' + trix*2 +'%)';
    trislider.style.background = tricolor;
  })

  //jeep
  var jeepslider = document.getElementById("jeeprange");
  var jeepkm= document.getElementById("kmjeepval")
  var jeepoutput = document.getElementById("jeepval");
  
  jeepkm.innerHTML = jeepslider.value;
  jeepslider.oninput = function(){
    jeepkm.innerHTML = this.value;
    if(this.value <= 4){
      jeepoutput.innerHTML = 9;
    }
    else{
      jeepoutput.innerHTML = +this.value + 5;
    }
    
  }
  
  jeepslider.addEventListener("mousemove", function(){
    var jeepx = jeepslider.value;
    var jeepcolor = 'linear-gradient(90deg, rgb(23, 21, 85)' + jeepx*2 + '%, rgb(240, 240, 240)' + jeepx*2 +'%)';
    jeepslider.style.background = jeepcolor;
  })
});

