# Class BuilderParamMulti

Namespace: [VM.CAD.Builders](VM.CAD.Builders.md)  
Assembly: VM.CAD.Builders.dll  

Abstract class for the multiple combined geometry

```csharp
public abstract class BuilderParamMulti : BuilderParamColorGeom
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BuilderParamBase](VM.CAD.Builders.BuilderParamBase.md) ← 
[BuilderParamColorGeom](VM.CAD.Builders.BuilderParamColorGeom.md) ← 
[BuilderParamMulti](VM.CAD.Builders.BuilderParamMulti.md)

#### Derived

[BuilderParamMultiIntersect](VM.CAD.Builders.BuilderParamMultiIntersect.md), 
[BuilderParamMultiSubtract](VM.CAD.Builders.BuilderParamMultiSubtract.md), 
[BuilderParamMultiUnite](VM.CAD.Builders.BuilderParamMultiUnite.md)

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

### BuilderParamMulti\(\)

```csharp
protected BuilderParamMulti()
```

## Properties

### Builders

Collection of geometries to be combined

```csharp
public List<BuilderParamBase> Builders { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[BuilderParamBase](VM.CAD.Builders.BuilderParamBase.md)\>

## Methods

### FinalizeParameter\(\)

Finalize additional parameter setup.

```csharp
public override void FinalizeParameter()
```


