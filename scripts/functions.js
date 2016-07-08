function checkAllBalances() {
  web3.eth.getAccounts(function(err, accounts) {
   accounts.forEach(function(id) {
    web3.eth.getBalance(id, function(err, balance) {
     console.log("" + id + ":\tbalance: " + web3.fromWei(balance, "ether") + " ether");
   });
  });
 });
};

function primBalance() {
primary = eth.accounts[0];
balance = web3.fromWei(eth.getBalance(primary), "ether");
console.log("balance = " + balance);
};

function unlock() {
personal.unlockAccount(eth.accounts[0],"focusdays2016");
}

//add peers after load
admin.addPeer("enode://cca684b34842cf14f3ba063453d54c3145985e7d232412922a5580584e799f657d55ccaa609ca2b0d2eac9102a8f43842347e0bf53768fc26d5b63f7e260ab56@192.168.2.105:30301");
admin.addPeer("enode://f5dac0d67263d3b072fdc56eec376a85005cc0858b84ff07497a4decc3e401e34a3154d4eef54c69867f85f0250372586984adc6d390ad516338aa65b8795517@192.168.2.111:30301");
admin.addPeer("enode://c91da55299d1f1146d1e8cd35b09483338fc24592849cf994e3fadf2baa1035d214316f42511940fe73d601d31e91927267e885d56ebac6926a39f94b70c448a@192.168.2.117:30301");
admin.addPeer("enode://0dde2491ebd27b483654f63d6b36041eeff822a5813a9d182d441d0217afb2338a455ce1a00e18ea7aa6e9eb60fe25e98f8c3ca9fcec297ed7bae7847d236ff3@192.168.2.118:30301");
admin.addPeer("enode://8160b3dd43bcd2594371100b32dd9c91687c576af37c685bfd4bde09be5f8ed1afbb99914ef51cd03c84412be37f1dedc102a5089d3cd1134ab8f1a404a0c74c@192.168.2.116:30301");
admin.addPeer("enode://1bf37f0f5fcafdd44b38df33cc332ab48384aa4595786e6edc98130119eac28ec9e7b4f7f2f276f8a5fcb5eeb9810c704ce548e52bf93f40514a33c19750f666@192.168.2.115:30301");
admin.addPeer("enode://c1081dfd63b8d82e33ef009d08ec5d49b53d001d4fbf5c386c932af6cbd5f78dce3c46351119334baaef1a50ec643e7ec236358c20fac4db7c1ea9fc15d5c1cb@192.168.2.104:30301");
admin.addPeer("enode://5d62d24c55ac067da61462346adc07707ab4fd611ba980af8392161eaaced96c4a6cfe29ce3746ea2a5c1109af396d6428fa88de1f772f5d524a15be8601044f@192.168.2.113:30301");


// remove all --rpc* arguments in commandline
admin.startRPC("0.0.0.0", 8101, "*", "web3,net,eth");