# PartMarker.LinkRequestUpdate Method 
 

Request for update the linked object.

**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDFBase (in VMDFBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
protected override void LinkRequestUpdate(
	Object objNotifier,
	LinkEventArgs arg
)
```

**VB**<br />
``` VB
Protected Overrides Sub LinkRequestUpdate ( 
	objNotifier As Object,
	arg As LinkEventArgs
)
```

**C++**<br />
``` C++
protected:
virtual void LinkRequestUpdate(
	Object^ objNotifier, 
	LinkEventArgs^ arg
) override
```

**F#**<br />
``` F#
abstract LinkRequestUpdate : 
        objNotifier : Object * 
        arg : LinkEventArgs -> unit 
override LinkRequestUpdate : 
        objNotifier : Object * 
        arg : LinkEventArgs -> unit 
```


#### Parameters
&nbsp;<dl><dt>objNotifier</dt><dd>Type: System.Object<br />The linked object.</dd><dt>arg</dt><dd>Type: <a href="fce56426-d69f-2183-7b9b-55717442720f">VM.Managed.LinkEventArgs</a><br />The <a href="fce56426-d69f-2183-7b9b-55717442720f">LinkEventArgs</a> instance containing the event data.</dd></dl>

## See Also


#### Reference
<a href="c6b447a4-79e0-4360-bdc9-2dc8b69f9a96">PartMarker Class</a><br /><a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />