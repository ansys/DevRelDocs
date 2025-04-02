#  Class BuilderParamLink

Namespace: [VM.CAD.Builders.Links](VM.CAD.Builders.Links.md)  
Assembly: VM.CAD.Builders.Links.dll  

This class represents the builder parameter for the link geometry.

```csharp
public class BuilderParamLink : BuilderParamTransform
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderParamBase ← 
BuilderParamColorGeom ← 
BuilderParamTransform ← 
[BuilderParamLink](VM.CAD.Builders.Links.BuilderParamLink.md)

#### Derived

[BuilderParamLinkSimple](VM.CAD.Builders.Links.BuilderParamLinkSimple.md), 
[BuilderParamLinkV](VM.CAD.Builders.Links.BuilderParamLinkV.md)

#### Inherited Members

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

### <a id="VM_CAD_Builders_Links_BuilderParamLink__ctor"></a> BuilderParamLink\(\)

```csharp
public BuilderParamLink()
```

## Properties

### <a id="VM_CAD_Builders_Links_BuilderParamLink_BushBooleanType"></a> BushBooleanType

```csharp
public BooleanType BushBooleanType { get; set; }
```

#### Property Value

 [BooleanType](VM.CAD.Builders.Links.BooleanType.md)

### <a id="VM_CAD_Builders_Links_BuilderParamLink_InnerGauge"></a> InnerGauge

```csharp
public double InnerGauge { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLink_LinkGeometry"></a> LinkGeometry

```csharp
public BuilderParamMultiUnite LinkGeometry { get; set; }
```

#### Property Value

 BuilderParamMultiUnite

### <a id="VM_CAD_Builders_Links_BuilderParamLink_LinkHeight1"></a> LinkHeight1

```csharp
public double LinkHeight1 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLink_LinkHeight2"></a> LinkHeight2

```csharp
public double LinkHeight2 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLink_LinkPitch"></a> LinkPitch

```csharp
public double LinkPitch { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLink_LinkTransform"></a> LinkTransform

```csharp
public TMatrix LinkTransform { get; set; }
```

#### Property Value

 TMatrix

### <a id="VM_CAD_Builders_Links_BuilderParamLink_LinkType"></a> LinkType

```csharp
public LinkType LinkType { get; set; }
```

#### Property Value

 [LinkType](VM.CAD.Builders.Links.LinkType.md)

### <a id="VM_CAD_Builders_Links_BuilderParamLink_OuterGauge"></a> OuterGauge

```csharp
public double OuterGauge { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLink_PinBooleanType"></a> PinBooleanType

```csharp
public BooleanType PinBooleanType { get; set; }
```

#### Property Value

 [BooleanType](VM.CAD.Builders.Links.BooleanType.md)

### <a id="VM_CAD_Builders_Links_BuilderParamLink_PinDiameter"></a> PinDiameter

```csharp
public double PinDiameter { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_Links_BuilderParamLink_PinWidth"></a> PinWidth

```csharp
public double PinWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_CAD_Builders_Links_BuilderParamLink_AddCylinder_System_Double_System_Double_System_Double_VM_CAD_Builders_Links_BooleanType_"></a> AddCylinder\(double, double, double, BooleanType\)

```csharp
protected void AddCylinder(double diameter, double xPosition, double zPosition, BooleanType booleanType)
```

#### Parameters

`diameter` [double](https://learn.microsoft.com/dotnet/api/system.double)

`xPosition` [double](https://learn.microsoft.com/dotnet/api/system.double)

`zPosition` [double](https://learn.microsoft.com/dotnet/api/system.double)

`booleanType` [BooleanType](VM.CAD.Builders.Links.BooleanType.md)

### <a id="VM_CAD_Builders_Links_BuilderParamLink_AddSubtractBuilderParam_VM_CAD_Builders_BuilderParamBase_"></a> AddSubtractBuilderParam\(BuilderParamBase\)

```csharp
public void AddSubtractBuilderParam(BuilderParamBase builderParam)
```

#### Parameters

`builderParam` BuilderParamBase

### <a id="VM_CAD_Builders_Links_BuilderParamLink_AddSubtractBuilderParam_System_Collections_Generic_IEnumerable_VM_CAD_Builders_BuilderParamBase__"></a> AddSubtractBuilderParam\(IEnumerable<BuilderParamBase\>\)

```csharp
public void AddSubtractBuilderParam(IEnumerable<BuilderParamBase> builderParams)
```

#### Parameters

`builderParams` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<BuilderParamBase\>

### <a id="VM_CAD_Builders_Links_BuilderParamLink_AddUniteBuilderParam_VM_CAD_Builders_BuilderParamBase_"></a> AddUniteBuilderParam\(BuilderParamBase\)

```csharp
public void AddUniteBuilderParam(BuilderParamBase builderParam)
```

#### Parameters

`builderParam` BuilderParamBase

### <a id="VM_CAD_Builders_Links_BuilderParamLink_AddUniteBuilderParam_System_Collections_Generic_IEnumerable_VM_CAD_Builders_BuilderParamBase__"></a> AddUniteBuilderParam\(IEnumerable<BuilderParamBase\>\)

```csharp
public void AddUniteBuilderParam(IEnumerable<BuilderParamBase> builderParams)
```

#### Parameters

`builderParams` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<BuilderParamBase\>

