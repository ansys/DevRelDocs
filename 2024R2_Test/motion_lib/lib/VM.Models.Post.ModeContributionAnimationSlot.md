# <a id="VM_Models_Post_ModeContributionAnimationSlot"></a> Class ModeContributionAnimationSlot

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class ModeContributionAnimationSlot : AnimationSlot, IObservableObject, IDisposableObject, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[Slot](VM.Models.Post.Slot.md) ← 
[AnimationSlot](VM.Models.Post.AnimationSlot.md) ← 
[ModeContributionAnimationSlot](VM.Models.Post.ModeContributionAnimationSlot.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Inherited Members

[AnimationSlot.RemoveFollowingCameraTarget\(\)](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_RemoveFollowingCameraTarget), 
[AnimationSlot.SetFollowingCameraTarget\(HitItemInfo, IEntity\)](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_SetFollowingCameraTarget\_VM\_Models\_Post\_HitItemInfo\_VM\_Models\_Post\_IEntity\_), 
[AnimationSlot.BottomColor](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_BottomColor), 
[AnimationSlot.CameraTarget](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_CameraTarget), 
[AnimationSlot.FollowingCameraTarget](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_FollowingCameraTarget), 
[AnimationSlot.IsEnabledCamera](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_IsEnabledCamera), 
[AnimationSlot.IsEnabledFollowingOrienation](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_IsEnabledFollowingOrienation), 
[AnimationSlot.IsVisibleLogo](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_IsVisibleLogo), 
[AnimationSlot.IsVisibleNavigatgionCube](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_IsVisibleNavigatgionCube), 
[AnimationSlot.IsVisibleState](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_IsVisibleState), 
[AnimationSlot.LogoHeight](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_LogoHeight), 
[AnimationSlot.LogoPath](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_LogoPath), 
[AnimationSlot.LogoPosition](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_LogoPosition), 
[AnimationSlot.LogoTransparency](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_LogoTransparency), 
[AnimationSlot.LogoWidth](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_LogoWidth), 
[AnimationSlot.NavigationCubePosition](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_NavigationCubePosition), 
[AnimationSlot.StatePosition](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_StatePosition), 
[AnimationSlot.StateTextColor](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_StateTextColor), 
[AnimationSlot.TopColor](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_TopColor), 
[AnimationSlot.Type](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_Type), 
[AnimationSlot.Viewer](VM.Models.Post.AnimationSlot.md\#VM\_Models\_Post\_AnimationSlot\_Viewer), 
[Slot.Activate\(\)](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_Activate), 
[Slot.GetParentGroup\(\)](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_GetParentGroup), 
[Slot.Inactivate\(\)](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_Inactivate), 
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
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

