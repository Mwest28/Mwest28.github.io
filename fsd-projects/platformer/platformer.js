$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms

    
createPlatform(900, 700, 200, 20, "black");
createPlatform ( 400, 600 , 400, 20)
createPlatform ( 600, 100, 100, 20)
createPlatform (700, 400, 100, 20 )
createPlatform ( 350, 500, 200, 10)
createPlatform (900,300, 200, 10)
createPlatform (800,200, 200, 10)
createPlatform (400,300, 200,10)
  createPlatform (200,300, 200,10)
  createPlatform ( 100, 200, 200,10)
  createPlatform (400,150, 200,10)
 

    // TODO 3 - Create Collectables

   createCollectable ("database",350, 550);
   createCollectable ("database", 750, 150);
   createCollectable ("database",250, 150);
   


    
    // TODO 4 - Create Cannons

    createCannon("top", 200, 700);
     createCannon("right", 300, 700)
     createCannon ("left", 500, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
