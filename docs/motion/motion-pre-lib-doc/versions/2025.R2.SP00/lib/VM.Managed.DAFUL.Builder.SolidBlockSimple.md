#  Class SolidBlockSimple

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public class SolidBlockSimple : Solid<BuilderBlockSimple>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BuilderBase<Body\>](VM.Managed.DAFUL.Builder.BuilderBase\-1.md) ← 
[Solid<BuilderBlockSimple\>](VM.Managed.DAFUL.Builder.Solid\-1.md) ← 
[SolidBlockSimple](VM.Managed.DAFUL.Builder.SolidBlockSimple.md)

#### Implements

[IBuilder](VM.Managed.DAFUL.Builder.IBuilder.md)

#### Inherited Members

[Solid<BuilderBlockSimple\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.Solid\-1.md\#VM\_Managed\_DAFUL\_Builder\_Solid\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[Solid<BuilderBlockSimple\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.Solid\-1.md\#VM\_Managed\_DAFUL\_Builder\_Solid\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[Solid<BuilderBlockSimple\>.SetSolidBuilderProperty\(BuilderBlockSimple\)](VM.Managed.DAFUL.Builder.Solid\-1.md\#VM\_Managed\_DAFUL\_Builder\_Solid\_1\_SetSolidBuilderProperty\_\_0\_), 
[Solid<BuilderBlockSimple\>.SolidBuilder](VM.Managed.DAFUL.Builder.Solid\-1.md\#VM\_Managed\_DAFUL\_Builder\_Solid\_1\_SolidBuilder), 
[Solid<BuilderBlockSimple\>.Color](VM.Managed.DAFUL.Builder.Solid\-1.md\#VM\_Managed\_DAFUL\_Builder\_Solid\_1\_Color), 
[Solid<BuilderBlockSimple\>.AddToDoc](VM.Managed.DAFUL.Builder.Solid\-1.md\#VM\_Managed\_DAFUL\_Builder\_Solid\_1\_AddToDoc), 
[BuilderBase<Body\>.m\_bSuccess](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_m\_bSuccess), 
[BuilderBase<Body\>.Build\(Document\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Build\_VM\_Managed\_Document\_), 
[BuilderBase<Body\>.Build\(Document, List<string\>\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Build\_VM\_Managed\_Document\_System\_Collections\_Generic\_List\_System\_String\_\_), 
[BuilderBase<Body\>.Validate\(IList<string\>\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Validate\_System\_Collections\_Generic\_IList\_System\_String\_\_), 
[BuilderBase<Body\>.Success\(\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Success), 
[BuilderBase<Body\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[BuilderBase<Body\>.OnFinalBuild\(string, Document\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_OnFinalBuild\_System\_String\_VM\_Managed\_Document\_), 
[BuilderBase<Body\>.OnObjectChangeBuild\(string, Document\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_OnObjectChangeBuild\_System\_String\_VM\_Managed\_Document\_), 
[BuilderBase<Body\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[BuilderBase<Body\>.Parameters](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Parameters), 
[BuilderBase<Body\>.AddToDoc](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_AddToDoc), 
[BuilderBase<Body\>.UseChangedObject](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_UseChangedObject), 
[BuilderBase<Body\>.SetPointKey](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_SetPointKey), 
[BuilderBase<Body\>.BuildObject](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_BuildObject), 
[BuilderBase<Body\>.BuildDocument](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_BuildDocument), 
[BuilderBase<Body\>.UseInterface](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_UseInterface), 
[BuilderBase<Body\>.ErrorMessage](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_ErrorMessage)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_SolidBlockSimple__ctor"></a> SolidBlockSimple\(\)

```csharp
public SolidBlockSimple()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_SolidBlockSimple_Depth"></a> Depth

```csharp
public Variable Depth { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_SolidBlockSimple_Height"></a> Height

```csharp
public Variable Height { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_SolidBlockSimple_StartPosition"></a> StartPosition

```csharp
public PointBase StartPosition { get; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_Builder_SolidBlockSimple_Width"></a> Width

```csharp
public Variable Width { get; set; }
```

#### Property Value

 Variable

## Methods

### <a id="VM_Managed_DAFUL_Builder_SolidBlockSimple_SetSolidBuilderProperty_VM_Managed_CAD_BuilderBlockSimple_"></a> SetSolidBuilderProperty\(BuilderBlockSimple\)

```csharp
protected override void SetSolidBuilderProperty(BuilderBlockSimple solidBuilder)
```

#### Parameters

`solidBuilder` BuilderBlockSimple

