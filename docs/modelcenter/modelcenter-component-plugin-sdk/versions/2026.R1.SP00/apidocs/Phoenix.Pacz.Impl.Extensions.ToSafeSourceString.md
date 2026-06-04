# Method ToSafeSourceString

Namespace: [Phoenix.Pacz.Impl](Phoenix.Pacz.Impl.md)  
Assembly: Phoenix.Pacz.dll

## ToSafeSourceString(Uri)

Get a string representation of the URI, but omits the "file:///" scheme for file URI
This makes the string play nice with methods like `System.IO.File.Exists(System.String)`

```csharp
public static string ToSafeSourceString(this Uri uri)

```

### Parameters

`uri` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)

The uri to format as an absoluteUri but omiting a 'file' scheme

### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

The LocalPath for file URIs or else the AbsolutePath
