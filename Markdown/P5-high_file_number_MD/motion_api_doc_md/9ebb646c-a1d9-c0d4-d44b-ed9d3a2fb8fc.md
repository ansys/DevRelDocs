# ContactGeomCurveset.GetPointDirection Method 
 

Gets the normal origin point and direction.

**Namespace:**&nbsp;<a href="a2f7f1a4-cf5f-0512-8b01-c33e6784deb7">VM.Managed.DAFUL.Contact</a><br />**Assembly:**&nbsp;VMDCt (in VMDCt.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public override bool GetPointDirection(
	ref VectorBase point,
	ref VectorBase direction
)
```

**VB**<br />
``` VB
Public Overrides Function GetPointDirection ( 
	ByRef point As VectorBase,
	ByRef direction As VectorBase
) As Boolean
```

**C++**<br />
``` C++
public:
virtual bool GetPointDirection(
	VectorBase^% point, 
	VectorBase^% direction
) override
```

**F#**<br />
``` F#
abstract GetPointDirection : 
        point : VectorBase byref * 
        direction : VectorBase byref -> bool 
override GetPointDirection : 
        point : VectorBase byref * 
        direction : VectorBase byref -> bool 
```


#### Parameters
&nbsp;<dl><dt>point</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a><br />The normal origin point.</dd><dt>direction</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a><br />The normal direction.</dd></dl>

#### Return Value
Type: Boolean<br />`true` if success; otherwise, `false`.

#### Implements
<a href="619749fb-d157-3fb6-2e69-d1921cc2aa37">IContactGeometry.GetPointDirection(VectorBase, VectorBase)</a><br />

## See Also


#### Reference
<a href="5da9325c-289c-27e3-fdef-83f32409d448">ContactGeomCurveset Class</a><br /><a href="a2f7f1a4-cf5f-0512-8b01-c33e6784deb7">VM.Managed.DAFUL.Contact Namespace</a><br />