# Container.GetUnnamedObjectName Method 
 

Get an unnamed object name.

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public virtual string GetUnnamedObjectName(
	Object obUnnamed
)
```

**VB**<br />
``` VB
Public Overridable Function GetUnnamedObjectName ( 
	obUnnamed As Object
) As String
```

**C++**<br />
``` C++
public:
virtual String^ GetUnnamedObjectName(
	Object^ obUnnamed
)
```

**F#**<br />
``` F#
abstract GetUnnamedObjectName : 
        obUnnamed : Object -> string 
override GetUnnamedObjectName : 
        obUnnamed : Object -> string 
```


#### Parameters
&nbsp;<dl><dt>obUnnamed</dt><dd>Type: System.Object<br />The unnamed object.</dd></dl>

#### Return Value
Type: String<br />The unnamed object name.

#### Implements
IContainer.GetUnnamedObjectName(Object)<br />

## See Also


#### Reference
<a href="1a0ff239-515e-1492-44f4-3533a7019716">Container Class</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />