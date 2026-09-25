# Property FullName
<a id="VM_Operations_Post_Interfaces_IPage_FullName"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IPage_FullName"></a> FullName

Gets or sets the display name used to identify [`IPage`](VM.Operations.Post.Interfaces.IPage.md).

```csharp
string FullName { get; set; }
```

### Property Value

 string

### Remarks

Changing `FullName` changes the page name without changing [`ID`](VM.Operations.Post.Interfaces.IPage.ID.md).
