# <a id="VM_Models_Post_AnimationSlot"></a> Class AnimationSlot

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class AnimationSlot : Slot, IObservableObject, IDisposableObject, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[Slot](VM.Models.Post.Slot.md) ← 
[AnimationSlot](VM.Models.Post.AnimationSlot.md)

#### Derived

[DynamicAnimationSlot](VM.Models.Post.DynamicAnimationSlot.md), 
[EigenvalueAnimationSlot](VM.Models.Post.EigenvalueAnimationSlot.md), 
[ModeContributionAnimationSlot](VM.Models.Post.ModeContributionAnimationSlot.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Inherited Members

[Slot.Activate\(\)](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_Activate), 
[Slot.GetParentGroup\(\)](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_GetParentGroup), 
[Slot.Inactivate\(\)](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_Inactivate), 
[Slot.DisposeManagedResources\(\)](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_DisposeManagedResources), 
[Slot.GroupID](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_GroupID), 
[Slot.ID](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_ID), 
[Slot.IsActive](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_IsActive), 
[Slot.ParentDocument](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_ParentDocument), 
[Slot.ResultDocumentFilePath](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_ResultDocumentFilePath), 
[Slot.Type](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_Type), 
[ObjectBase.GetUnstructGridModel\(\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_GetUnstructGridModel), 
[ObjectBase.SetName\(string\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_SetName\_System\_String\_), 
[ObjectBase.UpdateAnimation\(UpdateActionType\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_UpdateAnimation\_VM\_Models\_Post\_UpdateActionType\_), 
[ObjectBase.AnalysisResult](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResult), 
[ObjectBase.AnalysisResultID](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResultID), 
[ObjectBase.AnalysisResultType](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResultType), 
[ObjectBase.DisplayName](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_DisplayName), 
[ObjectBase.FullName](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_FullName), 
[ObjectBase.Name](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_Name), 
[ObjectBase.ParentDocument](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_ParentDocument), 
[ObjectBase.CanLoad](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_CanLoad), 
[ObjectBase.CanSave](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_CanSave), 
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.Dispose\(bool\), 
ObservableObject.DisposeManagedResources\(\), 
ObservableObject.DisposeUnmanagedResources\(\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_AnimationSlot__ctor_VM_Identifier_VM_Identifier_System_Nullable_System_Int32__System_String_VM_Models_Post_IAnimationViewer_"></a> AnimationSlot\(Identifier, Identifier, int?, string, IAnimationViewer\)

```csharp
protected AnimationSlot(Identifier parentDocumentID, Identifier analysisResultID, int? id, string fullName, IAnimationViewer viewer)
```

#### Parameters

`parentDocumentID` Identifier

`analysisResultID` Identifier

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`viewer` [IAnimationViewer](VM.Models.Post.IAnimationViewer.md)

## Properties

### <a id="VM_Models_Post_AnimationSlot_BottomColor"></a> BottomColor

```csharp
[SaveProperty(false)]
public Color BottomColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_AnimationSlot_CameraTarget"></a> CameraTarget

```csharp
[SaveProperty(false)]
public IEntity CameraTarget { get; }
```

#### Property Value

 [IEntity](VM.Models.Post.IEntity.md)

### <a id="VM_Models_Post_AnimationSlot_FollowingCameraTarget"></a> FollowingCameraTarget

```csharp
[SaveProperty(false)]
public HitItemInfo FollowingCameraTarget { get; }
```

#### Property Value

 [HitItemInfo](VM.Models.Post.HitItemInfo.md)

### <a id="VM_Models_Post_AnimationSlot_IsEnabledCamera"></a> IsEnabledCamera

```csharp
[SaveProperty(false)]
public bool IsEnabledCamera { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_AnimationSlot_IsEnabledFollowingOrienation"></a> IsEnabledFollowingOrienation

```csharp
[SaveProperty(false)]
public bool IsEnabledFollowingOrienation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_AnimationSlot_IsVisibleLogo"></a> IsVisibleLogo

```csharp
[SaveProperty(false)]
public bool IsVisibleLogo { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_AnimationSlot_IsVisibleNavigatgionCube"></a> IsVisibleNavigatgionCube

```csharp
public bool IsVisibleNavigatgionCube { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_AnimationSlot_IsVisibleState"></a> IsVisibleState

```csharp
[SaveProperty(false)]
public bool IsVisibleState { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_AnimationSlot_LogoHeight"></a> LogoHeight

```csharp
[SaveProperty(false)]
public uint LogoHeight { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_AnimationSlot_LogoPath"></a> LogoPath

```csharp
[SaveProperty(false)]
public string LogoPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_AnimationSlot_LogoPosition"></a> LogoPosition

```csharp
[SaveProperty(false)]
public Layout LogoPosition { get; set; }
```

#### Property Value

 [Layout](VM.Models.Post.Layout.md)

### <a id="VM_Models_Post_AnimationSlot_LogoTransparency"></a> LogoTransparency

```csharp
[SaveProperty(false)]
public double LogoTransparency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_AnimationSlot_LogoWidth"></a> LogoWidth

```csharp
[SaveProperty(false)]
public uint LogoWidth { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_AnimationSlot_NavigationCubePosition"></a> NavigationCubePosition

```csharp
[SaveProperty(false)]
public Layout NavigationCubePosition { get; set; }
```

#### Property Value

 [Layout](VM.Models.Post.Layout.md)

### <a id="VM_Models_Post_AnimationSlot_StatePosition"></a> StatePosition

```csharp
[SaveProperty(false)]
public Layout StatePosition { get; set; }
```

#### Property Value

 [Layout](VM.Models.Post.Layout.md)

### <a id="VM_Models_Post_AnimationSlot_StateTextColor"></a> StateTextColor

```csharp
[SaveProperty(false)]
public Color StateTextColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_AnimationSlot_TopColor"></a> TopColor

```csharp
[SaveProperty(false)]
public Color TopColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_AnimationSlot_Type"></a> Type

```csharp
[SaveProperty(false)]
public override ViewType Type { get; }
```

#### Property Value

 [ViewType](VM.Models.Post.ViewType.md)

### <a id="VM_Models_Post_AnimationSlot_Viewer"></a> Viewer

```csharp
public IAnimationViewer Viewer { get; }
```

#### Property Value

 [IAnimationViewer](VM.Models.Post.IAnimationViewer.md)

## Methods

### <a id="VM_Models_Post_AnimationSlot_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_Post_AnimationSlot_RemoveFollowingCameraTarget"></a> RemoveFollowingCameraTarget\(\)

```csharp
public void RemoveFollowingCameraTarget()
```

### <a id="VM_Models_Post_AnimationSlot_SetFollowingCameraTarget_VM_Models_Post_HitItemInfo_VM_Models_Post_IEntity_"></a> SetFollowingCameraTarget\(HitItemInfo, IEntity\)

```csharp
public void SetFollowingCameraTarget(HitItemInfo hitItemInfo, IEntity targetEntity)
```

#### Parameters

`hitItemInfo` [HitItemInfo](VM.Models.Post.HitItemInfo.md)

`targetEntity` [IEntity](VM.Models.Post.IEntity.md)

