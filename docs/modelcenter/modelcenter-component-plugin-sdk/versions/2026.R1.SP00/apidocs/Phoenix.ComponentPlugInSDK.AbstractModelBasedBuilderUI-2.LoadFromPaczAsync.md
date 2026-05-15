# Method LoadFromPaczAsync

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## LoadFromPaczAsync(IExtractedPacz)

Performs any necessary initialization of the Component Builder

```csharp
protected abstract Task LoadFromPaczAsync(IExtractedPacz extractedPacz)

```

### Parameters

`extractedPacz` IExtractedPacz

The pacz being loaded, which will be the same as returned by Host.ExtractedPacz

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A Task indicating completion of the work
