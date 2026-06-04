# Interface ZOSAPI::Editors::LDE::ILDEApertureData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data"></a>

![][C#]
![][public]

**Definition**:

Surface properties aperture tab. This interface can be accessed via the ILDERow interface.

Usage (see [Example 19](../apiexamples/example_19.md) for a full sample)


C# 
```csharp
            // To specify an aperture to a surface, we need to first create an ISurfaceApertureType and then assign it.
            ISurfaceApertureType Rect_Aper = TheLDE.GetSurfaceAt(2).ApertureData.CreateApertureTypeSettings(SurfaceApertureTypes.RectangularAperture);
            Rect_Aper._S_RectangularAperture.XHalfWidth = 10;
            Rect_Aper._S_RectangularAperture.YHalfWidth = 10;
            TheLDE.GetSurfaceAt(2).ApertureData.ChangeApertureTypeSettings(Rect_Aper);
            TheLDE.GetSurfaceAt(3).ApertureData.PickupFrom = 2;
```
 C++ 
```csharp
    // To specify an aperture to a surface, we need to first create an ISurfaceApertureType and then assign it.
    ISurfaceApertureTypePtr Rect_Aper = TheLDE->GetSurfaceAt(2)->ApertureData->CreateApertureTypeSettings(SurfaceApertureTypes_RectangularAperture);
    Rect_Aper->_S_RectangularAperture->XHalfWidth = 10;
    Rect_Aper->_S_RectangularAperture->YHalfWidth = 10;
    TheLDE->GetSurfaceAt(2)->ApertureData->ChangeApertureTypeSettings(Rect_Aper);
    TheLDE->GetSurfaceAt(3)->ApertureData->PickupFrom = 2;
```
 Matlab 
```csharp
    % To specify an aperture to a surface, we need to first create an ISurfaceApertureType and then assign it.
    Rect_Aper = TheLDE.GetSurfaceAt(2).ApertureData.CreateApertureTypeSettings(ZOSAPI.Editors.LDE.SurfaceApertureTypes.RectangularAperture);
    Rect_Aper.S_RectangularAperture_.XHalfWidth = 10;
    Rect_Aper.S_RectangularAperture_.YHalfWidth = 10;
    TheLDE.GetSurfaceAt(2).ApertureData.ChangeApertureTypeSettings(Rect_Aper);
    TheLDE.GetSurfaceAt(3).ApertureData.PickupFrom = 2;
```
 Python 
```csharp
    # To specify an aperture to a surface, we need to first create an ISurfaceApertureType and then assign it.
    Rect_Aper = TheLDE.GetSurfaceAt(2).ApertureData.CreateApertureTypeSettings(ZOSAPI.Editors.LDE.SurfaceApertureTypes.RectangularAperture)
    Rect_Aper._S_RectangularAperture.XHalfWidth = 10
    Rect_Aper._S_RectangularAperture.YHalfWidth = 10
    TheLDE.GetSurfaceAt(2).ApertureData.ChangeApertureTypeSettings(Rect_Aper)
    TheLDE.GetSurfaceAt(3).ApertureData.PickupFrom = 2
```

## Members

* [ChangeApertureTypeSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data_1a14089fd69c14646e13d066f718d084d1)
* [CreateApertureTypeSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data_1a4dbb443475e2249c33d73b10c50c8ece)
* [CurrentType](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data_1a1a889b7ef609eb0c1b77f4e793c46786)
* [CurrentTypeSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data_1a4a38e4c04d8d2ff12336f8dc8ffb22cc)
* [DisableClearSemiDiameterMarginsForThisSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data_1a60271be9abb4a8e5941e48b2239e7747)
* [IsPickedUp](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data_1ad7bc156d65107ee782e7c7b48bc8e534)
* [PickupFrom](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data_1a95f7da62e392cf29eb8e5cbfae106adf)
* [SetPickupNone](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data_1a167e5ae61e280f78013c68cddc4a8e97)

## Properties

### Property PickupFrom

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data_1a95f7da62e392cf29eb8e5cbfae106adf"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.LDE.ILDEApertureData.PickupFrom
```


Gets or sets the surface to pickup settings from.

The surface number to pickup (0 for None).


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDEApertureData.PickupFrom"}]}`
-->

### Property IsPickedUp

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data_1ad7bc156d65107ee782e7c7b48bc8e534"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.LDE.ILDEApertureData.IsPickedUp
```


Gets a value indicating whether the aperture data is being picked up from another surface. If <code>true</code>, ChangeApertureTypeSettings will always return <code>false</code>.

<code>true</code> if this instance is picking up settings from another surface; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDEApertureData.IsPickedUp"}]}`
-->

### Property CurrentType

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data_1a1a889b7ef609eb0c1b77f4e793c46786"></a>

![][public]

**Definition**:


```csharp
SurfaceApertureTypes ZOSAPI.Editors.LDE.ILDEApertureData.CurrentType
```


Gets the current aperture type.

The type of the current aperture.


**Return type**: [SurfaceApertureTypes](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a15ca451182bc7f44b720da80d58d9830)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDEApertureData.CurrentType"}]}`
-->

### Property CurrentTypeSettings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data_1a4a38e4c04d8d2ff12336f8dc8ffb22cc"></a>

![][public]

**Definition**:


```csharp
ISurfaceApertureType ZOSAPI.Editors.LDE.ILDEApertureData.CurrentTypeSettings
```


Gets the current aperture type settings. Note that to change the aperture type use CreateApertureTypeSettings and ChangeApertureTypeSettings.

The current aperture type settings.


**Return type**: [ISurfaceApertureType](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDEApertureData.CurrentTypeSettings"}]}`
-->

### Property DisableClearSemiDiameterMarginsForThisSurface

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data_1a60271be9abb4a8e5941e48b2239e7747"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.LDE.ILDEApertureData.DisableClearSemiDiameterMarginsForThisSurface
```


Disable Clear Semi Diameter Margins for this Surface. When enabled, this will cause the values specified in the system explorer for [ISDApertureData.SemiDiameterMargin](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a4a06600bd4ab3acc37f2e7a936e393f8) and [ISDApertureData.SemiDiameterMarginPct](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a025e40cff0b1fea79675c53ddd84f39f) to be ignored.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDEApertureData.DisableClearSemiDiameterMarginsForThisSurface"}]}`
-->

## Public functions

### Function SetPickupNone

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data_1a167e5ae61e280f78013c68cddc4a8e97"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ILDEApertureData.SetPickupNone()
```


Sets PickupFrom to None.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDEApertureData.SetPickupNone"}]}`
-->

### Function CreateApertureTypeSettings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data_1a4dbb443475e2249c33d73b10c50c8ece"></a>

![][public]


```csharp
ISurfaceApertureType ZOSAPI.Editors.LDE.ILDEApertureData.CreateApertureTypeSettings(SurfaceApertureTypes type)
```


Creates the a settings interface for the specified aperture type. Note that changing these settings will have no effect until you call ChangeApertureTypeSettings.

Usage (see [Example 11](../apiexamples/example_11.md) for a full sample)


C# 
```csharp
            // Add Rectangular Aperture to Surface 1
            // Get surface 1, create aperture settings
            Surf_1 = TheSystem.LDE.GetSurfaceAt(1);
            ISurfaceApertureType rAperture = Surf_1.ApertureData.CreateApertureTypeSettings(SurfaceApertureTypes.RectangularAperture);
            // Set aperture size
            rAperture._S_RectangularAperture.XHalfWidth = 0.1;
            rAperture._S_RectangularAperture.YHalfWidth = 0.1;
            // Apply aperture settings to surface 1
            Surf_1.ApertureData.ChangeApertureTypeSettings(rAperture);
```
 C++ 
```csharp
    // Add Rectangular Aperture to Surface 1
    // Get surface 1, create aperture settings
    Surf_1 = TheSystem->LDE->GetSurfaceAt(1);
    ISurfaceApertureTypePtr rAperture = Surf_1->ApertureData->CreateApertureTypeSettings(SurfaceApertureTypes_RectangularAperture);
    // Set aperture size
    rAperture->_S_RectangularAperture->XHalfWidth = 0.1;
    rAperture->_S_RectangularAperture->YHalfWidth = 0.1;
    // Apply aperture settings to surface 1
    Surf_1->ApertureData->ChangeApertureTypeSettings(rAperture);
```
 Matlab 
```csharp
    % Add Rectangular Aperture to Surface 1
    % Get surface 1, create aperture settings
    Surf_1 = TheSystem.LDE.GetSurfaceAt(1);
    rAperture = Surf_1.ApertureData.CreateApertureTypeSettings(ZOSAPI.Editors.LDE.SurfaceApertureTypes.RectangularAperture);
    % Set aperture size
    rAperture.S_RectangularAperture_.XHalfWidth = 0.1;
    rAperture.S_RectangularAperture_.YHalfWidth = 0.1;
    % Apply aperture settings to surface 1
    Surf_1.ApertureData.ChangeApertureTypeSettings(rAperture);
```
 Python 
```csharp
    # Add Rectangular Aperture to Surface 1
    # Get surface 1, create aperture settings
    Surf_1 = TheSystem.LDE.GetSurfaceAt(1)
    rAperture = Surf_1.ApertureData.CreateApertureTypeSettings(ZOSAPI.Editors.LDE.SurfaceApertureTypes.RectangularAperture)
    # Set aperture size
    rAperture._S_RectangularAperture.XHalfWidth = .1
    rAperture._S_RectangularAperture.YHalfWidth = .1
    # Apply aperture settings to surface 1
    Surf_1.ApertureData.ChangeApertureTypeSettings(rAperture)
```
 


**Parameters**:

* **type**: The type.


**Returns**:


**Parameters**:

* [SurfaceApertureTypes](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a15ca451182bc7f44b720da80d58d9830) **type**

**Return type**: [ISurfaceApertureType](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDEApertureData.CreateApertureTypeSettings"}]}`
-->

### Function ChangeApertureTypeSettings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_aperture_data_1a14089fd69c14646e13d066f718d084d1"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILDEApertureData.ChangeApertureTypeSettings(ISurfaceApertureType settings)
```


Updates the surface aperture with the specified settings. Use CurrentTypeSettings or CreateApertureTypeSettings to retrieve the appropriate settings interface.

Usage (see [Example 11](../apiexamples/example_11.md) for a full sample)


C# 
```csharp
            // Add Rectangular Aperture to Surface 1
            // Get surface 1, create aperture settings
            Surf_1 = TheSystem.LDE.GetSurfaceAt(1);
            ISurfaceApertureType rAperture = Surf_1.ApertureData.CreateApertureTypeSettings(SurfaceApertureTypes.RectangularAperture);
            // Set aperture size
            rAperture._S_RectangularAperture.XHalfWidth = 0.1;
            rAperture._S_RectangularAperture.YHalfWidth = 0.1;
            // Apply aperture settings to surface 1
            Surf_1.ApertureData.ChangeApertureTypeSettings(rAperture);
```
 C++ 
```csharp
    // Add Rectangular Aperture to Surface 1
    // Get surface 1, create aperture settings
    Surf_1 = TheSystem->LDE->GetSurfaceAt(1);
    ISurfaceApertureTypePtr rAperture = Surf_1->ApertureData->CreateApertureTypeSettings(SurfaceApertureTypes_RectangularAperture);
    // Set aperture size
    rAperture->_S_RectangularAperture->XHalfWidth = 0.1;
    rAperture->_S_RectangularAperture->YHalfWidth = 0.1;
    // Apply aperture settings to surface 1
    Surf_1->ApertureData->ChangeApertureTypeSettings(rAperture);
```
 Matlab 
```csharp
    % Add Rectangular Aperture to Surface 1
    % Get surface 1, create aperture settings
    Surf_1 = TheSystem.LDE.GetSurfaceAt(1);
    rAperture = Surf_1.ApertureData.CreateApertureTypeSettings(ZOSAPI.Editors.LDE.SurfaceApertureTypes.RectangularAperture);
    % Set aperture size
    rAperture.S_RectangularAperture_.XHalfWidth = 0.1;
    rAperture.S_RectangularAperture_.YHalfWidth = 0.1;
    % Apply aperture settings to surface 1
    Surf_1.ApertureData.ChangeApertureTypeSettings(rAperture);
```
 Python 
```csharp
    # Add Rectangular Aperture to Surface 1
    # Get surface 1, create aperture settings
    Surf_1 = TheSystem.LDE.GetSurfaceAt(1)
    rAperture = Surf_1.ApertureData.CreateApertureTypeSettings(ZOSAPI.Editors.LDE.SurfaceApertureTypes.RectangularAperture)
    # Set aperture size
    rAperture._S_RectangularAperture.XHalfWidth = .1
    rAperture._S_RectangularAperture.YHalfWidth = .1
    # Apply aperture settings to surface 1
    Surf_1.ApertureData.ChangeApertureTypeSettings(rAperture)
```
 


**Parameters**:

* **settings**: The new settings.


**Returns**:


**Parameters**:

* [ISurfaceApertureType](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type) **settings**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDEApertureData.ChangeApertureTypeSettings"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
