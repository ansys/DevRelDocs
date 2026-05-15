# Method FromJson

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## FromJson(string)

Reads in a JSON string and creates a ComponentConfig.

```csharp
public static ComponentConfig FromJson(string json)

```

### Parameters

`json` [string](https://learn.microsoft.com/dotnet/api/system.string)

The JSON to read

### Returns

[ComponentConfig](Phoenix.Pacz.ComponentConfig.md)

The created ComponentConfig

### Remarks

This version does not support file variables

### Exceptions

[NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

If a `Phoenix.PaczAPI.IRuntimeVariable.DefaultValue`
is of type `Phoenix.ModelCenter.Common.Types.FileValue` and it contains contents

[Exception](https://learn.microsoft.com/dotnet/api/system.exception)

If there are any errors converting from JSON

## FromJson(string, Func<string, Handle<FileDeleter>>)

Reads in a JSON string and creates a ComponentConfig.

```csharp
public static ComponentConfig FromJson(string json, Func<string, Handle<FileDeleter>> fileStore)

```

### Parameters

`json` [string](https://learn.microsoft.com/dotnet/api/system.string)

The JSON to read

`fileStore` [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), Handle<FileDeleter>>

If a `Phoenix.PaczAPI.IRuntimeVariable.DefaultValue` is of type
FileValue and has contents this function will be called to allow the caller to read
the contents out of bounds from the JSON. The string that was returned from the fileStore
passed to `Phoenix.PaczAPI.IReadOnlyComponentConfig.ToJson(System.Func{Phoenix.ModelCenter.Common.Types.FileValue,System.String},System.Boolean)` will
be passed to this function and this function is expected to return a handle to a file on
disk to be used by the FileValue.

### Returns

[ComponentConfig](Phoenix.Pacz.ComponentConfig.md)

The created ComponentConfig

### Exceptions

[Exception](https://learn.microsoft.com/dotnet/api/system.exception)

If there are any errors converting to JSON
