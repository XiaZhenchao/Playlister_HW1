import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initModel,DeleteIndex,DeleteSong) {
        super();
        this.model = initModel;
        this.index = DeleteIndex;
        this.DeleteSong = DeleteSong;
    }

    doTransaction() {
        this.model.DeleteSong(this.index);
    }
    
    undoTransaction() {
       // console.log("DeleteSong: "+ this.DeleteSong);
        this.model.RedoDeleteSong(this.index,this.DeleteSong);
    }
}