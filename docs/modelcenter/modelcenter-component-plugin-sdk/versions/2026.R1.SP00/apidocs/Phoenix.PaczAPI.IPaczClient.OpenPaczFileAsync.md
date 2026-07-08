# Method OpenPaczFileAsync

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## OpenPaczFileAsync(string, bool)

Opens a compressed pacz by loading a named .pacz file.

This method is thread safe.

```csharp
Task<IPacz> OpenPaczFileAsync(string filename, bool skipInitialization = false)

```

### Parameters

`filename` [string](https://learn.microsoft.com/dotnet/api/system.string)

The .pacz file to open

`skipInitialization` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Allows for initialization of the pacz to be skipped.
This option is generally meant to be used only internally by Phoenix Integration.
It allows the out of process host to skip initialization so that an PACZ opened by
the in-process can be reused.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IPacz](Phoenix.PaczAPI.IPacz.md)>

A task that when complete contains a new instance of IPacz
