# Struct Vector

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public struct Vector
```

## Constructors

### Vector\(Vector\)

Initializes a new instance of the <xref href="VM.Vector" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Vector(Vector vec)
```

#### Parameters

`vec` [Vector](VM.Vector.md)

The Vector instance to copy.

### Vector\(double, double, double\)

Initializes a new instance of the <xref href="VM.Vector" data-throw-if-not-resolved="false"></xref> class.

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

### Vector\(double\[\]\)

Initializes a new instance of the <xref href="VM.Vector" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Vector(double[] arVec)
```

#### Parameters

`arVec` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The arVec.

### Vector\(double\[\], int\)

Initializes a new instance of the <xref href="VM.Vector" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Vector(double[] arVec, int nStartIndex)
```

#### Parameters

`arVec` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array that have values of vector.

`nStartIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The start index of array.

### Vector\(string\)

```csharp
public Vector(string vector)
```

#### Parameters

`vector` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### Magnitude

Gets the magnitude of vector.

```csharp
public double Magnitude { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The get magnitude operation failed .

### X

Gets or sets the X of vector.

```csharp
public double X { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Y

Gets or sets the Y of vector.

```csharp
public double Y { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Z

Gets or sets the Z of vector.

```csharp
public double Z { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### this\[int\]

Gets or sets the element of vector.

```csharp
public double this[int nIndex] { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### this\[Coordinate\]

Gets or sets the element of vector.

```csharp
public double this[Coordinate enCoord] { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### CopyToArray\(Vector\[\], double\[\]\)

Copy all values in the array of vector to the array of double.

```csharp
public static void CopyToArray(Vector[] arVec, double[] arTarget)
```

#### Parameters

`arVec` [Vector](VM.Vector.md)\[\]

The array of vector

`arTarget` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array to store values of the array of vector.

### CopyToArray\(Vector\[\], double\[\], int\)

Copy all values in the array of vector to the array of double.

```csharp
public static void CopyToArray(Vector[] arVec, double[] arTarget, int nIndex)
```

#### Parameters

`arVec` [Vector](VM.Vector.md)\[\]

The array of vector

`arTarget` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array to store values of the array of vector.

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The start index of array

### CrossProduct\(Vector\)

Cross product.

```csharp
public Vector CrossProduct(Vector vec)
```

#### Parameters

`vec` [Vector](VM.Vector.md)

The vec.

#### Returns

 [Vector](VM.Vector.md)

Result of product

### DotProduct\(Vector\)

Dot product.

```csharp
public double DotProduct(Vector vec)
```

#### Parameters

`vec` [Vector](VM.Vector.md)

The vec.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

Result of product

### Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object to compare.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if the objects are equal, otherwise false.

### GetArray\(\)

Gets the array.

```csharp
public double[] GetArray()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array.

### GetDistance\(Vector\)

Gets the distance.

```csharp
public double GetDistance(Vector vec)
```

#### Parameters

`vec` [Vector](VM.Vector.md)

The vec.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The distance

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The get distance operation failed .

### GetHashCode\(\)

Returns the hash code for this vector

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A 32-bit signed integer hash code.

### GetOrthoVector\(\)

Gets the ortho vector.

```csharp
public Vector GetOrthoVector()
```

#### Returns

 [Vector](VM.Vector.md)

The ortho vector.

### GetOrthoVector\(Vector\)

Gets the ortho vector.

```csharp
public Vector GetOrthoVector(Vector vecCandidate)
```

#### Parameters

`vecCandidate` [Vector](VM.Vector.md)

The candidate.

#### Returns

 [Vector](VM.Vector.md)

The ortho vector.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The get ortho vector operation failed .

### Initialize\(\)

Initialize the Vector

```csharp
public void Initialize()
```

### IsValidFormat\(string\)

```csharp
public static bool IsValidFormat(string vector)
```

#### Parameters

`vector` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MakeUnitVector\(\)

Mate unit vector.

```csharp
public void MakeUnitVector()
```

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The make unit vector operation failed .

### Set\(Vector\)

Sets the value of vector.

```csharp
public void Set(Vector vec)
```

#### Parameters

`vec` [Vector](VM.Vector.md)

The Vector instance to copy.

### Set\(double\[\]\)

Sets the value of vector.

```csharp
public void Set(double[] arVec)
```

#### Parameters

`arVec` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array of X, Y, Z Components.

### Set\(double\[\], int\)

Sets the value of vector.

```csharp
public void Set(double[] arVec, int nStartIndex)
```

#### Parameters

`arVec` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array of X, Y, Z Components.

`nStartIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The start index of array.

### Set\(double, double, double\)

Sets the value of vector.

```csharp
public void Set(double dX, double dY, double dZ)
```

#### Parameters

`dX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The X.

`dY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The Y.

`dZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

The Z.

### ToString\(\)

Returns a string that represents the current type.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### operator \+\(Vector, Vector\)

Add two vectors.

```csharp
public static Vector operator +(Vector vecLeft, Vector vecRight)
```

#### Parameters

`vecLeft` [Vector](VM.Vector.md)

The left vector to add

`vecRight` [Vector](VM.Vector.md)

The right vector to add

#### Returns

 [Vector](VM.Vector.md)

The added vector.

### operator /\(Vector, double\)

Divide value to the vector.

```csharp
public static Vector operator /(Vector vec, double dValue)
```

#### Parameters

`vec` [Vector](VM.Vector.md)

The vector to divide value

`dValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to divide

#### Returns

 [Vector](VM.Vector.md)

The divided vector.

### operator ==\(Vector, Vector\)

Compare two vectors are same or not

```csharp
public static bool operator ==(Vector vecLeft, Vector vecRight)
```

#### Parameters

`vecLeft` [Vector](VM.Vector.md)

The left vector to compare

`vecRight` [Vector](VM.Vector.md)

The right vector to compare

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if two vectors are same, otherwise false.

### operator \!=\(Vector, Vector\)

Compare two vectors are same or not

```csharp
public static bool operator !=(Vector vecLeft, Vector vecRight)
```

#### Parameters

`vecLeft` [Vector](VM.Vector.md)

The left vector to compare

`vecRight` [Vector](VM.Vector.md)

The right vector to compare

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if two vectors are not same, otherwise false.

### operator \*\(Vector, Vector\)

Cross product two vectors.

```csharp
public static Vector operator *(Vector vecLeft, Vector vecRight)
```

#### Parameters

`vecLeft` [Vector](VM.Vector.md)

The left vector to cross product

`vecRight` [Vector](VM.Vector.md)

The right vector to cross product

#### Returns

 [Vector](VM.Vector.md)

The cross product vector.

### operator \*\(Vector, double\)

Multiply value to the vector.

```csharp
public static Vector operator *(Vector vec, double dValue)
```

#### Parameters

`vec` [Vector](VM.Vector.md)

The vector to multiply value

`dValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value to multiply

#### Returns

 [Vector](VM.Vector.md)

The Multiplied vector.

### operator \-\(Vector, Vector\)

Subtract two vectors.

```csharp
public static Vector operator -(Vector vecLeft, Vector vecRight)
```

#### Parameters

`vecLeft` [Vector](VM.Vector.md)

The left vector to subtract

`vecRight` [Vector](VM.Vector.md)

The right vector to subtract

#### Returns

 [Vector](VM.Vector.md)

The subtracted vector.


