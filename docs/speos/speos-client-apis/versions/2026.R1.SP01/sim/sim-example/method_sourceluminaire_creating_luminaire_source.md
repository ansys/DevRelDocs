# SourceLuminaire – Creating a luminaire source

The following script sample shows you an example on how to create a Luminaire Source.

```ironpython
luminaireSource = SpeosSim.SourceLuminaire.Create()

luminaireSource.OriginPoint.Set(GetRootPart().CoordinateSystems[0])
luminaireSource.XDirection.Set(GetRootPart().CoordinateSystems[0].Axes[0])
luminaireSource.YDirection.Set(GetRootPart().CoordinateSystems[0].Axes[1])
luminaireSource.YDirectionReverse = True

luminaireSource.IntensityFile = ".\\SPEOS input files\\BLOCK_REFLECTORS_LED.DirectSimulation.Eulumdat.ldt"
luminaireSource.SpectrumType = SpeosSim.SourceLuminaire.EnumSpectrumType.LibrarySpectrum
luminaireSource.SpectrumValueLibrary = ".\\SPEOS input files\\LXML-PWC2 - Cool White - VN (5000 - 5650K).spectrum"

luminaireSource.DisplayIntensityDiagram = True

luminaireSource2 = luminaireSource.Clone()
luminaireSource2.OriginPoint.Set(GetRootPart().Curves[1])
```