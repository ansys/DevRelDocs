# Interface IBuilderUIModel

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

This interface defines a model object, typically from a MVVM pattern, that can be saved and loaded from an `Phoenix.PaczAPI.IExtractedPacz`

```csharp
public interface IBuilderUIModel : IDisposable

```

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

[ExternalMetadata](Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.ExternalMetadata.md#Phoenix_ComponentPlugInSDK_Models_IBuilderUIModel_ExternalMetadata)

The ExternalMetadata, if any, associated with the pacz

[InputVariables](Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.InputVariables.md#Phoenix_ComponentPlugInSDK_Models_IBuilderUIModel_InputVariables)

Gets or sets the list of input variables

[IsReadOnly](Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.IsReadOnly.md#Phoenix_ComponentPlugInSDK_Models_IBuilderUIModel_IsReadOnly)

If the Pacz that this builder is showing is Read Only and cannot be saved

[OutputVariables](Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.OutputVariables.md#Phoenix_ComponentPlugInSDK_Models_IBuilderUIModel_OutputVariables)

Gets or sets the list of output variables

## Methods

[CloneInputVariablesFrom(IEnumerable<IRuntimeVariable>)](Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.CloneInputVariablesFrom.md#Phoenix_ComponentPlugInSDK_Models_IBuilderUIModel_CloneInputVariablesFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Sets `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.InputVariables` based on the passed in values

[CloneOutputVariablesFrom(IEnumerable<IRuntimeVariable>)](Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.CloneOutputVariablesFrom.md#Phoenix_ComponentPlugInSDK_Models_IBuilderUIModel_CloneOutputVariablesFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Sets `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.OutputVariables` based on the passed in values

[FromPaczAsync(IReadOnlyExtractedPacz)](Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.FromPaczAsync.md#Phoenix_ComponentPlugInSDK_Models_IBuilderUIModel_FromPaczAsync_Phoenix_PaczAPI_IReadOnlyExtractedPacz_)

Reads this model in from the given `Phoenix.PaczAPI.IReadOnlyExtractedPacz`

[GetVariablesAsPHXVariable(VariableValueScope)](Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.GetVariablesAsPHXVariable.md#Phoenix_ComponentPlugInSDK_Models_IBuilderUIModel_GetVariablesAsPHXVariable_Phoenix_ModelCenter_Common_Types_VariableValueScope_)

Retrieves the `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.InputVariables` and `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.OutputVariables`
converted to an enumerable of PHXVariable objects.

[MoveInputVariablesFrom(IEnumerable<IRuntimeVariable>)](Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.MoveInputVariablesFrom.md#Phoenix_ComponentPlugInSDK_Models_IBuilderUIModel_MoveInputVariablesFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Sets `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.InputVariables` based on the passed in values

[MoveOutputVariablesFrom(IEnumerable<IRuntimeVariable>)](Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.MoveOutputVariablesFrom.md#Phoenix_ComponentPlugInSDK_Models_IBuilderUIModel_MoveOutputVariablesFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__)

Sets `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.OutputVariables` based on the passed in values

[SetVariablesAsPHXVariable(IEnumerable<PHXVariable>)](Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.SetVariablesAsPHXVariable.md#Phoenix_ComponentPlugInSDK_Models_IBuilderUIModel_SetVariablesAsPHXVariable_System_Collections_Generic_IEnumerable_Phoenix_ModelCenter_Common_PHXVariable__)

Reads a list of PHXVariable objects and replaces the `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.InputVariables`
and `Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.OutputVariables` parameters based on this content, converted to
IRuntimeVariables.

[ToPaczAsync(IExtractedPacz)](Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.ToPaczAsync.md#Phoenix_ComponentPlugInSDK_Models_IBuilderUIModel_ToPaczAsync_Phoenix_PaczAPI_IExtractedPacz_)

Writes out this model to the passed in `Phoenix.PaczAPI.IExtractedPacz`
