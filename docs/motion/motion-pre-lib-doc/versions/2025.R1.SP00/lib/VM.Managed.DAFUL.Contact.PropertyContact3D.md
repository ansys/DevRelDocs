#  Class PropertyContact3D

Namespace: [VM.Managed.DAFUL.Contact](VM.Managed.DAFUL.Contact.md)  
Assembly: VMDCt.dll  

This class is to represent the 3D contact properties.

```csharp
public abstract class PropertyContact3D : PropertyContact, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
Property ← 
[PropertyContact](VM.Managed.DAFUL.Contact.PropertyContact.md) ← 
[PropertyContact3D](VM.Managed.DAFUL.Contact.PropertyContact3D.md)

#### Derived

[PropertyGeneralContact](VM.Managed.DAFUL.Contact.PropertyGeneralContact.md), 
[PropertyRTR3D](VM.Managed.DAFUL.Contact.PropertyRTR3D.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
IEventProvider, 
IHasKeyObject, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID

#### Inherited Members

[PropertyContact.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Contact.PropertyContact.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[PropertyContact.Function](VM.Managed.DAFUL.Contact.PropertyContact.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact\_Function), 
[PropertyContact.IsBaseGeometryFrontDirection](VM.Managed.DAFUL.Contact.PropertyContact.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact\_IsBaseGeometryFrontDirection), 
[PropertyContact.IsActionGeometryFrontDirection](VM.Managed.DAFUL.Contact.PropertyContact.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact\_IsActionGeometryFrontDirection), 
[PropertyContact.IsBaseGeometryDisplayNormalDirection](VM.Managed.DAFUL.Contact.PropertyContact.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact\_IsBaseGeometryDisplayNormalDirection), 
[PropertyContact.IsActionGeometryDisplayNormalDirection](VM.Managed.DAFUL.Contact.PropertyContact.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact\_IsActionGeometryDisplayNormalDirection), 
Property.Initialize\(Unit.ConvertFactor\), 
Property.PropertyRequestUpdate\(object, LinkEventArgs\), 
Property.OnUpdatePropertyImpl\(Property, LinkEventArgs\), 
Property.GetUnnamedObjectName\(object\), 
Property.FindLocal\(string\), 
Property.Draw\(Canvas, TMatrix, TMatrix, bool\), 
ContainerObject<PropertyEventCore\>.Find\(string\), 
ContainerObject<PropertyEventCore\>.FindLocal\(string\), 
ContainerObject<PropertyEventCore\>.GetUnnamedObjectName\(object\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string, bool, int\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string, bool, int, int\), 
Object<PropertyEventCore\>.GetKey\(\), 
Object<PropertyEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<PropertyEventCore\>.SetIconColor\(Canvas\), 
Object<PropertyEventCore\>.OnDeserialization\(object\), 
Object<PropertyEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<PropertyEventCore\>.RollbackEvent\(\), 
Object<PropertyEventCore\>.OnDeserializedCore\(object\), 
Object<PropertyEventCore\>.Key, 
Object<PropertyEventCore\>.UntypedEventCore, 
Object<PropertyEventCore\>.EventCore, 
Object<PropertyEventCore\>.Attributes, 
ObjectBase.ReplaceEventCore\(ObjectEventCore\), 
ObjectBase.SetModifiedCore\(ModifiedResult.ModifiedType\), 
ObjectBase.AddPostDeserialize\(StreamingContext\), 
ObjectBase.LinkAddedToDocumentCore\(IOwned, bool\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType\), 
ObjectBase.SetModified\(\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType, IDocument\), 
ObjectBase.DestroyObject\(object, LinkEventArgs\), 
ObjectBase.DestroyObject\(DestroyEventArgs\), 
ObjectBase.DestroyObject\(\), 
ObjectBase.Initialize\(Unit.ConvertFactor\), 
ObjectBase.FixUp\(ObjectBase\), 
ObjectBase.DoWorkAfterUpdateContents\(\), 
ObjectBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
ObjectBase.SetIconColor\(Canvas\), 
ObjectBase.RemoveFromCreatedList\(\), 
ObjectBase.PostAddToDocument\(\), 
ObjectBase.PostRemoveFromDocument\(Document\), 
ObjectBase.GetArgumentList\(LinkedList<ObjectBase\>\), 
ObjectBase.ResetInvalidEntity\(\), 
ObjectBase.OnDeserialization\(object\), 
ObjectBase.IsSerializableEvent\(Delegate\), 
ObjectBase.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
ObjectBase.CheckAndUpdateLink\(HashSet<ObjectBase\>\), 
ObjectBase.Verify\(VerifiedResult\), 
ObjectBase.ConnectProxy\(\), 
ObjectBase.RollbackEvent\(\), 
ObjectBase.LinkRequestUpdating\(object, LinkEventArgs\), 
ObjectBase.LinkRequestUpdate\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroying\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroy\(object, LinkEventArgs\), 
ObjectBase.LinkAddedToDocument\(object, AddToDocEventArgs\), 
ObjectBase.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
ObjectBase.DisposeManagedResources\(\), 
ObjectBase.GetDestroyEventExtraData\(\), 
ObjectBase.OnLinkReserved\(ILink, object, EventArgs\), 
ObjectBase.CreateEntityWhenUpdateContents\(Action\), 
ObjectBase.GetObjectByKey\(UIntPtr\), 
ObjectBase.FindObjectOnXmlDeserialize\(string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase, string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase\), 
ObjectBase.UpdateContents\(string, string\), 
ObjectBase.UpdateContents\(string\), 
ObjectBase.SetFlagWhenXMLFile\(string, bool\), 
ObjectBase.IsEqualArray<T\>\(T\[\], T\[\]\), 
ObjectBase.IsEqualList\(List<double\>, List<double\>\), 
ObjectBase.SetContainer\(IOwned, bool\), 
ObjectBase.GetTargetListForUpdate\(\), 
ObjectBase.SkipUpdateObjectImpl\(\), 
ObjectBase.raise\_OnUpdating\(object, LinkEventArgs\), 
ObjectBase.raise\_OnUpdate\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroying\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroy\(object, LinkEventArgs\), 
ObjectBase.raise\_Destroying\(object, Identifier\), 
ObjectBase.raise\_OnAdded\(object, AddToDocEventArgs\), 
ObjectBase.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
ObjectBase.raise\_OnContentsUpdated\(object, EventArgs\), 
ObjectBase.Dispose\(bool\), 
ObjectBase.SkipModified, 
ObjectBase.ClearChildInfoBeforeDeserialize, 
ObjectBase.KeyImpl, 
ObjectBase.ID, 
ObjectBase.TopologyEntityTypeName, 
ObjectBase.ObjectStateForCircularError, 
ObjectBase.ObjectState, 
ObjectBase.IsChildExternable, 
ObjectBase.IsExternable, 
ObjectBase.Container, 
ObjectBase.Owner, 
ObjectBase.Document, 
ObjectBase.UntypedEventCore, 
ObjectBase.KernelKey, 
ObjectBase.Key, 
ObjectBase.OnContentsUpdated, 
ObjectBase.OnRemoved, 
ObjectBase.OnAdded, 
ObjectBase.Destroying, 
ObjectBase.OnDestroy, 
ObjectBase.OnDestroying, 
ObjectBase.OnUpdate, 
ObjectBase.OnUpdating, 
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

### <a id="VM_Managed_DAFUL_Contact_PropertyContact3D__ctor"></a> PropertyContact3D\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.PropertyContact3D" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyContact3D()
```

## Properties

### <a id="VM_Managed_DAFUL_Contact_PropertyContact3D_CrossCheck"></a> CrossCheck

Gets or sets a value indicating whether [action and base cross check].

```csharp
[Obsolete]
public bool CrossCheck { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Contact_PropertyContact3D_IncrementTime"></a> IncrementTime

Gets or sets the value of increment time.

```csharp
public ExpressionValueVariable IncrementTime { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_PropertyContact3D_InternalPointFactor"></a> InternalPointFactor

Gets or sets the factor of internal point.

```csharp
public ExpressionValueVariable InternalPointFactor { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_PropertyContact3D_LimitIncrementInNR"></a> LimitIncrementInNR

Gets or sets the value of limit increment in NR.

```csharp
public ExpressionValueVariable LimitIncrementInNR { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_PropertyContact3D_PointCheck"></a> PointCheck

Gets or sets the point check type.

```csharp
public PropertyContact3D.PointCheckType PointCheck { get; set; }
```

#### Property Value

 [PropertyContact3D](VM.Managed.DAFUL.Contact.PropertyContact3D.md).[PointCheckType](VM.Managed.DAFUL.Contact.PropertyContact3D.PointCheckType.md)

### <a id="VM_Managed_DAFUL_Contact_PropertyContact3D_UseIncrementTime"></a> UseIncrementTime

Gets or sets a value indicating whether [use value of increment time].

```csharp
public bool UseIncrementTime { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Contact_PropertyContact3D_UseInternalPointFactor"></a> UseInternalPointFactor

Gets or sets a value indicating whether [use internal point].

```csharp
public bool UseInternalPointFactor { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Contact_PropertyContact3D_UseLimitIncrementInNR"></a> UseLimitIncrementInNR

Gets or sets a value indicating whether [use value of limit increment in NR].

```csharp
public bool UseLimitIncrementInNR { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Contact_PropertyContact3D_UseNodeOnlyOption"></a> UseNodeOnlyOption

Gets or sets a value indicating whether [use node only option].

```csharp
public bool UseNodeOnlyOption { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Contact_PropertyContact3D_UseSlidingOnlyOption"></a> UseSlidingOnlyOption

Gets or sets a value indicating whether [use sliding only option].

```csharp
public bool UseSlidingOnlyOption { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_Contact_PropertyContact3D_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Contact_PropertyContact3D_LoadOldVersion_System_Boolean_"></a> LoadOldVersion\(bool\)

Execute when load old version (lower and equal 6.1).

```csharp
public virtual PropertyContact3D.PointCheckType LoadOldVersion(bool bCrossCheck)
```

#### Parameters

`bCrossCheck` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The cross check flag.

#### Returns

 [PropertyContact3D](VM.Managed.DAFUL.Contact.PropertyContact3D.md).[PointCheckType](VM.Managed.DAFUL.Contact.PropertyContact3D.PointCheckType.md)

### <a id="VM_Managed_DAFUL_Contact_PropertyContact3D_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

