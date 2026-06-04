# Struct LinkerFE<T\>

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This interface is to represent fe linker.

```csharp
public struct LinkerFE<T>
```

#### Type Parameters

`T` 

## Constructors

### LinkerFE\(T\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.LinkerFE%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkerFE(T t)
```

#### Parameters

`t` T

### LinkerFE\(ILink\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.LinkerFE%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkerFE(ILink link)
```

#### Parameters

`link` ILink

The link.

## Properties

### IsReference

Gets a value indicating whether linked object is the reference.

```csharp
public bool IsReference { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Key

Gets or sets the linked object's key.

```csharp
public UIntPtr Key { get; }
```

#### Property Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### Object

Gets or sets the linked object.

```csharp
public T Object { get; set; }
```

#### Property Value

 T

### Prototype

Gets the linked object's prototype.

```csharp
public T Prototype { get; }
```

#### Property Value

 T

## Methods

### GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface,
you should return nullNothingnullptra null reference (Nothing in Visual Basic) (Nothing in Visual Basic)
from this method, and instead, if specifying a custom schema is required,
apply the XmlSchemaProviderAttribute to the class.

```csharp
public XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

### ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The XmlReader stream from which the object is deserialized.

### WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The XmlWriter stream to which the object is serialized.

## Operators

### implicit operator LinkerFE<T\>\(T\)

```csharp
public static implicit operator LinkerFE<T>(T t)
```

#### Parameters

`t` T

#### Returns

 [LinkerFE](VM.Managed.DAFUL.FE.LinkerFE\-1.md)<T\>

### implicit operator T\(LinkerFE<T\>\)

```csharp
public static implicit operator T(LinkerFE<T> linker)
```

#### Parameters

`linker` [LinkerFE](VM.Managed.DAFUL.FE.LinkerFE\-1.md)<T\>

#### Returns

 T


