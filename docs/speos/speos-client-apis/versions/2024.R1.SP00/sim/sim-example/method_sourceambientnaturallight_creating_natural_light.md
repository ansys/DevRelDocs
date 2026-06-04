# SourceAmbientNaturalLight – Creating a natural light ambient source

The following script sample shows you an example on how to create a Natural Light Ambient Source.

```ironpython
naturalLight = SpeosSim.SourceAmbientNaturalLight.Create()
naturalLight.ZenithDirection.Set(GetRootPart().CoordinateSystems[0].Axes[1])
naturalLight.NorthDirection.Set(GetRootPart().CoordinateSystems[0].Axes[0])
naturalLight.NorthDirectionReverse = True

naturalLight.TimeZone = "OPTIS, France"
naturalLight.DateTime = DateTime(2009, 7, 14, 12, 0, 0)
```