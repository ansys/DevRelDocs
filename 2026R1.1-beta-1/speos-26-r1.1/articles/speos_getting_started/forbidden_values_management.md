# Forbidden values management

The following page presents you how Speos handles the forbidden values when they are defined in scripts.

Forbidden values correspond to values that do not meet the Speos standards.

## Out of Range Values

If a value set in the script is out of the standard range in which it should be, then the previous value is defined.

Example

```ironpython
material = SpeosSim.Material.Create() (reflectance =100)
material.SOPReflectance =50; //ok
material.SOPReflectance =150; // keeps the previous value since it should be lower than 100
```

## Decimal Values

If a value set in the script uses decimals whereas it only allows integer, then the value is rounded up or down to the nearest whole number.

Example

```ironpython
material = SpeosSim.Material.Create()
material.SOPReflectance =15,4; // set the value to 15 since it should be an integer
```