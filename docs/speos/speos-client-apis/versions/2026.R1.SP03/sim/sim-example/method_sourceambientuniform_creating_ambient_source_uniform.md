# SourceAmbientUniform – Creating an ambient source uniform

The following script sample shows you an example on how to create a Uniform Ambient Source.

```ironpython
uniformSource = SpeosSim.SourceAmbientUniform.Create()
uniformSource.ZenithDirection.Set(GetRootPart().CoordinateSystems[0].Axes[1])
uniformSource.SpectrumType = SpeosSim.SourceAmbientUniform.EnumSpectrumType.LibrarySpectrum
uniformSource.SpectrumValueLibrary = ".\\SPEOS input files\\Sky.spectrum"
```