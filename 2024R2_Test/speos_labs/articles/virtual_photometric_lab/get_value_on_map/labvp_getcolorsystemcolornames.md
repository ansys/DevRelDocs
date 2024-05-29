# GetColorSystemColorNames 

## Description 

Returns an array of 4 VARIANT representing in order: the name of the color system, the name of each three components of the color system \(for example, U, V, Y if the value returned by [GetCurrentColorSystem](labvp_getcurrentcolorsystem.md) is 2\).

## Syntax 

*object*.GetColorSystemColorNames\(short iColorSystem\) As Variant

- *object*: Virtual Photometric Lab object

- *iColorSystem*: colorimetric system

    0: COLOR\_SYSTEM\_XYZ

    1: COLOR\_SYSTEM\_xyY

    2: COLOR\_SYSTEM\_uvY\_CIE1960

    3: COLOR\_SYSTEM\_uvY\_CIE1976

    4: COLOR\_SYSTEM\_Luv

    5: COLOR\_SYSTEM\_Lab

    6: COLOR\_SYSTEM\_LCh



