# <a id="OpenTD_IDomainManager"></a> Interface IDomainManager

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Use to manage domains in TD. Use ThermalDesktop.GetDomainManager() to get
an IDomainManager for that instance of TD.

```csharp
public interface IDomainManager
```

## Methods

### <a id="OpenTD_IDomainManager_CreateDomain_System_String_OpenTD_DomainType_System_Collections_Generic_IEnumerable_OpenTD_Connection__"></a> CreateDomain\(string, DomainType, IEnumerable<Connection\>\)

```csharp
void CreateDomain(string domainName, DomainType type, IEnumerable<Connection> items)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`type` [DomainType](OpenTD.DomainType.md)

`items` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

### <a id="OpenTD_IDomainManager_DeleteDomain_System_String_"></a> DeleteDomain\(string\)

```csharp
void DeleteDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_IDomainManager_GetAnysetDomain_System_String_"></a> GetAnysetDomain\(string\)

```csharp
List<EntityDescriptor> GetAnysetDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[EntityDescriptor](OpenTD.EntityDescriptor.md)\>

### <a id="OpenTD_IDomainManager_GetDomain_System_String_"></a> GetDomain\(string\)

```csharp
List<EntityDescriptor> GetDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[EntityDescriptor](OpenTD.EntityDescriptor.md)\>

### <a id="OpenTD_IDomainManager_GetDomainNames_System_Collections_Generic_List_System_String___System_Collections_Generic_List_System_String___System_Collections_Generic_List_OpenTD_DomainType___"></a> GetDomainNames\(out List<string\>, out List<string\>, out List<DomainType\>\)

```csharp
void GetDomainNames(out List<string> domainNames, out List<string> dbNames, out List<DomainType> domainTypes)
```

#### Parameters

`domainNames` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`dbNames` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`domainTypes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DomainType](OpenTD.DomainType.md)\>

### <a id="OpenTD_IDomainManager_GetDomainNodes_System_String_"></a> GetDomainNodes\(string\)

```csharp
List<Node> GetDomainNodes(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Node](OpenTD.Node.md)\>

### <a id="OpenTD_IDomainManager_GetEdgeDomain_System_String_"></a> GetEdgeDomain\(string\)

```csharp
List<Connection> GetEdgeDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### <a id="OpenTD_IDomainManager_GetLumpDomain_System_String_"></a> GetLumpDomain\(string\)

```csharp
List<Connection> GetLumpDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### <a id="OpenTD_IDomainManager_GetNodeDomain_System_String_"></a> GetNodeDomain\(string\)

```csharp
List<Connection> GetNodeDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### <a id="OpenTD_IDomainManager_GetPathDomain_System_String_"></a> GetPathDomain\(string\)

```csharp
List<Connection> GetPathDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### <a id="OpenTD_IDomainManager_GetSolidDomain_System_String_"></a> GetSolidDomain\(string\)

```csharp
List<Connection> GetSolidDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### <a id="OpenTD_IDomainManager_GetSurfaceDomain_System_String_"></a> GetSurfaceDomain\(string\)

```csharp
List<Connection> GetSurfaceDomain(string domainName)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### <a id="OpenTD_IDomainManager_RenameDomain_System_String_System_String_"></a> RenameDomain\(string, string\)

```csharp
void RenameDomain(string oldName, string newName)
```

#### Parameters

`oldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`newName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_IDomainManager_SetDomain_System_String_OpenTD_DomainType_System_Collections_Generic_IEnumerable_OpenTD_Connection__"></a> SetDomain\(string, DomainType, IEnumerable<Connection\>\)

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

