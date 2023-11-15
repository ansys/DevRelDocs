# LinkConfigurationBase Class
 

The link configuration base class


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">VM.Managed.LinkContainer</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="24984e9d-bf3b-2fe0-3653-f2061fc4ec3b">VM.Managed.Simulation.Configuration</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Track.LinkConfigurationBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#inheritance-hierarchy">More...</a>
**Namespace:**&nbsp;<a href="8e793c5e-767c-cc4b-9aa5-75c227049da5">VM.Managed.DAFUL.Track</a><br />**Assembly:**&nbsp;VMDTrackBase (in VMDTrackBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public abstract class LinkConfigurationBase : Configuration
```

**VB**<br />
``` VB
Public MustInherit Class LinkConfigurationBase
	Inherits Configuration
```

**C++**<br />
``` C++
public ref class LinkConfigurationBase abstract : public Configuration
```

**F#**<br />
``` F#
[<AbstractClassAttribute>]
type LinkConfigurationBase =  
    class
        inherit Configuration
    end
```

The LinkConfigurationBase type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="0bbea7f9-a3b5-92f4-3eba-90475d4384b0">LinkConfigurationBase</a></td><td>
Initializes a new instance of the LinkConfigurationBase class.</td></tr></table>&nbsp;
<a href="#linkconfigurationbase-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="74a7dabd-be03-420f-7e60-0380296eed53">ConfigurationName</a></td><td>
Gets the configuration name</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="90a1beb0-9116-469c-533a-c2df49f5770e">MaximumDisplacement</a></td><td>
Gets the maximum displacement</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="feffb7d2-fa79-9d9c-dbe1-457376a44fb7">ScaleOfHydrodanamicForce</a></td><td>
Gets the scale of hydrodynamic force</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="34c65c26-8715-37a4-c59b-19bd80f7ff83">TimeToSteadyState</a></td><td>
Gets the time to steady state</td></tr></table>&nbsp;
<a href="#linkconfigurationbase-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="bed36241-1336-a6ce-e5c9-fcdb8dfab718">CreateLinkConfiguration</a></td><td>
Create link configuration</td></tr></table>&nbsp;
<a href="#linkconfigurationbase-class">Back to Top</a>

## See Also


#### Reference
<a href="8e793c5e-767c-cc4b-9aa5-75c227049da5">VM.Managed.DAFUL.Track Namespace</a><br />

## Inheritance HierarchySystem.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">VM.Managed.LinkContainer</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="24984e9d-bf3b-2fe0-3653-f2061fc4ec3b">VM.Managed.Simulation.Configuration</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Track.LinkConfigurationBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="5b6dd9c9-b9e7-e2f5-c6b8-b03138ab02f6">VM.Managed.DAFUL.Track.DropConfiguration</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="597a1a44-160b-9b60-6edf-17f7d6f460f1">VM.Managed.DAFUL.Track.GeneralConfiguration</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="694b3e0a-0d0d-f9bc-c5ee-11dbc60088b9">VM.Managed.DAFUL.Track.PitchConfiguration</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="2e886531-2901-7a00-af49-9da15efd44f0">VM.Managed.DAFUL.Track.RollConfiguration</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="f6288817-8e12-72f2-20da-3205ceb6092a">VM.Managed.DAFUL.Track.ThrustConfiguration</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="5caebdef-1424-22ef-de0a-a7d48ecdd82f">VM.Managed.DAFUL.Track.VerticalConfiguration</a><br />