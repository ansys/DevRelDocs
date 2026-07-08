#  Class BallPlacingContactBuilder

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBldBallPlacing.dll  

```csharp
public class BallPlacingContactBuilder : BuilderNamed<BallPlacingContact>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<BallPlacingContact\> ← 
BuilderSymmetric<BallPlacingContact\> ← 
BuilderNamed<BallPlacingContact\> ← 
[BallPlacingContactBuilder](VM.Managed.DAFUL.Builder.BallPlacingContactBuilder.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<BallPlacingContact\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<BallPlacingContact\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<BallPlacingContact\>.Name, 
BuilderSymmetric<BallPlacingContact\>.Build\(Document\), 
BuilderSymmetric<BallPlacingContact\>.Symmetric, 
BuilderSymmetric<BallPlacingContact\>.CurrentSymmetric, 
BuilderBase<BallPlacingContact\>.m\_bSuccess, 
BuilderBase<BallPlacingContact\>.Build\(Document\), 
BuilderBase<BallPlacingContact\>.Build\(Document, List<string\>\), 
BuilderBase<BallPlacingContact\>.Validate\(IList<string\>\), 
BuilderBase<BallPlacingContact\>.Success\(\), 
BuilderBase<BallPlacingContact\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<BallPlacingContact\>.OnFinalBuild\(string, Document\), 
BuilderBase<BallPlacingContact\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<BallPlacingContact\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<BallPlacingContact\>.Parameters, 
BuilderBase<BallPlacingContact\>.AddToDoc, 
BuilderBase<BallPlacingContact\>.UseChangedObject, 
BuilderBase<BallPlacingContact\>.SetPointKey, 
BuilderBase<BallPlacingContact\>.BuildObject, 
BuilderBase<BallPlacingContact\>.BuildDocument, 
BuilderBase<BallPlacingContact\>.UseInterface, 
BuilderBase<BallPlacingContact\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_BallPlacingContactBuilder__ctor"></a> BallPlacingContactBuilder\(\)

```csharp
public BallPlacingContactBuilder()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_BallPlacingContactBuilder_BallPlacing"></a> BallPlacing

```csharp
public BallPlacing BallPlacing { get; }
```

#### Property Value

 BallPlacing

### <a id="VM_Managed_DAFUL_Builder_BallPlacingContactBuilder_BaseList"></a> BaseList

```csharp
public string[] BaseList { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Methods

### <a id="VM_Managed_DAFUL_Builder_BallPlacingContactBuilder_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase created, Document doc)
```

#### Parameters

`created` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

