# Class AbstractVariableProvider

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

An abstract class that provides some default values for `Phoenix.ModelCenter.Common.CommonSelectVariablesForm`

```csharp
public abstract class AbstractVariableProvider : IVariableProviderClean

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[AbstractVariableProvider](Phoenix.ComponentPlugInSDK.AbstractVariableProvider.md)

#### Implements

IVariableProviderClean

#### Inherited Members

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Properties

[Blacklist](Phoenix.ComponentPlugInSDK.AbstractVariableProvider.Blacklist.md#Phoenix_ComponentPlugInSDK_AbstractVariableProvider_Blacklist)

The blacklist name subsititution list.Allows variables from provider to
be ignored. The string value in the dictionary must be exactly one of
"AlwaysInclude", "AlwaysExclude", or "Hidden". May be null to indicate no blacklist.

[NameSubstitutions](Phoenix.ComponentPlugInSDK.AbstractVariableProvider.NameSubstitutions.md#Phoenix_ComponentPlugInSDK_AbstractVariableProvider_NameSubstitutions)

The name substitution list to use. Variables being reported by the provider parameter
will have these names substituted. May be null for no substitutions.

[SupportsUserVariables](Phoenix.ComponentPlugInSDK.AbstractVariableProvider.SupportsUserVariables.md#Phoenix_ComponentPlugInSDK_AbstractVariableProvider_SupportsUserVariables)

Gets whether the provider supports user variables. If this
returns true, you must also implement `Phoenix.ModelCenter.Common.IVariableProviderFilter`.

## Methods

[GetSubGroups(PHXVariable)](Phoenix.ComponentPlugInSDK.AbstractVariableProvider.GetSubGroups.md#Phoenix_ComponentPlugInSDK_AbstractVariableProvider_GetSubGroups_Phoenix_ModelCenter_Common_PHXVariable_)

Call when Tree Node gets expanded so new children can be populated.

[GetSubVariables(PHXVariable)](Phoenix.ComponentPlugInSDK.AbstractVariableProvider.GetSubVariables.md#Phoenix_ComponentPlugInSDK_AbstractVariableProvider_GetSubVariables_Phoenix_ModelCenter_Common_PHXVariable_)

Call when Tree Node gets selected so variables can be supplied
dynamically.

[ListVariables()](Phoenix.ComponentPlugInSDK.AbstractVariableProvider.ListVariables.md#Phoenix_ComponentPlugInSDK_AbstractVariableProvider_ListVariables)

Gets a list of all selectable variables.
