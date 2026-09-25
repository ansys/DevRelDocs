# Method Close
<a id="VM_Post_API_OutputReader_OutputReader_Close"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_Close"></a> Close\(\)

Closes [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).

```csharp
public void Close()
```

### Remarks

[`OutputReader`](VM.Post.API.OutputReader.OutputReader.md) has no method to open another result file afterward, so this call leaves the object permanently unusable. Construct a new [OutputReader\(string\)](VM.Post.API.OutputReader.OutputReader.-ctor.md) to read a result file again.
