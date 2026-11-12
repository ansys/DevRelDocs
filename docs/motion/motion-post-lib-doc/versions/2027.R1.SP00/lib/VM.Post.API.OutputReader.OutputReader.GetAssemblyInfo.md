# Method GetAssemblyInfo
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetAssemblyInfo.md" download="VM.Post.API.OutputReader.OutputReader.GetAssemblyInfo.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_GetAssemblyInfo_VM_Enums_Post_AssemblyType_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetAssemblyInfo_VM_Enums_Post_AssemblyType_"></a> GetAssemblyInfo\(AssemblyType\)

Gets assembly information filtered by [`AssemblyType`](VM.Enums.Post.AssemblyType.md).

```csharp
public AssemblyInfo[] GetAssemblyInfo(AssemblyType assemblyType = AssemblyType.All)
```

### Parameters

`assemblyType` [AssemblyType](VM.Enums.Post.AssemblyType.md)

Assembly category used to filter the result. The default value `All` returns every assembly information entity.

### Returns

 [AssemblyInfo](VM.Models.Post.EntityTypes.Assembly.AssemblyInfo.md)\[\]

Array of assembly information matching `assemblyType`.

### Examples

```python
# Read assembly information.
assembly_info = output_reader.GetAssemblyInfo(AssemblyType.All)
```

### Remarks

When `assemblyType` is not `All`, only assembly information with the selected type is included.
