# Property RunFolderPreference

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## RunFolderPreference

Can multiple runs share the same run directory?
This means that they do not write or modify any files and can share
access to all files they read.

```csharp
[JsonProperty("runFolderPreference", DefaultValueHandling = DefaultValueHandling.Populate)]
RunFolderPreference RunFolderPreference { get; set; }

```

### Property Value

[RunFolderPreference](Phoenix.PaczAPI.RunFolderPreference.md)
