# Property HelpUrl

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## HelpUrl

The URL of the help, if any, or null for none.
May be a relative URL.

```csharp
[JsonProperty("helpUrl", NullValueHandling = NullValueHandling.Ignore)]
Uri HelpUrl { get; set; }

```

### Property Value

[Uri](https://learn.microsoft.com/dotnet/api/system.uri)
