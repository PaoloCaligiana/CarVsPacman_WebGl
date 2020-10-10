
var coins= [];
var coinRender;
var obstacles=[];
var c, rCoin;
var totalCoins;
var onGalaxy;

function obstaclesInit() {
    //All maze blocks are numbered from top to bottom, in order to be repositioned in case of failure.
    //1-2 
    obstacles.push({
        xRange: [164.6,170], 
        zRange: [-204,-114.8]
    });
    obstacles.push({
        xRange: [164.6,170], 
        zRange: [-101.8,4]
    });
    //3-6
    obstacles.push({
        xRange: [132,151.2], 
        zRange: [-185.8,-172.6]
    });
    obstacles.push({
        xRange: [132,151.2], 
        zRange: [-160,-153.5]
    });
    obstacles.push({
        xRange: [132,170], 
        zRange: [-140.5,-114.8]
    });
    obstacles.push({
        xRange: [132,170], 
        zRange: [-101.8,-76]
    });
    //7-11
    obstacles.push({
        xRange: [93.4,119.2], 
        zRange: [-185.8,-172.6]
    });
    obstacles.push({
        xRange: [113,119.2], 
        zRange: [-160,-114.8]
    });
    obstacles.push({
        xRange: [113,119.2], 
        zRange: [-101.8,-76]
    });
    obstacles.push({
        xRange: [113,119.2], 
        zRange: [-43.6,-24]
    });
    obstacles.push({
        xRange: [93.4,151.2], 
        zRange: [-24,-18]
    });
    //12-22
    obstacles.push({
        xRange: [74.2,80.7], 
        zRange: [-198.5,-172.6]
    });
    obstacles.push({
        xRange: [54.7,100], 
        zRange: [-160,-153.5]
    });
    obstacles.push({
        xRange: [74.2,80.7], 
        zRange: [-153.5,-134]
    });
    obstacles.push({
        xRange: [93.4,100], 
        zRange: [-140.5,-114.8]
    });
    obstacles.push({
        xRange: [54.7,80.7],
        zRange: [-121.2,-114.8]
    });
    obstacles.push({
        xRange: [74.2,80.7], 
        zRange: [-114.8,-101.8]
    });
    obstacles.push({
        xRange: [74.2,100],
        zRange: [-101.8,-95.4]
    });
    obstacles.push({
        xRange: [54.7,100],
        zRange: [-82,-76]
    });
    obstacles.push({
        xRange: [74.2,80.7],
        zRange: [-76,-56.2]
    });
    obstacles.push({
        xRange: [54.7,100],
        zRange: [-43.6,-35.9]
    });
    obstacles.push({
        xRange: [74.2,80.7],
        zRange: [-35.9,-18]
    });
    //23-30
    obstacles.push({
        xRange: [15.9,60.9],
        zRange: [-185.8,-172.6]
    });
    obstacles.push({
        xRange: [35.2,41.5],
        zRange: [-160,-114.8]
    });
    obstacles.push({
        xRange: [15.9,60.9],
        zRange: [-140.5,-134]
    });
    obstacles.push({
        xRange: [35.2,60.9],
        zRange: [-101.8,-95.4]
    });
    obstacles.push({
        xRange: [35.2,41.5],
        zRange: [-95.4,-76]
    });
    obstacles.push({
        xRange: [15.9,60.9],
        zRange: [-63,-56.2]
    });
    obstacles.push({
        xRange: [35.2,41.5],
        zRange: [-43.6,-18]
    });
    obstacles.push({
        xRange: [15.9,60.9],
        zRange: [-24,-18]
    });
    //31-42
    obstacles.push({
        xRange: [-3.2,3.2],
        zRange: [-204,-172.6]
    });
    obstacles.push({
        xRange: [-22.6,22.6],
        zRange: [-160,-153.5]
    });
    obstacles.push({
        xRange: [-3.2,3.2],
        zRange: [-153.5,-134]
    });
    obstacles.push({
        xRange: [-22.6,-6.5],
        zRange: [-121.2,-117.5]
    });
    obstacles.push({
        xRange: [6.5,22.6],
        zRange: [-121.2,-117.5]
    });
    obstacles.push({
        xRange: [-22.6,-19.5],
        zRange: [-117.5,-95.4]
    });
    obstacles.push({
        xRange: [19.1,22.6],
        zRange: [-117.5,-95.4]
    });
    obstacles.push({
        xRange: [-22.6,22.6],
        zRange: [-98.8,-95.4]
    });
    obstacles.push({
        xRange: [-22.6,22.6],
        zRange: [-82,-76]
    });
    obstacles.push({
        xRange: [-3.2,3.2],
        zRange: [-76,-56.2]
    });
    obstacles.push({
        xRange: [-22.6,22.6],
        zRange: [-43.6,-37]
    });
    obstacles.push({
        xRange: [-3.2,3.2],
        zRange: [-35.9,-18]
    });
    //43-50
    obstacles.push({
        xRange: [-62.1,-16.3],
        zRange: [-185.8,-172.6]
    });
    obstacles.push({
        xRange: [-41.9,-35.7],
        zRange: [-160,-114.8]
    });
    obstacles.push({
        xRange: [-62.1,-16.3],
        zRange: [-140.5,-134]
    });
    obstacles.push({
        xRange: [-62.1,-35.7],
        zRange: [-101.8,-95.4]
    });
    obstacles.push({
        xRange: [-41.9,-35.7],
        zRange: [-101.8,-76]
    });
    obstacles.push({
        xRange: [-62.1,-16.3],
        zRange: [-63,-56.2]
    });
    obstacles.push({
        xRange: [-41.9,-35.7],
        zRange: [-43.6,-18]
    });
    obstacles.push({
        xRange: [-62.1,-16.3],
        zRange: [-24,-18]
    });
    //51-60
    obstacles.push({
        xRange: [-80.9,-74.6],
        zRange: [-204,-172.6]
    });
    obstacles.push({
        xRange: [-100.3,-55],
        zRange: [-160,-153.5]
    });
    obstacles.push({
        xRange: [-80.9,-74.6],
        zRange: [-160,-134]
    });
    obstacles.push({
        xRange: [-80.9,-74.6],
        zRange: [-121.2,-95.4]
    });
    obstacles.push({
        xRange: [-80.9,-55],
        zRange: [-121.2,-114.8]
    });
    obstacles.push({
        xRange: [-100.3,-74.6],
        zRange: [-101.8,-95.4]
    });
    obstacles.push({
        xRange: [-100.3,-55],
        zRange: [-82,-76]
    });
    obstacles.push({
        xRange: [-80.9,-74.6],
        zRange: [-82,-56.2]
    });
    obstacles.push({
        xRange: [-100.3,-55],
        zRange: [-43.6,-35.9]
    });
    obstacles.push({
        xRange: [-80.9,-74.6],
        zRange: [-43.6,-18]
    });
    //61-63
    obstacles.push({
        xRange: [-119.7,-93.8],
        zRange: [-185.8,-172.6]
    });
    obstacles.push({
        xRange: [-119.7,-113.6],
        zRange: [-43.6,-18]
    });
    obstacles.push({
        xRange: [-152,-93.8],
        zRange: [-24,-18]
    });
    //64-65
    obstacles.push({
        xRange: [-152,-132.5],
        zRange: [-185.8,-172.6]
    });
    obstacles.push({
        xRange: [-170,-132.5],
        zRange: [-140.5,-114.8]
    });
    //66
    obstacles.push({
        xRange: [-170,-164.6],
        zRange: [-204,-114.8]
    });
    //67
    obstacles.push({
        xRange: [-170,170],
        zRange: [-204,-198.5]
    });
    //statue
    obstacles.push({
        xRange: [-142,-129.5],
        zRange: [-76,-64]
    });


}
function crash(px,pz){
    for (let k = 0; k < obstacles.length; k++) {
        if(px >= obstacles[k].xRange[0] && px <= obstacles[k].xRange[1] &&
          pz >= obstacles[k].zRange[0] && pz <= obstacles[k].zRange[1])
          return true;
    }
    return false;
}
function onMaze(px,pz){
  return(px>-170 && px< 170 && pz>-204 && pz<4);
}



function checkMaze() {

    //Calculate the 4 control points, to detect car crashes

      //translate the front left car point to the origin.
      let frontLeftToOrigin = [px - front[0] - px, pz - front[1] - pz];      
      //rotate the front left car point.
      let frontLeftRotated = [frontLeftToOrigin[0] * Math.cos(degToRad(-facing)) - frontLeftToOrigin[1] * Math.sin(degToRad(-facing)),
      frontLeftToOrigin[0] * Math.sin(degToRad(-facing)) + frontLeftToOrigin[1] * Math.cos(degToRad(-facing))];
      // translate the point in its position.
      let frontLeft = [frontLeftRotated[0] + px, frontLeftRotated[1] + pz];


      //translate the front left car point to the origin.
      let frontRightToOrigin = [px + front[0] - px, pz - front[1] - pz];      
      //rotate the front left car point.
      let frontRightRotated = [frontRightToOrigin[0] * Math.cos(degToRad(-facing)) - frontRightToOrigin[1] * Math.sin(degToRad(-facing)),
      frontRightToOrigin[0] * Math.sin(degToRad(-facing)) + frontRightToOrigin[1] * Math.cos(degToRad(-facing))];
      // translate the point in its position.
      let frontRight = [frontRightRotated[0] + px, frontRightRotated[1] + pz];

      //translate the front left car point to the origin.
      let backRightToOrigin = [px + back[0] - px, pz + back[1] - pz];      
      //rotate the front left car point.
      let backRightRotated = [backRightToOrigin[0] * Math.cos(degToRad(-facing)) - backRightToOrigin[1] * Math.sin(degToRad(-facing)),
      backRightToOrigin[0] * Math.sin(degToRad(-facing)) + backRightToOrigin[1] * Math.cos(degToRad(-facing))];
      // translate the point in its position.
      let backRight = [backRightRotated[0] + px, backRightRotated[1] + pz];

      //translate the front left car point to the origin.
      let backLeftToOrigin = [px - back[0] - px, pz + back[1] - pz];      
      //rotate the front left car point.
      let backLeftRotated = [backLeftToOrigin[0] * Math.cos(degToRad(-facing)) - backLeftToOrigin[1] * Math.sin(degToRad(-facing)),
      backLeftToOrigin[0] * Math.sin(degToRad(-facing)) + backLeftToOrigin[1] * Math.cos(degToRad(-facing))];
      // translate the point in its position.
      let backLeft = [backLeftRotated[0] + px, backLeftRotated[1] + pz];


      
      //check if eaten
      if( eaten(px,pz) )// I prefer to check the car center despite of the 4 control points, in order to allow the car to slightly touch pacman and ghosts.
        return false;

      //check if on maze floor
      if( !onMaze(px,pz)){ // I prefer to check the car center despite of the 4 control points, in order to allow the car to cross the border a little bit.  
        if(carName=="flycar"){ //if flycar overcomes the maze bounds, it activates its skill and starts to fly through the galaxy.
            if(onGalaxy<=80)
                fly += 0.02;
            accMax= 0.008;
            onGalaxy++;
        }
        else
            return false;
      }
      else{
        if(fly>0.5)
            fly-= 0.02;
        if(carName=="flycar")
          accMax=0.005;
        onGalaxy=0;
      }
      //detect, thanks to the 4 control points, if the car crashes against the maze walls
      if( crash(frontLeft[0],frontLeft[1]) || crash(frontRight[0],frontRight[1]) 
        || crash(backLeft[0],backLeft[1]) || crash(backRight[0],backRight[1]) ){
        crashed=true;
      }

      if(totalCoins==0){
        win=true;
        return false;
      }
      return true;
}

function mazeInit(){
  coinRender=true;
  onGalaxy=0;
  c=0;
  rCoin=5;
  //coins added per row, starting from bottom to top.

  //1 row
  coins.push({
        render: coinRender,
        x: -40,
        y: 4,
        z: -10
  });
  coins.push({
        render: coinRender,
        x: 40,
        y: 4,
        z: -10
  });
  coins.push({
        render: coinRender,
        x: -80,
        y: 4,
        z: -10
  });
  coins.push({
        render: coinRender,
        x: 80,
        y: 4,
        z: -10
  });
  coins.push({
        render: coinRender,
        x: 120,
        y: 4,
        z: -10
  });
  coins.push({
        render: coinRender,
        x: -120,
        y: 4,
        z: -10
  });
  coins.push({
        render: coinRender,
        x: 160,
        y: 4,
        z: -10
  });
  coins.push({
        render: coinRender,
        x: -160,
        y: 4,
        z: -10
  });



  //2 row
  coins.push({
        render: coinRender,
        x: 16,
        y: 4,
        z: -30
  });
  coins.push({
        render: coinRender,
        x: -16,
        y: 4,
        z: -30
  });
  coins.push({
        render: coinRender,
        x: 56,
        y: 4,
        z: -30
  });
  coins.push({
        render: coinRender,
        x: -56,
        y: 4,
        z: -30
  });
  coins.push({
        render: coinRender,
        x: 96,
        y: 4,
        z: -30
  });
  coins.push({
        render: coinRender,
        x: -96,
        y: 4,
        z: -30
  });
  coins.push({
        render: coinRender,
        x: 136,
        y: 4,
        z: -30
  });
  coins.push({
        render: coinRender,
        x: -136,
        y: 4,
        z: -30
  });

  //3 row
  coins.push({
        render: coinRender,
        x: 0,
        y: 4,
        z: -50
  });
  coins.push({
        render: coinRender,
        x: 40,
        y: 4,
        z: -50
  });
  coins.push({
        render: coinRender,
        x: -40,
        y: 4,
        z: -50
  });
  coins.push({
        render: coinRender,
        x: 80,
        y: 4,
        z: -50
  });
  coins.push({
        render: coinRender,
        x: -80,
        y: 4,
        z: -50
  });
  coins.push({
        render: coinRender,
        x: 120,
        y: 4,
        z: -50
  });
  coins.push({
        render: coinRender,
        x: -120,
        y: 4,
        z: -50
  });
  coins.push({
        render: coinRender,
        x: 160,
        y: 4,
        z: -50
  });
  coins.push({
        render: coinRender,
        x: -160,
        y: 4,
        z: -50
  });
  //4 row
  coins.push({
        render: coinRender,
        x: 16,
        y: 4,
        z: -70
  });
  coins.push({
        render: coinRender,
        x: -16,
        y: 4,
        z: -70
  });
  coins.push({
        render: coinRender,
        x: 56,
        y: 4,
        z: -70
  });
  coins.push({
        render: coinRender,
        x: -56,
        y: 4,
        z: -70
  });
  coins.push({
        render: coinRender,
        x: 96,
        y: 4,
        z: -70
  });
  coins.push({
        render: coinRender,
        x: -96,
        y: 4,
        z: -70
  });
  coins.push({
        render: coinRender,
        x: 136,
        y: 4,
        z: -70
  });
  //statue in this position
/*  coins.push({
        render: coinRender,
        x: -136,
        y: 4,
        z: -70
  });*/
  //5 row
coins.push({
        render: coinRender,
        x: 0,
        y: 4,
        z: -90
  });
  coins.push({
        render: coinRender,
        x: 48,
        y: 4,
        z: -90
  });
  coins.push({
        render: coinRender,
        x: -48,
        y: 4,
        z: -90
  });
  coins.push({
        render: coinRender,
        x: 80,
        y: 4,
        z: -90
  });
  coins.push({
        render: coinRender,
        x: -80,
        y: 4,
        z: -90
  });
  coins.push({
        render: coinRender,
        x: 126,
        y: 4,
        z: -90
  });
  coins.push({
        render: coinRender,
        x: -120,
        y: 4,
        z: -90
  });
  coins.push({
        render: coinRender,
        x: -160,
        y: 4,
        z: -90
  });
  //6
  coins.push({
        render: coinRender,
        x: 16,
        y: 4,
        z: -108
  });
  coins.push({
        render: coinRender,
        x: -16,
        y: 4,
        z: -108
  });
  coins.push({
        render: coinRender,
        x: 56,
        y: 4,
        z: -108
  });
  coins.push({
        render: coinRender,
        x: -56,
        y: 4,
        z: -108
  });
  coins.push({
        render: coinRender,
        x: 96,
        y: 4,
        z: -108
  });
  coins.push({
        render: coinRender,
        x: -96,
        y: 4,
        z: -108
  });
  coins.push({
        render: coinRender,
        x: 136,
        y: 4,
        z: -108
  });
  coins.push({
        render: coinRender,
        x: -136,
        y: 4,
        z: -108
  });
  //7
  coins.push({
        render: coinRender,
        x: 0,
        y: 4,
        z: -128
  });
  coins.push({
        render: coinRender,
        x: 48,
        y: 4,
        z: -128
  });
  coins.push({
        render: coinRender,
        x: -48,
        y: 4,
        z: -128
  });
  coins.push({
        render: coinRender,
        x: 80,
        y: 4,
        z: -128
  });
  coins.push({
        render: coinRender,
        x: -80,
        y: 4,
        z: -128
  });
  coins.push({
        render: coinRender,
        x: 126,
        y: 4,
        z: -128
  });
  coins.push({
        render: coinRender,
        x: -120,
        y: 4,
        z: -128
  });

  //8
  coins.push({
        render: coinRender,
        x: 16,
        y: 4,
        z: -148
  });
  coins.push({
        render: coinRender,
        x: -16,
        y: 4,
        z: -148
  });
  coins.push({
        render: coinRender,
        x: 56,
        y: 4,
        z: -148
  });
  coins.push({
        render: coinRender,
        x: -56,
        y: 4,
        z: -148
  });
  coins.push({
        render: coinRender,
        x: 96,
        y: 4,
        z: -148
  });
  coins.push({
        render: coinRender,
        x: -96,
        y: 4,
        z: -148
  });
  coins.push({
        render: coinRender,
        x: 136,
        y: 4,
        z: -148
  });
  coins.push({
        render: coinRender,
        x: -136,
        y: 4,
        z: -148
  });

  //9
  coins.push({
        render: coinRender,
        x: 0,
        y: 4,
        z: -166
  });
  coins.push({
        render: coinRender,
        x: 48,
        y: 4,
        z: -166
  });
  coins.push({
        render: coinRender,
        x: -48,
        y: 4,
        z: -166
  });
  coins.push({
        render: coinRender,
        x: 80,
        y: 4,
        z: -166
  });
  coins.push({
        render: coinRender,
        x: -80,
        y: 4,
        z: -166
  });
  coins.push({
        render: coinRender,
        x: 126,
        y: 4,
        z: -166
  });
  coins.push({
        render: coinRender,
        x: -120,
        y: 4,
        z: -166
  });
  coins.push({
        render: coinRender,
        x: 160,
        y: 4,
        z: -166
  });
  coins.push({
        render: coinRender,
        x: -160,
        y: 4,
        z: -166
  });

  //10
  coins.push({
        render: coinRender,
        x: 16,
        y: 4,
        z: -192
  });
  coins.push({
        render: coinRender,
        x: -16,
        y: 4,
        z: -192
  });
  coins.push({
        render: coinRender,
        x: 56,
        y: 4,
        z: -192
  });
  coins.push({
        render: coinRender,
        x: -56,
        y: 4,
        z: -192
  });
  coins.push({
        render: coinRender,
        x: 96,
        y: 4,
        z: -192
  });
  coins.push({
        render: coinRender,
        x: -96,
        y: 4,
        z: -192
  });
  coins.push({
        render: coinRender,
        x: 136,
        y: 4,
        z: -192
  });
  coins.push({
        render: coinRender,
        x: -136,
        y: 4,
        z: -192
  });
  totalCoins=coins.length;


}


function mazeRender() {
    //maze
    u_world= m4.identity();
    u_world= m4.translate(u_world,0,0,-100); 
    drawObject("maze");

    u_world= m4.identity();
    u_world= m4.translate(u_world,0,50,70); 
    u_world= m4.scale(u_world,10,10,10); 
    drawObject("moon");

    u_world= m4.identity();
    u_world= m4.translate(u_world,-136,0,-70); 
    u_world= m4.scale(u_world,1.5,1.5,1.5); 
    drawObject("statue");


    for (let k = 0; k < coins.length; k++) {
        if(px < coins[k].x +rCoin && px > coins[k].x -rCoin &&
          pz < coins[k].z +rCoin && pz > coins[k].z -rCoin){
          coins[k].render=false;
        }
    }
    c++;
    totalCoins=coins.length;
    for (let k = 0; k < coins.length; k++) {
        if(coins[k].render){
          u_world= m4.identity();
          u_world= m4.translate(u_world,coins[k].x,coins[k].y,coins[k].z); 
          u_world= m4.xRotate(u_world, degToRad(-90));
          u_world = m4.zRotate(u_world,c/20);
          u_world= m4.scale(u_world,2.5,2.5,2.5); 
          drawObject("coin");
        }
        else
          totalCoins--;
    }
}

