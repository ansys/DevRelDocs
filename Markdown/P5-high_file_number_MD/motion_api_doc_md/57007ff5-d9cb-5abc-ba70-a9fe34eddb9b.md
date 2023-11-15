# Translational Class
 

This class is to represent the translational constraint.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="b7ba26fe-7ea3-f11c-600a-be06c9e96e17">EntityEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2d0c579-7ceb-1a07-eb60-7fbc0ec075d4">VM.Managed.ContainerObject</a>(<a href="b7ba26fe-7ea3-f11c-600a-be06c9e96e17">EntityEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="aeaf9d38-7c25-8cd9-c83a-920b7c91fda1">VM.Managed.EntityBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2ea4aac-7430-3c78-7c9d-956eda731718">VM.Managed.Entity</a>(<a href="b3ab14ac-efc3-05c9-b25d-e8d04abd03f2">PropertyTranslational</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="66ac882a-92c3-dc90-fd6b-70b9a6a7d20b">VM.Managed.DAFUL.Connector</a>(<a href="b3ab14ac-efc3-05c9-b25d-e8d04abd03f2">PropertyTranslational</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="367e45c8-8ec0-7fad-1451-d9c33263bbea">VM.Managed.DAFUL.Constraints.Constraint</a>(<a href="b3ab14ac-efc3-05c9-b25d-e8d04abd03f2">PropertyTranslational</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Constraints.Translational<br />
**Namespace:**&nbsp;<a href="b5e7d154-f6c2-cdc8-0dc3-9407b97f82b2">VM.Managed.DAFUL.Constraints</a><br />**Assembly:**&nbsp;VMDCB (in VMDCB.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class Translational : Constraint<PropertyTranslational>, 
	ITranslationalMotionComponent, ICouplerComponent, IReferencable
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class Translational
	Inherits Constraint(Of PropertyTranslational)
	Implements ITranslationalMotionComponent, ICouplerComponent, IReferencable
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class Translational : public Constraint<PropertyTranslational^>, 
	ITranslationalMotionComponent, ICouplerComponent, IReferencable
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type Translational =  
    class
        inherit Constraint<PropertyTranslational>
        interface ITranslationalMotionComponent
        interface ICouplerComponent
        interface IReferencable
    end
```

The Translational type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="516cc0fb-4787-c3b5-bfb2-1fb2b20cf27d">Translational()</a></td><td>
Initializes a new instance of the Translational class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="da87a28d-51df-df65-3f44-a03f4ade1449">Translational(String)</a></td><td>
Initializes a new instance of the Translational class.</td></tr></table>&nbsp;
<a href="#translational-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="24a50883-2a40-ff9e-dc1d-2be59e74a30f">PreventDuplicatedRBE</a></td><td>
Gets a value whether this instance prevent duplicated RBE.
 (Overrides <a href="b37603dd-86e3-ef3b-4dd7-782c1988a231">Connector(TProperty).PreventDuplicatedRBE</a>.)</td></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="c52efcd6-2af1-a737-7141-0923c0ba5ba1">ReportTypeImpl</a></td><td>
Gets the report type.
 (Overrides <a href="aa9dc44c-1d1b-71af-7fe9-b1b88517e583">Connector(TProperty).ReportTypeImpl</a>.)</td></tr></table>&nbsp;
<a href="#translational-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="2698e697-bfc4-6757-c887-a4d14741f0ff">Initialize</a></td><td>
Initializes member through unit convert factor.
 (Overrides <a href="bdbd60e5-34cc-c80f-29bd-36e9092e83a1">Constraint(TProperty).Initialize(ConvertFactor)</a>.)</td></tr></table>&nbsp;
<a href="#translational-class">Back to Top</a>

## See Also


#### Reference
<a href="b5e7d154-f6c2-cdc8-0dc3-9407b97f82b2">VM.Managed.DAFUL.Constraints Namespace</a><br />