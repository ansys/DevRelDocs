# Method GetSubVariables

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## GetSubVariables(PHXVariable)

Call when Tree Node gets selected so variables can be supplied
dynamically.

```csharp
public virtual IList<PHXVariable> GetSubVariables(PHXVariable parent)

```

### Parameters

`parent` PHXVariable

The parent group variable whose children should
be returned.

### Returns

[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1)<PHXVariable>

List of new variables to be added dynamically to the dataset
based on the selected node.
