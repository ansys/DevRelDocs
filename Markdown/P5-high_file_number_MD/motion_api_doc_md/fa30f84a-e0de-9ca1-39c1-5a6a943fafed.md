# Contact(*TProperty*).LinkRequestUpdate Method 
 

Request for update the linked object.

**Namespace:**&nbsp;<a href="a2f7f1a4-cf5f-0512-8b01-c33e6784deb7">VM.Managed.DAFUL.Contact</a><br />**Assembly:**&nbsp;VMDCt (in VMDCt.dll) Version: 24.1.0.0

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
<a href="91e1c892-0325-681e-8541-503866db3be9">Contact(TProperty) Class</a><br /><a href="a2f7f1a4-cf5f-0512-8b01-c33e6784deb7">VM.Managed.DAFUL.Contact Namespace</a><br />