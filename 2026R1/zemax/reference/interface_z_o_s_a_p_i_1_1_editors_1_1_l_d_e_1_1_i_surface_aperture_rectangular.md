# Interface ZOSAPI::Editors::LDE::ISurfaceApertureRectangular

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular"></a>

![][C#]
![][public]

**Definition**:

Aperture Type - Rectangular Aperture / Obscuration. This interface can be retrieved from a ILDEApertureData interface.

Usage (see [Example 19](page_ex19.md#page_ex19) for a full sample)


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

**Inherits from**:

* [ZOSAPI.Editors.LDE.ISurfaceApertureType](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type)

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
* [ApertureXDecenter](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular_1a6485a732107f29455a3257e42cc7009a)
* [ApertureYDecenter](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular_1acaef69bebea52a24e65bfc650040cf9d)
* [IsReadOnly](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1ad179ddbace72e5ddbc188138f2793d61)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_type_1a2ba4db1052563f4ff2b27488ffedc0c2)
* [XHalfWidth](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular_1a6f046af885e187231513289a35b3dce2)
* [YHalfWidth](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular_1a6dab8ab83d8d9f260e74eb9603a38047)

## Properties

### Property XHalfWidth

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular_1a6f046af885e187231513289a35b3dce2"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.LDE.ISurfaceApertureRectangular.XHalfWidth
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureRectangular.XHalfWidth"}]}`
-->

### Property YHalfWidth

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular_1a6dab8ab83d8d9f260e74eb9603a38047"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.LDE.ISurfaceApertureRectangular.YHalfWidth
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureRectangular.YHalfWidth"}]}`
-->

### Property ApertureXDecenter

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular_1a6485a732107f29455a3257e42cc7009a"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.LDE.ISurfaceApertureRectangular.ApertureXDecenter
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureRectangular.ApertureXDecenter"}]}`
-->

### Property ApertureYDecenter

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_aperture_rectangular_1acaef69bebea52a24e65bfc650040cf9d"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.LDE.ISurfaceApertureRectangular.ApertureYDecenter
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceApertureRectangular.ApertureYDecenter"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)