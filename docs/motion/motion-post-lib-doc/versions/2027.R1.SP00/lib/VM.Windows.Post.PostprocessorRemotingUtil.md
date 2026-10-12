# Class PostprocessorRemotingUtil
<a id="VM_Windows_Post_PostprocessorRemotingUtil"></a>

Namespace: [VM.Windows.Post](VM.Windows.Post.md)  
Assembly: VM.Windows.Post.Remoting.dll  

Provides remoting operations for starting and controlling a Motion Standalone Postprocessor process.

```csharp
public class PostprocessorRemotingUtil
```

## Constructors

 [PostprocessorRemotingUtil\(Version, string\)](VM.Windows.Post.PostprocessorRemotingUtil.\-ctor.md\#VM\_Windows\_Post\_PostprocessorRemotingUtil\_\_ctor\_System\_Version\_System\_String\_)

Initializes `PostprocessorRemotingUtil` for a Postprocessor remoting endpoint.

 [PostprocessorRemotingUtil\(Version, bool\)](VM.Windows.Post.PostprocessorRemotingUtil.\-ctor.md\#VM\_Windows\_Post\_PostprocessorRemotingUtil\_\_ctor\_System\_Version\_System\_Boolean\_)

Initializes `PostprocessorRemotingUtil` for a standard or Classic Postprocessor remoting endpoint.

## Methods

 [ImportScriptFile\(string\)](VM.Windows.Post.PostprocessorRemotingUtil.ImportScriptFile.md\#VM\_Windows\_Post\_PostprocessorRemotingUtil\_ImportScriptFile\_System\_String\_)

Runs a Python script file in the Postprocessor.

 [RunPostprocessor\(string\)](VM.Windows.Post.PostprocessorRemotingUtil.RunPostprocessor.md\#VM\_Windows\_Post\_PostprocessorRemotingUtil\_RunPostprocessor\_System\_String\_)

Starts the Postprocessor executable at the specified path when it is not already connected, then waits for its remoting service to become ready.

For a complete operations, see [Operation API Example - Run an Operation API Script](../document/operation-api/example/example_run_postprocessor_for_operation_api.md#run-an-operation-api-script).
