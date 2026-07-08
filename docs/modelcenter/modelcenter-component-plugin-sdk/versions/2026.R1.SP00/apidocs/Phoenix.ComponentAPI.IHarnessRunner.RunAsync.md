# Method RunAsync

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## RunAsync(IReadOnlyDictionary<string, VariableState>, VariableValueScope, CancellationToken)

Tells this harness to run.

```csharp
Task RunAsync(IReadOnlyDictionary<string, VariableState> inputs, VariableValueScope outputs, CancellationToken cancellation)

```

### Parameters

`inputs` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), VariableState>

The inputs to evaluate. All inputs for the harness will always be sent.

`outputs` VariableValueScope

The dictionary to fill up with outputs. The dictionary passed will be pre-filled in
with all the output variables, their default values, with all the states set to invalid. Most harnesses
should always return all outputs on a successful run as true. The infrastructure supports returning
partial results for failed runs, however not all tools within the framework currently support this.

`cancellation` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A cancellation token that will indicate if the component has been halted.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A Task indicating completion

### Remarks

If you want to save any `Phoenix.ModelCenter.Common.Types.FileValue` objects passed here for later use, you must
`Phoenix.ModelCenter.Common.Types.FileValue.Clone` them. The preferred way to do this is to use
`Phoenix.ModelCenter.Common.Types.VariableValueScope.CloneFrom(System.Collections.Generic.IEnumerable{System.Collections.Generic.KeyValuePair{System.String,Phoenix.ModelCenter.Common.Types.VariableState}})`

### Exceptions

[Exception](https://learn.microsoft.com/dotnet/api/system.exception)

This method may throw any exception on failure.
