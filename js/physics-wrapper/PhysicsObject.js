
var Bodies = Matter.Bodies;

// Essentially a base class for a Matter.Body wrapper. It contains additional data such as color info for rendering
class PhysicsObject
{
    #rigidBody;

    fillColor = 255;
    hasOutline = true;
    outlineColor = 0;

    constructor(options = null)
    {
        if (options == null) return;

        if (options.fillColor !== undefined)
        {
            this.fillColor = options.fillColor;
        }

        if (options.hasOutline !== undefined)
        {
            this.hasOutline = options.hasOutline;
        }

        if (options.outlineColor !== undefined)
        {
            this.outlineColor = options.outlineColor;
        }
    }

    getRigidBody()
    {
        return this.#rigidBody;
    }

    _setRigidBody(body)
    {
        this.#rigidBody = body;
    }

    destroy()
    {
        Physics.get().remove(this);
    }
}

class Circle extends PhysicsObject
{
    constructor(x, y, radius, options = null)
    {
        super(options);
        this._setRigidBody(new Bodies.circle(x, y, radius, options));
    }
}

class Rectangle extends PhysicsObject
{
    constructor(x, y, width, height, options = null)
    {
        super(options);
        this._setRigidBody(new Bodies.rectangle(x, y, width, height, options));
    }
}
