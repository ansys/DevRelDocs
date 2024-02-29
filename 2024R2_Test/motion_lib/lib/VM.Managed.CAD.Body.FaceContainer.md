# <a id="VM_Managed_CAD_Body_FaceContainer"></a> Class Body.FaceContainer

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This class is to represent the face container.

```csharp
public sealed class Body.FaceContainer : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IPostDeserialized
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
[LinkContainer](VM.Managed.LinkContainer.md) ← 
[Body.FaceContainer](VM.Managed.CAD.Body.FaceContainer.md)

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
IPostDeserialized

#### Inherited Members

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
[LinkContainer.SetContainer\(IOwned, bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetContainer\_VM\_Models\_Pre\_IOwned\_System\_Boolean\_), 
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

## Properties

### <a id="VM_Managed_CAD_Body_FaceContainer_Count"></a> Count

Gets the number of elements contained in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_CAD_Body_FaceContainer_IsReadOnly"></a> IsReadOnly

Gets a value indicating whether the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

```csharp
public bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_Body_FaceContainer_Item_System_UInt32_"></a> this\[uint\]

```csharp
public Face this[uint nIndex] { get; }
```

#### Property Value

 [Face](VM.Managed.CAD.Face.md)

## Methods

### <a id="VM_Managed_CAD_Body_FaceContainer_Add_VM_Managed_CAD_Face_"></a> Add\(Face\)

Adds an item to the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> [Not Supported].

```csharp
public void Add(Face A_0)
```

#### Parameters

`A_0` [Face](VM.Managed.CAD.Face.md)

### <a id="VM_Managed_CAD_Body_FaceContainer_Clear"></a> Clear\(\)

Removes all items from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> [Not Supported].

```csharp
public void Clear()
```

### <a id="VM_Managed_CAD_Body_FaceContainer_Contains_VM_Managed_CAD_Face_"></a> Contains\(Face\)

Determines whether the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> contains a specific value.

```csharp
public bool Contains(Face face)
```

#### Parameters

`face` [Face](VM.Managed.CAD.Face.md)

The object to locate in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if <code class="paramref">face</code> is found in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>; otherwise, false.

### <a id="VM_Managed_CAD_Body_FaceContainer_CopyTo_VM_Managed_CAD_Face___System_Int32_"></a> CopyTo\(Face\[\], int\)

Copies the elements of the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> to an <xref href="System.Array" data-throw-if-not-resolved="false"></xref>, starting at a particular <xref href="System.Array" data-throw-if-not-resolved="false"></xref> index.

```csharp
public void CopyTo(Face[] arr, int arrayIndex)
```

#### Parameters

`arr` [Face](VM.Managed.CAD.Face.md)\[\]

The one-dimensional <xref href="System.Array" data-throw-if-not-resolved="false"></xref> that is the destination of the elements copied from <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>. The <xref href="System.Array" data-throw-if-not-resolved="false"></xref> must have zero-based indexing.

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The zero-based index in <code class="paramref">arr</code> at which copying begins.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

<code class="paramref">arr</code> is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

<code class="paramref">arrayIndex</code> is less than 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

                <code class="paramref">arr</code> is multidimensional.
-or-
<code class="paramref">arrayIndex</code> is equal to or greater than the length of <code class="paramref">arr</code>.
-or-
The number of elements in the source <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is greater than the available space from <code class="paramref">arrayIndex</code> to the end of the destination <code class="paramref">arr</code>.
-or-
Type <code class="paramref">arr</code> cannot be cast automatically to the type of the destination <code class="paramref">arr</code>.

### <a id="VM_Managed_CAD_Body_FaceContainer_GetCreatedFace_System_UInt32_"></a> GetCreatedFace\(uint\)

Gets the created face.

```csharp
public Face GetCreatedFace(uint nIndex)
```

#### Parameters

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

Index of the n.

#### Returns

 [Face](VM.Managed.CAD.Face.md)

### <a id="VM_Managed_CAD_Body_FaceContainer_GetEnumerator"></a> GetEnumerator\(\)

Returns an enumerator that iterates through the collection.

```csharp
public IEnumerator<Face> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<[Face](VM.Managed.CAD.Face.md)\>

A <xref href="System.Collections.Generic.IEnumerator%601" data-throw-if-not-resolved="false"></xref> that can be used to iterate through the collection.

### <a id="VM_Managed_CAD_Body_FaceContainer_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface,
you should return nullNothingnullptra null reference (Nothing in Visual Basic) (Nothing in Visual Basic)
from this method, and instead, if specifying a custom schema is required,
apply the XmlSchemaProviderAttribute to the class.

```csharp
public XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

An <xref href="System.Xml.Schema.XmlSchema" data-throw-if-not-resolved="false"></xref> that describes the XML representation of the object that is produced by the <xref href="System.Xml.Serialization.IXmlSerializable.WriteXml(System.Xml.XmlWriter)" data-throw-if-not-resolved="false"></xref> method and consumed by the <xref href="System.Xml.Serialization.IXmlSerializable.ReadXml(System.Xml.XmlReader)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_Managed_CAD_Body_FaceContainer_GetTargetListForUpdate"></a> GetTargetListForUpdate\(\)

Gets the update objects.

```csharp
public override sealed List<IEventProvider> GetTargetListForUpdate()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<IEventProvider\>

### <a id="VM_Managed_CAD_Body_FaceContainer_GetTemporaryFace_System_UInt32_"></a> GetTemporaryFace\(uint\)

Gets the temporary face.

```csharp
public Face GetTemporaryFace(uint nIndex)
```

#### Parameters

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The face index.

#### Returns

 [Face](VM.Managed.CAD.Face.md)

The specified face.

### <a id="VM_Managed_CAD_Body_FaceContainer_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override sealed void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_CAD_Body_FaceContainer_OnPostDeserialized_System_Runtime_Serialization_StreamingContext_"></a> OnPostDeserialized\(StreamingContext\)

```csharp
public void OnPostDeserialized(StreamingContext context)
```

#### Parameters

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

### <a id="VM_Managed_CAD_Body_FaceContainer_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The XmlReader stream from which the object is deserialized.

### <a id="VM_Managed_CAD_Body_FaceContainer_Remove_VM_Managed_CAD_Face_"></a> Remove\(Face\)

Removes the specified name [Not Supported].

```csharp
public bool Remove(Face A_0)
```

#### Parameters

`A_0` [Face](VM.Managed.CAD.Face.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_CAD_Body_FaceContainer_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The XmlWriter stream to which the object is serialized.

