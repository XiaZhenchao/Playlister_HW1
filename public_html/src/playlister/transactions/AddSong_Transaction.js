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
 export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initModel,initSong, initArtist, initId) {
        super();
        this.model = initModel;
        this.song = initSong;
        this.artist = initArtist;
        this.id = initId;
    }

    doTransaction() {
        this.model.addSong(this.song, this.artist, this.id);
    }
    
    undoTransaction() {
        this.model.DeleteSong(this.model.getPlaylistSize()-1);
    }
}