# System requirements

## Granta MI system

Granta MI Enterprise 2027 R1

The Granta MI system that hosts the data must have the following components installed and configured:

* Granta MI Selection Service (including the Gateway Web Service)
* Granta Integration Core (including the Granta MI Integration Service)

### Database configuration

For the standard configuration requirements for databases used with MI Materials Gateway, see MI Materials Gateway Installation and Configuration.

Depending on your host application, additional configuration might be needed. For example, to add units or unit systems that are used by your host application.

## Host application

To integrate with Granta MI, a host application must have an API interface with the following capabilities.

* The ability to import material cards and ideally store metadata (GUIDs)
* The ability to send HTTP/S requests and parse JSON responses (applies to desktop-based integrations only)

## Software prerequisites

Server-based integrations require:

* .NET 10 SDK
* The `Ansys.GrantaMI.IntegrationCore.ServerPlugin` assembly, available in Granta MI installation CD `extras`, in the `IntegrationDevKit.zip`.
