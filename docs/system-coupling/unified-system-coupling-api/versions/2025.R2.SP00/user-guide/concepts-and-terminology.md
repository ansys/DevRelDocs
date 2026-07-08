# Concepts overview

## Dimensionalities

A **dimensionality** describes the base quantities of a given physical quantity.
It can be used to deduce the units of that physical quantity.
The base quantities are:

- length
- time
- mass
- temperature
- amount of substance
- current
- luminous intensity
- angle

The dimensions of any physical quantity can be described as a combination
of these base quantities. To specify the dimensions, the exponents of the
above base quantities need to be assigned. For example, power has
length exponent of 2, mass exponent of 1, and time exponent of -3.

A **unit system** must specify the base units of the above base quantities.
Once the unit system and the dimensionality are known, the units of
any physical quantity can be deduced.
Note that currently System Coupling can only work in SI unit system.

## Attributes

An **attribute** is single-valued property that can be added to either the
participant or a variable. The value of the attribute is fixed at the time of
setup and, in contrast to parameters, does not change during the coupled analysis
or mapping. Attributes can be used to communicate some setup information about
the participant or variable.

To represent different attribute types, attributes may store either an integer, real, or string value.

The attributes have the following properties:

- **Name**: a unique identifier for the attribute.

- **Value**: scalar value of (signed) int (for an **IntegerAttribute**), double (for a **RealAttribute**), or string (for a **StringAttibute**).

- **Dimensionality**: base quantities of an attribute (**RealAttribute** only).

- **Modifiable**: a flag which specifies whether the attribute may be modified
during the setup phase (if the flag is true) or if the attribute is fixed (if the flag is false).

## Variables

A **variable** represents a physical quantity that is either consumed or provided by
the participant solver. Variables are associated with the solution field data.

The variables have the following properties:

- **Name**: a unique identifier for the variable.

- **Display name**: a user-friendly name for the variable.

- **Tensor type**: tensor type of this variable. System Coupling supports scalar and vector tensor types.

- **Is extensive**: a flag for specifying whether the variable represents an
  extensive or an intensive property. Extensive properties are those whose value
  depends on the size of the system (for example heat flow, force), while intensive
  properties are those whose value is independent of the size of the system
  (for example heat flux, temperature). System Coupling supports both extensive and
  intensive variables.

- **Location**: mesh location of the solution data field. System Coupling
  supports node and element locations. If the region discretization type is
  point cloud, then the location of the variable added to that region is
  insignificant.

- **Data type**: the type of data that is used to represent this variable. Currently
  supported data types are real and complex values.

- **Quantity type**: quantity type is an optional property that describes the kind of
  variable this is. Quantity type is primarily used to improve the coupled setup validation,
  but can also be used in other contexts. There is a finite list of supported
  quantity types. If the variable does not fit into any quantity type on the list,
  its quantity type can be left unspecified.

Variables can have any number of integer, real, and string-valued attributes.

## Regions

Participants declare which **regions** can be used in the coupled analysis.
Regions represent portions of the computational domain for the participant solver.
Regions are associated with the computational mesh or the point cloud (depending
on the region discretization method).

The regions have the following properties:

- **Name**: a unique identifier for the region.

- **Display name**: a user-friendly name for the region.

- **Topology**: topology of this region, for example surface or volume

- **Region discretization type**: discretization type of this region, for example mesh or point cloud.

Each region can declare **input variables** and **output variables**.

- Input variables represent physical quantities for which the participant expects System Coupling to provide values.
- Output variables represent physical quantities for which System Coupling expects the participant to provide values.

## Parameters

Parameters are single-valued variables that are associated not with a region,
but the solver itself. Instead of having a value for each location on a mesh,
they have a single value and are defined on the participant. Currently, they
are scalar and real-valued.

Parameters have the following properties:

- **Name**: a unique identifier for the parameter.

- **Display name**: a user-friendly name for the parameter.

The participant may define a parameter as either an **input parameter** or **output parameter**. A parameter can be either an input or an output, but not both. All parameters must be defined as either an input or an output.

- Input parameters represent physical quantities for which the participant expects System Coupling to provide values.
- Output parameters represent physical quantities for which System Coupling expects the participant to provide values.

## Coupling interfaces and data transfers

**Coupling interface** connects two disjoint sets of regions,
one set for each side of the interface, for the purpose of
transferring variables between these two sides.
The two sides of the coupling interface are called **side one** and **side two**.
All regions on both sides of the interface must have the same topology.
Regions on one side of the interface must all have the same region discretization type (that is either
all mesh regions or all point cloud regions).

The pairs of variables that are transferred between the two sides of the interface
form a **data transfer**.

By default, the data transfers are added automatically if a variable
is set up as an output in all regions forming one side of the interface and as an
input in all regions forming the opposite side of the interface. However, the default
creation of data transfers can be turned off if so desired.

In addition, data transfers can be defined manually. If one variable
is set up as an output in all regions forming one side of the interface and
_another_ variable is set up as input in all regions forming the opposite side of the interface,
then it may be possible to transfer the solution data from the output variable to the input variable.
The two variables must have the same tensor type and data type, but can have different
extensive/intensive property, and different locations.
If the quantity types are specified, they must be the same.

For a given data transfer, if the variable is an output then that side of the interface
is called the **source side** and the side that has the transferred variable as an input side is called the **target side**.
Note that each side of the coupling interface may be the source side and/or the target side,
depending on the variable being mapped. It is possible to map one variable from
side one to side two and another variable from side two to side one at the same time.

See [Multi-Region Coupling Interfaces](multiregion.md) for more details on how to handle
interfaces with more than one region per side.

## Parameter data access

Copies of single-valued parameter data are sent to and from the participant.
See [Access to Parameter Data](parameter-data-access.md) for more information.

## Heavyweight data access structures

Heavyweight data access structures provide access to mesh, point cloud, and solution data.
The participant library makes use of the **callback** functions to access that data.
See [Access to heavyweight data](heavyweight-data-access.md) for more information.

### Volume meshes

Volume mesh represents the mesh of a volume region.
The volume mesh must be communicated using one of the supported volume mesh formats - see
[Mesh And Point Cloud Data Access](mesh-data-access.md) for more information.

### Surface meshes

Surface mesh represents the mesh of a surface region.
The surface mesh must be communicated using one of the supported surface mesh formats.
Surface mesh can be connected to one or two volume meshes, that is it can be a bounding surface of a volume mesh.
This kind of connectivity describes the **mesh model**.

See [Mesh And Point Cloud Data Access](mesh-data-access.md) for more information.

### Point clouds

Point cloud is an alternative option for discretizing
the computational domain. It describes a set of
disconnected points in space and can be useful in some applications.

See [Mesh And Point Cloud Data Access](mesh-data-access.md)
for more information about the supported point cloud format.

### Solution field data

The **solution field data** represents the field of values of a particular variable on a given region.
Examples of solution field data are **scalar data**, **vector data**, **complex scalar data**,
and **complex vector data**. Depending on whether the
variable is an input or an output on that region, System Coupling
needs a read/write or read-only access to that field.

### Dimension

The **dimension** represents the number of components required to specify a point in space, for example 2D or 3D.
System Coupling supports 2D and 3D participants, with 3D being the default.
