# <a id="VM_Managed_DAFUL_SplineFile"></a> Class SplineFile

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDSB.dll  

This base class is to represent the spline file.

```csharp
public sealed class SplineFile : SplineData, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[SplineData](VM.Managed.DAFUL.SplineData.md) ← 
[SplineFile](VM.Managed.DAFUL.SplineFile.md)

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

### <a id="VM_Managed_DAFUL_SplineFile__ctor"></a> SplineFile\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SplineFile" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SplineFile()
```

## Properties

### <a id="VM_Managed_DAFUL_SplineFile_ContainsNegativeNumber"></a> ContainsNegativeNumber

Gets the flag whether number is negative or not.

```csharp
public override bool ContainsNegativeNumber { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_SplineFile_FilePath"></a> FilePath

Gets or sets the file path.

```csharp
public string FilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_SplineFile_SelectedSplineName"></a> SelectedSplineName

Gets or sets the name of the selected spline.

```csharp
public string SelectedSplineName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_SplineFile_Type"></a> Type

Gets or sets the type.

```csharp
public override SplineData.DataType Type { get; protected set; }
```

#### Property Value

 [SplineData](VM.Managed.DAFUL.SplineData.md).[DataType](VM.Managed.DAFUL.SplineData.DataType.md)

## Methods

### <a id="VM_Managed_DAFUL_SplineFile_GetPoints"></a> GetPoints\(\)

<p>Gets the points.</p>

```csharp
public override IEnumerable<SplineData.Point> GetPoints()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[SplineData](VM.Managed.DAFUL.SplineData.md).[Point](VM.Managed.DAFUL.SplineData.Point.md)\>

The point list.

### <a id="VM_Managed_DAFUL_SplineFile_GetPoints_System_String_"></a> GetPoints\(string\)

Gets the points.

```csharp
public override IEnumerable<SplineData.Point> GetPoints(string documentFilePath)
```

#### Parameters

`documentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Document file path.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[SplineData](VM.Managed.DAFUL.SplineData.md).[Point](VM.Managed.DAFUL.SplineData.Point.md)\>

The point list.

### <a id="VM_Managed_DAFUL_SplineFile_GetPoints_System_Collections_Generic_List_System_Double__System_Collections_Generic_List_System_Double__"></a> GetPoints\(List<double\>, List<double\>\)

Gets the points.

```csharp
public override void GetPoints(List<double> lstX, List<double> lstY)
```

#### Parameters

`lstX` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

The LST X.

`lstY` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

The LST Y.

### <a id="VM_Managed_DAFUL_SplineFile_GetPoints_System_Collections_Generic_List_System_Double__System_Collections_Generic_List_System_Double__System_String_"></a> GetPoints\(List<double\>, List<double\>, string\)

Gets the points.

```csharp
public override void GetPoints(List<double> lstX, List<double> lstY, string strDocumentFilePath)
```

#### Parameters

`lstX` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

The LST X.

`lstY` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

The LST Y.

`strDocumentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Document file path.

### <a id="VM_Managed_DAFUL_SplineFile_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, you should return null (Nothing in Visual Basic) from this method, and instead, if specifying a custom schema is required, apply the <xref href="System.Xml.Serialization.XmlSchemaProviderAttribute" data-throw-if-not-resolved="false"></xref> to the class.

```csharp
public override XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

An <xref href="System.Xml.Schema.XmlSchema" data-throw-if-not-resolved="false"></xref> that describes the XML representation of the object that is produced by the <xref href="System.Xml.Serialization.IXmlSerializable.WriteXml(System.Xml.XmlWriter)" data-throw-if-not-resolved="false"></xref> method and consumed by the <xref href="System.Xml.Serialization.IXmlSerializable.ReadXml(System.Xml.XmlReader)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_Managed_DAFUL_SplineFile_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public override void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The <xref href="System.Xml.XmlReader" data-throw-if-not-resolved="false"></xref> stream from which the object is deserialized.

### <a id="VM_Managed_DAFUL_SplineFile_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public override void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The <xref href="System.Xml.XmlWriter" data-throw-if-not-resolved="false"></xref> stream to which the object is serialized.

