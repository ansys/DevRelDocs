# Constructor OutputReader
<a id="VM_Post_API_OutputReader_OutputReader__ctor_System_String_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader__ctor_System_String_"></a> OutputReader\(string\)

Initializes a new instance of the [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md) class, used to open the result file.

```csharp
public OutputReader(string filepath)
```

### Parameters

`filepath` string

The path of the result file.

### Remarks

The result file remains open until [Close\(\)](VM.Post.API.OutputReader.OutputReader.Close.md) is called.
