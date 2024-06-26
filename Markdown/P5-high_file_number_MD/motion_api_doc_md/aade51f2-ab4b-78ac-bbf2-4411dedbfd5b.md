# GearSetRackAndPinion.Meshing Method 
 

Meshing the gears.

**Namespace:**&nbsp;<a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain</a><br />**Assembly:**&nbsp;VMDGearTrain (in VMDGearTrain.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public override bool Meshing(
	List<IGearBuilder> lstGB
)
```

**VB**<br />
``` VB
Public Overrides Function Meshing ( 
	lstGB As List(Of IGearBuilder)
) As Boolean
```

**C++**<br />
``` C++
public:
virtual bool Meshing(
	List<IGearBuilder^>^ lstGB
) override
```

**F#**<br />
``` F#
abstract Meshing : 
        lstGB : List<IGearBuilder> -> bool 
override Meshing : 
        lstGB : List<IGearBuilder> -> bool 
```


#### Parameters
&nbsp;<dl><dt>lstGB</dt><dd>Type: System.Collections.Generic.List(<a href="fa495c45-ef33-44b4-cf7d-0a970531183f">IGearBuilder</a>)<br />The gear builder list.</dd></dl>

#### Return Value
Type: Boolean<br />

#### Implements
<a href="7c0ca342-ef22-c8ab-e13c-946905c20a6c">IGearSet.Meshing(List(IGearBuilder))</a><br />

## See Also


#### Reference
<a href="bd0d36b3-708e-d71f-5d80-9ce114e5c9a9">GearSetRackAndPinion Class</a><br /><a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain Namespace</a><br />