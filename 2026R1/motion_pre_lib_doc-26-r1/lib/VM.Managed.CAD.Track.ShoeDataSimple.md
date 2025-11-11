# Class ShoeDataSimple
<a id="VM_Managed_CAD_Track_ShoeDataSimple"></a>

Namespace: [VM.Managed.CAD.Track](VM.Managed.CAD.Track.md)  
Assembly: VMDTrackBase.dll  

The class for simple shoe data.

```csharp
public class ShoeDataSimple : ShoeDataBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[ShoeDataBase](VM.Managed.CAD.Track.ShoeDataBase.md) ← 
[ShoeDataSimple](VM.Managed.CAD.Track.ShoeDataSimple.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
ILinkContainerEvent, 
IVerifiable

#### Inherited Members

[ShoeDataBase.Update\_IDesignPointDataBecauseOfObjectControl\(TMatrix\)](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_Update\_IDesignPointDataBecauseOfObjectControl\_VM\_Managed\_TMatrix\_), 
[ShoeDataBase.Update\_DesignPointWhenUpdatedDV\(\)](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_Update\_DesignPointWhenUpdatedDV), 
[ShoeDataBase.Validation\(\)](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_Validation), 
[ShoeDataBase.GetFactorForLength\(\)](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_GetFactorForLength), 
[ShoeDataBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ShoeDataBase.ShoeWidth](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_ShoeWidth), 
[ShoeDataBase.StartNode](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_StartNode), 
[ShoeDataBase.EndNode](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_EndNode), 
[ShoeDataBase.LengthSegment](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_LengthSegment), 
[ShoeDataBase.DepthSegment](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_DepthSegment), 
[ShoeDataBase.IsApplyToFileProperty](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_IsApplyToFileProperty), 
[ShoeDataBase.LDForShoeCombination](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_LDForShoeCombination), 
[ShoeDataBase.PositionForShoeCombination](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_PositionForShoeCombination), 
LinkContainer.SetModified\(\), 
LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\), 
LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\), 
LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\), 
LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
LinkContainer.GetTargetListForUpdate\(\), 
LinkContainer.SkipUpdateObjectImpl\(\), 
LinkContainer.Initialize\(Unit.ConvertFactor\), 
LinkContainer.SetFlagWhenXMLFile\(string, bool\), 
LinkContainer.IsSerializableEvent\(Delegate\), 
LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\), 
LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\), 
LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\), 
LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
LinkContainer.OnLinkReserved\(ILink, object, EventArgs\), 
LinkContainer.CanBeDestroy\(object\), 
LinkContainer.DisposeManagedResources\(\), 
LinkContainer.SetContainer\(IOwned, bool\), 
LinkContainer.OnChildUpdated\(object, LinkEventArgs\), 
LinkContainer.OnContainerDestroy\(object, LinkEventArgs\), 
LinkContainer.OnDeserialization\(object\), 
LinkContainer.Verify\(VerifiedResult\), 
LinkContainer.GetCopy\(object\), 
LinkContainer.Dispose\(bool\), 
LinkContainer.ClearChildInfoBeforeDeserialize, 
LinkContainer.Container, 
LinkContainer.Owner, 
LinkContainer.Document, 
LinkContainer.ID, 
LinkContainer.IsChildExternable, 
LinkContainer.IsExternable, 
LinkContainer.OnRemoved, 
LinkContainer.OnAdded, 
LinkContainer.OnDestroy, 
LinkContainer.OnDestroying, 
LinkContainer.OnUpdate, 
LinkContainer.OnUpdating, 
[LinkableBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs), 
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

### <a id="VM_Managed_CAD_Track_ShoeDataSimple__ctor"></a> ShoeDataSimple\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.ShoeDataSimple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShoeDataSimple()
```

### <a id="VM_Managed_CAD_Track_ShoeDataSimple__ctor_VM_Models_Pre_IOwned_"></a> ShoeDataSimple\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.ShoeDataSimple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShoeDataSimple(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner object.

## Methods

### <a id="VM_Managed_CAD_Track_ShoeDataSimple_Validation"></a> Validation\(\)

Checks the validation .

```csharp
public override void Validation()
```

