# PickerMultiEdge.Initialize Method 
 

Initializes a multi picker's attributes. Sets the already selected edge's keys.Whether selected objects highlight.If set to `true` add to list; otherwise, If set to `false` can remove object from already selected list.

**Namespace:**&nbsp;<a href="1c5ed3ad-7c83-7286-7fb9-90c4f0847ee4">VM.Managed.Picker</a><br />**Assembly:**&nbsp;VMPB (in VMPB.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public override void Initialize(
	List<UIntPtr> lstPtrKey,
	bool bResetHighlight,
	bool bOnlyAdd
)
```

**VB**<br />
``` VB
Public Overrides Sub Initialize ( 
	lstPtrKey As List(Of UIntPtr),
	bResetHighlight As Boolean,
	bOnlyAdd As Boolean
)
```

**C++**<br />
``` C++
public:
virtual void Initialize(
	List<UIntPtr>^ lstPtrKey, 
	bool bResetHighlight, 
	bool bOnlyAdd
) override
```

**F#**<br />
``` F#
abstract Initialize : 
        lstPtrKey : List<UIntPtr> * 
        bResetHighlight : bool * 
        bOnlyAdd : bool -> unit 
override Initialize : 
        lstPtrKey : List<UIntPtr> * 
        bResetHighlight : bool * 
        bOnlyAdd : bool -> unit 
```


#### Parameters
&nbsp;<dl><dt>lstPtrKey</dt><dd>Type: System.Collections.Generic.List(UIntPtr)<br /></dd><dt>bResetHighlight</dt><dd>Type: System.Boolean<br /></dd><dt>bOnlyAdd</dt><dd>Type: System.Boolean<br /></dd></dl>

## See Also


#### Reference
<a href="e020874a-7f62-2240-d729-33d5d2b0e0f6">PickerMultiEdge Class</a><br /><a href="1c5ed3ad-7c83-7286-7fb9-90c4f0847ee4">VM.Managed.Picker Namespace</a><br />