# Interface ZOSAPI::Editors::LDE::ISurfaceApertureType

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type"></a>

![][C#]
![][public]

**Definition**:

Base interface for settings specific to a SurfaceApertureTypes. This interface can be retrieved from a ILDEApertureData interface. Note that the "_S_" properties are convenience methods for retrieving the derived interface for the appropriate aperture type settings.

Usage (see [Example 11](page_ex11.md#page_ex11) for a full sample)


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

**Inherited by**:

* [ZOSAPI.Editors.LDE.ISurfaceApertureCircular](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_circular.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_circular)
* [ZOSAPI.Editors.LDE.ISurfaceApertureElliptical](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_elliptical.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_elliptical)
* [ZOSAPI.Editors.LDE.ISurfaceApertureFloating](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_floating.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_floating)
* [ZOSAPI.Editors.LDE.ISurfaceApertureNone](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_none.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_none)
* [ZOSAPI.Editors.LDE.ISurfaceApertureRectangular](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular)
* [ZOSAPI.Editors.LDE.ISurfaceApertureSpider](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_spider.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_spider)
* [ZOSAPI.Editors.LDE.ISurfaceApertureUser](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_user.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_user)

## Members

* [\_S\_CircularAperture](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a439f659dc8b447aa2364331272bab3f8)
* [\_S\_CircularObscuration](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a72f7b1a973ffb930e44a0bb3f4c303d6)
* [\_S\_EllipticalAperture](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a8bf0bd56f4ef3bd17e93e5f75d31321a)
* [\_S\_EllipticalObscuration](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a7cc88fc8d4813432e34ba60574ea45e0)
* [\_S\_FloatingAperture](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a7658d2c1d3184eba37ec2c48649cd22f)
* [\_S\_None](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a8393381e491d65ad1f9417530dfe7fb2)
* [\_S\_RectangularAperture](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a1d1e419402700e0edec105a4ecd2f74b)
* [\_S\_RectangularObscuration](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1aacca3dac48ca8b6158e930c337a76c01)
* [\_S\_Spider](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a62a972d32de630a4614f41ed7a3c1e93)
* [\_S\_UserAperture](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1aa6deb3086d0296399f9f5a0b4d2bc25b)
* [\_S\_UserObscuration](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a2d9f9e4546901ab0c695a5934f41c3da)
* [IsReadOnly](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1ad179ddbace72e5ddbc188138f2793d61)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a2ba4db1052563f4ff2b27488ffedc0c2)

## Properties

### Property Type

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a2ba4db1052563f4ff2b27488ffedc0c2"></a>

![][public]

**Definition**:


```csharp
SurfaceApertureTypes ZOSAPI.Editors.LDE.ISurfaceApertureType.Type
```


Gets the type.

The type.


**Return type**: [SurfaceApertureTypes](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a15ca451182bc7f44b720da80d58d9830)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureType.Type"}]}`
-->

### Property IsReadOnly

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1ad179ddbace72e5ddbc188138f2793d61"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.LDE.ISurfaceApertureType.IsReadOnly
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureType.IsReadOnly"}]}`
-->

### Property \_S\_None

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a8393381e491d65ad1f9417530dfe7fb2"></a>

![][public]

**Definition**:


```csharp
ISurfaceApertureNone ZOSAPI.Editors.LDE.ISurfaceApertureType._S_None
```


**Return type**: [ISurfaceApertureNone](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_none.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_none)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureType._S_None"}]}`
-->

### Property \_S\_CircularAperture

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a439f659dc8b447aa2364331272bab3f8"></a>

![][public]

**Definition**:


```csharp
ISurfaceApertureCircular ZOSAPI.Editors.LDE.ISurfaceApertureType._S_CircularAperture
```


**Return type**: [ISurfaceApertureCircular](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_circular.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_circular)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureType._S_CircularAperture"}]}`
-->

### Property \_S\_CircularObscuration

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a72f7b1a973ffb930e44a0bb3f4c303d6"></a>

![][public]

**Definition**:


```csharp
ISurfaceApertureCircular ZOSAPI.Editors.LDE.ISurfaceApertureType._S_CircularObscuration
```


**Return type**: [ISurfaceApertureCircular](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_circular.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_circular)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureType._S_CircularObscuration"}]}`
-->

### Property \_S\_Spider

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a62a972d32de630a4614f41ed7a3c1e93"></a>

![][public]

**Definition**:


```csharp
ISurfaceApertureSpider ZOSAPI.Editors.LDE.ISurfaceApertureType._S_Spider
```


**Return type**: [ISurfaceApertureSpider](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_spider.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_spider)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureType._S_Spider"}]}`
-->

### Property \_S\_RectangularAperture

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a1d1e419402700e0edec105a4ecd2f74b"></a>

![][public]

**Definition**:


```csharp
ISurfaceApertureRectangular ZOSAPI.Editors.LDE.ISurfaceApertureType._S_RectangularAperture
```


**Return type**: [ISurfaceApertureRectangular](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureType._S_RectangularAperture"}]}`
-->

### Property \_S\_RectangularObscuration

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1aacca3dac48ca8b6158e930c337a76c01"></a>

![][public]

**Definition**:


```csharp
ISurfaceApertureRectangular ZOSAPI.Editors.LDE.ISurfaceApertureType._S_RectangularObscuration
```


**Return type**: [ISurfaceApertureRectangular](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureType._S_RectangularObscuration"}]}`
-->

### Property \_S\_EllipticalAperture

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a8bf0bd56f4ef3bd17e93e5f75d31321a"></a>

![][public]

**Definition**:


```csharp
ISurfaceApertureElliptical ZOSAPI.Editors.LDE.ISurfaceApertureType._S_EllipticalAperture
```


**Return type**: [ISurfaceApertureElliptical](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_elliptical.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_elliptical)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureType._S_EllipticalAperture"}]}`
-->

### Property \_S\_EllipticalObscuration

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a7cc88fc8d4813432e34ba60574ea45e0"></a>

![][public]

**Definition**:


```csharp
ISurfaceApertureElliptical ZOSAPI.Editors.LDE.ISurfaceApertureType._S_EllipticalObscuration
```


**Return type**: [ISurfaceApertureElliptical](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_elliptical.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_elliptical)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureType._S_EllipticalObscuration"}]}`
-->

### Property \_S\_UserAperture

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1aa6deb3086d0296399f9f5a0b4d2bc25b"></a>

![][public]

**Definition**:


```csharp
ISurfaceApertureUser ZOSAPI.Editors.LDE.ISurfaceApertureType._S_UserAperture
```


**Return type**: [ISurfaceApertureUser](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_user.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_user)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureType._S_UserAperture"}]}`
-->

### Property \_S\_UserObscuration

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a2d9f9e4546901ab0c695a5934f41c3da"></a>

![][public]

**Definition**:


```csharp
ISurfaceApertureUser ZOSAPI.Editors.LDE.ISurfaceApertureType._S_UserObscuration
```


**Return type**: [ISurfaceApertureUser](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_user.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_user)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureType._S_UserObscuration"}]}`
-->

### Property \_S\_FloatingAperture

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a7658d2c1d3184eba37ec2c48649cd22f"></a>

![][public]

**Definition**:


```csharp
ISurfaceApertureFloating ZOSAPI.Editors.LDE.ISurfaceApertureType._S_FloatingAperture
```


**Return type**: [ISurfaceApertureFloating](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_floating.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_floating)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureType._S_FloatingAperture"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)