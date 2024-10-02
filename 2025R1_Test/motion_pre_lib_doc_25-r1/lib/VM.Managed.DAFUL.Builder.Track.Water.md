#  Class Water

Namespace: [VM.Managed.DAFUL.Builder.Track](VM.Managed.DAFUL.Builder.Track.md)  
Assembly: VMBldTrack.dll  

```csharp
public class Water : BuilderNamed<Water>, IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<Water\> ← 
BuilderSymmetric<Water\> ← 
BuilderNamed<Water\> ← 
[Water](VM.Managed.DAFUL.Builder.Track.Water.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<Water\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<Water\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<Water\>.Name, 
BuilderSymmetric<Water\>.Build\(Document\), 
BuilderSymmetric<Water\>.Symmetric, 
BuilderSymmetric<Water\>.CurrentSymmetric, 
BuilderBase<Water\>.m\_bSuccess, 
BuilderBase<Water\>.Build\(Document\), 
BuilderBase<Water\>.Build\(Document, List<string\>\), 
BuilderBase<Water\>.Validate\(IList<string\>\), 
BuilderBase<Water\>.Success\(\), 
BuilderBase<Water\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<Water\>.OnFinalBuild\(string, Document\), 
BuilderBase<Water\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<Water\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<Water\>.Parameters, 
BuilderBase<Water\>.AddToDoc, 
BuilderBase<Water\>.UseChangedObject, 
BuilderBase<Water\>.SetPointKey, 
BuilderBase<Water\>.BuildObject, 
BuilderBase<Water\>.BuildDocument, 
BuilderBase<Water\>.UseInterface, 
BuilderBase<Water\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Track_Water__ctor"></a> Water\(\)

```csharp
public Water()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_Track_Water_BodyConnectable"></a> BodyConnectable

```csharp
public IConnectable BodyConnectable { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_Builder_Track_Water_DepthOfDeepWater"></a> DepthOfDeepWater

```csharp
public Variable DepthOfDeepWater { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_Track_Water_DirectionX"></a> DirectionX

```csharp
public DirectionBase DirectionX { get; }
```

#### Property Value

 DirectionBase

### <a id="VM_Managed_DAFUL_Builder_Track_Water_DirectionZ"></a> DirectionZ

```csharp
public DirectionBase DirectionZ { get; }
```

#### Property Value

 DirectionBase

### <a id="VM_Managed_DAFUL_Builder_Track_Water_LengthInXAxis"></a> LengthInXAxis

```csharp
public Variable LengthInXAxis { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Builder_Track_Water_Position"></a> Position

```csharp
public PointBase Position { get; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_Builder_Track_Water_WidthInYAxis"></a> WidthInYAxis

```csharp
public Variable WidthInYAxis { get; set; }
```

#### Property Value

 Variable

## Methods

### <a id="VM_Managed_DAFUL_Builder_Track_Water_OnPostBuild_VM_Managed_ObjectBase_VM_Managed_Document_"></a> OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

