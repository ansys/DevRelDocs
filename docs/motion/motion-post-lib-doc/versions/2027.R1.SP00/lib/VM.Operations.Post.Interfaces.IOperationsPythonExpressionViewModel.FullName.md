# Property FullName
<a id="VM_Operations_Post_Interfaces_IOperationsPythonExpressionViewModel_FullName"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsPythonExpressionViewModel_FullName"></a> FullName

Gets or sets the full name used by expression lookup and related curve operations in the dynamic analysis result.

```csharp
string FullName { get; set; }
```

### Property Value

 string

### Remarks

Setting this value validates the expression name before changing the identifier exposed by the expression.
