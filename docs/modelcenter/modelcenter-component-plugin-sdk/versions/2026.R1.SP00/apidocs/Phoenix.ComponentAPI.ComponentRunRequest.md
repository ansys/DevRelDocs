# Class ComponentRunRequest

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

An immutable class that contains the information necessary to run a component.

```csharp
public class ComponentRunRequest : AbstractDisposable, IDisposable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
AbstractDisposable ←
[ComponentRunRequest](Phoenix.ComponentAPI.ComponentRunRequest.md)

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

## Constructors

[ComponentRunRequest()](Phoenix.ComponentAPI.ComponentRunRequest.-ctor.md#Phoenix_ComponentAPI_ComponentRunRequest__ctor)

Creates an empty run request with no input variables specified.

## Properties

[InputValues](Phoenix.ComponentAPI.ComponentRunRequest.InputValues.md#Phoenix_ComponentAPI_ComponentRunRequest_InputValues)

The input values to use for this set of runs.

## Methods

[CreateCloneFrom(IEnumerable<KeyValuePair<string, VariableState>>)](Phoenix.ComponentAPI.ComponentRunRequest.CreateCloneFrom.md#Phoenix_ComponentAPI_ComponentRunRequest_CreateCloneFrom_System_Collections_Generic_IEnumerable_System_Collections_Generic_KeyValuePair_System_String_Phoenix_ModelCenter_Common_Types_VariableState___)

Creates a new ComponentRunRequest by making a clone of the given data.

[CreateCloneFrom(IEnumerable<IRuntimeVariable>, IEnumerable<KeyValuePair<string, VariableState>>)](Phoenix.ComponentAPI.ComponentRunRequest.CreateCloneFrom.md#Phoenix_ComponentAPI_ComponentRunRequest_CreateCloneFrom_System_Collections_Generic_IEnumerable_Phoenix_PaczAPI_IRuntimeVariable__System_Collections_Generic_IEnumerable_System_Collections_Generic_KeyValuePair_System_String_Phoenix_ModelCenter_Common_Types_VariableState___)

Creates a new ComponentRunRequest by making a clone of the given data, filtered by a set of inputs.

[CreateCloneFrom(IEnumerable<string>, IEnumerable<KeyValuePair<string, VariableState>>)](Phoenix.ComponentAPI.ComponentRunRequest.CreateCloneFrom.md#Phoenix_ComponentAPI_ComponentRunRequest_CreateCloneFrom_System_Collections_Generic_IEnumerable_System_String__System_Collections_Generic_IEnumerable_System_Collections_Generic_KeyValuePair_System_String_Phoenix_ModelCenter_Common_Types_VariableState___)

Creates a new ComponentRunRequest by making a clone of the given data, filtered by a set of inputs.

[CreateFromConfigDefaults(IReadOnlyComponentConfig)](Phoenix.ComponentAPI.ComponentRunRequest.CreateFromConfigDefaults.md#Phoenix_ComponentAPI_ComponentRunRequest_CreateFromConfigDefaults_Phoenix_PaczAPI_IReadOnlyComponentConfig_)

Creates a new ComponentRunRequest by taking all the input default values from a component config

[Dispose(bool)](Phoenix.ComponentAPI.ComponentRunRequest.Dispose.md#Phoenix_ComponentAPI_ComponentRunRequest_Dispose_System_Boolean_)

Standard disposal.

[MoveStateFrom(IEnumerable<KeyValuePair<string, VariableState>>)](Phoenix.ComponentAPI.ComponentRunRequest.MoveStateFrom.md#Phoenix_ComponentAPI_ComponentRunRequest_MoveStateFrom_System_Collections_Generic_IEnumerable_System_Collections_Generic_KeyValuePair_System_String_Phoenix_ModelCenter_Common_Types_VariableState___)

Creates a new ComponentRunRequest by taking ownership of all the variable values passed in.

[MoveStateFrom(VariableValueScope)](Phoenix.ComponentAPI.ComponentRunRequest.MoveStateFrom.md#Phoenix_ComponentAPI_ComponentRunRequest_MoveStateFrom_Phoenix_ModelCenter_Common_Types_VariableValueScope_)

Creates a new ComponentRunRequest by taking all variables from the given scope.
