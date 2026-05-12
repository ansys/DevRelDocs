#  Class RTR3D

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class RTR3D : BuilderNamed<RTR3D>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<RTR3D\> ← 
BuilderSymmetric<RTR3D\> ← 
BuilderNamed<RTR3D\> ← 
[RTR3D](VM.Managed.DAFUL.Builder.Contact.RTR3D.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<RTR3D\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<RTR3D\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<RTR3D\>.Name, 
BuilderSymmetric<RTR3D\>.Build\(Document\), 
BuilderSymmetric<RTR3D\>.Symmetric, 
BuilderSymmetric<RTR3D\>.CurrentSymmetric, 
BuilderBase<RTR3D\>.m\_bSuccess, 
BuilderBase<RTR3D\>.Build\(Document\), 
BuilderBase<RTR3D\>.Build\(Document, List<string\>\), 
BuilderBase<RTR3D\>.Validate\(IList<string\>\), 
BuilderBase<RTR3D\>.Success\(\), 
BuilderBase<RTR3D\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<RTR3D\>.OnFinalBuild\(string, Document\), 
BuilderBase<RTR3D\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<RTR3D\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<RTR3D\>.Parameters, 
BuilderBase<RTR3D\>.AddToDoc, 
BuilderBase<RTR3D\>.UseChangedObject, 
BuilderBase<RTR3D\>.SetPointKey, 
BuilderBase<RTR3D\>.BuildObject, 
BuilderBase<RTR3D\>.BuildDocument, 
BuilderBase<RTR3D\>.UseInterface, 
BuilderBase<RTR3D\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Contact_RTR3D__ctor"></a> RTR3D\(\)

```csharp
public RTR3D()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_RTR3D_ActionContactable"></a> ActionContactable

```csharp
public IContactableRigid3D ActionContactable { get; }
```

#### Property Value

 IContactableRigid3D

### <a id="VM_Managed_DAFUL_Builder_Contact_RTR3D_BaseContactable"></a> BaseContactable

```csharp
public IContactableRigid3D BaseContactable { get; }
```

#### Property Value

 IContactableRigid3D

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_RTR3D_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

