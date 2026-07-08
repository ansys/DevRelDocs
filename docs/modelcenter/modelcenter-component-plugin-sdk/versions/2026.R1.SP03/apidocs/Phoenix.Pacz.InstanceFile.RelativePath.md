# Property RelativePath

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## RelativePath

The relative path to the file.
Note that the Pacz format specifies that all paths should be saved with forward slashes as the path separator,
but that all backslashes will be interpreted as path separators as well.
Therefore, when the information about this instance file is written out to a Pacz, the file will contain
the value of this property with all backslashes replaced with forward slashes.
Additionally, when this property is read from a Pacz, forward and backslashes in the Pacz will be replaced
with the platform's path separator.

```csharp
[JsonIgnore]
public string RelativePath { get; set; }

```

### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)
