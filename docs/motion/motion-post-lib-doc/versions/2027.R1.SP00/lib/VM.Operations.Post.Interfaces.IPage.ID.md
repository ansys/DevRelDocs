# Property ID
<a id="VM_Operations_Post_Interfaces_IPage_ID"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IPage_ID"></a> ID

Gets the unique identifier assigned to [`IPage`](VM.Operations.Post.Interfaces.IPage.md) when it is created.

```csharp
Guid ID { get; }
```

### Property Value

 Guid

### Remarks

The identifier remains unchanged when [`FullName`](VM.Operations.Post.Interfaces.IPage.FullName.md) changes.
