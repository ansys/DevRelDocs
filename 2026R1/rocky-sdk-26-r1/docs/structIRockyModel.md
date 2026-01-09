<a id="structIRockyModel"></a>
# Structure IRockyModel

![][C++]
![][public]

**#include <rocky\_api.h>**



<code>[IRockyModel](structIRockyModel.md#structIRockyModel)</code> includes auxiliary functions for setting up a custom module. Most of the preprocessing methods (such as <code>ROCKY_PLUGIN_SETUP</code>, <code>ROCKY_PLUGIN_INITIALIZE</code>, <code>ROCKY_PLUGIN_NON_DIMENSIONALIZE</code>, etc) provide an <code>[IRockyModel](structIRockyModel.md#structIRockyModel)</code> object as an argument.

## Members

* [find\_point\_cloud](structIRockyModel.md#structIRockyModel_1ae4797d71a2b43ae408fe83e317f818b7)
* [find\_point\_cloud\_property](structIRockyModel.md#structIRockyModel_1aabdba4a3eee5c51c75c45345f6cf6839)
* [get\_contact\_data\_recorder](structIRockyModel.md#structIRockyModel_1a4f71066b464f74b32fb560c8a58dd030)
* [get\_current\_time](structIRockyModel.md#structIRockyModel_1a93ef35ae1eb9cf50ca77ab2070a769ab)
* [get\_curve\_collections](structIRockyModel.md#structIRockyModel_1a65411ff4a85f74e96457979f8158eccd)
* [get\_device\_id](structIRockyModel.md#structIRockyModel_1ae8f8865c809a31988291f9180d7cda2b)
* [get\_energy\_factor](structIRockyModel.md#structIRockyModel_1a9fba76aa437dad8ff9674eedb0b6acc0)
* [get\_force\_factor](structIRockyModel.md#structIRockyModel_1a8800430b5e336d3fd04d0fce83f83883)
* [get\_geometry\_name](structIRockyModel.md#structIRockyModel_1a7fb2a67e2e5126c5140ce80ede04b713)
* [get\_geometry\_scalars](structIRockyModel.md#structIRockyModel_1a43441eb2d02d3dc9c691328eef5e99b5)
* [get\_gravity](structIRockyModel.md#structIRockyModel_1a5dcfa443dbca79a9c34001fca9873b93)
* [get\_interactions\_data](structIRockyModel.md#structIRockyModel_1ac9a1e9a6ac20f978dd08f6fc67fd0904)
* [get\_joint\_scalars](structIRockyModel.md#structIRockyModel_1ac6b0ba79dc72914434cfce14b9807e22)
* [get\_length\_factor](structIRockyModel.md#structIRockyModel_1acdec4e25234fe0304e441d82ccfc3192)
* [get\_mass\_factor](structIRockyModel.md#structIRockyModel_1ae8c9acf215323ada8de9ff9344b1db94)
* [get\_number\_of\_active\_particles](structIRockyModel.md#structIRockyModel_1a38a15145f4f2bb47b79ab785f50d8277)
* [get\_number\_of\_active\_triangles](structIRockyModel.md#structIRockyModel_1a4bfb9f69ea26364b55aaad33463de669)
* [get\_number\_of\_devices](structIRockyModel.md#structIRockyModel_1a1fd1011aa809fe64647e9cacf1956a11)
* [get\_number\_of\_geometries](structIRockyModel.md#structIRockyModel_1a54b2c41da7a4f9f719ac76fb83f0eb0a)
* [get\_number\_of\_material\_interactions](structIRockyModel.md#structIRockyModel_1a59425e7004ad5636d9a6dc06e31e288d)
* [get\_number\_of\_materials](structIRockyModel.md#structIRockyModel_1a56c275ba379255adc3b2fc2af8ea83d7)
* [get\_number\_of\_particle\_groups](structIRockyModel.md#structIRockyModel_1a1b8fe53d49b68f6097261e884fa769c5)
* [get\_number\_of\_particles](structIRockyModel.md#structIRockyModel_1a1c6cf48153d8b8278bcc67c3f31eff7b)
* [get\_number\_of\_processes](structIRockyModel.md#structIRockyModel_1a5e03d46944ec6e42596ee5f2d5f8aaeb)
* [get\_output\_interval](structIRockyModel.md#structIRockyModel_1ae98c232add53267e07db794e37304a25)
* [get\_pair\_scalars](structIRockyModel.md#structIRockyModel_1a2fe828d3fb961280069bb549d49a52bc)
* [get\_particle\_breakage\_scalars](structIRockyModel.md#structIRockyModel_1a1076a0e1ada498f29c18caf6840e520a)
* [get\_particle\_contact\_scalars](structIRockyModel.md#structIRockyModel_1a552edce9a8cb94fc20d5286f43f2185b)
* [get\_particle\_group\_name](structIRockyModel.md#structIRockyModel_1a04e185eee0bdd70cc84ad48459584823)
* [get\_particle\_scalars](structIRockyModel.md#structIRockyModel_1a4788543c01a10a60e17c3623a6847708)
* [get\_particle\_transfer\_scalars](structIRockyModel.md#structIRockyModel_1a9c78ff441fc0220adf389ae4b733c808)
* [get\_power\_factor](structIRockyModel.md#structIRockyModel_1a33a082f281ae2ca159cdb420d2fabbb8)
* [get\_pressure\_factor](structIRockyModel.md#structIRockyModel_1abb53bd424c9e2d61065410a0b2d53b8b)
* [get\_simulation\_variables](structIRockyModel.md#structIRockyModel_1ae53de7e654b59031b4a5787a3330c96b)
* [get\_softening\_factor](structIRockyModel.md#structIRockyModel_1a3caea658ae1557e11ed4e72dc80fb0a2)
* [get\_temperature\_factor](structIRockyModel.md#structIRockyModel_1afdf327f827860b500a82c511492d2f1e)
* [get\_time\_factor](structIRockyModel.md#structIRockyModel_1aadaee25a53bade557d45bf633e995690)
* [get\_timestep](structIRockyModel.md#structIRockyModel_1a6c0be64519ddd583f26570ece5a4aee1)
* [get\_triangle\_contact\_scalars](structIRockyModel.md#structIRockyModel_1a5d2028ca0b20101281cf8124a54509f1)
* [get\_triangle\_scalars](structIRockyModel.md#structIRockyModel_1a8a3d81fcb670ecba5ab7ca97e520f0a7)
* [get\_viscosity\_factor](structIRockyModel.md#structIRockyModel_1aa12e90812c32e8092c0a67c28b5cc21b)
* [has\_adhesion](structIRockyModel.md#structIRockyModel_1a021623b1b816354c3fe778f6de07c2e5)
* [is\_thermal\_simulation](structIRockyModel.md#structIRockyModel_1ac1f146615e6b930769ff4008c4a0bb6c)
* [set\_adhesive\_distance](structIRockyModel.md#structIRockyModel_1ac9dd7ca3cdad5289325c080a10bf2ad7)
* [set\_gravity](structIRockyModel.md#structIRockyModel_1a4ae85b1a5081581bd5c758d347d7e31c)
* [set\_minimum\_restitution\_coefficient](structIRockyModel.md#structIRockyModel_1a8c30579eb47a2e20abd0fc393b3b2532)
* [set\_point\_cloud\_property\_dimension](structIRockyModel.md#structIRockyModel_1a8c57d2cafc46d41dd8477e2521d62b12)
* [trigger\_update\_timestep](structIRockyModel.md#structIRockyModel_1ada3d1d7b6e1de1d7e4ef0739a1f4dd8a)

## Public functions

<a id="structIRockyModel_1a5dcfa443dbca79a9c34001fca9873b93"></a>
### Function get\_gravity

![][public]
![][const]


```cpp
double3 IRockyModel::get_gravity() const
```




**This functions returns the current gravity acceleration**:

in the simulation.


**Returns**:

A <code>double3</code> value representing the current gravity acceleration vector in Cartesian Coordinates.



**Return type**: double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_gravity"}]}`
-->

<a id="structIRockyModel_1a4ae85b1a5081581bd5c758d347d7e31c"></a>
### Function set\_gravity

![][public]


```cpp
void IRockyModel::set_gravity(const double3 &gravity)
```




**This function sets the gravity acceleration to be used**:

globally in the simulation from that time onward.


**Parameters**:

* **gravity**: A <code>double3</code> value representing the gravity acceleration vector in Cartesian Coordinates.



**Parameters**:

* const double3 & **gravity**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::set_gravity"}]}`
-->

<a id="structIRockyModel_1a3caea658ae1557e11ed4e72dc80fb0a2"></a>
### Function get\_softening\_factor

![][public]
![][const]


```cpp
double IRockyModel::get_softening_factor() const
```




**Returns**:

The value of the numerical softening factor, which is a global reduction factor that multiplies all stiffness values computed throughout a simulation. This factor is commonly used to increase the timestep and, therefore, speed up the execution of simulations.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_softening_factor"}]}`
-->

<a id="structIRockyModel_1a6c0be64519ddd583f26570ece5a4aee1"></a>
### Function get\_timestep

![][public]
![][const]


```cpp
double IRockyModel::get_timestep() const
```




**Returns**:

The current value of the simulation timestep.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_timestep"}]}`
-->

<a id="structIRockyModel_1ada3d1d7b6e1de1d7e4ef0739a1f4dd8a"></a>
### Function trigger\_update\_timestep

![][public]
![][const]


```cpp
void IRockyModel::trigger_update_timestep() const
```




When called, enable the timestep update calculation at the beginning of the next iteration. If the module implements the <code>ROCKY_PLUGIN_COMPUTE_TIMESTEP</code> method it will be called during the update process, changing the solver timestep if the new computed timestep is smaller than the current one.






!> **Attention** \
If timestep is set using the advanced parameters, the update timestep calculation will be ignored.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::trigger_update_timestep"}]}`
-->

<a id="structIRockyModel_1ac1f146615e6b930769ff4008c4a0bb6c"></a>
### Function is\_thermal\_simulation

![][public]
![][const]


```cpp
bool IRockyModel::is_thermal_simulation() const
```




**Returns**:

True if the thermal option is enabled in the current Rocky project, false otherwise.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::is_thermal_simulation"}]}`
-->

<a id="structIRockyModel_1a021623b1b816354c3fe778f6de07c2e5"></a>
### Function has\_adhesion

![][public]
![][const]


```cpp
bool IRockyModel::has_adhesion() const
```




**Returns**:

True if the current Rocky project has enabled some adhesion model. Adhesive contacts will exist in a simulation only if that condition is met.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::has_adhesion"}]}`
-->

<a id="structIRockyModel_1ac9dd7ca3cdad5289325c080a10bf2ad7"></a>
### Function set\_adhesive\_distance

![][public]


```cpp
void IRockyModel::set_adhesive_distance(int home_index, int near_index, double adhesive_distance)
```




**This method sets a value of the adhesive distance per material interaction,**:

for a custom adhesive force model. Whenever a new value set for an adhesive distance is greater than the previous maximum adhesive distance among all material interactions, a new neighbors search operation will be triggered. For this reason, if adhesive distances are increased too frequently, the simulation performance can be compromised.


**Parameters**:

* **home_index**: The index of the first material in the material interaction.
* **near_index**: The index of the second material in the material interaction.
* **adhesive_distance**: The value of the adhesive distance for contacts involving entities with the specified combination of materials.



**Parameters**:

* int **home_index**
* int **near_index**
* double **adhesive_distance**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::set_adhesive_distance"}]}`
-->

<a id="structIRockyModel_1a8c30579eb47a2e20abd0fc393b3b2532"></a>
### Function set\_minimum\_restitution\_coefficient

![][public]


```cpp
void IRockyModel::set_minimum_restitution_coefficient(int home_index, int near_index, double minimum_restitution)
```




**This method is intended to be used by a module implementing a variable restitution**:

coefficient model. It allows the module to set the minimum expected value of the restitution coefficient associated to a given material interaction. The Rocky solver will use these values to calculate the stable timestep for the simulation. Every time the value of the minimum restitution coefficient of any material interaction is changed, a timestep calculation will be triggered. For this reason, if the restitution coefficient changes too frequently, the simulation performance can be compromised. The timestep will be changed only if the new calculated timestep is smaller than the previous one.


**Parameters**:

* **home_index**: The index of the first material in the material interaction.
* **near_index**: The index of the second material in the material interaction.
* **minimum_restitution**: The minimum expected value for the restitution coefficient in a collision involving entities with the specified combination of materials.



**Parameters**:

* int **home_index**
* int **near_index**
* double **minimum_restitution**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::set_minimum_restitution_coefficient"}]}`
-->

<a id="structIRockyModel_1ac9a1e9a6ac20f978dd08f6fc67fd0904"></a>
### Function get\_interactions\_data

![][public]
![][const]


```cpp
IRockyInteractionCalculationsData IRockyModel::get_interactions_data() const
```




**Returns**:

An [IRockyInteractionCalculationsData](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData) object, which can be used to access data and methods related to materials, materials interactions and particle groups.


!> **Attention** \
This method iterates over all particles in the simulation, which may introduce significant overhead to the execution time if called frequently.



**Return type**: [IRockyInteractionCalculationsData](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_interactions_data"}]}`
-->

<a id="structIRockyModel_1a4f71066b464f74b32fb560c8a58dd030"></a>
### Function get\_contact\_data\_recorder

![][public]
![][const]


```cpp
IRockyContactDataRecorder IRockyModel::get_contact_data_recorder() const
```




**Returns**:

An <code>[IRockyContactDataRecorder](structIRockyContactDataRecorder.md#structIRockyContactDataRecorder)</code> object which allows a module to configure which physical magnitudes the internal contact data recorder will record for use in statistics processing later on.



**Return type**: [IRockyContactDataRecorder](structIRockyContactDataRecorder.md#structIRockyContactDataRecorder)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_contact_data_recorder"}]}`
-->

<a id="structIRockyModel_1a1b8fe53d49b68f6097261e884fa769c5"></a>
### Function get\_number\_of\_particle\_groups

![][public]
![][const]


```cpp
int IRockyModel::get_number_of_particle_groups() const
```




**Returns**:

The total number of particle groups defined in the Rocky project. A particle group is a category of particles of the same shape and material.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_number_of_particle_groups"}]}`
-->

<a id="structIRockyModel_1a1c6cf48153d8b8278bcc67c3f31eff7b"></a>
### Function get\_number\_of\_particles

![][public]
![][const]


```cpp
int IRockyModel::get_number_of_particles() const
```




**Returns**:

The total number of individual particles in a whole simulation.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_number_of_particles"}]}`
-->

<a id="structIRockyModel_1a54b2c41da7a4f9f719ac76fb83f0eb0a"></a>
### Function get\_number\_of\_geometries

![][public]
![][const]


```cpp
int IRockyModel::get_number_of_geometries() const
```




**Returns**:

The total number of boundaries defined in the Rocky project.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_number_of_geometries"}]}`
-->

<a id="structIRockyModel_1a56c275ba379255adc3b2fc2af8ea83d7"></a>
### Function get\_number\_of\_materials

![][public]
![][const]


```cpp
int IRockyModel::get_number_of_materials() const
```




**Returns**:

The total number of materials defined in the Rocky project.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_number_of_materials"}]}`
-->

<a id="structIRockyModel_1a59425e7004ad5636d9a6dc06e31e288d"></a>
### Function get\_number\_of\_material\_interactions

![][public]
![][const]


```cpp
int IRockyModel::get_number_of_material_interactions() const
```




**Returns**:

The total number of material interactions that it is possible to define with the current materials defined in the Rocky project.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_number_of_material_interactions"}]}`
-->

<a id="structIRockyModel_1a7fb2a67e2e5126c5140ce80ede04b713"></a>
### Function get\_geometry\_name

![][public]
![][const]


```cpp
std::string IRockyModel::get_geometry_name(int geometry_index) const
```




**Returns**:

The name given in the Rocky UI the geometry identified by <code>geometry_index</code>.



**Parameters**:

* int **geometry_index**

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_geometry_name"}]}`
-->

<a id="structIRockyModel_1a04e185eee0bdd70cc84ad48459584823"></a>
### Function get\_particle\_group\_name

![][public]
![][const]


```cpp
std::string IRockyModel::get_particle_group_name(int particle_group_index) const
```




**Returns**:

The name given in the Rocky UI the particle group identified by <code>particle_group_index</code>.



**Parameters**:

* int **particle_group_index**

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_particle_group_name"}]}`
-->

<a id="structIRockyModel_1ae53de7e654b59031b4a5787a3330c96b"></a>
### Function get\_simulation\_variables

![][public]
![][const]


```cpp
IRockySimulationVariables IRockyModel::get_simulation_variables() const
```




**Returns**:

An <code>[IRockySimulationVariables](structIRockySimulationVariables.md#structIRockySimulationVariables)</code> object, which allows users to add new simulation variables during the setup of a module or access existing ones.



**Return type**: [IRockySimulationVariables](structIRockySimulationVariables.md#structIRockySimulationVariables)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_simulation_variables"}]}`
-->

<a id="structIRockyModel_1a4788543c01a10a60e17c3623a6847708"></a>
### Function get\_particle\_scalars

![][public]
![][const]


```cpp
IRockyParticleScalarsModel IRockyModel::get_particle_scalars() const
```




**Returns**:

An <code>[IRockyParticleScalarsModel](structIRockyParticleScalarsModel.md#structIRockyParticleScalarsModel)</code> object, which allows users to add new particle scalars or activate particle scalars known to Rocky during the setup of a module. Particle scalars are special variables attached to particles that are able to store values per particle that are preserved between time iterations.



**Return type**: [IRockyParticleScalarsModel](structIRockyParticleScalarsModel.md#structIRockyParticleScalarsModel)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_particle_scalars"}]}`
-->

<a id="structIRockyModel_1a9c78ff441fc0220adf389ae4b733c808"></a>
### Function get\_particle\_transfer\_scalars

![][public]
![][const]


```cpp
IRockyParticleTransferScalarsModel IRockyModel::get_particle_transfer_scalars() const
```




**Returns**:

An <code>[IRockyParticleTransferScalarsModel](structIRockyParticleTransferScalarsModel.md#structIRockyParticleTransferScalarsModel)</code> object, which allows users to add new particle transfer scalars or activate particle transfer scalars known to Rocky during the setup of a module. Particle transfer scalars are special particle scalars whose values are reset automatically to zero at the beginning of a new time iteration. Their typical use is the accumulation of values from all contacts or joints associated to a particle or an element at a given time iteration.



**Return type**: [IRockyParticleTransferScalarsModel](structIRockyParticleTransferScalarsModel.md#structIRockyParticleTransferScalarsModel)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_particle_transfer_scalars"}]}`
-->

<a id="structIRockyModel_1a1076a0e1ada498f29c18caf6840e520a"></a>
### Function get\_particle\_breakage\_scalars

![][public]
![][const]


```cpp
IRockyParticleBreakageScalarsModel IRockyModel::get_particle_breakage_scalars() const
```




**Returns**:

An <code>[IRockyParticleBreakageScalarsModel](structIRockyParticleBreakageScalarsModel.md#structIRockyParticleBreakageScalarsModel)</code> object, which allows users to add new particle breakage scalars or activate particle breakage scalars known to Rocky during the setup of a module. Particle breakage scalars are special particle scalars used in conjunction with instantaneous breakage models, in order to transfer values calculated at a breakage event to the point at which the fragments size distribution is determined.



**Return type**: [IRockyParticleBreakageScalarsModel](structIRockyParticleBreakageScalarsModel.md#structIRockyParticleBreakageScalarsModel)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_particle_breakage_scalars"}]}`
-->

<a id="structIRockyModel_1ac6b0ba79dc72914434cfce14b9807e22"></a>
### Function get\_joint\_scalars

![][public]
![][const]


```cpp
IRockyJointScalarsModel IRockyModel::get_joint_scalars() const
```




**Returns**:

An <code>[IRockyJointScalarsModel](structIRockyJointScalarsModel.md#structIRockyJointScalarsModel)</code> object, which allows users to add new joint scalars during a setup of a module. Joint scalars are special variables attached to joints in flexible particles that are able to store values that are preserved between time iterations.



**Return type**: [IRockyJointScalarsModel](structIRockyJointScalarsModel.md#structIRockyJointScalarsModel)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_joint_scalars"}]}`
-->

<a id="structIRockyModel_1a2fe828d3fb961280069bb549d49a52bc"></a>
### Function get\_pair\_scalars

![][public]
![][const]


```cpp
IRockyPairScalarsModel IRockyModel::get_pair_scalars() const
```




**Returns**:

An <code>[IRockyPairScalarsModel](structIRockyPairScalarsModel.md#structIRockyPairScalarsModel)</code> object, which allows users to add new pair scalars during a setup of a module. Pair scalars are special variables that associate values to all combinations of particle groups and combinations of particle groups and geometries within a project.



**Return type**: [IRockyPairScalarsModel](structIRockyPairScalarsModel.md#structIRockyPairScalarsModel)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_pair_scalars"}]}`
-->

<a id="structIRockyModel_1a43441eb2d02d3dc9c691328eef5e99b5"></a>
### Function get\_geometry\_scalars

![][public]
![][const]


```cpp
IRockyGeometryScalarsModel IRockyModel::get_geometry_scalars() const
```




**Returns**:

An <code>[IRockyGeometryScalarsModel](structIRockyGeometryScalarsModel.md#structIRockyGeometryScalarsModel)</code> object, which allows users to add new boundary scalars during a setup of a module. Boundary scalars are special variables that associate values to all geometries within a project.



**Return type**: [IRockyGeometryScalarsModel](structIRockyGeometryScalarsModel.md#structIRockyGeometryScalarsModel)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_geometry_scalars"}]}`
-->

<a id="structIRockyModel_1a8a3d81fcb670ecba5ab7ca97e520f0a7"></a>
### Function get\_triangle\_scalars

![][public]
![][const]


```cpp
IRockyTriangleScalarsModel IRockyModel::get_triangle_scalars() const
```




**Returns**:

An <code>[IRockyTriangleScalarsModel](structIRockyTriangleScalarsModel.md#structIRockyTriangleScalarsModel)</code> object, which allows users to add new triangle scalars during a setup of a module. Triangle scalars are special variables attached to geometry triangles that are able to store values that are preserved between time iterations.



**Return type**: [IRockyTriangleScalarsModel](structIRockyTriangleScalarsModel.md#structIRockyTriangleScalarsModel)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_triangle_scalars"}]}`
-->

<a id="structIRockyModel_1a552edce9a8cb94fc20d5286f43f2185b"></a>
### Function get\_particle\_contact\_scalars

![][public]
![][const]


```cpp
IRockyContactScalarsModel IRockyModel::get_particle_contact_scalars() const
```




**Returns**:

An <code>[IRockyContactScalarsModel](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel)</code> object, which allows users to add new (particle-to-particle) contact scalars during the setup phase of a module. Contact scalars are special variables attached to contacts that are able to store values that are preserved between time iterations.<br/>
 For handling scalars related to particle-to-triangle contacts, please consult the <br/>
 <code>[IRockyModel::get\_triangle\_contact\_scalars](structIRockyModel.md#structIRockyModel_1a5d2028ca0b20101281cf8124a54509f1)</code> method.



**Return type**: [IRockyContactScalarsModel](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_particle_contact_scalars"}]}`
-->

<a id="structIRockyModel_1a5d2028ca0b20101281cf8124a54509f1"></a>
### Function get\_triangle\_contact\_scalars

![][public]
![][const]


```cpp
IRockyContactScalarsModel IRockyModel::get_triangle_contact_scalars() const
```




**Returns**:

An <code>[IRockyContactScalarsModel](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel)</code> object, which allows users to add new (particle-to-triangle) contact scalars during the setup phase of a module. Contact scalars are special variables attached to contacts that are able to store values that are preserved between time iterations.<br/>
 For handling scalars for particle-to-particle contacts, please consult the <br/>
 <code>[IRockyModel::get\_particle\_contact\_scalars](structIRockyModel.md#structIRockyModel_1a552edce9a8cb94fc20d5286f43f2185b)</code> method.



**Return type**: [IRockyContactScalarsModel](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_triangle_contact_scalars"}]}`
-->

<a id="structIRockyModel_1a93ef35ae1eb9cf50ca77ab2070a769ab"></a>
### Function get\_current\_time

![][public]
![][const]


```cpp
double IRockyModel::get_current_time() const
```




**Returns**:

The value of the current simulation time.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_current_time"}]}`
-->

<a id="structIRockyModel_1ae98c232add53267e07db794e37304a25"></a>
### Function get\_output\_interval

![][public]
![][const]


```cpp
double IRockyModel::get_output_interval() const
```




**Returns**:

The value of the simulation output interval.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_output_interval"}]}`
-->

<a id="structIRockyModel_1a38a15145f4f2bb47b79ab785f50d8277"></a>
### Function get\_number\_of\_active\_particles

![][public]
![][const]


```cpp
int IRockyModel::get_number_of_active_particles() const
```




**Returns**:

The current number of active particles in the simulation. This number can vary throughout a simulation because new particles are injected and/or some particles leave the solution domain.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_number_of_active_particles"}]}`
-->

<a id="structIRockyModel_1a4bfb9f69ea26364b55aaad33463de669"></a>
### Function get\_number\_of\_active\_triangles

![][public]


```cpp
int IRockyModel::get_number_of_active_triangles()
```




**Returns**:

The current number of active triangles in the simulation. This number can vary throughout a simulation because the active particle region changes due to particles moving, which will active or de-active triangles that are inside or outside the active region.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_number_of_active_triangles"}]}`
-->

<a id="structIRockyModel_1a5e03d46944ec6e42596ee5f2d5f8aaeb"></a>
### Function get\_number\_of\_processes

![][public]
![][const]


```cpp
int IRockyModel::get_number_of_processes() const
```




**Returns**:

The number of allowed parallel processes when the simulation runs in CPU.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_number_of_processes"}]}`
-->

<a id="structIRockyModel_1a1fd1011aa809fe64647e9cacf1956a11"></a>
### Function get\_number\_of\_devices

![][public]
![][const]


```cpp
int IRockyModel::get_number_of_devices() const
```




**Returns**:

The number of devices set to run the simulation when using multi-GPU.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_number_of_devices"}]}`
-->

<a id="structIRockyModel_1ae8f8865c809a31988291f9180d7cda2b"></a>
### Function get\_device\_id

![][public]
![][const]


```cpp
int IRockyModel::get_device_id(int device_index) const
```




**Returns**:

The index that identifies a given device when running a simulation in multi-GPU.



**Parameters**:

* int **device_index**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_device_id"}]}`
-->

<a id="structIRockyModel_1ae4797d71a2b43ae408fe83e317f818b7"></a>
### Function find\_point\_cloud

![][public]


```cpp
int IRockyModel::find_point_cloud(const std::string &name)
```




**This method searches for a point cloud dataset in the project, by name.**:


**Parameters**:

* **name**: The name given to the point cloud in the Rocky UI.


**Returns**:

The index that uniquely identifies the wanted point cloud, if it was actually found. It returns -1 otherwise.



**Parameters**:

* const std::string & **name**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::find_point_cloud"}]}`
-->

<a id="structIRockyModel_1aabdba4a3eee5c51c75c45345f6cf6839"></a>
### Function find\_point\_cloud\_property

![][public]


```cpp
int IRockyModel::find_point_cloud_property(int point_cloud_index, const std::string &property_name)
```




**This method searches for a specific property name in a point cloud dataset **:

imported into Rocky.


**Parameters**:

* **point_cloud_index**: The index that uniquely identifies the point cloud.
* **property_name**: The name given to the property in the file defining the point cloud.


**Returns**:

The index that uniquely identifies the wanted point cloud property, if it was actually found. It returns -1 otherwise.



**Parameters**:

* int **point_cloud_index**
* const std::string & **property_name**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::find_point_cloud_property"}]}`
-->

<a id="structIRockyModel_1a8c57d2cafc46d41dd8477e2521d62b12"></a>
### Function set\_point\_cloud\_property\_dimension

![][public]


```cpp
void IRockyModel::set_point_cloud_property_dimension(int point_cloud_index, int property_index, double dimension)
```




**The purpose of this method is to associate a dimensional factor**:

to a point cloud property. This factor will be used to nondimensionalize all the associated values. For instance, if the property represents a force, a force dimensional factor must be associated through this method. Dimensional factors for the fundamental magnitudes are provided by functions of an <code>[IRockyModel](structIRockyModel.md#structIRockyModel)</code> object.


**Parameters**:

* **point_cloud_index**: The index that uniquely identifies the point cloud.
* **property_index**: The index that uniquely identifies the point cloud property.
* **dimension**: The appropriate dimensional factor for the point cloud property.



**Parameters**:

* int **point_cloud_index**
* int **property_index**
* double **dimension**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::set_point_cloud_property_dimension"}]}`
-->

<a id="structIRockyModel_1a65411ff4a85f74e96457979f8158eccd"></a>
### Function get\_curve\_collections

![][public]
![][const]


```cpp
IRockyCurveCollectionData IRockyModel::get_curve_collections() const
```




**Returns**:

An <code>[IRockyCurveCollectionData](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData)</code> object which allows to create and manage custom time curves and/or custom cross-plot curves that can be displayed in the Rocky UI.



**Return type**: [IRockyCurveCollectionData](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_curve_collections"}]}`
-->

<a id="structIRockyModel_1acdec4e25234fe0304e441d82ccfc3192"></a>
### Function get\_length\_factor

![][public]
![][const]


```cpp
double IRockyModel::get_length_factor() const
```




**Returns**:

The length factor in meters, used to nondimensionalize length parameters.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_length_factor"}]}`
-->

<a id="structIRockyModel_1ae8c9acf215323ada8de9ff9344b1db94"></a>
### Function get\_mass\_factor

![][public]
![][const]


```cpp
double IRockyModel::get_mass_factor() const
```




**Returns**:

The length factor in kilograms, used to nondimensionalize mass parameters.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_mass_factor"}]}`
-->

<a id="structIRockyModel_1aadaee25a53bade557d45bf633e995690"></a>
### Function get\_time\_factor

![][public]
![][const]


```cpp
double IRockyModel::get_time_factor() const
```




**Returns**:

The time factor in seconds, used to nondimensionalize time parameters.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_time_factor"}]}`
-->

<a id="structIRockyModel_1aa12e90812c32e8092c0a67c28b5cc21b"></a>
### Function get\_viscosity\_factor

![][public]
![][const]


```cpp
double IRockyModel::get_viscosity_factor() const
```




**Returns**:

The viscosity factor in Pa.s, used to nondimensionalize viscosity parameters.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_viscosity_factor"}]}`
-->

<a id="structIRockyModel_1afdf327f827860b500a82c511492d2f1e"></a>
### Function get\_temperature\_factor

![][public]
![][const]


```cpp
double IRockyModel::get_temperature_factor() const
```




**Returns**:

The temperature factor in Kelvin, used to nondimensionalize temperature parameters.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_temperature_factor"}]}`
-->

<a id="structIRockyModel_1a8800430b5e336d3fd04d0fce83f83883"></a>
### Function get\_force\_factor

![][public]
![][const]


```cpp
double IRockyModel::get_force_factor() const
```




**Returns**:

The force factor in Newton, used to nondimensionalize force parameters.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_force_factor"}]}`
-->

<a id="structIRockyModel_1abb53bd424c9e2d61065410a0b2d53b8b"></a>
### Function get\_pressure\_factor

![][public]
![][const]


```cpp
double IRockyModel::get_pressure_factor() const
```




**Returns**:

The pressure factor in Pascal, used to nondimensionalize pressure parameters.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_pressure_factor"}]}`
-->

<a id="structIRockyModel_1a9fba76aa437dad8ff9674eedb0b6acc0"></a>
### Function get\_energy\_factor

![][public]
![][const]


```cpp
double IRockyModel::get_energy_factor() const
```




**Returns**:

The energy factor in Joule, used to nondimensionalize energy parameters.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_energy_factor"}]}`
-->

<a id="structIRockyModel_1a33a082f281ae2ca159cdb420d2fabbb8"></a>
### Function get\_power\_factor

![][public]
![][const]


```cpp
double IRockyModel::get_power_factor() const
```




**Returns**:

The energy factor in Watts, used to nondimensionalize power parameters.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyModel::get_power_factor"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)