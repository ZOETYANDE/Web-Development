class Animal{
    constructor(color, energy){
        this.color = color;
        this.energy = energy;
    }

    isActive(){
        console.log(energy);
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
    constructor(color, energy, sound, canJumpHigh, canClimbTrees){
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
    constructor(sound, canFly, color, energy){
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound(){
        console.log(this.sound);
    }
}

class HouseCat extends Cat{
    constructor(color, energy, sound, canJumpHigh, canClimbTrees, houseCatSound){
        super(color, energy, sound, canJumpHigh, canClimbTrees);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option){
        if(option == true){
            super.makeSound();
        }
        else {
            console.log(this.houseCatSound);
        }
    }
}
class Tiger extends Cat{
    constructor(tigerSound){
        super();
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
    constructor(canTalk){
        super();
        this.canTalk = canTalk;
    }
    makeSound(option){
        if(option == true){

        }
    }
}