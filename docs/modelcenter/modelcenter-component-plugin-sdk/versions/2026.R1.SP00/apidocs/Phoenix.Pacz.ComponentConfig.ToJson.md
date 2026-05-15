# Method ToJson

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## ToJson(bool)

Write out this object as a JSON string.

```csharp
public string ToJson(bool pretty = true)

```

### Parameters

`pretty` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether to make the JSON human readable

### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

A string containing the generated JSON

### Remarks

This version does not support file variables

### Exceptions

[NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

If a `Phoenix.PaczAPI.IRuntimeVariable.DefaultValue`
is of type `Phoenix.ModelCenter.Common.Types.FileValue` and it contains contents

[Exception](https://learn.microsoft.com/dotnet/api/system.exception)

If there are any errors converting to JSON

## ToJson(Func<FileValue, string>, bool)

Write out this object as a JSON string.

```csharp
public string ToJson(Func<FileValue, string> fileStore, bool pretty = true)

```

### Parameters

`fileStore` [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<FileValue, [string](https://learn.microsoft.com/dotnet/api/system.string)>

If a `Phoenix.PaczAPI.IRuntimeVariable.DefaultValue` is of type
FileValue and has contents this function will be called to allow the caller to store
the contents out of bounds from the JSON. The string returned will be stored in the JSON.

`pretty` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether to make the JSON human readable

### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

A string containing the generated JSON

### Exceptions

[Exception](https://learn.microsoft.com/dotnet/api/system.exception)

If there are any errors converting to JSON
