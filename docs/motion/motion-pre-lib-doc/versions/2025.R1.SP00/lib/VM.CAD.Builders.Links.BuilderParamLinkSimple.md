#  Class BuilderParamLinkSimple

Namespace: [VM.CAD.Builders.Links](VM.CAD.Builders.Links.md)  
Assembly: VM.CAD.Builders.Links.dll  

```csharp
public class BuilderParamLinkSimple : BuilderParamLink
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderParamBase ← 
BuilderParamColorGeom ← 
BuilderParamTransform ← 
[BuilderParamLink](VM.CAD.Builders.Links.BuilderParamLink.md) ← 
[BuilderParamLinkSimple](VM.CAD.Builders.Links.BuilderParamLinkSimple.md)

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

### <a id="VM_CAD_Builders_Links_BuilderParamLinkSimple__ctor"></a> BuilderParamLinkSimple\(\)

```csharp
public BuilderParamLinkSimple()
```

## Properties

### <a id="VM_CAD_Builders_Links_BuilderParamLinkSimple_BushDiameter"></a> BushDiameter

```csharp
public double BushDiameter { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_CAD_Builders_Links_BuilderParamLinkSimple_FinalizeParameter"></a> FinalizeParameter\(\)

Finalize additional parameter setup.

```csharp
public override void FinalizeParameter()
```

