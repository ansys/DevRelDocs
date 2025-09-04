#  Class SolidBody<T\>

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public abstract class SolidBody<T> : BuilderNamed<SolidBody>, IBuilder where T : Builder, new()
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BuilderBase<SolidBody\>](VM.Managed.DAFUL.Builder.BuilderBase\-1.md) ← 
[BuilderSymmetric<SolidBody\>](VM.Managed.DAFUL.Builder.BuilderSymmetric\-1.md) ← 
[BuilderNamed<SolidBody\>](VM.Managed.DAFUL.Builder.BuilderNamed\-1.md) ← 
[SolidBody<T\>](VM.Managed.DAFUL.Builder.SolidBody\-1.md)

#### Implements

[IBuilder](VM.Managed.DAFUL.Builder.IBuilder.md)

#### Inherited Members

[BuilderNamed<SolidBody\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.BuilderNamed\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderNamed\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[BuilderNamed<SolidBody\>.CheckUnit\(Document3D, Document3D, string\)](VM.Managed.DAFUL.Builder.BuilderNamed\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderNamed\_1\_CheckUnit\_VM\_Managed\_Document3D\_VM\_Managed\_Document3D\_System\_String\_), 
[BuilderNamed<SolidBody\>.Name](VM.Managed.DAFUL.Builder.BuilderNamed\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderNamed\_1\_Name), 
[BuilderSymmetric<SolidBody\>.Build\(Document\)](VM.Managed.DAFUL.Builder.BuilderSymmetric\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderSymmetric\_1\_Build\_VM\_Managed\_Document\_), 
[BuilderSymmetric<SolidBody\>.Symmetric](VM.Managed.DAFUL.Builder.BuilderSymmetric\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderSymmetric\_1\_Symmetric), 
[BuilderSymmetric<SolidBody\>.CurrentSymmetric](VM.Managed.DAFUL.Builder.BuilderSymmetric\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderSymmetric\_1\_CurrentSymmetric), 
[BuilderBase<SolidBody\>.m\_bSuccess](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_m\_bSuccess), 
[BuilderBase<SolidBody\>.Build\(Document\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Build\_VM\_Managed\_Document\_), 
[BuilderBase<SolidBody\>.Build\(Document, List<string\>\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Build\_VM\_Managed\_Document\_System\_Collections\_Generic\_List\_System\_String\_\_), 
[BuilderBase<SolidBody\>.Validate\(IList<string\>\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Validate\_System\_Collections\_Generic\_IList\_System\_String\_\_), 
[BuilderBase<SolidBody\>.Success\(\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Success), 
[BuilderBase<SolidBody\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[BuilderBase<SolidBody\>.OnFinalBuild\(string, Document\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_OnFinalBuild\_System\_String\_VM\_Managed\_Document\_), 
[BuilderBase<SolidBody\>.OnObjectChangeBuild\(string, Document\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_OnObjectChangeBuild\_System\_String\_VM\_Managed\_Document\_), 
[BuilderBase<SolidBody\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[BuilderBase<SolidBody\>.Parameters](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Parameters), 
[BuilderBase<SolidBody\>.AddToDoc](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_AddToDoc), 
[BuilderBase<SolidBody\>.UseChangedObject](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_UseChangedObject), 
[BuilderBase<SolidBody\>.SetPointKey](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_SetPointKey), 
[BuilderBase<SolidBody\>.BuildObject](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_BuildObject), 
[BuilderBase<SolidBody\>.BuildDocument](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_BuildDocument), 
[BuilderBase<SolidBody\>.UseInterface](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_UseInterface), 
[BuilderBase<SolidBody\>.ErrorMessage](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_ErrorMessage)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_SolidBody_1__ctor"></a> SolidBody\(\)

```csharp
public SolidBody()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_SolidBody_1_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_SolidBody_1_BodyName"></a> BodyName

```csharp
public SolidBody<T>.BodyNameInfo BodyName { get; set; }
```

#### Property Value

 [SolidBody](VM.Managed.DAFUL.Builder.SolidBody\-1.md)<T\>.[BodyNameInfo](VM.Managed.DAFUL.Builder.SolidBody\-1.BodyNameInfo.md)

### <a id="VM_Managed_DAFUL_Builder_SolidBody_1_Interface"></a> Interface

```csharp
public bool Interface { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_SolidBody_1_Name"></a> Name

```csharp
public override string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_SolidBody_1_SolidBuilder"></a> SolidBuilder

```csharp
protected T SolidBuilder { get; }
```

#### Property Value

 T

## Methods

### <a id="VM_Managed_DAFUL_Builder_SolidBody_1_MakeSymmetricSolidBuilder"></a> MakeSymmetricSolidBuilder\(\)

```csharp
protected abstract Builder MakeSymmetricSolidBuilder()
```

#### Returns

 Builder

### <a id="VM_Managed_DAFUL_Builder_SolidBody_1_OnFinalBuild_System_String_VM_Managed_Document_"></a> OnFinalBuild\(string, Document\)

```csharp
protected override ObjectBase OnFinalBuild(string strObjName, Document doc)
```

#### Parameters

`strObjName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`doc` Document

#### Returns

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_SolidBody_1_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_SolidBody_1_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_SolidBody_1_SetSolidBuilderProperty__0_"></a> SetSolidBuilderProperty\(T\)

```csharp
protected abstract void SetSolidBuilderProperty(T solidBuilder)
```

#### Parameters

`solidBuilder` T

