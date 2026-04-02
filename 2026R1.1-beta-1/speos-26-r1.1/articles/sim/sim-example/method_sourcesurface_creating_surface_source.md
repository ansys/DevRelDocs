# SourceSurface – Creating a surface source

The following script sample shows you an example on how to create a Surface Source.

```ironpython
surfaceSource = SpeosSim.SourceSurface.Create()
surfaceSource.EmissiveFaces.Set(GetRootPart().Bodies[1].Faces[7])

surfaceSource.FluxType = SpeosSim.SourceSurface.EnumFluxType.LuminousFlux
surfaceSource.FluxValueLuminous = 0.3

surfaceSource.SpectrumType = SpeosSim.SourceSurface.EnumSpectrumType.WavelengthSpectrum
surfaceSource.SpectrumValueWavelength = 550

surfaceSource.IntensityType = SpeosSim.SourceSurface.EnumIntensityType.SymmetricGaussian
surfaceSource.IntensityFWHMAngle = 15

surfaceSource.RayLength = 1
```