# ObjectEventCore.OnDestroy Event
 

Occurs when [on destroy].

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
internal event EventHandler<LinkEventArgs> OnDestroy
```

**VB**<br />
``` VB
Friend Event OnDestroy As EventHandler(Of LinkEventArgs)
```

**C++**<br />
``` C++
internal:
virtual  event EventHandler<LinkEventArgs^>^ OnDestroy {
	void add (EventHandler<LinkEventArgs^>^ value);
	void remove (EventHandler<LinkEventArgs^>^ value);
}
```

**F#**<br />
``` F#
internal abstract OnDestroy : IEvent<EventHandler<LinkEventArgs>,
    LinkEventArgs>
internal override OnDestroy : IEvent<EventHandler<LinkEventArgs>,
    LinkEventArgs>
```


#### Value
Type: System.EventHandler(<a href="fce56426-d69f-2183-7b9b-55717442720f">LinkEventArgs</a>)

#### Implements
<a href="2cd9f69b-e72e-46ac-8a3c-591722d3a6a3">ILinkContainerEvent.OnDestroy</a><br />

## See Also


#### Reference
<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore Class</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />