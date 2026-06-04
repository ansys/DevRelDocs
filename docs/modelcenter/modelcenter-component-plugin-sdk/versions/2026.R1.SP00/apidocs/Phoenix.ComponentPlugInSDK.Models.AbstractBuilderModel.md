# Class AbstractBuilderModel

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

Abstract base class for all model objects from MVVM for Builder UI implementations. Provides common
functionality for handling a set of variables and conversions to/from PHXVariable.

```csharp
public abstract class AbstractBuilderModel : AbstractDisposable, IBuilderUIModel, IDisposable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
AbstractDisposable ←
[AbstractBuilderModel](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.md)

#### Derived

[ScriptModel](Phoenix.ComponentPlugInSDK.Models.ScriptModel.md),
[VariableBasedBuilderModel](Phoenix.ComponentPlugInSDK.Models.VariableBasedBuilderModel.md)

#### Implements

[IBuilderUIModel](Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.md),
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

AbstractDisposable.disposed,
AbstractDisposable.Dispose(),
AbstractDisposable.IsDisposed,
AbstractDisposable.Dispose(bool),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

[AbstractBuilderModel()](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.-ctor.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel__ctor)

Constructor

## Properties

[ExternalMetadata](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.ExternalMetadata.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_ExternalMetadata)

The ExternalMetadata, if any, associated with the pacz

[InputVariables](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.InputVariables.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_InputVariables)

The input variables for the plug-in.

[IsReadOnly](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.IsReadOnly.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_IsReadOnly)

If the Pacz that this builder is showing is Read Only and cannot be saved

[OutputVariables](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.OutputVariables.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_OutputVariables)

The output variables for the plug-in.

## Methods

[CloneInputVariablesFrom(IEnumerable<IRuntimeVariable>)](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.CloneInputVariablesFrom.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_CloneInputVariablesFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Sets `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.InputVariables` based on the passed in values

[CloneOutputVariablesFrom(IEnumerable<IRuntimeVariable>)](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.CloneOutputVariablesFrom.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_CloneOutputVariablesFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Sets `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.OutputVariables` based on the passed in values

[Dispose(bool)](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.Dispose.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_Dispose_System_Boolean_)

Standard disposal.

[FromPaczAsync(IReadOnlyExtractedPacz)](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.FromPaczAsync.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_FromPaczAsync_Phoenix_PaczAPI_IReadOnlyExtractedPacz_)

Reads this model in from the given `Phoenix.PaczAPI.IReadOnlyExtractedPacz`

[GetVariablesAsPHXVariable(VariableValueScope)](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.GetVariablesAsPHXVariable.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_GetVariablesAsPHXVariable_Phoenix_ModelCenter_Common_Types_VariableValueScope_)

Retrieves the `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.InputVariables` and `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.OutputVariables`
converted to an enumerable of PHXVariable objects.

[MoveInputVariablesFrom(IEnumerable<IRuntimeVariable>)](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.MoveInputVariablesFrom.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_MoveInputVariablesFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Sets `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.InputVariables` based on the passed in values

[MoveOutputVariablesFrom(IEnumerable<IRuntimeVariable>)](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.MoveOutputVariablesFrom.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_MoveOutputVariablesFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Sets `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.OutputVariables` based on the passed in values

[PHXVariableToRuntimeVariable(PHXVariable)](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.PHXVariableToRuntimeVariable.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_PHXVariableToRuntimeVariable_Phoenix_ModelCenter_Common_PHXVariable_)

Converts from a PHXVariable to an IRuntimeVariable

[PHXVariablesToRuntimeVariables(IEnumerable<PHXVariable>)](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.PHXVariablesToRuntimeVariables.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_PHXVariablesToRuntimeVariables_System_Collections_Generic_IEnumerable_Phoenix_ModelCenter_Common_PHXVariable__)

Converts all passed in PHXVariables into IRuntimeVariables.

[RuntimeVariableToPHXVariable(IRuntimeVariable, bool, VariableValueScope)](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.RuntimeVariableToPHXVariable.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_RuntimeVariableToPHXVariable_Phoenix_PaczAPI_IRuntimeVariable_System_Boolean_Phoenix_ModelCenter_Common_Types_VariableValueScope_)

Converts from an IRuntimeVariable to a PHXVariable

[RuntimeVariablesToPHXVariables(IEnumerable<IRuntimeVariable>, IEnumerable<IRuntimeVariable>, VariableValueScope)](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.RuntimeVariablesToPHXVariables.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_RuntimeVariablesToPHXVariables_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__Phoenix_ModelCenter_Common_Types_VariableValueScope_)

Converts a set of input and output variables into an enumerable of PHXVariable.

[SetVariablesAsPHXVariable(IEnumerable<PHXVariable>)](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.SetVariablesAsPHXVariable.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_SetVariablesAsPHXVariable_System_Collections_Generic_IEnumerable_Phoenix_ModelCenter_Common_PHXVariable__)

Reads a list of PHXVariable objects and replaces the `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.InputVariables`
and `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.OutputVariables` parameters based on this content, converted to
IRuntimeVariables.

[ToPaczAsync(IExtractedPacz)](Phoenix.ComponentPlugInSDK.Models.AbstractBuilderModel.ToPaczAsync.md#Phoenix_ComponentPlugInSDK_Models_AbstractBuilderModel_ToPaczAsync_Phoenix_PaczAPI_IExtractedPacz_)

Writes out this model to the passed in `Phoenix.PaczAPI.IExtractedPacz`
