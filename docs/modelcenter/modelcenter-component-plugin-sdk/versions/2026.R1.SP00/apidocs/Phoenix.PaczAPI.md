# Namespace Phoenix.PaczAPI

### Classes

[CommonProperties](Phoenix.PaczAPI.CommonProperties.md)

This class defines common properties that all components may use in
the `Phoenix.PaczAPI.IComponentConfig.Properties` field.

[VariableValueScopeExtensions](Phoenix.PaczAPI.VariableValueScopeExtensions.md)

Extension functions that enable filling a scope from an IReadOnlyComponentConfig

### Interfaces

[ICompatibility](Phoenix.PaczAPI.ICompatibility.md)

Compatibility warning for files being loaded by older software versions.

[IComponentConfig](Phoenix.PaczAPI.IComponentConfig.md)

This defines the metadata available at the root of a Pacz file.

This information is saved as a JSON formatted file that contains
information about the component/workflow and must always be named
component.pacj. The PACJ format specifies fields that describe the
component, and the information it contains is case sensitive. Much of
the information in the file is used by many programs to describe the
component.

The file must be encoded in UTF-8.

[IExternalFile](Phoenix.PaczAPI.IExternalFile.md)

External file referenced from a component.

[IExternalMetadata](Phoenix.PaczAPI.IExternalMetadata.md)

Interface representing metadata from an external source associated with a Pacz. This metadata is not saved with
the Pacz. It is retrieved from the external source when it changes.
An example of external metadata is metadata from the Minerva server (file ID, revision, etc.) for Minerva Paczs.

[IExtractedPacz](Phoenix.PaczAPI.IExtractedPacz.md)

Extends a `Phoenix.PaczAPI.IReadOnlyExtractedPacz` with the ability to change
the `Phoenix.PaczAPI.IComponentConfig` object. This configuration will be stored
in memory and would only be saved via the `Phoenix.PaczAPI.IPaczWriter` interface.

[IInstanceFile](Phoenix.PaczAPI.IInstanceFile.md)

Instance file within a component.

[IPacz](Phoenix.PaczAPI.IPacz.md)

Defines a read-only interface for operations on a PACZ file.

[IPaczClient](Phoenix.PaczAPI.IPaczClient.md)

The main entry point for operations on Pacz files. Create an instance of this
interface using Dependency Injection, then use it to get instances of IPacz and
IPaczWriter for use.

The methods of this class are thread safe.

[IPaczWriter](Phoenix.PaczAPI.IPaczWriter.md)

An API that wraps an extracted pacz and allows the caller to write it to different
locations.

[IReadOnlyComponentConfig](Phoenix.PaczAPI.IReadOnlyComponentConfig.md)

This defines the metadata available at the root of a Pacz file.

This information is saved as a JSON formatted file that contains
information about the component/workflow and must always be named
component.pacj. The PACJ format specifies fields that describe the
component, and the information it contains is case sensitive. Much of
the information in the file is used by many programs to describe the
component.

The file must be encoded in UTF-8.

[IReadOnlyExtractedPacz](Phoenix.PaczAPI.IReadOnlyExtractedPacz.md)

This interface represents a Pacz that has been extracted to a local file on disk for
use by a live component. Depending on whether the source is local or remote, and whether
the source is a compressed or uncompressed pacz, it may point to a local temporary directory
or to the actual source files.

[IRuntimeVariable](Phoenix.PaczAPI.IRuntimeVariable.md)

A variable as defined in a component configuration. Contains a name, metadata,
and a default value.

[IUpdatableSet<T>](Phoenix.PaczAPI.IUpdatableSet-1.md)

Represents a set whose items will be updated by an add if the item already exist based on the comparator.
This allows types that use only part of their contents in their comparator to be updated by calling the add methods.

### Enums

[RunFolderPreference](Phoenix.PaczAPI.RunFolderPreference.md)

Preference for how files within the .pacz should be handled when running a component.
