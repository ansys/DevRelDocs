#  Class SoilInteraction

Namespace: [VM.Managed.DAFUL.Builder.Track](VM.Managed.DAFUL.Builder.Track.md)  
Assembly: VMBldTrack.dll  

```csharp
public class SoilInteraction : BuilderNamed<SoilInteraction>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<SoilInteraction\> ← 
BuilderSymmetric<SoilInteraction\> ← 
BuilderNamed<SoilInteraction\> ← 
[SoilInteraction](VM.Managed.DAFUL.Builder.Track.SoilInteraction.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<SoilInteraction\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<SoilInteraction\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<SoilInteraction\>.Name, 
BuilderSymmetric<SoilInteraction\>.Build\(Document\), 
BuilderSymmetric<SoilInteraction\>.Symmetric, 
BuilderSymmetric<SoilInteraction\>.CurrentSymmetric, 
BuilderBase<SoilInteraction\>.m\_bSuccess, 
BuilderBase<SoilInteraction\>.Build\(Document\), 
BuilderBase<SoilInteraction\>.Build\(Document, List<string\>\), 
BuilderBase<SoilInteraction\>.Validate\(IList<string\>\), 
BuilderBase<SoilInteraction\>.Success\(\), 
BuilderBase<SoilInteraction\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<SoilInteraction\>.OnFinalBuild\(string, Document\), 
BuilderBase<SoilInteraction\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<SoilInteraction\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<SoilInteraction\>.Parameters, 
BuilderBase<SoilInteraction\>.AddToDoc, 
BuilderBase<SoilInteraction\>.UseChangedObject, 
BuilderBase<SoilInteraction\>.SetPointKey, 
BuilderBase<SoilInteraction\>.BuildObject, 
BuilderBase<SoilInteraction\>.BuildDocument, 
BuilderBase<SoilInteraction\>.UseInterface, 
BuilderBase<SoilInteraction\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Track_SoilInteraction__ctor"></a> SoilInteraction\(\)

```csharp
public SoilInteraction()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Track_SoilInteraction_ActionContactables"></a> ActionContactables

```csharp
public string[] ActionContactables { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_Track_SoilInteraction_BaseContactable"></a> BaseContactable

```csharp
public IContactableRigid3D BaseContactable { get; }
```

#### Property Value

 IContactableRigid3D

## Methods

### <a id="VM_Managed_DAFUL_Builder_Track_SoilInteraction_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

