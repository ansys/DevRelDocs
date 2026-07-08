#  Class DOEPre

Namespace: [VM.Managed.DAFUL.DOE.Result](VM.Managed.DAFUL.DOE.Result.md)  
Assembly: VMDDOEResult.dll  

```csharp
public class DOEPre
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DOEPre](VM.Managed.DAFUL.DOE.Result.DOEPre.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_DOE_Result_DOEPre__ctor"></a> DOEPre\(\)

```csharp
public DOEPre()
```

### <a id="VM_Managed_DAFUL_DOE_Result_DOEPre__ctor_VM_Managed_DAFUL_DOE_Result_ConfiguraionInfo_"></a> DOEPre\(ConfiguraionInfo\)

```csharp
public DOEPre(ConfiguraionInfo info)
```

#### Parameters

`info` [ConfiguraionInfo](VM.Managed.DAFUL.DOE.Result.ConfiguraionInfo.md)

## Properties

### <a id="VM_Managed_DAFUL_DOE_Result_DOEPre_ConfiguraionInfo"></a> ConfiguraionInfo

```csharp
public ConfiguraionInfo ConfiguraionInfo { get; set; }
```

#### Property Value

 [ConfiguraionInfo](VM.Managed.DAFUL.DOE.Result.ConfiguraionInfo.md)

### <a id="VM_Managed_DAFUL_DOE_Result_DOEPre_DesignParameterMap"></a> DesignParameterMap

```csharp
public Dictionary<string, List<DesignParameter>> DesignParameterMap { get; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DesignParameter](VM.Managed.DAFUL.DOE.Result.DesignParameter.md)\>\>

### <a id="VM_Managed_DAFUL_DOE_Result_DOEPre_PerformanceIndexMap"></a> PerformanceIndexMap

```csharp
public Dictionary<string, List<PerformanceIndex>> PerformanceIndexMap { get; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PerformanceIndex](VM.Managed.DAFUL.DOE.Result.PerformanceIndex.md)\>\>

### <a id="VM_Managed_DAFUL_DOE_Result_DOEPre_RunSequence"></a> RunSequence

```csharp
public int RunSequence { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

