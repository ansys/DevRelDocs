# Structure IRockyCurveCollectionData

<a id="structIRockyCurveCollectionData"></a>

![][C++]
![][public]

**#include <rocky\_output\_collections\_api.hpp>**



<code>[IRockyCurveCollectionData](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData)</code> is a data structure intended to hold data that will be used by Rocky to create a custom collection of cross plot curves and/or time curves for particles and geometries.





A curve is composed of a pair of domain and image datasets. A dataset is a set of values that may change over time in values and size. When creating a dataset, one must provide its name and unit. During the simulation, such datasets must be updated with custom data, which will be written on disk by Rocky at output times. The most adequate hook to perform that data update is <code>ROCKY_PLUGIN_PRE_OUTPUT</code>, because it is executed immediately before the data output. However, depending on the particular needs of the module, that operation can be done in other hooks as well. After an output operation, all dataset values are automatically erased, and must be updated again for the next output. At any given output, a domain and an image datasets for a cross-plot curve must have the same size, otherwise an error will be thrown.

## Members

* [add\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a9ac4b935090edf6975d4f46cf74aa86e)
* [create\_dataset](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a9d540d1d87039559fe088e897504fd99)
* [create\_geometry\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1add0cf572f25fb257dd0f007b53593f21)
* [create\_geometry\_dataset](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1aac6750ba6fce2ee80a5a1fe1edb356e4)
* [create\_geometry\_time\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1aab6ad0a64db6e08afcc4c09643f2fbaa)
* [create\_particles\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a88494c4828a9d06cea380ca4d21fdc73)
* [create\_particles\_dataset](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1aa3ea8900da748813b0e1eba05372cb53)
* [create\_particles\_time\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1ae638f72f97d27b18d69ad0ded3b26d4b)
* [create\_solver\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1aeda2a88bc1565623080026c55946b01e)
* [create\_solver\_dataset](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a17782fefaebd1a1f368510eff05dc6b3)
* [create\_solver\_time\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a90860210505cb726accf7089cfec5ab2)
* [create\_time\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a521adcdec892f96ea7b628c5aa1a3560)
* [setup\_dataset\_dimension](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a4316fe7409b88eb683ed59d60d5b5fae)
* [setup\_geometry\_dataset\_dimension](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1ab5752c7598d6b2f21c090e470eb50d3b)
* [setup\_geometry\_time\_curve\_dimension](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1aa445fbd38bfb1770a1c197f806890908)
* [setup\_particles\_dataset\_dimension](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a7942a28df7cd10c70ed086b9d11ebf2b)
* [setup\_particles\_time\_curve\_dimension](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a230f2f9be559dcb98d57a4e5c7218dd0)
* [setup\_solver\_dataset\_dimension](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1ab7b3c581d4cfc117c0c2b4e9c9be61af)
* [setup\_solver\_time\_curve\_dimension](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1aec18b36979a9d48a3a48016d1d9b5b06)
* [setup\_time\_curve\_dimension](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1ad43383c1fe177dc20d46ec205f8cb675)
* [update\_dataset](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a77d905fa54397c6f5b7fdc84795b01a6)
* [update\_geometry\_dataset](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1aee59308015e7f60c741a0296a1c17a25)
* [update\_geometry\_time\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a3da24f758d62665100b5c43b8f1075d9)
* [update\_particles\_dataset](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a7f24452610d153c6f8da6e25f7bb1185)
* [update\_particles\_time\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a650d74b4c42f6d63489f98ee5835d942)
* [update\_solver\_dataset](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a6bc5b0a03bcb799edc02934e386e41ea)
* [update\_solver\_time\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a237fae8d13385fc04866ad4c4b24aa73)
* [update\_time\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a024664c7b45eb7a6728a3207eeb82ee3)

## Public functions

### Function create\_particles\_dataset

<a id="structIRockyCurveCollectionData_1aa3ea8900da748813b0e1eba05372cb53"></a>

![][public]


```cpp
void IRockyCurveCollectionData::create_particles_dataset(const std::string &name, const std::string &unit)
```




**This method creates a dataset related to particles by specifying its name **:

and the unit of the physical magnitude associated. Initially empty, the dataset must be updated with values by using <code>[IRockyCurveCollectionData::update\_particles\_dataset](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a7f24452610d153c6f8da6e25f7bb1185)</code> during the simulation.


**Parameters**:

* **name**: The name of the dataset.
* **unit**: The unit of the related magnitude, which will be associated to an axis of the cross plot where the dataset will be displayed.



**Parameters**:

* const std::string & **name**
* const std::string & **unit**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::create_particles_dataset"}]}`
-->

### Function create\_solver\_dataset

<a id="structIRockyCurveCollectionData_1a17782fefaebd1a1f368510eff05dc6b3"></a>

![][public]


```cpp
void IRockyCurveCollectionData::create_solver_dataset(const std::string &name, const std::string &unit)
```




**This method creates a dataset related to the solver by specifying its name**:

and the unit of the physical magnitude associated. Initially empty, the dataset must be updated with values by using <code>[IRockyCurveCollectionData::update\_solver\_dataset](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a6bc5b0a03bcb799edc02934e386e41ea)</code> during the simulation.


**Parameters**:

* **name**: The name of the dataset.
* **unit**: The unit of the related magnitude, which will be associated to an axis of the cross plot where the dataset will be displayed.



**Parameters**:

* const std::string & **name**
* const std::string & **unit**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::create_solver_dataset"}]}`
-->

### Function create\_geometry\_dataset

<a id="structIRockyCurveCollectionData_1aac6750ba6fce2ee80a5a1fe1edb356e4"></a>

![][public]


```cpp
void IRockyCurveCollectionData::create_geometry_dataset(int geometry_id, const std::string &name, const std::string &unit)
```




**This method creates a dataset related to a geometry by specifying **:

its name and the unit of the associated physical magnitude. Initially empty, the dataset must be updated with values by using <code>[IRockyCurveCollectionData::update\_geometry\_dataset](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1aee59308015e7f60c741a0296a1c17a25)</code>.


**Parameters**:

* **geometry_id**: The geometry unique identifier (index)
* **name**: The name of the dataset.
* **unit**: The unit of the related magnitude, which will be associated to an axis of the cross plot where the dataset will be displayed.



**Parameters**:

* int **geometry_id**
* const std::string & **name**
* const std::string & **unit**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::create_geometry_dataset"}]}`
-->

### Function create\_dataset

<a id="structIRockyCurveCollectionData_1a9d540d1d87039559fe088e897504fd99"></a>

![][public]


```cpp
void IRockyCurveCollectionData::create_dataset(const std::string &owner_name, const std::string &name, const std::string &unit)
```




**This method creates a dataset by specifying its name and the unit of the**:

physical magnitude associated. Such dataset is related to a given named owner entity. Initially empty, the dataset must be updated with values during the simulation by using <code>[IRockyCurveCollectionData::update\_dataset](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a77d905fa54397c6f5b7fdc84795b01a6)</code>.


**Parameters**:

* **owner_name**: The entity unique identifier (string)
* **name**: The name of the dataset.
* **unit**: The unit of the related magnitude, which will be associated to an axis of the cross plot where the dataset will be displayed.



**Parameters**:

* const std::string & **owner_name**
* const std::string & **name**
* const std::string & **unit**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::create_dataset"}]}`
-->

### Function create\_particles\_curve

<a id="structIRockyCurveCollectionData_1a88494c4828a9d06cea380ca4d21fdc73"></a>

![][public]


```cpp
void IRockyCurveCollectionData::create_particles_curve(const std::string &domain_dataset, const std::string &image_dataset)
```




**This method creates a curve by specifying the names of domain and image datasets. Such**:

curve is related to particles. Shown within the Rocky UI as a curve.


**Parameters**:

* **domain_dataset**: The name of the domain dataset.
* **image_dataset**: The unit of the image dataset.



**Parameters**:

* const std::string & **domain_dataset**
* const std::string & **image_dataset**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::create_particles_curve"}]}`
-->

### Function create\_solver\_curve

<a id="structIRockyCurveCollectionData_1aeda2a88bc1565623080026c55946b01e"></a>

![][public]


```cpp
void IRockyCurveCollectionData::create_solver_curve(const std::string &domain_dataset, const std::string &image_dataset)
```




**This method creates a curve by specifying the names of domain and image datasets. Such**:

curve is related to the solver. Shown within the Rocky UI as a curve.


**Parameters**:

* **domain_dataset**: The name of the domain dataset.
* **image_dataset**: The unit of the image dataset.



**Parameters**:

* const std::string & **domain_dataset**
* const std::string & **image_dataset**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::create_solver_curve"}]}`
-->

### Function create\_geometry\_curve

<a id="structIRockyCurveCollectionData_1add0cf572f25fb257dd0f007b53593f21"></a>

![][public]


```cpp
void IRockyCurveCollectionData::create_geometry_curve(int geometry_id, const std::string &domain_dataset, const std::string &image_dataset)
```




**This method creates a curve by specifying the names of domain and image datasets. Such**:

curve is related to a geometry. Shown within the Rocky UI as a curve.


**Parameters**:

* **geometry_id**: The geometry unique identifier (index)
* **domain_dataset**: The name of the domain dataset.
* **image_dataset**: The unit of the image dataset.



**Parameters**:

* int **geometry_id**
* const std::string & **domain_dataset**
* const std::string & **image_dataset**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::create_geometry_curve"}]}`
-->

### Function add\_curve

<a id="structIRockyCurveCollectionData_1a9ac4b935090edf6975d4f46cf74aa86e"></a>

![][public]


```cpp
void IRockyCurveCollectionData::add_curve(const std::string &owner_name, const std::string &domain_dataset, const std::string &image_dataset)
```




**This method creates a curve by specifying the names of domain and image datasets. Such**:

curve is related to a given named entity. Shown within the Rocky UI as a curve.


**Parameters**:

* **owner_name**: The entity unique identifier (string)
* **domain_dataset**: The name of the domain dataset.
* **image_dataset**: The unit of the image dataset.



**Parameters**:

* const std::string & **owner_name**
* const std::string & **domain_dataset**
* const std::string & **image_dataset**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::add_curve"}]}`
-->

### Function setup\_particles\_dataset\_dimension

<a id="structIRockyCurveCollectionData_1a7942a28df7cd10c70ed086b9d11ebf2b"></a>

![][public]


```cpp
void IRockyCurveCollectionData::setup_particles_dataset_dimension(const std::string &name, double dimension)
```




**The purpose of this method is to associate a dimensional factor to a dataset.**:

This factor will be used to nondimensionalize their values for the calculations. Dimensional factors for the fundamental magnitudes are provided by functions of a <code>[IRockyModel](structIRockyModel.md#structIRockyModel)</code> object.


**Parameters**:

* **name**: The name of the dataset.
* **dimension**: The appropriate dimensional factor for the dataset.



**Parameters**:

* const std::string & **name**
* double **dimension**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::setup_particles_dataset_dimension"}]}`
-->

### Function setup\_solver\_dataset\_dimension

<a id="structIRockyCurveCollectionData_1ab7b3c581d4cfc117c0c2b4e9c9be61af"></a>

![][public]


```cpp
void IRockyCurveCollectionData::setup_solver_dataset_dimension(const std::string &name, double dimension)
```




**The purpose of this method is to associate a dimensional factor to a dataset.**:

This factor will be used to nondimensionalize their values for the calculations. Dimensional factors for the fundamental magnitudes are provided by functions of a <code>[IRockyModel](structIRockyModel.md#structIRockyModel)</code> object.


**Parameters**:

* **name**: The name of the dataset.
* **dimension**: The appropriate dimensional factor for the dataset.



**Parameters**:

* const std::string & **name**
* double **dimension**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::setup_solver_dataset_dimension"}]}`
-->

### Function setup\_geometry\_dataset\_dimension

<a id="structIRockyCurveCollectionData_1ab5752c7598d6b2f21c090e470eb50d3b"></a>

![][public]


```cpp
void IRockyCurveCollectionData::setup_geometry_dataset_dimension(int geometry_id, const std::string &name, double dimension)
```




**The purpose of this method is to associate a dimensional factor to a dataset.**:

This factor will be used to nondimensionalize their values for the calculations. Dimensional factors for the fundamental magnitudes are provided by functions of a <code>[IRockyModel](structIRockyModel.md#structIRockyModel)</code> object.


**Parameters**:

* **geometry_id**: The geometry unique identifier (index)
* **name**: The name of the dataset.
* **dimension**: The appropriate dimensional factor for the dataset.



**Parameters**:

* int **geometry_id**
* const std::string & **name**
* double **dimension**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::setup_geometry_dataset_dimension"}]}`
-->

### Function setup\_dataset\_dimension

<a id="structIRockyCurveCollectionData_1a4316fe7409b88eb683ed59d60d5b5fae"></a>

![][public]


```cpp
void IRockyCurveCollectionData::setup_dataset_dimension(const std::string &owner_name, const std::string &name, double dimension)
```




**The purpose of this method is to associate a dimensional factor to a dataset.**:

This factor will be used to nondimensionalize their values for calculations. Dimensional factors for the fundamental magnitudes are provided by functions of a <code>[IRockyModel](structIRockyModel.md#structIRockyModel)</code> object.


**Parameters**:

* **owner_name**: The entity unique identifier (string)
* **name**: The name of the dataset.
* **dimension**: The appropriate dimensional factor for the dataset.



**Parameters**:

* const std::string & **owner_name**
* const std::string & **name**
* double **dimension**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::setup_dataset_dimension"}]}`
-->

### Function update\_particles\_dataset

<a id="structIRockyCurveCollectionData_1a7f24452610d153c6f8da6e25f7bb1185"></a>

![][public]


```cpp
void IRockyCurveCollectionData::update_particles_dataset(const std::string &name, const double *dataset, size_t size)
```




**This method updates a dataset by inserting new values.**:

Intended to be used only at output times. The dataset to be added should correspond to the output time at which this method is called. It only works with datasets previously created using <code>[IRockyCurveCollectionData::create\_particles\_dataset](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1aa3ea8900da748813b0e1eba05372cb53)</code>, otherwise it throws an error.


**Parameters**:

* **name**: The name of the dataset.
* **dataset**: A data pointer to the new dataset data to be copied into dataset.
* **size**: The number of elements of the given dataset



**Parameters**:

* const std::string & **name**
* const double * **dataset**
* size_t **size**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::update_particles_dataset"}]}`
-->

### Function update\_solver\_dataset

<a id="structIRockyCurveCollectionData_1a6bc5b0a03bcb799edc02934e386e41ea"></a>

![][public]


```cpp
void IRockyCurveCollectionData::update_solver_dataset(const std::string &name, const double *dataset, size_t size)
```




**This method updates a dataset by inserting new values.**:

Intended to be used only at output times. The dataset to be added should correspond to the output time at which this method is called. It only works with datasets previously created using <code>[IRockyCurveCollectionData::create\_solver\_dataset](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a17782fefaebd1a1f368510eff05dc6b3)</code>, otherwise it throws an error.


**Parameters**:

* **name**: The name of the dataset.
* **dataset**: A data pointer to the new dataset data to be copied into dataset.
* **size**: The number of elements of the given dataset



**Parameters**:

* const std::string & **name**
* const double * **dataset**
* size_t **size**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::update_solver_dataset"}]}`
-->

### Function update\_geometry\_dataset

<a id="structIRockyCurveCollectionData_1aee59308015e7f60c741a0296a1c17a25"></a>

![][public]


```cpp
void IRockyCurveCollectionData::update_geometry_dataset(int geometry_id, const std::string &name, const double *dataset, size_t size)
```




**This method updates a dataset by inserting new dataset values.**:

Intended to be used only at output times. The dataset to be added should correspond to the output time at which this method is called. It only works with datasets previously created using <code>[IRockyCurveCollectionData::create\_geometry\_dataset](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1aac6750ba6fce2ee80a5a1fe1edb356e4)</code>, otherwise it throws an error.


**Parameters**:

* **geometry_id**: The geometry unique identifier (index)
* **name**: The name of the dataset.
* **dataset**: A data pointer to the new dataset data to be copied into dataset.
* **size**: The number of elements of the given dataset



**Parameters**:

* int **geometry_id**
* const std::string & **name**
* const double * **dataset**
* size_t **size**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::update_geometry_dataset"}]}`
-->

### Function update\_dataset

<a id="structIRockyCurveCollectionData_1a77d905fa54397c6f5b7fdc84795b01a6"></a>

![][public]


```cpp
void IRockyCurveCollectionData::update_dataset(const std::string &owner_name, const std::string &name, const double *dataset, size_t size)
```




**This method updates a dataset by inserting new dataset values.**:

Intended to be used only at output times. The dataset to be added should correspond to the output time at which this method is called. It only works with datasets previously created using <code>[IRockyCurveCollectionData::create\_dataset](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a9d540d1d87039559fe088e897504fd99)</code>, otherwise it throws an error.


**Parameters**:

* **owner_name**: The entity unique identifier (string)
* **name**: The name of the dataset.
* **dataset**: A data pointer to the new dataset data to be copied into dataset.
* **size**: The number of elements of the given dataset



**Parameters**:

* const std::string & **owner_name**
* const std::string & **name**
* const double * **dataset**
* size_t **size**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::update_dataset"}]}`
-->

### Function create\_particles\_time\_curve

<a id="structIRockyCurveCollectionData_1ae638f72f97d27b18d69ad0ded3b26d4b"></a>

![][public]


```cpp
void IRockyCurveCollectionData::create_particles_time_curve(const std::string &name, const std::string &unit)
```




**This method creates a time curve associated to particles by specifying its name and the**:

unit of the physical magnitude associated. Initially empty, the curve must be filled with data by using <code>[IRockyCurveCollectionData::update\_particles\_time\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a650d74b4c42f6d63489f98ee5835d942)</code> during the simulation.


**Parameters**:

* **name**: The name of the time curve. Shown within the Rocky UI as the curve label.
* **unit**: The unit of the magnitude displayed in the vertical axis of the time curve.



**Parameters**:

* const std::string & **name**
* const std::string & **unit**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::create_particles_time_curve"}]}`
-->

### Function create\_solver\_time\_curve

<a id="structIRockyCurveCollectionData_1a90860210505cb726accf7089cfec5ab2"></a>

![][public]


```cpp
void IRockyCurveCollectionData::create_solver_time_curve(const std::string &name, const std::string &unit)
```




**This method creates a time curve associated to the solver by specifying its name and the**:

unit of the physical magnitude associated. Initially empty, the curve must be filled with data by using <code>[IRockyCurveCollectionData::update\_solver\_time\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a237fae8d13385fc04866ad4c4b24aa73)</code> during the simulation.


**Parameters**:

* **name**: The name of the time curve. Shown within the Rocky UI as the curve label.
* **unit**: The unit of the magnitude displayed in the vertical axis of the time curve.



**Parameters**:

* const std::string & **name**
* const std::string & **unit**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::create_solver_time_curve"}]}`
-->

### Function create\_geometry\_time\_curve

<a id="structIRockyCurveCollectionData_1aab6ad0a64db6e08afcc4c09643f2fbaa"></a>

![][public]


```cpp
void IRockyCurveCollectionData::create_geometry_time_curve(int geometry_id, const std::string &name, const std::string &unit)
```




**This method creates a time curve associated to a specific geometry, by specifying its**:

name and the unit of the physical magnitude associated. Initially empty, the time curve must be filled with data during a simulation by using <code>[IRockyCurveCollectionData::update\_geometry\_time\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a3da24f758d62665100b5c43b8f1075d9)</code>.


**Parameters**:

* **geometry_id**: The geometry unique identifier (index)
* **name**: The name of the time curve. Shown within the Rocky UI as the curve label.
* **unit**: The unit of the magnitude displayed in the vertical axis of the time curve.



**Parameters**:

* int **geometry_id**
* const std::string & **name**
* const std::string & **unit**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::create_geometry_time_curve"}]}`
-->

### Function create\_time\_curve

<a id="structIRockyCurveCollectionData_1a521adcdec892f96ea7b628c5aa1a3560"></a>

![][public]


```cpp
void IRockyCurveCollectionData::create_time_curve(const std::string &owner_name, const std::string &name, const std::string &unit)
```




**This method creates a time curve associated to a given entity by specifying its**:

name and the unit of the physical magnitude associated. Initially empty, the time curve must be filled with data by using <code>[IRockyCurveCollectionData::update\_time\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a024664c7b45eb7a6728a3207eeb82ee3)</code> during the simulation.


**Parameters**:

* **owner_name**: The entity unique identifier (string)
* **name**: The name of the time curve. Shown within the Rocky UI as the curve label.
* **unit**: The unit of the magnitude displayed in the vertical axis of the time curve.



**Parameters**:

* const std::string & **owner_name**
* const std::string & **name**
* const std::string & **unit**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::create_time_curve"}]}`
-->

### Function setup\_particles\_time\_curve\_dimension

<a id="structIRockyCurveCollectionData_1a230f2f9be559dcb98d57a4e5c7218dd0"></a>

![][public]


```cpp
void IRockyCurveCollectionData::setup_particles_time_curve_dimension(const std::string &name, double dimension)
```




**The purpose of this method is to associate a dimensional factor to a time curve.**:

This factor will be used to nondimensionalize their values. Dimensional factors for the fundamental magnitudes are provided by functions of a <code>[IRockyModel](structIRockyModel.md#structIRockyModel)</code> object.


**Parameters**:

* **name**: The name of the time curve.
* **dimension**: The appropriate dimensional factor for the time curve.



**Parameters**:

* const std::string & **name**
* double **dimension**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::setup_particles_time_curve_dimension"}]}`
-->

### Function setup\_solver\_time\_curve\_dimension

<a id="structIRockyCurveCollectionData_1aec18b36979a9d48a3a48016d1d9b5b06"></a>

![][public]


```cpp
void IRockyCurveCollectionData::setup_solver_time_curve_dimension(const std::string &name, double dimension)
```




**The purpose of this method is to associate a dimensional factor to a time curve.**:

This factor will be used to nondimensionalize their values. Dimensional factors for the fundamental magnitudes are provided by functions of a <code>[IRockyModel](structIRockyModel.md#structIRockyModel)</code> object.


**Parameters**:

* **name**: The name of the time curve.
* **dimension**: The appropriate dimensional factor for the time curve.



**Parameters**:

* const std::string & **name**
* double **dimension**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::setup_solver_time_curve_dimension"}]}`
-->

### Function setup\_geometry\_time\_curve\_dimension

<a id="structIRockyCurveCollectionData_1aa445fbd38bfb1770a1c197f806890908"></a>

![][public]


```cpp
void IRockyCurveCollectionData::setup_geometry_time_curve_dimension(int geometry_id, const std::string &name, double dimension)
```




**The purpose of this method is to associate a dimensional factor to a time curve.**:

This factor will be used to nondimensionalize their values. Dimensional factors for the fundamental magnitudes are provided by functions of a <code>[IRockyModel](structIRockyModel.md#structIRockyModel)</code> object.


**Parameters**:

* **geometry_id**: The geometry unique identifier (index)
* **name**: The name of the time curve.
* **dimension**: The appropriate dimensional factor for the time curve.



**Parameters**:

* int **geometry_id**
* const std::string & **name**
* double **dimension**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::setup_geometry_time_curve_dimension"}]}`
-->

### Function setup\_time\_curve\_dimension

<a id="structIRockyCurveCollectionData_1ad43383c1fe177dc20d46ec205f8cb675"></a>

![][public]


```cpp
void IRockyCurveCollectionData::setup_time_curve_dimension(const std::string &owner_name, const std::string &name, double dimension)
```




**The purpose of this method is to associate a dimensional factor to a time curve.**:

This factor will be used to nondimensionalize their values. Dimensional factors for the fundamental magnitudes are provided by functions of a <code>[IRockyModel](structIRockyModel.md#structIRockyModel)</code> object.


**Parameters**:

* **owner_name**: The entity unique identifier (string)
* **name**: The name of the time curve. Shown within the Rocky UI as the curve label.
* **dimension**: The appropriate dimensional factor for the time curve.



**Parameters**:

* const std::string & **owner_name**
* const std::string & **name**
* double **dimension**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::setup_time_curve_dimension"}]}`
-->

### Function update\_particles\_time\_curve

<a id="structIRockyCurveCollectionData_1a650d74b4c42f6d63489f98ee5835d942"></a>

![][public]


```cpp
void IRockyCurveCollectionData::update_particles_time_curve(const std::string &name, double value)
```




**This method updates a time curve by inserting a new value.**:

Intended to be used only at output times. The value to be added should correspond to the output time at which this method is called. It only works with time curves previously created using <code>[IRockyCurveCollectionData::create\_particles\_time\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1ae638f72f97d27b18d69ad0ded3b26d4b)</code>, otherwise it throws an error.


**Parameters**:

* **name**: The name of the time curve.
* **value**: The value to be appended into the curve.



**Parameters**:

* const std::string & **name**
* double **value**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::update_particles_time_curve"}]}`
-->

### Function update\_solver\_time\_curve

<a id="structIRockyCurveCollectionData_1a237fae8d13385fc04866ad4c4b24aa73"></a>

![][public]


```cpp
void IRockyCurveCollectionData::update_solver_time_curve(const std::string &name, double value)
```




**This method updates a time curve by inserting a new value.**:

Intended to be used only at output times. The value to be added should correspond to the output time at which this method is called. It only works with time curves previously created using <code>[IRockyCurveCollectionData::create\_solver\_time\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a90860210505cb726accf7089cfec5ab2)</code>, otherwise it throws an error.


**Parameters**:

* **name**: The name of the time curve.
* **value**: The value to be appended into the curve.



**Parameters**:

* const std::string & **name**
* double **value**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::update_solver_time_curve"}]}`
-->

### Function update\_geometry\_time\_curve

<a id="structIRockyCurveCollectionData_1a3da24f758d62665100b5c43b8f1075d9"></a>

![][public]


```cpp
void IRockyCurveCollectionData::update_geometry_time_curve(int geometry_id, const std::string &name, double value)
```




**This method updates a time curve by inserting a new value.**:

Intended to be used only at output times. The value to be added should correspond to the output time at which this method is called. It only works with time curves previously created using <code>[IRockyCurveCollectionData::create\_geometry\_time\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1aab6ad0a64db6e08afcc4c09643f2fbaa)</code>, otherwise it throws an error.


**Parameters**:

* **geometry_id**: The geometry unique identifier (index)
* **name**: The name of the time curve.
* **value**: The value to be appended into the curve.



**Parameters**:

* int **geometry_id**
* const std::string & **name**
* double **value**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::update_geometry_time_curve"}]}`
-->

### Function update\_time\_curve

<a id="structIRockyCurveCollectionData_1a024664c7b45eb7a6728a3207eeb82ee3"></a>

![][public]


```cpp
void IRockyCurveCollectionData::update_time_curve(const std::string &owner_name, const std::string &name, double value)
```




**This method updates a time curve by inserting a new value.**:

Intended to be used only at output times. The value to be added should correspond to the output time at which this method is called. It only works with time curves previously created using <code>[IRockyCurveCollectionData::create\_time\_curve](structIRockyCurveCollectionData.md#structIRockyCurveCollectionData_1a521adcdec892f96ea7b628c5aa1a3560)</code>, otherwise it throws an error.


**Parameters**:

* **owner_name**: The entity unique identifier (string)
* **name**: The name of the time curve.
* **value**: The value to be appended into the curve.



**Parameters**:

* const std::string & **owner_name**
* const std::string & **name**
* double **value**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCurveCollectionData::update_time_curve"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)