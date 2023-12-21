# SourceAmbientCIEOvercast – Creating an Ambient Source CIE Standard Overcast Sky

The following script sample shows you an example on how to create an Ambient Source CIE Standard Overcast Sky.

```
overcastSource = SpeosSim.SourceAmbientCIEOvercast.Create()
overcastSource.ZenithDirection.Set(GetRootPart().CoordinateSystems[0].Axes[1])
overcastSource.SpectrumType = SpeosSim.SourceAmbientCIEOvercast.EnumSpectrumType.LibrarySpectrum
overcastSource.SpectrumValueLibrary = ".\\SPEOS input files\\Sky.spectrum"
```