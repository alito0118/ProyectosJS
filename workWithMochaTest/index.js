// Define a rooster
export const Rooster = {

  // Return a morning rooster call
  announceDawn: function(){
    return 'cock-a-doodle-doo!';
  },

  // Return hour as string
  // Throws Error if hour is not between 0 and 23 inclusive
    timeAtDawn: function(hour){
      if (hour < 0 || hour > 23) {
        throw new RangeError;
      } else {
        return hour.toString();
    };
  }

};