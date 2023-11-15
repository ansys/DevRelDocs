# IMassProp.SetMassProp Method 
 

Sets the mass property.

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
void SetMassProp(
	double dMass,
	VectorBase vecCenterPosition,
	OMatrix vecOrientation,
	double[] arTensor,
	bool bGlobal
)
```

**VB**<br />
``` VB
Sub SetMassProp ( 
	dMass As Double,
	vecCenterPosition As VectorBase,
	vecOrientation As OMatrix,
	arTensor As Double(),
	bGlobal As Boolean
)
```

**C++**<br />
``` C++
void SetMassProp(
	double dMass, 
	VectorBase^ vecCenterPosition, 
	OMatrix^ vecOrientation, 
	array<double>^ arTensor, 
	bool bGlobal
)
```

**F#**<br />
``` F#
abstract SetMassProp : 
        dMass : float * 
        vecCenterPosition : VectorBase * 
        vecOrientation : OMatrix * 
        arTensor : float[] * 
        bGlobal : bool -> unit 

```


#### Parameters
&nbsp;<dl><dt>dMass</dt><dd>Type: System.Double<br />The mass.</dd><dt>vecCenterPosition</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a><br />The center position.</dd><dt>vecOrientation</dt><dd>Type: <a href="f4b80ada-d468-eef1-4b2b-56c94ed391af">VM.Managed.OMatrix</a><br />The orientation.</dd><dt>arTensor</dt><dd>Type: System.Double[]<br />The tensor.</dd><dt>bGlobal</dt><dd>Type: System.Boolean<br /></dd></dl>

## See Also


#### Reference
<a href="d0f5d816-e5c2-f3f3-a67e-5bf4633fca73">IMassProp Interface</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />