# Class VectorBase

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the vector base.

```csharp
public abstract class VectorBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[VectorBase](VM.Managed.VectorBase.md)

#### Derived

[Vector](VM.Managed.Vector.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### VectorBase\(\)

```csharp
protected VectorBase()
```

## Properties

### Magnitude

Gets the magnitude of vector(UInt32).

```csharp
public abstract double Magnitude { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### X

Gets or sets the X of vector.

```csharp
public abstract double X { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Y

Gets or sets the Y of vector.

```csharp
public abstract double Y { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Z

Gets or sets the Z of vector.

```csharp
public abstract double Z { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### this\[uint\]

```csharp
public abstract double this[uint n] { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### this\[Coordinate\]

```csharp
public abstract double this[Coordinate n] { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### Clone\(\)

clone.

```csharp
public abstract object Clone()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

The clone.

### CrossProduct\(VectorBase\)

Cross product.

```csharp
public abstract Vector CrossProduct(VectorBase vec)
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
public abstract double DotProduct(VectorBase vec)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

The vec.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

Result of product

### Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetArray\(\)

Gets the array.

```csharp
public abstract double[] GetArray()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array.

### GetDistance\(VectorBase\)

Gets the distance.

```csharp
public abstract double GetDistance(VectorBase vec)
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
public virtual void GetObjectData(SerializationInfo A_0, StreamingContext A_1)
```

#### Parameters

`A_0` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`A_1` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

### GetOrthoVector\(VectorBase\)

Gets the ortho vector.

```csharp
public abstract Vector GetOrthoVector(VectorBase vecCandidate)
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
public abstract Vector GetOrthoVector()
```

#### Returns

 [Vector](VM.Managed.Vector.md)

The ortho vector.

### MakeUnitVector\(\)

Mate unit vector.

```csharp
public abstract void MakeUnitVector()
```

### Set\(double, double, double\)

Sets the value of vector.

```csharp
public abstract void Set(double dX, double dY, double dZ)
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
public abstract void Set(double[] arr)
```

#### Parameters

`arr` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The arr.

### Set\(VectorBase\)

Sets the value of vector.

```csharp
public abstract void Set(VectorBase vec)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

The vec.

### ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### op\_AdditionAssignment\(VectorBase, VectorBase\)

```csharp
public static VectorBase op_AdditionAssignment(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`vec2` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### op\_DivisionAssignment\(VectorBase, double\)

```csharp
public static VectorBase op_DivisionAssignment(VectorBase vec1, double dVal)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### op\_MultiplicationAssignment\(VectorBase, double\)

```csharp
public static VectorBase op_MultiplicationAssignment(VectorBase vec1, double dVal)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### op\_MultiplicationAssignment\(VectorBase, VectorBase\)

```csharp
public static VectorBase op_MultiplicationAssignment(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`vec2` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### op\_SubtractionAssignment\(VectorBase, VectorBase\)

```csharp
public static VectorBase op_SubtractionAssignment(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`vec2` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

## Operators

### operator \+\(VectorBase, VectorBase\)

```csharp
public static Vector operator +(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`vec2` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [Vector](VM.Managed.Vector.md)

### operator /\(VectorBase, double\)

```csharp
public static Vector operator /(VectorBase vec1, double dVal)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [Vector](VM.Managed.Vector.md)

### operator ==\(VectorBase, VectorBase\)

```csharp
public static bool operator ==(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`vec2` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### implicit operator VectorBase\(Vector\)

```csharp
public static implicit operator VectorBase(Vector vec)
```

#### Parameters

`vec` Vector

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### implicit operator Vector\(VectorBase\)

```csharp
public static implicit operator Vector(VectorBase vec)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 Vector

### operator \!=\(VectorBase, VectorBase\)

```csharp
public static bool operator !=(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`vec2` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \*\(VectorBase, double\)

```csharp
public static Vector operator *(VectorBase vec1, double dVal)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [Vector](VM.Managed.Vector.md)

### operator \*\(VectorBase, VectorBase\)

```csharp
public static Vector operator *(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`vec2` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [Vector](VM.Managed.Vector.md)

### operator \-\(VectorBase, VectorBase\)

```csharp
public static Vector operator -(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`vec2` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [Vector](VM.Managed.Vector.md)


