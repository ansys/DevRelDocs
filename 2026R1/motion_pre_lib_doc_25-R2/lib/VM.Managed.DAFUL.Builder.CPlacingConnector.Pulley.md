#  Class Pulley

Namespace: [VM.Managed.DAFUL.Builder.CPlacingConnector](VM.Managed.DAFUL.Builder.CPlacingConnector.md)  
Assembly: VMBldCPlacingConnector.dll  

```csharp
public class Pulley : GeometryBase<Pulley>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Pulley\> ← 
BuilderSymmetric<Pulley\> ← 
BuilderNamed<Pulley\> ← 
[GeometryBase<Pulley\>](VM.Managed.DAFUL.Builder.CPlacingConnector.GeometryBase\-1.md) ← 
[Pulley](VM.Managed.DAFUL.Builder.CPlacingConnector.Pulley.md)

#### Implements

IBuilder

#### Inherited Members

[GeometryBase<Pulley\>.Body](VM.Managed.DAFUL.Builder.CPlacingConnector.GeometryBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_CPlacingConnector\_GeometryBase\_1\_Body), 
[GeometryBase<Pulley\>.Position](VM.Managed.DAFUL.Builder.CPlacingConnector.GeometryBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_CPlacingConnector\_GeometryBase\_1\_Position), 
[GeometryBase<Pulley\>.DirectionZ](VM.Managed.DAFUL.Builder.CPlacingConnector.GeometryBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_CPlacingConnector\_GeometryBase\_1\_DirectionZ), 
BuilderNamed<Pulley\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Pulley\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Pulley\>.Name, 
BuilderSymmetric<Pulley\>.Build\(Document\), 
BuilderSymmetric<Pulley\>.Symmetric, 
BuilderSymmetric<Pulley\>.CurrentSymmetric, 
BuilderBase<Pulley\>.m\_bSuccess, 
BuilderBase<Pulley\>.Build\(Document\), 
BuilderBase<Pulley\>.Build\(Document, List<string\>\), 
BuilderBase<Pulley\>.Validate\(IList<string\>\), 
BuilderBase<Pulley\>.Success\(\), 
BuilderBase<Pulley\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Pulley\>.OnFinalBuild\(string, Document\), 
BuilderBase<Pulley\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Pulley\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Pulley\>.Parameters, 
BuilderBase<Pulley\>.AddToDoc, 
BuilderBase<Pulley\>.UseChangedObject, 
BuilderBase<Pulley\>.SetPointKey, 
BuilderBase<Pulley\>.BuildObject, 
BuilderBase<Pulley\>.BuildDocument, 
BuilderBase<Pulley\>.UseInterface, 
BuilderBase<Pulley\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_CPlacingConnector_Pulley__ctor"></a> Pulley\(\)

```csharp
public Pulley()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_CPlacingConnector_Pulley_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

