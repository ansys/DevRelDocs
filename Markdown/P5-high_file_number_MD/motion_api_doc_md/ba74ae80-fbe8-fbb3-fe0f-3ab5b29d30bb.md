# ObjectBaseVisibleEvent.AfterUndo Method 
 

**Namespace:**&nbsp;<a href="020ae66c-e7fd-06c3-3705-b7f5a6eecb6b">VM.Managed.History</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public override void AfterUndo(
	HistoryEventArgs args
)
```

**VB**<br />
``` VB
Public Overrides Sub AfterUndo ( 
	args As HistoryEventArgs
)
```

**C++**<br />
``` C++
public:
virtual void AfterUndo(
	HistoryEventArgs^ args
) override
```

**F#**<br />
``` F#
abstract AfterUndo : 
        args : HistoryEventArgs -> unit 
override AfterUndo : 
        args : HistoryEventArgs -> unit 
```


#### Parameters
&nbsp;<dl><dt>args</dt><dd>Type: HistoryEventArgs<br /></dd></dl>

## See Also


#### Reference
<a href="bb4f82ff-6f18-cbef-0f0d-009fd1954162">ObjectBaseVisibleEvent Class</a><br /><a href="020ae66c-e7fd-06c3-3705-b7f5a6eecb6b">VM.Managed.History Namespace</a><br />