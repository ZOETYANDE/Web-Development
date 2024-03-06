class Animal{
    constructor(color, energy){
        this.color = color;
        this.energy = energy;
    }

    isActive(){
        console.log(this.energy);
        if(this.energy > 0){
            this.energy -= 10;
            console.log("Energy is decreasing, currently at: ", this.energy);
        }
        else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep(){
        this.energy += 10;
        console.log("Energy is increasing, currently at: ", this.energy);
    }
    getColor(){
        console.log(this.color);
    }
}
class Cat extends Animal{
    constructor(color, energy, sound = "purr", canJumpHigh, canClimbTrees=true){
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;        
    }
    makeSound(){
        console.log(this.sound);
    }
}
class Bird extends Animal{
    constructor(sound="chirp", canFly=true, color, energy){
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound(){
        console.log(this.sound);
    }
}

class HouseCat extends Cat{
    constructor(color, energy, sound, canJumpHigh, canClimbTrees, houseCatSound="meow"){
        super(color, energy, sound, canJumpHigh, canClimbTrees);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        else {
            console.log(this.houseCatSound);
        }
    }
}
class Tiger extends Cat{
    constructor(color, energy, sound, canJumpHigh, canClimbTrees, tigerSound= "Roar"){
        super(color, energy, sound, canJumpHigh, canClimbTrees);
        this.tigerSound = tigerSound;
    }
    makeSound(option){
        if(option == true){
            super.makeSound();
        }
        else {
            console.log(this.tigerSound);
        }
    }
}

class Parrot extends Bird{
    constructor(sound="chirp", canFly=true, color, energy, canTalk=false){
        super(sound, color, canFly, energy);
        this.canTalk = canTalk;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        if(this.canTalk){
            console.log("I'am a talking parrot!");
        }
    }
}

let polly = new Parrot(true);
let fiji = new Parrot(false);

polly.makeSound();
fiji.makeSound();

polly.isActive();

let penguin = new Bird("Shriek", false, "black and white", 200);
console.log(penguin);
penguin.makeSound();
console.log(penguin.canFly);
penguin.getColor();
penguin.energy;
penguin.isActive();