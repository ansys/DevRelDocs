#  Class MFileGen

Namespace: [VM.Managed.DAFUL.Builder.CoSim.Matlab](VM.Managed.DAFUL.Builder.CoSim.Matlab.md)  
Assembly: VMBldCoSimMatlab.dll  

```csharp
public class MFileGen : BuilderNamed<MFileGen>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<MFileGen\> ← 
BuilderSymmetric<MFileGen\> ← 
BuilderNamed<MFileGen\> ← 
[MFileGen](VM.Managed.DAFUL.Builder.CoSim.Matlab.MFileGen.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<MFileGen\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<MFileGen\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<MFileGen\>.Name, 
BuilderSymmetric<MFileGen\>.Build\(Document\), 
BuilderSymmetric<MFileGen\>.Symmetric, 
BuilderSymmetric<MFileGen\>.CurrentSymmetric, 
BuilderBase<MFileGen\>.m\_bSuccess, 
BuilderBase<MFileGen\>.Build\(Document\), 
BuilderBase<MFileGen\>.Build\(Document, List<string\>\), 
BuilderBase<MFileGen\>.Validate\(IList<string\>\), 
BuilderBase<MFileGen\>.Success\(\), 
BuilderBase<MFileGen\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<MFileGen\>.OnFinalBuild\(string, Document\), 
BuilderBase<MFileGen\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<MFileGen\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<MFileGen\>.Parameters, 
BuilderBase<MFileGen\>.AddToDoc, 
BuilderBase<MFileGen\>.UseChangedObject, 
BuilderBase<MFileGen\>.SetPointKey, 
BuilderBase<MFileGen\>.BuildObject, 
BuilderBase<MFileGen\>.BuildDocument, 
BuilderBase<MFileGen\>.UseInterface, 
BuilderBase<MFileGen\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_CoSim_Matlab_MFileGen__ctor"></a> MFileGen\(\)

```csharp
public MFileGen()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_CoSim_Matlab_MFileGen_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

