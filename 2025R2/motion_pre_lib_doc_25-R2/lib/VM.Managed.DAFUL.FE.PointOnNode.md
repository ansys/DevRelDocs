#  Class PointOnNode

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent the point on node.

```csharp
public class PointOnNode : PointBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
PointBase ← 
[PointOnNode](VM.Managed.DAFUL.FE.PointOnNode.md)

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

PointBase.IsParametric\(Primitive.enRefType\), 
PointBase.IsParametric\(string\), 
PointBase.ReadXml\(XmlReader\), 
PointBase.WriteXml\(XmlWriter\), 
PointBase.GetSchema\(\), 
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

### <a id="VM_Managed_DAFUL_FE_PointOnNode__ctor_System_UIntPtr_System_Int32_"></a> PointOnNode\(UIntPtr, int\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.PointOnNode" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PointOnNode(UIntPtr ptrOwnerKey, int nNodeIndex)
```

#### Parameters

`ptrOwnerKey` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The owner key.

`nNodeIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The node index.

### <a id="VM_Managed_DAFUL_FE_PointOnNode__ctor_VM_Managed_DAFUL_FE_Mesh_System_Int32_"></a> PointOnNode\(Mesh, int\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.PointOnNode" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PointOnNode(Mesh mesh, int nNodeIndex)
```

#### Parameters

`mesh` [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

The mesh.

`nNodeIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The node index.

### <a id="VM_Managed_DAFUL_FE_PointOnNode__ctor"></a> PointOnNode\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.PointOnNode" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PointOnNode()
```

## Properties

### <a id="VM_Managed_DAFUL_FE_PointOnNode_IsParameterized"></a> IsParameterized

Get the parametric.

```csharp
public override bool IsParameterized { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FE_PointOnNode_NodeIndex"></a> NodeIndex

Gets the index of node.

```csharp
public int NodeIndex { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FE_PointOnNode_Value"></a> Value

Gets the point position.

```csharp
public override VectorBase Value { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_FE_PointOnNode_X"></a> X

Gets the X coordinate of point position.

```csharp
public override double X { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_FE_PointOnNode_Y"></a> Y

Gets the Y coordinate of point position.

```csharp
public override double Y { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_FE_PointOnNode_Z"></a> Z

Gets the Z coordinate of point position.

```csharp
public override double Z { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Managed_DAFUL_FE_PointOnNode_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, you should return null (Nothing in Visual Basic) from this method, and instead, if specifying a custom schema is required, apply the <xref href="System.Xml.Serialization.XmlSchemaProviderAttribute" data-throw-if-not-resolved="false"></xref> to the class.

```csharp
public override XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

An <xref href="System.Xml.Schema.XmlSchema" data-throw-if-not-resolved="false"></xref> that describes the XML representation of the object that is produced by the <xref href="System.Xml.Serialization.IXmlSerializable.WriteXml(System.Xml.XmlWriter)" data-throw-if-not-resolved="false"></xref> method and consumed by the <xref href="System.Xml.Serialization.IXmlSerializable.ReadXml(System.Xml.XmlReader)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_Managed_DAFUL_FE_PointOnNode_IsParametric_VM_Managed_Primitive_enRefType_"></a> IsParametric\(enRefType\)

Gets parametric.

```csharp
public override bool IsParametric(Primitive.enRefType type)
```

#### Parameters

`type` Primitive.enRefType

Point picking type.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If set to <code>true</code> is parametric; otherwise, <code>false</code> is none parametric.

### <a id="VM_Managed_DAFUL_FE_PointOnNode_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_FE_PointOnNode_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public override void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The <xref href="System.Xml.XmlReader" data-throw-if-not-resolved="false"></xref> stream from which the object is deserialized.

### <a id="VM_Managed_DAFUL_FE_PointOnNode_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public override void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The <xref href="System.Xml.XmlWriter" data-throw-if-not-resolved="false"></xref> stream to which the object is serialized.

