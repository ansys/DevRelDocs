# <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionResults"></a> Class ModeContributionResults

Namespace: [VM.Models.Post.ModeContributionAnalysis](VM.Models.Post.ModeContributionAnalysis.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class ModeContributionResults : IModeContributionResults
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModeContributionResults](VM.Models.Post.ModeContributionAnalysis.ModeContributionResults.md)

#### Implements

[IModeContributionResults](VM.Models.Post.IModeContributionResults.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionResults__ctor"></a> ModeContributionResults\(\)

```csharp
public ModeContributionResults()
```

## Properties

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionResults_ColorMapData"></a> ColorMapData

```csharp
public IColorMapData ColorMapData { get; set; }
```

#### Property Value

 [IColorMapData](VM.Models.Post.IColorMapData.md)

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionResults_DataStates"></a> DataStates

```csharp
public IList<IDataState> DataStates { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDataState](VM.Models.Post.IDataState.md)\>

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionResults_ResultType"></a> ResultType

```csharp
public ModeContributionResultType ResultType { get; set; }
```

#### Property Value

 [ModeContributionResultType](VM.Models.Post.ModeContributionResultType.md)

