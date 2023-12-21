class dogs{
    constructor(name){
        this.name = name
    }
    static bark(){
        console.log("Woof!" )
    }

    introduction(){
        console.log("this is " + this.name + " ! ")
    }

    

    
    
}

const myDog = new dogs("Buster")

myDog.introduction();
//myDog.bark()

dogs.bark();