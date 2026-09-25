# Method GetAssemblyInfo
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
