class Song{
    constructor(title,artist){
        this.title = title
        this.auther = artist
    }
    play(){
        console.log("Song Playing!")
    }
}

const mySong = new Song("tom york","Black star")
mySong.play()

    