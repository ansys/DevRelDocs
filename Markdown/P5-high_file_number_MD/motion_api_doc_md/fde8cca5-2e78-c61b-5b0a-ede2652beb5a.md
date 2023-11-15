# TireAnalysisConfigurationBase Class
 

The tire analysis configuration base class


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">VM.Managed.LinkContainer</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="24984e9d-bf3b-2fe0-3653-f2061fc4ec3b">VM.Managed.Simulation.Configuration</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Car.TireAnalysisConfigurationBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#inheritance-hierarchy">More...</a>
**Namespace:**&nbsp;<a href="08e6b2d8-bba2-0a01-1fdc-133a5d5f82b4">VM.Managed.DAFUL.Car</a><br />**Assembly:**&nbsp;VMDCar (in VMDCar.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public abstract class TireAnalysisConfigurationBase : Configuration, 
	IHasRoadFile
```

**VB**<br />
``` VB
<SerializableAttribute>
Public MustInherit Class TireAnalysisConfigurationBase
	Inherits Configuration
	Implements IHasRoadFile
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class TireAnalysisConfigurationBase abstract : public Configuration, 
	IHasRoadFile
```

**F#**<br />
``` F#
[<AbstractClassAttribute>]
[<SerializableAttribute>]
type TireAnalysisConfigurationBase =  
    class
        inherit Configuration
        interface IHasRoadFile
    end
```

The TireAnalysisConfigurationBase type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="ba23578c-7e7b-3c5a-d97c-c3db910f46ca">TireAnalysisConfigurationBase</a></td><td>
Initializes a new instance of the TireAnalysisConfigurationBase class.</td></tr></table>&nbsp;
<a href="#tireanalysisconfigurationbase-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="5c5a3902-d776-040f-9de1-b72aad921660">Analysis</a></td><td>
Gets or sets the analysis.</td></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="6f9486b8-2fb6-e2f7-9a4c-607e7d83f4a1">AnalysisName</a></td><td>
Gets the name of the analysis.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="5dfb5862-1e4e-9bc0-ac87-e6b9d84575a1">AnalysisType</a></td><td>
Gets or sets the type of the analysis.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="6c989857-f210-1f8f-699e-a9e9f8e61d5e">RoadDataPath</a></td><td>
Gets or sets the road data file path.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="bde908a0-dd8e-8e9e-0071-590b64efb6f9">RoadReferencePosition</a></td><td /></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="6b128563-b9b2-d846-336c-1c5493bffd47">RoadRefFrameName</a></td><td>
Get Roadreference frame name</td></tr></table>&nbsp;
<a href="#tireanalysisconfigurationbase-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="03f58ef6-10eb-5b37-b03b-5f96f5a540ac">InitializeParam</a></td><td>
Initializes the param.</td></tr></table>&nbsp;
<a href="#tireanalysisconfigurationbase-class">Back to Top</a>

## See Also


#### Reference
<a href="08e6b2d8-bba2-0a01-1fdc-133a5d5f82b4">VM.Managed.DAFUL.Car Namespace</a><br />

## Inheritance HierarchySystem.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">VM.Managed.LinkContainer</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="24984e9d-bf3b-2fe0-3653-f2061fc4ec3b">VM.Managed.Simulation.Configuration</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Car.TireAnalysisConfigurationBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="1d5bb850-f25e-ddf4-b455-f6ee4954c1f3">VM.Managed.DAFUL.Car.RideDrumConfiguration</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="0aff1043-0799-e76d-3cbe-5a939fdf9c4b">VM.Managed.DAFUL.Car.RideGeneralConfiguration</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="2ecc6c33-5ab2-ee58-69ec-69cdf7507e84">VM.Managed.DAFUL.Car.SteadyBatchConfiguration</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="2e8bd39e-3cc9-db7c-2c7a-5ae88b553390">VM.Managed.DAFUL.Car.SteadySingleConfiguration</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="f75af0eb-d68c-f7c1-4e01-b4a5d47e1840">VM.Managed.DAFUL.Car.TransientBatchConfiguration</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="de6a6816-3dce-58f4-0425-bb75e4b65913">VM.Managed.DAFUL.Car.TransientSingleConfiguration</a><br />