# Class VariableTreeProperties

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

This class contains Properties that define the options for the VariableTree and variable editing options.

```csharp
public class VariableTreeProperties

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[VariableTreeProperties](Phoenix.ComponentPlugInSDK.Models.VariableTreeProperties.md)

#### Inherited Members

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

[VariableTreeProperties(string, bool, bool, string, string, string, PickUserDataActionAsync)](Phoenix.ComponentPlugInSDK.Models.VariableTreeProperties.-ctor.md#Phoenix_ComponentPlugInSDK_Models_VariableTreeProperties__ctor_System_String_System_Boolean_System_Boolean_System_String_System_String_System_String_Phoenix_ModelCenter_Common_VariablePropertiesControl_PickUserDataActionAsync_)

Constructor.

## Properties

[CanAddRemove](Phoenix.ComponentPlugInSDK.Models.VariableTreeProperties.CanAddRemove.md#Phoenix_ComponentPlugInSDK_Models_VariableTreeProperties_CanAddRemove)

If the UI controls can be used to add and remove variables.
If this is false, the user will not be able to click to add or delete to remove variables from the tree.
A false value will also remove access to the Text Based Script Editor.

[ComponentName](Phoenix.ComponentPlugInSDK.Models.VariableTreeProperties.ComponentName.md#Phoenix_ComponentPlugInSDK_Models_VariableTreeProperties_ComponentName)

Name to display at the root of the VariableTree.

[HasNamedVariables](Phoenix.ComponentPlugInSDK.Models.VariableTreeProperties.HasNamedVariables.md#Phoenix_ComponentPlugInSDK_Models_VariableTreeProperties_HasNamedVariables)

If the variables use a named variable property. This allows a mapping of the CAM variable name to a
name that may be different to use in the Builder.

[NamedVariableDisplayName](Phoenix.ComponentPlugInSDK.Models.VariableTreeProperties.NamedVariableDisplayName.md#Phoenix_ComponentPlugInSDK_Models_VariableTreeProperties_NamedVariableDisplayName)

The display name of named variables.

[NamedVariablePickAction](Phoenix.ComponentPlugInSDK.Models.VariableTreeProperties.NamedVariablePickAction.md#Phoenix_ComponentPlugInSDK_Models_VariableTreeProperties_NamedVariablePickAction)

The action to invoke when the user clicks the button to the right of the user data field. If
this parameter is null, the button will not be visible.

[NamedVariablePickText](Phoenix.ComponentPlugInSDK.Models.VariableTreeProperties.NamedVariablePickText.md#Phoenix_ComponentPlugInSDK_Models_VariableTreeProperties_NamedVariablePickText)

The text to display on the button that lets the user pick the user data. Defaults to "Pick" if
this parameter is null. Note that the button will not be visible unless `Phoenix.ComponentPlugInSDK.Models.VariableTreeProperties.NamedVariablePickAction` is non-null.

[NamedVariableToken](Phoenix.ComponentPlugInSDK.Models.VariableTreeProperties.NamedVariableToken.md#Phoenix_ComponentPlugInSDK_Models_VariableTreeProperties_NamedVariableToken)

The token to use for named variables in the Text Based Variable Editor.
This should contain only Alphanumeric characters and underscores.
