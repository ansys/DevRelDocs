# <a id="VM_Managed_TransformPointAndOrientation"></a> Class TransformPointAndOrientation

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the information of transform through point and orientation.

```csharp
public class TransformPointAndOrientation : TransformBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IExpression, ITransformBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
[LinkContainer](VM.Managed.LinkContainer.md) ← 
[Expression](VM.Managed.Expression.md) ← 
[TransformBase](VM.Managed.TransformBase.md) ← 
[TransformPointAndOrientation](VM.Managed.TransformPointAndOrientation.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
[IVerifiable](VM.Managed.IVerifiable.md), 
IExpression, 
ITransformBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider

#### Inherited Members

[TransformBase.m\_matTransform](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_m\_matTransform), 
[TransformBase.WritePosAndOriToXml\(XmlWriter\)](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_WritePosAndOriToXml\_System\_Xml\_XmlWriter\_), 
[TransformBase.ReadXml\(XmlReader\)](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_ReadXml\_System\_Xml\_XmlReader\_), 
[TransformBase.WriteXml\(XmlWriter\)](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_WriteXml\_System\_Xml\_XmlWriter\_), 
[TransformBase.GetSchema\(\)](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_GetSchema), 
[TransformBase.UseExpression](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_UseExpression), 
[TransformBase.RotationAngles](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_RotationAngles), 
[TransformBase.RotationAxis](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_RotationAxis), 
[TransformBase.AngleType](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_AngleType), 
[TransformBase.RotationType](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_RotationType), 
[TransformBase.IsParameterized](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_IsParameterized), 
[TransformBase.OrientationImpl](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_OrientationImpl), 
[TransformBase.Orientation](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_Orientation), 
[TransformBase.PositionImpl](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_PositionImpl), 
[TransformBase.Position](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_Position), 
[TransformBase.TransformationMatrixImpl](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_TransformationMatrixImpl), 
[TransformBase.TransformationMatrix](VM.Managed.TransformBase.md\#VM\_Managed\_TransformBase\_TransformationMatrix), 
[Expression.g\_bSkipUpdate](VM.Managed.Expression.md\#VM\_Managed\_Expression\_g\_bSkipUpdate), 
[Expression.m\_pExpressionHandler](VM.Managed.Expression.md\#VM\_Managed\_Expression\_m\_pExpressionHandler), 
[Expression.m\_strValue](VM.Managed.Expression.md\#VM\_Managed\_Expression\_m\_strValue), 
[Expression.m\_dicReferenceObject](VM.Managed.Expression.md\#VM\_Managed\_Expression\_m\_dicReferenceObject), 
[Expression.m\_lstReferenceObject](VM.Managed.Expression.md\#VM\_Managed\_Expression\_m\_lstReferenceObject), 
[Expression.m\_linkCollectionReferenceObject](VM.Managed.Expression.md\#VM\_Managed\_Expression\_m\_linkCollectionReferenceObject), 
[Expression.Initialize\(\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_Initialize), 
[Expression.UpdateByReferenceObject\(object, LinkEventArgs\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_UpdateByReferenceObject\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[Expression.AddReferenceObject\(UIntPtr\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_AddReferenceObject\_System\_UIntPtr\_), 
[Expression.CheckReferenceObject\(\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_CheckReferenceObject), 
[Expression.SetDefaultString\(ref string\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_SetDefaultString\_System\_String\_\_), 
[Expression.ConvertToValue\(string\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_ConvertToValue\_System\_String\_), 
[Expression.ParseToValue\(char\*\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_ParseToValue\_System\_Char\_\_), 
[Expression.GetNumericValue\(\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_GetNumericValue), 
[Expression.OnDeserialization\(object\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_OnDeserialization\_System\_Object\_), 
[Expression.Uninitialize\(\)](VM.Managed.Expression.md\#VM\_Managed\_Expression\_Uninitialize), 
[Expression.String](VM.Managed.Expression.md\#VM\_Managed\_Expression\_String), 
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

### <a id="VM_Managed_TransformPointAndOrientation__ctor_VM_Managed_PointBase_VM_Managed_OrientationBase_"></a> TransformPointAndOrientation\(PointBase, OrientationBase\)

Initializes a new instance of the <xref href="VM.Managed.TransformPointAndOrientation" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TransformPointAndOrientation(PointBase Point, OrientationBase Orientation)
```

#### Parameters

`Point` [PointBase](VM.Managed.PointBase.md)

The point.

`Orientation` [OrientationBase](VM.Managed.OrientationBase.md)

The orientation.

### <a id="VM_Managed_TransformPointAndOrientation__ctor_VM_Managed_OrientationBase_"></a> TransformPointAndOrientation\(OrientationBase\)

Initializes a new instance of the <xref href="VM.Managed.TransformPointAndOrientation" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TransformPointAndOrientation(OrientationBase Orientation)
```

#### Parameters

`Orientation` [OrientationBase](VM.Managed.OrientationBase.md)

The orientation.

### <a id="VM_Managed_TransformPointAndOrientation__ctor_VM_Managed_PointBase_"></a> TransformPointAndOrientation\(PointBase\)

Initializes a new instance of the <xref href="VM.Managed.TransformPointAndOrientation" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TransformPointAndOrientation(PointBase Point)
```

#### Parameters

`Point` [PointBase](VM.Managed.PointBase.md)

The point.

### <a id="VM_Managed_TransformPointAndOrientation__ctor"></a> TransformPointAndOrientation\(\)

Initializes a new instance of the <xref href="VM.Managed.TransformPointAndOrientation" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TransformPointAndOrientation()
```

## Properties

### <a id="VM_Managed_TransformPointAndOrientation_AngleType"></a> AngleType

Gets the specifies angle type.

```csharp
public override AngleTypes AngleType { get; }
```

#### Property Value

 AngleTypes

### <a id="VM_Managed_TransformPointAndOrientation_IsParameterized"></a> IsParameterized

Gets the parametric.

```csharp
public override bool IsParameterized { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_TransformPointAndOrientation_Orientation"></a> Orientation

Gets the information of orientation(OMatrix type).

```csharp
public override OMatrix Orientation { get; }
```

#### Property Value

 [OMatrix](VM.Managed.OMatrix.md)

### <a id="VM_Managed_TransformPointAndOrientation_OrientationTerm"></a> OrientationTerm

Gets or sets the orientation.

```csharp
public OrientationBase OrientationTerm { get; set; }
```

#### Property Value

 [OrientationBase](VM.Managed.OrientationBase.md)

### <a id="VM_Managed_TransformPointAndOrientation_PointTerm"></a> PointTerm

Gets or sets the point.

```csharp
public PointBase PointTerm { get; set; }
```

#### Property Value

 [PointBase](VM.Managed.PointBase.md)

### <a id="VM_Managed_TransformPointAndOrientation_Position"></a> Position

Gets the information of position(VectorBase type).

```csharp
public override VectorBase Position { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_TransformPointAndOrientation_RotationAngles"></a> RotationAngles

Gets the list of ration angles.

```csharp
public override double[] RotationAngles { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_TransformPointAndOrientation_RotationAxis"></a> RotationAxis

Gets the rotation axes type.

```csharp
public override RotationAxes RotationAxis { get; }
```

#### Property Value

 RotationAxes

### <a id="VM_Managed_TransformPointAndOrientation_RotationType"></a> RotationType

Gets the specifies rotation type.

```csharp
public override RotationTypes RotationType { get; }
```

#### Property Value

 RotationTypes

### <a id="VM_Managed_TransformPointAndOrientation_TransformationMatrix"></a> TransformationMatrix

Gets the information of transform(TMatrix type).

```csharp
public override TMatrix TransformationMatrix { get; set; }
```

#### Property Value

 [TMatrix](VM.Managed.TMatrix.md)

## Methods

### <a id="VM_Managed_TransformPointAndOrientation_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, 
you should return nullNothingnullptra null reference (Nothing in Visual Basic) (Nothing in Visual Basic) 
from this method, and instead, if specifying a custom schema is required, 
apply the XmlSchemaProviderAttribute to the class.

```csharp
public override XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

### <a id="VM_Managed_TransformPointAndOrientation_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

The update event occured from the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The update event information.

### <a id="VM_Managed_TransformPointAndOrientation_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public override void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The XmlReader stream from which the object is deserialized.

### <a id="VM_Managed_TransformPointAndOrientation_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public override void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The XmlWriter stream to which the object is serialized.

