#  Class RVReducer

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class RVReducer : BuilderNamed<RVReducer>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<RVReducer\> ← 
BuilderSymmetric<RVReducer\> ← 
BuilderNamed<RVReducer\> ← 
[RVReducer](VM.Managed.DAFUL.Builder.GearTrain.RVReducer.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<RVReducer\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<RVReducer\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<RVReducer\>.Name, 
BuilderSymmetric<RVReducer\>.Build\(Document\), 
BuilderSymmetric<RVReducer\>.Symmetric, 
BuilderSymmetric<RVReducer\>.CurrentSymmetric, 
BuilderBase<RVReducer\>.m\_bSuccess, 
BuilderBase<RVReducer\>.Build\(Document\), 
BuilderBase<RVReducer\>.Build\(Document, List<string\>\), 
BuilderBase<RVReducer\>.Validate\(IList<string\>\), 
BuilderBase<RVReducer\>.Success\(\), 
BuilderBase<RVReducer\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<RVReducer\>.OnFinalBuild\(string, Document\), 
BuilderBase<RVReducer\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<RVReducer\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<RVReducer\>.Parameters, 
BuilderBase<RVReducer\>.AddToDoc, 
BuilderBase<RVReducer\>.UseChangedObject, 
BuilderBase<RVReducer\>.SetPointKey, 
BuilderBase<RVReducer\>.BuildObject, 
BuilderBase<RVReducer\>.BuildDocument, 
BuilderBase<RVReducer\>.UseInterface, 
BuilderBase<RVReducer\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_RVReducer__ctor"></a> RVReducer\(\)

```csharp
public RVReducer()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_GearTrain_RVReducer_Axis"></a> Axis

```csharp
public DirectionBase Axis { get; }
```

#### Property Value

 DirectionBase

### <a id="VM_Managed_DAFUL_Builder_GearTrain_RVReducer_Housing"></a> Housing

```csharp
public IHousing Housing { get; }
```

#### Property Value

 IHousing

### <a id="VM_Managed_DAFUL_Builder_GearTrain_RVReducer_Position"></a> Position

```csharp
public PointBase Position { get; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_Builder_GearTrain_RVReducer_Shaft"></a> Shaft

```csharp
public IShaftSet Shaft { get; }
```

#### Property Value

 IShaftSet

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_RVReducer_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

