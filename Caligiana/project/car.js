

var px, py, pz, facing; // posizione e orientamento
var mozzo, sterzo; // stato interno
var vx, vy, vz; // velocita' attuale

// queste di solito rimangono costanti
var velSterzo, velRitornoSterzo, accMax, attrito,front,back,
  grip, raggio, skill, carName,
  attritoX, attritoY, attritoZ; 
var key;
var crashed;
var fly;


function CarDoStep() {

  var vxm, vym, vzm; // velocita' in spazio macchina

  // da vel frame mondo a vel frame macchina
  var cosf = Math.cos(facing * Math.PI / 180.0);
  var sinf = Math.sin(facing * Math.PI / 180.0);
  vxm = +cosf * vx - sinf * vz;
  vym = vy;
  vzm = +sinf * vx + cosf * vz;

  // gestione dello sterzo
  if(crashed){
    if (key[1]) sterzo -= velSterzo;
    if (key[3]) sterzo += velSterzo;
    if (key[0]) vzm += accMax; // accelerazione in avanti
    if (key[2]) vzm -= accMax; // accelerazione indietro
  }
  else{
    if (key[1]) sterzo += velSterzo;
    if (key[3]) sterzo -= velSterzo;
  

    if (key[0]) vzm -= accMax; // accelerazione in avanti
    if (key[2]) vzm += accMax; // accelerazione indietro
  }
  sterzo *= velRitornoSterzo; // ritorno a volante fermo


  switch(carName){
    case "bugatti":
      if(key[3] || key[1]){
        attritoX = 0.96; //derapata
      }
      else if(!key[3] || !key[1]){
        attritoX=0.8;// fine derapata
      }
    break;
    case "fastcar":
      if(key[3] || key[1]){
        if(velSterzo<6){ //aumento a poco a poco la velocità di sterzo (fino a 6) man mano che curvo, per attivare il 360.
          velSterzo = velSterzo +0.06;
        }
        else{ //attivata l'abilità si introduce un po' di derapata per migliorare l'effetto 360.
          grip=0.9;
          attritoX=0.96;
        }
         
      }
      else if(!key[3] || !key[1]){
        velSterzo = 1.2; 
        grip=0.6;
        attritoX=0.8; 
      }
      break;
      default:
  }

  // attriti (semplificando)
  vxm *= attritoX;
  vym *= attritoY;
  vzm *= attritoZ;

  // l'orientamento della macchina segue quello dello sterzo
  // (a seconda della velocita' sulla z)

  facing = facing - (vzm * grip) * sterzo;
  

  // rotazione mozzo ruote (a seconda della velocita' sulla z)
  var da; //delta angolo
  da = (180.0 * vzm) / (Math.PI * raggio);
  if(!crashed)
    mozzo += da;
  else
    mozzo -= da;

  // ritorno a vel coord mondo
  vx = +cosf * vxm + sinf * vzm;
  vy = vym;
  vz = -sinf * vxm + cosf * vzm;

  // posizione = posizione + velocita * delta t (ma e' delta t costante)
  if(!crashed){
    px += vx;
    py += vy;
    pz += vz;
  }
  else{
    if(timeCrash<=12 ){
      
      px -= vx;
      py -= vy;
      pz -= vz;
      timeCrash++;
    }
    else{
      timeCrash=0;
      crashed=false;
      vx=0;
      vy=0;
      vz=0;
    }   
  }

}

function setFeatures(type){
  switch(type){
    case 0:
      carName="bugatti";
      accMax = 0.0065; //drift king 
      velSterzo = 1.2;  
      grip = 0.45; // quanto il facing macchina si adegua velocemente allo sterzo
      attritoX = 0.8;
      skill = "Drift King";
          
      front= [1.7,2.4];
      back= [1.7,3.6];

      break;

    case 1: // 360 bornout

      carName="fastcar";
      accMax = 0.0055;
      velSterzo = 1.1;  
      grip = 0.6; 
      attritoX = 0.8;  // grande attrito sulla X (per non fare slittare la macchina)
      skill="360 Bornout";

      front= [1.3,3.6];
      back= [1.3,3.4];

      break;
    case 2:
      carName="flycar";
      accMax = 0.0050; // shuttle thrusters
      velSterzo = 9.0;  
      grip = 0.1; // quanto il facing macchina si adegua velocemente allo sterzo
      attritoX = 0.8;  // grande attrito sulla X (per non fare slittare la macchina)
      skill= "Shuttle thrusters";


      front= [0.5,3.14];
      back= [0.6,3.14];
      fly=0.4;
      break;
    default:
  }
  printCarFeatures(type);
}

function carInit(type) {
  // inizializzo lo stato della macchina
  px = py = pz = facing = 0; // posizione e orientamento
  mozzo = sterzo = 0;   // stato
  vx = vy = vz = 0;      // velocita' attuale
  // inizializzo la struttura di controllo
  key = [false, false, false, false];
  crashed=false;
  timeCrash=0;
  //       // A
  //velSterzo = 1;       // A
  velRitornoSterzo = 0.93; // B, sterzo massimo = A*B / (1-B)

  //accMax = 0.0011;
  

  // attriti: percentuale di velocita' che viene mantenuta
  // 1 = no attrito
  // <<1 = attrito grande
  attritoZ = 0.991;  // piccolo attrito sulla Z (nel senso di rotolamento delle ruote)
  attritoY = 1.0;  // attrito sulla y nullo

  // Nota: vel max = accMax*attritoZ / (1-attritoZ)
  raggio = 0.40
  /*   raggioRuotaA = 0.25;
    raggioRuotaP = 0.30; */
  setFeatures(type);
  
}

function printCarFeatures(type){
  //da stampare quando si mostrano le macchine.
  
  ctx.fillStyle = 'white';
  ctx.fillText('-Skill: ' + skill, 624, 210);
  ctx.fillText('-Speed: ' + (accMax *1000).toFixed(1) , 624, 230);
  ctx.fillText("-Steering Rate: "+ velSterzo.toFixed(1), 624, 250);
  ctx.fillText('-Grip: ' + grip.toFixed(1), 624, 270);
  if(start){
    switch(carName){
      case "bugatti":
        ctx.fillText('Special Skill:', 4, 210);
        ctx.fillText('hold down A or D', 4, 230);
        ctx.fillText('while driving', 4, 250);
        ctx.fillText('to start drifting.', 4, 270); 
        break;
      case "fastcar":
        ctx.fillText('Special Skill:', 4, 210);
        ctx.fillText('hold down A or D', 4, 230);
        ctx.fillText('while driving', 4, 250);
        ctx.fillText('to do 360 bornouts.', 4, 270); 
        break;
      case "flycar":
        ctx.fillText('Special Skill:', 4, 220);
        ctx.fillText('you can fly', 4, 240);
        ctx.fillText('through the galaxy.', 4, 260); 
        break;
      }
  }
  

  ctx.font = '16pt times';

}

// disegna Car
function carRender(allowed_movement) {

  if(allowed_movement){

    u_world = m4.identity(); 
  }
  //Car space 

  
  u_world = m4.translate(u_world, px, py, pz);
  u_world = m4.yRotate(u_world, degToRad(facing));
  if(allowed_movement){
    if(carName=="bugatti" )//adjust car size
      u_world=m4.scale(u_world,0.6,0.6,0.6);
    if(carName=="fastcar" ){//adjust car size/position
      u_world=m4.scale(u_world,0.8,0.8,0.8);
      u_world=m4.translate(u_world,0,0.1,0);
    }
    if(carName=="flycar" )//adjust car position
      u_world = m4.translate(u_world, 0.28, fly, 0);
    
  }
  drawObject(carName);

  switch(carName){

    case "bugatti":

      u_world1= u_world;
      // Back Right wheel
      u_world = m4.translate(u_world, 3.1, 0.8, 4.1);
      u_world = m4.translate(u_world, -0.58, +raggio - 0.28, +0.8);
      u_world = m4.xRotate(u_world, degToRad(mozzo));
      drawObject("bugattiWheel");
      // Front Right wheel
      u_world= u_world1;
      u_world = m4.translate(u_world, 3.1, 0.8, -3.7);
      u_world = m4.translate(u_world, -0.58, +raggio - 0.28, +0.8);
      u_world = m4.yRotate(u_world, degToRad(sterzo));
      u_world = m4.xRotate(u_world, degToRad(mozzo));
      drawObject("bugattiWheel");

      // Back left wheel
      u_world= u_world1;
      u_world = m4.translate(u_world, -2, 0.8, 4.1);
      u_world = m4.translate(u_world, -0.58, +raggio - 0.28, +0.8);
      u_world = m4.yRotate(u_world, degToRad(180));
      u_world = m4.xRotate(u_world, degToRad(-mozzo));
      drawObject("bugattiWheel");

      // Front left wheel
      u_world= u_world1;
      u_world = m4.translate(u_world, -2, 0.8, -3.7);
      u_world = m4.translate(u_world, -0.58, +raggio - 0.28, +0.8);
      u_world = m4.yRotate(u_world, degToRad(+sterzo));
      u_world = m4.yRotate(u_world, degToRad(180));
      u_world = m4.xRotate(u_world, degToRad(-mozzo));
      drawObject("bugattiWheel");

      break;
    case "fastcar":

      u_world1= u_world;
      // Back Right wheel
      u_world = m4.translate(u_world, 2.45, 0.4, 2.4);
      u_world = m4.translate(u_world, -0.58, +raggio - 0.28, +0.8);
      u_world = m4.xRotate(u_world, degToRad(mozzo));
      drawObject("fastcarBackWheel");
      // Front Right wheel
      u_world= u_world1;
      u_world = m4.translate(u_world, 2.45, 0.4, -3.5);
      u_world = m4.translate(u_world, -0.58, +raggio - 0.28, +0.8);
      u_world = m4.yRotate(u_world, degToRad(sterzo));
      u_world = m4.xRotate(u_world, degToRad(mozzo));
      drawObject("fastcarFrontWheel");

      // Back left wheel
      u_world= u_world1;
      u_world = m4.translate(u_world, -1.25, 0.4, 2.4);
      u_world = m4.translate(u_world, -0.58, +raggio - 0.28, +0.8);
      u_world = m4.yRotate(u_world, degToRad(180));
      u_world = m4.xRotate(u_world, degToRad(-mozzo));
      drawObject("fastcarBackWheel");

      // Front left wheel
      u_world= u_world1;
      u_world = m4.translate(u_world, -1.25, 0.4, -3.5);
      u_world = m4.translate(u_world, -0.58, +raggio - 0.28, +0.8);
      u_world = m4.yRotate(u_world, degToRad(+sterzo));
      u_world = m4.yRotate(u_world, degToRad(180));
      u_world = m4.xRotate(u_world, degToRad(-mozzo));
      drawObject("fastcarFrontWheel"); 

      break;
    case "flycar":
     

      break;
    default:
    }
 

}
