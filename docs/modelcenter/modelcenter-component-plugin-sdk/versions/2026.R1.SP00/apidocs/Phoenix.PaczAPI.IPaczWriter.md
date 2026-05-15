# Interface IPaczWriter

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

An API that wraps an extracted pacz and allows the caller to write it to different
locations.

```csharp
public interface IPaczWriter : IExtractedPacz, IReadOnlyExtractedPacz, IDisposable

```

#### Implements

[IExtractedPacz](Phoenix.PaczAPI.IExtractedPacz.md),
[IReadOnlyExtractedPacz](Phoenix.PaczAPI.IReadOnlyExtractedPacz.md),
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Methods

[AsReadOnly()](Phoenix.PaczAPI.IPaczWriter.AsReadOnly.md#Phoenix_PaczAPI_IPaczWriter_AsReadOnly)

Returns a protected read-only view of this object that cannot be typecasted back to IPaczWriter

[ReReadConfigFromExtractionFolder()](Phoenix.PaczAPI.IPaczWriter.ReReadConfigFromExtractionFolder.md#Phoenix_PaczAPI_IPaczWriter_ReReadConfigFromExtractionFolder)

[SaveAsLocalFilesAsync(string)](Phoenix.PaczAPI.IPaczWriter.SaveAsLocalFilesAsync.md#Phoenix_PaczAPI_IPaczWriter_SaveAsLocalFilesAsync_System_String_)

Saves the current pacz to an uncompressed folder. Changes our
`Phoenix.PaczAPI.IReadOnlyExtractedPacz.PaczSource` value.

[SaveAsLocalPaczAsync(string)](Phoenix.PaczAPI.IPaczWriter.SaveAsLocalPaczAsync.md#Phoenix_PaczAPI_IPaczWriter_SaveAsLocalPaczAsync_System_String_)

Saves the current pacz to a compressed .pacz file. The metadata and extracted
files are saved into the compressed .pacz. Changes our
`Phoenix.PaczAPI.IReadOnlyExtractedPacz.PaczSource` value.

[SaveToSourceAsync()](Phoenix.PaczAPI.IPaczWriter.SaveToSourceAsync.md#Phoenix_PaczAPI_IPaczWriter_SaveToSourceAsync)

Save the Pacz to `Phoenix.PaczAPI.IPacz.SourceUri`. If the source points to
a compressed .Pacz, the metadata and extracted files are stored into the
file. If the source points at an uncompressed folder, then the current
metadata is saved to the component.pacj file.

[UpdateSourceAsync(IPacz, string, bool)](Phoenix.PaczAPI.IPaczWriter.UpdateSourceAsync.md#Phoenix_PaczAPI_IPaczWriter_UpdateSourceAsync_Phoenix_PaczAPI_IPacz_System_String_System_Boolean_)

Generally meant to be used only internally by Phoenix Integration. Allows the
out of process host executable to reuse the directory already extracted by the OEM
process. Changes the value of `Phoenix.PaczAPI.IReadOnlyExtractedPacz.PaczSource`,
`Phoenix.PaczAPI.IReadOnlyExtractedPacz.ExtractionFolder`, and whether the extraction
folder should be deleted on dispose.
This also ReReads the Config from the new ExtractionFolder

[WriteConfigToExtractionFolderAsync()](Phoenix.PaczAPI.IPaczWriter.WriteConfigToExtractionFolderAsync.md#Phoenix_PaczAPI_IPaczWriter_WriteConfigToExtractionFolderAsync)

Causes the current `Phoenix.PaczAPI.IExtractedPacz.Config` to be written to
the component.pacj file in `Phoenix.PaczAPI.IReadOnlyExtractedPacz.ExtractionFolder`
