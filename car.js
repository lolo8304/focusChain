contract Car {
    
    enum LifeStates {
        Ordered,
        Produced,
        Received,
        Delivered,
        Admitted,
        ExMatriculated,
        Sold,
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
    
    string public model;
    uint8 public price;
    uint8 public ccm;
    string public details;
    string public chassisNo;
    string public assemblyLine;

    event Ordered (
        address _producer,
        address _customer,
        string _modell,
        uint8 _ccm,
        uint8 _price
        );
    event Delivered (
        address _producer,
        address _customer
        );

    modifier atState(LifeStates _state) {
        if (state != _state) throw;
        _
    }
    modifier atDamage(DamageStates _state) {
        if (damageState != _state) throw;
        _
    }
    function nextState() internal {
        state = LifeStates(uint(state) + 1);
    }
    
    // Perform timed transitions. Be sure to mention
    // this modifier first, otherwise the guards
    // will not take the new stage into account.
    modifier timedTransitions() {

        // delivered at least after 1 minute of ordering
        if (state == LifeStates.Ordered &&
                    now >= creationTime + 1 minutes)
            nextState(); // produced

        // delivered at least after 1 minute of ordering
        if (state == LifeStates.Produced &&
                now >= creationTime + 1 minutes)
            nextState(); // delivered
            
    }

    function Car (string _model, uint8 _ccm, uint8 _price, string _details, address _producer) {
        model = _model;
        ccm = _ccm;
        price = _price;
        details = _details;
        producer = _producer;
        owner = _producer;
        customer = msg.sender;
    }

    function produce(string _chassisNo, string _assemblyLine) 
        timedTransitions
        atState(LifeStates.Produced)
    {
        owner = msg.sender;
        chassisNo = _chassisNo;
        assemblyLine = _assemblyLine;
    } 
    
    function receive() 
        timedTransitions
        atState(LifeStates.Received)
    {
        owner = msg.sender;
    } 
    
   
}