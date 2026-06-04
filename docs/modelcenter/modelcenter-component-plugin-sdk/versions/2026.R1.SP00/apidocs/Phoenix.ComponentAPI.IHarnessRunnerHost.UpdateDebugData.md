# Method UpdateDebugData

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## UpdateDebugData(Dictionary<string, string>)

Plug-in implementations may supply custom debugging data for the debugging UI by calling this method.

To add debug information to display to the user, supply a string-to-string map
where keys are a display label for the value.
The keys supplied become "permanent." You may remove a key from the debug display
by passing the key in question with a null value.

Note that the host application may not display debugging data until a run is requested.

```csharp
void UpdateDebugData(Dictionary<string, string> debugData)

```

### Parameters

`debugData` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)>

the debug data update
