
var cx,cz;
var keyCamera;

var setCamera = {
    'onMaze': setCameraOnMaze,
    'onCar': setCameraOnCar,
    'showCar': setShowCarCamera,
}

function setShowCarCamera() {

    target = [px, 0, pz - 2];

    camera = m4.subtractVectors(target, dst, camera)


    cameraMatrix = m4.lookAt(camera, target, up);

    cameraMatrix = m4.translate(cameraMatrix, 0, 5, 15);
}

function setCameraOnMaze() {

    target = [0, 0, -30];
    camera = [0,320,0];

    cameraMatrix = m4.lookAt(camera, target, up);

    cameraMatrix = m4.translate(cameraMatrix, 0, 55, 0);
}


function setCameraOnCar() {
    target = [px, 0, pz - 4];

    camera = m4.subtractVectors(target, dst, camera)

    cameraMatrix = m4.lookAt(camera, target, up);

    cameraMatrix = m4.yRotate(cameraMatrix, degToRad(facing));

    cameraMatrix = m4.translate(cameraMatrix, 0, 3.5, 8);
}

