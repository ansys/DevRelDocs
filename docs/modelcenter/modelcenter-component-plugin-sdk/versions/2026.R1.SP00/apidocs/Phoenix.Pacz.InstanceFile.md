# Class InstanceFile

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

Instance file within a component.

```csharp
public class InstanceFile : IInstanceFile, IComparable<IInstanceFile>

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[InstanceFile](Phoenix.Pacz.InstanceFile.md)

#### Implements

[IInstanceFile](Phoenix.PaczAPI.IInstanceFile.md),
[IComparable<IInstanceFile>](https://learn.microsoft.com/dotnet/api/system.icomparable-1)

#### Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

[InstanceFile(string, bool)](Phoenix.Pacz.InstanceFile.-ctor.md#Phoenix_Pacz_InstanceFile__ctor_System_String_System_Boolean_)

Constructor

## Properties

[PlugInIntegral](Phoenix.Pacz.InstanceFile.PlugInIntegral.md#Phoenix_Pacz_InstanceFile_PlugInIntegral)

If the instance file is integral to the Pacz.

[RelativePath](Phoenix.Pacz.InstanceFile.RelativePath.md#Phoenix_Pacz_InstanceFile_RelativePath)

The relative path to the file.
Note that the Pacz format specifies that all paths should be saved with forward slashes as the path separator,
but that all backslashes will be interpreted as path separators as well.
Therefore, when the information about this instance file is written out to a Pacz, the file will contain
the value of this property with all backslashes replaced with forward slashes.
Additionally, when this property is read from a Pacz, forward and backslashes in the Pacz will be replaced
with the platform's path separator.

## Methods

[CompareTo(IInstanceFile)](Phoenix.Pacz.InstanceFile.CompareTo.md#Phoenix_Pacz_InstanceFile_CompareTo_Phoenix_PaczAPI_IInstanceFile_)
