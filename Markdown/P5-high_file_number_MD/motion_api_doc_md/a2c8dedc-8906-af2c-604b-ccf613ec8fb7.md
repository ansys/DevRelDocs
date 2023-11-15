# AnalysisBase Class
 

The car analysis base class


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;VM.Managed.DAFUL.Car.AnalysisBase<br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="#inheritance-hierarchy">More...</a>
**Namespace:**&nbsp;<a href="08e6b2d8-bba2-0a01-1fdc-133a5d5f82b4">VM.Managed.DAFUL.Car</a><br />**Assembly:**&nbsp;VMDCar (in VMDCar.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public abstract class AnalysisBase
```

**VB**<br />
``` VB
<SerializableAttribute>
Public MustInherit Class AnalysisBase
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class AnalysisBase abstract
```

**F#**<br />
``` F#
[<AbstractClassAttribute>]
[<SerializableAttribute>]
type AnalysisBase =  class end
```

The AnalysisBase type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="9d1fe761-f4b2-54d9-b753-c3d55caee518">AnalysisBase()</a></td><td>
Initializes a new instance of the AnalysisBase class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="909a037f-177f-ce99-c511-0f67e734f724">AnalysisBase(ILinkContainer)</a></td><td>
Initializes a new instance of the AnalysisBase class.</td></tr></table>&nbsp;
<a href="#analysisbase-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="2f9fe7fd-6501-e7c5-e02e-9e27c7b69fbb">IsSim</a></td><td>
Gets or sets a value indicating whether this instance is simulation.</td></tr></table>&nbsp;
<a href="#analysisbase-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="f628f1b8-62ca-44ed-e481-2a75299ac977">GetConvertUnit(AccelerationUnitType)</a></td><td>
Gets the convert unit for acceleration.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="76af14bb-110f-4a60-4e84-d9710971ba93">GetConvertUnit(LengthUnitType)</a></td><td>
Gets the convert unit for length.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="a9b4c1b0-9424-1013-a082-238205cf030d">GetConvertUnit(VelocityUnitType)</a></td><td>
Gets the convert unit for velocity.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="ad7381e7-c46a-bdef-49ed-791ddf9aecb2">GetGravity</a></td><td /></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="b4ceef73-585c-8164-87de-e91fcfd83acf">GetTestRigMotionUSUBArgument</a></td><td>
Gets the test-rig motion USUB argument.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="49546c55-f206-c17e-07dd-a6a4c019c865">SetModified</a></td><td>
Set modified flag.</td></tr></table>&nbsp;
<a href="#analysisbase-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="8f704acc-fbee-2fad-1cc0-6ee15474c4e7">m_pLnkContainer</a></td><td></td></tr></table>&nbsp;
<a href="#analysisbase-class">Back to Top</a>

## See Also


#### Reference
<a href="08e6b2d8-bba2-0a01-1fdc-133a5d5f82b4">VM.Managed.DAFUL.Car Namespace</a><br />

## Inheritance HierarchySystem.Object<br />&nbsp;&nbsp;VM.Managed.DAFUL.Car.AnalysisBase<br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="f57df203-5bb5-d220-1cce-6077705d1b0f">VM.Managed.DAFUL.Car.AnalysisExternFiles</a><br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="4f3c1ebc-6479-19ba-32ba-f283d769cd03">VM.Managed.DAFUL.Car.AnalysisFrequencyBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="771e4844-8e46-3004-e340-db451fd40fa6">VM.Managed.DAFUL.Car.AnalysisRandomMotion</a><br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="d883b330-6acc-c276-24dc-6164d63f1d0a">VM.Managed.DAFUL.Car.FourPostAnalysisBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="de86b471-c3e7-15aa-f2ad-3e939e45c0cb">VM.Managed.DAFUL.Car.FullCarAnalysisBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="99baec25-b9ef-f62b-da93-4a936bfd6330">VM.Managed.DAFUL.Car.SuspensionAnalysisBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="b08bfa49-cc3b-80ef-6a76-21ac68ae68b9">VM.Managed.DAFUL.Car.TireAnalysisBase</a><br />