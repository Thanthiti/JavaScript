class media{
    constructor (info){
        this.publishdate = info.publishdate
        this.name = info.name
    }
}

class Song extends media{
    constructor(SongData){
        super(SongData)
        this.artist = SongData.artist
    }
}

const mysong = new Song({
    artist:"Radiohead",
    name : "Creep",
    publishdate: 1975.
})
console.log(mysong)