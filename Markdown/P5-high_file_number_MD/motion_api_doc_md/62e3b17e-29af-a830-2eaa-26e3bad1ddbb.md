# PropertySixMotion.FindLocal Method 
 

Finds an object that matches a specified name in local.

**Namespace:**&nbsp;<a href="e4d48f1a-b014-7376-531a-6c3780c1f3ff">VM.Models.Pre.Connections</a><br />**Assembly:**&nbsp;VM.Models.Pre.Connections (in VM.Models.Pre.Connections.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public override IObjectBase FindLocal(
	string strName
)
```

**VB**<br />
``` VB
Public Overrides Function FindLocal ( 
	strName As String
) As IObjectBase
```

**C++**<br />
``` C++
public:
virtual IObjectBase^ FindLocal(
	String^ strName
) override
```

**F#**<br />
``` F#
abstract FindLocal : 
        strName : string -> IObjectBase 
override FindLocal : 
        strName : string -> IObjectBase 
```


#### Parameters
&nbsp;<dl><dt>strName</dt><dd>Type: System.String<br />Name to search for.</dd></dl>

#### Return Value
Type: IObjectBase<br />An object that matches a specified name.

#### Implements
IContainer.FindLocal(String)<br />

## See Also


#### Reference
<a href="63629bf0-3483-169c-0f90-4f82a9811da0">PropertySixMotion Class</a><br /><a href="e4d48f1a-b014-7376-531a-6c3780c1f3ff">VM.Models.Pre.Connections Namespace</a><br />