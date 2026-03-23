# Class GearSetBase<T\>

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public abstract class GearSetBase<T> : OpenDesigner<T>, IBuilder where T : ObjectBase, new()
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<T\> ← 
BuilderSymmetric<T\> ← 
BuilderNamed<T\> ← 
[OpenDesigner<T\>](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md) ← 
[GearSetBase<T\>](VM.Managed.DAFUL.Builder.GearTrain.GearSetBase\-1.md)

#### Implements

IBuilder

#### Inherited Members

[OpenDesigner<T\>.OnPostBuild\(ObjectBase, Document\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostBuild\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document\_), 
[OpenDesigner<T\>.OnPostAddDoc\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_OnPostAddDoc\_VM\_Managed\_ObjectBase\_), 
[OpenDesigner<T\>.HiddenDocument](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_HiddenDocument), 
[OpenDesigner<T\>.AlwaysDesignerOpen](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_AlwaysDesignerOpen), 
[OpenDesigner<T\>.ShowDesigner](VM.Managed.DAFUL.Builder.GearTrain.OpenDesigner\-1.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_OpenDesigner\_1\_ShowDesigner), 
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

### GearSetBase\(\)

```csharp
protected GearSetBase()
```

## Fields

### m\_bUseAdvanced

```csharp
protected bool m_bUseAdvanced
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m\_bUseKissSoftInterface

```csharp
protected bool m_bUseKissSoftInterface
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### CenterDistance

```csharp
protected virtual string[] CenterDistance { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### Color

```csharp
public string Color { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### FaceWidth

```csharp
protected virtual string[] FaceWidth { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### GetName

```csharp
protected virtual string GetName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### NumberOfGear

```csharp
protected virtual int NumberOfGear { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfTeeth

```csharp
protected virtual string[] NumberOfTeeth { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### ProfileShift

```csharp
protected virtual string[] ProfileShift { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Methods

### OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### OnPostBuild\(ObjectBase, Document\)

```csharp
protected override bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

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


