# ChannelInput.FixUp Method 
 

Before destroy the old object, perform a work.

**Namespace:**&nbsp;<a href="8bb17b3f-227a-e03f-916a-5e670373e845">VM.Managed.DAFUL.Linear</a><br />**Assembly:**&nbsp;VMDLinear (in VMDLinear.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public override bool FixUp(
	ObjectBase ob
)
```

**VB**<br />
``` VB
Public Overrides Function FixUp ( 
	ob As ObjectBase
) As Boolean
```

**C++**<br />
``` C++
public:
virtual bool FixUp(
	ObjectBase^ ob
) override
```

**F#**<br />
``` F#
abstract FixUp : 
        ob : ObjectBase -> bool 
override FixUp : 
        ob : ObjectBase -> bool 
```


#### Parameters
&nbsp;<dl><dt>ob</dt><dd>Type: <a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />The old object.</dd></dl>

#### Return Value
Type: Boolean<br />`true` if success; otherwise, `false`.

## See Also


#### Reference
<a href="2b86bee5-dc40-fd27-2d4c-4ac22002b355">ChannelInput Class</a><br /><a href="8bb17b3f-227a-e03f-916a-5e670373e845">VM.Managed.DAFUL.Linear Namespace</a><br />