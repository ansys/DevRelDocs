# ConcentratedLoadBase(*TProperty*).LinkRequestUpdate Method 
 


Request for update the linked object.

참조된 객체가 갱신될 때 호출되는 이벤트.


**Namespace:**&nbsp;<a href="2176cd38-d759-6613-9416-91f34e05328d">VM.Managed.DAFUL.Flexible.Force</a><br />**Assembly:**&nbsp;VMFlexibleBase (in VMFlexibleBase.dll) Version: 24.1.0.0

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
&nbsp;<dl><dt>objNotifier</dt><dd>Type: System.Object<br />
The linked object.

참조된 객체입니다.</dd><dt>arg</dt><dd>Type: <a href="fce56426-d69f-2183-7b9b-55717442720f">VM.Managed.LinkEventArgs</a><br />
instance containing the event data.

갱신 이벤트 정보입니다..</dd></dl>

## See Also


#### Reference
<a href="003c9f77-8870-8603-7aba-b42f9109a70d">ConcentratedLoadBase(TProperty) Class</a><br /><a href="2176cd38-d759-6613-9416-91f34e05328d">VM.Managed.DAFUL.Flexible.Force Namespace</a><br />