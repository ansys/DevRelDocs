# Property RunDirectory

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## RunDirectory

This property contains the directory used for running for the component. The behavior of
this field is controlled by Phoenix.PaczAPI.IComponentConfig.RunFolderPreference. If
set to PerRun this will be a new temporary folder on each call to run the harness. If set
to PerProcess, it will be a new temporary folder for each instance.

```csharp
string RunDirectory { get; }

```

### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)
