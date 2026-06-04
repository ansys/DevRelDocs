#  Class LeafSpring

Namespace: [VM.Managed.DAFUL.Builder.Force](VM.Managed.DAFUL.Builder.Force.md)  
Assembly: VMBldFP.dll  

```csharp
public class LeafSpring : BuilderNamed<LeafSpring>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<LeafSpring\> ← 
BuilderSymmetric<LeafSpring\> ← 
BuilderNamed<LeafSpring\> ← 
[LeafSpring](VM.Managed.DAFUL.Builder.Force.LeafSpring.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<LeafSpring\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<LeafSpring\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<LeafSpring\>.Name, 
BuilderSymmetric<LeafSpring\>.Build\(Document\), 
BuilderSymmetric<LeafSpring\>.Symmetric, 
BuilderSymmetric<LeafSpring\>.CurrentSymmetric, 
BuilderBase<LeafSpring\>.m\_bSuccess, 
BuilderBase<LeafSpring\>.Build\(Document\), 
BuilderBase<LeafSpring\>.Build\(Document, List<string\>\), 
BuilderBase<LeafSpring\>.Validate\(IList<string\>\), 
BuilderBase<LeafSpring\>.Success\(\), 
BuilderBase<LeafSpring\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<LeafSpring\>.OnFinalBuild\(string, Document\), 
BuilderBase<LeafSpring\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<LeafSpring\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<LeafSpring\>.Parameters, 
BuilderBase<LeafSpring\>.AddToDoc, 
BuilderBase<LeafSpring\>.UseChangedObject, 
BuilderBase<LeafSpring\>.SetPointKey, 
BuilderBase<LeafSpring\>.BuildObject, 
BuilderBase<LeafSpring\>.BuildDocument, 
BuilderBase<LeafSpring\>.UseInterface, 
BuilderBase<LeafSpring\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Force_LeafSpring__ctor"></a> LeafSpring\(\)

```csharp
public LeafSpring()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Force_LeafSpring_Axle"></a> Axle

```csharp
public IConnectable Axle { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_Builder_Force_LeafSpring_EyePosition"></a> EyePosition

```csharp
public PointBase EyePosition { get; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_Builder_Force_LeafSpring_FrontFrame"></a> FrontFrame

```csharp
public IConnectable FrontFrame { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_Builder_Force_LeafSpring_RearFrame"></a> RearFrame

```csharp
public IConnectable RearFrame { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_Builder_Force_LeafSpring_ReferenceFrame"></a> ReferenceFrame

```csharp
public TransformBase ReferenceFrame { get; }
```

#### Property Value

 TransformBase

### <a id="VM_Managed_DAFUL_Builder_Force_LeafSpring_ShacklePosition"></a> ShacklePosition

```csharp
public PointBase ShacklePosition { get; }
```

#### Property Value

 PointBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_Force_LeafSpring_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_Force_LeafSpring_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

