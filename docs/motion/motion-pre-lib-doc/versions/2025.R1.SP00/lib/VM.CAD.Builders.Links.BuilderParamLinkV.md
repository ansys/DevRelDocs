#  Class BuilderParamLinkV

Namespace: [VM.CAD.Builders.Links](VM.CAD.Builders.Links.md)  
Assembly: VM.CAD.Builders.Links.dll  

```csharp
public class BuilderParamLinkV : BuilderParamLink
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderParamBase ← 
BuilderParamColorGeom ← 
BuilderParamTransform ← 
[BuilderParamLink](VM.CAD.Builders.Links.BuilderParamLink.md) ← 
[BuilderParamLinkV](VM.CAD.Builders.Links.BuilderParamLinkV.md)

#### Inherited Members

[BuilderParamLink.AddUniteBuilderParam\(BuilderParamBase\)](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_AddUniteBuilderParam\_VM\_CAD\_Builders\_BuilderParamBase\_), 
[BuilderParamLink.AddUniteBuilderParam\(IEnumerable<BuilderParamBase\>\)](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_AddUniteBuilderParam\_System\_Collections\_Generic\_IEnumerable\_VM\_CAD\_Builders\_BuilderParamBase\_\_), 
[BuilderParamLink.AddSubtractBuilderParam\(BuilderParamBase\)](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_AddSubtractBuilderParam\_VM\_CAD\_Builders\_BuilderParamBase\_), 
[BuilderParamLink.AddSubtractBuilderParam\(IEnumerable<BuilderParamBase\>\)](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_AddSubtractBuilderParam\_System\_Collections\_Generic\_IEnumerable\_VM\_CAD\_Builders\_BuilderParamBase\_\_), 
[BuilderParamLink.AddCylinder\(double, double, double, BooleanType\)](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_AddCylinder\_System\_Double\_System\_Double\_System\_Double\_VM\_CAD\_Builders\_Links\_BooleanType\_), 
[BuilderParamLink.LinkType](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_LinkType), 
[BuilderParamLink.LinkTransform](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_LinkTransform), 
[BuilderParamLink.OuterGauge](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_OuterGauge), 
[BuilderParamLink.InnerGauge](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_InnerGauge), 
[BuilderParamLink.PinDiameter](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_PinDiameter), 
[BuilderParamLink.PinWidth](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_PinWidth), 
[BuilderParamLink.LinkPitch](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_LinkPitch), 
[BuilderParamLink.LinkHeight1](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_LinkHeight1), 
[BuilderParamLink.LinkHeight2](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_LinkHeight2), 
[BuilderParamLink.PinBooleanType](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_PinBooleanType), 
[BuilderParamLink.BushBooleanType](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_BushBooleanType), 
[BuilderParamLink.LinkGeometry](VM.CAD.Builders.Links.BuilderParamLink.md\#VM\_CAD\_Builders\_Links\_BuilderParamLink\_LinkGeometry), 
BuilderParamTransform.Transform, 
BuilderParamColorGeom.Color, 
BuilderParamBase.ToXmlString\(\), 
BuilderParamBase.FinalizeParameter\(\), 
BuilderParamBase.SetTypeName\(\), 
BuilderParamBase.Key, 
BuilderParamBase.TypeName, 
BuilderParamBase.Transparency

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_CAD_Builders_Links_BuilderParamLinkV__ctor"></a> BuilderParamLinkV\(\)

```csharp
public BuilderParamLinkV()
```

## Properties

### <a id="VM_CAD_Builders_Links_BuilderParamLinkV_BushBossRadius"></a> BushBossRadius

```csharp
public double BushBossRadius { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLinkV_BushInnerDiameter"></a> BushInnerDiameter

```csharp
public double BushInnerDiameter { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLinkV_BushOuterDiameter"></a> BushOuterDiameter

```csharp
public double BushOuterDiameter { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLinkV_BushWidth"></a> BushWidth

```csharp
public double BushWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLinkV_ChamferLength1"></a> ChamferLength1

```csharp
public double ChamferLength1 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLinkV_ChamferLength2"></a> ChamferLength2

```csharp
public double ChamferLength2 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLinkV_LinkDepth1"></a> LinkDepth1

```csharp
public double LinkDepth1 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLinkV_LinkDepth2"></a> LinkDepth2

```csharp
public double LinkDepth2 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLinkV_LinkDistance1"></a> LinkDistance1

```csharp
public double LinkDistance1 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLinkV_LinkDistance2"></a> LinkDistance2

```csharp
public double LinkDistance2 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLinkV_LinkDistance3"></a> LinkDistance3

```csharp
public double LinkDistance3 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLinkV_LinkDistance4"></a> LinkDistance4

```csharp
public double LinkDistance4 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLinkV_PinBossRadius"></a> PinBossRadius

```csharp
public double PinBossRadius { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_CAD_Builders_Links_BuilderParamLinkV_FinalizeParameter"></a> FinalizeParameter\(\)

Finalize additional parameter setup.

```csharp
public override void FinalizeParameter()
```

