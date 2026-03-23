# Class OutputChannel

Namespace: [VM.Managed.DAFUL.Builder.Linear](VM.Managed.DAFUL.Builder.Linear.md)  
Assembly: VMBldLinear.dll  

```csharp
public class OutputChannel : BuilderNamed<ChannelOutput>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<ChannelOutput\> ← 
BuilderSymmetric<ChannelOutput\> ← 
BuilderNamed<ChannelOutput\> ← 
[OutputChannel](VM.Managed.DAFUL.Builder.Linear.OutputChannel.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<ChannelOutput\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<ChannelOutput\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<ChannelOutput\>.Name, 
BuilderSymmetric<ChannelOutput\>.Build\(Document\), 
BuilderSymmetric<ChannelOutput\>.Symmetric, 
BuilderSymmetric<ChannelOutput\>.CurrentSymmetric, 
BuilderBase<ChannelOutput\>.m\_bSuccess, 
BuilderBase<ChannelOutput\>.Build\(Document\), 
BuilderBase<ChannelOutput\>.Build\(Document, List<string\>\), 
BuilderBase<ChannelOutput\>.Validate\(IList<string\>\), 
BuilderBase<ChannelOutput\>.Success\(\), 
BuilderBase<ChannelOutput\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<ChannelOutput\>.OnFinalBuild\(string, Document\), 
BuilderBase<ChannelOutput\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<ChannelOutput\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<ChannelOutput\>.Parameters, 
BuilderBase<ChannelOutput\>.AddToDoc, 
BuilderBase<ChannelOutput\>.UseChangedObject, 
BuilderBase<ChannelOutput\>.SetPointKey, 
BuilderBase<ChannelOutput\>.BuildObject, 
BuilderBase<ChannelOutput\>.BuildDocument, 
BuilderBase<ChannelOutput\>.UseInterface, 
BuilderBase<ChannelOutput\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### OutputChannel\(\)

```csharp
public OutputChannel()
```

## Properties

### ActionMarker

```csharp
public IMarker ActionMarker { get; }
```

#### Property Value

 IMarker

### BaseMarker

```csharp
public OutputChannel.CheckedMarker BaseMarker { get; set; }
```

#### Property Value

 [OutputChannel](VM.Managed.DAFUL.Builder.Linear.OutputChannel.md).[CheckedMarker](VM.Managed.DAFUL.Builder.Linear.OutputChannel.CheckedMarker.md)

### Direction

```csharp
public string Direction { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ReferenceMarker

```csharp
public OutputChannel.CheckedMarker ReferenceMarker { get; set; }
```

#### Property Value

 [OutputChannel](VM.Managed.DAFUL.Builder.Linear.OutputChannel.md).[CheckedMarker](VM.Managed.DAFUL.Builder.Linear.OutputChannel.CheckedMarker.md)

### Type

```csharp
public string Type { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


