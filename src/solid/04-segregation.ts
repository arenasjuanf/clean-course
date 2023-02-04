interface Bird {
    eat(): void; 
}

interface FlyingBird {
    fly(): void,
}

interface RunningBird {
    run(): void;
}

interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird{
    public fly(): void {}
    public eat() {};
}

class Humminbird implements Bird{
    public fly(): void {}
    public eat() {};

}

class Ostrich implements Bird, RunningBird{
    public fly(): void {}
    public eat() {};
    public run() {};

}

class Penguin implements Bird, SwimmerBird{
    public eat() {};
    public swim() {};
}