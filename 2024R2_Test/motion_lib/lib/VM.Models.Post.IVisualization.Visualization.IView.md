# <a id="VM_Models_Post_IVisualization_Visualization_IView"></a> Interface IView

Namespace: [VM.Models.Post.IVisualization.Visualization](VM.Models.Post.IVisualization.Visualization.md)  
Assembly: VM.Models.Post.IVisualization.dll  

```csharp
public interface IView : IAnimationViewer
```

#### Implements

IAnimationViewer

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_IVisualization_Visualization_IView_CreateView_System_Windows_Controls_Image_"></a> CreateView\(Image\)

```csharp
bool CreateView(Image image)
```

#### Parameters

`image` [Image](https://learn.microsoft.com/dotnet/api/system.windows.controls.image)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IVisualization_Visualization_IView_EndNavigation_System_Windows_Input_MouseEventArgs_"></a> EndNavigation\(MouseEventArgs\)

```csharp
void EndNavigation(MouseEventArgs e)
```

#### Parameters

`e` [MouseEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.input.mouseeventargs)

### <a id="VM_Models_Post_IVisualization_Visualization_IView_OnMouseWheel_System_Boolean_VM_Models_Post_IVisualization_Visualization_IWheelDirection_System_Windows_Input_MouseWheelEventArgs_"></a> OnMouseWheel\(bool, IWheelDirection, MouseWheelEventArgs\)

```csharp
void OnMouseWheel(bool timerEnabled, IWheelDirection zoomin, MouseWheelEventArgs e)
```

#### Parameters

`timerEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`zoomin` [IWheelDirection](VM.Models.Post.IVisualization.Visualization.IWheelDirection.md)

`e` [MouseWheelEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.input.mousewheeleventargs)

### <a id="VM_Models_Post_IVisualization_Visualization_IView_RenderToImage"></a> RenderToImage\(\)

```csharp
Image RenderToImage()
```

#### Returns

 [Image](https://learn.microsoft.com/dotnet/api/system.windows.controls.image)

### <a id="VM_Models_Post_IVisualization_Visualization_IView_SetRotationPoint_System_Windows_Input_MouseEventArgs_"></a> SetRotationPoint\(MouseEventArgs\)

```csharp
void SetRotationPoint(MouseEventArgs e)
```

#### Parameters

`e` [MouseEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.input.mouseeventargs)

### <a id="VM_Models_Post_IVisualization_Visualization_IView_StartNavigation_VM_Models_Post_IVisualization_Visualization_INavigationType_System_Windows_Input_MouseEventArgs_"></a> StartNavigation\(INavigationType, MouseEventArgs\)

```csharp
void StartNavigation(INavigationType navigationType, MouseEventArgs e)
```

#### Parameters

`navigationType` [INavigationType](VM.Models.Post.IVisualization.Visualization.INavigationType.md)

`e` [MouseEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.input.mouseeventargs)

### <a id="VM_Models_Post_IVisualization_Visualization_IView_UpdateNavigation_System_Boolean_System_Windows_Input_MouseEventArgs_"></a> UpdateNavigation\(bool, MouseEventArgs\)

```csharp
void UpdateNavigation(bool timerEnabled, MouseEventArgs e)
```

#### Parameters

`timerEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`e` [MouseEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.input.mouseeventargs)

