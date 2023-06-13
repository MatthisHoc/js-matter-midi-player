function setup()
{
    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    
    var player = new MusicPlayer();
}

function mousePressed()
{
    var ball = new Ball(mouseX, mouseY, 0.5);
    Physics.get().add(ball);
}

function draw()
{
    background("#f3edf5");
    
    // Draw all bodies in the world composite
    Physics.get().getAllPhysicsObjects().forEach(physObject => 
    {
        rigidBody = physObject.getRigidBody();
        // Start a new style that matches the body's style
        push();
        fill(physObject.fillColor);
        if (!physObject.hasOutline) noStroke();
        stroke(physObject.outlineColor);

        // Do a vertex fill draw with P5
        beginShape();
        for (var i = 0; i < rigidBody.vertices.length; ++i)
        {
            var bodyVert = rigidBody.vertices[i];
            vertex(bodyVert.x, bodyVert.y);
        }
        endShape(CLOSE);

        pop();
    });
}