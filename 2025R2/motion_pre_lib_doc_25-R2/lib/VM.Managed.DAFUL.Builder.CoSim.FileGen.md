#  Class FileGen

Namespace: [VM.Managed.DAFUL.Builder.CoSim](VM.Managed.DAFUL.Builder.CoSim.md)  
Assembly: VMBldCoSim.dll  

```csharp
public class FileGen : BuilderNamed<FileGen>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<FileGen\> ← 
BuilderSymmetric<FileGen\> ← 
BuilderNamed<FileGen\> ← 
[FileGen](VM.Managed.DAFUL.Builder.CoSim.FileGen.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<FileGen\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<FileGen\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<FileGen\>.Name, 
BuilderSymmetric<FileGen\>.Build\(Document\), 
BuilderSymmetric<FileGen\>.Symmetric, 
BuilderSymmetric<FileGen\>.CurrentSymmetric, 
BuilderBase<FileGen\>.m\_bSuccess, 
BuilderBase<FileGen\>.Build\(Document\), 
BuilderBase<FileGen\>.Build\(Document, List<string\>\), 
BuilderBase<FileGen\>.Validate\(IList<string\>\), 
BuilderBase<FileGen\>.Success\(\), 
BuilderBase<FileGen\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<FileGen\>.OnFinalBuild\(string, Document\), 
BuilderBase<FileGen\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<FileGen\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<FileGen\>.Parameters, 
BuilderBase<FileGen\>.AddToDoc, 
BuilderBase<FileGen\>.UseChangedObject, 
BuilderBase<FileGen\>.SetPointKey, 
BuilderBase<FileGen\>.BuildObject, 
BuilderBase<FileGen\>.BuildDocument, 
BuilderBase<FileGen\>.UseInterface, 
BuilderBase<FileGen\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_CoSim_FileGen__ctor"></a> FileGen\(\)

```csharp
public FileGen()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_CoSim_FileGen_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

