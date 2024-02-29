# <a id="VM_Models_Post_VisualizationImpl_Visualization_CameraInfo"></a> Class CameraInfo

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public sealed class CameraInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CameraInfo](VM.Models.Post.VisualizationImpl.Visualization.CameraInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CameraInfo__ctor"></a> CameraInfo\(\)

```csharp
public CameraInfo()
```

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CameraInfo_Enable"></a> Enable

```csharp
public bool Enable { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CameraInfo_EnableOrienation"></a> EnableOrienation

```csharp
public bool EnableOrienation { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CameraInfo_LocalPosition"></a> LocalPosition

```csharp
public Vec3d LocalPosition { get; }
```

#### Property Value

 Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CameraInfo_LocalUp"></a> LocalUp

```csharp
public Vec3d LocalUp { get; }
```

#### Property Value

 Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CameraInfo_PreTargetPosition"></a> PreTargetPosition

```csharp
public Vec3d PreTargetPosition { get; set; }
```

#### Property Value

 Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CameraInfo_TargetInfo"></a> TargetInfo

```csharp
public HitItemInfo TargetInfo { get; set; }
```

#### Property Value

 HitItemInfo

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CameraInfo_DisableFollowingCameraOrientation"></a> DisableFollowingCameraOrientation\(\)

```csharp
public void DisableFollowingCameraOrientation()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CameraInfo_InitFollowingCameraOrientation_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_"></a> InitFollowingCameraOrientation\(Vec3d, Vec3d\)

```csharp
public void InitFollowingCameraOrientation(Vec3d localPosition, Vec3d localUp)
```

#### Parameters

`localPosition` Vec3d

`localUp` Vec3d

