# <a id="VM_Models_Post_IModeContributionResults"></a> Interface IModeContributionResults

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IModeContributionResults
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IModeContributionResults_ColorMapData"></a> ColorMapData

```csharp
IColorMapData ColorMapData { get; set; }
```

#### Property Value

 [IColorMapData](VM.Models.Post.IColorMapData.md)

### <a id="VM_Models_Post_IModeContributionResults_DataStates"></a> DataStates

```csharp
IList<IDataState> DataStates { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDataState](VM.Models.Post.IDataState.md)\>

### <a id="VM_Models_Post_IModeContributionResults_ResultType"></a> ResultType

```csharp
ModeContributionResultType ResultType { get; set; }
```

#### Property Value

 [ModeContributionResultType](VM.Models.Post.ModeContributionResultType.md)

