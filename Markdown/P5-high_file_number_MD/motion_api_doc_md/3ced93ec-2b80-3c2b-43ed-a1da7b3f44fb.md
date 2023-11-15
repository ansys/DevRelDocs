# ObjectEventCore.OnDestroying Event
 

Occurs when [on destroying].

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
internal event EventHandler<LinkEventArgs> OnDestroying
```

**VB**<br />
``` VB
Friend Event OnDestroying As EventHandler(Of LinkEventArgs)
```

**C++**<br />
``` C++
internal:
virtual  event EventHandler<LinkEventArgs^>^ OnDestroying {
	void add (EventHandler<LinkEventArgs^>^ value);
	void remove (EventHandler<LinkEventArgs^>^ value);
}
```

**F#**<br />
``` F#
internal abstract OnDestroying : IEvent<EventHandler<LinkEventArgs>,
    LinkEventArgs>
internal override OnDestroying : IEvent<EventHandler<LinkEventArgs>,
    LinkEventArgs>
```


#### Value
Type: System.EventHandler(<a href="fce56426-d69f-2183-7b9b-55717442720f">LinkEventArgs</a>)

#### Implements
<a href="ea6bb6b4-f1d5-2560-19dc-6ccb096bde76">ILinkContainerEvent.OnDestroying</a><br />

## See Also


#### Reference
<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore Class</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />