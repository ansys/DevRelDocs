# Document.OpenDoc Delegate
 

delegate for open document.

delegate for open document.

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public delegate Document OpenDoc(
	string strFileName,
	string strRelatedPath,
	bool bActivate
)
```

**VB**<br />
``` VB
Public Delegate Function OpenDoc ( 
	strFileName As String,
	strRelatedPath As String,
	bActivate As Boolean
) As Document
```

**C++**<br />
``` C++
public delegate Document^ OpenDoc(
	String^ strFileName, 
	String^ strRelatedPath, 
	bool bActivate
)
```

**F#**<br />
``` F#
type OpenDoc = 
    delegate of 
        strFileName : string * 
        strRelatedPath : string * 
        bActivate : bool -> Document
```


#### Parameters
&nbsp;<dl><dt>strFileName</dt><dd>Type: System.String<br /></dd><dt>strRelatedPath</dt><dd>Type: System.String<br /></dd><dt>bActivate</dt><dd>Type: System.Boolean<br /></dd></dl>

#### Return Value
Type: <a href="3dea251e-faa0-432d-002f-eefcd34d482f">Document</a>

## See Also


#### Reference
<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />