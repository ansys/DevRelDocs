# Getting started

The Discovery extensibility shares the same architecture as SpaceClaim add-in customization. For 2027 R1, shared APIs are provided by the `SpaceClaim.Api.V271` assemblies, while Discovery-specific physics and user-interface APIs are provided by the `Discovery.Api.V271` assemblies. SpaceClaim and Discovery add-ins are not forward-compatible with each other. However, the underlying architecture is similar: an add-in that uses SpaceClaim APIs to customize the user interface may need adjustments for differences between the products, while the geometry APIs used in a SpaceClaim add-in are available in Discovery.

A Discovery add-in is a .NET class library assembly that implements at a minimum the IExtensibility interface. This interface provides the entry point for the add-in and allows the add-in to perform any initialization.

Add-ins that customize the Discovery Ribbon will also need to implement the ICommandExtensibility and IRibbonExtensibility interfaces.

## Add-in Startup

During startup, Discovery will perform the following steps to load and initialize add-ins:

1.  Locates all [XML manifest](c_disco_api_manifest.md) files that describe available add-ins.

2.  Uses the assembly and type name specified in the manifest file to create the add-in object.

3.  Verifies that the add-in object implements the IExtensibility interface, and then calls `IExtensibility.Connect`. The add-in performs any internal initialization at this time.

4.  Checks to see if the add-in implements the optional interfaces ICommandExtensibility and IRibbonExtensibility.


## Add-in Close down

When Discovery is closed, add-in’s `IExtensibility.Disconnect` method is called.

