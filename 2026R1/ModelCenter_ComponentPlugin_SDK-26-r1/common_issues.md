# Common Issues & Solutions

## User Variable metadata and display tags

Many plugins will map variables in the ModelCenter world to objects in the external system. For example, each Excel Plug-In variable will be mapped to a particular workbook range. Instead of storing this mapping themselves, the plug-in should use the existing user variable tags/metadata to consistently handle this.

## Threading

The runner is run on a single, unique, operating system thread and all calls to it are serialized and proxied to this thread for execution. This provides a sane environment from which the plug-in can safely operate without having to worry about thread safety. If the Plug-In writer wishes to use multiple threads, they can start those threads themselves and deal with the ensuing thread synchronization issues.

The plug-in writer may also safely use Task Asynchronous Programming (TAP, or async/await). We install a `SynchronizationContext` so that all continuations will happen by default on the single thread. If the plug-in writer wishes to let work run on the thread pool, they can use `Task.Run()` or `.ContinueWith(false)` calls. For more information, refer to [Microsoft's task based asynchronous pattern documentation](https://learn.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap).

The builder UI is also run on a single, unique, UI thread and all calls to it are serialized and proxied to this thread for execution. This thread is different than the runner thread. All calls from the UI to the Runner should happen through `IHarnessBuilderUIHost.CallRunnerAsync()`.