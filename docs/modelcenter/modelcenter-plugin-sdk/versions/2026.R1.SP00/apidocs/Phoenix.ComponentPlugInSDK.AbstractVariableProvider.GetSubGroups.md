# Method GetSubGroups

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## GetSubGroups(PHXVariable)

Call when Tree Node gets expanded so new children can be populated.

```csharp
public virtual IList<PHXVariable> GetSubGroups(PHXVariable parent)

```

### Parameters

`parent` PHXVariable

The parent group variable whose child group
variables should be returned.

### Returns

[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1)<PHXVariable>

List of new PHXVariables used to populate children of
expanded node
