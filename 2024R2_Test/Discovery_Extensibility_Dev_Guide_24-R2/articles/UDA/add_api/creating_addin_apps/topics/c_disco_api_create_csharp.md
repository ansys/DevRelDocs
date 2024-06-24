# Creating a C# add-in

The steps below describe how to create a Discovery C# add-in.

## Creating the add-In Visual Studio project

1.  In Microsoft Visual Studio, create a new C# Class Library project.

2.  Add a reference to the API assemblies. Use the Add Reference command in Visual Studio, go to the Browse tab, and locate the API assemblies.

    -   For APIs shared with SpaceClaim in the `SpaceClaim.Api.V22` folder inside the Discovery installation folder.
    -   For Discovery specific APIs in the `Discovery.Api.V22` folder inside the Discovery installation folder.

## Add-in initialization

1.  The class that serves as the entry point for the add-in must inherit from AddIn and implement the IExtensibility interface.
2.  Perform any internal add-in initialization in the Connect method.
3.  Perform any internal add-in cleanup in the Disconnect method.

## Example code

```
using SpaceClaim.Api.V22;

using SpaceClaim.Api.V22.Extensibility;
namespace YourCompany.Example {
    public class SampleAddIn : AddIn, IExtensibility {
        #region IExtensibility Members
        public bool Connect() {
            // perform any initialization for your add-in here
            return true;
        }

        public void Disconnect() {
            // perform any cleanup for your add-in here
        }
        #endregion
    }
}
```

