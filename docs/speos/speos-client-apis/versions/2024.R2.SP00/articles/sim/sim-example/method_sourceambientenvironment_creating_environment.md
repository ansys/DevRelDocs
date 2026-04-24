# SourceAmbientEnvironment – Creating an environment ambient source

The following script sample shows you an example on how to create an Environment Ambient Source.

```ironpython
environmentSource = SpeosSim.SourceAmbientEnvironment.Create()
environmentSource.ZenithDirection.Set(GetRootPart().CoordinateSystems[0].Axes[1])
environmentSource.NorthDirection.Set(GetRootPart().CoordinateSystems[0].Axes[0])
environmentSource.NorthDirectionReverse = True
environmentSource.ImageFile = ".\\SPEOS input files\\uffizi_probe.hdr"

environmentSource.ColorSpace = SpeosSim.SourceAmbientEnvironment.EnumColorSpace.UserDefinedRGB
environmentSource.RedSpectrumValueLibrary = ".\\SPEOS input files\\Red.spectrum"
environmentSource.GreenSpectrumValueLibrary = ".\\SPEOS input files\\Green.spectrum"
environmentSource.BlueSpectrumValueLibrary = ".\\SPEOS input files\\Blue.spectrum"
```