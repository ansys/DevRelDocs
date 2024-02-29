# <a id="VM_Models_Post_ManagedMathLib_Stress"></a> Class Stress

Namespace: [VM.Models.Post.ManagedMathLib](VM.Models.Post.ManagedMathLib.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class Stress
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Stress](VM.Models.Post.ManagedMathLib.Stress.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_ManagedMathLib_Stress__ctor"></a> Stress\(\)

```csharp
public Stress()
```

## Methods

### <a id="VM_Models_Post_ManagedMathLib_Stress_GetAveragePrincipal_System_Double___"></a> GetAveragePrincipal\(double\[\]\)

```csharp
public static double GetAveragePrincipal(double[] principal_stress)
```

#### Parameters

`principal_stress` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_ManagedMathLib_Stress_GetMaximumABSPrincipalStress_System_Double___"></a> GetMaximumABSPrincipalStress\(double\[\]\)

```csharp
public static double GetMaximumABSPrincipalStress(double[] principal_stress)
```

#### Parameters

`principal_stress` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_ManagedMathLib_Stress_GetMaximumShearStress_System_Double___"></a> GetMaximumShearStress\(double\[\]\)

```csharp
public static double GetMaximumShearStress(double[] principal_stress)
```

#### Parameters

`principal_stress` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_ManagedMathLib_Stress_GetSignedMaximumShearStress_System_Double___"></a> GetSignedMaximumShearStress\(double\[\]\)

```csharp
public static double GetSignedMaximumShearStress(double[] principal_stress)
```

#### Parameters

`principal_stress` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_ManagedMathLib_Stress_GetSignedVonMisesStress_System_Double___System_Double_"></a> GetSignedVonMisesStress\(double\[\], double\)

```csharp
public static double GetSignedVonMisesStress(double[] principal, double vonMisesStress)
```

#### Parameters

`principal` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`vonMisesStress` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_ManagedMathLib_Stress_Transformation_System_Double___System_Double____System_Double__System_Double__"></a> Transformation\(double\[\], ref double\[\], ref double, ref double\)

```csharp
public static void Transformation(double[] stress, ref double[] principal_stress, ref double stress_intensity, ref double effective_stress)
```

#### Parameters

`stress` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`principal_stress` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`stress_intensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`effective_stress` [double](https://learn.microsoft.com/dotnet/api/system.double)

