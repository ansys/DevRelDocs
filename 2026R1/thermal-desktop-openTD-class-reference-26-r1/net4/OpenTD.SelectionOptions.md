# <a id="OpenTD_SelectionOptions"></a> Class SelectionOptions

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Use SelectionOptions to control how ThermalDesktop.GetSelection requests the
user to select entities from the TD graphics window.

```csharp
public class SelectionOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SelectionOptions](OpenTD.SelectionOptions.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_SelectionOptions__ctor"></a> SelectionOptions\(\)

```csharp
public SelectionOptions()
```

## Properties

### <a id="OpenTD_SelectionOptions_AllowedAcadTypes"></a> AllowedAcadTypes

Not currently used.

```csharp
public List<string> AllowedAcadTypes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_SelectionOptions_AllowedDomainTypes"></a> AllowedDomainTypes

If EnableDomains is true, only domain types in this list can be selected
by the user in TD. If null or empty, any domain type is allowed.

```csharp
public List<DomainType> AllowedDomainTypes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DomainType](OpenTD.DomainType.md)\>

### <a id="OpenTD_SelectionOptions_EnableDomains"></a> EnableDomains

If true and domains exist in the model, GetSelection will allow the user
to select domains by name in addition to or instead of picking entities
graphically. Defaults to true.

```csharp
public bool EnableDomains { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_SelectionOptions_EnableFilterDialog"></a> EnableFilterDialog

Displays the filter dialog if: 1. set true, 2. the user selects more than
one entity, and 3. the global RC Filter is turned on. Use the TD
command "RCFILTER" to toggle the RC Filter state. Unfortunately, there is
no easy way to query the filter state. Defaults to true.

```csharp
public bool EnableFilterDialog { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_SelectionOptions_EnableGroupSelection"></a> EnableGroupSelection

If true and named AutoCAD groups exist in the model, GetSelection will
allow the user to select groups by name in addition to or instead of
picking entities graphically. Defaults to true.

```csharp
public bool EnableGroupSelection { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_SelectionOptions_EnableModelBrowserSelection"></a> EnableModelBrowserSelection

If true, allows the user to select entities from the Model Browser lists,
in addition to or instead of picking entities graphically. Defaults to true.

```csharp
public bool EnableModelBrowserSelection { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_SelectionOptions_ForceSingleOperation"></a> ForceSingleOperation

Not currently used.

```csharp
public bool ForceSingleOperation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_SelectionOptions_Prompt"></a> Prompt

This will be printed to the TD commandline to prompt the user to select
entities. If blank or null, TD will use a default prompt.

```csharp
public string Prompt { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md).[GetSelection](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_GetSelection\_OpenTD\_SelectionOptions\_)\([SelectionOptions](OpenTD.SelectionOptions.md)\)

