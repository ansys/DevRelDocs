# Method GetHighlightNames

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## GetHighlightNames(IEnumerable<string>)

Gets a list of names to highlight from an enumerable of variables.
Note: the highlighter uses Regex matching.
Each item is matched as a regex word and special characters need to be escaped.
To highlight "obj.value", include "obj.value" in the returned list.

```csharp
IEnumerable<string> GetHighlightNames(IEnumerable<string> variables)

```

### Parameters

`variables` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

The variables that should be highlighted.

### Returns

[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

An enumerable of strings that should be highlighted
