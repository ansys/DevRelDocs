# <a id="VM_Models_Post_ManagedMathLib_Eigensolver"></a> Class Eigensolver

Namespace: [VM.Models.Post.ManagedMathLib](VM.Models.Post.ManagedMathLib.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class Eigensolver
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Eigensolver](VM.Models.Post.ManagedMathLib.Eigensolver.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_ManagedMathLib_Eigensolver__ctor"></a> Eigensolver\(\)

```csharp
public Eigensolver()
```

## Methods

### <a id="VM_Models_Post_ManagedMathLib_Eigensolver_Eigen_jacobi_System_Int32_System_Double___System_Double___System_Double___System_Int32_System_Double___System_Double___"></a> Eigen\_jacobi\(int, double\[\], double\[\], double\[\], int, double\[\], double\[\]\)

```csharp
public static int Eigen_jacobi(int n, double[] a, double[] d, double[] v, int iter, double[] b, double[] z)
```

#### Parameters

`n` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`d` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`v` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`iter` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`z` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

