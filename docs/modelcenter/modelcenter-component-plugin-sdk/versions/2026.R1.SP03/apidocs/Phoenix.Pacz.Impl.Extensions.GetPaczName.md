# Method GetPaczName

Namespace: [Phoenix.Pacz.Impl](Phoenix.Pacz.Impl.md)  
Assembly: Phoenix.Pacz.dll

## GetPaczName(MinervaRemote, bool)

Get the name of this MinervaRemote object's pacz. Requested creation
items are considered in this name.

```csharp
public static string GetPaczName(this MinervaRemote remote, bool includeExtension = false)

```

### Parameters

`remote` MinervaRemote

The MinervaRemote object

`includeExtension` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Include .pacz for compressed paczs

### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

The name of this pacz
