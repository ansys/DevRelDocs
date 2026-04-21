# Interface IReadOnlyComponentConfig

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
public interface IReadOnlyComponentConfig : IDisposable

```

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Remarks

Configurations may contain default file values, which may
use temporary files on disk. You should always reliably
ensure Dispose is called on config objects.

## Properties

[ASComponent](Phoenix.PaczAPI.IReadOnlyComponentConfig.ASComponent.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_ASComponent)

The Analysis Server component name.

[Author](Phoenix.PaczAPI.IReadOnlyComponentConfig.Author.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_Author)

The author of the component.

[Compatibilities](Phoenix.PaczAPI.IReadOnlyComponentConfig.Compatibilities.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_Compatibilities)

Get the list of compatibilities associated with this component.

[Description](Phoenix.PaczAPI.IReadOnlyComponentConfig.Description.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_Description)

Get a description of the component.

[ExternalFiles](Phoenix.PaczAPI.IReadOnlyComponentConfig.ExternalFiles.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_ExternalFiles)

Get the list of external files associated with this component. Null will
never be returned.

[HelpUrl](Phoenix.PaczAPI.IReadOnlyComponentConfig.HelpUrl.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_HelpUrl)

The URL of the help, if any, or null for none.
May be a relative URL.

[Icon](Phoenix.PaczAPI.IReadOnlyComponentConfig.Icon.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_Icon)

The URL of the icon, if any, or null for none.
May be a relative URL.

[Inputs](Phoenix.PaczAPI.IReadOnlyComponentConfig.Inputs.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_Inputs)

Get the default inputs.

[InstanceFiles](Phoenix.PaczAPI.IReadOnlyComponentConfig.InstanceFiles.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_InstanceFiles)

Get the list of instance files associated with this component. Null will
never be returned.

[Outputs](Phoenix.PaczAPI.IReadOnlyComponentConfig.Outputs.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_Outputs)

Get the default outputs.

[PlugInId](Phoenix.PaczAPI.IReadOnlyComponentConfig.PlugInId.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_PlugInId)

The PlugInId of the component.

[Properties](Phoenix.PaczAPI.IReadOnlyComponentConfig.Properties.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_Properties)

An arbitrary dictionary of values that allows a plug-in writer to store data
about the instance without needing to create additional files in the Pacz. Some
values have special meaning as defined in `Phoenix.PaczAPI.CommonProperties`.

[RequiredFeatures](Phoenix.PaczAPI.IReadOnlyComponentConfig.RequiredFeatures.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_RequiredFeatures)

Get the package features required by the component.

[RunFolderPreference](Phoenix.PaczAPI.IReadOnlyComponentConfig.RunFolderPreference.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_RunFolderPreference)

Can multiple runs share the same run directory?
This means that they do not write or modify any files and can share
access to all files they read.

[Version](Phoenix.PaczAPI.IReadOnlyComponentConfig.Version.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_Version)

Get the version of the component.

## Methods

[ToJson(bool)](Phoenix.PaczAPI.IReadOnlyComponentConfig.ToJson.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_ToJson_System_Boolean_)

Write out this object as a JSON string.

[ToJson(Func<FileValue, string>, bool)](Phoenix.PaczAPI.IReadOnlyComponentConfig.ToJson.md#Phoenix_PaczAPI_IReadOnlyComponentConfig_ToJson_System_Func_Phoenix_ModelCenter_Common_Types_FileValue_System_String__System_Boolean_)

Write out this object as a JSON string.
