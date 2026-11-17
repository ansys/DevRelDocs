# Authentication requirements

## Granta MI

All host integrations need to authenticate to the Granta MI application server.

[CHECK - How is this going to work / what is going to change when the GIS is moved behind the Service Layer ? ]

[CHECK - Does authentication work differently for server-based integrations (installed on the GIS, behind the Service Layer) and 
client-based integrations (outside the Service Layer)? Assuming yes - split this topic into Server-based and Client-based]

[See MIG-13929 - Web Gateway (client type only?) 'should' work the same way as on-prem GCM, so can the examples that Andy writes for on-prem GCM be reused here?]

## Host application server

In a server-based integration, your host integration plugin also needs to authenticate to the host server, in order to write materials data to your host system.

Depending on the authentication method, you might need to provide additional information in the Host Configuration.

[CHECK - What are the requirements for an account that the plugin can use, that has the appropriate privileges to read and write data, create/edit/delete material objects, etc?]