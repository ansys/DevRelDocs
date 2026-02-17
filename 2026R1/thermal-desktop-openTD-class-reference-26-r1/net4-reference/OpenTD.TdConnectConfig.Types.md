# <a id="OpenTD_TdConnectConfig_Types"></a> Enum TdConnectConfig.Types

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Determines whether ThermalDesktop will start a new instance of TD,
attach to an existing instance, or automatically try to attach but
revert to starting a new instance if attaching fails. There's also
an INPROCESS option that is only used internally by TD.

```csharp
public enum TdConnectConfig.Types
```

## Fields

`ATTACH_TO_TD = 2` 

`AUTO = 1` 

`INPROCESS = 3` 

`START_NEW_TD = 0` 

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\)

