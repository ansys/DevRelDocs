# Class FileLoadProperties

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

This class contains Properties that define the file load behavior used by VariablesBasedBuilders.

```csharp
public class FileLoadProperties

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[FileLoadProperties](Phoenix.ComponentPlugInSDK.Models.FileLoadProperties.md)

#### Inherited Members

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

[FileLoadProperties(Func<string, VariableBasedBuilderViewModel, Task>, string)](Phoenix.ComponentPlugInSDK.Models.FileLoadProperties.-ctor.md#Phoenix_ComponentPlugInSDK_Models_FileLoadProperties__ctor_System_Func_System_String_Phoenix_ComponentPlugInSDK_ViewModels_VariableBasedBuilderViewModel_System_Threading_Tasks_Task__System_String_)

Constructor.

## Properties

[FileFilter](Phoenix.ComponentPlugInSDK.Models.FileLoadProperties.FileFilter.md#Phoenix_ComponentPlugInSDK_Models_FileLoadProperties_FileFilter)

The file filter to use in the OpenFileDialog.

[FileLoadAction](Phoenix.ComponentPlugInSDK.Models.FileLoadProperties.FileLoadAction.md#Phoenix_ComponentPlugInSDK_Models_FileLoadProperties_FileLoadAction)

Action to invoke to load the file.
