# <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneManager"></a> Class CuttingPlaneManager

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class CuttingPlaneManager : MarkupModel, IManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
RefCountedObject ← 
Model ← 
MarkupModel ← 
[CuttingPlaneManager](VM.Models.Post.VisualizationImpl.Visualization.CuttingPlaneManager.md)

#### Implements

IManager

#### Inherited Members

MarkupModel.getCPtr\(MarkupModel\), 
MarkupModel.Dispose\(\), 
MarkupModel.ToString\(\), 
MarkupModel.partIndex\(MarkupPart\), 
MarkupModel.part\(uint\), 
MarkupModel.addPart\(MarkupPart\), 
MarkupModel.removePart\(MarkupPart\), 
MarkupModel.removeAllParts\(\), 
MarkupModel.rayIntersect\(Ray, View\), 
MarkupModel.rayIntersect\(Ray, View, MarkupModelHitItem\), 
MarkupModel.rayIntersectAllHits\(Ray, View, MarkupModelHitItemCollection\), 
MarkupModel.isViewClippingIgnored\(\), 
MarkupModel.setIgnoreViewClipping\(bool\), 
MarkupModel.castFromBaseClass\(Model\), 
MarkupModel.PartCount, 
Model.getCPtr\(Model\), 
Model.Dispose\(\), 
Model.Name, 
Model.BoundingBox, 
Model.Use2dPixelProjection, 
Model.ModelInfo, 
RefCountedObject.swigCMemOwn, 
RefCountedObject.getCPtr\(RefCountedObject\), 
RefCountedObject.Dispose\(\), 
RefCountedObject.addRef\(\), 
RefCountedObject.release\(\), 
RefCountedObject.refCount\(\), 
RefCountedObject.setRefCountZero\(\)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneManager__ctor_System_String_"></a> CuttingPlaneManager\(string\)

```csharp
public CuttingPlaneManager(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneManager_DefaultSelectedColor"></a> DefaultSelectedColor

```csharp
public static Color3f DefaultSelectedColor { get; }
```

#### Property Value

 Color3f

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneManager_IsEnabled"></a> IsEnabled

```csharp
public bool IsEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneManager_IsPicked"></a> IsPicked

```csharp
public bool IsPicked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneManager_Name"></a> Name

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneManager_Disable"></a> Disable\(\)

```csharp
public void Disable()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneManager_Enable_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_"></a> Enable\(Vec3d, Vec3d\)

```csharp
public void Enable(Vec3d position, Vec3d normal)
```

#### Parameters

`position` Vec3d

`normal` Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneManager_GetPosition_Ceetron_CeetronDesktopComponents_Vec3d__Ceetron_CeetronDesktopComponents_Vec3d__"></a> GetPosition\(ref Vec3d, ref Vec3d\)

```csharp
public void GetPosition(ref Vec3d position, ref Vec3d normal)
```

#### Parameters

`position` Vec3d

`normal` Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneManager_OnMouseEvent_VM_Models_Post_IAnimationViewer_System_Int32_System_Int32_System_Int32_"></a> OnMouseEvent\(IAnimationViewer, int, int, int\)

```csharp
public bool OnMouseEvent(IAnimationViewer view, int ntype, int x, int y)
```

#### Parameters

`view` IAnimationViewer

`ntype` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`x` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`y` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneManager_RegisterInputDataCallback_VM_Models_Post_CallbackSetInformMode_"></a> RegisterInputDataCallback\(CallbackSetInformMode\)

```csharp
public void RegisterInputDataCallback(CallbackSetInformMode callbackInfomMode)
```

#### Parameters

`callbackInfomMode` CallbackSetInformMode

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneManager_SetTextInputData_VM_Models_Post_IAnimationViewer_System_Double___"></a> SetTextInputData\(IAnimationViewer, double\[\]\)

```csharp
public bool SetTextInputData(IAnimationViewer view, double[] values)
```

#### Parameters

`view` IAnimationViewer

`values` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

