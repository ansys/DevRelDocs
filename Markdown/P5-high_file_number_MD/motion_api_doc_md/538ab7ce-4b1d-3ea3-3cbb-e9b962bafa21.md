# PrimitiveBase Class
 

This class is to represent the base picker.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;VM.Managed.Picker.PrimitiveBase<br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="67438c18-d5e5-fd52-d683-90c43c3e9856">VM.Managed.Picker.PickerPoint</a><br />
**Namespace:**&nbsp;<a href="1c5ed3ad-7c83-7286-7fb9-90c4f0847ee4">VM.Managed.Picker</a><br />**Assembly:**&nbsp;VMPB (in VMPB.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public class PrimitiveBase : IPicker
```

**VB**<br />
``` VB
Public Class PrimitiveBase
	Implements IPicker
```

**C++**<br />
``` C++
public ref class PrimitiveBase : IPicker
```

**F#**<br />
``` F#
type PrimitiveBase =  
    class
        interface IPicker
    end
```

The PrimitiveBase type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="71394b9b-fb9d-2480-f62a-336789a31676">PrimitiveBase</a></td><td>
Initializes a new instance of the PrimitiveBase class.</td></tr></table>&nbsp;
<a href="#primitivebase-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="352cc35d-0bf4-b214-a600-6976e099d381">AutoEventForStopPicker</a></td><td>
Gets or sets the manual reset event for stop picker.</td></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="e5845b76-4a44-b0a1-c9b5-1e2550c47e96">AutoEvents</a></td><td>
Gets or sets the auto events.</td></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="c98a1e73-f4d8-1b59-6569-372154d0c988">DefaultFilterName</a></td><td>
Gets the default filter name.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="5611b5c2-c7ce-47b2-1df4-0fc294411f7c">PickableType</a></td><td>
Gets the type of the pickable objects.</td></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="17d3ddbe-9a83-162a-7327-7985994e18c0">PickerCoreNode</a></td><td>
Gets or sets the picker core node.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="5f2cc25d-24d9-2baa-9888-6c1d7edcd7fb">TypeOfPicker</a></td><td>
Gets the type of picker.</td></tr></table>&nbsp;
<a href="#primitivebase-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="2ac54147-6b2a-490a-6ee4-3fe8f4ce813d">ChangeFilter(PickerManager.enFilterType)</a></td><td>
Changes the filter type for sub picker.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="77bc15bb-a1bf-8207-7187-03b43a0415e3">ChangeFilter(String)</a></td><td>
Changes the filter.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="7a4b9670-b7f2-8f27-c31a-da9ab552e869">GetPickableType</a></td><td>
Gets the types of the pickable about each picker.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="86f1dc13-7aa0-917f-781f-df6fc7e550f5">GetPosition</a></td><td>
Gets the position for result of node picker. The position of node calculate through index of node and key of owner.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="c4d75407-051d-ae7d-ebba-422142ec1692">GetResult</a></td><td>
Gets the result of picking.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="a1b506da-0a1b-4f79-1b07-194f5d0e085b">GetResultXml</a></td><td>
Gets the result of picking that was formatted XML.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="4473f179-a951-3a66-244e-8424c9866e2d">GetSubPickerResult</a></td><td>
Gets the sub picker result.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="2fd3015c-5cc2-4d58-c17f-1df59789681c">GetSubPickerResultXml</a></td><td>
Gets the sub picker result XML.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="05d70c3e-3a89-7346-6599-5635f7c51730">IsApplyResultForAbortPicker</a></td><td>
Determines whether [is apply result for abort picker] [the specified b use].</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="78da3124-c618-1085-040b-cf26c004fa05">Pick</a></td><td>
Execute pick.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="957ecdd4-92d0-b630-55ce-12752cf627ce">PickImplForNode</a></td><td>
Execute pick for node.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="ceee6447-237e-9fa6-eb7e-f005bf6f9546">SetDefaultFilter</a></td><td>
Sets the defulat filter.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="a54e0274-57d9-48b5-6e2b-c99ae1cf0a18">SetPickerResult(String)</a></td><td>
Sets the picker result.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="472abbf1-2921-a49f-aac6-60366f8441d1">SetPickerResult(String, PickerType)</a></td><td>
Sets the picker result.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f290d296-f46e-d41f-aa64-fe738f54aa25">SetSubPickerFinish(PickerManager.enFilterType, String)</a></td><td>
Sets the sub picker finish.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f4c09b3f-a286-ff7d-94de-34a6c1a7a564">SetSubPickerFinish(String, String)</a></td><td>
Sets the sub picker finish.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="269eff2b-7541-b2a1-fa1b-34205a70fc22">SetSymmetricType</a></td><td>
Sets the type of the symmetric about current picker and all of the sub picker.</td></tr></table>&nbsp;
<a href="#primitivebase-class">Back to Top</a>

## See Also


#### Reference
<a href="1c5ed3ad-7c83-7286-7fb9-90c4f0847ee4">VM.Managed.Picker Namespace</a><br />