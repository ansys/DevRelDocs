# Class ColorXmlSerializer
<a id="VM_Managed_ColorXmlSerializer"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the icon color.

```csharp
public class ColorXmlSerializer
```

#### Inheritance

object ← 
[ColorXmlSerializer](VM.Managed.ColorXmlSerializer.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_ColorXmlSerializer__ctor_System_Drawing_Color_"></a> ColorXmlSerializer\(Color\)

Initializes a new instance of the <xref href="VM.Managed.ColorXmlSerializer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ColorXmlSerializer(Color color)
```

#### Parameters

`color` Color

The color.

### <a id="VM_Managed_ColorXmlSerializer__ctor"></a> ColorXmlSerializer\(\)

Initializes a new instance of the <xref href="VM.Managed.ColorXmlSerializer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ColorXmlSerializer()
```

## Properties

### <a id="VM_Managed_ColorXmlSerializer_Data"></a> Data

Gets or sets the color.

```csharp
public Color Data { get; set; }
```

#### Property Value

 Color

## Methods

### <a id="VM_Managed_ColorXmlSerializer_GetSchema"></a> GetSchema\(\)

```csharp
public virtual XmlSchema GetSchema()
```

#### Returns

 XmlSchema

### <a id="VM_Managed_ColorXmlSerializer_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

```csharp
public virtual void ReadXml(XmlReader reader)
```

#### Parameters

`reader` XmlReader

### <a id="VM_Managed_ColorXmlSerializer_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

```csharp
public virtual void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

## Operators

### <a id="VM_Managed_ColorXmlSerializer_op_Implicit_VM_Managed_ColorXmlSerializer__System_Drawing_Color"></a> implicit operator Color\(ColorXmlSerializer\)

Cast operator.

```csharp
public static implicit operator Color(ColorXmlSerializer o)
```

#### Parameters

`o` [ColorXmlSerializer](VM.Managed.ColorXmlSerializer.md)

The color xmlserializer.

#### Returns

 Color

### <a id="VM_Managed_ColorXmlSerializer_op_Implicit_System_Drawing_Color__VM_Managed_ColorXmlSerializer"></a> implicit operator ColorXmlSerializer\(Color\)

Cast operator.

```csharp
public static implicit operator ColorXmlSerializer(Color o)
```

#### Parameters

`o` Color

The color.

#### Returns

 [ColorXmlSerializer](VM.Managed.ColorXmlSerializer.md)

