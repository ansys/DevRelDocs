# Interface IComponentConfig

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

This defines the metadata available at the root of a Pacz file.

This information is saved as a JSON formatted file that contains
information about the component/workflow and must always be named
component.pacj. The PACJ format specifies fields that describe the
component, and the information it contains is case sensitive. Much of
the information in the file is used by many programs to describe the
component.

The file must be encoded in UTF-8.

```csharp
public interface IComponentConfig : IReadOnlyComponentConfig, IDisposable

```

#### Implements

[IReadOnlyComponentConfig](Phoenix.PaczAPI.IReadOnlyComponentConfig.md),
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Remarks

Configurations may contain default file values, which may
use temporary files on disk. You should always reliably
ensure Dispose is called on config objects.

## Properties

[ASComponent](Phoenix.PaczAPI.IComponentConfig.ASComponent.md#Phoenix_PaczAPI_IComponentConfig_ASComponent)

The Analysis Server component name.

[Author](Phoenix.PaczAPI.IComponentConfig.Author.md#Phoenix_PaczAPI_IComponentConfig_Author)

The author of the component.

[Compatibilities](Phoenix.PaczAPI.IComponentConfig.Compatibilities.md#Phoenix_PaczAPI_IComponentConfig_Compatibilities)

Get the list of compatibilities associated with this component.

[Description](Phoenix.PaczAPI.IComponentConfig.Description.md#Phoenix_PaczAPI_IComponentConfig_Description)

Get a description of the component.

[ExternalFiles](Phoenix.PaczAPI.IComponentConfig.ExternalFiles.md#Phoenix_PaczAPI_IComponentConfig_ExternalFiles)

Get the list of external files associated with this component. Internally
a sorted set will always be used. Null will never be returned.

[HelpUrl](Phoenix.PaczAPI.IComponentConfig.HelpUrl.md#Phoenix_PaczAPI_IComponentConfig_HelpUrl)

The URL of the help, if any, or null for none.
May be a relative URL.

[Icon](Phoenix.PaczAPI.IComponentConfig.Icon.md#Phoenix_PaczAPI_IComponentConfig_Icon)

The URL of the icon, if any, or null for none.
May be a relative URL.

[InstanceFiles](Phoenix.PaczAPI.IComponentConfig.InstanceFiles.md#Phoenix_PaczAPI_IComponentConfig_InstanceFiles)

Get the list of instance files associated with this component. Internally
a sorted set will always be used. Null will never be returned.

[PlugInId](Phoenix.PaczAPI.IComponentConfig.PlugInId.md#Phoenix_PaczAPI_IComponentConfig_PlugInId)

The PlugInId of the component.

[Properties](Phoenix.PaczAPI.IComponentConfig.Properties.md#Phoenix_PaczAPI_IComponentConfig_Properties)

An arbitrary dictionary of values that allows a plug-in writer to store data
about the instance without needing to create additional files in the Pacz. Some
values have special meaning as defined in `Phoenix.PaczAPI.CommonProperties`. The
system will ensure this is never null.

[RequiredFeatures](Phoenix.PaczAPI.IComponentConfig.RequiredFeatures.md#Phoenix_PaczAPI_IComponentConfig_RequiredFeatures)

Get the package features required by the component.

[RunFolderPreference](Phoenix.PaczAPI.IComponentConfig.RunFolderPreference.md#Phoenix_PaczAPI_IComponentConfig_RunFolderPreference)

Can multiple runs share the same run directory?
This means that they do not write or modify any files and can share
access to all files they read.

[Version](Phoenix.PaczAPI.IComponentConfig.Version.md#Phoenix_PaczAPI_IComponentConfig_Version)

Get the version of the component.

## Methods

[AsReadOnly()](Phoenix.PaczAPI.IComponentConfig.AsReadOnly.md#Phoenix_PaczAPI_IComponentConfig_AsReadOnly)

Returns a protected `Phoenix.PaczAPI.IReadOnlyComponentConfig` view of this object that cannot be typecasted back.

[CloneInputsFrom(IEnumerable<IRuntimeVariable>)](Phoenix.PaczAPI.IComponentConfig.CloneInputsFrom.md#Phoenix_PaczAPI_IComponentConfig_CloneInputsFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Set the `Phoenix.PaczAPI.IReadOnlyComponentConfig.Inputs` by cloning the passed in objects.

[CloneOutputsFrom(IEnumerable<IRuntimeVariable>)](Phoenix.PaczAPI.IComponentConfig.CloneOutputsFrom.md#Phoenix_PaczAPI_IComponentConfig_CloneOutputsFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Set the `Phoenix.PaczAPI.IReadOnlyComponentConfig.Outputs` by cloning the passed in objects.

[MoveInputsFrom(IEnumerable<IRuntimeVariable>)](Phoenix.PaczAPI.IComponentConfig.MoveInputsFrom.md#Phoenix_PaczAPI_IComponentConfig_MoveInputsFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Set the `Phoenix.PaczAPI.IReadOnlyComponentConfig.Inputs` by taking ownership of the passed in objects.

[MoveOutputsFrom(IEnumerable<IRuntimeVariable>)](Phoenix.PaczAPI.IComponentConfig.MoveOutputsFrom.md#Phoenix_PaczAPI_IComponentConfig_MoveOutputsFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Set the `Phoenix.PaczAPI.IReadOnlyComponentConfig.Outputs` by taking ownership of the passed in objects.
