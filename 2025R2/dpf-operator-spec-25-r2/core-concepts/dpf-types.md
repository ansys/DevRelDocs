# DPF known types

Inputs or outputs of DPF operators and workflows are limited to the following types known by the framework.

## Standard types

<a id="standard-types"></a>

DPF understands most standard types out-of-the-box.
The following are standard types found in the current standard installation:

- bool
- char
- uint32
- uint64
- int32
- double
- string
- vector of bool
- vector of char
- vector of double
- vector of float
- vector of int32
- vector of string

## DPF basic types

The following is an exhaustive list of available DPF types.

### Any

<a id="any"></a>


The ``any`` type is the generic type of DPF. It allows to share on object without an explicit type.
Most DPF types can be cast as or from an ``Any`` which is useful when type enforcement is unnecessary. 

### Data processing

#### Operator

<a id="operator"></a>

The ``operator`` is the building block of DPF.
It holds data processing logic and generates outputs from its inputs when executed.

#### Workflow

<a id="workflow"></a>

The ``workflow`` is a connected set of operators.
It itself has inputs and outputs, and allows to package and share complex combinations of operators.

### File management

#### Data sources

<a id="data-sources"></a>

The ``data_sources`` holds information on files of interest such as:

- their path
- their associated namespace
- their associated key (usually the file extension)

#### Streaming

<a id="streams-container"></a>

The ``streams_container`` is the result of opening a stream to files in a ``data_sources``.
It enables streaming to and from the files and handles caching of data requests to the files.

The use of a ``streams_container`` is highly recommended whenever possible to benefit from IO performance features.

### Metadata

The following DPF objects hold light-weight data (metadata) relative to other DPF types.

#### Field metadata

<a id="field-definition"></a>

The ``field_definition`` holds metadata relative to a ``field``.

#### Mesh metadata

<a id="mesh-info"></a>

The ``mesh_info`` holds metadata relative to a ``meshed_region``.

Only available for CFF and LSDYNA.

#### Result file metadata

<a id="result-info"></a>

The ``result_info`` holds metadata relative to available results in files from a ``data_sources``.

### Data supports

<a id="support"></a>

Supports are entities dedicated to holding information about the model itself.

Every ``field`` requires a ``support`` for DPF to understand what its data is related to.

This concept allows DPF to manage simulation data efficiently.

#### Mesh

<a id="meshed-region"></a>

The ``meshed_region`` holds information relative to the mesh of the simulation model.

It gives access to several fields of data such as:
- the mesh connectivity
- the node coordinates
- the element types

#### Time and frequency

<a id="time-freq-support"></a>

For time and pseudo time based simulations or for frequency based simulations, the ``time_freq_support`` holds information about the 
simulation steps and sub-steps, time-steps, or mode/harmonic frequencies.

#### Cyclic

<a id="cyclic-support"></a>

For cyclic simulation models, the ``cyclic_support`` holds information about the number of sectors and the number of stages.

### Filtering

<a id="scoping"></a>

- scoping

### Data storage

<a id="data-tree"></a>
- data_tree  
<a id="abstract-data-tree"></a>
- abstract_data_tree  
<a id="custom-type-field"></a>
- custom_type_field  
<a id="field"></a>
- field  
<a id="generic-data-container"></a>
- generic_data_container  
<a id="property-field"></a>
- property_field  
<a id="string-field"></a>
- string_field

### Collections

<a id="label-space"></a>
- label_space
<a id="collection"></a>
- collection
<a id="any-collection"></a>
- any_collection
<a id="custom-type-fields-container"></a>
- custom_type_fields_container
<a id="fields-container"></a>
- fields_container
<a id="meshes-container"></a>
- meshes_container
<a id="property-fields-container"></a>
- property_fields_container
<a id="scopings-container"></a>
- scopings_container 



### Unit systems

- UnitSystem
