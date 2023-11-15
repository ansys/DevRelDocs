# ObjectBaseMeshColorEvent Class
 

This base class is to represent the color event for mesh.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;HistoryEvent<br />&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.FE.History.ObjectBaseMeshColorEvent<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2027037-b80f-95e8-fa4a-7fe8bfa0685d">VM.Managed.DAFUL.FE.History.ObjectBaseFEColorEvent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="ce987e5e-4c72-7e3e-790b-425891ec5638">VM.Managed.DAFUL.FE.History.ObjectBaseSetBaseColorEvent</a><br />
**Namespace:**&nbsp;<a href="8cfb5694-30b6-56ca-734f-589921f482b7">VM.Managed.DAFUL.FE.History</a><br />**Assembly:**&nbsp;VMFE (in VMFE.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public abstract class ObjectBaseMeshColorEvent : HistoryEvent
```

**VB**<br />
``` VB
Public MustInherit Class ObjectBaseMeshColorEvent
	Inherits HistoryEvent
```

**C++**<br />
``` C++
public ref class ObjectBaseMeshColorEvent abstract : public HistoryEvent
```

**F#**<br />
``` F#
[<AbstractClassAttribute>]
type ObjectBaseMeshColorEvent =  
    class
        inherit HistoryEvent
    end
```

The ObjectBaseMeshColorEvent type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="28d6c546-7b6f-9d06-722b-cf9f8b05458e">ObjectBaseMeshColorEvent(Object)</a></td><td>
Initializes a new instance of the ObjectBaseMeshColorEvent class</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="b9a75463-fc2e-9acf-db7f-83d79f90bea6">ObjectBaseMeshColorEvent(Object, Color)</a></td><td>
Initializes a new instance of the ObjectBaseMeshColorEvent class</td></tr></table>&nbsp;
<a href="#objectbasemeshcolorevent-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="a165d817-e955-7cc7-b250-85dd07a40d35">Clear</a></td><td> (Overrides HistoryEvent.Clear(Boolean).)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="de346117-f56e-48b2-e937-1df62bee1118">GetColor</a></td><td /></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="47660eaa-a6f3-cc41-b95a-ccf4437be724">Redo</a></td><td> (Overrides HistoryEvent.Redo(HistoryEventArgs).)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="b90ccddb-9779-59cf-fec7-0a67d5f42ae2">ReplaceColor</a></td><td /></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="804dd852-e756-1ccb-fd49-22ad83d62180">Undo</a></td><td> (Overrides HistoryEvent.Undo(HistoryEventArgs).)</td></tr></table>&nbsp;
<a href="#objectbasemeshcolorevent-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="e575f743-43ec-a4eb-c1b5-c1b29bd598fa">m_Color</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="49d37df3-e5f7-ea79-b634-51dd0d0fb982">m_keyObj</a></td><td /></tr></table>&nbsp;
<a href="#objectbasemeshcolorevent-class">Back to Top</a>

## See Also


#### Reference
<a href="8cfb5694-30b6-56ca-734f-589921f482b7">VM.Managed.DAFUL.FE.History Namespace</a><br />