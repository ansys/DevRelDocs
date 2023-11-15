# PartDocument.CalcBoundingBox Method 
 

Calcs the bounding box.

**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDFBase (in VMDFBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public void CalcBoundingBox(
	IDesignFrame designFrame,
	ref double[] arResult
)
```

**VB**<br />
``` VB
Public Sub CalcBoundingBox ( 
	designFrame As IDesignFrame,
	ByRef arResult As Double()
)
```

**C++**<br />
``` C++
public:
void CalcBoundingBox(
	IDesignFrame^ designFrame, 
	array<double>^% arResult
)
```

**F#**<br />
``` F#
member CalcBoundingBox : 
        designFrame : IDesignFrame * 
        arResult : float[] byref -> unit 

```


#### Parameters
&nbsp;<dl><dt>designFrame</dt><dd>Type: <a href="507efa7f-0db5-3b33-ecab-aa90a145f703">VM.Managed.IDesignFrame</a><br />The design frame.</dd><dt>arResult</dt><dd>Type: System.Double[]<br />The ar result.</dd></dl>

## See Also


#### Reference
<a href="5e43c7d7-95e5-69cf-028c-c57e4388a528">PartDocument Class</a><br /><a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />