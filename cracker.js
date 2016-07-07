contract Cracker         // The contract definition. A constructor of the same name will be automatically called on contract creation. 
{
    address creator;     // At first, an empty "address"-type variable of the name "owner". Will be set in the constructor.
    string state;     // At first, an empty "string"-type variable of the name "greeting". Will be set in constructor and can be changed.

	event Produced(
        address indexed _from,
        string indexed _state,
    );
	
    function Cracker(string _state) public   // The constructor. It accepts a string input and saves it to the contract's "greeting" variable.
    {
        creator = msg.sender;
        state = _state;
    }

    function getState() constant returns (string)          
    {
        return state;
    }
    
    function getBlockNumber() constant returns (uint) // this doesn't have anything to do with the act of greeting
    {													// just demonstrating return of some global variable
        return block.number;
    }
    
    function produce() 
    {
        state = 'PRODUCED';
		Produced(msg.sender, state);
    }
	
	function deliver() 
    {
        state = 'DELIVERED';
    }
    
     /**********
     Standard kill() function to recover funds 
     **********/
    
    function kill()
    { 
        if (msg.sender == creator)
            suicide(creator);  // kills this contract and sends remaining funds back to creator
    }

}
