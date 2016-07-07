contract Carlifecycle {
    address creator;
    string state;
    string ownerName;
    string brandModel;
    string serialNo;
    string insuranceType;
    
    event StateChanged(
        address _from,
        string _state
        );
    
    function Carlifecycle (string _ownerName, string _brandModel, string _serialNo) {
        creator = msg.sender;
        ownerName = _ownerName;
        brandModel = _brandModel;
        serialNo = _serialNo;
        insuranceType = 'Manufacturing Insurance';
    }
    
    function getBlockNumber() constant returns (uint) {
        return block.number;
    }
    
    function getOwner() public returns (string) {
        return ownerName;
    }
    
    function getBrandModel() public returns (string) {
        return brandModel;
    }
    
    function getEmail() public returns (string) {
        return serialNo;
    }
    
    function getInsurance() public returns (string) {
        return insuranceType;
    }



    function produce() 
    {
        state = 'PRODUCED';
        insuranceType = 'Vendors Insurance';
		StateChanged(msg.sender, state);
    }
	
	function deliver() 
    {
        state = 'DELIVERED';
        insuranceType = 'Car Insurance';
        StateChanged(msg.sender, state);
    }

    function sellUsed(string _newOwner) {
        state = 'RESOLD';
        ownerName = _newOwner;
        StateChanged(msg.sender, state);
    }
    
    function kill()
    { 
        if (msg.sender == creator)
            suicide(creator);  // kills this contract and sends remaining funds back to creator
    }
}