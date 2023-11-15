# PickerMultiEntityVM Class
 

This class is to represent the multi entity picker.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;<a href="afbaa68b-7c49-6959-e209-1ef58bea8a43">VM.Managed.Picker.PickerMulti</a><br />&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.Picker.PickerMultiEntityVM<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="76af8780-fd67-4bbb-0c46-13da5dacb631">VM.Managed.Picker.MassMeasure</a><br />
**Namespace:**&nbsp;<a href="1c5ed3ad-7c83-7286-7fb9-90c4f0847ee4">VM.Managed.Picker</a><br />**Assembly:**&nbsp;VMPB (in VMPB.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public class PickerMultiEntityVM : PickerMulti
```

**VB**<br />
``` VB
Public Class PickerMultiEntityVM
	Inherits PickerMulti
```

**C++**<br />
``` C++
public ref class PickerMultiEntityVM : public PickerMulti
```

**F#**<br />
``` F#
type PickerMultiEntityVM =  
    class
        inherit PickerMulti
    end
```

The PickerMultiEntityVM type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="b1e1a2d9-610c-6cc0-b5a3-f269983dd116">PickerMultiEntityVM(Type[])</a></td><td>
Initializes a new instance of the PickerMultiEntityVM class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="1c2b9216-bff7-bef0-1ed3-1e596c48978b">PickerMultiEntityVM(Type, Boolean)</a></td><td>
Initializes a new instance of the PickerMultiEntityVM class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="28ef86d1-bee3-4f1a-b0bc-32f9436278b5">PickerMultiEntityVM(Type, Boolean, Boolean)</a></td><td>
Initializes a new instance of the PickerMultiEntityVM class.</td></tr></table>&nbsp;
<a href="#pickermultientityvm-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="fdada633-8467-b629-0ea8-12b4871f05b4">PickableType</a></td><td>
Gets the type of the pickable objects.
 (Overrides <a href="2a3a2762-e4d6-85f9-3a2d-2712437bcda2">PickerMulti.PickableType</a>.)</td></tr></table>&nbsp;
<a href="#pickermultientityvm-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="9095d32e-76e6-8043-c83d-6fe6b2025cbb">GetResult</a></td><td>
Gets the result of picking. <a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">ObjectBase</a>
 (Overrides <a href="475cf713-fdd9-6da7-70ee-a1802bf6db08">PickerMulti.GetResult()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="d6ae0fe6-3c6a-fc66-bea6-2251348978af">GetResultXml</a></td><td>
Gets the result of picking that was formatted XML.
 (Overrides <a href="de1794a1-dbcf-6b79-4d73-68603efdb2ba">PickerMulti.GetResultXml()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="954e6722-3e48-a030-f15f-1b7f9405ec61">GetTotalResult</a></td><td>
Gets the result of picking
 (Overrides <a href="dce5611e-d0b2-3198-a303-423422048648">PickerMulti.GetTotalResult()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="ee101e2d-e7a7-973d-c860-5c8296d13025">HasTotalResult</a></td><td>
Whether or not the selected.
 (Overrides <a href="7c2c5d1e-bf34-e5c6-c8fd-7757486a7c6a">PickerMulti.HasTotalResult()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="78be7dd1-8378-8403-8e0e-b9676c052ed7">Initialize</a></td><td>
Initializes a multi picker's attributes. Sets the already selected object's keys.Whether selected objects highlight.If set to `true` add to list; otherwise, If set to `false` can remove object from already selected list.
 (Overrides <a href="d6a38fa2-8079-f725-c7d4-4c00f52dc16c">PickerMulti.Initialize(List(UIntPtr), Boolean, Boolean)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="c9a29e30-1501-3691-2759-bd5944b49be2">Pick</a></td><td>
Execute pick.
 (Overrides <a href="32471e41-10f1-678f-fbae-e483f72246f3">PickerMulti.Pick(Boolean)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="05afbb09-cd2c-b420-6c1b-20e9e65baff0">PickImpl</a></td><td /></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="5f741511-bd68-1bd7-6926-d76268f40999">SetSubPickerFinish</a></td><td>
Do nothing.
 (Overrides <a href="3497fe66-38bd-9473-4389-70f8c62a9a53">PickerMulti.SetSubPickerFinish(PickerManager.enFilterType, String)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="6c14a90b-cf55-7358-e5f2-f76e03750696">SetSymmetricType</a></td><td>
Sets the type of the symmetric.
 (Overrides <a href="1a605bf7-8399-8e40-4b79-86e91e946f77">PickerMulti.SetSymmetricType(SymmetricType)</a>.)</td></tr></table>&nbsp;
<a href="#pickermultientityvm-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="da6da331-ca75-86a2-7724-5c274656f752">autoEvents</a></td><td>
Auto reset Event</td></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="ec8bb830-6471-ca88-037c-b3c78897a81e">m_PickerCore</a></td><td>
Picker in Core</td></tr></table>&nbsp;
<a href="#pickermultientityvm-class">Back to Top</a>

## See Also


#### Reference
<a href="1c5ed3ad-7c83-7286-7fb9-90c4f0847ee4">VM.Managed.Picker Namespace</a><br />