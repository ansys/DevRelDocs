---
access control: private
---

# Builtin service operation

Websocketserver allows for some pre-configured services, including EnSight and EnVision
to be used.  This can be used to support 3D remote graphics using EnVision like this:

- Launch websocketserver serving up some web pages (http) on port 28000 and the web 
socket protocol on port 28001:

 ```sh
 bin\cpython.bat nexus###\nexus_launcher\websocketserver.py --http_directory nexus### --http_port 28000 --client_hostname localhost --local_session envision 4 --verbose 1 28001
 ```

- In a web browser, browse to this URL:

 ```
 http://localhost:28000/ansys###/nexus/test/viewer_test_vnc.html
 ```

The testing web page will be loaded.  The upper panel displays a proxy image which
may be clicked to launch a new EnVision session.  The lower panel will automatically 
launch an EnVision session, interactively viewing a 3D dataset.


