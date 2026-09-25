# Property Unit
<a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_Unit"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_Unit"></a> Unit

Gets the unit text supplied by the axis source, or an empty value when no unit is available.

```csharp
string Unit { get; }
```

### Property Value

 string

### Remarks

The value is read-only and is shown only when the axis source provides a non-empty unit.
