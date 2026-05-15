# Method KeepFolderOnDispose

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## KeepFolderOnDispose()

If the `Phoenix.PaczAPI.IReadOnlyExtractedPacz.ExtractionFolder` is a temporary folder, it would
normally be deleted on dispose. Calling this method causes this not to
happen and the files will be left behind. Generally you should not use
this function.

```csharp
void KeepFolderOnDispose()

```
