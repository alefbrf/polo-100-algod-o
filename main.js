document.getElementById('base').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
  document.getElementById("h22").innerHTML = "Base";
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletebaselabel').style.display = "block";
}
else{document.getElementById("h22").innerHTML = "Cores da Base";}
});

document.getElementById('gola1').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
  document.getElementById("h22").innerHTML = "Gola Externa";
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletebaselabel').style.display = "block";}
  else{
      document.getElementById("h22").innerHTML = "Cores da Gola Externa";
  }
});
document.getElementById('punho').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Punho";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores do Punho";
      }
});
document.getElementById('vista').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Manga";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores da Manga";
      }
});
document.getElementById('botoes').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Botões";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores dos Botões";
      }
});
document.getElementById('gola2').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Gola Interna";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores da Gola Interna";
      }
});
document.getElementById('vista1').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Carcela 1";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores da Carcela 1";
      }
});
document.getElementById('bolsobtn').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Carcela 2";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores da Carcela 2";
      }
});


  document.getElementById('cor1').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#fff";
        document.getElementById('corbasecostas').style.fill = "#fff";
        document.getElementById('CB').style.backgroundColor = "#fff";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#fff";
        document.getElementById('ge').style.backgroundColor = "#fff";
        document.getElementById('golaEE').style.fill = "#fff";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#fff";
        document.getElementById('punho1').style.fill = "#fff";
        document.getElementById('punho3').style.fill = "#fff";
        document.getElementById('punho4').style.fill = "#fff";
        document.getElementById('PU').style.backgroundColor = "#fff";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#fff");
        document.getElementById('manga1').style.fill = "#fff";
        document.getElementById('VE').style.backgroundColor = "#fff";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#fff";
        document.getElementById('BT').style.backgroundColor = "#fff";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#fff";
        document.getElementById('gi').style.backgroundColor = "#fff";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#fff";
        document.getElementById('VD').style.backgroundColor = "#fff";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#fff";
        document.getElementById('BSF').style.backgroundColor = "#fff";
    }
      });
    document.getElementById('cor2').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#b1a5a2";
        document.getElementById('corbasecostas').style.fill = "#b1a5a2";
        document.getElementById('CB').style.backgroundColor = "#b1a5a2";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#b1a5a2";
        document.getElementById('ge').style.backgroundColor = "#b1a5a2";
        document.getElementById('golaEE').style.fill = "#b1a5a2";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#b1a5a2";
        document.getElementById('punho1').style.fill = "#b1a5a2";
        document.getElementById('punho3').style.fill = "#b1a5a2";
        document.getElementById('punho4').style.fill = "#b1a5a2";
        document.getElementById('PU').style.backgroundColor = "#b1a5a2";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#b1a5a2");
        document.getElementById('manga1').style.fill = "#b1a5a2";
        document.getElementById('VE').style.backgroundColor = "#b1a5a2";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#b1a5a2";
        document.getElementById('BT').style.backgroundColor = "#b1a5a2";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#b1a5a2";
        document.getElementById('gi').style.backgroundColor = "#b1a5a2";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#b1a5a2";
        document.getElementById('VD').style.backgroundColor = "#b1a5a2";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#b1a5a2";
        document.getElementById('BSF').style.backgroundColor = "#b1a5a2";
    }
      });
  document.getElementById('cor3').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#d99e02";
        document.getElementById('corbasecostas').style.fill = "#d99e02";
        document.getElementById('CB').style.backgroundColor = "#d99e02";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#d99e02";
        document.getElementById('ge').style.backgroundColor = "#d99e02";
        document.getElementById('golaEE').style.fill = "#d99e02";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#d99e02";
        document.getElementById('punho1').style.fill = "#d99e02";
        document.getElementById('punho3').style.fill = "#d99e02";
        document.getElementById('punho4').style.fill = "#d99e02";
        document.getElementById('PU').style.backgroundColor = "#d99e02";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#d99e02");
        document.getElementById('manga1').style.fill = "#d99e02";
        document.getElementById('VE').style.backgroundColor = "#d99e02";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#d99e02";
        document.getElementById('BT').style.backgroundColor = "#d99e02";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#d99e02";
        document.getElementById('gi').style.backgroundColor = "#d99e02";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#d99e02";
        document.getElementById('VD').style.backgroundColor = "#d99e02";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#d99e02";
        document.getElementById('BSF').style.backgroundColor = "#d99e02";
    }
      });
  document.getElementById('cor4').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#bc0008";
        document.getElementById('corbasecostas').style.fill = "#bc0008";
        document.getElementById('CB').style.backgroundColor = "#bc0008";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#bc0008";
        document.getElementById('ge').style.backgroundColor = "#bc0008";
        document.getElementById('golaEE').style.fill = "#bc0008";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#bc0008";
        document.getElementById('punho1').style.fill = "#bc0008";
        document.getElementById('punho3').style.fill = "#bc0008";
        document.getElementById('punho4').style.fill = "#bc0008";
        document.getElementById('PU').style.backgroundColor = "#bc0008";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#bc0008");
        document.getElementById('manga1').style.fill = "#bc0008";
        document.getElementById('VE').style.backgroundColor = "#bc0008";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#bc0008";
        document.getElementById('BT').style.backgroundColor = "#bc0008";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#bc0008";
        document.getElementById('gi').style.backgroundColor = "#bc0008";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#bc0008";
        document.getElementById('VD').style.backgroundColor = "#bc0008";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#bc0008";
        document.getElementById('BSF').style.backgroundColor = "#bc0008";
    }
      });
  document.getElementById('cor5').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#8f919c";
        document.getElementById('corbasecostas').style.fill = "#8f919c";
        document.getElementById('CB').style.backgroundColor = "#8f919c";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#8f919c";
        document.getElementById('ge').style.backgroundColor = "#8f919c";
        document.getElementById('golaEE').style.fill = "#8f919c";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#8f919c";
        document.getElementById('punho1').style.fill = "#8f919c";
        document.getElementById('punho3').style.fill = "#8f919c";
        document.getElementById('punho4').style.fill = "#8f919c";
        document.getElementById('PU').style.backgroundColor = "#8f919c";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#8f919c");
        document.getElementById('manga1').style.fill = "#8f919c";
        document.getElementById('VE').style.backgroundColor = "#8f919c";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#8f919c";
        document.getElementById('BT').style.backgroundColor = "#8f919c";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#8f919c";
        document.getElementById('gi').style.backgroundColor = "#8f919c";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#8f919c";
        document.getElementById('VD').style.backgroundColor = "#8f919c";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#8f919c";
        document.getElementById('BSF').style.backgroundColor = "#8f919c";
    }
      });
  document.getElementById('cor6').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#4e5260";
        document.getElementById('corbasecostas').style.fill = "#4e5260";
        document.getElementById('CB').style.backgroundColor = "#4e5260";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#4e5260";
        document.getElementById('ge').style.backgroundColor = "#4e5260";
        document.getElementById('golaEE').style.fill = "#4e5260";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#4e5260";
        document.getElementById('punho1').style.fill = "#4e5260";
        document.getElementById('punho3').style.fill = "#4e5260";
        document.getElementById('punho4').style.fill = "#4e5260";
        document.getElementById('PU').style.backgroundColor = "#4e5260";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#4e5260");
        document.getElementById('manga1').style.fill = "#4e5260";
        document.getElementById('VE').style.backgroundColor = "#4e5260";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#4e5260";
        document.getElementById('BT').style.backgroundColor = "#4e5260";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#4e5260";
        document.getElementById('gi').style.backgroundColor = "#4e5260";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#4e5260";
        document.getElementById('VD').style.backgroundColor = "#4e5260";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#4e5260";
        document.getElementById('BSF').style.backgroundColor = "#4e5260";
    }
      });
  document.getElementById('cor7').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#00694c";
        document.getElementById('corbasecostas').style.fill = "#00694c";
        document.getElementById('CB').style.backgroundColor = "#00694c";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#00694c";
        document.getElementById('ge').style.backgroundColor = "#00694c";
        document.getElementById('golaEE').style.fill = "#00694c";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#00694c";
        document.getElementById('punho1').style.fill = "#00694c";
        document.getElementById('punho3').style.fill = "#00694c";
        document.getElementById('punho4').style.fill = "#00694c";
        document.getElementById('PU').style.backgroundColor = "#00694c";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#00694c");
        document.getElementById('manga1').style.fill = "#00694c";
        document.getElementById('VE').style.backgroundColor = "#00694c";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#00694c";
        document.getElementById('BT').style.backgroundColor = "#00694c";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#00694c";
        document.getElementById('gi').style.backgroundColor = "#00694c";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#00694c";
        document.getElementById('VD').style.backgroundColor = "#00694c";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#00694c";
        document.getElementById('BSF').style.backgroundColor = "#00694c";
    }
      });
  document.getElementById('cor8').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#3a70ad";
        document.getElementById('corbasecostas').style.fill = "#3a70ad";
        document.getElementById('CB').style.backgroundColor = "#3a70ad";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#3a70ad";
        document.getElementById('ge').style.backgroundColor = "#3a70ad";
        document.getElementById('golaEE').style.fill = "#3a70ad";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#3a70ad";
        document.getElementById('punho1').style.fill = "#3a70ad";
        document.getElementById('punho4').style.fill = "#3a70ad";
        document.getElementById('punho3').style.fill = "#3a70ad";
        document.getElementById('PU').style.backgroundColor = "#3a70ad";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#3a70ad");
        document.getElementById('manga1').style.fill = "#3a70ad";
        document.getElementById('VE').style.backgroundColor = "#3a70ad";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#3a70ad";
        document.getElementById('BT').style.backgroundColor = "#3a70ad";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#3a70ad";
        document.getElementById('gi').style.backgroundColor = "#3a70ad";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#3a70ad";
        document.getElementById('VD').style.backgroundColor = "#3a70ad";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#3a70ad";
        document.getElementById('BSF').style.backgroundColor = "#3a70ad";
    }
      });
  document.getElementById('cor9').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#00197d";
        document.getElementById('corbasecostas').style.fill = "#00197d";
        document.getElementById('CB').style.backgroundColor = "#00197d";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#00197d";
        document.getElementById('ge').style.backgroundColor = "#00197d";
        document.getElementById('golaEE').style.fill = "#00197d";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#00197d";
        document.getElementById('punho1').style.fill = "#00197d";
        document.getElementById('punho3').style.fill = "#00197d";
        document.getElementById('punho4').style.fill = "#00197d";
        document.getElementById('PU').style.backgroundColor = "#00197d";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#00197d");
        document.getElementById('manga1').style.fill = "#00197d";
        document.getElementById('VE').style.backgroundColor = "#00197d";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#00197d";
        document.getElementById('BT').style.backgroundColor = "#00197d";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#00197d";
        document.getElementById('gi').style.backgroundColor = "#00197d";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#00197d";
        document.getElementById('VD').style.backgroundColor = "#00197d";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#00197d";
        document.getElementById('BSF').style.backgroundColor = "#00197d";
    }
      });
  document.getElementById('cor10').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#020311";
        document.getElementById('corbasecostas').style.fill = "#020311";
        document.getElementById('CB').style.backgroundColor = "#020311";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#020311";
        document.getElementById('ge').style.backgroundColor = "#020311";
        document.getElementById('golaEE').style.fill = "#020311";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#020311";
        document.getElementById('punho1').style.fill = "#020311";
        document.getElementById('punho3').style.fill = "#020311";
        document.getElementById('punho4').style.fill = "#020311";
        document.getElementById('PU').style.backgroundColor = "#020311";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#020311");
        document.getElementById('manga1').style.fill = "#020311";
        document.getElementById('VE').style.backgroundColor = "#020311";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#020311";
        document.getElementById('BT').style.backgroundColor = "#020311";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#020311";
        document.getElementById('gi').style.backgroundColor = "#020311";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#020311";
        document.getElementById('VD').style.backgroundColor = "#020311";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#020311";
        document.getElementById('BSF').style.backgroundColor = "#020311";
    }
      });
  document.getElementById('cor11').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#000";
        document.getElementById('corbasecostas').style.fill = "#000";
        document.getElementById('CB').style.backgroundColor = "#000";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#000";
        document.getElementById('ge').style.backgroundColor = "#000";
        document.getElementById('golaEE').style.fill = "#000";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#000";
        document.getElementById('punho1').style.fill = "#000";
        document.getElementById('punho3').style.fill = "#000";
        document.getElementById('punho4').style.fill = "#000";
        document.getElementById('PU').style.backgroundColor = "#000";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#000");
        document.getElementById('manga1').style.fill = "#000";
        document.getElementById('VE').style.backgroundColor = "#000";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#000";
        document.getElementById('BT').style.backgroundColor = "#000";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#000";
        document.getElementById('gi').style.backgroundColor = "#000";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#000";
        document.getElementById('VD').style.backgroundColor = "#000";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#000";
        document.getElementById('BSF').style.backgroundColor = "#000";
    }
      });

  //bolso on/off
  const bolsoligadesliga = document.getElementById('switch-shadow');
  bolsoligadesliga.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow').checked){
      document.getElementById('bolsofrente').style.visibility = "visible";
    }else {
      document.getElementById('bolsofrente').style.visibility = "hidden";
    }
  });

  document.getElementById('switch-shadow3').addEventListener('click', function(e){
    if(document.getElementById('switch-shadow3').checked){
      document.querySelector('.costas3').style.display = "none";
      document.querySelector('.costaslonga').style.display = "block";
      document.querySelector('.costas5').style.display = "block";
      document.getElementById('manga1').style.display = "none";
      document.getElementById('manga').style.display = "none";
      document.querySelector('.frente4').style.display = "block";
      document.querySelector('.frente3').style.display = "none";
      document.querySelector('.costas4').style.display = "block";
      document.getElementById('punho1').style.display = "none";
      document.getElementById('punho2').style.display = "none";
      document.querySelector('.frente5').style.display = "block";
      document.querySelector('.frente6').style.display = "block";
    }else {
      document.querySelector('.costas3').style.display = "block";
      document.querySelector('.costaslonga').style.display = "none";
      document.querySelector('.costas5').style.display = "none";
      document.getElementById('manga1').style.display = "block";
      document.getElementById('manga').style.display = "block";
      document.querySelector('.frente4').style.display = "none";
      document.querySelector('.frente3').style.display = "block";
      document.querySelector('.costas4').style.display = "none";
      document.getElementById('punho1').style.display = "block";
      document.getElementById('punho2').style.display = "block";
      document.querySelector('.frente5').style.display = "none";
      document.querySelector('.frente6').style.display = "none";
    }
  });


  // download
$(document).ready(function(){
  $("#download").click(function(){
    domtoimage.toBlob(document.getElementById('social_masculino')).then(function(blob){
      window.saveAs(blob, "polo.png");
      
    })
  })
 });

//upload
var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var imga = document.createElement('img');
imga.src = deleteIcon;

var canvas = new fabric.Canvas('list');
let uploader = document.getElementById("uploader");
uploader.addEventListener('change',function(e){
var reader = new FileReader();
reader.onload = function(e) {
var image = new Image();
image.src = e.target.result;
image.onload = function() {
  var img = new fabric.Image(image);
  img.set({
    left: 100,
    top: 60
  });
  img.scaleToWidth(200);
  canvas.add(img).setActiveObject(img).renderAll();
  }
}
reader.readAsDataURL(e.target.files[0]);
setTimeout(() => {
document.getElementById("uploader").value = "";
}, 1)
});
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
x: 0.5,
y: -0.5,
offsetY: 16,
cursorStyle: 'pointer',
mouseUpHandler: deleteObject,
render: renderIcon,
cornerSize: 24
});


function deleteObject(eventData, transform) {
    var target = transform.target;
    var canvas = target.canvas;
        canvas.remove(target);
    canvas.requestRenderAll();
};

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
var size = this.cornerSize;
ctx.save();
ctx.translate(left, top);
ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
ctx.drawImage(imga, -size/2, -size/2, size, size);
ctx.restore();
};


///////////Responsivo
///////Celular
const lado = document.getElementById('switch-shadow2');
  lado.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow2').checked){
      document.getElementById('frente').style.display = "none";
      document.getElementById('costas').style.visibility = "visible";
    }else {
      document.getElementById('frente').style.display = "block";
      document.getElementById('costas').style.visibility = "hidden" ;
    }
  });


function sizeOfThings() {
    if (window.innerWidth > 768){
        document.getElementById('costas').style.visibility = "visible";
        document.getElementById('frente').style.visibility = "visible";
        document.getElementById('acabamentos').style.display = "block";
        document.getElementById('cores').style.visibility = "visible";
    }else{
        document.getElementById('costas').style.visibility = "hidden";
        document.getElementById('acabamentos').style.display = "none";
        document.getElementById('cores').style.visibility = "hidden";
    }
 };
window.addEventListener('resize', function(){
	sizeOfThings();
});
 

document.getElementById('btnacabalabel').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "block";
  document.getElementById('deletelabel').style.display = "block";
  document.getElementById('cores').style.visibility = "hidden";
})

document.getElementById('deleteb').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('deletebase').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocor').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('deletebaselabel').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
