# Class PointRated
<a id="VM_Managed_PointRated"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the information of two points, N: M ratios obtained to calculate the position.

```csharp
public class PointRated : PointBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IHasReplaceableEntity
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
[LinkContainer](VM.Managed.LinkContainer.md) ← 
[PointBase](VM.Managed.PointBase.md) ← 
[PointRated](VM.Managed.PointRated.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
[IVerifiable](VM.Managed.IVerifiable.md), 
IHasReplaceableEntity

#### Inherited Members

[PointBase.IsParametric\(Primitive.enRefType\)](VM.Managed.PointBase.md\#VM\_Managed\_PointBase\_IsParametric\_VM\_Managed\_Primitive\_enRefType\_), 
[PointBase.IsParametric\(string\)](VM.Managed.PointBase.md\#VM\_Managed\_PointBase\_IsParametric\_System\_String\_), 
[PointBase.ReadXml\(XmlReader\)](VM.Managed.PointBase.md\#VM\_Managed\_PointBase\_ReadXml\_System\_Xml\_XmlReader\_), 
[PointBase.WriteXml\(XmlWriter\)](VM.Managed.PointBase.md\#VM\_Managed\_PointBase\_WriteXml\_System\_Xml\_XmlWriter\_), 
[PointBase.GetSchema\(\)](VM.Managed.PointBase.md\#VM\_Managed\_PointBase\_GetSchema), 
[PointBase.HasReplaceableEntity\(IObjectBase\)](VM.Managed.PointBase.md\#VM\_Managed\_PointBase\_HasReplaceableEntity\_VM\_Models\_Pre\_IObjectBase\_), 
[PointBase.ReplaceEntity\(IObjectBase, IObjectBase\)](VM.Managed.PointBase.md\#VM\_Managed\_PointBase\_ReplaceEntity\_VM\_Models\_Pre\_IObjectBase\_VM\_Models\_Pre\_IObjectBase\_), 
[PointBase.IsParameterized](VM.Managed.PointBase.md\#VM\_Managed\_PointBase\_IsParameterized), 
[PointBase.Z](VM.Managed.PointBase.md\#VM\_Managed\_PointBase\_Z), 
[PointBase.Y](VM.Managed.PointBase.md\#VM\_Managed\_PointBase\_Y), 
[PointBase.X](VM.Managed.PointBase.md\#VM\_Managed\_PointBase\_X), 
[PointBase.Value](VM.Managed.PointBase.md\#VM\_Managed\_PointBase\_Value), 
[LinkContainer.SetModified\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetModified), 
[LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnAdded\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnRemoved\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[LinkContainer.GetTargetListForUpdate\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetTargetListForUpdate), 
[LinkContainer.SkipUpdateObjectImpl\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SkipUpdateObjectImpl), 
[LinkContainer.Initialize\(Unit.ConvertFactor\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[LinkContainer.SetFlagWhenXMLFile\(string, bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetFlagWhenXMLFile\_System\_String\_System\_Boolean\_), 
[LinkContainer.IsSerializableEvent\(Delegate\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsSerializableEvent\_System\_Delegate\_), 
[LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_CustomGetObjectData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetSerializedData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkAddedToDocument\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRemovedFromDocument\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[LinkContainer.OnLinkReserved\(ILink, object, EventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnLinkReserved\_VM\_Managed\_ILink\_System\_Object\_System\_EventArgs\_), 
[LinkContainer.CanBeDestroy\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_CanBeDestroy\_System\_Object\_), 
[LinkContainer.DisposeManagedResources\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_DisposeManagedResources), 
[LinkContainer.SetContainer\(IOwned, bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetContainer\_VM\_Models\_Pre\_IOwned\_System\_Boolean\_), 
[LinkContainer.OnChildUpdated\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnChildUpdated\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.OnContainerDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnContainerDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.OnDeserialization\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDeserialization\_System\_Object\_), 
[LinkContainer.Verify\(VerifiedResult\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Verify\_VM\_Managed\_VerifiedResult\_), 
[LinkContainer.GetCopy\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetCopy\_System\_Object\_), 
[LinkContainer.Dispose\(bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Dispose\_System\_Boolean\_), 
[LinkContainer.ClearChildInfoBeforeDeserialize](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_ClearChildInfoBeforeDeserialize), 
[LinkContainer.Container](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Container), 
[LinkContainer.Owner](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Owner), 
[LinkContainer.Document](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Document), 
[LinkContainer.ID](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_ID), 
[LinkContainer.IsChildExternable](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsChildExternable), 
[LinkContainer.IsExternable](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsExternable), 
[LinkContainer.OnRemoved](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnRemoved), 
[LinkContainer.OnAdded](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnAdded), 
[LinkContainer.OnDestroy](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDestroy), 
[LinkContainer.OnDestroying](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDestroying), 
[LinkContainer.OnUpdate](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnUpdate), 
[LinkContainer.OnUpdating](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnUpdating), 
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

### <a id="VM_Managed_PointRated__ctor_VM_Managed_PointBase_VM_Managed_PointBase_VM_Managed_Variable_"></a> PointRated\(PointBase, PointBase, Variable\)

Initializes a new instance of the <xref href="VM.Managed.PointRated" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PointRated(PointBase ptStart, PointBase ptEnd, Variable rate)
```

#### Parameters

`ptStart` [PointBase](VM.Managed.PointBase.md)

Start point.

`ptEnd` [PointBase](VM.Managed.PointBase.md)

End point.

`rate` [Variable](VM.Managed.Variable.md)

Ratio.

### <a id="VM_Managed_PointRated__ctor_VM_Managed_PointBase_VM_Managed_PointBase_System_Double_"></a> PointRated\(PointBase, PointBase, double\)

Initializes a new instance of the <xref href="VM.Managed.PointRated" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PointRated(PointBase ptStart, PointBase ptEnd, double rate)
```

#### Parameters

`ptStart` [PointBase](VM.Managed.PointBase.md)

Start point.

`ptEnd` [PointBase](VM.Managed.PointBase.md)

End point.

`rate` double

Ratio.

### <a id="VM_Managed_PointRated__ctor_VM_Managed_PointBase_VM_Managed_PointBase_"></a> PointRated\(PointBase, PointBase\)

Initializes a new instance of the <xref href="VM.Managed.PointRated" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PointRated(PointBase ptStart, PointBase ptEnd)
```

#### Parameters

`ptStart` [PointBase](VM.Managed.PointBase.md)

Start point.

`ptEnd` [PointBase](VM.Managed.PointBase.md)

End point.

### <a id="VM_Managed_PointRated__ctor"></a> PointRated\(\)

Initializes a new instance of the <xref href="VM.Managed.PointRated" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PointRated()
```

## Fields

### <a id="VM_Managed_PointRated_m_Rate"></a> m\_Rate

```csharp
protected Child<Variable, LinkContainer.Update> m_Rate
```

#### Field Value

 [Child](VM.Managed.Child\-2.md)<[Variable](VM.Managed.Variable.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>

### <a id="VM_Managed_PointRated_m_ptEnd"></a> m\_ptEnd

```csharp
protected Child<PointBase, LinkContainer.Update> m_ptEnd
```

#### Field Value

 [Child](VM.Managed.Child\-2.md)<[PointBase](VM.Managed.PointBase.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>

### <a id="VM_Managed_PointRated_m_ptStart"></a> m\_ptStart

```csharp
protected Child<PointBase, LinkContainer.Update> m_ptStart
```

#### Field Value

 [Child](VM.Managed.Child\-2.md)<[PointBase](VM.Managed.PointBase.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>

## Properties

### <a id="VM_Managed_PointRated_EndPoint"></a> EndPoint

Gets or sets end point.

```csharp
public PointBase EndPoint { get; set; }
```

#### Property Value

 [PointBase](VM.Managed.PointBase.md)

### <a id="VM_Managed_PointRated_IsParameterized"></a> IsParameterized

Get the parametric.

```csharp
public override bool IsParameterized { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_PointRated_Rate"></a> Rate

Gets or sets ratio.

```csharp
public Variable Rate { get; set; }
```

#### Property Value

 [Variable](VM.Managed.Variable.md)

### <a id="VM_Managed_PointRated_StartPoint"></a> StartPoint

Gets or sets start point.

```csharp
public PointBase StartPoint { get; set; }
```

#### Property Value

 [PointBase](VM.Managed.PointBase.md)

### <a id="VM_Managed_PointRated_Value"></a> Value

Get the VectorBase(x, y, z).

```csharp
public override VectorBase Value { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_PointRated_X"></a> X

Get the X point.

```csharp
public override double X { get; }
```

#### Property Value

 double

### <a id="VM_Managed_PointRated_Y"></a> Y

Get the Y point.

```csharp
public override double Y { get; }
```

#### Property Value

 double

### <a id="VM_Managed_PointRated_Z"></a> Z

Get the Z point.

```csharp
public override double Z { get; }
```

#### Property Value

 double

## Methods

### <a id="VM_Managed_PointRated_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, 
you should return nullNothingnullptra null reference (Nothing in Visual Basic) (Nothing in Visual Basic) 
from this method, and instead, if specifying a custom schema is required, 
apply the XmlSchemaProviderAttribute to the class.

```csharp
public override XmlSchema GetSchema()
```

#### Returns

 XmlSchema

### <a id="VM_Managed_PointRated_HasReplaceableEntity_VM_Models_Pre_IObjectBase_"></a> HasReplaceableEntity\(IObjectBase\)

Gets a value indicating whether this instance has replacable entity.

```csharp
public override bool HasReplaceableEntity(IObjectBase oldObject)
```

#### Parameters

`oldObject` IObjectBase

The old object

#### Returns

 bool

if this instance has replacable entity, the result is true.

### <a id="VM_Managed_PointRated_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public override void ReadXml(XmlReader reader)
```

#### Parameters

`reader` XmlReader

The XmlReader stream from which the object is deserialized.

### <a id="VM_Managed_PointRated_ReplaceEntity_VM_Models_Pre_IObjectBase_VM_Models_Pre_IObjectBase_"></a> ReplaceEntity\(IObjectBase, IObjectBase\)

Replace Entity

```csharp
public override bool ReplaceEntity(IObjectBase oldObject, IObjectBase newObject)
```

#### Parameters

`oldObject` IObjectBase

The old object

`newObject` IObjectBase

The new object

#### Returns

 bool

if success, the result is true.

### <a id="VM_Managed_PointRated_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public override void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The XmlWriter stream to which the object is serialized.

