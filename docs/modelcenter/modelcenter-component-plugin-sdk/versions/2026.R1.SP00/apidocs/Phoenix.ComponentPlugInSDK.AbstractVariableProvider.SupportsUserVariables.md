# Property SupportsUserVariables

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## SupportsUserVariables

Gets whether the provider supports user variables. If this
returns true, you must also implement `Phoenix.ModelCenter.Common.IVariableProviderFilter`.

```csharp
public bool SupportsUserVariables { get; protected set; }

```

### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)
