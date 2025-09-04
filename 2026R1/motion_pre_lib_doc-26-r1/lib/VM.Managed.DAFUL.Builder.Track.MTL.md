#  Class MTL

Namespace: [VM.Managed.DAFUL.Builder.Track](VM.Managed.DAFUL.Builder.Track.md)  
Assembly: VMBldTrack.dll  

```csharp
public class MTL : BuilderNamed<MTL>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<MTL\> ← 
BuilderSymmetric<MTL\> ← 
BuilderNamed<MTL\> ← 
[MTL](VM.Managed.DAFUL.Builder.Track.MTL.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<MTL\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<MTL\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<MTL\>.Name, 
BuilderSymmetric<MTL\>.Build\(Document\), 
BuilderSymmetric<MTL\>.Symmetric, 
BuilderSymmetric<MTL\>.CurrentSymmetric, 
BuilderBase<MTL\>.m\_bSuccess, 
BuilderBase<MTL\>.Build\(Document\), 
BuilderBase<MTL\>.Build\(Document, List<string\>\), 
BuilderBase<MTL\>.Validate\(IList<string\>\), 
BuilderBase<MTL\>.Success\(\), 
BuilderBase<MTL\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<MTL\>.OnFinalBuild\(string, Document\), 
BuilderBase<MTL\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<MTL\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<MTL\>.Parameters, 
BuilderBase<MTL\>.AddToDoc, 
BuilderBase<MTL\>.UseChangedObject, 
BuilderBase<MTL\>.SetPointKey, 
BuilderBase<MTL\>.BuildObject, 
BuilderBase<MTL\>.BuildDocument, 
BuilderBase<MTL\>.UseInterface, 
BuilderBase<MTL\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Track_MTL__ctor"></a> MTL\(\)

```csharp
public MTL()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Track_MTL_BaseContactable"></a> BaseContactable

```csharp
public IContactableRigid3D BaseContactable { get; }
```

#### Property Value

 IContactableRigid3D

### <a id="VM_Managed_DAFUL_Builder_Track_MTL_HullMarker"></a> HullMarker

```csharp
public IMarker HullMarker { get; }
```

#### Property Value

 IMarker

### <a id="VM_Managed_DAFUL_Builder_Track_MTL_InputArray"></a> InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_Track_MTL_Thickness"></a> Thickness

```csharp
public Variable Thickness { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_Track_MTL_Width"></a> Width

```csharp
public Variable Width { get; set; }
```

#### Property Value

 Variable

## Methods

### <a id="VM_Managed_DAFUL_Builder_Track_MTL_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_Track_MTL_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

