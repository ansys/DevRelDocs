# CADOperation.ProfilePointOfCurvesetOp.GetProfileResult Method 
 

Get profile result

**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDFBase (in VMDFBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public int GetProfileResult(
	ref bool bCloseLoop,
	ref List<VectorBase> lst
)
```

**VB**<br />
``` VB
Public Function GetProfileResult ( 
	ByRef bCloseLoop As Boolean,
	ByRef lst As List(Of VectorBase)
) As Integer
```

**C++**<br />
``` C++
public:
int GetProfileResult(
	bool% bCloseLoop, 
	List<VectorBase^>^% lst
)
```

**F#**<br />
``` F#
member GetProfileResult : 
        bCloseLoop : bool byref * 
        lst : List<VectorBase> byref -> int 

```


#### Parameters
&nbsp;<dl><dt>bCloseLoop</dt><dd>Type: System.Boolean<br />true if closed loop, otherwise false.</dd><dt>lst</dt><dd>Type: System.Collections.Generic.List(<a href="d8618877-ab49-d81c-7742-73c124462921">VectorBase</a>)<br />The list of points</dd></dl>

#### Return Value
Type: Int32<br />The number of profiles

## See Also


#### Reference
<a href="561c103a-a331-6640-70f0-45ee801951c4">CADOperation.ProfilePointOfCurvesetOp Class</a><br /><a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />