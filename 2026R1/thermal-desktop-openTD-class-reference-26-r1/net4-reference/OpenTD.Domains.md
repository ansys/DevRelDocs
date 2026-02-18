# <a id="OpenTD_Domains"></a> Class Domains

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Use to get all domains within a TD instance.

```csharp
[DataContract]
public class Domains
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Domains](OpenTD.Domains.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_Domains__ctor"></a> Domains\(\)

```csharp
public Domains()
```

### <a id="OpenTD_Domains__ctor_OpenTD_ThermalDesktop_"></a> Domains\(ThermalDesktop\)

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

### <a id="OpenTD_Domains_EdgeDomains"></a> EdgeDomains

Key = Name of domain   Value = list of connections in domain

```csharp
[DataMember]
public Dictionary<string, List<Connection>> EdgeDomains { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>\>

### <a id="OpenTD_Domains_EdgeDomainsXREF"></a> EdgeDomainsXREF

Key = Name of XREF   Value = list of domain names in XREF

```csharp
[DataMember]
public Dictionary<string, List<string>> EdgeDomainsXREF { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="OpenTD_Domains_LumpDomains"></a> LumpDomains

Key = Name of domain   Value = list of connections in domain

```csharp
[DataMember]
public Dictionary<string, List<Connection>> LumpDomains { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>\>

### <a id="OpenTD_Domains_LumpDomainsXREF"></a> LumpDomainsXREF

Key = Name of XREF   Value = list of domain names in XREF

```csharp
[DataMember]
public Dictionary<string, List<string>> LumpDomainsXREF { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="OpenTD_Domains_NodeDomains"></a> NodeDomains

Key = Name of domain   Value = list of connections in domain

```csharp
[DataMember]
public Dictionary<string, List<Connection>> NodeDomains { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>\>

### <a id="OpenTD_Domains_NodeDomainsXREF"></a> NodeDomainsXREF

Key = Name of XREF   Value = list of domain names in XREF

```csharp
[DataMember]
public Dictionary<string, List<string>> NodeDomainsXREF { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="OpenTD_Domains_PathDomains"></a> PathDomains

Key = Name of domain   Value = list of connections in domain

```csharp
[DataMember]
public Dictionary<string, List<Connection>> PathDomains { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>\>

### <a id="OpenTD_Domains_PathDomainsXREF"></a> PathDomainsXREF

Key = Name of XREF   Value = list of domain names in XREF

```csharp
[DataMember]
public Dictionary<string, List<string>> PathDomainsXREF { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="OpenTD_Domains_SolidDomains"></a> SolidDomains

Key = Name of domain   Value = list of connections in domain

```csharp
[DataMember]
public Dictionary<string, List<Connection>> SolidDomains { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>\>

### <a id="OpenTD_Domains_SolidDomainsXREF"></a> SolidDomainsXREF

Key = Name of XREF   Value = list of domain names in XREF

```csharp
[DataMember]
public Dictionary<string, List<string>> SolidDomainsXREF { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="OpenTD_Domains_SurfaceDomains"></a> SurfaceDomains

Key = Name of domain   Value = list of connections in domain

```csharp
[DataMember]
public Dictionary<string, List<Connection>> SurfaceDomains { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>\>

### <a id="OpenTD_Domains_SurfaceDomainsXREF"></a> SurfaceDomainsXREF

Key = Name of XREF   Value = list of domain names in XREF

```csharp
[DataMember]
public Dictionary<string, List<string>> SurfaceDomainsXREF { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="OpenTD_Domains_TD"></a> TD

```csharp
public ThermalDesktop TD { get; set; }
```

#### Property Value

 [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Methods

### <a id="OpenTD_Domains_GetNames"></a> GetNames\(\)

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

### <a id="OpenTD_Domains_UpdateFromTD_OpenTD_ThermalDesktop_"></a> UpdateFromTD\(ThermalDesktop\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD(ThermalDesktop tdInstance)
```

#### Parameters

`tdInstance` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### <a id="OpenTD_Domains_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD()
```

