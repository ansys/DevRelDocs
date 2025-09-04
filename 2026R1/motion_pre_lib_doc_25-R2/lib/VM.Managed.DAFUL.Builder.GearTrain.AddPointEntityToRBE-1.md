#  Class AddPointEntityToRBE<T\>

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public abstract class AddPointEntityToRBE<T> : BuilderNamed<T>, IBuilder where T : ObjectBase, new()
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<T\> ← 
BuilderSymmetric<T\> ← 
BuilderNamed<T\> ← 
[AddPointEntityToRBE<T\>](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToRBE\-1.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<T\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<T\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<T\>.Name, 
BuilderSymmetric<T\>.Build\(Document\), 
BuilderSymmetric<T\>.Symmetric, 
BuilderSymmetric<T\>.CurrentSymmetric, 
BuilderBase<T\>.m\_bSuccess, 
BuilderBase<T\>.Build\(Document\), 
BuilderBase<T\>.Build\(Document, List<string\>\), 
BuilderBase<T\>.Validate\(IList<string\>\), 
BuilderBase<T\>.Success\(\), 
BuilderBase<T\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<T\>.OnFinalBuild\(string, Document\), 
BuilderBase<T\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<T\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<T\>.Parameters, 
BuilderBase<T\>.AddToDoc, 
BuilderBase<T\>.UseChangedObject, 
BuilderBase<T\>.SetPointKey, 
BuilderBase<T\>.BuildObject, 
BuilderBase<T\>.BuildDocument, 
BuilderBase<T\>.UseInterface, 
BuilderBase<T\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPointEntityToRBE_1__ctor"></a> AddPointEntityToRBE\(\)

```csharp
protected AddPointEntityToRBE()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPointEntityToRBE_1_InputArray"></a> InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPointEntityToRBE_1_RBEConnectable"></a> RBEConnectable

```csharp
public IConnectable RBEConnectable { get; }
```

#### Property Value

 IConnectable

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPointEntityToRBE_1_RBEName_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_"></a> RBEName\(HiddenDocumentMeshBase\)

```csharp
protected string RBEName(HiddenDocumentMeshBase hiddenMeshDoc)
```

#### Parameters

`hiddenMeshDoc` HiddenDocumentMeshBase

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddPointEntityToRBE_1_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

