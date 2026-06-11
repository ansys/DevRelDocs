# Method ConstructAsync

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## ConstructAsync(IHarnessBuilderUIHost<RUNNER>)

Derived classes typically do not need to override this behavior as they
can interject code in the Model and in `Phoenix.ComponentPlugInSDK.AbstractModelBasedBuilderUI`2.LoadFromPaczAsync(Phoenix.PaczAPI.IExtractedPacz)`.

```csharp
public override Task ConstructAsync(IHarnessBuilderUIHost<RUNNER> host)

```

### Parameters

`host` IHarnessBuilderUIHost<RUNNER>

The host object

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A Task indicating completion
