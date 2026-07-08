# Class Domains

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Use to get all domains within a TD instance.

```csharp
[MessagePackObject(true)]
public class Domains
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Domains](OpenTD.Domains.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Domains\(\)

```csharp
public Domains()
```

### Domains\(ThermalDesktop\)

Creates dictionaries for each type of domain. 
Domains in master drawing will create dictionary where key=domain name, value=list of connections in domain
Domains in XREF drawing will create dictionary where key=database name (name of XREF), value=list of domains
Does not determine connections for domains in XREF drawings

```csharp
public Domains(ThermalDesktop tdInstance)
```

#### Parameters

`tdInstance` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### EdgeDomains

Key = Name of domain   Value = list of connections in domain

```csharp
public Dictionary<string, List<Connection>> EdgeDomains { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>\>

### EdgeDomainsXREF

Key = Name of XREF   Value = list of domain names in XREF

```csharp
public Dictionary<string, List<string>> EdgeDomainsXREF { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### LumpDomains

Key = Name of domain   Value = list of connections in domain

```csharp
public Dictionary<string, List<Connection>> LumpDomains { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>\>

### LumpDomainsXREF

Key = Name of XREF   Value = list of domain names in XREF

```csharp
public Dictionary<string, List<string>> LumpDomainsXREF { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### NodeDomains

Key = Name of domain   Value = list of connections in domain

```csharp
public Dictionary<string, List<Connection>> NodeDomains { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>\>

### NodeDomainsXREF

Key = Name of XREF   Value = list of domain names in XREF

```csharp
public Dictionary<string, List<string>> NodeDomainsXREF { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### PathDomains

Key = Name of domain   Value = list of connections in domain

```csharp
public Dictionary<string, List<Connection>> PathDomains { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>\>

### PathDomainsXREF

Key = Name of XREF   Value = list of domain names in XREF

```csharp
public Dictionary<string, List<string>> PathDomainsXREF { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### SolidDomains

Key = Name of domain   Value = list of connections in domain

```csharp
public Dictionary<string, List<Connection>> SolidDomains { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>\>

### SolidDomainsXREF

Key = Name of XREF   Value = list of domain names in XREF

```csharp
public Dictionary<string, List<string>> SolidDomainsXREF { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### SurfaceDomains

Key = Name of domain   Value = list of connections in domain

```csharp
public Dictionary<string, List<Connection>> SurfaceDomains { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>\>

### SurfaceDomainsXREF

Key = Name of XREF   Value = list of domain names in XREF

```csharp
public Dictionary<string, List<string>> SurfaceDomainsXREF { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### TD

```csharp
[IgnoreMember]
public ThermalDesktop TD { get; set; }
```

#### Property Value

 [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Methods

### GetNames\(\)

Returns all domain names.
Call UpdateFromTD() first to synchronize with the TD instance.

```csharp
public List<string> GetNames()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

List&lt;System.String&gt;.

#### See Also

[Domains](OpenTD.Domains.md).[UpdateFromTD](OpenTD.Domains.md\#OpenTD\_Domains\_UpdateFromTD)\(\), 
[Domains](OpenTD.Domains.md).[UpdateFromTD](OpenTD.Domains.md\#OpenTD\_Domains\_UpdateFromTD\_OpenTD\_ThermalDesktop\_)\([ThermalDesktop](OpenTD.ThermalDesktop.md)\)

### UpdateFromTD\(ThermalDesktop\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD(ThermalDesktop tdInstance)
```

#### Parameters

`tdInstance` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD()
```


