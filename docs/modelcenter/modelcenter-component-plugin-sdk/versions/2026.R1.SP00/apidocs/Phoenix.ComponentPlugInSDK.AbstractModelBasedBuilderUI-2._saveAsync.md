# Method _saveAsync

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## _saveAsync(IBuilderUIModel)

Causes the model to be properly saved, and the host notified of the save. Not called automatically,
it is up to derived classes to hook this up at the appropriate moments.

```csharp
protected Task _saveAsync(IBuilderUIModel model)

```

### Parameters

`model` [IBuilderUIModel](Phoenix.ComponentPlugInSDK.Models.IBuilderUIModel.md)

The model to save

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A Task indicating completion
