# Class BuilderParamPair
<a id="VM_CAD_Builders_BuilderParamPair"></a>

Namespace: [VM.CAD.Builders](VM.CAD.Builders.md)  
Assembly: VM.CAD.Builders.dll  

```csharp
public abstract class BuilderParamPair : BuilderParamColorGeom
```

#### Inheritance

object ← 
[BuilderParamBase](VM.CAD.Builders.BuilderParamBase.md) ← 
[BuilderParamColorGeom](VM.CAD.Builders.BuilderParamColorGeom.md) ← 
[BuilderParamPair](VM.CAD.Builders.BuilderParamPair.md)

#### Derived

[BuilderParamImprint](VM.CAD.Builders.BuilderParamImprint.md), 
[BuilderParamIntersect](VM.CAD.Builders.BuilderParamIntersect.md), 
[BuilderParamSubtract](VM.CAD.Builders.BuilderParamSubtract.md), 
[BuilderParamUnite](VM.CAD.Builders.BuilderParamUnite.md)

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

### <a id="VM_CAD_Builders_BuilderParamPair__ctor"></a> BuilderParamPair\(\)

```csharp
protected BuilderParamPair()
```

## Properties

### <a id="VM_CAD_Builders_BuilderParamPair_Target"></a> Target

```csharp
public BuilderParamBase Target { get; set; }
```

#### Property Value

 [BuilderParamBase](VM.CAD.Builders.BuilderParamBase.md)

### <a id="VM_CAD_Builders_BuilderParamPair_Tool"></a> Tool

```csharp
public BuilderParamBase Tool { get; set; }
```

#### Property Value

 [BuilderParamBase](VM.CAD.Builders.BuilderParamBase.md)

