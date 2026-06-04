# Delegate AbstractBuilderUI<RUNNER>.RoutedEventHandlerAsync

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

A version of `System.Windows.RoutedEventHandler` that is asynchronous and returns a Task.

```csharp
public delegate Task AbstractBuilderUI<RUNNER>.RoutedEventHandlerAsync(object sender, RoutedEventArgs e)

```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender of the event

`e` [RoutedEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.routedeventargs)

The event arguments

#### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task indicating completion of the event handler
