# ConvertToScriptVersion method

## Description

This function allows you to convert retrieved geometry objects, from a Speos object selection attribute \(i.e. Items, LinkedObjects\), from the latest Speos API version to the anterior script version that you want to edit.

## Python Definition

```ironpython
import SpaceClaim.Api.V20 as scriptNameSpace

def ConvertToScriptVersion(obj):
    doc = Window.ActiveWindow.Document
    res = scriptNameSpace.Moniker[scriptNameSpace.IDocObject].FromString(obj.Moniker.ToString()).Resolve(doc)
    return res
```

## Example

```ironpython
docObjInScriptVersion = ConvertToScriptVersion( docObjInSpeosVersion )
print docObjInScriptVersion # => V20 => OK
```