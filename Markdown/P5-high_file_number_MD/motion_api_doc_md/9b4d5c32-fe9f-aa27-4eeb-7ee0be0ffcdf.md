# GearSetBase(*TProperty*).GetBodyFromGeometryInfo Method 
 

Get body from geometry information.

**Namespace:**&nbsp;<a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain</a><br />**Assembly:**&nbsp;VMDGearTrain (in VMDGearTrain.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public Body GetBodyFromGeometryInfo(
	GeometryInfoBase gInfo
)
```

**VB**<br />
``` VB
Public Function GetBodyFromGeometryInfo ( 
	gInfo As GeometryInfoBase
) As Body
```

**C++**<br />
``` C++
public:
virtual Body^ GetBodyFromGeometryInfo(
	GeometryInfoBase^ gInfo
) sealed
```

**F#**<br />
``` F#
abstract GetBodyFromGeometryInfo : 
        gInfo : GeometryInfoBase -> Body 
override GetBodyFromGeometryInfo : 
        gInfo : GeometryInfoBase -> Body 
```


#### Parameters
&nbsp;<dl><dt>gInfo</dt><dd>Type: <a href="120d4c6f-95df-d93f-d69a-81349e082e56">VM.Managed.DAFUL.GearTrain.GeometryInfoBase</a><br />The geometry information.</dd></dl>

#### Return Value
Type: <a href="dc98f941-e8ef-25f9-9a55-0151997e3c14">Body</a>

#### Implements
<a href="45e45004-9da9-0cfa-ae0e-5e8ce240e496">IGearSet.GetBodyFromGeometryInfo(GeometryInfoBase)</a><br />

## See Also


#### Reference
<a href="d250d24b-ae00-4289-1d23-adc549b3434b">GearSetBase(TProperty) Class</a><br /><a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain Namespace</a><br />