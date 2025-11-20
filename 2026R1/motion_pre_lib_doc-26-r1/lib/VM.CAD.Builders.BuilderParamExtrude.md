# Class BuilderParamExtrude
<a id="VM_CAD_Builders_BuilderParamExtrude"></a>

Namespace: [VM.CAD.Builders](VM.CAD.Builders.md)  
Assembly: VM.CAD.Builders.dll  

Builder parameter for the extrude geometry

```csharp
public class BuilderParamExtrude : BuilderParamColorGeom
```

#### Inheritance

object ← 
[BuilderParamBase](VM.CAD.Builders.BuilderParamBase.md) ← 
[BuilderParamColorGeom](VM.CAD.Builders.BuilderParamColorGeom.md) ← 
[BuilderParamExtrude](VM.CAD.Builders.BuilderParamExtrude.md)

#### Inherited Members

[BuilderParamColorGeom.Color](VM.CAD.Builders.BuilderParamColorGeom.md\#VM\_CAD\_Builders\_BuilderParamColorGeom\_Color), 
[BuilderParamBase.ToXmlString\(\)](VM.CAD.Builders.BuilderParamBase.md\#VM\_CAD\_Builders\_BuilderParamBase\_ToXmlString), 
[BuilderParamBase.FinalizeParameter\(\)](VM.CAD.Builders.BuilderParamBase.md\#VM\_CAD\_Builders\_BuilderParamBase\_FinalizeParameter), 
[BuilderParamBase.SetTypeName\(\)](VM.CAD.Builders.BuilderParamBase.md\#VM\_CAD\_Builders\_BuilderParamBase\_SetTypeName), 
[BuilderParamBase.Key](VM.CAD.Builders.BuilderParamBase.md\#VM\_CAD\_Builders\_BuilderParamBase\_Key), 
[BuilderParamBase.TypeName](VM.CAD.Builders.BuilderParamBase.md\#VM\_CAD\_Builders\_BuilderParamBase\_TypeName), 
[BuilderParamBase.Transparency](VM.CAD.Builders.BuilderParamBase.md\#VM\_CAD\_Builders\_BuilderParamBase\_Transparency)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_CAD_Builders_BuilderParamExtrude__ctor"></a> BuilderParamExtrude\(\)

```csharp
public BuilderParamExtrude()
```

## Properties

### <a id="VM_CAD_Builders_BuilderParamExtrude_Axis"></a> Axis

Axis for the extrude

```csharp
public Vector Axis { get; set; }
```

#### Property Value

 Vector

### <a id="VM_CAD_Builders_BuilderParamExtrude_ChamferInfos"></a> ChamferInfos

Champer information for the extrude geometry

```csharp
public List<ChamferInfo> ChamferInfos { get; set; }
```

#### Property Value

 List<[ChamferInfo](VM.CAD.Builders.ChamferInfo.md)\>

### <a id="VM_CAD_Builders_BuilderParamExtrude_Depth"></a> Depth

Depth value of the extrude geometry

```csharp
public double Depth { get; set; }
```

#### Property Value

 double

### <a id="VM_CAD_Builders_BuilderParamExtrude_DrawInfos"></a> DrawInfos

Profile informations for the extrude geometry

```csharp
public List<DrawInfo> DrawInfos { get; set; }
```

#### Property Value

 List<[DrawInfo](VM.CAD.Builders.DrawInfo.md)\>

