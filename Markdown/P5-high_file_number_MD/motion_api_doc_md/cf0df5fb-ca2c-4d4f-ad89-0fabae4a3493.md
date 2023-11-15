# ObjectBasePatchsetAddRemovePatchesEvent Class
 

This base class is to represent the add/remove event for patchset.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;HistoryEvent<br />&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddRemovePatchesEvent<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="1f75c9c4-b7da-c9c5-6221-0beb3fee0ebd">VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddPatchesEvent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="a3be84e7-2d53-1437-f513-3959f10a24e8">VM.Managed.DAFUL.FE.History.ObjectBasePatchsetRemovePatchesEvent</a><br />
**Namespace:**&nbsp;<a href="8cfb5694-30b6-56ca-734f-589921f482b7">VM.Managed.DAFUL.FE.History</a><br />**Assembly:**&nbsp;VMFE (in VMFE.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public abstract class ObjectBasePatchsetAddRemovePatchesEvent : HistoryEvent
```

**VB**<br />
``` VB
Public MustInherit Class ObjectBasePatchsetAddRemovePatchesEvent
	Inherits HistoryEvent
```

**C++**<br />
``` C++
public ref class ObjectBasePatchsetAddRemovePatchesEvent abstract : public HistoryEvent
```

**F#**<br />
``` F#
[<AbstractClassAttribute>]
type ObjectBasePatchsetAddRemovePatchesEvent =  
    class
        inherit HistoryEvent
    end
```

The ObjectBasePatchsetAddRemovePatchesEvent type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="911ccdcf-07f7-ac74-26e6-6a743d1bc07a">ObjectBasePatchsetAddRemovePatchesEvent</a></td><td>
Initializes a new instance of the ObjectBasePatchsetAddRemovePatchesEvent class</td></tr></table>&nbsp;
<a href="#objectbasepatchsetaddremovepatchesevent-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="4b3f754c-cbcb-d381-123e-c8391fb1e7a5">AddPatches</a></td><td /></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="928ad9f9-0c3e-cb9a-9043-f7e2e5c4470f">AfterRedo</a></td><td> (Overrides HistoryEvent.AfterRedo(HistoryEventArgs).)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="8532997b-9fb5-5929-6b2f-bc3acc35c536">AfterUndo</a></td><td> (Overrides HistoryEvent.AfterUndo(HistoryEventArgs).)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="15b1a718-a228-0e47-16cb-90856ef137a9">Clear</a></td><td> (Overrides HistoryEvent.Clear(Boolean).)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="4630b287-8edd-0216-6160-942744de54d0">RefreshNavigator</a></td><td /></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="74ee6224-3914-59a5-463d-32dbf621f269">RemovePatches</a></td><td /></tr></table>&nbsp;
<a href="#objectbasepatchsetaddremovepatchesevent-class">Back to Top</a>

## See Also


#### Reference
<a href="8cfb5694-30b6-56ca-734f-589921f482b7">VM.Managed.DAFUL.FE.History Namespace</a><br />