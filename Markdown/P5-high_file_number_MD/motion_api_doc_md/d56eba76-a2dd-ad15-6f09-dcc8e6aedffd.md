# ReferenceCylindrical.GetModelNavigatorInformationImpl Method 
 

Gets the object information for model navigator [implementation].

**Namespace:**&nbsp;<a href="b5e7d154-f6c2-cdc8-0dc3-9407b97f82b2">VM.Managed.DAFUL.Constraints</a><br />**Assembly:**&nbsp;VMDCB (in VMDCB.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
protected override bool GetModelNavigatorInformationImpl(
	XmlDocument xmlDom,
	XmlElement xmlRootEle,
	bool bHasChild
)
```

**VB**<br />
``` VB
Protected Overrides Function GetModelNavigatorInformationImpl ( 
	xmlDom As XmlDocument,
	xmlRootEle As XmlElement,
	bHasChild As Boolean
) As Boolean
```

**C++**<br />
``` C++
protected:
virtual bool GetModelNavigatorInformationImpl(
	XmlDocument^ xmlDom, 
	XmlElement^ xmlRootEle, 
	bool bHasChild
) override
```

**F#**<br />
``` F#
abstract GetModelNavigatorInformationImpl : 
        xmlDom : XmlDocument * 
        xmlRootEle : XmlElement * 
        bHasChild : bool -> bool 
override GetModelNavigatorInformationImpl : 
        xmlDom : XmlDocument * 
        xmlRootEle : XmlElement * 
        bHasChild : bool -> bool 
```


#### Parameters
&nbsp;<dl><dt>xmlDom</dt><dd>Type: System.Xml.XmlDocument<br />The XmlDocument for object.</dd><dt>xmlRootEle</dt><dd>Type: System.Xml.XmlElement<br />The XmlDocument for object.</dd><dt>bHasChild</dt><dd>Type: System.Boolean<br />if set to `true` [has child].</dd></dl>

#### Return Value
Type: Boolean<br />`true` if success; otherwise, `false`.

## See Also


#### Reference
<a href="45190c89-e4c7-4bdb-c87b-3d040e1dd185">ReferenceCylindrical Class</a><br /><a href="b5e7d154-f6c2-cdc8-0dc3-9407b97f82b2">VM.Managed.DAFUL.Constraints Namespace</a><br />