# Class PointSymmetric
<a id="VM_Managed_Symmetric_PointSymmetric"></a>

Namespace: [VM.Managed.Symmetric](VM.Managed.Symmetric.md)  
Assembly: VMSymBase.dll  

```csharp
public class PointSymmetric : PointBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IHasReplaceableEntity
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
PointBase ← 
[PointSymmetric](VM.Managed.Symmetric.PointSymmetric.md)

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
IVerifiable, 
IHasReplaceableEntity

#### Inherited Members

PointBase.IsParametric\(Primitive.enRefType\), 
PointBase.IsParametric\(string\), 
PointBase.ReadXml\(XmlReader\), 
PointBase.WriteXml\(XmlWriter\), 
PointBase.GetSchema\(\), 
PointBase.HasReplaceableEntity\(IObjectBase\), 
PointBase.ReplaceEntity\(IObjectBase, IObjectBase\), 
PointBase.IsParameterized, 
PointBase.Z, 
PointBase.Y, 
PointBase.X, 
PointBase.Value, 
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

### <a id="VM_Managed_Symmetric_PointSymmetric__ctor"></a> PointSymmetric\(\)

```csharp
public PointSymmetric()
```

### <a id="VM_Managed_Symmetric_PointSymmetric__ctor_VM_Managed_PointBase_VM_Plane_"></a> PointSymmetric\(PointBase, Plane\)

```csharp
public PointSymmetric(PointBase tool, Plane sym_plane)
```

#### Parameters

`tool` PointBase

`sym_plane` Plane

## Properties

### <a id="VM_Managed_Symmetric_PointSymmetric_IsParameterized"></a> IsParameterized

Get the parametric.

```csharp
public override bool IsParameterized { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_Symmetric_PointSymmetric_Value"></a> Value

Get the VectorBase(x, y, z).

```csharp
public override VectorBase Value { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_Symmetric_PointSymmetric_X"></a> X

Get the X point.

```csharp
public override double X { get; }
```

#### Property Value

 double

### <a id="VM_Managed_Symmetric_PointSymmetric_Y"></a> Y

Get the Y point.

```csharp
public override double Y { get; }
```

#### Property Value

 double

### <a id="VM_Managed_Symmetric_PointSymmetric_Z"></a> Z

Get the Z point.

```csharp
public override double Z { get; }
```

#### Property Value

 double

## Methods

### <a id="VM_Managed_Symmetric_PointSymmetric_Finalize"></a> \~PointSymmetric\(\)

```csharp
protected ~PointSymmetric()
```

### <a id="VM_Managed_Symmetric_PointSymmetric_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, 
you should return nullNothingnullptra null reference (Nothing in Visual Basic) (Nothing in Visual Basic) 
from this method, and instead, if specifying a custom schema is required, 
apply the XmlSchemaProviderAttribute to the class.

```csharp
public override XmlSchema GetSchema()
```

#### Returns

 XmlSchema

### <a id="VM_Managed_Symmetric_PointSymmetric_IsParametric_VM_Managed_Primitive_enRefType_"></a> IsParametric\(enRefType\)

Gets parametric.

```csharp
public override bool IsParametric(Primitive.enRefType type)
```

#### Parameters

`type` Primitive.enRefType

Point picking type.

#### Returns

 bool

If set to <code>true</code> is parametric; otherwise, <code>false</code> is none parametric.

### <a id="VM_Managed_Symmetric_PointSymmetric_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public override void ReadXml(XmlReader reader)
```

#### Parameters

`reader` XmlReader

The XmlReader stream from which the object is deserialized.

### <a id="VM_Managed_Symmetric_PointSymmetric_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public override void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The XmlWriter stream to which the object is serialized.

