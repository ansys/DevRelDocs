# Class BuilderParamColorGeom
<a id="VM_CAD_Builders_BuilderParamColorGeom"></a>

Namespace: [VM.CAD.Builders](VM.CAD.Builders.md)  
Assembly: VM.CAD.Builders.dll  

```csharp
public abstract class BuilderParamColorGeom : BuilderParamBase
```

#### Inheritance

object ← 
[BuilderParamBase](VM.CAD.Builders.BuilderParamBase.md) ← 
[BuilderParamColorGeom](VM.CAD.Builders.BuilderParamColorGeom.md)

#### Derived

[BuilderParamCylinder](VM.CAD.Builders.BuilderParamCylinder.md), 
[BuilderParamExtrude](VM.CAD.Builders.BuilderParamExtrude.md), 
[BuilderParamMulti](VM.CAD.Builders.BuilderParamMulti.md), 
[BuilderParamPair](VM.CAD.Builders.BuilderParamPair.md), 
[BuilderParamSphere](VM.CAD.Builders.BuilderParamSphere.md), 
[BuilderParamTorus](VM.CAD.Builders.BuilderParamTorus.md), 
[BuilderParamTransform](VM.CAD.Builders.BuilderParamTransform.md), 
[BuilderParamTriPlate](VM.CAD.Builders.BuilderParamTriPlate.md)

#### Inherited Members

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

### <a id="VM_CAD_Builders_BuilderParamColorGeom__ctor"></a> BuilderParamColorGeom\(\)

```csharp
protected BuilderParamColorGeom()
```

## Properties

### <a id="VM_CAD_Builders_BuilderParamColorGeom_Color"></a> Color

```csharp
public ColorInfo Color { get; set; }
```

#### Property Value

 [ColorInfo](VM.CAD.Builders.ColorInfo.md)

