# PropertyHousingBase.IsAvaiableToAddOrModifyGearWithAxis Method 
 

Determines whether [is avaiable to add or modify gear with axis] [the specified geartrain document].

**Namespace:**&nbsp;<a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain</a><br />**Assembly:**&nbsp;VMDGearTrain (in VMDGearTrain.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public bool IsAvaiableToAddOrModifyGearWithAxis(
	GearTrainDocument docGT,
	string strExistShaftsetName,
	VectorBase vecPoint,
	VectorBase vecAxis,
	GearGeometryInfo addedGearInfo
)
```

**VB**<br />
``` VB
Public Function IsAvaiableToAddOrModifyGearWithAxis ( 
	docGT As GearTrainDocument,
	strExistShaftsetName As String,
	vecPoint As VectorBase,
	vecAxis As VectorBase,
	addedGearInfo As GearGeometryInfo
) As Boolean
```

**C++**<br />
``` C++
public:
bool IsAvaiableToAddOrModifyGearWithAxis(
	GearTrainDocument^ docGT, 
	String^ strExistShaftsetName, 
	VectorBase^ vecPoint, 
	VectorBase^ vecAxis, 
	GearGeometryInfo^ addedGearInfo
)
```

**F#**<br />
``` F#
member IsAvaiableToAddOrModifyGearWithAxis : 
        docGT : GearTrainDocument * 
        strExistShaftsetName : string * 
        vecPoint : VectorBase * 
        vecAxis : VectorBase * 
        addedGearInfo : GearGeometryInfo -> bool 

```


#### Parameters
&nbsp;<dl><dt>docGT</dt><dd>Type: <a href="fd52a4c8-264a-80a2-d424-add4a3d2465e">VM.Managed.DAFUL.GearTrain.GearTrainDocument</a><br />The document gt.</dd><dt>strExistShaftsetName</dt><dd>Type: System.String<br />Name of the string exist shaftset.</dd><dt>vecPoint</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a><br />The vec point.</dd><dt>vecAxis</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a><br />The vec axis.</dd><dt>addedGearInfo</dt><dd>Type: <a href="0f5c7f72-7aca-0b35-5005-133506298eb7">VM.Managed.DAFUL.GearTrain.GearGeometryInfo</a><br />The added gear information.</dd></dl>

#### Return Value
Type: Boolean<br />

## See Also


#### Reference
<a href="aedca8f5-a0ef-445a-0c94-177af0bea189">PropertyHousingBase Class</a><br /><a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain Namespace</a><br />