# Class QueryTransform

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the Transformable object for query.

```csharp
public class QueryTransform
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[QueryTransform](VM.Managed.QueryTransform.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### QueryTransform\(\)

Initializes a new instance of the <xref href="VM.Managed.QueryTransform" data-throw-if-not-resolved="false"></xref> class.

```csharp
public QueryTransform()
```

## Properties

### Count

Gets the total count of transformable object containers.

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Single

Gets or sets the transformable object container with single characteristic.

```csharp
public List<ITransformable> Single { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformable](VM.Managed.ITransformable.md)\>

### SingleParam

Gets or sets the transformable object container with single and parameter characteristic.

```csharp
public List<ITransformable> SingleParam { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformable](VM.Managed.ITransformable.md)\>

### Sym

Gets or sets the transformable object container with symmetric characteristic.

```csharp
public List<ITransformable> Sym { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformable](VM.Managed.ITransformable.md)\>

### SymParam

Gets or sets the transformable object container with symmetric and parameter characteristic.

```csharp
public List<ITransformable> SymParam { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformable](VM.Managed.ITransformable.md)\>

## Methods

### AddData\(List<ITransformable\>, ITransformable\)

```csharp
public void AddData(List<ITransformable> lstITra, ITransformable ITra)
```

#### Parameters

`lstITra` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformable](VM.Managed.ITransformable.md)\>

`ITra` [ITransformable](VM.Managed.ITransformable.md)

### GetDataNoParam\(List<ITransformable\>\)

```csharp
public void GetDataNoParam(List<ITransformable> lstITra)
```

#### Parameters

`lstITra` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformable](VM.Managed.ITransformable.md)\>

### GetDataParamSingle\(List<ITransformable\>\)

```csharp
public void GetDataParamSingle(List<ITransformable> lstITra)
```

#### Parameters

`lstITra` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformable](VM.Managed.ITransformable.md)\>

### GetDataParamSym\(List<ITransformable\>\)

```csharp
public void GetDataParamSym(List<ITransformable> lstITra)
```

#### Parameters

`lstITra` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ITransformable](VM.Managed.ITransformable.md)\>


