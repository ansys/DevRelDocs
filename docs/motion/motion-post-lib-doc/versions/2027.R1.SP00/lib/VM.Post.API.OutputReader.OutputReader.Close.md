# Method Close
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.Close.md" download="VM.Post.API.OutputReader.OutputReader.Close.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
