contract SimpleEventTest {
 
    
    event Triggered (
        string _msg
        );

    

    function SimpleEventTest () {
    }

    function sendEvent(string _msg) 
    {

        Triggered(_msg);
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