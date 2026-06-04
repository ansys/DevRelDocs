#  Class RequestStructure

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

This class is to represent the Request Structure properties.

```csharp
public class RequestStructure : RequestBase<RequestStructure>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BuilderBase<RequestStructure\>](VM.Managed.DAFUL.Builder.BuilderBase\-1.md) ← 
[BuilderSymmetric<RequestStructure\>](VM.Managed.DAFUL.Builder.BuilderSymmetric\-1.md) ← 
[BuilderNamed<RequestStructure\>](VM.Managed.DAFUL.Builder.BuilderNamed\-1.md) ← 
[RequestBase<RequestStructure\>](VM.Managed.DAFUL.Builder.RequestBase\-1.md) ← 
[RequestStructure](VM.Managed.DAFUL.Builder.RequestStructure.md)

#### Implements

[IBuilder](VM.Managed.DAFUL.Builder.IBuilder.md)

#### Inherited Members

[RequestBase<RequestStructure\>.ActionEntity](VM.Managed.DAFUL.Builder.RequestBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_RequestBase\_1\_ActionEntity), 
[BuilderNamed<RequestStructure\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.BuilderNamed\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderNamed\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[BuilderNamed<RequestStructure\>.CheckUnit\(Document3D, Document3D, string\)](VM.Managed.DAFUL.Builder.BuilderNamed\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderNamed\_1\_CheckUnit\_VM\_Managed\_Document3D\_VM\_Managed\_Document3D\_System\_String\_), 
[BuilderNamed<RequestStructure\>.Name](VM.Managed.DAFUL.Builder.BuilderNamed\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderNamed\_1\_Name), 
[BuilderSymmetric<RequestStructure\>.Build\(Document\)](VM.Managed.DAFUL.Builder.BuilderSymmetric\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderSymmetric\_1\_Build\_VM\_Managed\_Document\_), 
[BuilderSymmetric<RequestStructure\>.Symmetric](VM.Managed.DAFUL.Builder.BuilderSymmetric\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderSymmetric\_1\_Symmetric), 
[BuilderSymmetric<RequestStructure\>.CurrentSymmetric](VM.Managed.DAFUL.Builder.BuilderSymmetric\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderSymmetric\_1\_CurrentSymmetric), 
[BuilderBase<RequestStructure\>.m\_bSuccess](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_m\_bSuccess), 
[BuilderBase<RequestStructure\>.Build\(Document\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Build\_VM\_Managed\_Document\_), 
[BuilderBase<RequestStructure\>.Build\(Document, List<string\>\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Build\_VM\_Managed\_Document\_System\_Collections\_Generic\_List\_System\_String\_\_), 
[BuilderBase<RequestStructure\>.Validate\(IList<string\>\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Validate\_System\_Collections\_Generic\_IList\_System\_String\_\_), 
[BuilderBase<RequestStructure\>.Success\(\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Success), 
[BuilderBase<RequestStructure\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[BuilderBase<RequestStructure\>.OnFinalBuild\(string, Document\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_OnFinalBuild\_System\_String\_VM\_Managed\_Document\_), 
[BuilderBase<RequestStructure\>.OnObjectChangeBuild\(string, Document\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_OnObjectChangeBuild\_System\_String\_VM\_Managed\_Document\_), 
[BuilderBase<RequestStructure\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[BuilderBase<RequestStructure\>.Parameters](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Parameters), 
[BuilderBase<RequestStructure\>.AddToDoc](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_AddToDoc), 
[BuilderBase<RequestStructure\>.UseChangedObject](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_UseChangedObject), 
[BuilderBase<RequestStructure\>.SetPointKey](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_SetPointKey), 
[BuilderBase<RequestStructure\>.BuildObject](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_BuildObject), 
[BuilderBase<RequestStructure\>.BuildDocument](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_BuildDocument), 
[BuilderBase<RequestStructure\>.UseInterface](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_UseInterface), 
[BuilderBase<RequestStructure\>.ErrorMessage](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_ErrorMessage)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_RequestStructure__ctor"></a> RequestStructure\(\)

```csharp
public RequestStructure()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_RequestStructure_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

