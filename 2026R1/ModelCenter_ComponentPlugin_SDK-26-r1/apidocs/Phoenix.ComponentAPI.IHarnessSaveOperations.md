# Interface IHarnessSaveOperations

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

Common save operations used from both
`Phoenix.ComponentAPI.IHarnessBuilderUISession` and
`Phoenix.ComponentAPI.IHarnessLocalEditSession`.

```csharp
public interface IHarnessSaveOperations

```

## Methods

[SaveAsLocalFilesAsync(string)](Phoenix.ComponentAPI.IHarnessSaveOperations.SaveAsLocalFilesAsync.md#Phoenix_ComponentAPI_IHarnessSaveOperations_SaveAsLocalFilesAsync_System_String_)

Saves the current pacz to an uncompressed folder. The metadata is saved to
component.pacj. Associated files are copied to the folder. The
`Phoenix.PaczAPI.IPacz.SourceUri` is updated to reflect the new location.

[SaveAsLocalPaczAsync(string)](Phoenix.ComponentAPI.IHarnessSaveOperations.SaveAsLocalPaczAsync.md#Phoenix_ComponentAPI_IHarnessSaveOperations_SaveAsLocalPaczAsync_System_String_)

Gets the Runner associated with this builder.
Saves the current pacz to a compressed .pacz file. The metadata and extracted
files are saved into the compressed .pacz. The `Phoenix.PaczAPI.IPacz.SourceUri`
is updated to reflect the new location.

[SaveAsync()](Phoenix.ComponentAPI.IHarnessSaveOperations.SaveAsync.md#Phoenix_ComponentAPI_IHarnessSaveOperations_SaveAsync)

Save the Pacz to `Phoenix.PaczAPI.IPacz.SourceUri`. If the source points to
a compressed .Pacz, the metadata and extracted files are stored into the
file. If the source points at an uncompressed folder, then the current
metadata is saved to the component.pacj file.

[UpdateSourceAsync(IPacz, string, bool)](Phoenix.ComponentAPI.IHarnessSaveOperations.UpdateSourceAsync.md#Phoenix_ComponentAPI_IHarnessSaveOperations_UpdateSourceAsync_Phoenix_PaczAPI_IPacz_System_String_System_Boolean_)

Generally meant to be used only internally by Phoenix Integration. Allows the
out of process host executable to reuse the directory already extracted by the OEM
process. Changes the value of `Phoenix.PaczAPI.IReadOnlyExtractedPacz.PaczSource`,
`Phoenix.PaczAPI.IReadOnlyExtractedPacz.ExtractionFolder`, and whether the extraction
folder should be deleted on dispose.
This also ReReads the Config from the new ExtractionFolder
