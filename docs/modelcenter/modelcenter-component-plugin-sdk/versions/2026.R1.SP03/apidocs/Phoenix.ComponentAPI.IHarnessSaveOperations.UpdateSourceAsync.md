# Method UpdateSourceAsync

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## UpdateSourceAsync(IPacz, string, bool)

Generally meant to be used only internally by Phoenix Integration. Allows the
out of process host executable to reuse the directory already extracted by the OEM
process. Changes the value of `Phoenix.PaczAPI.IReadOnlyExtractedPacz.PaczSource`,
`Phoenix.PaczAPI.IReadOnlyExtractedPacz.ExtractionFolder`, and whether the extraction
folder should be deleted on dispose.
This also ReReads the Config from the new ExtractionFolder

```csharp
Task UpdateSourceAsync(IPacz newSource, string extractionFolder, bool deleteOnDispose)

```

### Parameters

`newSource` [IPacz](Phoenix.PaczAPI.IPacz.md)

The new source pacz for this writer

`extractionFolder` [string](https://learn.microsoft.com/dotnet/api/system.string)

The new extraction folder for this writer

`deleteOnDispose` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the extraction folder should be deleted on dispose

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that indicates when the work is completed
