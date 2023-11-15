# IGeneralContact.IsSphereTreatedAsSurface Method 
 

Get flag whether the faceset's geometry type is sphere and it will be ignored or not.

**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDFBase (in VMDFBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
bool IsSphereTreatedAsSurface(
	IContactable faceset
)
```

**VB**<br />
``` VB
Function IsSphereTreatedAsSurface ( 
	faceset As IContactable
) As Boolean
```

**C++**<br />
``` C++
bool IsSphereTreatedAsSurface(
	IContactable^ faceset
)
```

**F#**<br />
``` F#
abstract IsSphereTreatedAsSurface : 
        faceset : IContactable -> bool 

```


#### Parameters
&nbsp;<dl><dt>faceset</dt><dd>Type: <a href="577505de-fedc-4ffd-ca63-65e8ea27e671">VM.Managed.DAFUL.IContactable</a><br />The faceset.</dd></dl>

#### Return Value
Type: Boolean<br />`true` if faceset's geometry type is sphere and it will be ignored; otherwise, `false`.

## See Also


#### Reference
<a href="b5839515-9870-8076-193c-9e2f263fb909">IGeneralContact Interface</a><br /><a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />