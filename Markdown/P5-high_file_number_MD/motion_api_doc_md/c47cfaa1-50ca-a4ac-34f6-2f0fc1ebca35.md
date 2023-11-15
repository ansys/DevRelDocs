# SetBase.FixUp Method 
 

Before destroy the old object, perform a work.

**Namespace:**&nbsp;<a href="4185d9bf-f8be-353d-9677-02b24c2871aa">VM.Managed.DAFUL.FE</a><br />**Assembly:**&nbsp;VMFE (in VMFE.dll) Version: 24.1.23299.31577

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
<a href="5de2a259-d46b-1b08-c5a6-41832ee8254e">SetBase Class</a><br /><a href="4185d9bf-f8be-353d-9677-02b24c2871aa">VM.Managed.DAFUL.FE Namespace</a><br />