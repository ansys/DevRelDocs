# Interface IOperationsPythonExpressionViewModel
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.md" download="VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsPythonExpressionViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides the name and formula for a Python expression that produces a curve from a dynamic analysis result.

```csharp
public interface IOperationsPythonExpressionViewModel
```

## Properties

 [Expression](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.Expression.md\#VM\_Operations\_Post\_Interfaces\_IOperationsPythonExpressionViewModel\_Expression)

Gets or sets the Python formula evaluated for the expression and returning one real value for each evaluation time.

 [FullName](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.FullName.md\#VM\_Operations\_Post\_Interfaces\_IOperationsPythonExpressionViewModel\_FullName)

Gets or sets the full name used by expression lookup and related curve operations in the dynamic analysis result.
