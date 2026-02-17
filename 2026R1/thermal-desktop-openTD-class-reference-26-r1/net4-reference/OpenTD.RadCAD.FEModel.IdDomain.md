# <a id="OpenTD_RadCAD_FEModel_IdDomain"></a> Class IdDomain

Namespace: [OpenTD.RadCAD.FEModel](OpenTD.RadCAD.FEModel.md)  
Assembly: OpenTD.dll  

Lightweight domain ID holder for use with FEMeshImporter only.

```csharp
[DataContract]
public class IdDomain
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdDomain](OpenTD.RadCAD.FEModel.IdDomain.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_RadCAD_FEModel_IdDomain__ctor"></a> IdDomain\(\)

```csharp
public IdDomain()
```

## Fields

### <a id="OpenTD_RadCAD_FEModel_IdDomain_ids"></a> ids

```csharp
[DataMember]
public SortedDictionary<int, int> ids
```

#### Field Value

 [SortedDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.sorteddictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

## Properties

### <a id="OpenTD_RadCAD_FEModel_IdDomain_Ids"></a> Ids

```csharp
public ICollection<int> Ids { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

## Methods

### <a id="OpenTD_RadCAD_FEModel_IdDomain_Add_System_Int32_"></a> Add\(int\)

```csharp
public void Add(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_FEModel_IdDomain_Delete_System_Int32_"></a> Delete\(int\)

```csharp
public void Delete(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_FEModel_IdDomain_Replace_System_Int32_System_Int32_"></a> Replace\(int, int\)

```csharp
public void Replace(int sourceId, int destinationId)
```

#### Parameters

`sourceId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`destinationId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

