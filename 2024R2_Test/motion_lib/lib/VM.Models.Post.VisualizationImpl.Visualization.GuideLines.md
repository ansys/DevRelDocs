# <a id="VM_Models_Post_VisualizationImpl_Visualization_GuideLines"></a> Class GuideLines

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class GuideLines
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GuideLines](VM.Models.Post.VisualizationImpl.Visualization.GuideLines.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GuideLines__ctor_Ceetron_CeetronDesktopComponents_Visualization_MarkupModel_"></a> GuideLines\(MarkupModel\)

```csharp
public GuideLines(MarkupModel markupModel)
```

#### Parameters

`markupModel` MarkupModel

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GuideLines_ComponentType"></a> ComponentType

```csharp
public ComponentType ComponentType { get; }
```

#### Property Value

 [ComponentType](VM.Models.Post.VisualizationImpl.Visualization.CuttingPlane.ComponentType.md)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GuideLines_IsSubMode"></a> IsSubMode

```csharp
public bool IsSubMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GuideLines_Disable"></a> Disable\(\)

```csharp
public void Disable()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GuideLines_InitMarkerInfo_Ceetron_CeetronDesktopComponents_Mat4d_VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_ComponentType_System_Int32_System_Int32_"></a> InitMarkerInfo\(Mat4d, ComponentType, int, int\)

```csharp
public void InitMarkerInfo(Mat4d orgmat, ComponentType type, int x, int y)
```

#### Parameters

`orgmat` Mat4d

`type` [ComponentType](VM.Models.Post.VisualizationImpl.Visualization.CuttingPlane.ComponentType.md)

`x` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`y` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GuideLines_RegisterInputDataCallback_VM_Models_Post_CallbackSetInformMode_"></a> RegisterInputDataCallback\(CallbackSetInformMode\)

```csharp
public void RegisterInputDataCallback(CallbackSetInformMode callbackInfomMode)
```

#### Parameters

`callbackInfomMode` CallbackSetInformMode

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GuideLines_ShowAndDraw_Ceetron_CeetronDesktopComponents_Visualization_View_System_Double_System_Int32_System_Int32_System_Boolean_"></a> ShowAndDraw\(View, double, int, int, bool\)

```csharp
public void ShowAndDraw(View view, double doffset, int x, int y, bool brefMouse)
```

#### Parameters

`view` View

`doffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

`x` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`y` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`brefMouse` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

