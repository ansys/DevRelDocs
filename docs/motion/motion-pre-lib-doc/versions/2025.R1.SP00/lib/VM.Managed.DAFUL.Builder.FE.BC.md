#  Class BC

Namespace: [VM.Managed.DAFUL.Builder.FE](VM.Managed.DAFUL.Builder.FE.md)  
Assembly: VMBldFE.dll  

```csharp
public class BC : BuilderNamed<BoundaryCondition>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<BoundaryCondition\> ← 
BuilderSymmetric<BoundaryCondition\> ← 
BuilderNamed<BoundaryCondition\> ← 
[BC](VM.Managed.DAFUL.Builder.FE.BC.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<BoundaryCondition\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<BoundaryCondition\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<BoundaryCondition\>.Name, 
BuilderSymmetric<BoundaryCondition\>.Build\(Document\), 
BuilderSymmetric<BoundaryCondition\>.Symmetric, 
BuilderSymmetric<BoundaryCondition\>.CurrentSymmetric, 
BuilderBase<BoundaryCondition\>.m\_bSuccess, 
BuilderBase<BoundaryCondition\>.Build\(Document\), 
BuilderBase<BoundaryCondition\>.Build\(Document, List<string\>\), 
BuilderBase<BoundaryCondition\>.Validate\(IList<string\>\), 
BuilderBase<BoundaryCondition\>.Success\(\), 
BuilderBase<BoundaryCondition\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<BoundaryCondition\>.OnFinalBuild\(string, Document\), 
BuilderBase<BoundaryCondition\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<BoundaryCondition\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<BoundaryCondition\>.Parameters, 
BuilderBase<BoundaryCondition\>.AddToDoc, 
BuilderBase<BoundaryCondition\>.UseChangedObject, 
BuilderBase<BoundaryCondition\>.SetPointKey, 
BuilderBase<BoundaryCondition\>.BuildObject, 
BuilderBase<BoundaryCondition\>.BuildDocument, 
BuilderBase<BoundaryCondition\>.UseInterface, 
BuilderBase<BoundaryCondition\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_FE_BC__ctor"></a> BC\(\)

```csharp
public BC()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_FE_BC_ActionBCComponent"></a> ActionBCComponent

```csharp
public IGeometricalComponent ActionBCComponent { get; }
```

#### Property Value

 IGeometricalComponent

## Methods

### <a id="VM_Managed_DAFUL_Builder_FE_BC_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

