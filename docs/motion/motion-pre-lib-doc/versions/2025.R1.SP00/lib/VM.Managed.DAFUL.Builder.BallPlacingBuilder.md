#  Class BallPlacingBuilder

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBldBallPlacing.dll  

```csharp
public class BallPlacingBuilder : BuilderNamed<BallPlacing>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<BallPlacing\> ← 
BuilderSymmetric<BallPlacing\> ← 
BuilderNamed<BallPlacing\> ← 
[BallPlacingBuilder](VM.Managed.DAFUL.Builder.BallPlacingBuilder.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<BallPlacing\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<BallPlacing\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<BallPlacing\>.Name, 
BuilderSymmetric<BallPlacing\>.Build\(Document\), 
BuilderSymmetric<BallPlacing\>.Symmetric, 
BuilderSymmetric<BallPlacing\>.CurrentSymmetric, 
BuilderBase<BallPlacing\>.m\_bSuccess, 
BuilderBase<BallPlacing\>.Build\(Document\), 
BuilderBase<BallPlacing\>.Build\(Document, List<string\>\), 
BuilderBase<BallPlacing\>.Validate\(IList<string\>\), 
BuilderBase<BallPlacing\>.Success\(\), 
BuilderBase<BallPlacing\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<BallPlacing\>.OnFinalBuild\(string, Document\), 
BuilderBase<BallPlacing\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<BallPlacing\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<BallPlacing\>.Parameters, 
BuilderBase<BallPlacing\>.AddToDoc, 
BuilderBase<BallPlacing\>.UseChangedObject, 
BuilderBase<BallPlacing\>.SetPointKey, 
BuilderBase<BallPlacing\>.BuildObject, 
BuilderBase<BallPlacing\>.BuildDocument, 
BuilderBase<BallPlacing\>.UseInterface, 
BuilderBase<BallPlacing\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_BallPlacingBuilder__ctor"></a> BallPlacingBuilder\(\)

```csharp
public BallPlacingBuilder()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_BallPlacingBuilder_InitRadius"></a> InitRadius

```csharp
public Variable InitRadius { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_BallPlacingBuilder_InputArray"></a> InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_BallPlacingBuilder_NumberOfBall"></a> NumberOfBall

```csharp
public Variable NumberOfBall { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_BallPlacingBuilder_Path"></a> Path

```csharp
public string Path { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_BallPlacingBuilder_PathType"></a> PathType

```csharp
public string PathType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Builder_BallPlacingBuilder_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase created, Document doc)
```

#### Parameters

`created` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_BallPlacingBuilder_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

