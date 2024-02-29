# <a id="VM_Models_Post_SourceData"></a> Class SourceData

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class SourceData : ObservableObject, IObservableObject, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[SourceData](VM.Models.Post.SourceData.md)

#### Implements

IObservableObject, 
IDisposableObject

#### Inherited Members

ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_SourceData__ctor_VM_Models_Post_ResultDocument_System_String_"></a> SourceData\(ResultDocument, string\)

```csharp
public SourceData(ResultDocument parentDocument, string pathWithoutExtension)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`pathWithoutExtension` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_SourceData_AnalysisResultCount"></a> AnalysisResultCount

```csharp
public int AnalysisResultCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_SourceData_AnalysisResults"></a> AnalysisResults

```csharp
public IEnumerable<AnalysisResult> AnalysisResults { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[AnalysisResult](VM.Models.Post.AnalysisResult.md)\>

### <a id="VM_Models_Post_SourceData_CurrentEigenvalueAanlaysisInfo"></a> CurrentEigenvalueAanlaysisInfo

```csharp
public EigenvalueAnalysisInfo CurrentEigenvalueAanlaysisInfo { get; set; }
```

#### Property Value

 [EigenvalueAnalysisInfo](VM.Models.Post.EigenvalueAnalysisInfo.md)

### <a id="VM_Models_Post_SourceData_DFRReader"></a> DFRReader

```csharp
public IDFRReader DFRReader { get; }
```

#### Property Value

 [IDFRReader](VM.Models.Post.IDFRReader.md)

### <a id="VM_Models_Post_SourceData_DefaultEigenvalueAnlaysisInfo"></a> DefaultEigenvalueAnlaysisInfo

```csharp
public EigenvalueAnalysisInfo DefaultEigenvalueAnlaysisInfo { get; }
```

#### Property Value

 [EigenvalueAnalysisInfo](VM.Models.Post.EigenvalueAnalysisInfo.md)

### <a id="VM_Models_Post_SourceData_EigenvalueAnalysisInfos"></a> EigenvalueAnalysisInfos

```csharp
public IList<EigenvalueAnalysisInfo> EigenvalueAnalysisInfos { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[EigenvalueAnalysisInfo](VM.Models.Post.EigenvalueAnalysisInfo.md)\>

### <a id="VM_Models_Post_SourceData_MetaInfo"></a> MetaInfo

```csharp
public MetaInfo MetaInfo { get; }
```

#### Property Value

 [MetaInfo](VM.Models.Post.MetaInfo.md)

### <a id="VM_Models_Post_SourceData_ModeShapeInfo"></a> ModeShapeInfo

```csharp
public ModeShapeInfo ModeShapeInfo { get; }
```

#### Property Value

 [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

### <a id="VM_Models_Post_SourceData_Name"></a> Name

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_SourceData_ParentDocument"></a> ParentDocument

```csharp
public ResultDocument ParentDocument { get; }
```

#### Property Value

 [ResultDocument](VM.Models.Post.ResultDocument.md)

### <a id="VM_Models_Post_SourceData_PrimaryAnalysisResult"></a> PrimaryAnalysisResult

```csharp
public AnalysisResult PrimaryAnalysisResult { get; }
```

#### Property Value

 [AnalysisResult](VM.Models.Post.AnalysisResult.md)

### <a id="VM_Models_Post_SourceData_ResultInfo"></a> ResultInfo

```csharp
public ResultInfo ResultInfo { get; set; }
```

#### Property Value

 [ResultInfo](VM.Models.Post.ResultInfo.md)

## Methods

### <a id="VM_Models_Post_SourceData_CreateDataState_System_Int32_"></a> CreateDataState\(int\)

```csharp
public IDataState CreateDataState(int stateID)
```

#### Parameters

`stateID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IDataState](VM.Models.Post.IDataState.md)

### <a id="VM_Models_Post_SourceData_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

