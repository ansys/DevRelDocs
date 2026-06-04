# Property VariableValueScope

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## VariableValueScope

If non-null, this class will set the default value for any File variable
objects from the given scope using the variable's name as the key

```csharp
public VariableValueScope VariableValueScope { get; set; }

```

### Property Value

VariableValueScope

### Remarks

It is up to the caller to ensure that the passed in scope is Disposed, but not
before this control has been closed.
