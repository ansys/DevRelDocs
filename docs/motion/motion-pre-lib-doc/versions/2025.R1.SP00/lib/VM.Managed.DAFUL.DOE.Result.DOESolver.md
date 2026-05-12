#  Class DOESolver

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

### <a id="VM_Managed_DAFUL_DOE_Result_DOESolver__ctor"></a> DOESolver\(\)

```csharp
public DOESolver()
```

### <a id="VM_Managed_DAFUL_DOE_Result_DOESolver__ctor_System_String___"></a> DOESolver\(string\[\]\)

```csharp
public DOESolver(string[] arKey)
```

#### Parameters

`arKey` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Properties

### <a id="VM_Managed_DAFUL_DOE_Result_DOESolver_Times"></a> Times

```csharp
public List<double> Times { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Managed_DAFUL_DOE_Result_DOESolver_Values"></a> Values

```csharp
public SerializableDictionary<string, List<double>> Values { get; set; }
```

#### Property Value

 [SerializableDictionary](VM.Managed.DAFUL.DOE.Result.SerializableDictionary\-2.md)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

## Methods

### <a id="VM_Managed_DAFUL_DOE_Result_DOESolver_AddValues_System_String___"></a> AddValues\(string\[\]\)

```csharp
public void AddValues(string[] arValue)
```

#### Parameters

`arValue` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

