# Method FromString

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## FromString(string)

Creates a `Phoenix.Pacz.DefaultExternalMetadata` object from a JSON serialization of an ExternalMetadata.

```csharp
public static DefaultExternalMetadata FromString(string jsonString)

```

### Parameters

`jsonString` [string](https://learn.microsoft.com/dotnet/api/system.string)

The JSON serialized metadata object.

### Returns

[DefaultExternalMetadata](Phoenix.Pacz.DefaultExternalMetadata.md)

The created ExternalMetadata. If the JSON string is null or empty, the returned object will have no metadata.
