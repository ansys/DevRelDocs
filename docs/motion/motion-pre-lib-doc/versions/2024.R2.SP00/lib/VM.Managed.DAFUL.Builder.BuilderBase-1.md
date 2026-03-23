# Class BuilderBase<T\>

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public abstract class BuilderBase<T> : IBuilder where T : ObjectBase, new()
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BuilderBase<T\>](VM.Managed.DAFUL.Builder.BuilderBase\-1.md)

#### Implements

[IBuilder](VM.Managed.DAFUL.Builder.IBuilder.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### BuilderBase\(\)

```csharp
protected BuilderBase()
```

## Fields

### m\_bSuccess

```csharp
protected bool m_bSuccess
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### AddToDoc

```csharp
protected virtual bool AddToDoc { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BuildDocument

```csharp
protected Document BuildDocument { get; }
```

#### Property Value

 Document

### BuildObject

```csharp
public virtual ObjectBase BuildObject { get; }
```

#### Property Value

 ObjectBase

### ErrorMessage

```csharp
protected string ErrorMessage { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Parameters

```csharp
public PickedResult[] Parameters { get; set; }
```

#### Property Value

 [PickedResult](VM.Managed.DAFUL.Builder.PickedResult.md)\[\]

### SetPointKey

```csharp
protected List<SetPoint> SetPointKey { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<SetPoint\>

### UseChangedObject

```csharp
protected virtual bool UseChangedObject { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseInterface

```csharp
protected bool UseInterface { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Build\(Document\)

```csharp
public virtual void Build(Document docToAdd)
```

#### Parameters

`docToAdd` Document

### Build\(Document, List<string\>\)

```csharp
public virtual void Build(Document docToAdd, List<string> lstSetPointKeys)
```

#### Parameters

`docToAdd` Document

`lstSetPointKeys` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### OnFinalBuild\(string, Document\)

```csharp
protected virtual ObjectBase OnFinalBuild(string strObjName, Document doc)
```

#### Parameters

`strObjName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`doc` Document

#### Returns

 ObjectBase

### OnObjectChangeBuild\(string, Document\)

```csharp
protected virtual ObjectBase OnObjectChangeBuild(string strObjName, Document doc)
```

#### Parameters

`strObjName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`doc` Document

#### Returns

 ObjectBase

### OnPostAddDoc\(ObjectBase\)

```csharp
protected virtual void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

### OnPostBuild\(ObjectBase, Document\)

```csharp
protected virtual bool OnPostBuild(ObjectBase obCreated, Document doc)
```

#### Parameters

`obCreated` ObjectBase

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Success\(\)

```csharp
public bool Success()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Validate\(IList<string\>\)

```csharp
public virtual bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


