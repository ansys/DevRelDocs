# Class BeamL
<a id="VM_Models_FE_Mesh_Properties_BeamL"></a>

Namespace: [VM.Models.FE.Mesh.Properties](VM.Models.FE.Mesh.Properties.md)  
Assembly: VM.Models.FE.Mesh.dll  

```csharp
[Table]
public class BeamL : Solid, IPropertyBeam, IEntity
```

#### Inheritance

object ← 
[Entity](VM.Models.FE.Mesh.Entity.md) ← 
[Solid](VM.Models.FE.Mesh.Properties.Solid.md) ← 
[BeamL](VM.Models.FE.Mesh.Properties.BeamL.md)

#### Implements

[IPropertyBeam](VM.Models.FE.Mesh.IPropertyBeam.md), 
[IEntity](VM.Models.FE.Mesh.IEntity.md)

#### Inherited Members

[Solid.Equals\(object\)](VM.Models.FE.Mesh.Properties.Solid.md\#VM\_Models\_FE\_Mesh\_Properties\_Solid\_Equals\_System\_Object\_), 
[Solid.MarkerId](VM.Models.FE.Mesh.Properties.Solid.md\#VM\_Models\_FE\_Mesh\_Properties\_Solid\_MarkerId), 
[Solid.MaterialId](VM.Models.FE.Mesh.Properties.Solid.md\#VM\_Models\_FE\_Mesh\_Properties\_Solid\_MaterialId), 
[Entity.Equals\(object\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_Equals\_System\_Object\_), 
[Entity.GetHashCode\(\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_GetHashCode), 
[Entity.FromByteArray<T\>\(byte\[\]\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_FromByteArray\_\_1\_System\_Byte\_\_\_), 
[Entity.ToByteArray<T\>\(T\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_ToByteArray\_\_1\_\_\_0\_), 
[Entity.Id](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_Id)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[BDFWriter.WriteToBDF\(BeamL, TextWriter\)](VM.Models.FE.Mesh.Writer.BDFWriter.md\#VM\_Models\_FE\_Mesh\_Writer\_BDFWriter\_WriteToBDF\_VM\_Models\_FE\_Mesh\_Properties\_BeamL\_System\_IO\_TextWriter\_), 
[BDFWriter.WriteToBDF\(Solid, TextWriter\)](VM.Models.FE.Mesh.Writer.BDFWriter.md\#VM\_Models\_FE\_Mesh\_Writer\_BDFWriter\_WriteToBDF\_VM\_Models\_FE\_Mesh\_Properties\_Solid\_System\_IO\_TextWriter\_)

## Constructors

### <a id="VM_Models_FE_Mesh_Properties_BeamL__ctor"></a> BeamL\(\)

```csharp
public BeamL()
```

## Properties

### <a id="VM_Models_FE_Mesh_Properties_BeamL_Dimensions"></a> Dimensions

```csharp
public double[] Dimensions { get; set; }
```

#### Property Value

 double\[\]

### <a id="VM_Models_FE_Mesh_Properties_BeamL_DimensionsWrapper"></a> DimensionsWrapper

```csharp
[Column]
public byte[] DimensionsWrapper { get; set; }
```

#### Property Value

 byte\[\]

### <a id="VM_Models_FE_Mesh_Properties_BeamL_Shape"></a> Shape

```csharp
[Column]
public BeamCrossSectionShapes Shape { get; set; }
```

#### Property Value

 [BeamCrossSectionShapes](VM.Models.FE.Mesh.BeamCrossSectionShapes.md)

### <a id="VM_Models_FE_Mesh_Properties_BeamL_YDirection"></a> YDirection

```csharp
public Vector YDirection { get; set; }
```

#### Property Value

 Vector

### <a id="VM_Models_FE_Mesh_Properties_BeamL_YX"></a> YX

```csharp
[Column]
public double YX { get; set; }
```

#### Property Value

 double

### <a id="VM_Models_FE_Mesh_Properties_BeamL_YY"></a> YY

```csharp
[Column]
public double YY { get; set; }
```

#### Property Value

 double

### <a id="VM_Models_FE_Mesh_Properties_BeamL_YZ"></a> YZ

```csharp
[Column]
public double YZ { get; set; }
```

#### Property Value

 double

## Methods

### <a id="VM_Models_FE_Mesh_Properties_BeamL_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` object

#### Returns

 bool

