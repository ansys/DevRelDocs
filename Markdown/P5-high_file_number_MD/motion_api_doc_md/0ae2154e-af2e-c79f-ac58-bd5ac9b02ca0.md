# Pre.SaveFile Method (Document, String, Boolean)
 

Saves the file.

**Namespace:**&nbsp;<a href="d4810bcf-3d65-2bb9-b9ab-5575e456eab5">VM.Managed.DAFUL.Pre</a><br />**Assembly:**&nbsp;dfpredat (in dfpredat.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public static void SaveFile(
	Document doc,
	string strFileName,
	bool bIgnoreExternChange
)
```

**VB**<br />
``` VB
Public Shared Sub SaveFile ( 
	doc As Document,
	strFileName As String,
	bIgnoreExternChange As Boolean
)
```

**C++**<br />
``` C++
public:
static void SaveFile(
	Document^ doc, 
	String^ strFileName, 
	bool bIgnoreExternChange
)
```

**F#**<br />
``` F#
static member SaveFile : 
        doc : Document * 
        strFileName : string * 
        bIgnoreExternChange : bool -> unit 

```


#### Parameters
&nbsp;<dl><dt>doc</dt><dd>Type: <a href="3dea251e-faa0-432d-002f-eefcd34d482f">VM.Managed.Document</a><br />The doc.</dd><dt>strFileName</dt><dd>Type: System.String<br />Name of the STR file.</dd><dt>bIgnoreExternChange</dt><dd>Type: System.Boolean<br />if set to `true` [b ignore extern change].</dd></dl>

## See Also


#### Reference
<a href="7453fc5e-42dc-5201-844c-19f8c701cefd">Pre Class</a><br /><a href="1135680a-528b-9bfd-4434-1ee158465f2b">SaveFile Overload</a><br /><a href="d4810bcf-3d65-2bb9-b9ab-5575e456eab5">VM.Managed.DAFUL.Pre Namespace</a><br />