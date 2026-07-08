# SourceAmbientCIEGeneral – Creating an ambient source CIE standard general sky

The following script sample shows you an example on how to create an Ambient Source CIE Standard General Sky.

```ironpython
generalSource = SpeosSim.SourceAmbientCIEGeneral.Create()
generalSource.ZenithDirection.Set(GetRootPart().CoordinateSystems[0].Axes[1])
generalSource.NorthDirection.Set(GetRootPart().CoordinateSystems[0].Axes[0])
generalSource.NorthDirectionReverse = True

generalSource.TimeZone = "OPTIS, France"
generalSource.DateTime = DateTime(2009, 7, 14, 12, 0, 0)
generalSource.CIEType = SpeosSim.SourceAmbientCIEGeneral.EnumCIEType.PARTLY_CLOUDY_SKY_NO_GRADATION_TOWARDS_ZENITH_BRIGHTER_CIRCUMSOLAR_REGION
```