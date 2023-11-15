# ApiStartOptions.ActionOnLicenseWarning Property 
 

Action for license warning message.

**Namespace:**&nbsp;<a href="d4810bcf-3d65-2bb9-b9ab-5575e456eab5">VM.Managed.DAFUL.Pre</a><br />**Assembly:**&nbsp;dfpreAPI (in dfpreAPI.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public Action<string, string> ActionOnLicenseWarning {
	get;
 set; }
```

**VB**<br />
``` VB
Public Property ActionOnLicenseWarning As Action(Of String, String)
		Get
	Set
```

**C++**<br />
``` C++
public:
property Action<String^, String^>^ ActionOnLicenseWarning {
		Action<String^, String^>^ get ();
	void set (Action<String^, String^>^ value);
}
```

**F#**<br />
``` F#
member ActionOnLicenseWarning : Action<string, string> with 
		get, set

```


#### Property Value
Type: Action(String, String)

## See Also


#### Reference
<a href="68947886-5bb2-0b4d-c139-c0eb6f1c3e63">ApiStartOptions Structure</a><br /><a href="d4810bcf-3d65-2bb9-b9ab-5575e456eab5">VM.Managed.DAFUL.Pre Namespace</a><br />