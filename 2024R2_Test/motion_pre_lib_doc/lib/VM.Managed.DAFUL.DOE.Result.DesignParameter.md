# Class DesignParameter

Namespace: [VM.Managed.DAFUL.DOE.Result](VM.Managed.DAFUL.DOE.Result.md)  
Assembly: VMDDOEResult.dll  

```csharp
public class DesignParameter : DOEInformationBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DOEInformationBase](VM.Managed.DAFUL.DOE.Result.DOEInformationBase.md) ← 
[DesignParameter](VM.Managed.DAFUL.DOE.Result.DesignParameter.md)

#### Inherited Members

[DOEInformationBase.Path](VM.Managed.DAFUL.DOE.Result.DOEInformationBase.md\#VM\_Managed\_DAFUL\_DOE\_Result\_DOEInformationBase\_Path), 
[DOEInformationBase.Name](VM.Managed.DAFUL.DOE.Result.DOEInformationBase.md\#VM\_Managed\_DAFUL\_DOE\_Result\_DOEInformationBase\_Name), 
[DOEInformationBase.Index](VM.Managed.DAFUL.DOE.Result.DOEInformationBase.md\#VM\_Managed\_DAFUL\_DOE\_Result\_DOEInformationBase\_Index)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### DesignParameter\(\)

```csharp
public DesignParameter()
```

## Properties

### Current

```csharp
public double Current { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Lower

```csharp
public double Lower { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Type

```csharp
public DesignParameter.ValueType Type { get; set; }
```

#### Property Value

 [DesignParameter](VM.Managed.DAFUL.DOE.Result.DesignParameter.md).[ValueType](VM.Managed.DAFUL.DOE.Result.DesignParameter.ValueType.md)

### Upper

```csharp
public double Upper { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Values

```csharp
public double[] Values { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

## Methods

### GetName\(\)

```csharp
public string GetName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)


