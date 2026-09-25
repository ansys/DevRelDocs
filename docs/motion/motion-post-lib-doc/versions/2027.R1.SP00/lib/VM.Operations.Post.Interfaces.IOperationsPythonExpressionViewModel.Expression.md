# Property Expression
<a id="VM_Operations_Post_Interfaces_IOperationsPythonExpressionViewModel_Expression"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsPythonExpressionViewModel_Expression"></a> Expression

Gets or sets the Python formula evaluated for the expression and returning one real value for each evaluation time.

```csharp
string Expression { get; set; }
```

### Property Value

 string

### Remarks

The expression is evaluated over the parent result document's time values. An invalid entity reference or Python formula produces an empty curve and displays the evaluation error.
