# ProfileSprocketBase.Calculation_line_Equation Method 
 

Find line equation

**Namespace:**&nbsp;<a href="384424da-bbd5-0838-02ab-322bdc89f184">VM.Managed.CAD.Sprocket</a><br />**Assembly:**&nbsp;VMDSprocket (in VMDSprocket.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
protected void Calculation_line_Equation(
	VectorBase _ptArbitrary,
	double _dGradient,
	ref double _dConstant
)
```

**VB**<br />
``` VB
Protected Sub Calculation_line_Equation ( 
	_ptArbitrary As VectorBase,
	_dGradient As Double,
	ByRef _dConstant As Double
)
```

**C++**<br />
``` C++
protected:
void Calculation_line_Equation(
	VectorBase^ _ptArbitrary, 
	double _dGradient, 
	double% _dConstant
)
```

**F#**<br />
``` F#
member Calculation_line_Equation : 
        _ptArbitrary : VectorBase * 
        _dGradient : float * 
        _dConstant : float byref -> unit 

```


#### Parameters
&nbsp;<dl><dt>_ptArbitrary</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a><br />The arbitrary point.</dd><dt>_dGradient</dt><dd>Type: System.Double<br />y=mx+n`m`</dd><dt>_dConstant</dt><dd>Type: System.Double<br />y=mx+n`n`</dd></dl>

## See Also


#### Reference
<a href="79df9a05-6e1f-62d6-4d88-49a9c4e1e44c">ProfileSprocketBase Class</a><br /><a href="384424da-bbd5-0838-02ab-322bdc89f184">VM.Managed.CAD.Sprocket Namespace</a><br />