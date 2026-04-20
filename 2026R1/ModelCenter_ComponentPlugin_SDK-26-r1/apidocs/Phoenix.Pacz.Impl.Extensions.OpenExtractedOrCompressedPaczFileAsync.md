# Method OpenExtractedOrCompressedPaczFileAsync

Namespace: [Phoenix.Pacz.Impl](Phoenix.Pacz.Impl.md)  
Assembly: Phoenix.Pacz.dll

## OpenExtractedOrCompressedPaczFileAsync(IPaczClient, string)

Opens a PACZ file or directory. This mehod determines whether the PACZ is extracted or compressed based on
whether the path to the PACZ ends with a .pacz file.

```csharp
public static Task<IPacz> OpenExtractedOrCompressedPaczFileAsync(this IPaczClient paczClient, string paczLocation)

```

### Parameters

`paczClient` [IPaczClient](Phoenix.PaczAPI.IPaczClient.md)

The client to use for opening the PACZ.

`paczLocation` [string](https://learn.microsoft.com/dotnet/api/system.string)

The location of the PACZ. This can be a local path or a Minerva URI.
For compressed PACZs, this is the location of the .pacz file.
For extracted PACZs, this can be either the location of the component.pacj file or the location of the
directory that contains the component.pacj file.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IPacz](Phoenix.PaczAPI.IPacz.md)>

The IPacz object for the opened PACZ.

### Remarks

This calls either `Phoenix.PaczAPI.IPaczClient.OpenExtractedPaczFileAsync(System.String,System.Boolean)` or `Phoenix.PaczAPI.IPaczClient.OpenPaczFileAsync(System.String,System.Boolean)`
based on whether paczPath points to a .pacz file.

## OpenExtractedOrCompressedPaczFileAsync(IPaczClient, string, bool)

Opens a PACZ file or directory.

```csharp
public static Task<IPacz> OpenExtractedOrCompressedPaczFileAsync(this IPaczClient paczClient, string paczLocation, bool isCompressed)

```

### Parameters

`paczClient` [IPaczClient](Phoenix.PaczAPI.IPaczClient.md)

The client to use for opening the PACZ.

`paczLocation` [string](https://learn.microsoft.com/dotnet/api/system.string)

The location of the PACZ. This can be a local path or a Minerva URI.
For compressed PACZs, this is the location of the .pacz file.
For extracted PACZs, this can be either the location of the component.pacj file or the location of the
directory that contains the component.pacj file.

`isCompressed` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the PACZ is compressed or extracted.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IPacz](Phoenix.PaczAPI.IPacz.md)>

The IPacz object for the opened PACZ.

### Remarks

This calls either `Phoenix.PaczAPI.IPaczClient.OpenExtractedPaczFileAsync(System.String,System.Boolean)` or `Phoenix.PaczAPI.IPaczClient.OpenPaczFileAsync(System.String,System.Boolean)`
based on isCompressed.
