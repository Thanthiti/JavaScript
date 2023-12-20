class dog{
    constructor(name){
        this.name = name
    }

    introduction(){
        console.log("this is " + this.name + " ! ")
    }

    static bark(){
        console.log("Woof!")
    }

    
    
}

const myDog = new dog("Buster")
myDog.introduction();

dog.bark();