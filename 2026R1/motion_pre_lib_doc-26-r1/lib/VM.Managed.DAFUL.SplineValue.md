# Class SplineValue
<a id="VM_Managed_DAFUL_SplineValue"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDSB.dll  

This base class is to represent the spline value.

```csharp
public sealed class SplineValue : SplineData, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[SplineData](VM.Managed.DAFUL.SplineData.md) ← 
[SplineValue](VM.Managed.DAFUL.SplineValue.md)

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

[SplineData.GetPoints\(\)](VM.Managed.DAFUL.SplineData.md\#VM\_Managed\_DAFUL\_SplineData\_GetPoints), 
[SplineData.GetPoints\(string\)](VM.Managed.DAFUL.SplineData.md\#VM\_Managed\_DAFUL\_SplineData\_GetPoints\_System\_String\_), 
[SplineData.GetPoints\(List<double\>, List<double\>\)](VM.Managed.DAFUL.SplineData.md\#VM\_Managed\_DAFUL\_SplineData\_GetPoints\_System\_Collections\_Generic\_List\_System\_Double\_\_System\_Collections\_Generic\_List\_System\_Double\_\_), 
[SplineData.GetPoints\(List<double\>, List<double\>, string\)](VM.Managed.DAFUL.SplineData.md\#VM\_Managed\_DAFUL\_SplineData\_GetPoints\_System\_Collections\_Generic\_List\_System\_Double\_\_System\_Collections\_Generic\_List\_System\_Double\_\_System\_String\_), 
[SplineData.GetSchema\(\)](VM.Managed.DAFUL.SplineData.md\#VM\_Managed\_DAFUL\_SplineData\_GetSchema), 
[SplineData.ReadXml\(XmlReader\)](VM.Managed.DAFUL.SplineData.md\#VM\_Managed\_DAFUL\_SplineData\_ReadXml\_System\_Xml\_XmlReader\_), 
[SplineData.WriteXml\(XmlWriter\)](VM.Managed.DAFUL.SplineData.md\#VM\_Managed\_DAFUL\_SplineData\_WriteXml\_System\_Xml\_XmlWriter\_), 
[SplineData.Type](VM.Managed.DAFUL.SplineData.md\#VM\_Managed\_DAFUL\_SplineData\_Type), 
[SplineData.ContainsNegativeNumber](VM.Managed.DAFUL.SplineData.md\#VM\_Managed\_DAFUL\_SplineData\_ContainsNegativeNumber), 
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
LinkContainer.SetContainer\(IOwned, bool\), 
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

## Constructors

### <a id="VM_Managed_DAFUL_SplineValue__ctor"></a> SplineValue\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SplineValue" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SplineValue()
```

## Properties

### <a id="VM_Managed_DAFUL_SplineValue_ContainsNegativeNumber"></a> ContainsNegativeNumber

Gets the flag whether number is negative or not.

```csharp
public override bool ContainsNegativeNumber { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_SplineValue_TwoPoints"></a> TwoPoints

Gets or sets the two points.

```csharp
public List<SplineValue.TwoPoint> TwoPoints { get; set; }
```

#### Property Value

 List<[SplineValue](VM.Managed.DAFUL.SplineValue.md).[TwoPoint](VM.Managed.DAFUL.SplineValue.TwoPoint.md)\>

### <a id="VM_Managed_DAFUL_SplineValue_Type"></a> Type

Gets or sets the type.

```csharp
public override SplineData.DataType Type { get; protected set; }
```

#### Property Value

 [SplineData](VM.Managed.DAFUL.SplineData.md).[DataType](VM.Managed.DAFUL.SplineData.DataType.md)

## Methods

### <a id="VM_Managed_DAFUL_SplineValue_GetPoint_System_Int32_"></a> GetPoint\(int\)

Get the point

```csharp
public (double, double) GetPoint(int nIndex)
```

#### Parameters

`nIndex` int

The index

#### Returns

 \(double, double\)

### <a id="VM_Managed_DAFUL_SplineValue_GetPoints"></a> GetPoints\(\)

<p>Gets the points.</p>

```csharp
public override IEnumerable<SplineData.Point> GetPoints()
```

#### Returns

 IEnumerable<[SplineData](VM.Managed.DAFUL.SplineData.md).[Point](VM.Managed.DAFUL.SplineData.Point.md)\>

The point list.

### <a id="VM_Managed_DAFUL_SplineValue_GetPoints_System_String_"></a> GetPoints\(string\)

Gets the points.

```csharp
public override IEnumerable<SplineData.Point> GetPoints(string documentFilePath)
```

#### Parameters

`documentFilePath` string

The Document file path.

#### Returns

 IEnumerable<[SplineData](VM.Managed.DAFUL.SplineData.md).[Point](VM.Managed.DAFUL.SplineData.Point.md)\>

The point list.

### <a id="VM_Managed_DAFUL_SplineValue_GetPoints_System_Collections_Generic_List_System_Double__System_Collections_Generic_List_System_Double__"></a> GetPoints\(List<double\>, List<double\>\)

Gets the points.

```csharp
public override void GetPoints(List<double> lstX, List<double> lstY)
```

#### Parameters

`lstX` List<double\>

The LST X.

`lstY` List<double\>

The LST Y.

### <a id="VM_Managed_DAFUL_SplineValue_GetPoints_System_Collections_Generic_List_System_Double__System_Collections_Generic_List_System_Double__System_String_"></a> GetPoints\(List<double\>, List<double\>, string\)

Gets the points.

```csharp
public override void GetPoints(List<double> lstX, List<double> lstY, string strDocumentFilePath)
```

#### Parameters

`lstX` List<double\>

The LST X.

`lstY` List<double\>

The LST Y.

`strDocumentFilePath` string

The Document file path.

### <a id="VM_Managed_DAFUL_SplineValue_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, you should return null (Nothing in Visual Basic) from this method, and instead, if specifying a custom schema is required, apply the <xref href="System.Xml.Serialization.XmlSchemaProviderAttribute" data-throw-if-not-resolved="false"></xref> to the class.

```csharp
public override XmlSchema GetSchema()
```

#### Returns

 XmlSchema

An <xref href="System.Xml.Schema.XmlSchema" data-throw-if-not-resolved="false"></xref> that describes the XML representation of the object that is produced by the <xref href="System.Xml.Serialization.IXmlSerializable.WriteXml(System.Xml.XmlWriter)" data-throw-if-not-resolved="false"></xref> method and consumed by the <xref href="System.Xml.Serialization.IXmlSerializable.ReadXml(System.Xml.XmlReader)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_Managed_DAFUL_SplineValue_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public override void ReadXml(XmlReader reader)
```

#### Parameters

`reader` XmlReader

The <xref href="System.Xml.XmlReader" data-throw-if-not-resolved="false"></xref> stream from which the object is deserialized.

### <a id="VM_Managed_DAFUL_SplineValue_SetPoints_System_Collections_Generic_List_System_Double__System_Collections_Generic_List_System_Double__"></a> SetPoints\(List<double\>, List<double\>\)

Sets the points.

```csharp
public void SetPoints(List<double> lstX, List<double> lstY)
```

#### Parameters

`lstX` List<double\>

The LST X.

`lstY` List<double\>

The LST Y.

### <a id="VM_Managed_DAFUL_SplineValue_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public override void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The <xref href="System.Xml.XmlWriter" data-throw-if-not-resolved="false"></xref> stream to which the object is serialized.

