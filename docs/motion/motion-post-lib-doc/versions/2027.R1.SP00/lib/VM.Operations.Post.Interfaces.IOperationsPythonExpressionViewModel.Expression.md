# Property Expression
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.Expression.md" download="VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.Expression.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
