# LinkContainer.OnChildUpdated Method 
 

Called when [child updated].

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
protected virtual void OnChildUpdated(
	Object obj,
	LinkEventArgs args
)
```

**VB**<br />
``` VB
Protected Overridable Sub OnChildUpdated ( 
	obj As Object,
	args As LinkEventArgs
)
```

**C++**<br />
``` C++
protected:
virtual void OnChildUpdated(
	Object^ obj, 
	LinkEventArgs^ args
)
```

**F#**<br />
``` F#
abstract OnChildUpdated : 
        obj : Object * 
        args : LinkEventArgs -> unit 
override OnChildUpdated : 
        obj : Object * 
        args : LinkEventArgs -> unit 
```


#### Parameters
&nbsp;<dl><dt>obj</dt><dd>Type: System.Object<br />The object.</dd><dt>args</dt><dd>Type: <a href="fce56426-d69f-2183-7b9b-55717442720f">VM.Managed.LinkEventArgs</a><br />The <a href="fce56426-d69f-2183-7b9b-55717442720f">LinkEventArgs</a> instance containing the event data.</dd></dl>

## See Also


#### Reference
<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">LinkContainer Class</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />