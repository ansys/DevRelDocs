# ReferenceSetFace.GetMinimumDistance Method 
 

Get minimum distance

**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDFBase (in VMDFBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public virtual double GetMinimumDistance(
	IFaceInformation compare_info,
	TMatrix mat,
	TMatrix compare_mat,
	double dLengthFactor
)
```

**VB**<br />
``` VB
Public Overridable Function GetMinimumDistance ( 
	compare_info As IFaceInformation,
	mat As TMatrix,
	compare_mat As TMatrix,
	dLengthFactor As Double
) As Double
```

**C++**<br />
``` C++
public:
virtual double GetMinimumDistance(
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
override GetMinimumDistance : 
        compare_info : IFaceInformation * 
        mat : TMatrix * 
        compare_mat : TMatrix * 
        dLengthFactor : float -> float 
```


#### Parameters
&nbsp;<dl><dt>compare_info</dt><dd>Type: <a href="6bcd2cb1-8cc8-2780-7ac4-280867aef6bb">VM.Managed.IFaceInformation</a><br />The compare information</dd><dt>mat</dt><dd>Type: <a href="8970ea1a-9b2d-7e4e-a48a-089c3184b6ed">VM.Managed.TMatrix</a><br />The transformation matrix</dd><dt>compare_mat</dt><dd>Type: <a href="8970ea1a-9b2d-7e4e-a48a-089c3184b6ed">VM.Managed.TMatrix</a><br />The transformation matrix to compare</dd><dt>dLengthFactor</dt><dd>Type: System.Double<br />The length factor.</dd></dl>

#### Return Value
Type: Double<br />The minimum distance

#### Implements
<a href="b0e31360-72fb-bc7f-cf8c-ba7e75fa92fd">IFaceInformation.GetMinimumDistance(IFaceInformation, TMatrix, TMatrix, Double)</a><br />

## See Also


#### Reference
<a href="a8104da4-85cd-6700-fb45-bdfd60dc5da8">ReferenceSetFace Class</a><br /><a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />