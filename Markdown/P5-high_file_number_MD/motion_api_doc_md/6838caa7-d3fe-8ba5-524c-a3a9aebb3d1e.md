# IOMatrix.SetOrientationEADeg Method 
 

Set data of orientation for euler angle. Unit is degree.

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
void SetOrientationEADeg(
	RotationAxes ea,
	double dAlpha,
	double dBeta,
	double dGamma
)
```

**VB**<br />
``` VB
Sub SetOrientationEADeg ( 
	ea As RotationAxes,
	dAlpha As Double,
	dBeta As Double,
	dGamma As Double
)
```

**C++**<br />
``` C++
void SetOrientationEADeg(
	RotationAxes ea, 
	double dAlpha, 
	double dBeta, 
	double dGamma
)
```

**F#**<br />
``` F#
abstract SetOrientationEADeg : 
        ea : RotationAxes * 
        dAlpha : float * 
        dBeta : float * 
        dGamma : float -> unit 

```


#### Parameters
&nbsp;<dl><dt>ea</dt><dd>Type: RotationAxes<br />The type of euler angle.</dd><dt>dAlpha</dt><dd>Type: System.Double<br />The alpha of euler angle.</dd><dt>dBeta</dt><dd>Type: System.Double<br />The beta of euler angle.</dd><dt>dGamma</dt><dd>Type: System.Double<br />The gamma of euler angle.</dd></dl>

## See Also


#### Reference
<a href="00a9a6f2-ae9f-0dcc-befd-4ddac354fd37">IOMatrix Interface</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />