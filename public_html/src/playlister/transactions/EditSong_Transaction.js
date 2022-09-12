import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * AddSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author Zhenchao Xia
 */
 export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(Model,userEditIndex,InitSong, InitArtist, InityouTubeId, NewSong,NewArtist,NewyouTubeId) {
        super();
        this.model = Model;
        this.index = userEditIndex;
        this.oldSong = InitSong;
        this.OldArtist = InitArtist;
        this.OldyouTubeId = InityouTubeId;
        this.NewSong = NewSong;
        this.NewAritist = NewArtist;
        this.NewyouTubeId = NewyouTubeId;
    }

    doTransaction() {
       this.model.EditSong(this.index, this.NewSong,this.NewAritist,this.NewyouTubeId)
       console.log("NewSong: " + this.NewSong);
    }
    
    undoTransaction() {
        this.model.EditSong(this.index,this.oldSong,this.OldArtist,this.OldyouTubeId);
    }
}