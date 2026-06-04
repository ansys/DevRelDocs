# Interface IPacz

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

Defines a read-only interface for operations on a PACZ file.

```csharp
public interface IPacz

```

## Properties

[Config](Phoenix.PaczAPI.IPacz.Config.md#Phoenix_PaczAPI_IPacz_Config)

The metadata found at the root of the Pacz.

[IsSourceExtracted](Phoenix.PaczAPI.IPacz.IsSourceExtracted.md#Phoenix_PaczAPI_IPacz_IsSourceExtracted)

Whether or not the source is extracted. Will be true for an extracted Pacz or false for a compressed one.

[SourceUri](Phoenix.PaczAPI.IPacz.SourceUri.md#Phoenix_PaczAPI_IPacz_SourceUri)

The original URI of the Pacz. This is the path to the .pacz file for compressed
pacz files and the path to the folder for uncompressed pacz files.
This could be on the local file system, or the URI of a remotely hosted file/folder

## Methods

[ExtractToTempFolderAsync(string)](Phoenix.PaczAPI.IPacz.ExtractToTempFolderAsync.md#Phoenix_PaczAPI_IPacz_ExtractToTempFolderAsync_System_String_)

Tells the pacz to extract to a temp folder. You must call dispose on
the returned IPaczWriter object to clean up the extracted folder.

[OpenAlreadyExtractedFolder(string)](Phoenix.PaczAPI.IPacz.OpenAlreadyExtractedFolder.md#Phoenix_PaczAPI_IPacz_OpenAlreadyExtractedFolder_System_String_)

Generally meant to be used only internally by Phoenix Integration. Allows the
out of process host executable to reuse the directory already extracted by the OEM
process. The returned IPaczWriter.DeleteOnDispose will already
be set to false.
