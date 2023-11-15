# ExportXML Class
 

The export xml file for solver operation


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;<a href="f4470757-1ab5-4821-d0a4-ecd15264c010">VM.Managed.Operation.OperationBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="81123122-1673-fe0c-d921-e8e72d1cf61b">VM.Managed.DAFUL.Operation.SimulationRun</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="0e71d7b7-6944-2420-083c-dc4bf3ef8670">VM.Managed.DAFUL.Operation.ExportXML</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Car.Operation.ExportXML<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e5e8620c-27b3-5a3d-3c37-281a2741aa53">VM.Managed.DAFUL.Car.Operation.ExportXMLForFourPost</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="ba071dcd-956b-6f0e-5dd4-6495486e6d62">VM.Managed.DAFUL.Car.Operation.ExportXMLForFullCar</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="4eaabbd3-e571-be88-c8cb-09b4baac3910">VM.Managed.DAFUL.Car.Operation.ExportXMLForShimmyJudder</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="bda57ef7-d325-ff2d-0be1-2dc5f44410cc">VM.Managed.DAFUL.Car.Operation.ExportXMLForTire</a><br />
**Namespace:**&nbsp;<a href="d26f83e4-174a-4821-2ae8-d0c8a6d1a909">VM.Managed.DAFUL.Car.Operation</a><br />**Assembly:**&nbsp;VMOpCar (in VMOpCar.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public class ExportXML : ExportXML
```

**VB**<br />
``` VB
Public Class ExportXML
	Inherits ExportXML
```

**C++**<br />
``` C++
public ref class ExportXML : public ExportXML
```

**F#**<br />
``` F#
type ExportXML =  
    class
        inherit ExportXML
    end
```

The ExportXML type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="03b37f6b-8f7a-30f3-08b0-5f39b0cd1333">ExportXML(Document)</a></td><td>
Initializes a new instance of the ExportXML class</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="2cbc3823-b9fa-62da-7e5b-31d4924cc704">ExportXML(JournalParameter)</a></td><td>
Initializes a new instance of the ExportXML class</td></tr></table>&nbsp;
<a href="#exportxml-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="f37c9b8f-ddbc-b286-1a58-b970480773ec">Name</a></td><td> (Overrides <a href="972bc6e5-d01c-fd08-db38-78d584c3884c">ExportXML.Name</a>.)</td></tr></table>&nbsp;
<a href="#exportxml-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="99f9ad71-02ad-ae86-97cf-36534090abf2">EndExecuteThread</a></td><td /></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="319dbb7f-ba18-762c-a2c5-64c68cf77100">Execute</a></td><td> (Overrides <a href="17efc111-18e9-85d2-a2c8-8821435909d0">ExportXML.Execute()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="50386334-df7f-44d7-f977-4fd63cd78d8b">ExportXMLImpl</a></td><td> (Overrides <a href="f1e8d1ec-5958-e737-937a-f96eb6292922">ExportXML.ExportXMLImpl()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="d3fc4517-b2c2-247c-45d6-c5d442e05738">GetInformation</a></td><td> (Overrides <a href="075a1fbd-384f-8f34-d3d4-a1d13c4bb4bc">SimulationRun.GetInformation(XmlWriter)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="6528edf5-4bf1-61c2-1f9c-13a54462c596">WriteJournalCore</a></td><td /></tr></table>&nbsp;
<a href="#exportxml-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="63b2dfff-0cb5-b4bc-d1cc-0802563df513">m_bEndSolvingThread</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="f8932e14-5753-8ee6-a721-93c64fa1f1db">m_scenario</a></td><td /></tr></table>&nbsp;
<a href="#exportxml-class">Back to Top</a>

## See Also


#### Reference
<a href="d26f83e4-174a-4821-2ae8-d0c8a6d1a909">VM.Managed.DAFUL.Car.Operation Namespace</a><br />