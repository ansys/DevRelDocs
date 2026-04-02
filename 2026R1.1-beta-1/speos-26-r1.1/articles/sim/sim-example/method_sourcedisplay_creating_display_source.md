# SourceDisplay – Creating a display source

The following script sample shows you an example on how to create a Display Source.

```ironpython
displaySource = SpeosSim.SourceDisplay.Create()

displaySource.OriginPoint.Set(GetRootPart().CoordinateSystems[0])
displaySource.XDirection.Set(GetRootPart().CoordinateSystems[0].Axes[0])
displaySource.YDirection.Set(GetRootPart().CoordinateSystems[0].Axes[1])

displaySource.ImageFile = ".\\SPEOS input files\\ATM.bmp"
displaySource.ColorSpace = SpeosSim.SourceDisplay.EnumColorSpace.UserDefinedRGB
displaySource.RedSpectrumValueLibrary = ".\\SPEOS input files\\Red.spectrum"
displaySource.GreenSpectrumValueLibrary = ".\\SPEOS input files\\Green.spectrum"
displaySource.BlueSpectrumValueLibrary = ".\\SPEOS input files\\Blue.spectrum"

displaySource.Luminance = 1000

displaySource.XIsMirrored = True
displaySource.YIsMirrored = True
displaySource.XEnd = 102
displaySource.YEnd = 74.5

displaySource.IntensityType = SpeosSim.SourceDisplay.EnumIntensityType.SymmetricGaussian
displaySource.IntensityFWHMAngle = 60
```