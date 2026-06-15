# Method SaveAsync

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## SaveAsync()

Save the Pacz to `Phoenix.PaczAPI.IPacz.SourceUri`. If the source points to
a compressed .Pacz, the metadata and extracted files are stored into the
file. If the source points at an uncompressed folder, then the current
metadata is saved to the component.pacj file.

```csharp
Task SaveAsync()

```

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that will be completed when the save is completed.
