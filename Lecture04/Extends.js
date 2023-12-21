
class media{
    constructor (info,ew){
        this.publishdate = info.publishdate
        this.names = ew.names
    }
}


class Song extends media{
    constructor(SongData,aa){
        super(SongData,aa)
        this.artist = SongData.artist
    }
}
const mysong = new Song({
    artist:"Radiohead",
    name : "Creep",
    publishdate: 1975
},{
    names : "Thanthiti",
    
})
console.log(mysong)