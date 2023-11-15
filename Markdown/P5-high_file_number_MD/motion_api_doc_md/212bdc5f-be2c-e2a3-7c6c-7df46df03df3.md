# Model.FindGroup Method 
 

Finds the group.

**Namespace:**&nbsp;<a href="d4810bcf-3d65-2bb9-b9ab-5575e456eab5">VM.Managed.DAFUL.Pre</a><br />**Assembly:**&nbsp;dfpredat (in dfpredat.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public Model.ModelItemGroup FindGroup(
	GroupItem item,
	List<Model.ModelItemGroup> groups
)
```

**VB**<br />
``` VB
Public Function FindGroup ( 
	item As GroupItem,
	groups As List(Of Model.ModelItemGroup)
) As Model.ModelItemGroup
```

**C++**<br />
``` C++
public:
Model.ModelItemGroup^ FindGroup(
	GroupItem^ item, 
	List<Model.ModelItemGroup^>^ groups
)
```

**F#**<br />
``` F#
member FindGroup : 
        item : GroupItem * 
        groups : List<Model.ModelItemGroup> -> Model.ModelItemGroup 

```


#### Parameters
&nbsp;<dl><dt>item</dt><dd>Type: <a href="8d9bcbda-ca39-bb8c-43df-0deac6c90838">VM.Managed.DAFUL.Pre.GroupItem</a><br />The item.</dd><dt>groups</dt><dd>Type: System.Collections.Generic.List(<a href="366018ea-57e3-7443-9153-2dd13da3ab13">Model.ModelItemGroup</a>)<br />The groups.</dd></dl>

#### Return Value
Type: <a href="366018ea-57e3-7443-9153-2dd13da3ab13">Model.ModelItemGroup</a><br />

## See Also


#### Reference
<a href="8c8c1067-15e2-ea75-f7f7-2cad626e294e">Model Class</a><br /><a href="d4810bcf-3d65-2bb9-b9ab-5575e456eab5">VM.Managed.DAFUL.Pre Namespace</a><br />