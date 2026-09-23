# Property FullName
<a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_FullName"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_FullName"></a> FullName

Gets or sets the full name used to identify the coordinate system with [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md).

```csharp
string FullName { get; set; }
```

### Property Value

 string

### Remarks

The assigned value is validated as a coordinate-system name. Renaming changes the identifier used by later lookup and removal operations.

### Exceptions

 Exception

Thrown when the assigned name is empty or already identifies an entity in the analysis result.
