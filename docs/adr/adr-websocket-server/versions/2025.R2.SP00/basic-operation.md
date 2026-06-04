# Basic operation

Websocketserver will route a TCP/IP stream from a listening socket to a
client via the ws or wss protocol.  Usually the client is a JavaScript application 
running in a browser.  For example, one could tunnel the EnSight vnc protocol to
a viewer in a webpage like this:

- Launch EnSight with an embedded vnc service listening for connections on port 5900


 ```sh
 bin\ensight.bat -vnc "vnc://?primary_password=veronica"
 ```

- Launch websocketserver serving up some web pages (the JavaScript VNC client) on port 9000.  The 
local host port 5900 should be served up via ws:// on port 9090

 ```sh
 bin\cpython.bat nexus###\nexus_launcher\websocketserver.py --http_directory nexus### --http_port 9000 --client_hostname localhost --client_port 5900 --verbose 1 9090
 ```

- In a web browser, browse to this URL

 ```
 http://localhost:9000/ansys###/nexus/novnc/vnc_envision.html?password=veronica&autoconnect=true&host=localhost&port=9090
 ```

 The browser-based VNC client will connect to the running EnSight instance and display 
 the remote imagery.  Websocketserver includes REST API to control its operation.  

- The server may be stopped by browsing to the URL:

 ```
 http://localhost:9000/v1/stop
 ```
