# ExtendedActivateSourceLayer 

## Description 

Activates one source of an extended map.

In case of error, returns -1 if:

- no source in the map

- iSource \>= number of sources in the map

- iSource \< 0


## Syntax 

*object*.ExtendedActivateSourceLayer\(int iSource, bool bActive\) As Short

- *object*: Virtual Photometric Lab or Human Vision Lab object

- *iSource*: index of the source to consider

- *bActive*: true to activate the source, false to deactivate it



