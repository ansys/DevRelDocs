# Method GetHighlightNames

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## GetHighlightNames(IEnumerable<string>)

Provides a default behavior of only including variables not grouped.

```csharp
public virtual IEnumerable<string> GetHighlightNames(IEnumerable<string> variables)

```

### Parameters

`variables` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

The variables that should be highlighted.

### Returns

[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

An enumerable of strings that should be highlighted
