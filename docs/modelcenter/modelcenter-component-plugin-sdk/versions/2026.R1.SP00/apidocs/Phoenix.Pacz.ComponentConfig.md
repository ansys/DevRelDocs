# Class ComponentConfig

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

A concrete implementation of IComponentConfig.

This class implements IComponentConfig and adds the ability to change it after it
has been created.

This class is not thread safe.

```csharp
public class ComponentConfig : AbstractDisposable, IComponentConfig, IReadOnlyComponentConfig, IDisposable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
AbstractDisposable ←
[ComponentConfig](Phoenix.Pacz.ComponentConfig.md)

#### Implements

[IComponentConfig](Phoenix.PaczAPI.IComponentConfig.md),
[IReadOnlyComponentConfig](Phoenix.PaczAPI.IReadOnlyComponentConfig.md),
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

AbstractDisposable.disposed,
AbstractDisposable.Dispose(),
AbstractDisposable.IsDisposed,
AbstractDisposable.Dispose(bool),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

Configurations may contain default file values, which may
use temporary files on disk. You should always reliably
ensure Dispose is called on config objects.

## Constructors

[ComponentConfig(Guid, RunFolderPreference, IReadOnlyList<RuntimeVariable>, IReadOnlyList<RuntimeVariable>, string, string, IReadOnlyList<string>, IEnumerable<InstanceFile>, IEnumerable<ExternalFile>, IReadOnlyList<Compatibility>, IDictionary<string, object>, Uri, Uri, string, string)](Phoenix.Pacz.ComponentConfig.-ctor.md#Phoenix_Pacz_ComponentConfig__ctor_System_Guid_Phoenix_PaczAPI_RunFolderPreference_System_Collections_Generic_IReadOnlyList_Phoenix_Pacz_RuntimeVariable__System_Collections_Generic_IReadOnlyList_Phoenix_Pacz_RuntimeVariable__System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IEnumerable_Phoenix_Pacz_InstanceFile__System_Collections_Generic_IEnumerable_Phoenix_Pacz_ExternalFile__System_Collections_Generic_IReadOnlyList_Phoenix_Pacz_Compatibility__System_Collections_Generic_IDictionary_System_String_System_Object__System_Uri_System_Uri_System_String_System_String_)

Constructor

[ComponentConfig(IReadOnlyComponentConfig)](Phoenix.Pacz.ComponentConfig.-ctor.md#Phoenix_Pacz_ComponentConfig__ctor_Phoenix_PaczAPI_IReadOnlyComponentConfig_)

Copy constructor. Creates a ComponentConfig that is a clone of the source.

## Properties

[ASComponent](Phoenix.Pacz.ComponentConfig.ASComponent.md#Phoenix_Pacz_ComponentConfig_ASComponent)

The Analysis Server component name.

[Author](Phoenix.Pacz.ComponentConfig.Author.md#Phoenix_Pacz_ComponentConfig_Author)

The author of the component.

[Compatibilities](Phoenix.Pacz.ComponentConfig.Compatibilities.md#Phoenix_Pacz_ComponentConfig_Compatibilities)

Get the list of compatibilities associated with this component.

[Description](Phoenix.Pacz.ComponentConfig.Description.md#Phoenix_Pacz_ComponentConfig_Description)

Get a description of the component.

[ExternalFiles](Phoenix.Pacz.ComponentConfig.ExternalFiles.md#Phoenix_Pacz_ComponentConfig_ExternalFiles)

Get the list of external files associated with this component. Internally
a sorted set will always be used. Null will never be returned.

[HelpUrl](Phoenix.Pacz.ComponentConfig.HelpUrl.md#Phoenix_Pacz_ComponentConfig_HelpUrl)

The URL of the help, if any, or null for none.
May be a relative URL.

[Icon](Phoenix.Pacz.ComponentConfig.Icon.md#Phoenix_Pacz_ComponentConfig_Icon)

The URL of the icon, if any, or null for none.
May be a relative URL.

[Inputs](Phoenix.Pacz.ComponentConfig.Inputs.md#Phoenix_Pacz_ComponentConfig_Inputs)

Get the default inputs.

[InstanceFiles](Phoenix.Pacz.ComponentConfig.InstanceFiles.md#Phoenix_Pacz_ComponentConfig_InstanceFiles)

Get the list of instance files associated with this component. Internally
a sorted set will always be used. Null will never be returned.

[Outputs](Phoenix.Pacz.ComponentConfig.Outputs.md#Phoenix_Pacz_ComponentConfig_Outputs)

Get the default outputs.

[PlugInId](Phoenix.Pacz.ComponentConfig.PlugInId.md#Phoenix_Pacz_ComponentConfig_PlugInId)

The PlugInId of the component.

[Properties](Phoenix.Pacz.ComponentConfig.Properties.md#Phoenix_Pacz_ComponentConfig_Properties)

An arbitrary dictionary of values that allows a plug-in writer to store data
about the instance without needing to create additional files in the Pacz. Some
values have special meaning as defined in `Phoenix.PaczAPI.CommonProperties`. The
system will ensure this is never null.

[RequiredFeatures](Phoenix.Pacz.ComponentConfig.RequiredFeatures.md#Phoenix_Pacz_ComponentConfig_RequiredFeatures)

Get the package features required by the component.

[RunFolderPreference](Phoenix.Pacz.ComponentConfig.RunFolderPreference.md#Phoenix_Pacz_ComponentConfig_RunFolderPreference)

Can multiple runs share the same run directory?
This means that they do not write or modify any files and can share
access to all files they read.

[Version](Phoenix.Pacz.ComponentConfig.Version.md#Phoenix_Pacz_ComponentConfig_Version)

Get the version of the component.

## Methods

[AsReadOnly()](Phoenix.Pacz.ComponentConfig.AsReadOnly.md#Phoenix_Pacz_ComponentConfig_AsReadOnly)

Returns a protected `Phoenix.PaczAPI.IReadOnlyComponentConfig` view of this object that cannot be typecasted back.

[CloneInputsFrom(IEnumerable<IRuntimeVariable>)](Phoenix.Pacz.ComponentConfig.CloneInputsFrom.md#Phoenix_Pacz_ComponentConfig_CloneInputsFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Set the `Phoenix.PaczAPI.IReadOnlyComponentConfig.Inputs` by cloning the passed in objects.

[CloneOutputsFrom(IEnumerable<IRuntimeVariable>)](Phoenix.Pacz.ComponentConfig.CloneOutputsFrom.md#Phoenix_Pacz_ComponentConfig_CloneOutputsFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Set the `Phoenix.PaczAPI.IReadOnlyComponentConfig.Outputs` by cloning the passed in objects.

[Dispose(bool)](Phoenix.Pacz.ComponentConfig.Dispose.md#Phoenix_Pacz_ComponentConfig_Dispose_System_Boolean_)

Standard disposal.

[FromJson(string)](Phoenix.Pacz.ComponentConfig.FromJson.md#Phoenix_Pacz_ComponentConfig_FromJson_System_String_)

Reads in a JSON string and creates a ComponentConfig.

[FromJson(string, Func<string, Handle<FileDeleter>>)](Phoenix.Pacz.ComponentConfig.FromJson.md#Phoenix_Pacz_ComponentConfig_FromJson_System_String_System_Func_System_String_Phoenix_DotNetUtils_Handle_Phoenix_DotNetUtils_FileDeleter___)

Reads in a JSON string and creates a ComponentConfig.

[MoveInputsFrom(IEnumerable<IRuntimeVariable>)](Phoenix.Pacz.ComponentConfig.MoveInputsFrom.md#Phoenix_Pacz_ComponentConfig_MoveInputsFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Set the `Phoenix.PaczAPI.IReadOnlyComponentConfig.Inputs` by taking ownership of the passed in objects.

[MoveOutputsFrom(IEnumerable<IRuntimeVariable>)](Phoenix.Pacz.ComponentConfig.MoveOutputsFrom.md#Phoenix_Pacz_ComponentConfig_MoveOutputsFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Set the `Phoenix.PaczAPI.IReadOnlyComponentConfig.Outputs` by taking ownership of the passed in objects.

[ToJson(bool)](Phoenix.Pacz.ComponentConfig.ToJson.md#Phoenix_Pacz_ComponentConfig_ToJson_System_Boolean_)

Write out this object as a JSON string.

[ToJson(Func<FileValue, string>, bool)](Phoenix.Pacz.ComponentConfig.ToJson.md#Phoenix_Pacz_ComponentConfig_ToJson_System_Func_Phoenix_ModelCenter_Common_Types_FileValue_System_String__System_Boolean_)

Write out this object as a JSON string.
