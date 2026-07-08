# Class DOESolver

Namespace: [VM.Managed.DAFUL.DOE.Result](VM.Managed.DAFUL.DOE.Result.md)  
Assembly: VMDDOEResult.dll  

```csharp
public class DOESolver
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DOESolver](VM.Managed.DAFUL.DOE.Result.DOESolver.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### DOESolver\(\)

```csharp
public DOESolver()
```

### DOESolver\(string\[\]\)

```csharp
public DOESolver(string[] arKey)
```

#### Parameters

`arKey` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Properties

### Times

```csharp
public List<double> Times { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### Values

```csharp
public SerializableDictionary<string, List<double>> Values { get; set; }
```

#### Property Value

 [SerializableDictionary](VM.Managed.DAFUL.DOE.Result.SerializableDictionary\-2.md)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

## Methods

### AddValues\(string\[\]\)

```csharp
public void AddValues(string[] arValue)
```

#### Parameters

`arValue` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]


