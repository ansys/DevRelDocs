# ChannelOutput.OnLinkReserved Method 
 

**Namespace:**&nbsp;<a href="8bb17b3f-227a-e03f-916a-5e670373e845">VM.Managed.DAFUL.Linear</a><br />**Assembly:**&nbsp;VMDLinear (in VMDLinear.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
protected override void OnLinkReserved(
	ILink link,
	Object objNotifier,
	EventArgs args
)
```

**VB**<br />
``` VB
Protected Overrides Sub OnLinkReserved ( 
	link As ILink,
	objNotifier As Object,
	args As EventArgs
)
```

**C++**<br />
``` C++
protected:
virtual void OnLinkReserved(
	ILink^ link, 
	Object^ objNotifier, 
	EventArgs^ args
) override
```

**F#**<br />
``` F#
abstract OnLinkReserved : 
        link : ILink * 
        objNotifier : Object * 
        args : EventArgs -> unit 
override OnLinkReserved : 
        link : ILink * 
        objNotifier : Object * 
        args : EventArgs -> unit 
```


#### Parameters
&nbsp;<dl><dt>link</dt><dd>Type: <a href="2aafd732-e984-b254-1517-5ca896eb3de7">VM.Managed.ILink</a><br /></dd><dt>objNotifier</dt><dd>Type: System.Object<br /></dd><dt>args</dt><dd>Type: System.EventArgs<br /></dd></dl>

## See Also


#### Reference
<a href="627a20b2-5c0b-a76f-6fcf-0d5d4e75eb6e">ChannelOutput Class</a><br /><a href="8bb17b3f-227a-e03f-916a-5e670373e845">VM.Managed.DAFUL.Linear Namespace</a><br />