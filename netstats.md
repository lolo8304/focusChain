###Setup netstats
####Setup netstats Server
Dieses Packet installiert den netstat Server, Zugriff über http://localhost:3000

see
[https://github.com/ethereum/go-ethereum/wiki/Setting-up-monitoring-on-local-cluster]
    Section Monitoring Site
    
    
Starten
```./start.sh ```

        export WS_SECRET="focusdays2016"  #dieses Secret muss dann beim Client verwendet werden!
        npm start
        
        
Aufruf [http://localhost:3000]

####Setup netstats Clients
Dieses Packet installiert den Client um über RCP die Daten für den privaten netstat abgreift und weiterleitet

see 
[https://github.com/ethereum/wiki/wiki/Network-Status]
[https://github.com/ethereum/go-ethereum/wiki/Setting-up-monitoring-on-local-cluster]


wichtig ist, dass die Node mit ```--rcp``` und ```--rcpaddress <ip> ```gestartet werden

Starten 
```./startClietns.sh ```
respektive pm2 start app-<name>.json

Stoppen
```./stopClients.sh ```
resp. pm2 stop <name>

Logfiles
```pm2 logs ```


Config-Beispiel:
``` 
[
  {
    "name"        : "peter",
    "cwd"         : ".",
    "script"      : "app.js",
    "log_date_format"   : "YYYY-MM-DD HH:mm Z",
    "merge_logs"    : false,
    "watch"       : false,
    "exec_interpreter"  : "node",
    "exec_mode"     : "fork_mode",
    "env":
    {
      "NODE_ENV"    : "production",
      "RPC_HOST"    : "192.168.2.116",
      "RPC_PORT"    : "8101",
      "LISTENING_PORT"  : "30301",
      "INSTANCE_NAME"   : "peter",                  //dieser Name wird im Dashboard angezeigt
      "WS_SERVER"     : "http://localhost:3000",    //URL zum lokalen/privaten Netstat
      "WS_SECRET"     : "focusdays2016",            //Passwort, dass beim Start des lokalen/privaten Netstat vergeben wurde
        "VERBOSITY"       : 3
    }
  },
]
```
