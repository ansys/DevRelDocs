# Class BooleanBase<T\>

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public abstract class BooleanBase<T> : IBuilder where T : Builder, new()
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BooleanBase<T\>](VM.Managed.DAFUL.Builder.BooleanBase\-1.md)

#### Implements

[IBuilder](VM.Managed.DAFUL.Builder.IBuilder.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### BooleanBase\(\)

```csharp
protected BooleanBase()
```

## Fields

### m\_bSuccess

```csharp
protected bool m_bSuccess
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m\_bSym

```csharp
protected bool m_bSym
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### Argument

```csharp
protected virtual string Argument { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### AvailableOperation

```csharp
public bool AvailableOperation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BuildObject

```csharp
public ObjectBase BuildObject { get; }
```

#### Property Value

 ObjectBase

### ExtraArgument

```csharp
protected virtual string ExtraArgument { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Parameters

```csharp
public PickedResult[] Parameters { get; set; }
```

#### Property Value

 [PickedResult](VM.Managed.DAFUL.Builder.PickedResult.md)\[\]

### TargetConnectable

```csharp
public virtual Body TargetConnectable { get; }
```

#### Property Value

 Body

### ToolConnectable

```csharp
public virtual Body ToolConnectable { get; }
```

#### Property Value

 Body

### Type

```csharp
protected abstract string Type { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### Build\(Document\)

```csharp
public virtual void Build(Document doc)
```

#### Parameters

`doc` Document

### Build\(Document, List<string\>\)

```csharp
public void Build(Document docToAdd, List<string> lstSetPointKeys)
```

#### Parameters

`docToAdd` Document

`lstSetPointKeys` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### BuildCoreCore\(Document\)

```csharp
protected void BuildCoreCore(Document doc)
```

#### Parameters

`doc` Document

### BuildTargetTool\(Builder, Builder\)

```csharp
protected virtual void BuildTargetTool(Builder buiTarget, Builder buiTool)
```

#### Parameters

`buiTarget` Builder

`buiTool` Builder

### CheckSymmetric\(Document, List<Body\>\)

```csharp
protected int CheckSymmetric(Document doc, List<Body> lstBody)
```

#### Parameters

`doc` Document

`lstBody` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Body\>

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DeleteToolAllBody\(\)

```csharp
protected void DeleteToolAllBody()
```

### DeleteToolBody\(\)

```csharp
protected virtual void DeleteToolBody()
```

### DeserializeBuilder\(Builder\)

```csharp
protected Builder DeserializeBuilder(Builder builder)
```

#### Parameters

`builder` Builder

#### Returns

 Builder

### GetSymmetricBody\(Body\)

```csharp
protected Body GetSymmetricBody(Body bodyTarget)
```

#### Parameters

`bodyTarget` Body

#### Returns

 Body

### GetSymmetricBuilder\(Builder\)

```csharp
protected Builder GetSymmetricBuilder(Builder buiTarget)
```

#### Parameters

`buiTarget` Builder

#### Returns

 Builder

### NullSymmetricBuilder\(Builder\)

```csharp
protected void NullSymmetricBuilder(Builder buiTarget)
```

#### Parameters

`buiTarget` Builder

### RemoveBody\(Body\)

```csharp
protected void RemoveBody(Body body)
```

#### Parameters

`body` Body

### SetSymmetricBuilder\(Builder, Builder\)

```csharp
protected void SetSymmetricBuilder(Builder buiTarget, Builder buiValue)
```

#### Parameters

`buiTarget` Builder

`buiValue` Builder

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


