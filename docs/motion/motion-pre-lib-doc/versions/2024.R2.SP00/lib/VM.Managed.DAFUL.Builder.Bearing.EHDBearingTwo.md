# Class EHDBearingTwo

Namespace: [VM.Managed.DAFUL.Builder.Bearing](VM.Managed.DAFUL.Builder.Bearing.md)  
Assembly: VMBldEHDBearing.dll  

```csharp
public class EHDBearingTwo : BuilderNamed<EHDBearing>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<EHDBearing\> ← 
BuilderSymmetric<EHDBearing\> ← 
BuilderNamed<EHDBearing\> ← 
[EHDBearingTwo](VM.Managed.DAFUL.Builder.Bearing.EHDBearingTwo.md)

#### Derived

[EHDBearingOne](VM.Managed.DAFUL.Builder.Bearing.EHDBearingOne.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<EHDBearing\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<EHDBearing\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<EHDBearing\>.Name, 
BuilderSymmetric<EHDBearing\>.Build\(Document\), 
BuilderSymmetric<EHDBearing\>.Symmetric, 
BuilderSymmetric<EHDBearing\>.CurrentSymmetric, 
BuilderBase<EHDBearing\>.m\_bSuccess, 
BuilderBase<EHDBearing\>.Build\(Document\), 
BuilderBase<EHDBearing\>.Build\(Document, List<string\>\), 
BuilderBase<EHDBearing\>.Validate\(IList<string\>\), 
BuilderBase<EHDBearing\>.Success\(\), 
BuilderBase<EHDBearing\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<EHDBearing\>.OnFinalBuild\(string, Document\), 
BuilderBase<EHDBearing\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<EHDBearing\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<EHDBearing\>.Parameters, 
BuilderBase<EHDBearing\>.AddToDoc, 
BuilderBase<EHDBearing\>.UseChangedObject, 
BuilderBase<EHDBearing\>.SetPointKey, 
BuilderBase<EHDBearing\>.BuildObject, 
BuilderBase<EHDBearing\>.BuildDocument, 
BuilderBase<EHDBearing\>.UseInterface, 
BuilderBase<EHDBearing\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### EHDBearingTwo\(\)

```csharp
public EHDBearingTwo()
```

## Fields

### m\_nIndex

```csharp
protected int m_nIndex
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### ActionDirectionX

```csharp
public DirectionBase ActionDirectionX { get; }
```

#### Property Value

 DirectionBase

### ActionDirectionZ

```csharp
public DirectionBase ActionDirectionZ { get; }
```

#### Property Value

 DirectionBase

### ActionGeometry

```csharp
public ObjectBase ActionGeometry { get; }
```

#### Property Value

 ObjectBase

### ActionPosition

```csharp
public PointBase ActionPosition { get; }
```

#### Property Value

 PointBase

### ActionRadius

```csharp
public Variable ActionRadius { get; set; }
```

#### Property Value

 Variable

### BaseDirectionX

```csharp
public DirectionBase BaseDirectionX { get; }
```

#### Property Value

 DirectionBase

### BaseDirectionZ

```csharp
public DirectionBase BaseDirectionZ { get; }
```

#### Property Value

 DirectionBase

### BaseGeometry

```csharp
public ObjectBase BaseGeometry { get; }
```

#### Property Value

 ObjectBase

### BasePosition

```csharp
public PointBase BasePosition { get; }
```

#### Property Value

 PointBase

### BaseRadius

```csharp
public Variable BaseRadius { get; set; }
```

#### Property Value

 Variable

### Width

```csharp
public Variable Width { get; set; }
```

#### Property Value

 Variable

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


