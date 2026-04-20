# Method ConstructAsync

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## ConstructAsync(IHarnessBuilderUIHost<RUNNER>)

Will always be called first to allow the object to instantiate itself.

```csharp
public virtual Task ConstructAsync(IHarnessBuilderUIHost<RUNNER> host)

```

### Parameters

`host` IHarnessBuilderUIHost<RUNNER>

The builder UI will be provided with a host object that gives it context for its environment.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A Task object indicating completion of the request
