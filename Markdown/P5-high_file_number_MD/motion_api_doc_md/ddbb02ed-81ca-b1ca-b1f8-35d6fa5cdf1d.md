# ConcentratedLoadBase(*TProperty*).OnDeserialization Method 
 


Called when [deserialization].

이 클래스의 data가 Load되고 나서 호출되는 함수입니다.


**Namespace:**&nbsp;<a href="2176cd38-d759-6613-9416-91f34e05328d">VM.Managed.DAFUL.Flexible.Force</a><br />**Assembly:**&nbsp;VMFlexibleBase (in VMFlexibleBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
protected override void OnDeserialization(
	Object sender
)
```

**VB**<br />
``` VB
Protected Overrides Sub OnDeserialization ( 
	sender As Object
)
```

**C++**<br />
``` C++
protected:
virtual void OnDeserialization(
	Object^ sender
) override
```

**F#**<br />
``` F#
abstract OnDeserialization : 
        sender : Object -> unit 
override OnDeserialization : 
        sender : Object -> unit 
```


#### Parameters
&nbsp;<dl><dt>sender</dt><dd>Type: System.Object<br />
The sender.

Load 관련 객체정보입니다.</dd></dl>

## See Also


#### Reference
<a href="003c9f77-8870-8603-7aba-b42f9109a70d">ConcentratedLoadBase(TProperty) Class</a><br /><a href="2176cd38-d759-6613-9416-91f34e05328d">VM.Managed.DAFUL.Flexible.Force Namespace</a><br />