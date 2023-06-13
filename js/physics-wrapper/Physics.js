
// Matter aliases
var Engine = Matter.Engine;
var Runner = Matter.Runner;
var Composite = Matter.Composite;
var Events = Matter.Events;

/** 
 * The Physics singleton object handles the Matter engine and the world Composite
 * Any PhysicsObject must be explicitly added to the world by calling Physics.get().add()
 */
class Physics
{
    #engine;
    #runner;
    #physicsObjects = [];
    #collisionEventListeners = [];

    static #instance = null;

    // We should add a way to prevent the instanciation of a Physics object from outside of "get()"
    constructor()
    {
        this.#engine = Engine.create();
        this.#runner = Runner.create();
        Physics.#instance = this;
        Runner.start(this.#runner, this.#engine);

        Events.on(this.#engine, "collisionStart", this.collisionOccured)
    }

    // Returns the Physics instance or initializes it if it doesn't already exist
    static get()
    {
        if (!Physics.#instance)
        {
            new Physics();
        }

        return Physics.#instance;
    }

    add(physicsObject)
    {
        /** 
         * Add the Matter.Body object to the world composite but also keep 
         * the PhysicsObject that contains color info for rendering
         */ 
        Composite.add(this.#engine.world, physicsObject.getRigidBody());
        this.#physicsObjects.push(physicsObject);
    }

    remove(physicsObject)
    {
        var i = this.findPhysicsObjectIndexFromId(physicsObject.getRigidBody().id);
        if (i > 0)
        {
            this.#physicsObjects.splice(i, 1);
            Composite.remove(this.#engine.world, physicsObject.getRigidBody());
        }
    }

    getAllPhysicsObjects()
    {
        return this.#physicsObjects;
    }

    findPhysicsObjectIndexFromId(id)
    {
        for (var i = 0; i < this.#physicsObjects.length; ++i)
        {
            var po = this.#physicsObjects[i];

            if (po.getRigidBody().id == id)
            {
                return i;
            }
        }

        return -1;
    }

    // Returns a physics object from a Matter.Body.id
    findPhysicsObjectFromId(id)
    {
        for (var i = 0; i < this.#physicsObjects.length; ++i)
        {
            var po = this.#physicsObjects[i];

            if (po.getRigidBody().id == id)
            {
                return po;
            }
        }

        return null;
    }

    getEngine()
    {
        return this.#engine;
    }

    collisionOccured(evt)
    {
        var pairs = evt.pairs;
        pairs.forEach(pair => {
            var bodyA = pair.bodyA;
            var bodyB = pair.bodyB;

            // Find the physics objects associated with the collided rigidbodies
            var physics = Physics.get();
            var poA = physics.findPhysicsObjectFromId(bodyA.id);
            var poB = physics.findPhysicsObjectFromId(bodyB.id);

            // broadcast the collision event between the two physics objects
            physics.broadcastCollisionEvent(poA, poB);
        });
    }

    broadcastCollisionEvent(physicsObjectA, physicsObjectB)
    {
        // Because our collisionEventListeners object stores an id and the callback
        // we need to explicitely pass the listener's PhysicsObject as well in the right order. 1. Listener, 2. Other object
        this.#collisionEventListeners.forEach(listener => {
            if (listener.id === physicsObjectA.getRigidBody().id)
            {
                listener.callback(physicsObjectA, physicsObjectB);
            }
            else if (listener.id === physicsObjectB.getRigidBody().id)
            {
                listener.callback(physicsObjectB, physicsObjectA);
            }
        });
    }

    // A simple one use-case event system for collision listening
    listenToCollisionEvent(physicsObject, callback)
    {
        var poId = physicsObject.getRigidBody().id;
        this.#collisionEventListeners.push({"id": poId, "callback": callback});
    }
}