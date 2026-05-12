#  Interface IOperationsPythonExpressionViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

/// Interface representing information for the python expression view model.

```csharp
public interface IOperationsPythonExpressionViewModel
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsPythonExpressionViewModel_Expression"></a> Expression

Gets or sets the formula in the expression properties.

```csharp
string Expression { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>Expression</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
expression = dynamic_analysis.CreateExpression("Expression");
expression.Expression = "DM(\"_11/CM\")"</code></pre>

#### Remarks

Use this property to specify or retrieve the formula in the expression properties.
The formula should result in a single real value.

### <a id="VM_Operations_Post_Interfaces_IOperationsPythonExpressionViewModel_FullName"></a> FullName

Gets or sets the full name of the expression.

```csharp
string FullName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

The following example demonstrates how to use the <code>FullName</code> property:
<pre><code class="lang-csharp">filepath = "result file path"
applicationHandler = ApplicationHandler();
document = applicationHandler.GetDocument(filepath);
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics);
expresstion = dynamic_analysis.CreateExpression("Expression");
expresstion.FullName = "Expression1"</code></pre>

#### Remarks

Use this property to specify or retrieve the full name of the expression.

