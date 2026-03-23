# Class Vector

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the vector.

```csharp
public sealed class Vector : VectorBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[VectorBase](VM.Managed.VectorBase.md) ← 
[Vector](VM.Managed.Vector.md)

#### Inherited Members

[VectorBase.GetArray\(\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_GetArray), 
[VectorBase.Set\(double, double, double\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_Set\_System\_Double\_System\_Double\_System\_Double\_), 
[VectorBase.Set\(double\[\]\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_Set\_System\_Double\_\_\_), 
[VectorBase.Set\(VectorBase\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_Set\_VM\_Managed\_VectorBase\_), 
[VectorBase.DotProduct\(VectorBase\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_DotProduct\_VM\_Managed\_VectorBase\_), 
[VectorBase.CrossProduct\(VectorBase\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_CrossProduct\_VM\_Managed\_VectorBase\_), 
[VectorBase.GetDistance\(VectorBase\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_GetDistance\_VM\_Managed\_VectorBase\_), 
[VectorBase.GetOrthoVector\(VectorBase\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_GetOrthoVector\_VM\_Managed\_VectorBase\_), 
[VectorBase.GetOrthoVector\(\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_GetOrthoVector), 
[VectorBase.MakeUnitVector\(\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_MakeUnitVector), 
[VectorBase.Clone\(\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_Clone), 
[VectorBase.ToString\(\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_ToString), 
[VectorBase.Equals\(object\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_Equals\_System\_Object\_), 
[VectorBase.GetObjectData\(SerializationInfo, StreamingContext\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_GetObjectData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[VectorBase.op\_AdditionAssignment\(VectorBase, VectorBase\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_op\_AdditionAssignment\_VM\_Managed\_VectorBase\_VM\_Managed\_VectorBase\_), 
[VectorBase.op\_SubtractionAssignment\(VectorBase, VectorBase\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_op\_SubtractionAssignment\_VM\_Managed\_VectorBase\_VM\_Managed\_VectorBase\_), 
[VectorBase.op\_MultiplicationAssignment\(VectorBase, double\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_op\_MultiplicationAssignment\_VM\_Managed\_VectorBase\_System\_Double\_), 
[VectorBase.op\_MultiplicationAssignment\(VectorBase, VectorBase\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_op\_MultiplicationAssignment\_VM\_Managed\_VectorBase\_VM\_Managed\_VectorBase\_), 
[VectorBase.op\_DivisionAssignment\(VectorBase, double\)](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_op\_DivisionAssignment\_VM\_Managed\_VectorBase\_System\_Double\_), 
[VectorBase.Magnitude](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_Magnitude), 
[VectorBase.this\[uint\]](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_Item\_System\_UInt32\_), 
[VectorBase.this\[Coordinate\]](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_Item\_VM\_Coordinate\_), 
[VectorBase.Z](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_Z), 
[VectorBase.Y](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_Y), 
[VectorBase.X](VM.Managed.VectorBase.md\#VM\_Managed\_VectorBase\_X)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Vector\(double\[\]\)

Initializes a new instance of the <xref href="VM.Managed.Vector" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Vector(double[] arVec)
```

#### Parameters

`arVec` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The arVec.

### Vector\(double, double, double\)

Initializes a new instance of the <xref href="VM.Managed.Vector" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Vector(double dX, double dY, double dZ)
```

#### Parameters

`dX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The X.

`dY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The Y.

`dZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

The Z.

### Vector\(VectorBase\)

Initializes a new instance of the <xref href="VM.Managed.Vector" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Vector(VectorBase vec)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

The vec.

### Vector\(\)

Initializes a new instance of the <xref href="VM.Managed.Vector" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Vector()
```

### Vector\(SerializationInfo, StreamingContext\)

Initializes a new instance of the <xref href="VM.Managed.Vector" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected Vector(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

The context.

## Properties

### Magnitude

Gets the magnitude of vector(UInt32).

```csharp
public override double Magnitude { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### X

Gets or sets the X of vector.

```csharp
public override double X { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Y

Gets or sets the Y of vector.

```csharp
public override double Y { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Z

Gets or sets the Z of vector.

```csharp
public override double Z { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### this\[uint\]

```csharp
public override double this[uint n] { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### this\[Coordinate\]

```csharp
public override double this[Coordinate n] { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### Clone\(\)

clone.

```csharp
public override sealed object Clone()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

The clone.

### CrossProduct\(VectorBase\)

Cross product.

```csharp
public override sealed Vector CrossProduct(VectorBase vec)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

The vec.

#### Returns

 [Vector](VM.Managed.Vector.md)

Result of product

### DotProduct\(VectorBase\)

Dot product.

```csharp
public override sealed double DotProduct(VectorBase vec)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

The vec.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

Result of product

### GetArray\(\)

Gets the array.

```csharp
public override sealed double[] GetArray()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array.

### GetDistance\(VectorBase\)

Gets the distance.

```csharp
public override sealed double GetDistance(VectorBase vec)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

The vec.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The distance

### GetObjectData\(SerializationInfo, StreamingContext\)

Customize the GetObjectData function.

```csharp
public override sealed void GetObjectData(SerializationInfo info, StreamingContext __unnamed001)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`__unnamed001` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

### GetOrthoVector\(VectorBase\)

Gets the ortho vector.

```csharp
public override sealed Vector GetOrthoVector(VectorBase vecCandidate)
```

#### Parameters

`vecCandidate` [VectorBase](VM.Managed.VectorBase.md)

The candidate.

#### Returns

 [Vector](VM.Managed.Vector.md)

The ortho vector.

### GetOrthoVector\(\)

Gets the ortho vector.

```csharp
public override sealed Vector GetOrthoVector()
```

#### Returns

 [Vector](VM.Managed.Vector.md)

The ortho vector.

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

### MakeUnitVector\(\)

Mate unit vector.

```csharp
public override sealed void MakeUnitVector()
```

### ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The XmlReader stream from which the object is deserialized.

### Set\(double, double, double\)

Sets the value of vector.

```csharp
public override sealed void Set(double dX, double dY, double dZ)
```

#### Parameters

`dX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The X.

`dY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The Y.

`dZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

The Z.

### Set\(double\[\]\)

Sets the value of vector.

```csharp
public override sealed void Set(double[] arr)
```

#### Parameters

`arr` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The arr.

### Set\(VectorBase\)

Sets the value of vector.

```csharp
public override sealed void Set(VectorBase vec)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

The vec.

### WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The XmlWriter stream to which the object is serialized.

## Operators

### implicit operator Vector\(Vector\)

```csharp
public static implicit operator Vector(Vector vec)
```

#### Parameters

`vec` Vector

#### Returns

 [Vector](VM.Managed.Vector.md)

### implicit operator Vector\(Vector\)

```csharp
public static implicit operator Vector(Vector vec)
```

#### Parameters

`vec` [Vector](VM.Managed.Vector.md)

#### Returns

 Vector


