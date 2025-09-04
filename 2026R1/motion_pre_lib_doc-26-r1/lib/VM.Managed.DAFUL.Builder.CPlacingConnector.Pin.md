#  Class Pin

Namespace: [VM.Managed.DAFUL.Builder.CPlacingConnector](VM.Managed.DAFUL.Builder.CPlacingConnector.md)  
Assembly: VMBldCPlacingConnector.dll  

```csharp
public class Pin : GeometryBase<Pin>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Pin\> ← 
BuilderSymmetric<Pin\> ← 
BuilderNamed<Pin\> ← 
[GeometryBase<Pin\>](VM.Managed.DAFUL.Builder.CPlacingConnector.GeometryBase\-1.md) ← 
[Pin](VM.Managed.DAFUL.Builder.CPlacingConnector.Pin.md)

#### Implements

IBuilder

#### Inherited Members

[GeometryBase<Pin\>.Body](VM.Managed.DAFUL.Builder.CPlacingConnector.GeometryBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_CPlacingConnector\_GeometryBase\_1\_Body), 
[GeometryBase<Pin\>.Position](VM.Managed.DAFUL.Builder.CPlacingConnector.GeometryBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_CPlacingConnector\_GeometryBase\_1\_Position), 
[GeometryBase<Pin\>.DirectionZ](VM.Managed.DAFUL.Builder.CPlacingConnector.GeometryBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_CPlacingConnector\_GeometryBase\_1\_DirectionZ), 
BuilderNamed<Pin\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Pin\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Pin\>.Name, 
BuilderSymmetric<Pin\>.Build\(Document\), 
BuilderSymmetric<Pin\>.Symmetric, 
BuilderSymmetric<Pin\>.CurrentSymmetric, 
BuilderBase<Pin\>.m\_bSuccess, 
BuilderBase<Pin\>.Build\(Document\), 
BuilderBase<Pin\>.Build\(Document, List<string\>\), 
BuilderBase<Pin\>.Validate\(IList<string\>\), 
BuilderBase<Pin\>.Success\(\), 
BuilderBase<Pin\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Pin\>.OnFinalBuild\(string, Document\), 
BuilderBase<Pin\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Pin\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Pin\>.Parameters, 
BuilderBase<Pin\>.AddToDoc, 
BuilderBase<Pin\>.UseChangedObject, 
BuilderBase<Pin\>.SetPointKey, 
BuilderBase<Pin\>.BuildObject, 
BuilderBase<Pin\>.BuildDocument, 
BuilderBase<Pin\>.UseInterface, 
BuilderBase<Pin\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_CPlacingConnector_Pin__ctor"></a> Pin\(\)

```csharp
public Pin()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_CPlacingConnector_Pin_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

