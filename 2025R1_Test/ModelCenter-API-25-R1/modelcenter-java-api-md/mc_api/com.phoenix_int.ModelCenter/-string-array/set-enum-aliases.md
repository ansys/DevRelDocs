//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[StringArray](index.md)/[setEnumAliases](set-enum-aliases.md)

# setEnumAliases


public [setEnumAliases](set-enum-aliases.md)(enumAliases: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))

sets the enumerated aliases for the variable. If specified, the enumerated aliases are alias values for enumerated values. For example, if the enumerated values are set to &quot;1,2,3&quot;, and the enumerated aliases are set to &quot;one,two,three&quot;, then calling fromString( &quot;three&quot; ) will result in the value being set to 3.

#### Parameters



| | |
|---|---|
| enumAliases | a comma separated list of enumerated aliases |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
