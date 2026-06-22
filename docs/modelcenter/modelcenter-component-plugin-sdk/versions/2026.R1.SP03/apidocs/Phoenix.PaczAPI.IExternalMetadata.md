# Interface IExternalMetadata

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

Interface representing metadata from an external source associated with a Pacz. This metadata is not saved with
the Pacz. It is retrieved from the external source when it changes.
An example of external metadata is metadata from the Minerva server (file ID, revision, etc.) for Minerva Paczs.

```csharp
public interface IExternalMetadata

```

## Properties

[IsReadOnly](Phoenix.PaczAPI.IExternalMetadata.IsReadOnly.md#Phoenix_PaczAPI_IExternalMetadata_IsReadOnly)

If the PACZ is read only

[Metadata](Phoenix.PaczAPI.IExternalMetadata.Metadata.md#Phoenix_PaczAPI_IExternalMetadata_Metadata)

The name-value paris of the external metadata.

[Name](Phoenix.PaczAPI.IExternalMetadata.Name.md#Phoenix_PaczAPI_IExternalMetadata_Name)

The Name of the Metadata

[ReadOnlyReason](Phoenix.PaczAPI.IExternalMetadata.ReadOnlyReason.md#Phoenix_PaczAPI_IExternalMetadata_ReadOnlyReason)

Explination of why the component is read only

[SourceUri](Phoenix.PaczAPI.IExternalMetadata.SourceUri.md#Phoenix_PaczAPI_IExternalMetadata_SourceUri)

The Minerva source URI of the Pacz

## Methods

[GetMetadataValue(string)](Phoenix.PaczAPI.IExternalMetadata.GetMetadataValue.md#Phoenix_PaczAPI_IExternalMetadata_GetMetadataValue_System_String_)

Gets the value associated with a specific piece of metadata.
