# Class ColorXmlSerializer

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the icon color.

```csharp
public class ColorXmlSerializer
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ColorXmlSerializer](VM.Managed.ColorXmlSerializer.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ColorXmlSerializer\(Color\)

Initializes a new instance of the <xref href="VM.Managed.ColorXmlSerializer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ColorXmlSerializer(Color color)
```

#### Parameters

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

The color.

### ColorXmlSerializer\(\)

Initializes a new instance of the <xref href="VM.Managed.ColorXmlSerializer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ColorXmlSerializer()
```

## Properties

### Data

Gets or sets the color.

```csharp
public Color Data { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

## Methods

### GetSchema\(\)

```csharp
public virtual XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

### ReadXml\(XmlReader\)

```csharp
public virtual void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

### WriteXml\(XmlWriter\)

```csharp
public virtual void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

## Operators

### implicit operator Color\(ColorXmlSerializer\)

Cast operator.

```csharp
public static implicit operator Color(ColorXmlSerializer o)
```

#### Parameters

`o` [ColorXmlSerializer](VM.Managed.ColorXmlSerializer.md)

The color xmlserializer.

#### Returns

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### implicit operator ColorXmlSerializer\(Color\)

Cast operator.

```csharp
public static implicit operator ColorXmlSerializer(Color o)
```

#### Parameters

`o` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

The color.

#### Returns

 [ColorXmlSerializer](VM.Managed.ColorXmlSerializer.md)


