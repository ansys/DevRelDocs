#  Class MultipleContactBase<T\>

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public abstract class MultipleContactBase<T> : BuilderNamed<T>, IBuilder where T : MultipleContactBase, new()
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<T\> ← 
BuilderSymmetric<T\> ← 
BuilderNamed<T\> ← 
[MultipleContactBase<T\>](VM.Managed.DAFUL.Builder.Contact.MultipleContactBase\-1.md)

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

### <a id="VM_Managed_DAFUL_Builder_Contact_MultipleContactBase_1__ctor"></a> MultipleContactBase\(\)

```csharp
protected MultipleContactBase()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Contact_MultipleContactBase_1_IsAllowSwitch"></a> IsAllowSwitch

```csharp
protected virtual bool IsAllowSwitch { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_Builder_Contact_MultipleContactBase_1_GetContactType"></a> GetContactType\(\)

```csharp
protected MultiContactType GetContactType()
```

#### Returns

 MultiContactType

### <a id="VM_Managed_DAFUL_Builder_Contact_MultipleContactBase_1_GetMultipleInfoList_System_Collections_Generic_List_VM_Managed_DAFUL_IContactable__"></a> GetMultipleInfoList\(List<IContactable\>\)

```csharp
public MultipleContactInfo[] GetMultipleInfoList(List<IContactable> lst)
```

#### Parameters

`lst` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<IContactable\>

#### Returns

 MultipleContactInfo\[\]

### <a id="VM_Managed_DAFUL_Builder_Contact_MultipleContactBase_1_GetPropType"></a> GetPropType\(\)

```csharp
protected string GetPropType()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

