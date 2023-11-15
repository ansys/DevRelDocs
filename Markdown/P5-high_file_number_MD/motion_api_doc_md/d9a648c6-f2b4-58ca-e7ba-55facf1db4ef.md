# Document3D.LoadCADFile Method (String, Document3D.CadImportColorType, Color, Document3D.CadImportResultType, Document3D.CadImportUnitType, String)
 

Load cad import file.

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public void LoadCADFile(
	string strPath,
	Document3D.CadImportColorType color_type,
	Color color,
	Document3D.CadImportResultType type,
	Document3D.CadImportUnitType typeUnit,
	string strCADConvert
)
```

**VB**<br />
``` VB
Public Sub LoadCADFile ( 
	strPath As String,
	color_type As Document3D.CadImportColorType,
	color As Color,
	type As Document3D.CadImportResultType,
	typeUnit As Document3D.CadImportUnitType,
	strCADConvert As String
)
```

**C++**<br />
``` C++
public:
void LoadCADFile(
	String^ strPath, 
	Document3D.CadImportColorType color_type, 
	Color color, 
	Document3D.CadImportResultType type, 
	Document3D.CadImportUnitType typeUnit, 
	String^ strCADConvert
)
```

**F#**<br />
``` F#
member LoadCADFile : 
        strPath : string * 
        color_type : Document3D.CadImportColorType * 
        color : Color * 
        type : Document3D.CadImportResultType * 
        typeUnit : Document3D.CadImportUnitType * 
        strCADConvert : string -> unit 

```


#### Parameters
&nbsp;<dl><dt>strPath</dt><dd>Type: System.String<br />The cad import file path.</dd><dt>color_type</dt><dd>Type: <a href="598894ab-f4d7-6bcc-a873-8961dd75a147">VM.Managed.Document3D.CadImportColorType</a><br /></dd><dt>color</dt><dd>Type: System.Drawing.Color<br />The cad import color.</dd><dt>type</dt><dd>Type: <a href="cbd573d0-3f11-6521-05b9-d2900a420c13">VM.Managed.Document3D.CadImportResultType</a><br />The cad import result type.</dd><dt>typeUnit</dt><dd>Type: <a href="4c090c76-31cc-7aaa-01e1-2cfa90204d36">VM.Managed.Document3D.CadImportUnitType</a><br />The cad import unit type.</dd><dt>strCADConvert</dt><dd>Type: System.String<br />The path of cad convert exe.</dd></dl>

## See Also


#### Reference
<a href="84efeb1f-fcf6-dda7-c768-14ce12a029f2">Document3D Class</a><br /><a href="85ab7d8b-0349-795c-9b5f-e73f2f287b04">LoadCADFile Overload</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />