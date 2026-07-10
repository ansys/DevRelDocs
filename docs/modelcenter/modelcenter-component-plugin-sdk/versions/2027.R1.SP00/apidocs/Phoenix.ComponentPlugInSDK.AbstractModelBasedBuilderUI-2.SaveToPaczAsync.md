# Method SaveToPaczAsync

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## SaveToPaczAsync(IExtractedPacz)

Allows derived classes to save their data to the pacz

```csharp
protected abstract Task SaveToPaczAsync(IExtractedPacz extractedPacz)

```

### Parameters

`extractedPacz` IExtractedPacz

The Pacz to save to, which will be the same as returned by Host.ExtractedPacz

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A Task indicating completion
