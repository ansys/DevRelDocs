# <a id="VM_Models_Post_ManagedMathLib_Math"></a> Class Math

Namespace: [VM.Models.Post.ManagedMathLib](VM.Models.Post.ManagedMathLib.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class Math
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Math](VM.Models.Post.ManagedMathLib.Math.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_ManagedMathLib_Math__ctor"></a> Math\(\)

```csharp
public Math()
```

## Methods

### <a id="VM_Models_Post_ManagedMathLib_Math_A_Ezxz_System_Double___System_Double___System_Boolean_"></a> A\_Ezxz\(double\[\], double\[\], bool\)

```csharp
public static void A_Ezxz(double[] a, double[] zxz, bool bDegree)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`zxz` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`bDegree` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ManagedMathLib_Math_A_Ezxz_System_Double___System_Int32_System_Double___System_Int32_System_Boolean_"></a> A\_Ezxz\(double\[\], int, double\[\], int, bool\)

```csharp
public static void A_Ezxz(double[] a, int offa, double[] zxz, int offzxz, bool bDegree)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offa` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`zxz` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offzxz` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`bDegree` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ManagedMathLib_Math_A_Ezyx_System_Double___System_Double___"></a> A\_Ezyx\(double\[\], double\[\]\)

```csharp
public static void A_Ezyx(double[] a, double[] zyx)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`zyx` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_A_Ezyx_System_Double___System_Int32_System_Double___System_Int32_"></a> A\_Ezyx\(double\[\], int, double\[\], int\)

```csharp
public static void A_Ezyx(double[] a, int offsetA, double[] zyx, int offsetZYX)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetA` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`zyx` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetZYX` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ManagedMathLib_Math_DF_DOUBLE_ZEOR_System_Double_"></a> DF\_DOUBLE\_ZEOR\(double\)

```csharp
public static bool DF_DOUBLE_ZEOR(double value)
```

#### Parameters

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ManagedMathLib_Math_DF_FLOAT_ZEOR_System_Single_"></a> DF\_FLOAT\_ZEOR\(float\)

```csharp
public static bool DF_FLOAT_ZEOR(float value)
```

#### Parameters

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ManagedMathLib_Math_Dgefa_System_Double___System_Int32_System_Int32_System_Int32___System_Int32__"></a> Dgefa\(double\[\], int, int, int\[\], out int\)

```csharp
public static void Dgefa(double[] a, int lda, int n, int[] ipvt, out int info)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`lda` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`n` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`ipvt` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`info` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ManagedMathLib_Math_Dgesl_System_Double___System_Int32_System_Int32_System_Int32___System_Double___System_Int32_"></a> Dgesl\(double\[\], int, int, int\[\], double\[\], int\)

```csharp
public static void Dgesl(double[] a, int lda, int n, int[] ipvt, double[] b, int job)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`lda` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`n` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`ipvt` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`job` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ManagedMathLib_Math_Exyz_A_System_Double___System_Double___"></a> Exyz\_A\(double\[\], double\[\]\)

```csharp
public static void Exyz_A(double[] xyz, double[] a)
```

#### Parameters

`xyz` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_Exyz_A_System_Double___System_Int32_System_Double___System_Int32_"></a> Exyz\_A\(double\[\], int, double\[\], int\)

```csharp
public static void Exyz_A(double[] xyz, int offsetXYZ, double[] a, int offsetA)
```

#### Parameters

`xyz` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetXYZ` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetA` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ManagedMathLib_Math_Ezxz_A_System_Double___System_Double___"></a> Ezxz\_A\(double\[\], double\[\]\)

```csharp
public static void Ezxz_A(double[] zxz, double[] a)
```

#### Parameters

`zxz` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_Ezyx_A_System_Double___System_Double___"></a> Ezyx\_A\(double\[\], double\[\]\)

```csharp
public static void Ezyx_A(double[] zyx, double[] a)
```

#### Parameters

`zyx` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_GMatGMat_System_Double___System_Double___System_Int32_System_Int32_System_Int32_System_Double___"></a> GMatGMat\(double\[\], double\[\], int, int, int, double\[\]\)

```csharp
public static void GMatGMat(double[] a, double[] b, int m, int n, int l, double[] c)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`m` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`n` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`l` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_GMatGVec_System_Double___System_Int32_System_Double___System_Int32_System_Int32_System_Int32_System_Double___System_Int32_"></a> GMatGVec\(double\[\], int, double\[\], int, int, int, double\[\], int\)

```csharp
public static void GMatGVec(double[] a, int offa, double[] b, int offb, int m, int n, double[] c, int offc)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offa` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offb` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`m` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`n` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offc` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ManagedMathLib_Math_GMatGVec_System_Double___System_Double___System_Int32_System_Int32_System_Double___"></a> GMatGVec\(double\[\], double\[\], int, int, double\[\]\)

```csharp
public static void GMatGVec(double[] a, double[] b, int m, int n, double[] c)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`m` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`n` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_GMatInv_System_Double___System_Int32_System_Double___System_Double___System_Int32___System_Double___"></a> GMatInv\(double\[\], int, double\[\], double\[\], int\[\], double\[\]\)

```csharp
public static void GMatInv(double[] a, int n, double[] sa, double[] x, int[] ipvt, double[] ina)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`n` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`sa` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`ipvt` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`ina` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_GMatTrGVec_System_Double___System_Double___System_Int32_System_Int32_System_Double___"></a> GMatTrGVec\(double\[\], double\[\], int, int, double\[\]\)

```csharp
public static void GMatTrGVec(double[] a, double[] b, int m, int n, double[] c)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`m` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`n` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_GetInverseMatrix4X4_System_Double___System_Double___"></a> GetInverseMatrix4X4\(double\[\], double\[\]\)

```csharp
public static bool GetInverseMatrix4X4(double[] @in, double[] @out)
```

#### Parameters

`in` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`out` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ManagedMathLib_Math_GetLength_System_Double___"></a> GetLength\(double\[\]\)

```csharp
public static double GetLength(double[] a)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_ManagedMathLib_Math_GetLength_System_Double___System_Int32_"></a> GetLength\(double\[\], int\)

```csharp
public static double GetLength(double[] a, int offseta)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offseta` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_ManagedMathLib_Math_GetNormalized_System_Double___System_Double___"></a> GetNormalized\(double\[\], double\[\]\)

```csharp
public static void GetNormalized(double[] a, double[] @out)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`out` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_MatInv3_System_Double___System_Double___"></a> MatInv3\(double\[\], double\[\]\)

```csharp
public static void MatInv3(double[] a, double[] b)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_MatMat_System_Double___System_Double___System_Double___"></a> MatMat\(double\[\], double\[\], double\[\]\)

```csharp
public static void MatMat(double[] a, double[] b, double[] c)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_MatMat_VM_TMatrix_VM_TMatrix_System_Double___"></a> MatMat\(TMatrix, TMatrix, double\[\]\)

```csharp
public static void MatMat(TMatrix a, TMatrix b, double[] c)
```

#### Parameters

`a` TMatrix

`b` TMatrix

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_MatMat_VM_OMatrix_System_Double___System_Double___"></a> MatMat\(OMatrix, double\[\], double\[\]\)

```csharp
public static void MatMat(OMatrix a, double[] b, double[] c)
```

#### Parameters

`a` OMatrix

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_MatMat_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_"></a> MatMat\(double\[\], int, double\[\], int, double\[\], int\)

```csharp
public static void MatMat(double[] a, int offa, double[] b, int offb, double[] c, int offc)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offa` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offb` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offc` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ManagedMathLib_Math_MatMat_System_Single___System_Single___System_Single___"></a> MatMat\(float\[\], float\[\], float\[\]\)

```csharp
public static void MatMat(float[] a, float[] b, float[] c)
```

#### Parameters

`a` [float](https://learn.microsoft.com/dotnet/api/system.single)\[\]

`b` [float](https://learn.microsoft.com/dotnet/api/system.single)\[\]

`c` [float](https://learn.microsoft.com/dotnet/api/system.single)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_MatMatTr_System_Double___System_Double___System_Double___"></a> MatMatTr\(double\[\], double\[\], double\[\]\)

```csharp
public static void MatMatTr(double[] a, double[] b, double[] c)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_MatMatTr_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_"></a> MatMatTr\(double\[\], int, double\[\], int, double\[\], int\)

```csharp
public static void MatMatTr(double[] a, int offa, double[] b, int offb, double[] c, int offc)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offa` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offb` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offc` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ManagedMathLib_Math_MatTrMat_System_Double___System_Double___System_Double___"></a> MatTrMat\(double\[\], double\[\], double\[\]\)

```csharp
public static void MatTrMat(double[] a, double[] b, double[] c)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_MatTrMat_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_"></a> MatTrMat\(double\[\], int, double\[\], int, double\[\], int\)

```csharp
public static void MatTrMat(double[] a, int offa, double[] b, int offb, double[] c, int offc)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offa` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offb` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offc` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ManagedMathLib_Math_MatTrMatTr_System_Double___System_Double___System_Double___"></a> MatTrMatTr\(double\[\], double\[\], double\[\]\)

```csharp
public static void MatTrMatTr(double[] a, double[] b, double[] c)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_MatTrVec_System_Double___System_Double___System_Double___"></a> MatTrVec\(double\[\], double\[\], double\[\]\)

```csharp
public static void MatTrVec(double[] a, double[] b, double[] c)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_MatTrVec_VM_OMatrix_System_Double___System_Double___System_Int32_"></a> MatTrVec\(OMatrix, double\[\], double\[\], int\)

```csharp
public static void MatTrVec(OMatrix a, double[] b, double[] c, int offc)
```

#### Parameters

`a` OMatrix

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offc` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ManagedMathLib_Math_MatTrVec_VM_OMatrix_VM_Vector_System_Double___"></a> MatTrVec\(OMatrix, Vector, double\[\]\)

```csharp
public static void MatTrVec(OMatrix a, Vector b, double[] c)
```

#### Parameters

`a` OMatrix

`b` Vector

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_MatTrVec_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_"></a> MatTrVec\(double\[\], int, double\[\], int, double\[\], int\)

```csharp
public static void MatTrVec(double[] a, int offa, double[] b, int offb, double[] c, int offc)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offa` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offb` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offc` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ManagedMathLib_Math_MatTrVecTl_System_Double___System_Double___System_Double___"></a> MatTrVecTl\(double\[\], double\[\], double\[\]\)

```csharp
public static void MatTrVecTl(double[] a, double[] b, double[] c)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_MatVec_System_Double___System_Double___System_Double___"></a> MatVec\(double\[\], double\[\], double\[\]\)

```csharp
public static void MatVec(double[] a, double[] b, double[] c)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_MatVec_System_Double___VM_TMatrix_System_Double___"></a> MatVec\(double\[\], TMatrix, double\[\]\)

```csharp
public static void MatVec(double[] a, TMatrix b, double[] c)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` TMatrix

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_MatVec_VM_OMatrix_VM_Vector_System_Double___"></a> MatVec\(OMatrix, Vector, double\[\]\)

```csharp
public static void MatVec(OMatrix a, Vector b, double[] c)
```

#### Parameters

`a` OMatrix

`b` Vector

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_MatVec_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_"></a> MatVec\(double\[\], int, double\[\], int, double\[\], int\)

```csharp
public static void MatVec(double[] a, int offa, double[] b, int offb, double[] c, int offc)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offa` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offb` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offc` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ManagedMathLib_Math_MatVecTl_VM_TMatrix_VM_TMatrix_System_Double___System_Int32_"></a> MatVecTl\(TMatrix, TMatrix, double\[\], int\)

```csharp
public static void MatVecTl(TMatrix a, TMatrix b, double[] c, int offc)
```

#### Parameters

`a` TMatrix

`b` TMatrix

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offc` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ManagedMathLib_Math_MatVecTl_VM_TMatrix_System_Double___System_Int32_System_Double___System_Int32_"></a> MatVecTl\(TMatrix, double\[\], int, double\[\], int\)

```csharp
public static void MatVecTl(TMatrix a, double[] b, int offb, double[] c, int offc)
```

#### Parameters

`a` TMatrix

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offb` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offc` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ManagedMathLib_Math_MatVecTl_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_"></a> MatVecTl\(double\[\], int, double\[\], int, double\[\], int\)

```csharp
public static void MatVecTl(double[] a, int offa, double[] b, int offb, double[] c, int offc)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offa` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offb` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offc` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ManagedMathLib_Math_MatVecTl_System_Double___System_Double___System_Double___"></a> MatVecTl\(double\[\], double\[\], double\[\]\)

```csharp
public static void MatVecTl(double[] a, double[] b, double[] c)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_VecTlVec_System_Double___System_Double___System_Double___"></a> VecTlVec\(double\[\], double\[\], double\[\]\)

```csharp
public static void VecTlVec(double[] a, double[] b, double[] c)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ManagedMathLib_Math_VecTlVec_System_Double___System_Int32_VM_Vector_System_Double___System_Int32_"></a> VecTlVec\(double\[\], int, Vector, double\[\], int\)

```csharp
public static void VecTlVec(double[] a, int offa, Vector b, double[] c, int offc)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offa` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`b` Vector

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offc` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ManagedMathLib_Math_VecTlVec_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_"></a> VecTlVec\(double\[\], int, double\[\], int, double\[\], int\)

```csharp
public static void VecTlVec(double[] a, int offa, double[] b, int offb, double[] c, int offc)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offa` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offb` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offc` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ManagedMathLib_Math_VecTrVec_System_Double___System_Int32_System_Double___System_Int32_System_Double__"></a> VecTrVec\(double\[\], int, double\[\], int, ref double\)

```csharp
public static void VecTrVec(double[] a, int offa, double[] b, int offb, ref double c)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offa` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offb` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_ManagedMathLib_Math_VecTrVec_System_Double___System_Double___System_Double__"></a> VecTrVec\(double\[\], double\[\], ref double\)

```csharp
public static void VecTrVec(double[] a, double[] b, ref double c)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`c` [double](https://learn.microsoft.com/dotnet/api/system.double)

