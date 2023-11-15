# CouplerBase(*TProperty*).GetModelNavigatorInformationImpl Method 
 

Gets the object information for model navigator [implementation].

**Namespace:**&nbsp;<a href="b5e7d154-f6c2-cdc8-0dc3-9407b97f82b2">VM.Managed.DAFUL.Constraints</a><br />**Assembly:**&nbsp;VMDCP (in VMDCP.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
protected override bool GetModelNavigatorInformationImpl(
	XmlDocument xmlDom,
	XmlElement xmlEle,
	bool bHasChild
)
```

**VB**<br />
``` VB
Protected Overrides Function GetModelNavigatorInformationImpl ( 
	xmlDom As XmlDocument,
	xmlEle As XmlElement,
	bHasChild As Boolean
) As Boolean
```

**C++**<br />
``` C++
protected:
virtual bool GetModelNavigatorInformationImpl(
	XmlDocument^ xmlDom, 
	XmlElement^ xmlEle, 
	bool bHasChild
) override
```

**F#**<br />
``` F#
abstract GetModelNavigatorInformationImpl : 
        xmlDom : XmlDocument * 
        xmlEle : XmlElement * 
        bHasChild : bool -> bool 
override GetModelNavigatorInformationImpl : 
        xmlDom : XmlDocument * 
        xmlEle : XmlElement * 
        bHasChild : bool -> bool 
```


#### Parameters
&nbsp;<dl><dt>xmlDom</dt><dd>Type: System.Xml.XmlDocument<br />The XmlDocument for object.</dd><dt>xmlEle</dt><dd>Type: System.Xml.XmlElement<br />The XmlElement for object.</dd><dt>bHasChild</dt><dd>Type: System.Boolean<br />if set to `true` [has child].</dd></dl>

#### Return Value
Type: Boolean<br />`true` if success; otherwise, `false`.

## See Also


#### Reference
<a href="73e56b4a-08a3-dc9b-6e22-b485d2640353">CouplerBase(TProperty) Class</a><br /><a href="b5e7d154-f6c2-cdc8-0dc3-9407b97f82b2">VM.Managed.DAFUL.Constraints Namespace</a><br />