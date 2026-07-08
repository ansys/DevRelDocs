#  Struct Vector

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public struct Vector
```

## Constructors

### <a id="VM_Vector__ctor_VM_Vector_"></a> Vector\(Vector\)

Initializes a new instance of the <xref href="VM.Vector" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Vector(Vector vec)
```

#### Parameters

`vec` [Vector](VM.Vector.md)

The Vector instance to copy.

### <a id="VM_Vector__ctor_System_Double_System_Double_System_Double_"></a> Vector\(double, double, double\)

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

### <a id="VM_Vector__ctor_System_Double___"></a> Vector\(double\[\]\)

Initializes a new instance of the <xref href="VM.Vector" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Vector(double[] arVec)
```

#### Parameters

`arVec` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The arVec.

### <a id="VM_Vector__ctor_System_Double___System_Int32_"></a> Vector\(double\[\], int\)

Initializes a new instance of the <xref href="VM.Vector" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Vector(double[] arVec, int nStartIndex)
```

#### Parameters

`arVec` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array that have values of vector.

`nStartIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The start index of array.

### <a id="VM_Vector__ctor_System_String_"></a> Vector\(string\)

```csharp
public Vector(string vector)
```

#### Parameters

`vector` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Vector_Magnitude"></a> Magnitude

Gets the magnitude of vector.

```csharp
public double Magnitude { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The get magnitude operation failed .

### <a id="VM_Vector_X"></a> X

Gets or sets the X of vector.

```csharp
public double X { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Vector_Y"></a> Y

Gets or sets the Y of vector.

```csharp
public double Y { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Vector_Z"></a> Z

Gets or sets the Z of vector.

```csharp
public double Z { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Vector_Item_System_Int32_"></a> this\[int\]

Gets or sets the element of vector.

```csharp
public double this[int nIndex] { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Vector_Item_VM_Coordinate_"></a> this\[Coordinate\]

Gets or sets the element of vector.

```csharp
public double this[Coordinate enCoord] { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Vector_CopyToArray_VM_Vector___System_Double___"></a> CopyToArray\(Vector\[\], double\[\]\)

Copy all values in the array of vector to the array of double.

```csharp
public static void CopyToArray(Vector[] arVec, double[] arTarget)
```

#### Parameters

`arVec` [Vector](VM.Vector.md)\[\]

The array of vector

`arTarget` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array to store values of the array of vector.

### <a id="VM_Vector_CopyToArray_VM_Vector___System_Double___System_Int32_"></a> CopyToArray\(Vector\[\], double\[\], int\)

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

### <a id="VM_Vector_CrossProduct_VM_Vector_"></a> CrossProduct\(Vector\)

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

### <a id="VM_Vector_DotProduct_VM_Vector_"></a> DotProduct\(Vector\)

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

### <a id="VM_Vector_Equals_System_Object_"></a> Equals\(object\)

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

### <a id="VM_Vector_GetArray"></a> GetArray\(\)

Gets the array.

```csharp
public double[] GetArray()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array.

### <a id="VM_Vector_GetDistance_VM_Vector_"></a> GetDistance\(Vector\)

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

### <a id="VM_Vector_GetHashCode"></a> GetHashCode\(\)

Returns the hash code for this vector

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A 32-bit signed integer hash code.

### <a id="VM_Vector_GetOrthoVector"></a> GetOrthoVector\(\)

Gets the ortho vector.

```csharp
public Vector GetOrthoVector()
```

#### Returns

 [Vector](VM.Vector.md)

The ortho vector.

### <a id="VM_Vector_GetOrthoVector_VM_Vector_"></a> GetOrthoVector\(Vector\)

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

### <a id="VM_Vector_Initialize"></a> Initialize\(\)

Initialize the Vector

```csharp
public void Initialize()
```

### <a id="VM_Vector_IsValidFormat_System_String_"></a> IsValidFormat\(string\)

```csharp
public static bool IsValidFormat(string vector)
```

#### Parameters

`vector` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Vector_MakeUnitVector"></a> MakeUnitVector\(\)

Mate unit vector.

```csharp
public void MakeUnitVector()
```

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The make unit vector operation failed .

### <a id="VM_Vector_Set_VM_Vector_"></a> Set\(Vector\)

Sets the value of vector.

```csharp
public void Set(Vector vec)
```

#### Parameters

`vec` [Vector](VM.Vector.md)

The Vector instance to copy.

### <a id="VM_Vector_Set_System_Double___"></a> Set\(double\[\]\)

Sets the value of vector.

```csharp
public void Set(double[] arVec)
```

#### Parameters

`arVec` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array of X, Y, Z Components.

### <a id="VM_Vector_Set_System_Double___System_Int32_"></a> Set\(double\[\], int\)

Sets the value of vector.

```csharp
public void Set(double[] arVec, int nStartIndex)
```

#### Parameters

`arVec` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array of X, Y, Z Components.

`nStartIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The start index of array.

### <a id="VM_Vector_Set_System_Double_System_Double_System_Double_"></a> Set\(double, double, double\)

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

### <a id="VM_Vector_ToString"></a> ToString\(\)

Returns a string that represents the current type.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### <a id="VM_Vector_op_Addition_VM_Vector_VM_Vector_"></a> operator \+\(Vector, Vector\)

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

### <a id="VM_Vector_op_Division_VM_Vector_System_Double_"></a> operator /\(Vector, double\)

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

### <a id="VM_Vector_op_Equality_VM_Vector_VM_Vector_"></a> operator ==\(Vector, Vector\)

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

### <a id="VM_Vector_op_Inequality_VM_Vector_VM_Vector_"></a> operator \!=\(Vector, Vector\)

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

### <a id="VM_Vector_op_Multiply_VM_Vector_VM_Vector_"></a> operator \*\(Vector, Vector\)

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

### <a id="VM_Vector_op_Multiply_VM_Vector_System_Double_"></a> operator \*\(Vector, double\)

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

### <a id="VM_Vector_op_Subtraction_VM_Vector_VM_Vector_"></a> operator \-\(Vector, Vector\)

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

