# Property ImplFile

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## ImplFile

The main file that contains the implementing class. Must be a .dll for DotNet and a
.jar for Java. May be relative to the 'metadata.phxplugin' file.

```csharp
[JsonProperty("implFile")]
[JsonRequired]
public string ImplFile { get; }

```

### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)
