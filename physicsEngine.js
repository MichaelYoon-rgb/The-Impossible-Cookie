window.addEventListener('load', () => {
    var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Common = Matter.Common;
    // create an engine
    var engine = Engine.create();
    
    // create a renderer
    console.log(document.body.clientWidth)
    document.getElementById("physicsEngine").style.overflow = 'hidden';
    var render = Render.create({
        element: document.getElementById("physicsEngine"),
        engine: engine,
        options: {
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            background: 'transparent',
            wireframes: false, // <-- important
        }
    });
    
    // create two boxes and a ground
    document.getElementById("bigCookie").addEventListener("click", () => {
        var boxB = Bodies.circle(Common.random(0, document.body.clientWidth), -50, 16,  {friction: 0.00001, restitution: 0.5, density: 0.001, 
            render: {
                sprite: {
                    texture: 'img/fallingCookie.png'
                }
            }}
        );
        
        Composite.add(engine.world, [boxB]);
        Body.applyForce( boxB, {x: ball.position.x, y: ball.position.y}, {x: 0.05, y: 0.5});
    }, 100)

    var ground = Bodies.rectangle(0, window.innerHeight + 30, window.innerWidth*2, 60, { isStatic: true, render: { fillStyle: 'white' }});
    var leftWall = Bodies.rectangle(0-30, 0, 60, window.innerHeight*2, { isStatic: true, render: { fillStyle: 'white' }});
    var rightWall = Bodies.rectangle(window.innerWidth+30, 0, 60, window.innerHeight*2, { isStatic: true, render: { fillStyle: 'white' }});
    
    // add all of the bodies to the world
    Composite.add(engine.world, [ground,leftWall,rightWall]);
    
    // run the renderer
    Render.run(render);
    
    // create runner
    var runner = Runner.create();
    
    // run the engine
    Runner.run(runner, engine);

}, false);