#  Class Connector<T, TProp, TSetPositon, TSetDirection, TSetOrientation\>

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public class Connector<T, TProp, TSetPositon, TSetDirection, TSetOrientation> : BuilderNamed<T>, IBuilder where T : Connector<TProp>, new() where TProp : Property, IArgument, new() where TSetPositon : IConnectorPosition, new() where TSetDirection : IConnectorDirection, new() where TSetOrientation : IConnectorOrientation, new()
```

#### Type Parameters

`T` 

`TProp` 

`TSetPositon` 

`TSetDirection` 

`TSetOrientation` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BuilderBase<T\>](VM.Managed.DAFUL.Builder.BuilderBase\-1.md) ← 
[BuilderSymmetric<T\>](VM.Managed.DAFUL.Builder.BuilderSymmetric\-1.md) ← 
[BuilderNamed<T\>](VM.Managed.DAFUL.Builder.BuilderNamed\-1.md) ← 
[Connector<T, TProp, TSetPositon, TSetDirection, TSetOrientation\>](VM.Managed.DAFUL.Builder.Connector\-5.md)

#### Implements

[IBuilder](VM.Managed.DAFUL.Builder.IBuilder.md)

#### Inherited Members

[BuilderNamed<T\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.BuilderNamed\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderNamed\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[BuilderNamed<T\>.CheckUnit\(Document3D, Document3D, string\)](VM.Managed.DAFUL.Builder.BuilderNamed\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderNamed\_1\_CheckUnit\_VM\_Managed\_Document3D\_VM\_Managed\_Document3D\_System\_String\_), 
[BuilderNamed<T\>.Name](VM.Managed.DAFUL.Builder.BuilderNamed\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderNamed\_1\_Name), 
[BuilderSymmetric<T\>.Build\(Document\)](VM.Managed.DAFUL.Builder.BuilderSymmetric\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderSymmetric\_1\_Build\_VM\_Managed\_Document\_), 
[BuilderSymmetric<T\>.Symmetric](VM.Managed.DAFUL.Builder.BuilderSymmetric\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderSymmetric\_1\_Symmetric), 
[BuilderSymmetric<T\>.CurrentSymmetric](VM.Managed.DAFUL.Builder.BuilderSymmetric\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderSymmetric\_1\_CurrentSymmetric), 
[BuilderBase<T\>.m\_bSuccess](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_m\_bSuccess), 
[BuilderBase<T\>.Build\(Document\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Build\_VM\_Managed\_Document\_), 
[BuilderBase<T\>.Build\(Document, List<string\>\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Build\_VM\_Managed\_Document\_System\_Collections\_Generic\_List\_System\_String\_\_), 
[BuilderBase<T\>.Validate\(IList<string\>\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Validate\_System\_Collections\_Generic\_IList\_System\_String\_\_), 
[BuilderBase<T\>.Success\(\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Success), 
[BuilderBase<T\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[BuilderBase<T\>.OnFinalBuild\(string, Document\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_OnFinalBuild\_System\_String\_VM\_Managed\_Document\_), 
[BuilderBase<T\>.OnObjectChangeBuild\(string, Document\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_OnObjectChangeBuild\_System\_String\_VM\_Managed\_Document\_), 
[BuilderBase<T\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[BuilderBase<T\>.Parameters](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_Parameters), 
[BuilderBase<T\>.AddToDoc](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_AddToDoc), 
[BuilderBase<T\>.UseChangedObject](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_UseChangedObject), 
[BuilderBase<T\>.SetPointKey](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_SetPointKey), 
[BuilderBase<T\>.BuildObject](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_BuildObject), 
[BuilderBase<T\>.BuildDocument](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_BuildDocument), 
[BuilderBase<T\>.UseInterface](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_UseInterface), 
[BuilderBase<T\>.ErrorMessage](VM.Managed.DAFUL.Builder.BuilderBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BuilderBase\_1\_ErrorMessage)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Connector_5__ctor"></a> Connector\(\)

```csharp
public Connector()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Connector_5_ActionConnectable"></a> ActionConnectable

```csharp
public IConnectable ActionConnectable { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_Builder_Connector_5_AddToDoc"></a> AddToDoc

```csharp
protected override bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Connector_5_BaseConnectable"></a> BaseConnectable

```csharp
public IConnectable BaseConnectable { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_Builder_Connector_5_BuildObject"></a> BuildObject

```csharp
public override ObjectBase BuildObject { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_Builder_Connector_5_HookBeforeReplace_VM_Managed_Property_"></a> HookBeforeReplace\(Property\)

```csharp
protected virtual void HookBeforeReplace(Property propertyOriginal)
```

#### Parameters

`propertyOriginal` Property

### <a id="VM_Managed_DAFUL_Builder_Connector_5_OnPostAddDoc_VM_Managed_ObjectBase_"></a> OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_Connector_5_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

