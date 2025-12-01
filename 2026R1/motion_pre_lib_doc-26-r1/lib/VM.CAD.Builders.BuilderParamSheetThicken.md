# Class BuilderParamSheetThicken
<a id="VM_CAD_Builders_BuilderParamSheetThicken"></a>

Namespace: [VM.CAD.Builders](VM.CAD.Builders.md)  
Assembly: VM.CAD.Builders.dll  

Builder parameter for the sheet thicken geometry

```csharp
public class BuilderParamSheetThicken : BuilderParamBase
```

#### Inheritance

object ← 
[BuilderParamBase](VM.CAD.Builders.BuilderParamBase.md) ← 
[BuilderParamSheetThicken](VM.CAD.Builders.BuilderParamSheetThicken.md)

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

### <a id="VM_CAD_Builders_BuilderParamSheetThicken__ctor"></a> BuilderParamSheetThicken\(\)

```csharp
public BuilderParamSheetThicken()
```

## Properties

### <a id="VM_CAD_Builders_BuilderParamSheetThicken_Direction"></a> Direction

Sheet thicken direction

```csharp
public SheetThickenDirection Direction { get; set; }
```

#### Property Value

 [SheetThickenDirection](VM.CAD.Builders.SheetThickenDirection.md)

### <a id="VM_CAD_Builders_BuilderParamSheetThicken_Target"></a> Target

Target geometry to thicken

```csharp
public BuilderParamBase Target { get; set; }
```

#### Property Value

 [BuilderParamBase](VM.CAD.Builders.BuilderParamBase.md)

### <a id="VM_CAD_Builders_BuilderParamSheetThicken_Thickness"></a> Thickness

Thickness of the sheet geometry

```csharp
public double Thickness { get; set; }
```

#### Property Value

 double

