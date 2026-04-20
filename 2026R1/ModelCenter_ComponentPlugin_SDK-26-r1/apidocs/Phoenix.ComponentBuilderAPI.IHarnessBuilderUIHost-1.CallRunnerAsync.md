# Method CallRunnerAsync<T>

Namespace: [Phoenix.ComponentBuilderAPI](Phoenix.ComponentBuilderAPI.md)  
Assembly: Phoenix.ComponentBuilderAPI.dll

## CallRunnerAsync<T>(Func<IHarnessRunnerHost, RUNNER, T>)

The builder UI and the runner will not be in the same thread. Use this function to safely access
the runner. The function passed in will be invoked on the runner's thread and any return values
will be provided via the Task`T` return value.

Note: Do not access UI elements from the passed in function. Instead, collect results into the returned
object and use them from the return value.

```csharp
Task<T> CallRunnerAsync<T>(Func<IHarnessRunnerHost, RUNNER, T> function)

```

### Parameters

`function` [Func](https://learn.microsoft.com/dotnet/api/system.func-3)<IHarnessRunnerHost, RUNNER, T>

A function to be invoked on the runner thread. Do not save the passed in objects
for later use.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<T>

A task that will contain the result of the function when it is finished.

### Type Parameters

`T`

The object type that the function returns.

## CallRunnerAsync<T>(Func<IHarnessRunnerHost, RUNNER, Task<T>>)

The builder UI and the runner will not be in the same thread. Use this function to safely access
the runner. The function passed in will be invoked on the runner's thread and any return values
will be provided via the Task`T` return value.

Note: Do not access UI elements from the passed in function. Instead, collect results into the returned
object and use them from the return value.

```csharp
Task<T> CallRunnerAsync<T>(Func<IHarnessRunnerHost, RUNNER, Task<T>> asyncFunction)

```

### Parameters

`asyncFunction` [Func](https://learn.microsoft.com/dotnet/api/system.func-3)<IHarnessRunnerHost, RUNNER, [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<T>>

A function to be invoked on the runner thread. Do not save the passed in objects
for later use.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<T>

A task that will contain the result of the function's task when it is finished.

### Type Parameters

`T`

The object type that the function returns.

## CallRunnerAsync(Action<IHarnessRunnerHost, RUNNER>)

The builder UI and the runner will not be in the same thread. Use this function to safely access
the runner. The action passed in will be invoked on the runner's thread.

Note: Do not access UI elements from the passed in action. If you need results from the runner,
use the overload that returns a value. `Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost`1.CallRunnerAsync``1(System.Func{Phoenix.ComponentAPI.IHarnessRunnerHost,`0,``0})`

```csharp
Task CallRunnerAsync(Action<IHarnessRunnerHost, RUNNER> action)

```

### Parameters

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<IHarnessRunnerHost, RUNNER>

The action to be invoked on the runner thread. Do not save the passed in objects for later use.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that will be completed when the action has finished running.

## CallRunnerAsync(Func<IHarnessRunnerHost, RUNNER, Task>)

The builder UI and the runner will not be in the same thread. Use this function to safely access
the runner. The action passed in will be invoked on the runner's thread.

Note: Do not access UI elements from the passed in action. If you need results from the runner,
use the overload that returns a value. `Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost`1.CallRunnerAsync``1(System.Func{Phoenix.ComponentAPI.IHarnessRunnerHost,`0,``0})`

```csharp
Task CallRunnerAsync(Func<IHarnessRunnerHost, RUNNER, Task> asyncAction)

```

### Parameters

`asyncAction` [Func](https://learn.microsoft.com/dotnet/api/system.func-3)<IHarnessRunnerHost, RUNNER, [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)>

The action to be invoked on the runner thread. Do not save the passed in objects for later use.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that will be completed when the action's task has finished.
