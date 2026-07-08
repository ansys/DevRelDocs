#  Class ShoeDataBase

Namespace: [VM.Managed.CAD.Track](VM.Managed.CAD.Track.md)  
Assembly: VMDTrackBase.dll  

The abstract class for shoe data.

```csharp
public abstract class ShoeDataBase : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ShoeDataBase](VM.Managed.CAD.Track.ShoeDataBase.md)

#### Derived

[ShoeDataParametric](VM.Managed.CAD.Track.ShoeDataParametric.md), 
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
LinkableBase.OnDeserialization\(object\), 
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

### <a id="VM_Managed_CAD_Track_ShoeDataBase__ctor"></a> ShoeDataBase\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.ShoeDataBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShoeDataBase()
```

### <a id="VM_Managed_CAD_Track_ShoeDataBase__ctor_VM_Models_Pre_IOwned_"></a> ShoeDataBase\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.ShoeDataBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShoeDataBase(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner object.

## Properties

### <a id="VM_Managed_CAD_Track_ShoeDataBase_DepthSegment"></a> DepthSegment

Gets and sets segment depth

```csharp
public int DepthSegment { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_CAD_Track_ShoeDataBase_EndNode"></a> EndNode

Gets and sets end node

```csharp
public int EndNode { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_CAD_Track_ShoeDataBase_IsApplyToFileProperty"></a> IsApplyToFileProperty

Gets and sets boolean

```csharp
public bool IsApplyToFileProperty { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_Track_ShoeDataBase_LDForShoeCombination"></a> LDForShoeCombination

Gets and sets longitudinal distance from reference position.

```csharp
public Variable LDForShoeCombination { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_CAD_Track_ShoeDataBase_LengthSegment"></a> LengthSegment

Gets and sets segment length

```csharp
public int LengthSegment { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_CAD_Track_ShoeDataBase_PositionForShoeCombination"></a> PositionForShoeCombination

Gets and set position for shoe combination.

```csharp
public ObjectBase PositionForShoeCombination { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_CAD_Track_ShoeDataBase_ShoeWidth"></a> ShoeWidth

Gets and sets shoe width

```csharp
public ExpressionValueVariable ShoeWidth { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataBase_StartNode"></a> StartNode

Gets and sets start node

```csharp
public int StartNode { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Managed_CAD_Track_ShoeDataBase_GetFactorForLength"></a> GetFactorForLength\(\)

Gets the factor for length.

```csharp
protected double GetFactorForLength()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The factor.

### <a id="VM_Managed_CAD_Track_ShoeDataBase_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Links the request update.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The obj notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_CAD_Track_ShoeDataBase_Update_DesignPointWhenUpdatedDV"></a> Update\_DesignPointWhenUpdatedDV\(\)

Call when "LDForLinkCombination" updated.

```csharp
public void Update_DesignPointWhenUpdatedDV()
```

### <a id="VM_Managed_CAD_Track_ShoeDataBase_Update_IDesignPointDataBecauseOfObjectControl_VM_Managed_TMatrix_"></a> Update\_IDesignPointDataBecauseOfObjectControl\(TMatrix\)

Update tranformation of design point or design frame.

```csharp
public void Update_IDesignPointDataBecauseOfObjectControl(TMatrix matT)
```

#### Parameters

`matT` TMatrix

The tramsformation matrix.

### <a id="VM_Managed_CAD_Track_ShoeDataBase_Validation"></a> Validation\(\)

Checks the validation .

```csharp
public virtual void Validation()
```

