# Threading

## Overview

Understanding threading is crucial for developing robust and reliable PACZ component plug-ins. The SDK provides strong threading guarantees that simplify development while ensuring thread safety. This guide explains how threading works in the plug-in architecture and how to safely use advanced threading patterns.

## Thread safety guarantees

The PACZ component plug-in SDK provides automatic thread safety for both the Runner and Builder UI portions of your plug-in.

### Runner thread

The Runner executes on a **single, unique, dedicated thread**:

- All calls to the Runner are serialized and marshaled to this thread
- You never need to worry about concurrent access to Runner state
- Multiple run requests are queued and executed one at a time
- This provides a safe environment where you can maintain state without locks

**What this means for you:**

- Write Runner code as if it's single-threaded
- Use async/await code when available for performance
- No need for locks, mutexes, or other synchronization primitives for Runner state
- State variables in the Runner class are safe to use without protection

### Builder UI thread

The Builder UI also runs on a **single, unique, dedicated thread**:

- All UI operations and callbacks are marshaled to this thread
- The UI thread is **different** from the Runner thread
- This follows standard UI threading patterns (similar to WPF/WinForms)

**What this means for you:**

- Write UI code as if it's single-threaded
- Never directly call blocking methods. Use async/await alternatives, `Thread.Run()`, or [`IHarnessBuilderUIHost.CallRunnerAsync<T>()`](apidocs/Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost-1.CallRunnerAsync.md)
- UI elements MUST only be accessed from the UI thread
- To call the Runner from the UI, use [`IHarnessBuilderUIHost.CallRunnerAsync<T>()`](apidocs/Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost-1.CallRunnerAsync.md)

## Communicating between UI and runner

Since the Builder UI and Runner operate on different threads, the SDK provides a safe communication mechanism.

### Calling the runner from the builder UI

Always use [`IHarnessBuilderUIHost.CallRunnerAsync<T>()`](apidocs/Phoenix.ComponentBuilderAPI.IHarnessBuilderUIHost-1.CallRunnerAsync.md) to invoke Runner methods from the Builder UI:

```csharp
// In your Builder UI class
await Host.CallRunnerAsync(async (runner) =>
{
    // This code executes on the Runner thread
    await runner.SomeCustomMethod();
});
```

**Never** try to call Runner methods directly from the Builder UI thread - this causes threading issues.

### Do not use UI from the runner

The runner should never create, modify, or display any UI.

## Task asynchronous programming (async/await)

The SDK fully supports the .NET Task Asynchronous Programming (TAP) pattern using `async` and `await`.

### Synchronization context

The SDK installs a `SynchronizationContext` for both the Runner and Builder UI threads:

- Continuations after `await` automatically return to the same thread
- This makes async/await safe and convenient to use
- You can write natural asynchronous code without worrying about thread affinity

### Example: Asynchronous operations in the runner

```csharp
public async Task RunAsync(IReadOnlyDictionary<string, VariableState> inputs,
                          VariableValueScope outputs,
                          CancellationToken cancellation)
{
    // Get input
    double x = (RealValue)inputs["x"].SafeValue;
    
    // Call an async method - continuation returns to Runner thread automatically
    double result = await SomeAsyncComputation(x);
    
    // Safe to set outputs - we're still on the Runner thread
    outputs["y"] = new VariableState(new RealValue(result));
}

private async Task<double> SomeAsyncComputation(double value)
{
    // Simulate async work
    await Task.Delay(100);
    return value * 2;
}
```

### Running work on the thread pool

If you want to explicitly run work on the .NET thread pool instead of the Runner or UI thread, and you have CPU intensive or blocking calls, use a long-running operation:

```csharp
// Option 1: a long-running background task
var result = await Task.Factory.StartNew(() => {
    // This blocking code runs on a dedicated thread
    return ExpensiveComputation();
}, TaskCreationOptions.LongRunning);
// After await, we're back on the Runner thread
```

If you want a modest performance boost with async/await based code that does not block or have CPU intensive operations:

```csharp
// Option 2: ConfigureAwait(false)
var result = await SomeAsyncMethod().ConfigureAwait(false);
// After this await, continuation may run on a thread pool thread
// Be careful - you're no longer on the original thread. DO NOT MODIFY UI OR SHARED STATE
```

**Warning**:

- Do not access Runner or UI state from background or thread pool threads. Return values instead
- Do not use `Task.Run()` as it rarely is the right thing to do and often causes subtle performance issues or hangs.
- You are responsible for using synchronization primitives such as locks to protect any data you wish to share between threads.

## Session management

Managing connections to external tools (Excel, CATIA, databases, etc.) requires careful consideration of threading and resource lifecycle.

### Expensive resource initialization

If your plug-in uses an expensive-to-create resource:

- **Lazy initialization**: Create the resource on first use in `RunAsync()` rather than in `ConstructAsync()`
- **Caching**: Store the resource as a field in the Runner class
- **Cleanup**: Implement `IDisposable` if reliable cleanup is required
- **UI access**: Store the external resource in the runner. Use `CallRunnerAsync()` from the UI to access it in a thread-safe way.

```csharp
private ExpensiveTool _tool;

public async Task RunAsync(...)
{
    // Initialize on first run only
    if (_tool == null)
    {
        _tool = new ExpensiveTool();
        _tool.Connect(); //O.K. to call blocking methods from the runner thread
    }
    
    // Use the cached tool
    double result = _tool.Execute(inputs);
    outputs["y"] = new VariableState(new RealValue(result));
}
```

### Sharing sessions between builder UI and runner

The Builder UI and Runner run on different threads and may need to share access to an external tool. Only access the tool from the Runner, call it via `CallRunnerAsync()` from UI

```csharp

// In your Runner class
public Dictionary<string, double> GetCurrentState()
{
    _tool.SomeMethod();
    return _tool.CurrentState;
}

// In your Builder UI class
var valuesINeedInUI = await Host.CallRunnerAsync(async (runner) =>
{
    // This code executes on the Runner thread
    var result = runner.GetCurrentState(); //O.K. to call blocking calls
    await Task.CompletedTask;
    return result;
});
```

## Debugging threading issues

### Common symptoms

- Deadlocks (plug-in hangs)
- Race conditions (intermittent incorrect results)
- Cross-thread exceptions (especially with UI controls)

## Best practices summary

1. **Trust the SDK**: Let the SDK handle thread marshaling for Runner and Builder UI
1. **Use async/await**: Leverage TAP for clean, efficient asynchronous code
1. **Minimize shared state**: Avoid mutable state shared between threads
1. **Document thread requirements**: Clearly comment which methods expect which thread
1. **Keep it simple**: Only use manual threading when necessary

## Additional resources

- [.NET Task Asynchronous Programming (TAP)](https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap)
- [SynchronizationContext in .NET](https://docs.microsoft.com/en-us/archive/msdn-magazine/2011/february/msdn-magazine-parallel-computing-it-s-all-about-the-synchronizationcontext)
- [Thread-Safe Collections in .NET](https://docs.microsoft.com/en-us/dotnet/standard/collections/thread-safe/)

## Questions?

If you have threading-related questions not covered here, please:

- Check the [FAQ](faq.md) for common issues
- Review example plug-ins in the repository
- Contact Ansys support for assistance
