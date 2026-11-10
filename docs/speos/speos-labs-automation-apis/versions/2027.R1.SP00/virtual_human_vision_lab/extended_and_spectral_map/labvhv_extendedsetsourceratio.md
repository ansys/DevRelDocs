# ExtendedSetSourceRatio 

## Description 

Sets the value of one of the sources of an extended or a spectral map \(0 if the map is not an extended or a spectral map\).

**Note:**

The *User defined* mode must be active \(*ExtendedSetActiveSource\(-2\)*\) for the power ratio to be effective
before using the *ExtendedSetSourceRatio* method. See the [ExtendedSetActiveSource](labvhv_extendedsetactivesource.md) chapter for more details.

## Syntax 

*object*.ExtendedSetSourceRatio\(int iSource, double dRatio\) As Short

- *object*: Virtual Photometric Lab or Virtual Human Vision Lab object

- *iSource*: index of the source

- *dRatio*: value to set



