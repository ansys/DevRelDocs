# Class VectorBase
<a id="VM_Managed_VectorBase"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the vector base.

```csharp
public abstract class VectorBase
```

#### Inheritance

object ← 
[VectorBase](VM.Managed.VectorBase.md)

#### Derived

[Vector](VM.Managed.Vector.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_VectorBase__ctor"></a> VectorBase\(\)

```csharp
protected VectorBase()
```

## Properties

### <a id="VM_Managed_VectorBase_Magnitude"></a> Magnitude

Gets the magnitude of vector(UInt32).

```csharp
public abstract double Magnitude { get; }
```

#### Property Value

 double

### <a id="VM_Managed_VectorBase_X"></a> X

Gets or sets the X of vector.

```csharp
public abstract double X { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_VectorBase_Y"></a> Y

Gets or sets the Y of vector.

```csharp
public abstract double Y { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_VectorBase_Z"></a> Z

Gets or sets the Z of vector.

```csharp
public abstract double Z { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_VectorBase_Item_System_UInt32_"></a> this\[uint\]

```csharp
public abstract double this[uint n] { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_VectorBase_Item_VM_Coordinate_"></a> this\[Coordinate\]

```csharp
public abstract double this[Coordinate n] { get; set; }
```

#### Property Value

 double

## Methods

### <a id="VM_Managed_VectorBase_Clone"></a> Clone\(\)

clone.

```csharp
public abstract object Clone()
```

#### Returns

 object

The clone.

### <a id="VM_Managed_VectorBase_CrossProduct_VM_Managed_VectorBase_"></a> CrossProduct\(VectorBase\)

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

### <a id="VM_Managed_VectorBase_DotProduct_VM_Managed_VectorBase_"></a> DotProduct\(VectorBase\)

Dot product.

```csharp
public abstract double DotProduct(VectorBase vec)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

The vec.

#### Returns

 double

Result of product

### <a id="VM_Managed_VectorBase_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` object

#### Returns

 bool

### <a id="VM_Managed_VectorBase_GetArray"></a> GetArray\(\)

Gets the array.

```csharp
public abstract double[] GetArray()
```

#### Returns

 double\[\]

The array.

### <a id="VM_Managed_VectorBase_GetDistance_VM_Managed_VectorBase_"></a> GetDistance\(VectorBase\)

Gets the distance.

```csharp
public abstract double GetDistance(VectorBase vec)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

The vec.

#### Returns

 double

The distance

### <a id="VM_Managed_VectorBase_GetObjectData_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> GetObjectData\(SerializationInfo, StreamingContext\)

Customize the GetObjectData function.

```csharp
public virtual void GetObjectData(SerializationInfo A_0, StreamingContext A_1)
```

#### Parameters

`A_0` SerializationInfo

`A_1` StreamingContext

### <a id="VM_Managed_VectorBase_GetOrthoVector_VM_Managed_VectorBase_"></a> GetOrthoVector\(VectorBase\)

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

### <a id="VM_Managed_VectorBase_GetOrthoVector"></a> GetOrthoVector\(\)

Gets the ortho vector.

```csharp
public abstract Vector GetOrthoVector()
```

#### Returns

 [Vector](VM.Managed.Vector.md)

The ortho vector.

### <a id="VM_Managed_VectorBase_MakeUnitVector"></a> MakeUnitVector\(\)

Mate unit vector.

```csharp
public abstract void MakeUnitVector()
```

### <a id="VM_Managed_VectorBase_Set_System_Double_System_Double_System_Double_"></a> Set\(double, double, double\)

Sets the value of vector.

```csharp
public abstract void Set(double dX, double dY, double dZ)
```

#### Parameters

`dX` double

The X.

`dY` double

The Y.

`dZ` double

The Z.

### <a id="VM_Managed_VectorBase_Set_System_Double___"></a> Set\(double\[\]\)

Sets the value of vector.

```csharp
public abstract void Set(double[] arr)
```

#### Parameters

`arr` double\[\]

The arr.

### <a id="VM_Managed_VectorBase_Set_VM_Managed_VectorBase_"></a> Set\(VectorBase\)

Sets the value of vector.

```csharp
public abstract void Set(VectorBase vec)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

The vec.

### <a id="VM_Managed_VectorBase_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 string

### <a id="VM_Managed_VectorBase_op_AdditionAssignment_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> op\_AdditionAssignment\(VectorBase, VectorBase\)

```csharp
public static VectorBase op_AdditionAssignment(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`vec2` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_VectorBase_op_DivisionAssignment_VM_Managed_VectorBase_System_Double_"></a> op\_DivisionAssignment\(VectorBase, double\)

```csharp
public static VectorBase op_DivisionAssignment(VectorBase vec1, double dVal)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`dVal` double

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_VectorBase_op_MultiplicationAssignment_VM_Managed_VectorBase_System_Double_"></a> op\_MultiplicationAssignment\(VectorBase, double\)

```csharp
public static VectorBase op_MultiplicationAssignment(VectorBase vec1, double dVal)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`dVal` double

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_VectorBase_op_MultiplicationAssignment_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> op\_MultiplicationAssignment\(VectorBase, VectorBase\)

```csharp
public static VectorBase op_MultiplicationAssignment(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`vec2` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_VectorBase_op_SubtractionAssignment_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> op\_SubtractionAssignment\(VectorBase, VectorBase\)

```csharp
public static VectorBase op_SubtractionAssignment(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`vec2` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

## Operators

### <a id="VM_Managed_VectorBase_op_Addition_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> operator \+\(VectorBase, VectorBase\)

```csharp
public static Vector operator +(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`vec2` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [Vector](VM.Managed.Vector.md)

### <a id="VM_Managed_VectorBase_op_Division_VM_Managed_VectorBase_System_Double_"></a> operator /\(VectorBase, double\)

```csharp
public static Vector operator /(VectorBase vec1, double dVal)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`dVal` double

#### Returns

 [Vector](VM.Managed.Vector.md)

### <a id="VM_Managed_VectorBase_op_Equality_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> operator ==\(VectorBase, VectorBase\)

```csharp
public static bool operator ==(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`vec2` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 bool

### <a id="VM_Managed_VectorBase_op_Implicit_VM_Vector__VM_Managed_VectorBase"></a> implicit operator VectorBase\(Vector\)

```csharp
public static implicit operator VectorBase(Vector vec)
```

#### Parameters

`vec` Vector

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_VectorBase_op_Implicit_VM_Managed_VectorBase__VM_Vector"></a> implicit operator Vector\(VectorBase\)

```csharp
public static implicit operator Vector(VectorBase vec)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 Vector

### <a id="VM_Managed_VectorBase_op_Inequality_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> operator \!=\(VectorBase, VectorBase\)

```csharp
public static bool operator !=(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`vec2` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 bool

### <a id="VM_Managed_VectorBase_op_Multiply_VM_Managed_VectorBase_System_Double_"></a> operator \*\(VectorBase, double\)

```csharp
public static Vector operator *(VectorBase vec1, double dVal)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`dVal` double

#### Returns

 [Vector](VM.Managed.Vector.md)

### <a id="VM_Managed_VectorBase_op_Multiply_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> operator \*\(VectorBase, VectorBase\)

```csharp
public static Vector operator *(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`vec2` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [Vector](VM.Managed.Vector.md)

### <a id="VM_Managed_VectorBase_op_Subtraction_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> operator \-\(VectorBase, VectorBase\)

```csharp
public static Vector operator -(VectorBase vec1, VectorBase vec2)
```

#### Parameters

`vec1` [VectorBase](VM.Managed.VectorBase.md)

`vec2` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [Vector](VM.Managed.Vector.md)

