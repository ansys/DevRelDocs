# ContainerObject(*TEventCore*).GetNewEntityName Method (String, Boolean, Int32)
 

Generate an unique DAFUL object name from the container using the prefix name.

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public string GetNewEntityName(
	string strPrefix,
	bool bUseUnderLine,
	int nNumFigure
)
```

**VB**<br />
``` VB
Public Function GetNewEntityName ( 
	strPrefix As String,
	bUseUnderLine As Boolean,
	nNumFigure As Integer
) As String
```

**C++**<br />
``` C++
public:
virtual String^ GetNewEntityName(
	String^ strPrefix, 
	bool bUseUnderLine, 
	int nNumFigure
) sealed
```

**F#**<br />
``` F#
abstract GetNewEntityName : 
        strPrefix : string * 
        bUseUnderLine : bool * 
        nNumFigure : int -> string 
override GetNewEntityName : 
        strPrefix : string * 
        bUseUnderLine : bool * 
        nNumFigure : int -> string 
```


#### Parameters
&nbsp;<dl><dt>strPrefix</dt><dd>Type: System.String<br />The DAFUL object prefix name.</dd><dt>bUseUnderLine</dt><dd>Type: System.Boolean<br />Whether use underline.</dd><dt>nNumFigure</dt><dd>Type: System.Int32<br />The Number of Figure.</dd></dl>

#### Return Value
Type: String<br />The DAFUL object name.

#### Implements
IContainer.GetNewEntityName(String, Boolean, Int32)<br />

## See Also


#### Reference
<a href="b2d0c579-7ceb-1a07-eb60-7fbc0ec075d4">ContainerObject(TEventCore) Class</a><br /><a href="9f77571c-e095-c7ea-8751-837ee64a808b">GetNewEntityName Overload</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />