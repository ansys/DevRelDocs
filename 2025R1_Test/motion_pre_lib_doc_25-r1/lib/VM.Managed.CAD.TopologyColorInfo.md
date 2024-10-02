#  Class TopologyColorInfo

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This class is to represent the color information of topology.

```csharp
public class TopologyColorInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TopologyColorInfo](VM.Managed.CAD.TopologyColorInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_CAD_TopologyColorInfo__ctor"></a> TopologyColorInfo\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.TopologyColorInfo" data-throw-if-not-resolved="false"></xref> class

```csharp
public TopologyColorInfo()
```

## Properties

### <a id="VM_Managed_CAD_TopologyColorInfo_ColorInfo"></a> ColorInfo

Gets the color information.

```csharp
public Dictionary<int, Color> ColorInfo { get; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

## Methods

### <a id="VM_Managed_CAD_TopologyColorInfo_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, 
you should return nullNothingnullptra null reference (Nothing in Visual Basic) (Nothing in Visual Basic) 
from this method, and instead, if specifying a custom schema is required, 
apply the XmlSchemaProviderAttribute to the class.

```csharp
public virtual XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

An <xref href="System.Xml.Schema.XmlSchema" data-throw-if-not-resolved="false"></xref> that describes the XML representation of the object that is produced by the <xref href="System.Xml.Serialization.IXmlSerializable.WriteXml(System.Xml.XmlWriter)" data-throw-if-not-resolved="false"></xref> method and consumed by the <xref href="System.Xml.Serialization.IXmlSerializable.ReadXml(System.Xml.XmlReader)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_Managed_CAD_TopologyColorInfo_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public virtual void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The XmlReader stream from which the object is deserialized.

### <a id="VM_Managed_CAD_TopologyColorInfo_SetColor_VM_Managed_CAD_Builder_System_Int32___System_Drawing_Color_"></a> SetColor\(Builder, int\[\], Color\)

Sets the color information.

```csharp
public void SetColor(Builder builder, int[] arrIndexes, Color color)
```

#### Parameters

`builder` [Builder](VM.Managed.CAD.Builder.md)

The owner builder.

`arrIndexes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

The topology indexes.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

The color.

### <a id="VM_Managed_CAD_TopologyColorInfo_UnsetColor_VM_Managed_CAD_Builder_System_Int32___"></a> UnsetColor\(Builder, int\[\]\)

Unsets the color information.

```csharp
public void UnsetColor(Builder builder, int[] arrIndexes)
```

#### Parameters

`builder` [Builder](VM.Managed.CAD.Builder.md)

The owner builder.

`arrIndexes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

The topology indexes.

### <a id="VM_Managed_CAD_TopologyColorInfo_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public virtual void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The XmlWriter stream to which the object is serialized.

