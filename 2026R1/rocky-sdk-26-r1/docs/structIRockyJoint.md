# Structure IRockyJoint

<a id="structIRockyJoint"></a>

![][C++]
![][public]

**#include <rocky\_joint\_api.hpp>**



<code>[IRockyJoint](structIRockyJoint.md#structIRockyJoint)</code> is an interface for the internal joint object in Rocky. It contains methods that give access to joint physical properties and geometric data, in order to implement a custom model for the response of a joint to deformations. All property and variable values made available through <code>[IRockyJoint](structIRockyJoint.md#structIRockyJoint)</code> are dimensionless.





When it is necessary to distinguish between the two elements linked by a joint, one is referred to as _home element_, whereas the other is referred to as _near element_. The local coordinate framework associated to a joint has the normal unit vector always pointing from the home element to the near element. Whenever the name of a method or object associated to a joint includes the prefix _home_ or _near_, that means the method or object is related to the home or near element.

## Members

* [get\_angle\_scaling\_factor](structIRockyJoint.md#structIRockyJoint_1a200f5da4324981ce63eeca693082ce3f)
* [get\_angular\_damping\_coefficient](structIRockyJoint.md#structIRockyJoint_1a83db4989103e17e6158b6e96a030457d)
* [get\_angular\_deformation](structIRockyJoint.md#structIRockyJoint_1a46c8b6ca5aa8e78f55cb6c0a70f1cc6d)
* [get\_angular\_deformation\_direction](structIRockyJoint.md#structIRockyJoint_1ae4c1028eba2077ae552c21aba43ce638)
* [get\_angular\_deformation\_velocity](structIRockyJoint.md#structIRockyJoint_1a1be4ec6e88935d14a4b900d09fdbfadf)
* [get\_angular\_stiffness](structIRockyJoint.md#structIRockyJoint_1a299b8659e8bb2ddba28de92d18055e5b)
* [get\_area](structIRockyJoint.md#structIRockyJoint_1af2ea637b5ce30f553c19f973411ef451)
* [get\_area\_moment\_of\_inertia](structIRockyJoint.md#structIRockyJoint_1a22573a85d220d9db4afa1b0f67337196)
* [get\_bending\_elastic\_ratio](structIRockyJoint.md#structIRockyJoint_1a83474e7ee11615ca201de8fec94c8c22)
* [get\_damping\_force](structIRockyJoint.md#structIRockyJoint_1a7c2d0b63f577c279227b2df8daffbf5c)
* [get\_damping\_moment](structIRockyJoint.md#structIRockyJoint_1a71de79fea3ed20ae451b5cb36d2b6349)
* [get\_elastic\_force](structIRockyJoint.md#structIRockyJoint_1ab006cbc3b38064611dfa5dae2cbdf672)
* [get\_elastic\_moment](structIRockyJoint.md#structIRockyJoint_1a8eeb46a9210aeaf532467ecb77c580e7)
* [get\_element\_tags](structIRockyJoint.md#structIRockyJoint_1a37e1bd3fb20a03cf9be8a2d4dd317d22)
* [get\_equivalent\_mass](structIRockyJoint.md#structIRockyJoint_1a53d243061f43d6e0a291de65afec3b3c)
* [get\_home\_arm](structIRockyJoint.md#structIRockyJoint_1a86a5ed840cdc8b276f3ff65ad8148a3c)
* [get\_home\_element\_centroid\_position](structIRockyJoint.md#structIRockyJoint_1a4422c62fbad4e4f34c011d683fc0d859)
* [get\_home\_element\_orientation](structIRockyJoint.md#structIRockyJoint_1acd6105a244aacfbbc5a833760c7ca1b9)
* [get\_joint\_damping\_ratio](structIRockyJoint.md#structIRockyJoint_1a997ad60ff60b99d485c1d3d2fce74ff2)
* [get\_moments\_due\_to\_force](structIRockyJoint.md#structIRockyJoint_1a3447c9a4ef194097e8c3898b25ebe942)
* [get\_near\_arm](structIRockyJoint.md#structIRockyJoint_1a4129719851a851ff1ac7d0190d834ad3)
* [get\_near\_element\_centroid\_position](structIRockyJoint.md#structIRockyJoint_1a3a804cfa90d13e065de6d983d7a35caf)
* [get\_near\_element\_orientation](structIRockyJoint.md#structIRockyJoint_1addfb58409bb1dc5703d9d3ab64b3e458)
* [get\_normal\_damping\_coefficient](structIRockyJoint.md#structIRockyJoint_1ad55375a544cfd11a0c0fb52986b1fc74)
* [get\_normal\_deformation](structIRockyJoint.md#structIRockyJoint_1add47e1c2a985abef3a9fef24c44902e2)
* [get\_normal\_deformation\_velocity](structIRockyJoint.md#structIRockyJoint_1abd22a485b99c59a2141dff07e6f9b9e0)
* [get\_normal\_elastic\_ratio](structIRockyJoint.md#structIRockyJoint_1a0912316f01b3785c5f711aad2a3ebde1)
* [get\_normal\_stiffness](structIRockyJoint.md#structIRockyJoint_1a47718a93f4aa6bffe9ef0e03bfff3fa9)
* [get\_normal\_stiffness\_per\_area](structIRockyJoint.md#structIRockyJoint_1ad78b35364784e0ffe09508d99facd5a3)
* [get\_normal\_vector](structIRockyJoint.md#structIRockyJoint_1af300e95bee5d2a332c3085e6fad91af2)
* [get\_number\_angular\_deformations](structIRockyJoint.md#structIRockyJoint_1a7c84ef4dad6d9e1f38b2d227ac1f083a)
* [get\_poisson\_ratio](structIRockyJoint.md#structIRockyJoint_1a09693f2837c14dfb1a0fa4d40373553f)
* [get\_scalars](structIRockyJoint.md#structIRockyJoint_1af78ec40df8e4715343434772668bf70d)
* [get\_tangential\_damping\_coefficient](structIRockyJoint.md#structIRockyJoint_1a25c86f76033636ab37b3ff19ba60b41a)
* [get\_tangential\_deformation](structIRockyJoint.md#structIRockyJoint_1a3d324dbcee8a4366284a5fb84547dd9d)
* [get\_tangential\_deformation\_velocity](structIRockyJoint.md#structIRockyJoint_1a35e3299e0b5a35128aff0ca6f7604e38)
* [get\_tangential\_elastic\_ratio](structIRockyJoint.md#structIRockyJoint_1aeeae504e7d95c787e088c8dd5a55c83c)
* [get\_tangential\_stiffness](structIRockyJoint.md#structIRockyJoint_1a48e95a4cc7245305980339ea8ddf43b3)
* [get\_tangential\_stiffness\_per\_area](structIRockyJoint.md#structIRockyJoint_1a1444e28a82d898d15775180373952ee1)
* [get\_torsion\_elastic\_ratio](structIRockyJoint.md#structIRockyJoint_1a23fa06ce00c95412142f49e82825bca1)
* [get\_young\_modulus](structIRockyJoint.md#structIRockyJoint_1a2d57d8f171e77be4e1de3f2eb2b10fb3)
* [get\_young\_modulus\_multiplier](structIRockyJoint.md#structIRockyJoint_1a2f87ef623553e934f8fdca19d163669a)

## Public functions

<a id="structIRockyJoint_1ab006cbc3b38064611dfa5dae2cbdf672"></a>
### Function get\_elastic\_force

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyJoint::get_elastic_force() const
```




**Calculates the resultant force according to the linear elastic model**:

described in the DEM Technical Manual. This is useful when the custom module is going to implement a new model only for joint moments, while using the standard linear elastic model for the joint force. The force provided by this method is defined as positive in relation to the home element, and negative in relation to the near element.


**Returns**:

A vector in Cartesian coordinates, obtained as the vector sum of the normal and tangential forces, as defined in the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_elastic_force"}]}`
-->

<a id="structIRockyJoint_1a3447c9a4ef194097e8c3898b25ebe942"></a>
### Function get\_moments\_due\_to\_force

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS thrust::tuple< double3, double3 > IRockyJoint::get_moments_due_to_force(double3 force) const
```




**Calculates the moments of the joint force on the two linked elements.**:

As the lever arm of the joint force can be different for the two elements, the corresponding moment on each one of them can have different magnitude. This method must be called always after calculating the joint force.


**Parameters**:

* **force**: The joint force as a vector in Cartesian coordinates.


**Returns**:

A tuple of two vectors in Cartesian coordinates, the first one is the moment on the home element, the second one is the moment on the near element.



**Parameters**:

* double3 **force**

**Return type**: ROCKY_FUNCTIONS thrust::tuple< double3, double3 >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_moments_due_to_force"}]}`
-->

<a id="structIRockyJoint_1a8eeb46a9210aeaf532467ecb77c580e7"></a>
### Function get\_elastic\_moment

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyJoint::get_elastic_moment() const
```




**Calculates the resultant moment according to the linear elastic model**:

described in section 3.2.1 of the DEM Technical Manual. This is useful when the custom module is going to implement a new model only for the joint forces, while using the standard linear elastic model for the joint moments. The moment provided by this method is defined as positive in relation to the home element, and negative in relation to the near element.


**Returns**:

A vector in Cartesian coordinates, obtained as the vector sum of the moments defined in equations 3.5, 3.6 and 3.7 of the DEM Technical Manual. When the flexible particle is a fiber, equation 3.7 is disregarded, because only one bending moment exists in that case.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_elastic_moment"}]}`
-->

<a id="structIRockyJoint_1a7c2d0b63f577c279227b2df8daffbf5c"></a>
### Function get\_damping\_force

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyJoint::get_damping_force() const
```




**Calculates a viscous force proportional to the linear deformation**:

velocity of the joint. The addition of this force introduces a mechanism of energy dissipation that may help to attenuate internal vibrations between elements in a flexible particle. The force provided by this method is defined as positive in relation to the home element, and negative in relation to the near element.


**Returns**:

A vector in Cartesian coordinates, obtained as the vector sum of the forces defined in equations 3.18 and 3.19 of the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_damping_force"}]}`
-->

<a id="structIRockyJoint_1a71de79fea3ed20ae451b5cb36d2b6349"></a>
### Function get\_damping\_moment

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyJoint::get_damping_moment() const
```




**Calculates a viscous moment proportional to the angular deformation velocity**:

of the joint. The addition of this moment introduces a mechanism of energy dissipation that may help to attenuate internal angular oscillations between elements in a flexible particle.


**Returns**:

A vector in Cartesian coordinates, obtained as the vector sum of the moments defined in equations 3.20, 3.21 and 3.22 of the DEM Technical Manual. When the flexible particle is a fiber, equation 3.22 is disregarded because bending occurs in only one direction in that case. The moment provided by this method is defined as positive in relation to the home element, and negative in relation to the near element.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_damping_moment"}]}`
-->

<a id="structIRockyJoint_1add47e1c2a985abef3a9fef24c44902e2"></a>
### Function get\_normal\_deformation

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyJoint::get_normal_deformation() const
```




**Calculates the normal component of the linear deformation of the joint.**:

The joint linear deformation is defined as the relative displacement vector between the joint center points in the two linked elements. This vector is oriented pointing from the home element to the near element.


**Returns**:

A vector in Cartesian coordinates, calculated as the product of the magnitude given and the normal unit vector. For more details, please refer to the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_normal_deformation"}]}`
-->

<a id="structIRockyJoint_1a3d324dbcee8a4366284a5fb84547dd9d"></a>
### Function get\_tangential\_deformation

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyJoint::get_tangential_deformation() const
```




**Calculates the tangential component of the linear deformation of the joint.**:

The joint linear deformation is defined as the relative displacement vector between the joint center points in the two linked elements.


**Returns**:

A vector in Cartesian coordinates. For more details, please refer to the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_tangential_deformation"}]}`
-->

<a id="structIRockyJoint_1abd22a485b99c59a2141dff07e6f9b9e0"></a>
### Function get\_normal\_deformation\_velocity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyJoint::get_normal_deformation_velocity() const
```




**Calculates the normal component of the linear deformation**:

velocity of the joint. This velocity is the time derivative of the relative displacement vector between the center points associated to the joint in the two linked elements. The decomposition of this vector into normal and tangential directions is analogous to the one depicted in figure 3.3 of the DEM Technical Manual.


**Returns**:

The normal component of the linear deformation velocity, expressed in Cartesian coordinates.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_normal_deformation_velocity"}]}`
-->

<a id="structIRockyJoint_1a35e3299e0b5a35128aff0ca6f7604e38"></a>
### Function get\_tangential\_deformation\_velocity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyJoint::get_tangential_deformation_velocity() const
```




**Calculates the tangential component of the linear deformation**:

velocity of the joint. This velocity is the time derivative of the relative displacement vector between the center points associated to the joint in the two linked elements. The decomposition of this vector into normal and tangential directions is analogous to the one depicted in figure 3.3 of the DEM Technical Manual.


**Returns**:

The tangential component of the linear deformation velocity, expressed in Cartesian coordinates.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_tangential_deformation_velocity"}]}`
-->

<a id="structIRockyJoint_1a7c84ef4dad6d9e1f38b2d227ac1f083a"></a>
### Function get\_number\_angular\_deformations

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS int IRockyJoint::get_number_angular_deformations() const
```




**Returns**:

An integer representing the number of possible angular deformations. For joints in a flexible fiber, it will return 2 (torsion and bending), while for joints in the other particle types, it will return 3 (torsion and two bending directions).



**Return type**: ROCKY_FUNCTIONS int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_number_angular_deformations"}]}`
-->

<a id="structIRockyJoint_1a46c8b6ca5aa8e78f55cb6c0a70f1cc6d"></a>
### Function get\_angular\_deformation

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_angular_deformation(int deformation_direction) const
```




**Calculates the angular deformation of the joint in one of the**:

possible three mutually orthogonal directions. Figure 3.7 of the DEM Technical Manual illustrates those angles and directions for the shell case.


**Parameters**:

* **deformation_direction**: An integer index that identifies the deformation direction. The three possible values for this parameter are: 0 &ndash torsion direction, 1 &ndash first bending direction, 2 &ndash second bending direction.


**Returns**:

The value of the angle for the given direction.



**Parameters**:

* int **deformation_direction**

**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_angular_deformation"}]}`
-->

<a id="structIRockyJoint_1a1be4ec6e88935d14a4b900d09fdbfadf"></a>
### Function get\_angular\_deformation\_velocity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_angular_deformation_velocity(int deformation_direction) const
```




**Calculates the angular deformation velocity of the joint**:

in one of the possible three mutually orthogonal directions.


**Parameters**:

* **deformation_direction**: An integer index that identifies the deformation direction. The three possible values for this parameter are: 0 &ndash torsion, 1 &ndash first bending direction, 2 &ndash second bending direction.


**Returns**:

The magnitude of the angular deformation velocity for the given direction.



**Parameters**:

* int **deformation_direction**

**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_angular_deformation_velocity"}]}`
-->

<a id="structIRockyJoint_1ae4c1028eba2077ae552c21aba43ce638"></a>
### Function get\_angular\_deformation\_direction

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyJoint::get_angular_deformation_direction(int deformation_direction) const
```




**Returns the unit vector in one of the three mutually orthogonal**:

directions that define the joint local framework.


**Parameters**:

* **deformation_direction**: An integer index that identifies the deformation direction. The three possible values for this parameter are: 0 &ndash torsion, 1 &ndash first bending direction, 2 &ndash second bending direction.


**Returns**:

The unit vector in Cartesian coordinates associated to for the given direction.



**Parameters**:

* int **deformation_direction**

**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_angular_deformation_direction"}]}`
-->

<a id="structIRockyJoint_1a47718a93f4aa6bffe9ef0e03bfff3fa9"></a>
### Function get\_normal\_stiffness

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_normal_stiffness() const
```




**Calculates the stiffness value for computing the joint normal**:

force according to the linear elastic model. This stiffness can be used as a reference stiffness value for calculating the joint normal force with a custom joint model.


**Returns**:

The stiffness value calculated. For more details, please refer to the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_normal_stiffness"}]}`
-->

<a id="structIRockyJoint_1a48e95a4cc7245305980339ea8ddf43b3"></a>
### Function get\_tangential\_stiffness

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_tangential_stiffness() const
```




**Calculates the stiffness value for computing the joint tangential**:

force according to the linear elastic model. This stiffness can be used as a reference stiffness value for calculating the joint tangential force with a custom joint model.


**Returns**:

The stiffness value calculated. For more details, please refer to the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_tangential_stiffness"}]}`
-->

<a id="structIRockyJoint_1a299b8659e8bb2ddba28de92d18055e5b"></a>
### Function get\_angular\_stiffness

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_angular_stiffness(int deformation_direction) const
```




**Calculates the stiffness value for computing a joint moment**:

in one of the three orthogonal local directions, according to the linear elastic model. This stiffness can be used as a reference stiffness value for calculating a joint moment with a custom joint model.


**Parameters**:

* **deformation_direction**: An integer index that identifies the deformation direction. The three possible values for this parameter are: 0 &ndash torsion, 1 &ndash first bending direction, 2 &ndash second bending direction.


**Returns**:

A stiffness value calculated with one of the following equations of the DEM Technical Manual: equation 3.10 if deformation_direction = 0, equation 3.11 if deformation_direction = 1, or equation 3.12 if deformation_direction = 2.



**Parameters**:

* int **deformation_direction**

**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_angular_stiffness"}]}`
-->

<a id="structIRockyJoint_1ad55375a544cfd11a0c0fb52986b1fc74"></a>
### Function get\_normal\_damping\_coefficient

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_normal_damping_coefficient() const
```




**Calculates the damping coefficient for computing the normal**:

component of the viscous force.


**Returns**:

The damping coefficient calculated. For more details, please refer to the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_normal_damping_coefficient"}]}`
-->

<a id="structIRockyJoint_1a25c86f76033636ab37b3ff19ba60b41a"></a>
### Function get\_tangential\_damping\_coefficient

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_tangential_damping_coefficient() const
```




**Calculates the damping coefficient for computing the tangential**:

component of the viscous force.


**Returns**:

The damping coefficient calculated. For more details, please refer to the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_tangential_damping_coefficient"}]}`
-->

<a id="structIRockyJoint_1a83db4989103e17e6158b6e96a030457d"></a>
### Function get\_angular\_damping\_coefficient

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_angular_damping_coefficient(int deformation_direction) const
```




**Calculates the damping coefficient for computing a viscous moment**:

in one of the three orthogonal local directions.


**Parameters**:

* **deformation_direction**: An integer index that identifies the deformation direction. The three possible values for this parameter are: 0 &ndash torsion, 1 &ndash first bending direction, 2 &ndash second bending direction.


**Returns**:

A damping coefficient calculated with one of the following equations of the DEM Technical Manual: equation 3.25 if deformation_direction = 0, equation 3.26 if deformation_direction = 1, or equation 3.27 if deformation_direction = 2.



**Parameters**:

* int **deformation_direction**

**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_angular_damping_coefficient"}]}`
-->

<a id="structIRockyJoint_1af300e95bee5d2a332c3085e6fad91af2"></a>
### Function get\_normal\_vector

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyJoint::get_normal_vector() const
```




**Returns**:

The unit normal vector associated to the joint. This vector is defined as indicated in Figure 3.2. It is oriented pointing always to the home element.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_normal_vector"}]}`
-->

<a id="structIRockyJoint_1af2ea637b5ce30f553c19f973411ef451"></a>
### Function get\_area

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_area() const
```




**Returns**:

The cross sectional area associated to the joint. For fibers, it will be the area of the circular section of the element with smaller diameter between the two connected by the joint. For shells, it will be the area of the rectangle whose dimensions are the shell thickness and the length of the corresponding triangle's edge. For polyhedra, it will be the area of the triangular face common to the two tetrahedral elements connected by the joint.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_area"}]}`
-->

<a id="structIRockyJoint_1a22573a85d220d9db4afa1b0f67337196"></a>
### Function get\_area\_moment\_of\_inertia

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_area_moment_of_inertia(int deformation_direction) const
```




**Parameters**:

* **deformation_direction**: An integer index that identifies the deformation direction. The three possible values for this parameter are: 0 &ndash torsion, 1 &ndash first bending direction, 2 &ndash second bending direction.


**Returns**:

The area moment of inertia of the cross section of the joint associated to deformation_direction. If deformation_direction = 0, the polar area moment of inertia is returned.



**Parameters**:

* int **deformation_direction**

**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_area_moment_of_inertia"}]}`
-->

<a id="structIRockyJoint_1a2d57d8f171e77be4e1de3f2eb2b10fb3"></a>
### Function get\_young\_modulus

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_young_modulus() const
```




**Returns**:

The value of the Young's modulus specified in the Rocky UI for the material associated to the particle.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_young_modulus"}]}`
-->

<a id="structIRockyJoint_1a09693f2837c14dfb1a0fa4d40373553f"></a>
### Function get\_poisson\_ratio

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_poisson_ratio() const
```




**Returns**:

The value of the Poisson's ratio specified in the Rocky UI for the material associated to the particle. If Poisson's ratio is configured as a variable property (i.e. each particle have a Poisson's ratio value), then the ratio is the average between home and near elements ratios.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_poisson_ratio"}]}`
-->

<a id="structIRockyJoint_1a0912316f01b3785c5f711aad2a3ebde1"></a>
### Function get\_normal\_elastic\_ratio

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_normal_elastic_ratio() const
```




**The normal elastic ratio is defined as the ratio between the Young's modulus**:

employed for calculating the stiffness in the normal direction to the Young's modulus specified for the particle's material.


**Returns**:

If the [Anisotropic] option is enabled in the Rocky UI, it will return the value specified for the elastic ratio in the normal direction. Otherwise, it is assumed an isotropic behavior and it will return the value specified for the only elastic ratio that appears in the Rocky UI.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_normal_elastic_ratio"}]}`
-->

<a id="structIRockyJoint_1aeeae504e7d95c787e088c8dd5a55c83c"></a>
### Function get\_tangential\_elastic\_ratio

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_tangential_elastic_ratio() const
```




**The tangential elastic ratio is defined as the ratio between the Young's modulus**:

employed for calculating the stiffness in the tangential direction to the Young's modulus specified for the particle's material.


**Returns**:

If the [Anisotropic] option is enabled in the Rocky UI, it will return the value specified for the elastic ratio in the tangential direction. Otherwise, it is assumed an isotropic behavior and it will return the value specified for the only elastic ratio that appears in the Rocky UI.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_tangential_elastic_ratio"}]}`
-->

<a id="structIRockyJoint_1a23fa06ce00c95412142f49e82825bca1"></a>
### Function get\_torsion\_elastic\_ratio

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_torsion_elastic_ratio() const
```




**The torsion elastic ratio is defined as the ratio between the Young's modulus**:

employed for calculating the stiffness for torsional deformations to the Young's modulus specified for the particle's material.


**Returns**:

If the [Anisotropic] option is enabled in the Rocky UI, it will return the value specified for the elastic ratio for torsional deformations. Otherwise, it is assumed an isotropic behavior and it will return the value specified for the only elastic ratio that appears in the Rocky UI.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_torsion_elastic_ratio"}]}`
-->

<a id="structIRockyJoint_1a83474e7ee11615ca201de8fec94c8c22"></a>
### Function get\_bending\_elastic\_ratio

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_bending_elastic_ratio() const
```




**The bending elastic ratio is defined as the ratio between the Young's modulus**:

employed for calculating the stiffness for bending deformations to the Young's modulus specified for the particle's material.


**Returns**:

If the [Anisotropic] option is enabled in the Rocky UI, it will return the value specified for the elastic ratio for bending deformations. Otherwise, it is assumed an isotropic behavior and it will return the value specified for the only elastic ratio that appears in the Rocky UI.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_bending_elastic_ratio"}]}`
-->

<a id="structIRockyJoint_1a997ad60ff60b99d485c1d3d2fce74ff2"></a>
### Function get\_joint\_damping\_ratio

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_joint_damping_ratio() const
```




**Returns**:

The value of the damping ratio specified for the joint, used in the joint damping model. This is a user input parameter with values between 0 and 1, which specifies the intensity of the damping applied to the joints. For more details, please refer to the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_joint_damping_ratio"}]}`
-->

<a id="structIRockyJoint_1a200f5da4324981ce63eeca693082ce3f"></a>
### Function get\_angle\_scaling\_factor

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_angle_scaling_factor() const
```




**When the number of elements making up a flexible particle is increased,**:

the bending deformation angles tend to decrease, for the same configuration of external forces acting on the particle. This is a side effect of the discretized representation of a flexible particle. In order to prevent the abnormal influence of this phenomenon on models that have a bending angle as a parameter (for instance a threshold angle for the change of regime), that angle can be multiplied by the scaling factor provided by this function. This scaling factor is defined as the inverse of the number of elements of the particle, when it is a fiber. For shells, it is defined as the inverse of the square root of the number of elements.


**Returns**:

The angle scaling factor defined above.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_angle_scaling_factor"}]}`
-->

<a id="structIRockyJoint_1a53d243061f43d6e0a291de65afec3b3c"></a>
### Function get\_equivalent\_mass

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_equivalent_mass() const
```




**Returns**:

The equivalent or effective mass used for calculating joint damping coefficients as indicated, for instance. For more details, please refer to the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_equivalent_mass"}]}`
-->

<a id="structIRockyJoint_1ad78b35364784e0ffe09508d99facd5a3"></a>
### Function get\_normal\_stiffness\_per\_area

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_normal_stiffness_per_area() const
```




**Returns**:

The value of the normal stiffness per area unit associated to the joint. Please refer to the DEM Technical Manual for an explanation of how this parameter is calculated for different flexible particle shapes.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_normal_stiffness_per_area"}]}`
-->

<a id="structIRockyJoint_1a1444e28a82d898d15775180373952ee1"></a>
### Function get\_tangential\_stiffness\_per\_area

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_tangential_stiffness_per_area() const
```




**Returns**:

The value of the tangential stiffness per area unit associated to the joint. Please refer to the DEM Technical Manual for an explanation of how this parameter is calculated for different flexible particle shapes.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_tangential_stiffness_per_area"}]}`
-->

<a id="structIRockyJoint_1a2f87ef623553e934f8fdca19d163669a"></a>
### Function get\_young\_modulus\_multiplier

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJoint::get_young_modulus_multiplier() const
```




**Returns**:

For custom fibers only, this will return the factor in the right-hand side of equation 3.15 in the DEM Technical Manual. For any other particle type, it will return 1.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_young_modulus_multiplier"}]}`
-->

<a id="structIRockyJoint_1af78ec40df8e4715343434772668bf70d"></a>
### Function get\_scalars

![][public]


```cpp
ROCKY_FUNCTIONS IRockyJointScalars IRockyJoint::get_scalars()
```




**If a scalar variable was defined during the setup of the module,**:

this method can be used access such variables. Joint scalars are special variables that store custom values per joint, in order to preserve them between time iterations.


**Returns**:

The class to manipulate joint's scalars



**Return type**: ROCKY_FUNCTIONS [IRockyJointScalars](structIRockyJointScalars.md#structIRockyJointScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_scalars"}]}`
-->

<a id="structIRockyJoint_1acd6105a244aacfbbc5a833760c7ca1b9"></a>
### Function get\_home\_element\_orientation

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS thrust::tuple< double3, double > IRockyJoint::get_home_element_orientation() const
```




**Returns**:

A tuple whose two components define the axis-angle _home_ element orientation. The first one is a three dimensional vector representing the orientation axis, the second one is a single value representing the angle.



**Return type**: ROCKY_FUNCTIONS thrust::tuple< double3, double >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_home_element_orientation"}]}`
-->

<a id="structIRockyJoint_1addfb58409bb1dc5703d9d3ab64b3e458"></a>
### Function get\_near\_element\_orientation

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS thrust::tuple< double3, double > IRockyJoint::get_near_element_orientation() const
```




**Returns**:

A tuple whose two components define the axis-angle _near_ element orientation. The first one is a three dimensional vector representing the orientation axis, the second one is a single value representing the angle.



**Return type**: ROCKY_FUNCTIONS thrust::tuple< double3, double >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_near_element_orientation"}]}`
-->

<a id="structIRockyJoint_1a4422c62fbad4e4f34c011d683fc0d859"></a>
### Function get\_home\_element\_centroid\_position

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyJoint::get_home_element_centroid_position() const
```




**Returns**:

The joint _home element_ center point coordinates.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_home_element_centroid_position"}]}`
-->

<a id="structIRockyJoint_1a3a804cfa90d13e065de6d983d7a35caf"></a>
### Function get\_near\_element\_centroid\_position

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyJoint::get_near_element_centroid_position() const
```




**Returns**:

The joint _near element_ center point coordinates.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_near_element_centroid_position"}]}`
-->

<a id="structIRockyJoint_1a86a5ed840cdc8b276f3ff65ad8148a3c"></a>
### Function get\_home\_arm

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyJoint::get_home_arm() const
```




**Returns**:

The vector that joins the _home element_ center to the joint center.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_home_arm"}]}`
-->

<a id="structIRockyJoint_1a4129719851a851ff1ac7d0190d834ad3"></a>
### Function get\_near\_arm

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyJoint::get_near_arm() const
```




**Returns**:

The vector that joins the _near element_ center to the joint center.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_near_arm"}]}`
-->

<a id="structIRockyJoint_1a37e1bd3fb20a03cf9be8a2d4dd317d22"></a>
### Function get\_element\_tags

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS thrust::tuple< int, int > IRockyJoint::get_element_tags() const
```




**Returns**:

The values of custom tags (integer values) assigned to the two elements attached to the joint. These tags are inherited from tags assigned to the segments that define the center line of a custom fiber. The values of those tags must be specified in the column labeled "tag" in the csv file that defines the geometry of a custom fiber. If tags are not defined for a custom fiber or if this function is used with flexible particles other than custom fibers, this function will return two values equal to -1.



**Return type**: ROCKY_FUNCTIONS thrust::tuple< int, int >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJoint::get_element_tags"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)