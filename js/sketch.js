import MusicPlayer from './music/MusicPlayer.js';
import Physics from './physics-wrapper/Physics.js';
import Animator from './music/Animator.js';

new p5(function(p5)
{
    p5.setup = function()
    {
        p5.createCanvas(p5.windowWidth * 0.8, p5.windowHeight * 0.8);
        p5.colorMode(p5.HSL);
    
        Animator.init();
        var player = new MusicPlayer(2, p5.width, p5.height);
    }

    p5.draw = function()
    {
        p5.background("#f3edf5");
        
        // Draw all bodies in the world composite
        Physics.get().getAllPhysicsObjects().forEach(physObject => 
        {
            var rigidBody = physObject.getRigidBody();
            // Start a new style that matches the body's style
            p5.push();
            p5.fill(physObject.fillColor);
            if (!physObject.hasOutline) p5.noStroke();
            p5.stroke(physObject.outlineColor);
    
            // Do a vertex fill draw with P5
            p5.beginShape();
            for (var i = 0; i < rigidBody.vertices.length; ++i)
            {
                var bodyVert = rigidBody.vertices[i];
                p5.vertex(bodyVert.x + physObject.drawOffset.x, bodyVert.y + physObject.drawOffset.y);
            }
            p5.endShape(p5.CLOSE);
    
            p5.pop();
        });
    }
    
});

//function mousePressed()
//{
//    var ball = new Ball(mouseX, mouseY, 1, [270, 85, 95]);
//    Physics.get().add(ball);
//}
