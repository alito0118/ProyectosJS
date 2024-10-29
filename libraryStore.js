
//Create the common class
class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    };
    get title(){
      return this._title;
    };
    get isCheckedOut(){
      return this._isCheckedOut;
    };
    get ratings(){
      this._ratings;
    };
  
    //This do the average of rating
    getAverageRating(){
      const sumaTotal = this._ratings.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
      return sumaTotal / this._ratings.length;
    };
  
    //Set the new value for isCheckedOut
    set isCheckedOut(newValue){
      if( typeof newValue === "boolean"){
        this._isCheckedOut = newValue;
      } else {
        console.log("The value must be a boolean");
      }
    };
  
    //Change _isCheckedOut if it is true or false.
    toggleCheckOutStatus(){
      if(this._isCheckedOut === false){
        this._isCheckedOut === true;
      } else (this._isCheckedOut === true)
      {
        this._isCheckedOut === false;
      }
    };
  
    //Add rating if the rating is a number
    addRating(rating){
      if(typeof rating === "number"){
        this._ratings.push(rating)
      }
    };
  
  }