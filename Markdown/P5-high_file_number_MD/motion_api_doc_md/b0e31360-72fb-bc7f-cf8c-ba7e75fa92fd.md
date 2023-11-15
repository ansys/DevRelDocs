# IFaceInformation.GetMinimumDistance Method 
 

Gets the minimum distance.

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
double GetMinimumDistance(
	IFaceInformation compare_info,
	TMatrix mat,
	TMatrix compare_mat,
	double dLengthFactor
)
```

**VB**<br />
``` VB
Function GetMinimumDistance ( 
	compare_info As IFaceInformation,
	mat As TMatrix,
	compare_mat As TMatrix,
	dLengthFactor As Double
) As Double
```

**C++**<br />
``` C++
double GetMinimumDistance(
	IFaceInformation^ compare_info, 
	TMatrix^ mat, 
	TMatrix^ compare_mat, 
	double dLengthFactor
)
```

**F#**<br />
``` F#
abstract GetMinimumDistance : 
        compare_info : IFaceInformation * 
        mat : TMatrix * 
        compare_mat : TMatrix * 
        dLengthFactor : float -> float 

```


#### Parameters
&nbsp;<dl><dt>compare_info</dt><dd>Type: <a href="6bcd2cb1-8cc8-2780-7ac4-280867aef6bb">VM.Managed.IFaceInformation</a><br />The face information of compare.</dd><dt>mat</dt><dd>Type: <a href="8970ea1a-9b2d-7e4e-a48a-089c3184b6ed">VM.Managed.TMatrix</a><br />The matrix.</dd><dt>compare_mat</dt><dd>Type: <a href="8970ea1a-9b2d-7e4e-a48a-089c3184b6ed">VM.Managed.TMatrix</a><br />The matrix of compare.</dd><dt>dLengthFactor</dt><dd>Type: System.Double<br />The length factor.</dd></dl>

#### Return Value
Type: Double<br />The minimum distance.

## See Also


#### Reference
<a href="6bcd2cb1-8cc8-2780-7ac4-280867aef6bb">IFaceInformation Interface</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />