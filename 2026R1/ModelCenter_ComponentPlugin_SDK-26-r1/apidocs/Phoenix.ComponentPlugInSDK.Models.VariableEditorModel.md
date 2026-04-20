# Class VariableEditorModel

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

Model that represents a list of `Phoenix.ModelCenter.Common.PHXVariable`.
Has methods for creating and parsing a VariableEditor string.

```csharp
public class VariableEditorModel

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[VariableEditorModel](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.md)

#### Inherited Members

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

[VariableEditorModel(string)](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.-ctor.md#Phoenix_ComponentPlugInSDK_Models_VariableEditorModel__ctor_System_String_)

Constructor

## Fields

[groupLineStart](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.groupLineStart.md#Phoenix_ComponentPlugInSDK_Models_VariableEditorModel_groupLineStart)

The start of group definition lines.

[variableLineStart](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.variableLineStart.md#Phoenix_ComponentPlugInSDK_Models_VariableEditorModel_variableLineStart)

The start of variable definition lines.

## Properties

[VariableValueScope](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.VariableValueScope.md#Phoenix_ComponentPlugInSDK_Models_VariableEditorModel_VariableValueScope)

If non-null, this class will set the default value for any File variable
objects from the given scope using the variable's name as the key

[Variables](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.Variables.md#Phoenix_ComponentPlugInSDK_Models_VariableEditorModel_Variables)

The list of variables.

## Methods

[FromString(string)](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.FromString.md#Phoenix_ComponentPlugInSDK_Models_VariableEditorModel_FromString_System_String_)

Updates the model from a text string.

[ToString()](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.ToString.md#Phoenix_ComponentPlugInSDK_Models_VariableEditorModel_ToString)

Get a string representation of this `Phoenix.ComponentPlugInSDK.Models.VariableEditorModel`. This string representation is
appropriate for user presentation and for parsing using the `Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.FromString(System.String)` method.
