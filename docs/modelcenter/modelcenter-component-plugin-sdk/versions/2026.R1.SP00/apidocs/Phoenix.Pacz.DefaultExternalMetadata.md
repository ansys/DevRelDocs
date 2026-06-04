# Class DefaultExternalMetadata

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

Generic implementation of `Phoenix.PaczAPI.IExternalMetadata` that stores, reads, and writes external metadata.

```csharp
public class DefaultExternalMetadata : IExternalMetadata

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[DefaultExternalMetadata](Phoenix.Pacz.DefaultExternalMetadata.md)

#### Derived

[LegacyExternalMetadata](Phoenix.Pacz.Impl.LegacyExternalMetadata.md),
[MinervaExternalMetadata](Phoenix.Pacz.Impl.MinervaExternalMetadata.md)

#### Implements

[IExternalMetadata](Phoenix.PaczAPI.IExternalMetadata.md)

#### Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

[DefaultExternalMetadata()](Phoenix.Pacz.DefaultExternalMetadata.-ctor.md#Phoenix_Pacz_DefaultExternalMetadata__ctor)

Constructor.

[DefaultExternalMetadata(DefaultExternalMetadata)](Phoenix.Pacz.DefaultExternalMetadata.-ctor.md#Phoenix_Pacz_DefaultExternalMetadata__ctor_Phoenix_Pacz_DefaultExternalMetadata_)

Constructor.

## Fields

[METADATA_FILE_NAME](Phoenix.Pacz.DefaultExternalMetadata.METADATA_FILE_NAME.md#Phoenix_Pacz_DefaultExternalMetadata_METADATA_FILE_NAME)

The name of the external metadata file.
This must match the constant in DefaultExternalMetadata.java

[_metadata](Phoenix.Pacz.DefaultExternalMetadata._metadata.md#Phoenix_Pacz_DefaultExternalMetadata__metadata)

Internal map of metadata keys and values.

## Properties

[IsReadOnly](Phoenix.Pacz.DefaultExternalMetadata.IsReadOnly.md#Phoenix_Pacz_DefaultExternalMetadata_IsReadOnly)

If the PACZ is read only

[Metadata](Phoenix.Pacz.DefaultExternalMetadata.Metadata.md#Phoenix_Pacz_DefaultExternalMetadata_Metadata)

The name-value paris of the external metadata.

[Name](Phoenix.Pacz.DefaultExternalMetadata.Name.md#Phoenix_Pacz_DefaultExternalMetadata_Name)

The Name of the Metadata

[ReadOnlyReason](Phoenix.Pacz.DefaultExternalMetadata.ReadOnlyReason.md#Phoenix_Pacz_DefaultExternalMetadata_ReadOnlyReason)

Explination of why the component is read only

[SourceUri](Phoenix.Pacz.DefaultExternalMetadata.SourceUri.md#Phoenix_Pacz_DefaultExternalMetadata_SourceUri)

The Minerva source URI of the Pacz

## Methods

[FromString(string)](Phoenix.Pacz.DefaultExternalMetadata.FromString.md#Phoenix_Pacz_DefaultExternalMetadata_FromString_System_String_)

Creates a `Phoenix.Pacz.DefaultExternalMetadata` object from a JSON serialization of an ExternalMetadata.

[GetMetadataValue(string)](Phoenix.Pacz.DefaultExternalMetadata.GetMetadataValue.md#Phoenix_Pacz_DefaultExternalMetadata_GetMetadataValue_System_String_)

Gets the value associated with a specific piece of metadata.

[ToString()](Phoenix.Pacz.DefaultExternalMetadata.ToString.md#Phoenix_Pacz_DefaultExternalMetadata_ToString)

Serializes this metadata object as a JSON string.

[WriteToFileAsync(string)](Phoenix.Pacz.DefaultExternalMetadata.WriteToFileAsync.md#Phoenix_Pacz_DefaultExternalMetadata_WriteToFileAsync_System_String_)

Writes the external metadata to a file. This does nothing if this does not contain any metadata values.
