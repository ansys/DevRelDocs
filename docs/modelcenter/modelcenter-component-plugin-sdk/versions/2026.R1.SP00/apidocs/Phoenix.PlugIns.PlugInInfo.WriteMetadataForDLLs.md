# Method WriteMetadataForDLLs

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## WriteMetadataForDLLs(params string[])

Write plug-in metadata for a given set of DLLs.
A single metadata file with the name `Phoenix.PlugIns.PlugInInfo.METADATA_FILENAME` will be written in each directory
which contains the targeted DLLs. The file will contain metadata for all the targeted DLLs in that directory.

```csharp
public static void WriteMetadataForDLLs(params string[] dllPaths)

```

### Parameters

`dllPaths` [string](https://learn.microsoft.com/dotnet/api/system.string)[]

Paths to each DLL for which metadata should be written.
The list may be empty, in which case this function will do nothing.
The list may contain duplicates, which will be filtered.
