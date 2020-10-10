

var pxPacman,pyPacman, pzPacman, pacCounter,rPacman, vPacman,pacDir;
var pxGhost1, pyGhost1, pzGhost1,ghost1Dir, rGhost,vGhost;
var pxGhost2, pyGhost2, pzGhost2,ghost2Dir;
var pxGhost3, pyGhost3, pzGhost3,ghost3Dir;

function pacmanInit(){
    pxPacman=165;
    pyPacman=5;
    pzPacman=-108;
    rPacman=6.35;
    pacCounter=0;
    vPacman=0.4;
    pacDir="Left"; //starting direction
}

function ghostsInit(){
    pxGhost1=0;
    pyGhost1=1;
    pzGhost1=-110;

    pxGhost2=0;
    pyGhost2=1;
    pzGhost2=-110;

    pxGhost3=0;
    pyGhost3=1;
    pzGhost3=-110;

    rGhost=5;
    vGhost=0.3;
    ghost1Dir="Up";//starting direction
    ghost2Dir="Up";
    ghost3Dir="Up";

}

function randomNumber(min, max) {  //returns a random number between an interval
    return Math.floor(Math.random() * (max - min) + min); 
}
function randomDirection(directions) { //returns a random direction given a directions array.
    return directions[randomNumber(0,directions.length)];
}
function deleteFromDirections(dir,directions){
    let newDirections=[];
    for(let i=0; i< directions.length;i++){
        if(directions[i]!=dir)
            newDirections.push(directions[i]);
    }
    return newDirections;
}  
function findDirection(directions,px,pz,r,v){
    let found=false;
    let direction;
    while(!found){
        direction= randomDirection(directions);
        switch(direction){
            case "Up": 
                if( !crash(px,pz-r-v) && onMaze(px,pz-r-v) ){
                    pz -= v;
                    found=true;
                }
            break;
            case "Down":
                if( !crash(px,pz+r+v) && onMaze(px,pz+r+v)){
                    pz += v;
                    found=true;
                }
            break;
            case "Right":
                if( !crash(px+r+v,pz) && onMaze(px+r+v,pz)){
                    px += v;
                    found=true;
                }
            break;
            case "Left":
                if( !crash(px-r-v,pz) && onMaze(px-r-v,pz)){
                    px -= v;
                    found=true;
                }
            break;
        }
        directions=deleteFromDirections(direction,directions);
    }
    return [px,pz,direction];
}

function nextMove(dir,px,pz,r,v){
    let findRes= null;
    switch(dir){
        case "Up": 
            if( !crash(px,pz-r-v) && onMaze(px,pz-r-v) ){
                pz -= v;
            }
            else
                findRes=findDirection(["Left","Right"],px,pz,r,v);
                
        break;
        case "Down":
            if( !crash(px,pz+r+v) && onMaze(px,pz+r+v)){
                pz += v;
            }
            else
                findRes=findDirection(["Left","Right"],px,pz,r,v);
        break;
        case "Right":
            if( !crash(px+r+v,pz) && onMaze(px+r+v,pz)){
                px += v;
            }
            else
                findRes=findDirection(["Down","Up"],px,pz,r,v);
        break;
        case "Left":
            if( !crash(px-r-v,pz) && onMaze(px-r-v,pz)){
                px -= v;
            }
            else
                findRes=findDirection(["Up","Down"],px,pz,r,v);
        break;
    }
    if(findRes!=null){
        px=findRes[0];
        pz=findRes[1];
        dir=findRes[2];
    }

    return [px,pz,dir];

}
function rotateByDir(direction){
    switch(direction){
        case "Up":
        break;
        case "Down":
            u_world= m4.yRotate(u_world, degToRad(180));
        break;
        case "Right":
            u_world= m4.yRotate(u_world, degToRad(-90));
        break;
        case "Left":
            u_world= m4.yRotate(u_world, degToRad(90));
        break;
    }

}

function eaten(px,pz){
    return((px< pxPacman+rPacman && px> pxPacman-rPacman && pz < pzPacman +rPacman && pz > pzPacman -rPacman ) ||
           (px< pxGhost1+rGhost && px> pxGhost1-rGhost && pz < pzGhost1 +rGhost && pz > pzGhost1 -rGhost ) ||
           (px< pxGhost2+rGhost && px> pxGhost2-rGhost && pz < pzGhost2 +rGhost && pz > pzGhost2 -rGhost ) ||
           (px< pxGhost3+rGhost && px> pxGhost3-rGhost && pz < pzGhost3 +rGhost && pz > pzGhost3 -rGhost ) )
 }

function pacmanRender(){

    
	u_world= m4.identity();
    let move=nextMove(pacDir,pxPacman,pzPacman,rPacman,vPacman);
    pxPacman=move[0];
    pzPacman=move[1];
    pacDir= move[2];

    u_world= m4.translate(u_world,pxPacman,pyPacman,pzPacman);
    rotateByDir(pacDir);    
    u_world= m4.scale(u_world,1.6,1.6,1.6);

    if(pacCounter>=0 && pacCounter<=4){
    	pacCounter++;
    	drawObject("pacmanOpen");
    }
    else if(pacCounter>4 && pacCounter<=8){
    	pacCounter++;
    	drawObject("pacmanOpen2");
    }
    else if(pacCounter>8 && pacCounter<=12){
    	pacCounter++;
    	drawObject("pacmanOpen3");
    }
    else if(pacCounter>12 && pacCounter<16){
    	pacCounter++;
    	drawObject("pacmanClose");	
    }
    else{
		drawObject("pacmanClose");	
    	pacCounter=0;
    } 	
    
}

function ghost1Render(){

    u_world= m4.identity();
    let move= nextMove(ghost1Dir,pxGhost1,pzGhost1,rGhost,vGhost); 
    pxGhost1=move[0];
    pzGhost1=move[1];
    ghost1Dir= move[2];

    u_world= m4.translate(u_world,pxGhost1,pyGhost1,pzGhost1);
    rotateByDir(ghost1Dir);   

    u_world= m4.scale(u_world,0.4,0.4,0.4);
    drawObject("ghost1");
}
function ghost2Render(){

    u_world= m4.identity();
    let move= nextMove(ghost2Dir,pxGhost2,pzGhost2,rGhost,vGhost); 
    pxGhost2=move[0];
    pzGhost2=move[1];
    ghost2Dir= move[2];

    u_world= m4.translate(u_world,pxGhost2,pyGhost2,pzGhost2);
    rotateByDir(ghost2Dir);   

    u_world= m4.scale(u_world,0.4,0.4,0.4);
    drawObject("ghost2");
}
function ghost3Render(){

    u_world= m4.identity();
    let move= nextMove(ghost3Dir,pxGhost3,pzGhost3,rGhost,vGhost); 
    pxGhost3=move[0];
    pzGhost3=move[1];
    ghost3Dir= move[2];

    u_world= m4.translate(u_world,pxGhost3,pyGhost3,pzGhost3);
    rotateByDir(ghost3Dir);   

    u_world= m4.scale(u_world,0.4,0.4,0.4);
    drawObject("ghost3");
}
