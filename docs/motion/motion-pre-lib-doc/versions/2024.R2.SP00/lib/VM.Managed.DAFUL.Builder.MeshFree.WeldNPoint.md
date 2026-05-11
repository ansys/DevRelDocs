# Class WeldNPoint

Namespace: [VM.Managed.DAFUL.Builder.MeshFree](VM.Managed.DAFUL.Builder.MeshFree.md)  
Assembly: VMBldMeshFree.dll  

```csharp
public class WeldNPoint : BuilderNamed<Weld>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Weld\> ← 
BuilderSymmetric<Weld\> ← 
BuilderNamed<Weld\> ← 
[WeldNPoint](VM.Managed.DAFUL.Builder.MeshFree.WeldNPoint.md)

#### Derived

[WeldFile](VM.Managed.DAFUL.Builder.MeshFree.WeldFile.md), 
[WeldTwoPoint](VM.Managed.DAFUL.Builder.MeshFree.WeldTwoPoint.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<Weld\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Weld\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Weld\>.Name, 
BuilderSymmetric<Weld\>.Build\(Document\), 
BuilderSymmetric<Weld\>.Symmetric, 
BuilderSymmetric<Weld\>.CurrentSymmetric, 
BuilderBase<Weld\>.m\_bSuccess, 
BuilderBase<Weld\>.Build\(Document\), 
BuilderBase<Weld\>.Build\(Document, List<string\>\), 
BuilderBase<Weld\>.Validate\(IList<string\>\), 
BuilderBase<Weld\>.Success\(\), 
BuilderBase<Weld\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Weld\>.OnFinalBuild\(string, Document\), 
BuilderBase<Weld\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Weld\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Weld\>.Parameters, 
BuilderBase<Weld\>.AddToDoc, 
BuilderBase<Weld\>.UseChangedObject, 
BuilderBase<Weld\>.SetPointKey, 
BuilderBase<Weld\>.BuildObject, 
BuilderBase<Weld\>.BuildDocument, 
BuilderBase<Weld\>.UseInterface, 
BuilderBase<Weld\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### WeldNPoint\(\)

```csharp
public WeldNPoint()
```

## Properties

### ActionBody

```csharp
protected ObjectBase ActionBody { get; set; }
```

#### Property Value

 ObjectBase

### BaseBody

```csharp
protected ObjectBase BaseBody { get; set; }
```

#### Property Value

 ObjectBase

### Color

```csharp
public string Color { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Directions

```csharp
protected List<DirectionBase> Directions { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<DirectionBase\>

### MaterialProperty

```csharp
public string MaterialProperty { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### NoOfElements

```csharp
public int NoOfElements { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Points

```csharp
protected List<PointBase> Points { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<PointBase\>

### Radius

```csharp
public Variable Radius { get; set; }
```

#### Property Value

 Variable

### Ranges

```csharp
protected List<Variable> Ranges { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Variable\>

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

### SetInputResultData\(\)

```csharp
protected virtual bool SetInputResultData()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Validate\(IList<string\>\)

```csharp
public override bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


