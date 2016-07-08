contract Car {
    
    enum LifeStates {
        Ordered,
        Produced,
        Supplied,
        Admitted,
        Delivered,
        Sold,
        ExMatriculated,
        Dumped
    }
    enum DamageStates {
        None,
        SmallIncidentReported,
        AccidentReported,
        DamageAssessed,
        RepairConfirmed,
        Repaired
    }
    
    // This is the current life stage of the car
    LifeStates public state = LifeStates.Ordered;
    
    // This is the current damage stage of the car
    DamageStates public damageState = DamageStates.None;
    
    uint public creationTime = now;
    address public producer;
    address public owner;
    address public customer;
    address public holder;
    
    string public model;
    uint8 public price;
    uint8 public ccm;
    string public details;
    string public chassisNo;
    string public assemblyLine;
    
    string public insuranceId;
    string public policyNo;

    
    //Event Definitions
    event Ordered (
        address _producer,
        address _customer,
        string _modell,
        uint8 _ccm,
        uint8 _price
        );
    
    event Produced (
        address _producer,
        address _customer,
        string chassisNo
        );
        
    event Supplied (
        address _garage
        );
    
    event Delivered (
        address _customer
        );
        
    event Admitted (
        address _customer,
        string _insuranceId,
        string _policyNo
        );

    modifier atState(LifeStates _state) {
        if (state != _state) throw;
        _
    }
    modifier checkOwner() {
        //if (owner != msg.sender) throw;
        _
    }
    modifier atDamage(DamageStates _state) {
        if (damageState != _state) throw;
        _
    }
    function nextState() internal {
        state = LifeStates(uint(state) + 1);
    }
    

    //executed as Garage
    function Car (string _model, uint8 _ccm, uint8 _price, string _details, address _producer, address _customer) {
        model = _model;
        ccm = _ccm;
        price = _price;
        details = _details;
        producer = _producer;
        owner = _customer;
        holder = msg.sender; //virtueller Holder ist Garage
        
        //Trigger Ordered Event
        Ordered (producer, owner, model, ccm, price);
    
    }

    //exectued as assepbly line
    function produce(string _chassisNo, string _assemblyLine)
    {
        chassisNo = _chassisNo;
        assemblyLine = _assemblyLine;
		holder = msg.sender;
        
        state = LifeStates.Produced;
        
        //Trigger Event Produced
        Produced(producer, customer, chassisNo);
    } 
    
    //executed as Garage
    function supply() 
    {
	    holder = msg.sender;
	
	    state = LifeStates.Supplied;
	    //Trigger Supplied Event
	    Supplied(msg.sender);
    } 

    //executed as StVa
    function admit(string _insuranceId, string _policyNo) 
    {
        if (!(state == LifeStates.Supplied) && !(state == LifeStates.ExMatriculated)) throw;
		state = LifeStates.Admitted;
		insuranceId = _insuranceId;
        policyNo = _policyNo;
        
        //Trigger Event
        Admitted(customer, insuranceId, policyNo);
    } 
    
    // executed as the customer
    function deliver() 
    {
		if (!(state == LifeStates.Admitted) && !(state == LifeStates.Sold)) throw;
        if (customer != msg.sender) throw;
		state = LifeStates.Delivered;
		owner = msg.sender;
		holder = msg.sender;
		
		//Trigger Event
		Delivered(owner);
    } 
	
	// executed as the owner
	function sell(address _customer)
		checkOwner
	{
		if (state == LifeStates.Delivered) throw;
		state = LifeStates.Sold;
		owner = _customer;
		holder = _customer;
		
	}		
    
	//executed as StVa or Garage
    function exmatriculate() 
    {
        insuranceId = '';
        policyNo = '';
		state = LifeStates.ExMatriculated;
    } 
	
    function getState() returns (LifeStates)
    {
        return state;
    } 
    
    function () {
        // This function gets executed if a
        // transaction with invalid data is sent to
        // the contract or just ether without data.
        // We revert the send so that no-one
        // accidentally loses money when using the
        // contract.
        throw;
    }
   
}