# Enum ConversionMethod
<a id="VM_CAD_Kernel_ConversionMethod"></a>

Namespace: [VM.CAD.Kernel](VM.CAD.Kernel.md)  
Assembly: VM.CAD.Kernel.dll  

This enum represents the method for converting the ACIS data, where present in the old save file, to the Parasolid

```csharp
public enum ConversionMethod
```

## Fields

`Auto = 0` 

Select translator automatically



`Hoops = 1` 

Use the Hoops Exchange to convert ACIS data to the Parasolid



`HoopsFollowedByIop = 9` 

Try Hoops Exchange first, and then convert with other methods if Hoops Exchange fails.



`HoopsFollowedByOthers = 9` 

Try Hoops Exchange first, and then convert with other methods if Hoops Exchange fails.



`IopAndMapper = 2` 

Convert ACIS data to Parasolid using the Spatial InterOp included with 2024 R2 SP3.

This option is available when 2024 R2 Service Pack 3 is installed.

`IopFollowedByHoops = 10` 

Try InterOp first, and then convert with other methods if InterOp fails.

This option is available when 2024 R2 Service Pack 3 is installed.

`IopFollowedByOthers = 10` 

Try InterOp first, and then convert with other methods if InterOp fails.

This option is available when 2024 R2 Service Pack 3 is installed.

`Stride = 4` 

Use the Stride Convert to convert ACIS data to the Parasolid

This option is available when 2024 R2 Service Pack 3 is installed.

`StrideFollowedByOthers = 12` 

Try Stride first, and then convert with other methods if InterOp fails.



`UseAlternativeIfFailed = 8` 

Use alternative converter if first conversion fails.

This option is available when 2024 R2 Service Pack 3 is installed.

