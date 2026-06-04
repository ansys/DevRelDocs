# Method GetPaczUploadLocation

Namespace: [Phoenix.Pacz.Impl](Phoenix.Pacz.Impl.md)  
Assembly: Phoenix.Pacz.dll

## GetPaczUploadLocation(MinervaRemote)

Return the remote path to upload this pacz to. For a compressed
pacz, it is the folder containing the .pacz file. For an expanded
pacz, it is the grandparent of the .pacj file. Requested creation
items are considered for this location.

```csharp
public static string GetPaczUploadLocation(this MinervaRemote remote)

```

### Parameters

`remote` MinervaRemote

The MinervaRemote object

### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

The remote folder to upload to.
