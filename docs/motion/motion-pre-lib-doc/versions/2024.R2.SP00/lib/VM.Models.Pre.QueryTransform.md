# Class QueryTransform

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public class QueryTransform
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[QueryTransform](VM.Models.Pre.QueryTransform.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### QueryTransform\(\)

Initializes a new instance of the <xref href="VM.Models.Pre.QueryTransform" data-throw-if-not-resolved="false"></xref> class.

```csharp
public QueryTransform()
```

## Properties

### Count

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SingleParams

```csharp
public List<ITransformable> SingleParams { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformable](VM.Models.Pre.ITransformable.md)\>

### Singles

```csharp
public List<ITransformable> Singles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformable](VM.Models.Pre.ITransformable.md)\>

### SymmetricParams

```csharp
public List<ITransformable> SymmetricParams { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformable](VM.Models.Pre.ITransformable.md)\>

### Symmetrics

```csharp
public List<ITransformable> Symmetrics { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformable](VM.Models.Pre.ITransformable.md)\>

## Methods

### AddData\(List<ITransformable\>, ITransformable\)

Add object to transformable object container.

```csharp
public void AddData(List<ITransformable> transformables, ITransformable transformable)
```

#### Parameters

`transformables` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformable](VM.Models.Pre.ITransformable.md)\>

The transformable object container.

`transformable` [ITransformable](VM.Models.Pre.ITransformable.md)

The transformable object.

### GetDataNoParam\(List<ITransformable\>\)

Get transformable object container with single characteristic.

```csharp
public void GetDataNoParam(List<ITransformable> transformables)
```

#### Parameters

`transformables` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformable](VM.Models.Pre.ITransformable.md)\>

The transformable object container.

### GetDataParamSingle\(List<ITransformable\>\)

Get transformable object container with single and parameter characteristic.

```csharp
public void GetDataParamSingle(List<ITransformable> transformables)
```

#### Parameters

`transformables` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformable](VM.Models.Pre.ITransformable.md)\>

The transformable object container.

### GetDataParamSym\(List<ITransformable\>\)

Get transformable object container with symmetric and parameter characteristic.

```csharp
public void GetDataParamSym(List<ITransformable> transformables)
```

#### Parameters

`transformables` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformable](VM.Models.Pre.ITransformable.md)\>

The transformable object container.


