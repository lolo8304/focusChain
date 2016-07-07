contract Cracker {
  string state;

  function Cracker() {
    state = "INIT"; 
  }

  function getState() returns (string state){
    return state;
  }

  function produce() {
    state = "PRODUCED";
  }

  function deliver() {
   	state = "DELIVERED";   
  }

}
