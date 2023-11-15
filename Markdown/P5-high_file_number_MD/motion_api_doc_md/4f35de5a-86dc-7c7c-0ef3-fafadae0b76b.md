# INamedImpl.GetImportedCADBodyFilePath Method 
 

Get imported cad body file path.

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public static string GetImportedCADBodyFilePath(
	string strDir,
	string strBodyName,
	string strExtension
)
```

**VB**<br />
``` VB
Public Shared Function GetImportedCADBodyFilePath ( 
	strDir As String,
	strBodyName As String,
	strExtension As String
) As String
```

**C++**<br />
``` C++
public:
static String^ GetImportedCADBodyFilePath(
	String^ strDir, 
	String^ strBodyName, 
	String^ strExtension
)
```

**F#**<br />
``` F#
static member GetImportedCADBodyFilePath : 
        strDir : string * 
        strBodyName : string * 
        strExtension : string -> string 

```


#### Parameters
&nbsp;<dl><dt>strDir</dt><dd>Type: System.String<br />The directory.</dd><dt>strBodyName</dt><dd>Type: System.String<br />The body name</dd><dt>strExtension</dt><dd>Type: System.String<br />The extension name</dd></dl>

#### Return Value
Type: String

## See Also


#### Reference
<a href="4acba3f9-754f-7c5d-53c9-35f4082f30a2">INamedImpl Class</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />