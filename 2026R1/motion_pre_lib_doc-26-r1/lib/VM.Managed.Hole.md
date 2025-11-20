# Class Hole
<a id="VM_Managed_Hole"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the information of hole geometry.

```csharp
public class Hole : DirectionOnEllipseNormal, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IHasReplaceableEntity
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
[LinkContainer](VM.Managed.LinkContainer.md) ← 
[DirectionBase](VM.Managed.DirectionBase.md) ← 
[DirectionOnGeometryBase](VM.Managed.DirectionOnGeometryBase.md) ← 
[DirectionOnEllipseNormal](VM.Managed.DirectionOnEllipseNormal.md) ← 
[Hole](VM.Managed.Hole.md)

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

[DirectionOnEllipseNormal.ReadXml\(XmlReader\)](VM.Managed.DirectionOnEllipseNormal.md\#VM\_Managed\_DirectionOnEllipseNormal\_ReadXml\_System\_Xml\_XmlReader\_), 
[DirectionOnEllipseNormal.WriteXml\(XmlWriter\)](VM.Managed.DirectionOnEllipseNormal.md\#VM\_Managed\_DirectionOnEllipseNormal\_WriteXml\_System\_Xml\_XmlWriter\_), 
[DirectionOnEllipseNormal.GetSchema\(\)](VM.Managed.DirectionOnEllipseNormal.md\#VM\_Managed\_DirectionOnEllipseNormal\_GetSchema), 
[DirectionOnGeometryBase.m\_ptrEntityKey](VM.Managed.DirectionOnGeometryBase.md\#VM\_Managed\_DirectionOnGeometryBase\_m\_ptrEntityKey), 
[DirectionOnGeometryBase.m\_vecDirection](VM.Managed.DirectionOnGeometryBase.md\#VM\_Managed\_DirectionOnGeometryBase\_m\_vecDirection), 
[DirectionOnGeometryBase.m\_vecStartPosition](VM.Managed.DirectionOnGeometryBase.md\#VM\_Managed\_DirectionOnGeometryBase\_m\_vecStartPosition), 
[DirectionOnGeometryBase.m\_vecEndPosition](VM.Managed.DirectionOnGeometryBase.md\#VM\_Managed\_DirectionOnGeometryBase\_m\_vecEndPosition), 
[DirectionOnGeometryBase.IsParametric\(Primitive.enRefType\)](VM.Managed.DirectionOnGeometryBase.md\#VM\_Managed\_DirectionOnGeometryBase\_IsParametric\_VM\_Managed\_Primitive\_enRefType\_), 
[DirectionOnGeometryBase.RecalcDirection\(\)](VM.Managed.DirectionOnGeometryBase.md\#VM\_Managed\_DirectionOnGeometryBase\_RecalcDirection), 
[DirectionOnGeometryBase.SetDirectionInfo\(string, string, string\)](VM.Managed.DirectionOnGeometryBase.md\#VM\_Managed\_DirectionOnGeometryBase\_SetDirectionInfo\_System\_String\_System\_String\_System\_String\_), 
[DirectionOnGeometryBase.OnDeserialization\(object\)](VM.Managed.DirectionOnGeometryBase.md\#VM\_Managed\_DirectionOnGeometryBase\_OnDeserialization\_System\_Object\_), 
[DirectionOnGeometryBase.IsParameterized](VM.Managed.DirectionOnGeometryBase.md\#VM\_Managed\_DirectionOnGeometryBase\_IsParameterized), 
[DirectionOnGeometryBase.Value](VM.Managed.DirectionOnGeometryBase.md\#VM\_Managed\_DirectionOnGeometryBase\_Value), 
[DirectionBase.m\_bReverse](VM.Managed.DirectionBase.md\#VM\_Managed\_DirectionBase\_m\_bReverse), 
[DirectionBase.IsParametric\(Primitive.enRefType\)](VM.Managed.DirectionBase.md\#VM\_Managed\_DirectionBase\_IsParametric\_VM\_Managed\_Primitive\_enRefType\_), 
[DirectionBase.IsParametric\(string\)](VM.Managed.DirectionBase.md\#VM\_Managed\_DirectionBase\_IsParametric\_System\_String\_), 
[DirectionBase.ReadXml\(XmlReader\)](VM.Managed.DirectionBase.md\#VM\_Managed\_DirectionBase\_ReadXml\_System\_Xml\_XmlReader\_), 
[DirectionBase.WriteXml\(XmlWriter\)](VM.Managed.DirectionBase.md\#VM\_Managed\_DirectionBase\_WriteXml\_System\_Xml\_XmlWriter\_), 
[DirectionBase.GetSchema\(\)](VM.Managed.DirectionBase.md\#VM\_Managed\_DirectionBase\_GetSchema), 
[DirectionBase.HasReplaceableEntity\(IObjectBase\)](VM.Managed.DirectionBase.md\#VM\_Managed\_DirectionBase\_HasReplaceableEntity\_VM\_Models\_Pre\_IObjectBase\_), 
[DirectionBase.ReplaceEntity\(IObjectBase, IObjectBase\)](VM.Managed.DirectionBase.md\#VM\_Managed\_DirectionBase\_ReplaceEntity\_VM\_Models\_Pre\_IObjectBase\_VM\_Models\_Pre\_IObjectBase\_), 
[DirectionBase.Reverse](VM.Managed.DirectionBase.md\#VM\_Managed\_DirectionBase\_Reverse), 
[DirectionBase.IsParameterized](VM.Managed.DirectionBase.md\#VM\_Managed\_DirectionBase\_IsParameterized), 
[DirectionBase.Value](VM.Managed.DirectionBase.md\#VM\_Managed\_DirectionBase\_Value), 
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

### <a id="VM_Managed_Hole__ctor_VM_Managed_TransformBase_"></a> Hole\(TransformBase\)

Initializes a new instance of the <xref href="VM.Managed.Hole" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Hole(TransformBase transform)
```

#### Parameters

`transform` [TransformBase](VM.Managed.TransformBase.md)

The transform.

### <a id="VM_Managed_Hole__ctor"></a> Hole\(\)

Initializes a new instance of the <xref href="VM.Managed.Hole" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Hole()
```

## Methods

### <a id="VM_Managed_Hole_GetOriginPoint"></a> GetOriginPoint\(\)

Gets the origin point.

```csharp
public PointBase GetOriginPoint()
```

#### Returns

 [PointBase](VM.Managed.PointBase.md)

The origin point.

