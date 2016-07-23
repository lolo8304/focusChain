

//neue States und Events
function listenCarEvents() {
var CarContract = web3.eth.contract(
[ { "constant": false, "inputs": [], "name": "supply", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "model", "outputs": [ { "name": "", "type": "string" } ], "type": "function" }, { "constant": false, "inputs": [], "name": "getState", "outputs": [ { "name": "", "type": "uint8" } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "_insuranceId", "type": "string" }, { "name": "_policyNo", "type": "string" } ], "name": "matriculate", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "producer", "outputs": [ { "name": "", "type": "address" } ], "type": "function" }, { "constant": true, "inputs": [], "name": "ccm", "outputs": [ { "name": "", "type": "uint8" } ], "type": "function" }, { "constant": true, "inputs": [], "name": "details", "outputs": [ { "name": "", "type": "string" } ], "type": "function" }, { "constant": true, "inputs": [], "name": "insuranceId", "outputs": [ { "name": "", "type": "string" } ], "type": "function" }, { "constant": true, "inputs": [], "name": "chassisNo", "outputs": [ { "name": "", "type": "string" } ], "type": "function" }, { "constant": false, "inputs": [], "name": "exmatriculate", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "sell", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "price", "outputs": [ { "name": "", "type": "uint8" } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "_chassisNo", "type": "string" }, { "name": "_assemblyLine", "type": "string" } ], "name": "produce", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "state", "outputs": [ { "name": "", "type": "uint8" } ], "type": "function" }, { "constant": true, "inputs": [], "name": "matriculated", "outputs": [ { "name": "", "type": "bool" } ], "type": "function" }, { "constant": true, "inputs": [], "name": "policyNo", "outputs": [ { "name": "", "type": "string" } ], "type": "function" }, { "constant": true, "inputs": [], "name": "creationTime", "outputs": [ { "name": "", "type": "uint256" } ], "type": "function" }, { "constant": false, "inputs": [], "name": "dump", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "holder", "outputs": [ { "name": "", "type": "address" } ], "type": "function" }, { "constant": false, "inputs": [], "name": "deliver", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "assemblyLine", "outputs": [ { "name": "", "type": "string" } ], "type": "function" }, { "inputs": [ { "name": "_model", "type": "string", "index": 0, "typeShort": "string", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;model", "template": "elements_input_string", "value": "ocatavia" }, { "name": "_ccm", "type": "uint8", "index": 1, "typeShort": "uint", "bits": "8", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;ccm", "template": "elements_input_uint", "value": "333" }, { "name": "_price", "type": "uint8", "index": 2, "typeShort": "uint", "bits": "8", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;price", "template": "elements_input_uint", "value": "333" }, { "name": "_details", "type": "string", "index": 3, "typeShort": "string", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;details", "template": "elements_input_string", "value": "niox" }, { "name": "_producer", "type": "address", "index": 4, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;producer", "template": "elements_input_address", "value": "0x42ca945f5877a0727cdb246b38e8c6e3f41b1bbb" }, { "name": "_owner", "type": "address", "index": 5, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;owner", "template": "elements_input_address", "value": "0x42ca945f5877a0727cdb246b38e8c6e3f41b1bbb" } ], "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "producer", "type": "address" }, { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "modell", "type": "string" }, { "indexed": false, "name": "ccm", "type": "uint8" }, { "indexed": false, "name": "price", "type": "uint8" } ], "name": "Ordered", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "producer", "type": "address" }, { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "chassisNo", "type": "string" } ], "name": "Produced", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "garage", "type": "address" } ], "name": "Supplied", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "owner", "type": "address" } ], "name": "Delivered", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "insuranceId", "type": "string" }, { "indexed": false, "name": "policyNo", "type": "string" } ], "name": "Matriculated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "policyNo", "type": "string" } ], "name": "Exmatriculated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "oldOwner", "type": "address" }, { "indexed": false, "name": "newOwner", "type": "address" } ], "name": "Sold", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "owner", "type": "address" } ], "name": "Dumped", "type": "event" } ]
);
    
var Address = "0xc5EDca39B3779150983031d93F3E97c51716B15f";
var carContract = CarContract.at(Address);
console.log("Init listenCarEvents - V2.3");
    
var block = web3.eth.getBlock('latest').number;
carContract.Produced().watch(function(error, result) {
//if(result.blockNumber > block){
// Do something with the event
console.log("XXXXXXXXXXXXXXXXX Produced" + JSON.stringify(result.args));
//}
});
    
carContract.Ordered().watch(function(error, result) {
    console.log("XXXXXXXXXXXXXXXXX Ordered" + JSON.stringify(result.args));
});
    
carContract.Supplied().watch(function(error, result) {
    console.log("XXXXXXXXXXXXXXXXX Supplied" + JSON.stringify(result.args));
});
    
carContract.Delivered().watch(function(error, result) {
    console.log("XXXXXXXXXXXXXXXXX Delivered" + JSON.stringify(result.args));
});
    
carContract.Matriculated().watch(function(error, result) {
    console.log("XXXXXXXXXXXXXXXXX Matriculated" + JSON.stringify(result.args));
});
    
carContract.Exmatriculated().watch(function(error, result) {
    console.log("XXXXXXXXXXXXXXXXX Exmatriculated" + JSON.stringify(result.args));
});
    
carContract.Sold().watch(function(error, result) {
    console.log("XXXXXXXXXXXXXXXXX Sold" + JSON.stringify(result.args));
});
    
carContract.Dumped().watch(function(error, result) {
    console.log("XXXXXXXXXXXXXXXXX Dumped" + JSON.stringify(result.args));
});

};

//event stuff
function listenCarEvents() {
var CarContract = web3.eth.contract(
[{"constant":true,"inputs":[],"name":"damageState","outputs":[{"name":"","type":"uint8"}],"type":"function"},{"constant":false,"inputs":[],"name":"supply","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"model","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[],"name":"getState","outputs":[{"name":"","type":"uint8"}],"type":"function"},{"constant":true,"inputs":[],"name":"customer","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"producer","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"ccm","outputs":[{"name":"","type":"uint8"}],"type":"function"},{"constant":true,"inputs":[],"name":"details","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"insuranceId","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"chassisNo","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[],"name":"exmatriculate","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_customer","type":"address"}],"name":"sell","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint8"}],"type":"function"},{"constant":false,"inputs":[{"name":"_chassisNo","type":"string"},{"name":"_assemblyLine","type":"string"}],"name":"produce","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"type":"function"},{"constant":true,"inputs":[],"name":"policyNo","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"_insuranceId","type":"string"},{"name":"_policyNo","type":"string"}],"name":"admit","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"creationTime","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"holder","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"deliver","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"assemblyLine","outputs":[{"name":"","type":"string"}],"type":"function"},{"inputs":[{"name":"_model","type":"string"},{"name":"_ccm","type":"uint8"},{"name":"_price","type":"uint8"},{"name":"_details","type":"string"},{"name":"_producer","type":"address"},{"name":"_customer","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_producer","type":"address"},{"indexed":false,"name":"_customer","type":"address"},{"indexed":false,"name":"_modell","type":"string"},{"indexed":false,"name":"_ccm","type":"uint8"},{"indexed":false,"name":"_price","type":"uint8"}],"name":"Ordered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_producer","type":"address"},{"indexed":false,"name":"_customer","type":"address"},{"indexed":false,"name":"chassisNo","type":"string"}],"name":"Produced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_garage","type":"address"}],"name":"Supplied","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_customer","type":"address"}],"name":"Delivered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_customer","type":"address"},{"indexed":false,"name":"_insuranceId","type":"string"},{"indexed":false,"name":"_policyNo","type":"string"}],"name":"Admitted","type":"event"}]
);
    
var Address = "0x3f5adaef230c4a20dd6012bc79a42189beb727b2";
var carContract = CarContract.at(Address);
console.log("Init listenCarEvents - V1.7");
    
var block = web3.eth.getBlock('latest').number;
carContract.Produced().watch(function(error, result) {
//if(result.blockNumber > block){
// Do something with the event
console.log("XXXXXXXXXXXXXXXXX Produced" + JSON.stringify(result.args));
//}
});
    
carContract.Ordered().watch(function(error, result) {
    console.log("XXXXXXXXXXXXXXXXX Ordered" + JSON.stringify(result.args));
});
    
carContract.Supplied().watch(function(error, result) {
    console.log("XXXXXXXXXXXXXXXXX Supplied" + JSON.stringify(result.args));
});
    
carContract.Delivered().watch(function(error, result) {
    console.log("XXXXXXXXXXXXXXXXX Delivered" + JSON.stringify(result.args));
});
    
carContract.Admitted().watch(function(error, result) {
    console.log("XXXXXXXXXXXXXXXXX Admitted" + JSON.stringify(result.args));
});

};


function listenSimpleEvent() {
var SimpleContract = web3.eth.contract([ { "constant": false, "inputs": [ { "name": "_msg", "type": "string" } ], "name": "sendEvent", "outputs": [], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "_msg", "type": "string" } ], "name": "Triggered", "type": "event" } ]);
var Address = "0x365155123b92d11a6970a71ebeb2026CDe25cF9d";
var simpleContract = SimpleContract.at(Address);
    
var block = web3.eth.getBlock('latest').number;
simpleContract.Triggered().watch(function(error, result) {
//if(result.blockNumber > block){
// Do something with the event
console.log("XXXXXXXXXXXXXXXXX SimpleEvent" + JSON.stringify(result.args));
//}
});
};