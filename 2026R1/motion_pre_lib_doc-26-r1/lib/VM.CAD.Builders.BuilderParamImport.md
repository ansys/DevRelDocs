# Class BuilderParamImport
<a id="VM_CAD_Builders_BuilderParamImport"></a>

Namespace: [VM.CAD.Builders](VM.CAD.Builders.md)  
Assembly: VM.CAD.Builders.dll  

Builder parameter for the imported geometry

```csharp
public class BuilderParamImport : BuilderParamTransform
```

#### Inheritance

object ← 
[BuilderParamBase](VM.CAD.Builders.BuilderParamBase.md) ← 
[BuilderParamColorGeom](VM.CAD.Builders.BuilderParamColorGeom.md) ← 
[BuilderParamTransform](VM.CAD.Builders.BuilderParamTransform.md) ← 
[BuilderParamImport](VM.CAD.Builders.BuilderParamImport.md)

#### Inherited Members

[BuilderParamTransform.Transform](VM.CAD.Builders.BuilderParamTransform.md\#VM\_CAD\_Builders\_BuilderParamTransform\_Transform), 
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

### <a id="VM_CAD_Builders_BuilderParamImport__ctor"></a> BuilderParamImport\(\)

```csharp
public BuilderParamImport()
```

## Properties

### <a id="VM_CAD_Builders_BuilderParamImport_ImportInfo"></a> ImportInfo

Imported geometry information

```csharp
public string ImportInfo { get; set; }
```

#### Property Value

 string

### <a id="VM_CAD_Builders_BuilderParamImport_NameAttribute"></a> NameAttribute

Name attribute of the geometry

```csharp
public string NameAttribute { get; set; }
```

#### Property Value

 string

### <a id="VM_CAD_Builders_BuilderParamImport_Scale"></a> Scale

Scale value of the geometry

```csharp
public double Scale { get; set; }
```

#### Property Value

 double

