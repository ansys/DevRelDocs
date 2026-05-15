# Method AddMenuItem

Namespace: [Phoenix.ComponentPlugInSDK](Phoenix.ComponentPlugInSDK.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## AddMenuItem(ItemsControl, string, RoutedEventHandler)

Adds a child menuItem to the specified parent.

```csharp
protected MenuItem AddMenuItem(ItemsControl parent, string header, RoutedEventHandler eventHandler)

```

### Parameters

`parent` [ItemsControl](https://learn.microsoft.com/dotnet/api/system.windows.controls.itemscontrol)

The parent of the new menuItem.

`header` [string](https://learn.microsoft.com/dotnet/api/system.string)

The header of the menuItem.

`eventHandler` [RoutedEventHandler](https://learn.microsoft.com/dotnet/api/system.windows.routedeventhandler)

The event handler to call when the menuItem is clicked. If this method throws an exception
it will be passed to `Phoenix.ComponentPlugInSDK.AbstractBuilderUI`1.DisplayException(System.Exception)`

### Returns

[MenuItem](https://learn.microsoft.com/dotnet/api/system.windows.controls.menuitem)

The MenuItem that was added.

### Remarks

If you have an async event handler, use `Phoenix.ComponentPlugInSDK.AbstractBuilderUI`1.AddAsyncMenuItem(System.Windows.Controls.ItemsControl,System.String,Phoenix.ComponentPlugInSDK.AbstractBuilderUI{`0}.RoutedEventHandlerAsync)`

## AddMenuItem(ItemsControl, string, ImageType, bool, RoutedEventHandler)

Adds a child menuItem to the specified parent.

```csharp
protected MenuItem AddMenuItem(ItemsControl parent, string header, ImageType imageType, bool hasDownArrow = false, RoutedEventHandler eventHandler = null)

```

### Parameters

`parent` [ItemsControl](https://learn.microsoft.com/dotnet/api/system.windows.controls.itemscontrol)

The parent of the new menuItem.

`header` [string](https://learn.microsoft.com/dotnet/api/system.string)

The header of the menuItem.

`imageType` [ImageType](Phoenix.ComponentPlugInSDK.Images.ImageType.md)

The image type to display on the menuItem.

`hasDownArrow` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If a down arrow should appear on the right side of the menu item.

`eventHandler` [RoutedEventHandler](https://learn.microsoft.com/dotnet/api/system.windows.routedeventhandler)

The event handler to call when the menuItem is clicked. If this method throws an exception
it will be passed to `Phoenix.ComponentPlugInSDK.AbstractBuilderUI`1.DisplayException(System.Exception)`

### Returns

[MenuItem](https://learn.microsoft.com/dotnet/api/system.windows.controls.menuitem)

The MenuItem that was added.

### Remarks

If you have an async event handler, use `Phoenix.ComponentPlugInSDK.AbstractBuilderUI`1.AddAsyncMenuItem(System.Windows.Controls.ItemsControl,System.String,Phoenix.ComponentPlugInSDK.Images.ImageType,System.Boolean,Phoenix.ComponentPlugInSDK.AbstractBuilderUI{`0}.RoutedEventHandlerAsync)`

## AddMenuItem(ItemsControl, string, ImageSource, bool, RoutedEventHandler)

Adds a child menuItem to the specified parent.

```csharp
protected MenuItem AddMenuItem(ItemsControl parent, string header, ImageSource image = null, bool hasDownArrow = false, RoutedEventHandler eventHandler = null)

```

### Parameters

`parent` [ItemsControl](https://learn.microsoft.com/dotnet/api/system.windows.controls.itemscontrol)

The parent of the new menuItem.

`header` [string](https://learn.microsoft.com/dotnet/api/system.string)

The header of the menuItem.

`image` [ImageSource](https://learn.microsoft.com/dotnet/api/system.windows.media.imagesource)

The image to display on the menuItem.

`hasDownArrow` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If a down arrow should appear on the right side of the menu item.

`eventHandler` [RoutedEventHandler](https://learn.microsoft.com/dotnet/api/system.windows.routedeventhandler)

The event handler to call when the menuItem is clicked. If this method throws an exception
it will be passed to `Phoenix.ComponentPlugInSDK.AbstractBuilderUI`1.DisplayException(System.Exception)`

### Returns

[MenuItem](https://learn.microsoft.com/dotnet/api/system.windows.controls.menuitem)

The MenuItem that was added.

### Remarks

If you have an async event handler, use `Phoenix.ComponentPlugInSDK.AbstractBuilderUI`1.AddAsyncMenuItem(System.Windows.Controls.ItemsControl,System.String,System.Windows.Media.ImageSource,System.Boolean,Phoenix.ComponentPlugInSDK.AbstractBuilderUI{`0}.RoutedEventHandlerAsync)`
