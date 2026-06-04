#  Class MatrixBBPP

Namespace: [VM.Managed.DAFUL.Builder.Force](VM.Managed.DAFUL.Builder.Force.md)  
Assembly: VMBldFP.dll  

```csharp
public class MatrixBBPP : Connector<Matrix, PropertyMatrix, TwoPointPosition, NoneDirection, NoneOrientation>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Matrix\> ← 
BuilderSymmetric<Matrix\> ← 
BuilderNamed<Matrix\> ← 
Connector<Matrix, PropertyMatrix, TwoPointPosition, NoneDirection, NoneOrientation\> ← 
[MatrixBBPP](VM.Managed.DAFUL.Builder.Force.MatrixBBPP.md)

#### Implements

IBuilder

#### Inherited Members

Connector<Matrix, PropertyMatrix, TwoPointPosition, NoneDirection, NoneOrientation\>.HookBeforeReplace\(Property\), 
Connector<Matrix, PropertyMatrix, TwoPointPosition, NoneDirection, NoneOrientation\>.OnPostBuild\(ObjectBase, Document\), 
Connector<Matrix, PropertyMatrix, TwoPointPosition, NoneDirection, NoneOrientation\>.OnPostAddDoc\(ObjectBase\), 
Connector<Matrix, PropertyMatrix, TwoPointPosition, NoneDirection, NoneOrientation\>.BaseConnectable, 
Connector<Matrix, PropertyMatrix, TwoPointPosition, NoneDirection, NoneOrientation\>.ActionConnectable, 
Connector<Matrix, PropertyMatrix, TwoPointPosition, NoneDirection, NoneOrientation\>.AddToDoc, 
Connector<Matrix, PropertyMatrix, TwoPointPosition, NoneDirection, NoneOrientation\>.BuildObject, 
BuilderNamed<Matrix\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Matrix\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Matrix\>.Name, 
BuilderSymmetric<Matrix\>.Build\(Document\), 
BuilderSymmetric<Matrix\>.Symmetric, 
BuilderSymmetric<Matrix\>.CurrentSymmetric, 
BuilderBase<Matrix\>.m\_bSuccess, 
BuilderBase<Matrix\>.Build\(Document\), 
BuilderBase<Matrix\>.Build\(Document, List<string\>\), 
BuilderBase<Matrix\>.Validate\(IList<string\>\), 
BuilderBase<Matrix\>.Success\(\), 
BuilderBase<Matrix\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Matrix\>.OnFinalBuild\(string, Document\), 
BuilderBase<Matrix\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Matrix\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Matrix\>.Parameters, 
BuilderBase<Matrix\>.AddToDoc, 
BuilderBase<Matrix\>.UseChangedObject, 
BuilderBase<Matrix\>.SetPointKey, 
BuilderBase<Matrix\>.BuildObject, 
BuilderBase<Matrix\>.BuildDocument, 
BuilderBase<Matrix\>.UseInterface, 
BuilderBase<Matrix\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Force_MatrixBBPP__ctor"></a> MatrixBBPP\(\)

```csharp
public MatrixBBPP()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_Force_MatrixBBPP_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

