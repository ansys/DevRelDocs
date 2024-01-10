# GetColor 

## Description 

Returns an array of 3 VARIANT of the colorimetric coordinates at the given position.

## Syntax 

*object*.GetColor\(double dXPos, double dYPos, short nColorSystem\) As Variant

- *object*: Virtual Photometric Lab or Virtual Human Vision Lab object

- *dX*: horizontal coordinate

- *dY*: vertical coordinate

- *nColorSystem*: colorimetric system

    0: COLOR\_SYSTEM\_XYZ

    1: COLOR\_SYSTEM\_xyY

    2: COLOR\_SYSTEM\_uvY\_CIE1960

    3: COLOR\_SYSTEM\_uvY\_CIE1976

    4: COLOR\_SYSTEM\_Luv

    5: COLOR\_SYSTEM\_Lab

    6: COLOR\_SYSTEM\_LCh

    For 4, 5 and 6, the illuminant defined in the Virtual Photometric Lab is taken into account.



