# Getting started

The Discovery extensibility shares the same architecture as the SpaceClaim Add-in based customization. As a result of this design, many of the extensibility related APIs are coming from the `SpaceClaim.Api.V22 dll`. The physics related Discovery APIs, as well as some UI extensibility APIs that are specific to the Discovery product, are found in the `Discovery.Api.V22.dll`. There is no forward compatibility between SpaceClaim and Discovery Add-in, but the underlying architecture is the same: an Add-in that uses the SpaceClaim APIs to customize the User Interface will typically need some tweaks and adjustments to account for the difference in the User Interface between the two products. On the other hand, the geometry APIs used in a SpaceClaim add-in are fully functional in Discovery.

A Discovery add-in is a .NET class library assembly that implements at a minimum the IExtensibility interface. This interface provides the entry point for the add-in and allows the add-in to perform any initialization.

Add-ins that customize the Discovery Ribbon will also need to implement the ICommandExtensibility and IRibbonExtensibility interfaces.

## Add-in Startup

During startup, Discovery will perform the following steps to load and initialize add-ins:

1.  Locates all [XML manifest](c_disco_api_manifest.md) files that describe available add-ins.

2.  Uses the assembly and type name specified in the manifest file to create the add-in object.

3.  Verifies that the add-in object implements the IExtensibility interface, and then calls `IExtensiblity.Connect`. The add-in performs any internal initialization at this time.

4.  Checks to see if the add-in implements the optional interfaces ICommandExtensibility and IRibbonExtensibility.


## Add-in Close down

When Discovery is closed, add-in’s `IExtensiblity.Disconnect` method is called.

