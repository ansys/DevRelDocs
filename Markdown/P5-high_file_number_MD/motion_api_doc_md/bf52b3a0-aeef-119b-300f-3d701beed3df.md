# Document.OnContainerDestroy Method 
 

Called when [container destroy].

Called when [container destroy].

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
protected override void OnContainerDestroy(
	Object obj,
	LinkEventArgs args
)
```

**VB**<br />
``` VB
Protected Overrides Sub OnContainerDestroy ( 
	obj As Object,
	args As LinkEventArgs
)
```

**C++**<br />
``` C++
protected:
virtual void OnContainerDestroy(
	Object^ obj, 
	LinkEventArgs^ args
) override
```

**F#**<br />
``` F#
abstract OnContainerDestroy : 
        obj : Object * 
        args : LinkEventArgs -> unit 
override OnContainerDestroy : 
        obj : Object * 
        args : LinkEventArgs -> unit 
```


#### Parameters
&nbsp;<dl><dt>obj</dt><dd>Type: System.Object<br />The object.The object.</dd><dt>args</dt><dd>Type: <a href="fce56426-d69f-2183-7b9b-55717442720f">VM.Managed.LinkEventArgs</a><br />The <a href="fce56426-d69f-2183-7b9b-55717442720f">LinkEventArgs</a> instance containing the event data.The <a href="fce56426-d69f-2183-7b9b-55717442720f">LinkEventArgs</a> instance containing the event data.</dd></dl>

## See Also


#### Reference
<a href="3dea251e-faa0-432d-002f-eefcd34d482f">Document Class</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />