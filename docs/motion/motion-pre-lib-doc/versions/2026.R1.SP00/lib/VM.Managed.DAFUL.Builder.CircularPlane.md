# Class CircularPlane
<a id="VM_Managed_DAFUL_Builder_CircularPlane"></a>

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public class CircularPlane : ImprintSheet, IBuilder
```

#### Inheritance

object ← 
[BooleanBase<BuilderImprint\>](VM.Managed.DAFUL.Builder.BooleanBase\-1.md) ← 
[Imprint](VM.Managed.DAFUL.Builder.Imprint.md) ← 
[ImprintSheet](VM.Managed.DAFUL.Builder.ImprintSheet.md) ← 
[CircularPlane](VM.Managed.DAFUL.Builder.CircularPlane.md)

#### Implements

[IBuilder](VM.Managed.DAFUL.Builder.IBuilder.md)

#### Inherited Members

[ImprintSheet.Build\(Document\)](VM.Managed.DAFUL.Builder.ImprintSheet.md\#VM\_Managed\_DAFUL\_Builder\_ImprintSheet\_Build\_VM\_Managed\_Document\_), 
[ImprintSheet.BuildTargetTool\(Builder, Builder\)](VM.Managed.DAFUL.Builder.ImprintSheet.md\#VM\_Managed\_DAFUL\_Builder\_ImprintSheet\_BuildTargetTool\_VM\_Managed\_CAD\_Builder\_VM\_Managed\_CAD\_Builder\_), 
[ImprintSheet.GetPlaneBuilder\(\)](VM.Managed.DAFUL.Builder.ImprintSheet.md\#VM\_Managed\_DAFUL\_Builder\_ImprintSheet\_GetPlaneBuilder), 
[ImprintSheet.TargetConnectable](VM.Managed.DAFUL.Builder.ImprintSheet.md\#VM\_Managed\_DAFUL\_Builder\_ImprintSheet\_TargetConnectable), 
[ImprintSheet.ToolConnectable](VM.Managed.DAFUL.Builder.ImprintSheet.md\#VM\_Managed\_DAFUL\_Builder\_ImprintSheet\_ToolConnectable), 
[ImprintSheet.TargetList](VM.Managed.DAFUL.Builder.ImprintSheet.md\#VM\_Managed\_DAFUL\_Builder\_ImprintSheet\_TargetList), 
[ImprintSheet.ExtraArgument](VM.Managed.DAFUL.Builder.ImprintSheet.md\#VM\_Managed\_DAFUL\_Builder\_ImprintSheet\_ExtraArgument), 
[Imprint.Build\(Document\)](VM.Managed.DAFUL.Builder.Imprint.md\#VM\_Managed\_DAFUL\_Builder\_Imprint\_Build\_VM\_Managed\_Document\_), 
[Imprint.GetFaces\(PickedFace\)](VM.Managed.DAFUL.Builder.Imprint.md\#VM\_Managed\_DAFUL\_Builder\_Imprint\_GetFaces\_VM\_Managed\_DAFUL\_Builder\_PickedFace\_), 
[Imprint.Type](VM.Managed.DAFUL.Builder.Imprint.md\#VM\_Managed\_DAFUL\_Builder\_Imprint\_Type), 
[BooleanBase<BuilderImprint\>.m\_bSuccess](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_m\_bSuccess), 
[BooleanBase<BuilderImprint\>.m\_bSym](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_m\_bSym), 
[BooleanBase<BuilderImprint\>.Validate\(IList<string\>\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_Validate\_System\_Collections\_Generic\_IList\_System\_String\_\_), 
[BooleanBase<BuilderImprint\>.BuildCoreCore\(Document\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_BuildCoreCore\_VM\_Managed\_Document\_), 
[BooleanBase<BuilderImprint\>.Build\(Document\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_Build\_VM\_Managed\_Document\_), 
[BooleanBase<BuilderImprint\>.Build\(Document, List<string\>\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_Build\_VM\_Managed\_Document\_System\_Collections\_Generic\_List\_System\_String\_\_), 
[BooleanBase<BuilderImprint\>.Success\(\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_Success), 
[BooleanBase<BuilderImprint\>.BuildTargetTool\(Builder, Builder\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_BuildTargetTool\_VM\_Managed\_CAD\_Builder\_VM\_Managed\_CAD\_Builder\_), 
[BooleanBase<BuilderImprint\>.GetSymmetricBuilder\(Builder\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_GetSymmetricBuilder\_VM\_Managed\_CAD\_Builder\_), 
[BooleanBase<BuilderImprint\>.GetSymmetricBody\(Body\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_GetSymmetricBody\_VM\_Managed\_CAD\_Body\_), 
[BooleanBase<BuilderImprint\>.SetSymmetricBuilder\(Builder, Builder\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_SetSymmetricBuilder\_VM\_Managed\_CAD\_Builder\_VM\_Managed\_CAD\_Builder\_), 
[BooleanBase<BuilderImprint\>.NullSymmetricBuilder\(Builder\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_NullSymmetricBuilder\_VM\_Managed\_CAD\_Builder\_), 
[BooleanBase<BuilderImprint\>.DeleteToolAllBody\(\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_DeleteToolAllBody), 
[BooleanBase<BuilderImprint\>.DeleteToolBody\(\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_DeleteToolBody), 
[BooleanBase<BuilderImprint\>.RemoveBody\(Body\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_RemoveBody\_VM\_Managed\_CAD\_Body\_), 
[BooleanBase<BuilderImprint\>.CheckSymmetric\(Document, List<Body\>\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_CheckSymmetric\_VM\_Managed\_Document\_System\_Collections\_Generic\_List\_VM\_Managed\_CAD\_Body\_\_), 
[BooleanBase<BuilderImprint\>.DeserializeBuilder\(Builder\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_DeserializeBuilder\_VM\_Managed\_CAD\_Builder\_), 
[BooleanBase<BuilderImprint\>.TargetConnectable](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_TargetConnectable), 
[BooleanBase<BuilderImprint\>.ToolConnectable](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_ToolConnectable), 
[BooleanBase<BuilderImprint\>.Type](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_Type), 
[BooleanBase<BuilderImprint\>.Argument](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_Argument), 
[BooleanBase<BuilderImprint\>.ExtraArgument](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_ExtraArgument), 
[BooleanBase<BuilderImprint\>.Parameters](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_Parameters), 
[BooleanBase<BuilderImprint\>.AvailableOperation](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_AvailableOperation), 
[BooleanBase<BuilderImprint\>.BuildObject](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_BuildObject)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_CircularPlane__ctor"></a> CircularPlane\(\)

```csharp
public CircularPlane()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_CircularPlane_Radius"></a> Radius

```csharp
public Variable Radius { get; set; }
```

#### Property Value

 Variable

## Methods

### <a id="VM_Managed_DAFUL_Builder_CircularPlane_GetPlaneBuilder"></a> GetPlaneBuilder\(\)

```csharp
protected override BuilderPlane GetPlaneBuilder()
```

#### Returns

 BuilderPlane

