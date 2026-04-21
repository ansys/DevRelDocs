# Struct ComponentRunResultsMetadata

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

An immutable structure that contains metadata about a particular run.

```csharp
public struct ComponentRunResultsMetadata

```

#### Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

[ComponentRunResultsMetadata(RunStatus, Exception)](Phoenix.ComponentAPI.ComponentRunResultsMetadata.-ctor.md#Phoenix_ComponentAPI_ComponentRunResultsMetadata__ctor_Phoenix_ComponentAPI_RunStatus_System_Exception_)

Constructor

## Properties

[Error](Phoenix.ComponentAPI.ComponentRunResultsMetadata.Error.md#Phoenix_ComponentAPI_ComponentRunResultsMetadata_Error)

If ResultStatus is Error, this will contain an exception describing the error. Otherwise
it will contain null.

[ResultStatus](Phoenix.ComponentAPI.ComponentRunResultsMetadata.ResultStatus.md#Phoenix_ComponentAPI_ComponentRunResultsMetadata_ResultStatus)

The status of this run.

## Methods

[IsValidStatus(RunStatus)](Phoenix.ComponentAPI.ComponentRunResultsMetadata.IsValidStatus.md#Phoenix_ComponentAPI_ComponentRunResultsMetadata_IsValidStatus_Phoenix_ComponentAPI_RunStatus_)

Given a status, check if it is a valid status for a component run result.
The valid statuses are those that indicate that the run is complete -
`Phoenix.ComponentAPI.RunStatus.SUCCESS`, `Phoenix.ComponentAPI.RunStatus.FAILED`, `Phoenix.ComponentAPI.RunStatus.CANCELED`.

[RequireValidStatus(RunStatus, string)](Phoenix.ComponentAPI.ComponentRunResultsMetadata.RequireValidStatus.md#Phoenix_ComponentAPI_ComponentRunResultsMetadata_RequireValidStatus_Phoenix_ComponentAPI_RunStatus_System_String_)

Given a run status, check if it is a valid status for a run result.
If it is valid, return the provided status.
Otherwise, throw an `System.ArgumentOutOfRangeException`.
