# Api.OpenDocument Method (String, Boolean)
 

Opens the document.

**Namespace:**&nbsp;<a href="d4810bcf-3d65-2bb9-b9ab-5575e456eab5">VM.Managed.DAFUL.Pre</a><br />**Assembly:**&nbsp;dfpreAPI (in dfpreAPI.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public Document OpenDocument(
	string strFileName,
	bool bActivate
)
```

**VB**<br />
``` VB
Public Function OpenDocument ( 
	strFileName As String,
	bActivate As Boolean
) As Document
```

**C++**<br />
``` C++
public:
virtual Document^ OpenDocument(
	String^ strFileName, 
	bool bActivate
) sealed
```

**F#**<br />
``` F#
abstract OpenDocument : 
        strFileName : string * 
        bActivate : bool -> Document 
override OpenDocument : 
        strFileName : string * 
        bActivate : bool -> Document 
```


#### Parameters
&nbsp;<dl><dt>strFileName</dt><dd>Type: System.String<br />Name of the file.</dd><dt>bActivate</dt><dd>Type: System.Boolean<br />if set to `true` [b activate].</dd></dl>

#### Return Value
Type: <a href="3dea251e-faa0-432d-002f-eefcd34d482f">Document</a><br />The document.

#### Implements
<a href="2b1ab6b5-aca6-5291-b8a1-9efa750cf4e4">IPre.OpenDocument(String, Boolean)</a><br />

## See Also


#### Reference
<a href="781c391e-0ecb-26c9-a34d-05f715b7d907">Api Class</a><br /><a href="800f8c86-15bb-ef9e-f37e-9c297e2acb3d">OpenDocument Overload</a><br /><a href="d4810bcf-3d65-2bb9-b9ab-5575e456eab5">VM.Managed.DAFUL.Pre Namespace</a><br />