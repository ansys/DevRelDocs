# Class BuilderParamBlock
<a id="VM_CAD_Builders_BuilderParamBlock"></a>

Namespace: [VM.CAD.Builders](VM.CAD.Builders.md)  
Assembly: VM.CAD.Builders.dll  

This class represents the builder parameter for block geometry.

```csharp
public class BuilderParamBlock : BuilderParamTransform
```

#### Inheritance

object ← 
[BuilderParamBase](VM.CAD.Builders.BuilderParamBase.md) ← 
[BuilderParamColorGeom](VM.CAD.Builders.BuilderParamColorGeom.md) ← 
[BuilderParamTransform](VM.CAD.Builders.BuilderParamTransform.md) ← 
[BuilderParamBlock](VM.CAD.Builders.BuilderParamBlock.md)

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

### <a id="VM_CAD_Builders_BuilderParamBlock__ctor"></a> BuilderParamBlock\(\)

```csharp
public BuilderParamBlock()
```

## Properties

### <a id="VM_CAD_Builders_BuilderParamBlock_Depth"></a> Depth

Gets or sets the depth.

```csharp
public double Depth { get; set; }
```

#### Property Value

 double

### <a id="VM_CAD_Builders_BuilderParamBlock_Height"></a> Height

Gets or sets the height.

```csharp
public double Height { get; set; }
```

#### Property Value

 double

### <a id="VM_CAD_Builders_BuilderParamBlock_Width"></a> Width

Gets or sets the width.

```csharp
public double Width { get; set; }
```

#### Property Value

 double

