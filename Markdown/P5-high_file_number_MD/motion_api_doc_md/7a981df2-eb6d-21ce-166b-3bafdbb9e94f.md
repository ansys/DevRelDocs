# AttributeMultiSubEntity(*TSubEntity*) Class
 

This class is to represent the attribute for multi-subentity.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">VM.Managed.LinkContainer</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="75ecd4d7-cf45-c8a8-85f2-f447dddf43f6">VM.Managed.AttributeBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.AttributeMultiSubEntity(TSubEntity)<br />
**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMObjBase (in VMObjBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class AttributeMultiSubEntity<TSubEntity> : AttributeBase
where TSubEntity : new(), SubEntity

```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class AttributeMultiSubEntity(Of TSubEntity As {New, SubEntity})
	Inherits AttributeBase
```

**C++**<br />
``` C++
[SerializableAttribute]
generic<typename TSubEntity>
where TSubEntity : gcnew(), SubEntity
public ref class AttributeMultiSubEntity : public AttributeBase
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type AttributeMultiSubEntity<'TSubEntity when 'TSubEntity : new() and SubEntity> =  
    class
        inherit AttributeBase
    end
```


#### Type Parameters
&nbsp;<dl><dt>TSubEntity</dt><dd>The type of the sub entity.</dd></dl>&nbsp;
The AttributeMultiSubEntity(TSubEntity) type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="0b42ed7e-e381-a5fc-5951-f2ac48882c08">AttributeMultiSubEntity(TSubEntity)</a></td><td>
Initializes a new instance of the AttributeMultiSubEntity(TSubEntity) class.</td></tr></table>&nbsp;
<a href="#attributemultisubentity(*tsubentity*)-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="05ef39bd-adf4-fc09-1912-4a1a70583636">SubEntities</a></td><td>
Gets or sets the sub entities.</td></tr></table>&nbsp;
<a href="#attributemultisubentity(*tsubentity*)-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="88f29f07-b5c3-b00d-333a-27451539c28b">OnDeserialization</a></td><td>
Called when [deserialization].
 (Overrides <a href="64076d3c-3baa-043e-784b-5e010de1a6ec">LinkContainer.OnDeserialization(Object)</a>.)</td></tr></table>&nbsp;
<a href="#attributemultisubentity(*tsubentity*)-class">Back to Top</a>

## See Also


#### Reference
<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />