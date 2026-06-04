# Constructor VariableTreeProperties

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

## VariableTreeProperties(string, bool, bool, string, string, string, PickUserDataActionAsync)

Constructor.

```csharp
public VariableTreeProperties(string componentName, bool canAddRemove = true, bool hasNamedVariables = false, string namedVariableDisplayName = null, string namedVariableToken = null, string namedVariablePickText = null, VariablePropertiesControl.PickUserDataActionAsync namedVariablePickAction = null)

```

### Parameters

`componentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name to display at the root of the VariableTree.

`canAddRemove` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If the UI controls can be used to add and remove variables.

`hasNamedVariables` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If the variables use a named variable property.

`namedVariableDisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The display name of named variables.

`namedVariableToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

The token to use for named variables in the Text Based Variable Editor.

`namedVariablePickText` [string](https://learn.microsoft.com/dotnet/api/system.string)

The text to display on the button that lets the user pick the user data. Defaults to "Pick" if
this parameter is null. Note that the button will not be visible unless `namedVariablePickAction` is non-null.

`namedVariablePickAction` VariablePropertiesControl.PickUserDataActionAsync

The action to invoke when the user clicks the button to the right of the user data field. If
this parameter is null, the button will not be visible.
