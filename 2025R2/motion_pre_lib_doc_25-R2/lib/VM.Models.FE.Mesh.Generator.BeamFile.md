# <a id="VM_Models_FE_Mesh_Generator_BeamFile"></a> Class BeamFile

Namespace: [VM.Models.FE.Mesh.Generator](VM.Models.FE.Mesh.Generator.md)  
Assembly: VM.Models.FE.Mesh.Generator.dll  

```csharp
public sealed class BeamFile
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BeamFile](VM.Models.FE.Mesh.Generator.BeamFile.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_FE_Mesh_Generator_BeamFile__ctor_System_Double_System_Int32_System_Int32_VM_Vector_VM_Vector_VM_Vector_"></a> BeamFile\(double, int, int, Vector, Vector, Vector\)

```csharp
public BeamFile(double radius, int numberOfCircularNodes, int numberOfBeamNodes, Vector startPoint, Vector endPoint, Vector yDirection)
```

#### Parameters

`radius` [double](https://learn.microsoft.com/dotnet/api/system.double)

`numberOfCircularNodes` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`numberOfBeamNodes` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`startPoint` Vector

`endPoint` Vector

`yDirection` Vector

### <a id="VM_Models_FE_Mesh_Generator_BeamFile__ctor_VM_Models_FE_Mesh_Generator_BeamFileParams_"></a> BeamFile\(BeamFileParams\)

```csharp
public BeamFile(BeamFileParams param)
```

#### Parameters

`param` [BeamFileParams](VM.Models.FE.Mesh.Generator.BeamFileParams.md)

## Properties

### <a id="VM_Models_FE_Mesh_Generator_BeamFile_BeamMaterialDampingRatio"></a> BeamMaterialDampingRatio

```csharp
public double BeamMaterialDampingRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Mesh_Generator_BeamFile_BeamMaterialDensity"></a> BeamMaterialDensity

```csharp
public double BeamMaterialDensity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Mesh_Generator_BeamFile_BeamMaterialPoissonsRatio"></a> BeamMaterialPoissonsRatio

```csharp
public double BeamMaterialPoissonsRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Mesh_Generator_BeamFile_BeamMaterialShearModulus"></a> BeamMaterialShearModulus

```csharp
public double BeamMaterialShearModulus { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Mesh_Generator_BeamFile_BeamMaterialYoungsModulus"></a> BeamMaterialYoungsModulus

```csharp
public double BeamMaterialYoungsModulus { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Mesh_Generator_BeamFile_BufferCount"></a> BufferCount

```csharp
public int BufferCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Mesh_Generator_BeamFile_GenerateInnerRBE"></a> GenerateInnerRBE

```csharp
public bool GenerateInnerRBE { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_FE_Mesh_Generator_BeamFile_InnerRBEs"></a> InnerRBEs

```csharp
public IEnumerable<RBE2> InnerRBEs { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<RBE2\>

### <a id="VM_Models_FE_Mesh_Generator_BeamFile_NumberOfBeamNodes"></a> NumberOfBeamNodes

```csharp
public int NumberOfBeamNodes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Mesh_Generator_BeamFile_NumberOfCircularNodes"></a> NumberOfCircularNodes

```csharp
public int NumberOfCircularNodes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Mesh_Generator_BeamFile_Radius"></a> Radius

```csharp
public double Radius { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Mesh_Generator_BeamFile_WriteMessage"></a> WriteMessage

```csharp
public Action<string> WriteMessage { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_FE_Mesh_Generator_BeamFile_YDirection"></a> YDirection

```csharp
public Vector YDirection { get; }
```

#### Property Value

 Vector

## Methods

### <a id="VM_Models_FE_Mesh_Generator_BeamFile_Generate_System_String_"></a> Generate\(string\)

```csharp
public void Generate(string bdfFilePath)
```

#### Parameters

`bdfFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

