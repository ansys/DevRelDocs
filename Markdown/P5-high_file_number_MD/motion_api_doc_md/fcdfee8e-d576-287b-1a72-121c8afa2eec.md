# StreamFooter.Write_V3Impl Method 
 

Write_s the v3 base.

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
protected static void Write_V3Impl(
	Stream stream,
	long posStreamHead,
	long sizePointer,
	string comment,
	long nVersion
)
```

**VB**<br />
``` VB
Protected Shared Sub Write_V3Impl ( 
	stream As Stream,
	posStreamHead As Long,
	sizePointer As Long,
	comment As String,
	nVersion As Long
)
```

**C++**<br />
``` C++
protected:
static void Write_V3Impl(
	Stream^ stream, 
	long long posStreamHead, 
	long long sizePointer, 
	String^ comment, 
	long long nVersion
)
```

**F#**<br />
``` F#
static member Write_V3Impl : 
        stream : Stream * 
        posStreamHead : int64 * 
        sizePointer : int64 * 
        comment : string * 
        nVersion : int64 -> unit 

```


#### Parameters
&nbsp;<dl><dt>stream</dt><dd>Type: System.IO.Stream<br />The stream.</dd><dt>posStreamHead</dt><dd>Type: System.Int64<br />The position stream head.</dd><dt>sizePointer</dt><dd>Type: System.Int64<br />The size pointer.</dd><dt>comment</dt><dd>Type: System.String<br />The comment.</dd><dt>nVersion</dt><dd>Type: System.Int64<br />The footer version.</dd></dl>

## See Also


#### Reference
<a href="df89dee0-b4b2-e3bd-3bea-d8839f8dc0ef">StreamFooter Class</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />