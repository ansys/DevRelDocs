# Class IdDomain

Namespace: [OpenTD.RadCAD.FEModel](OpenTD.RadCAD.FEModel.md)  
Assembly: OpenTD.dll  

Lightweight domain ID holder for use with FEMeshImporter only.

```csharp
[MessagePackObject(true)]
public class IdDomain
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdDomain](OpenTD.RadCAD.FEModel.IdDomain.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### IdDomain\(\)

```csharp
public IdDomain()
```

## Fields

### ids

```csharp
public SortedDictionary<int, int> ids
```

#### Field Value

 [SortedDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.sorteddictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

## Properties

### Ids

```csharp
public ICollection<int> Ids { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

## Methods

### Add\(int\)

```csharp
public void Add(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Delete\(int\)

```csharp
public void Delete(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Replace\(int, int\)

```csharp
public void Replace(int sourceId, int destinationId)
```

#### Parameters

`sourceId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`destinationId` [int](https://learn.microsoft.com/dotnet/api/system.int32)


