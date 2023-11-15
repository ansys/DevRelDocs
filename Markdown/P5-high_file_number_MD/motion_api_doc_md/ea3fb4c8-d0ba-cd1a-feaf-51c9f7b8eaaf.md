# LinkContainer.OnUpdate Event
 

Occurs when [on update].

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public event EventHandler<LinkEventArgs> OnUpdate
```

**VB**<br />
``` VB
Public Event OnUpdate As EventHandler(Of LinkEventArgs)
```

**C++**<br />
``` C++
public:
virtual  event EventHandler<LinkEventArgs^>^ OnUpdate {
	void add (EventHandler<LinkEventArgs^>^ value);
	void remove (EventHandler<LinkEventArgs^>^ value);
}
```

**F#**<br />
``` F#
abstract OnUpdate : IEvent<EventHandler<LinkEventArgs>,
    LinkEventArgs>
override OnUpdate : IEvent<EventHandler<LinkEventArgs>,
    LinkEventArgs>
```


#### Value
Type: System.EventHandler(<a href="fce56426-d69f-2183-7b9b-55717442720f">LinkEventArgs</a>)

#### Implements
<a href="1cfc874c-b05c-e587-6319-130c83966b2e">ILinkContainerEvent.OnUpdate</a><br />

## See Also


#### Reference
<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">LinkContainer Class</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />