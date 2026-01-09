<a id="structIRockyContactDataRecorder"></a>
# Structure IRockyContactDataRecorder

![][C++]
![][public]

**#include <rocky\_contact\_data\_recorder\_api.h>**



<code>[IRockyContactDataRecorder](structIRockyContactDataRecorder.md#structIRockyContactDataRecorder)</code> is an interface to the internal entity that records relevant collision data during the contact calculations. The data is stored in contact scalars in order to make it available to collision statistics modules for later processing. The methods in <code>[IRockyContactDataRecorder](structIRockyContactDataRecorder.md#structIRockyContactDataRecorder)</code> allows a custom module to enable the physical magnitudes that must be recorded and to retrieve the indices of the contact scalars in which they will be stored.

## Members

* [enable\_contact\_scalar](structIRockyContactDataRecorder.md#structIRockyContactDataRecorder_1a36e9b7b9de7b99a0e4c6ca703fc7fb5d)
* [get\_contact\_scalar\_index](structIRockyContactDataRecorder.md#structIRockyContactDataRecorder_1a5ebed1613189e54bf4c202b5ec9553b8)

## Public functions

<a id="structIRockyContactDataRecorder_1a36e9b7b9de7b99a0e4c6ca703fc7fb5d"></a>
### Function enable\_contact\_scalar

![][public]


```cpp
void IRockyContactDataRecorder::enable_contact_scalar(ContactScalar scalar, RecordingScope scope)
```




**This method allows a module to select which physical magnitudes associated to a**:

collision must be recorded into contact scalars. The magnitudes available for recording are listed below. For a description of how these magnitudes are computed internally, please refer to the DEM Technical Manual.


**Parameters**:

* **scalar**: An enum key indicating the physical magnitude that must be recorded. The currently available magnitudes are:<br/>
 <code>csDuration</code>: The duration of a collision.<br/>
 <code>csImpactVelocityNormal</code>: The normal component of the impact velocity, i.e. the contact relative velocity at the moment a collision starts.<br/>
 <code>csImpactVelocityTangential</code>: The tangential component of the impact velocity, i.e. the contact relative velocity at the moment a collision starts.<br/>
 <code>csWorkDissipation</code>: The energy dissipated during an entire collision.<br/>
 <code>csWorkImpact</code>: The work made by the normal contact force during the loading phase of a collision.<br/>
 <code>csWorkShear</code>: The work made by the tangential contact force during an entire collision.<br/>
 <code>csEnergyTransfer</code>: The energy transferred to a particle by a moving boundary during a collision at a particle-to-boundary contact.<br/>
 <code>csImpulseNormal</code>: The impulse of the normal contact force during an entire collision.<br/>
 <code>csImpulseTangential</code>: The impulse of the tangential contact force during an entire collision.<br/>
 <code>csImpulseX</code>: The impulse of the x-component of the contact force.<br/>
 <code>csImpulseY</code>: The impulse of the y-component of the contact force.<br/>
 <code>csImpulseZ</code>: The impulse of the z-component of the contact force.<br/>
 <code>csSlindingDistance</code>: The sliding distance during an entire collision.<br/>
* **scope**: An enum key indicating if the collision data will be recorded at particle-to-particle contacts, particle-to-geometry-triangle contacts or both. The valid keys are:<br/>
 <code>rsParticleParticle</code> Record data only at particle-to-particle contacts.<br/>
 <code>rsParticleTriangle</code> Record data only at particle-to-geometry-triangle contacts.<br/>
 <code>rsBoth</code> Record data at both particle-to-particle and particle-to-geometry-triangle contacts.



**Parameters**:

* ContactScalar **scalar**
* RecordingScope **scope**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactDataRecorder::enable_contact_scalar"}]}`
-->

<a id="structIRockyContactDataRecorder_1a5ebed1613189e54bf4c202b5ec9553b8"></a>
### Function get\_contact\_scalar\_index

![][public]


```cpp
int IRockyContactDataRecorder::get_contact_scalar_index(ContactScalar scalar, RecordingScope scope)
```




**Returns**:

The index that identifies a specific contact scalar where collision data will be stored. This index will be available only after the setup phase has concluded.


**Parameters**:

* **scalar**: See description on <code>enable_contact_scalar</code>
* **scope**: An enum key indicating the index of which contact type will be returned. The valid keys are:<br/>
 <code>rsParticleParticle</code> Return the index of a particle contact scalar.<br/>
 <code>rsParticleTriangle</code> Return the index of a triangle contact scalar.



**Parameters**:

* ContactScalar **scalar**
* RecordingScope **scope**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactDataRecorder::get_contact_scalar_index"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)