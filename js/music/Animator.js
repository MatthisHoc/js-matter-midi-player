var Events = Matter.Events;

// An object that updates itself and linearly interpolate from a start object to an end object
class Animator
{
    static #animators = []
    
    start = {};
    end = {};
    current = {};
    animationMode = "linear";
    #elapsedTime = 0;
    #duration = 0;
    #doneCallback;
    #updateCallback;

    static lerp(from, to, pct)
    {
        return from * (1 - pct) + to * pct;
    }

    /**
     * Should be called once before instanciating any Animator
     */
    static init()
    {
        Events.on(Physics.get().getEngine(), 'afterUpdate', Animator.#update);
    }

    /**
     * 
     * @param {Object} start The starting state. All values are assumed to be numbers
     * @param {Object} end The desired ending state. All values are assumed to be numbers
     * @param {Object} duration How long this Animator should run for in ms
     * @param {function} updateCallback Function called anytime the current status is updated
     * @param {function} doneCallback Function called when ending state is reached
     * @param {string} animationMode possible values are: 'linear', 'boomerang'
     */
    constructor(start, end, duration, updateCallback, doneCallback, animationMode = "linear")
    {        
        Animator.#animators.push(this);

        this.#elapsedTime = 0;        
        this.start = start;
        this.current = structuredClone(this.start);
        this.end = end;
        this.#updateCallback = updateCallback;
        this.#doneCallback = doneCallback;
        this.animationMode = animationMode;
        
        if (this.animationMode == "linear")
        {
            this.#duration = duration;
        }
        else if (this.animationMode == "boomerang")
        {
            this.#duration = duration / 2;
        }
    }

    /**
     * 
     * @returns The list of currently active Animators
     */
    static getAnimators()
    {
        return Animator.#animators;
    }

    /**
     * Removes an animator from the list of active Animators
     */
    static removeAnimator(index)
    {
        Animator.#animators.splice(index, 1);
    }

    static #update(evt)
    {
        // Update all animators, loop backwards because we might delete animators while looping
        for(var i = Animator.getAnimators().length - 1; i >= 0; --i)
        {
            var animator = Animator.getAnimators()[i];
            if (animator._instanceUpdate(evt.delta)) 
            {
                Animator.removeAnimator(i);
            }
        }
    }

    /** 
     * This function should never be called explicitly
     * Update the Animator and call the appropriate callback
    */
    _instanceUpdate(deltaTime)
    {
        this.#elapsedTime += deltaTime;
        if (this.#elapsedTime >= this.#duration)
        {
            if (this.animationMode == "linear")
            {
                this.#doneCallback(this.end);
            }
            else if (this.animationMode == "boomerang")
            {
                // Create a new linear animator with reversed start and end, don't call doneCallback yet
                new Animator(this.end, this.start, this.#duration, this.#updateCallback, this.#doneCallback);
            }

            return true;
        }

        for (var key of Object.keys(this.start))
        {
            this.current[key] = Animator.lerp(this.start[key], this.end[key], this.#elapsedTime / this.#duration);
        }

        this.#updateCallback(this.current);
    }
}