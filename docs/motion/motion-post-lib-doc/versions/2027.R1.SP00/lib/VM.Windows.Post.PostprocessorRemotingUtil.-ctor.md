# Constructor PostprocessorRemotingUtil
<div align="right"><a href="/lib/VM.Windows.Post.PostprocessorRemotingUtil.-ctor.md" download="VM.Windows.Post.PostprocessorRemotingUtil.-ctor.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Windows_Post_PostprocessorRemotingUtil__ctor_System_Version_System_String_"></a>

Namespace: [VM.Windows.Post](VM.Windows.Post.md)  
Assembly: VM.Windows.Post.Remoting.dll  

## <a id="VM_Windows_Post_PostprocessorRemotingUtil__ctor_System_Version_System_String_"></a> PostprocessorRemotingUtil\(Version, string\)

Initializes [`PostprocessorRemotingUtil`](VM.Windows.Post.PostprocessorRemotingUtil.md) for a Postprocessor remoting endpoint.

```csharp
public PostprocessorRemotingUtil(Version version, string suffix = "")
```

### Parameters

`version` Version

The Postprocessor version used to build the remoting endpoint and launch arguments.

`suffix` string

The optional suffix appended to the remoting endpoint name.

### Exceptions

 ArgumentNullException

Thrown when <code class="paramref">version</code> is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.

## <a id="VM_Windows_Post_PostprocessorRemotingUtil__ctor_System_Version_System_Boolean_"></a> PostprocessorRemotingUtil\(Version, bool\)

Initializes [`PostprocessorRemotingUtil`](VM.Windows.Post.PostprocessorRemotingUtil.md) for a standard or Classic Postprocessor remoting endpoint.

```csharp
public PostprocessorRemotingUtil(Version version, bool classic)
```

### Parameters

`version` Version

The Postprocessor version used to build the remoting endpoint and launch arguments.

`classic` bool

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to connect to the Classic Postprocessor endpoint. otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Exceptions

 ArgumentNullException

Thrown when <code class="paramref">version</code> is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.
