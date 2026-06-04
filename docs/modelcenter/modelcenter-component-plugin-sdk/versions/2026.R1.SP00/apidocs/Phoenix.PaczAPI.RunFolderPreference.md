# Enum RunFolderPreference

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

Preference for how files within the .pacz should be handled when running a component.

```csharp
[JsonConverter(typeof(StringEnumConverter))]
public enum RunFolderPreference

```

## Fields

`PerProcess = 1`

New run directory should be created for each process of a component. If one process is used
to execute multiple runs of a component, only one directory will be created for all runs to
use. This preference should be used when result capture is not needed, or if a component does
not modify files during its execution (including log files). This mode should be chosen if
unsure which mode a component should use.

`PerRun = 0`

New run directory should be created for each run of a component. If one process is used to
execute multiple runs of a component, each run will have a separate directory to keep its files.
This preference should be used when needing result capture, or if a component modifies files
during its execution (including log files).
