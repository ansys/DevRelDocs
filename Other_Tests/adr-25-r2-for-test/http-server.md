---
access control: private
---

# HTTP server 

If --http_port is provided on the command line, websocketserver will start an HTTP server on that port that will serve up readonly copies of the file tree rooted at the directory pointed to by --http_directory.  It will allow the user to browse the files and can be used to deliver additional web content.  Two URL namespaces are reserved by the server. The /v1/ root pathname (and future /v{x}/ pathnames) are reserved for the [REST API](./rest-api.md).
The /ansys/ root pathname is reserved for the purpose of serving other [Ansys services](#ansys-adr-viewer-service).
 
## Ansys ADR Viewer Service

If the GET pathname starts with /ansys/, then the directory content served up will be the ADR /ansys directory.  For example, if one specified --http_directory as /tmp, then `http://{host}:{port}/tmp/foo` would return the file /tmp/foo to the caller.  The URL `http://{host}:{port}/ansys###/nexus/viewer-loader.js`, then the file returned will be `{install_root}/ansys###/nexus/viewer-loader.js`.  This makes it easy to start a 3D viewer service via \ref webcomponentviewer_api.

## EnSight REST API Service

Starting with 2024 R1, EnSight now supports a [REST API](https://ensight.docs.pyansys.com/dev/rest_api/rest_api.html).
Websocketserver can be configured to serve up this API as well.  To do this, websocketserver needs to be able to create a gRPC connection to the EnSight instance.  The --grpc_port command line option is used for this.  It is assumed the host is the same as --client_hostname.  Note that one must provide a security key in this case.  That key will be used as the sessionid for the REST API.



