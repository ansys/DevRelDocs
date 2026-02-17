# <a id="OpenTD_Utility_PropertyMap"></a> Class PropertyMap

Namespace: [OpenTD.Utility](OpenTD.Utility.md)  
Assembly: OpenTD.dll  

Used by the ObjectMapper to find matching properties between two objects.

```csharp
public class PropertyMap
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PropertyMap](OpenTD.Utility.PropertyMap.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Properties

### <a id="OpenTD_Utility_PropertyMap_SourceProperty"></a> SourceProperty

```csharp
public PropertyInfo SourceProperty { get; set; }
```

#### Property Value

 [PropertyInfo](https://learn.microsoft.com/dotnet/api/system.reflection.propertyinfo)

### <a id="OpenTD_Utility_PropertyMap_TargetProperty"></a> TargetProperty

```csharp
public PropertyInfo TargetProperty { get; set; }
```

#### Property Value

 [PropertyInfo](https://learn.microsoft.com/dotnet/api/system.reflection.propertyinfo)

## Methods

### <a id="OpenTD_Utility_PropertyMap_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## See Also

[ObjectMapper](OpenTD.Utility.ObjectMapper.md)

