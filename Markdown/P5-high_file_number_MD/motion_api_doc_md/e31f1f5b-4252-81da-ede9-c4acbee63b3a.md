# Edge.GetPiecewiseCurve Method 
 

**Namespace:**&nbsp;<a href="bdeeb71e-08d7-cd91-e11a-795ab9385ff7">VM.Managed.CAD</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public static List<VectorBase> GetPiecewiseCurve(
	List<Edge> lstEdges,
	double dTol,
	double dLen,
	double dAngle,
	ref bool bCloseLoop
)
```

**VB**<br />
``` VB
Public Shared Function GetPiecewiseCurve ( 
	lstEdges As List(Of Edge),
	dTol As Double,
	dLen As Double,
	dAngle As Double,
	ByRef bCloseLoop As Boolean
) As List(Of VectorBase)
```

**C++**<br />
``` C++
public:
static List<VectorBase^>^ GetPiecewiseCurve(
	List<Edge^>^ lstEdges, 
	double dTol, 
	double dLen, 
	double dAngle, 
	bool% bCloseLoop
)
```

**F#**<br />
``` F#
static member GetPiecewiseCurve : 
        lstEdges : List<Edge> * 
        dTol : float * 
        dLen : float * 
        dAngle : float * 
        bCloseLoop : bool byref -> List<VectorBase> 

```


#### Parameters
&nbsp;<dl><dt>lstEdges</dt><dd>Type: System.Collections.Generic.List(<a href="c030ca8c-b99d-5078-8808-5500291d7405">Edge</a>)<br /></dd><dt>dTol</dt><dd>Type: System.Double<br /></dd><dt>dLen</dt><dd>Type: System.Double<br /></dd><dt>dAngle</dt><dd>Type: System.Double<br /></dd><dt>bCloseLoop</dt><dd>Type: System.Boolean<br /></dd></dl>

#### Return Value
Type: List(<a href="d8618877-ab49-d81c-7742-73c124462921">VectorBase</a>)

## See Also


#### Reference
<a href="c030ca8c-b99d-5078-8808-5500291d7405">Edge Class</a><br /><a href="bdeeb71e-08d7-cd91-e11a-795ab9385ff7">VM.Managed.CAD Namespace</a><br />