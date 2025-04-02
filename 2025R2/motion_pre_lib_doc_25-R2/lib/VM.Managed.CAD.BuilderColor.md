#  Class BuilderColor

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This class is to represent the color of builder.

```csharp
public class BuilderColor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BuilderColor](VM.Managed.CAD.BuilderColor.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_CAD_BuilderColor__ctor_System_Byte_System_Byte_System_Byte_System_Byte_"></a> BuilderColor\(byte, byte, byte, byte\)

Initializes a new instance of the <xref href="VM.Managed.CAD.BuilderColor" data-throw-if-not-resolved="false"></xref> class

```csharp
public BuilderColor(byte bA, byte bR, byte bG, byte bB)
```

#### Parameters

`bA` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

The alpha.

`bR` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

The red.

`bG` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

The green.

`bB` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

The blue.

### <a id="VM_Managed_CAD_BuilderColor__ctor_System_Drawing_Color_"></a> BuilderColor\(Color\)

Initializes a new instance of the <xref href="VM.Managed.CAD.BuilderColor" data-throw-if-not-resolved="false"></xref> class

```csharp
public BuilderColor(Color color)
```

#### Parameters

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

The color

### <a id="VM_Managed_CAD_BuilderColor__ctor"></a> BuilderColor\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.BuilderColor" data-throw-if-not-resolved="false"></xref> class

```csharp
public BuilderColor()
```

## Properties

### <a id="VM_Managed_CAD_BuilderColor_ColorA"></a> ColorA

Gets the alpha of color.

```csharp
public int ColorA { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_CAD_BuilderColor_ColorB"></a> ColorB

Gets the blue of color.

```csharp
public int ColorB { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_CAD_BuilderColor_ColorG"></a> ColorG

Gets the green of color.

```csharp
public int ColorG { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_CAD_BuilderColor_ColorR"></a> ColorR

Gets the red of color.

```csharp
public int ColorR { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_CAD_BuilderColor_EdgeColorInfo"></a> EdgeColorInfo

Gets or sets the faces color information.

```csharp
public TopologyColorInfo EdgeColorInfo { get; set; }
```

#### Property Value

 [TopologyColorInfo](VM.Managed.CAD.TopologyColorInfo.md)

### <a id="VM_Managed_CAD_BuilderColor_FaceColorInfo"></a> FaceColorInfo

Gets or sets the faces color information.

```csharp
public TopologyColorInfo FaceColorInfo { get; set; }
```

#### Property Value

 [TopologyColorInfo](VM.Managed.CAD.TopologyColorInfo.md)

## Methods

### <a id="VM_Managed_CAD_BuilderColor_GetSchema"></a> GetSchema\(\)

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

### <a id="VM_Managed_CAD_BuilderColor_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
virtual void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_CAD_BuilderColor_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public virtual void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The XmlReader stream from which the object is deserialized.

### <a id="VM_Managed_CAD_BuilderColor_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public virtual void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The XmlWriter stream to which the object is serialized.

