#!/bin/sh

#geth --datadir focuschainData --networkid 13041969 --port 30301 --rpcport 8101 console
#geth --genesis focuschain-genesis.json --datadir focuschainData --networkid 13041969 --port 30301 --rpcport 8101 --ipcpath focuschainData --dev console
#geth --genesis focuschain-genesis.json --datadir focuschainData --networkid 19700105 --port 30301 --rpcport 8101 --ipcpath /Users/david/Library/Ethereum/geth.ipc  --verbosity 6 --preload functions.js console 2>> eth.log
geth --genesis focuschain-genesis.json --datadir focuschainData --networkid 19700105 --port 30301 --rpcapi "eth,net,web3" --rpcport 8101 --rpc --rpcaddr 0.0.0.0 --ipcpath /Users/david/Library/Ethereum/geth.ipc  --identity david --nodiscover --verbosity 5 --preload functions.js console 2>> eth.log