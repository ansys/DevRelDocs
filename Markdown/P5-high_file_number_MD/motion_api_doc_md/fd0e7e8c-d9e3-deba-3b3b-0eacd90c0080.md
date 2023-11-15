# PickerGeneral Constructor (Type, Boolean, String, String, Boolean, EventHandler(FilterArgs))
 

Initializes a new instance of the <a href="d8371742-47bc-1d56-b0be-8da11618cc19">PickerGeneral</a> class. The type of the selectable entity.Whether type is interface.The title of picker.The STR result.if set to `true` [b use auto pick].The custom filter evnet.

**Namespace:**&nbsp;<a href="1c5ed3ad-7c83-7286-7fb9-90c4f0847ee4">VM.Managed.Picker</a><br />**Assembly:**&nbsp;VMPB (in VMPB.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public PickerGeneral(
	Type type,
	bool bIsInterface,
	string strTitle,
	string strResultXml,
	bool bUseAutoPick,
	EventHandler<FilterArgs> CustomFilter
)
```

**VB**<br />
``` VB
Public Sub New ( 
	type As Type,
	bIsInterface As Boolean,
	strTitle As String,
	strResultXml As String,
	bUseAutoPick As Boolean,
	CustomFilter As EventHandler(Of FilterArgs)
)
```

**C++**<br />
``` C++
public:
PickerGeneral(
	Type^ type, 
	bool bIsInterface, 
	String^ strTitle, 
	String^ strResultXml, 
	bool bUseAutoPick, 
	EventHandler<FilterArgs^>^ CustomFilter
)
```

**F#**<br />
``` F#
new : 
        type : Type * 
        bIsInterface : bool * 
        strTitle : string * 
        strResultXml : string * 
        bUseAutoPick : bool * 
        CustomFilter : EventHandler<FilterArgs> -> PickerGeneral
```


#### Parameters
&nbsp;<dl><dt>type</dt><dd>Type: System.Type<br /></dd><dt>bIsInterface</dt><dd>Type: System.Boolean<br /></dd><dt>strTitle</dt><dd>Type: System.String<br /></dd><dt>strResultXml</dt><dd>Type: System.String<br /></dd><dt>bUseAutoPick</dt><dd>Type: System.Boolean<br /></dd><dt>CustomFilter</dt><dd>Type: System.EventHandler(<a href="2d445f8d-fd75-05c3-35c1-80a35c9f6d14">FilterArgs</a>)<br /></dd></dl>

## See Also


#### Reference
<a href="d8371742-47bc-1d56-b0be-8da11618cc19">PickerGeneral Class</a><br /><a href="479ee971-ed67-8dc5-b8ed-c17d03f45cc5">PickerGeneral Overload</a><br /><a href="1c5ed3ad-7c83-7286-7fb9-90c4f0847ee4">VM.Managed.Picker Namespace</a><br />