#  Class InputChannel

Namespace: [VM.Managed.DAFUL.Builder.Linear](VM.Managed.DAFUL.Builder.Linear.md)  
Assembly: VMBldLinear.dll  

```csharp
public class InputChannel : BuilderNamed<ChannelInput>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<ChannelInput\> ← 
BuilderSymmetric<ChannelInput\> ← 
BuilderNamed<ChannelInput\> ← 
[InputChannel](VM.Managed.DAFUL.Builder.Linear.InputChannel.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<ChannelInput\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<ChannelInput\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<ChannelInput\>.Name, 
BuilderSymmetric<ChannelInput\>.Build\(Document\), 
BuilderSymmetric<ChannelInput\>.Symmetric, 
BuilderSymmetric<ChannelInput\>.CurrentSymmetric, 
BuilderBase<ChannelInput\>.m\_bSuccess, 
BuilderBase<ChannelInput\>.Build\(Document\), 
BuilderBase<ChannelInput\>.Build\(Document, List<string\>\), 
BuilderBase<ChannelInput\>.Validate\(IList<string\>\), 
BuilderBase<ChannelInput\>.Success\(\), 
BuilderBase<ChannelInput\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<ChannelInput\>.OnFinalBuild\(string, Document\), 
BuilderBase<ChannelInput\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<ChannelInput\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<ChannelInput\>.Parameters, 
BuilderBase<ChannelInput\>.AddToDoc, 
BuilderBase<ChannelInput\>.UseChangedObject, 
BuilderBase<ChannelInput\>.SetPointKey, 
BuilderBase<ChannelInput\>.BuildObject, 
BuilderBase<ChannelInput\>.BuildDocument, 
BuilderBase<ChannelInput\>.UseInterface, 
BuilderBase<ChannelInput\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Linear_InputChannel__ctor"></a> InputChannel\(\)

```csharp
public InputChannel()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Linear_InputChannel_Connectable"></a> Connectable

```csharp
public IConnectable Connectable { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_Builder_Linear_InputChannel_InputMode"></a> InputMode

```csharp
public string InputMode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_Linear_InputChannel_InputType"></a> InputType

```csharp
public string InputType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Builder_Linear_InputChannel_ObjectName"></a> ObjectName

```csharp
public string ObjectName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Builder_Linear_InputChannel_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_Linear_InputChannel_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

