# SourceAmbienUS1976 – Creating an Ambient Source US Standard Atmosphere 1976

The following script sample shows you an example on how to create a Ambient Source US Standard Atmosphere 1976.

```
usSource = SpeosSim.SourceAmbientUS1976.Create()

usSource.TimeZone = "OPTIS, France"
usSource.DateTime = DateTime(2009, 7, 14, 12, 0, 0)
usSource.ZenithDirection.Set(GetRootPart().CoordinateSystems[0].Axes[1])
usSource.NorthDirection.Set(GetRootPart().CoordinateSystems[0].Axes[0])
```