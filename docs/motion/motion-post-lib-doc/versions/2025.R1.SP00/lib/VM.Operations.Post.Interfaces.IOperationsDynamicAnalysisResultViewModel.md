#  Interface IOperationsDynamicAnalysisResultViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for the dynamic analysis result view model.

```csharp
public interface IOperationsDynamicAnalysisResultViewModel : IOperationAnalysisResultViewModel, IOperationsBase
```

#### Implements

[IOperationAnalysisResultViewModel](VM.Operations.Post.Interfaces.IOperationAnalysisResultViewModel.md), 
[IOperationsBase](VM.Operations.Post.Interfaces.IOperationsBase.md)

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_CreateExpression_System_String_"></a> CreateExpression\(string\)

Creates a new function expression in the Motion Postprocessor.

```csharp
IOperationsPythonExpressionViewModel CreateExpression(string newName)
```

#### Parameters

`newName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the new function expression to be created.

#### Returns

 [IOperationsPythonExpressionViewModel](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel" data-throw-if-not-resolved="false"></xref> representing the created function expression.

#### Examples

The following example demonstrates how to use the <code>CreateExpression</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.CreateExpression("Expression");</code></pre>

#### Remarks

This method allows the creation of a new function expression within the Motion Postprocessor.
The <code class="paramref">newName</code> parameter specifies the name of the new function expression instance.

### <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_CreateVectorDisplay_System_String_System_String_"></a> CreateVectorDisplay\(string, string\)

Creates a vector display for the specified entity and characteristic.

```csharp
IOperationsVectorDisplayBaseViewModel CreateVectorDisplay(string entityName, string characteristic)
```

#### Parameters

`entityName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the target entity for the vector display.

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the characteristic. Refer to the UI for Vector Display for available characteristics.

#### Returns

 [IOperationsVectorDisplayBaseViewModel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel" data-throw-if-not-resolved="false"></xref> representing the created vector display.

#### Examples

The following example demonstrates how to use the <code>CreateVectorDisplay</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.CreateVectorDisplay("FJ_01", "Base Force");</code></pre>

#### Remarks

This method allows the creation of a vector display based on the specified entity and characteristic.
The <code class="paramref">entityName</code> parameter specifies the target entity for the vector display.
The <code class="paramref">characteristic</code> parameter specifies the characteristic to be displayed, which can be referred to in the UI for Vector Display.

### <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_SetAnimationFrame_System_Int32_"></a> SetAnimationFrame\(int\)

Sets a specified number of animation frames.

```csharp
void SetAnimationFrame(int nFrames)
```

#### Parameters

`nFrames` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of frames to load. This parameter should be within the range of 0 to the total number of frames available.

#### Examples

The following example demonstrates how to use the <code>SetAnimationFrame</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
dynamic_analysis.SetAnimationFrame(50);
SetAnimationFrame(50);</code></pre>

#### Remarks

This method sets the specified number of frames for the animation.
The number of frames to load is specified by the <code class="paramref">nFrames</code> parameter.

### <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_SetAnimationFrame_System_Collections_Generic_IEnumerable_System_Int32__"></a> SetAnimationFrame\(IEnumerable<int\>\)

Sets the specified animation frames based on the provided state IDs.

```csharp
void SetAnimationFrame(IEnumerable<int> stateIDs)
```

#### Parameters

`stateIDs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

An enumerable collection of state IDs representing the frames to load.

#### Examples

The following example demonstrates how to use the <code>SetAnimationFrame</code> method:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
stateIDs = analysis.GetStateIDArray();
skipIDs = List[int]();
py_stateIDs= list();
for stateID in stateIDs :
    py_stateIDs.append(stateID);
for i in range(0, len(py_stateIDs), 7) :
    skipIDs.Add(stateIDs[i]);
dynamic_analysis.SetAnimationFrame(skipIDs);</code></pre>

#### Remarks

This method sets only the specified frames for the animation, as indicated by the <code class="paramref">stateIDs</code> parameter.

