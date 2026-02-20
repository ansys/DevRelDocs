# Interface IDomainManager

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Use to manage domains in TD. Use ThermalDesktop.GetDomainManager() to get
an IDomainManager for that instance of TD.

```csharp
public interface IDomainManager
```

## Methods

### CreateDomain\(string, DomainType, IEnumerable<Connection\>\)

```csharp
void CreateDomain(string domainName, DomainType type, IEnumerable<Connection> items)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`type` [DomainType](OpenTD.DomainType.md)

`items` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

### DeleteDomain\(string\)

```csharp
void DeleteDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetAnysetDomain\(string\)

```csharp
List<EntityDescriptor> GetAnysetDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[EntityDescriptor](OpenTD.EntityDescriptor.md)\>

### GetDomain\(string\)

```csharp
List<EntityDescriptor> GetDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[EntityDescriptor](OpenTD.EntityDescriptor.md)\>

### GetDomainNames\(out List<string\>, out List<string\>, out List<DomainType\>\)

```csharp
void GetDomainNames(out List<string> domainNames, out List<string> dbNames, out List<DomainType> domainTypes)
```

#### Parameters

`domainNames` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`dbNames` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`domainTypes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DomainType](OpenTD.DomainType.md)\>

### GetDomainNodes\(string\)

```csharp
List<Node> GetDomainNodes(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Node](OpenTD.Node.md)\>

### GetEdgeDomain\(string\)

```csharp
List<Connection> GetEdgeDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### GetLumpDomain\(string\)

```csharp
List<Connection> GetLumpDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### GetNodeDomain\(string\)

```csharp
List<Connection> GetNodeDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### GetPathDomain\(string\)

```csharp
List<Connection> GetPathDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### GetSolidDomain\(string\)

```csharp
List<Connection> GetSolidDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### GetSurfaceDomain\(string\)

```csharp
List<Connection> GetSurfaceDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### RenameDomain\(string, string\)

```csharp
void RenameDomain(string oldName, string newName)
```

#### Parameters

`oldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`newName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetDomain\(string, DomainType, IEnumerable<Connection\>\)

```csharp
void SetDomain(string domainName, DomainType type, IEnumerable<Connection> items)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`type` [DomainType](OpenTD.DomainType.md)

`items` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[GetDomainManager](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_GetDomainManager)\(\)


