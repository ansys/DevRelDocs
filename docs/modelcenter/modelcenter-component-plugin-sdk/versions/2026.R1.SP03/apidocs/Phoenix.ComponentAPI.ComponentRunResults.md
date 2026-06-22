# Class ComponentRunResults

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

An almost immutable class that contains the results of a run evaluation.

```csharp
public class ComponentRunResults : AbstractDisposable, IDisposable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
AbstractDisposable ←
[ComponentRunResults](Phoenix.ComponentAPI.ComponentRunResults.md)

#### Implements

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

This class may contain FileValue instances that own temp files on disk. All uses
of this class should be used in a using block, or otherwise reliably disposed.

The exception to immutability is `Phoenix.ComponentAPI.ComponentRunResults.MoveResultsTo(Phoenix.ModelCenter.Common.Types.VariableValueScope)`

## Properties

[ResultMetadata](Phoenix.ComponentAPI.ComponentRunResults.ResultMetadata.md#Phoenix_ComponentAPI_ComponentRunResults_ResultMetadata)

Metadata about each run.

[ResultValues](Phoenix.ComponentAPI.ComponentRunResults.ResultValues.md#Phoenix_ComponentAPI_ComponentRunResults_ResultValues)

The output variable values.

## Methods

[CreateCanceled()](Phoenix.ComponentAPI.ComponentRunResults.CreateCanceled.md#Phoenix_ComponentAPI_ComponentRunResults_CreateCanceled)

Creates a new ComponentRunResults in the Canceled state.

[CreateCloneFrom(IReadOnlyDictionary<string, VariableState>, ComponentRunResultsMetadata)](Phoenix.ComponentAPI.ComponentRunResults.CreateCloneFrom.md#Phoenix_ComponentAPI_ComponentRunResults_CreateCloneFrom_System_Collections_Generic_IReadOnlyDictionary_System_String_Phoenix_ModelCenter_Common_Types_VariableState__Phoenix_ComponentAPI_ComponentRunResultsMetadata_)

Creates a new ComponentRunResults by making a clone of the given data.

[Dispose(bool)](Phoenix.ComponentAPI.ComponentRunResults.Dispose.md#Phoenix_ComponentAPI_ComponentRunResults_Dispose_System_Boolean_)

Standard disposal.

[MoveResultsTo(VariableValueScope)](Phoenix.ComponentAPI.ComponentRunResults.MoveResultsTo.md#Phoenix_ComponentAPI_ComponentRunResults_MoveResultsTo_Phoenix_ModelCenter_Common_Types_VariableValueScope_)

Puts the results from this object into the passed in scope. This object will show zero results
after calling this function.

[MoveStateFrom(IEnumerable<KeyValuePair<string, VariableState>>, ComponentRunResultsMetadata)](Phoenix.ComponentAPI.ComponentRunResults.MoveStateFrom.md#Phoenix_ComponentAPI_ComponentRunResults_MoveStateFrom_System_Collections_Generic_IEnumerable_System_Collections_Generic_KeyValuePair_System_String_Phoenix_ModelCenter_Common_Types_VariableState___Phoenix_ComponentAPI_ComponentRunResultsMetadata_)

Creates a new instance of a ComponentRunResults.

[MoveStateFrom(VariableValueScope, ComponentRunResultsMetadata)](Phoenix.ComponentAPI.ComponentRunResults.MoveStateFrom.md#Phoenix_ComponentAPI_ComponentRunResults_MoveStateFrom_Phoenix_ModelCenter_Common_Types_VariableValueScope_Phoenix_ComponentAPI_ComponentRunResultsMetadata_)

Creates a new instance of a ComponentRunResults by moving the data.
