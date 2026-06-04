# Interface IReadOnlyExtractedPacz

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

This interface represents a Pacz that has been extracted to a local file on disk for
use by a live component. Depending on whether the source is local or remote, and whether
the source is a compressed or uncompressed pacz, it may point to a local temporary directory
or to the actual source files.

```csharp
public interface IReadOnlyExtractedPacz : IDisposable

```

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

[Config](Phoenix.PaczAPI.IReadOnlyExtractedPacz.Config.md#Phoenix_PaczAPI_IReadOnlyExtractedPacz_Config)

The current config file from the local extraction folder

[ExternalMetadata](Phoenix.PaczAPI.IReadOnlyExtractedPacz.ExternalMetadata.md#Phoenix_PaczAPI_IReadOnlyExtractedPacz_ExternalMetadata)

Metadata about the Pacz from an external source. For example, the remote ID of the Pacz file for
Paczs hosted on a remote server.

[ExtractionFolder](Phoenix.PaczAPI.IReadOnlyExtractedPacz.ExtractionFolder.md#Phoenix_PaczAPI_IReadOnlyExtractedPacz_ExtractionFolder)

The folder where the files exist. May be a temporary folder, or the original
source

[PaczSource](Phoenix.PaczAPI.IReadOnlyExtractedPacz.PaczSource.md#Phoenix_PaczAPI_IReadOnlyExtractedPacz_PaczSource)

The IPacz that was the source of these files

## Methods

[ExportAsLocalFilesAsync(string)](Phoenix.PaczAPI.IReadOnlyExtractedPacz.ExportAsLocalFilesAsync.md#Phoenix_PaczAPI_IReadOnlyExtractedPacz_ExportAsLocalFilesAsync_System_String_)

Exports the current pacz to an uncompressed folder. This has the
side-effect of forcing any current state in
`Phoenix.PaczAPI.IExtractedPacz.Config` to the extraction
folder but otherwise does not affect this object or
`Phoenix.PaczAPI.IReadOnlyExtractedPacz.PaczSource`.

[ExportAsLocalPaczAsync(string)](Phoenix.PaczAPI.IReadOnlyExtractedPacz.ExportAsLocalPaczAsync.md#Phoenix_PaczAPI_IReadOnlyExtractedPacz_ExportAsLocalPaczAsync_System_String_)

Exports the current pacz to a compressed .pacz file. The metadata and extracted
files are saved into the compressed .pacz. This has the side-effect of forcing
any current state in `Phoenix.PaczAPI.IExtractedPacz.Config` to the extraction
folder but otherwise does not affect this object or
`Phoenix.PaczAPI.IReadOnlyExtractedPacz.PaczSource`.

[KeepFolderOnDispose()](Phoenix.PaczAPI.IReadOnlyExtractedPacz.KeepFolderOnDispose.md#Phoenix_PaczAPI_IReadOnlyExtractedPacz_KeepFolderOnDispose)

If the `Phoenix.PaczAPI.IReadOnlyExtractedPacz.ExtractionFolder` is a temporary folder, it would
normally be deleted on dispose. Calling this method causes this not to
happen and the files will be left behind. Generally you should not use
this function.
