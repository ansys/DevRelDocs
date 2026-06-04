#  Interface IOperationsEigenValueAnalysisResultViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for an eigenvalue analysis result view model.

```csharp
public interface IOperationsEigenValueAnalysisResultViewModel : IOperationAnalysisResultViewModel, IOperationsBase
```

#### Implements

[IOperationAnalysisResultViewModel](VM.Operations.Post.Interfaces.IOperationAnalysisResultViewModel.md), 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_Frame"></a> Frame

Gets or sets the frame number to be read when loading animation for EigenValue analysis type.

```csharp
uint Frame { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Examples

The following example demonstrates how to use the <code>Frame</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
eigenval_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Eigenvalue);
eigenval_analysis.Frame = 100</code></pre>

#### Remarks

Use this property to specify or retrieve the frame number to load for animations in EigenValue analysis.

### <a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_TargetSamplingTime"></a> TargetSamplingTime

Gets or sets the target sampling time.

```csharp
double TargetSamplingTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Examples

The following example demonstrates how to use the <code>TargetSamplingTime</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
eigenval_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Eigenvalue);
times = eigenval_analysis.GetSamplingTimes();
convertedtimes = list(times);
eigenval_analysis.TargetSamplingTime = convertedtimes[1];</code></pre>

#### Remarks

This property allows you to select and set one specific sampling time from multiple available sampling times.

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_GetFrequencies"></a> GetFrequencies\(\)

Retrieves all instances of frequencies.

```csharp
IEnumerable<IOperationsFrequencyViewModel> GetFrequencies()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IOperationsFrequencyViewModel](VM.Operations.Post.Interfaces.IOperationsFrequencyViewModel.md)\>

An enumerable collection of <xref href="VM.Operations.Post.Interfaces.IOperationsFrequencyViewModel" data-throw-if-not-resolved="false"></xref> representing the frequency instances.

#### Examples

The following example demonstrates how to use the <code>GetFrequencies</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
eigenval_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Eigenvalue);
frequencies = eigenval_analysis.GetFrequencies();</code></pre>

#### Remarks

This method finds and returns all instances of frequencies.

### <a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_GetFrequency_System_Int32_"></a> GetFrequency\(int\)

Retrieves the frequency instance for the specified sampling time index.

```csharp
IOperationsFrequencyViewModel GetFrequency(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The index of the target sampling time.

#### Returns

 [IOperationsFrequencyViewModel](VM.Operations.Post.Interfaces.IOperationsFrequencyViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsFrequencyViewModel" data-throw-if-not-resolved="false"></xref> representing the frequency for the specified index.

#### Examples

The following example demonstrates how to use the <code>GetFrequency</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
eigenval_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Eigenvalue);
frequency = eigenval_analysis.GetFrequency(3);</code></pre>

#### Remarks

This method finds and returns the frequency instance corresponding to the provided sampling time index.

### <a id="VM_Operations_Post_Interfaces_IOperationsEigenValueAnalysisResultViewModel_GetSamplingTimes"></a> GetSamplingTimes\(\)

Retrieves an array of sampling times.

```csharp
double[] GetSamplingTimes()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

An array of doubles representing the available sampling times.

#### Examples

The following example demonstrates how to use the <code>GetSamplingTimes</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
eigenval_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Eigenvalue);
times = eigenval_analysis.GetSamplingTimes();</code></pre>

#### Remarks

This method extracts and returns the array of available sampling times.

