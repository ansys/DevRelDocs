# Cylindrical Class
 

This class is to represent the cylindrical constraint.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="b7ba26fe-7ea3-f11c-600a-be06c9e96e17">EntityEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2d0c579-7ceb-1a07-eb60-7fbc0ec075d4">VM.Managed.ContainerObject</a>(<a href="b7ba26fe-7ea3-f11c-600a-be06c9e96e17">EntityEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="aeaf9d38-7c25-8cd9-c83a-920b7c91fda1">VM.Managed.EntityBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2ea4aac-7430-3c78-7c9d-956eda731718">VM.Managed.Entity</a>(<a href="a40b3ff3-62fb-a6dc-f259-05fb42046bb4">PropertyCylindrical</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="66ac882a-92c3-dc90-fd6b-70b9a6a7d20b">VM.Managed.DAFUL.Connector</a>(<a href="a40b3ff3-62fb-a6dc-f259-05fb42046bb4">PropertyCylindrical</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="367e45c8-8ec0-7fad-1451-d9c33263bbea">VM.Managed.DAFUL.Constraints.Constraint</a>(<a href="a40b3ff3-62fb-a6dc-f259-05fb42046bb4">PropertyCylindrical</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Constraints.Cylindrical<br />
**Namespace:**&nbsp;<a href="b5e7d154-f6c2-cdc8-0dc3-9407b97f82b2">VM.Managed.DAFUL.Constraints</a><br />**Assembly:**&nbsp;VMDCB (in VMDCB.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class Cylindrical : Constraint<PropertyCylindrical>, 
	ICouplerComponent, IReferencable
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class Cylindrical
	Inherits Constraint(Of PropertyCylindrical)
	Implements ICouplerComponent, IReferencable
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class Cylindrical : public Constraint<PropertyCylindrical^>, 
	ICouplerComponent, IReferencable
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type Cylindrical =  
    class
        inherit Constraint<PropertyCylindrical>
        interface ICouplerComponent
        interface IReferencable
    end
```

The Cylindrical type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="5e402eab-1354-11ef-cba2-df3be8ee4e23">Cylindrical()</a></td><td>
Initializes a new instance of the Cylindrical class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="522b7c32-2b4e-1175-db13-9516e5dfb16e">Cylindrical(String)</a></td><td>
Initializes a new instance of the Cylindrical class.</td></tr></table>&nbsp;
<a href="#cylindrical-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="2d4cb40c-e5bc-4c72-2c84-be710faf976e">PreventDuplicatedRBE</a></td><td>
Gets a value whether this instance prevent duplicated RBE.
 (Overrides <a href="b37603dd-86e3-ef3b-4dd7-782c1988a231">Connector(TProperty).PreventDuplicatedRBE</a>.)</td></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="38a30997-fa75-7eb7-c6a7-cb051dfe166b">ReportTypeImpl</a></td><td>
Gets the report type.
 (Overrides <a href="aa9dc44c-1d1b-71af-7fe9-b1b88517e583">Connector(TProperty).ReportTypeImpl</a>.)</td></tr></table>&nbsp;
<a href="#cylindrical-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="57c925e7-2020-f6a9-e8e8-514ba306d0d2">GetActionMarker</a></td><td>
Gets the action marker.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="7df6e605-932d-8f7e-0d08-6023c815e72f">GetActionParentConnectable</a></td><td>
Gets the action parent connectable.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="456aaad5-5841-e108-ae05-af869bc0d252">GetActionTransform</a></td><td>
Gets the action transform.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="8b73131c-ccef-13a9-9b36-d81f37f86dbf">GetBaseMarker</a></td><td>
Gets the base marker.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="4da9764a-e6ef-e454-e742-a372d8ce25a6">GetBaseParentConnectable</a></td><td>
Gets the base parent connectable.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="1499a086-5263-4f5f-8fe9-b80bcbdf845e">GetBaseTransform</a></td><td>
Gets the base transform.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="24fbb79c-1cb1-cfa7-1c23-a83d76c733db">Initialize</a></td><td>
Initializes member through unit convert factor.
 (Overrides <a href="bdbd60e5-34cc-c80f-29bd-36e9092e83a1">Constraint(TProperty).Initialize(ConvertFactor)</a>.)</td></tr></table>&nbsp;
<a href="#cylindrical-class">Back to Top</a>

## See Also


#### Reference
<a href="b5e7d154-f6c2-cdc8-0dc3-9407b97f82b2">VM.Managed.DAFUL.Constraints Namespace</a><br />