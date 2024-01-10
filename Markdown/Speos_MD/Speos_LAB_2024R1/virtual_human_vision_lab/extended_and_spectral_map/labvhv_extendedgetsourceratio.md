# ExtendedGetSourceRatio 

## Description 

Gets the value of one of the sources of an extended or a spectral map.

In case of error, returns -1 if:

- the map is neither an extended nor a spectral map

- no source in the map

- iSource \>= number of sources in the map

- iSource \< 0


## Syntax 

*object*.ExtendedGetSourceRatio\(int iSource\) As Double

- *object*: Virtual Photometric Lab or Virtual Human Vision Lab object

- *iSource*: index of the source



