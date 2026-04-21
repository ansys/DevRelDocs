# Class RuntimeVariable

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

A concrete implementation of IRuntimeVariable.

This class implements IRuntimeVariable and adds the ability to change it after it
has been created.

This class is not thread safe.

```csharp
public class RuntimeVariable : AbstractDisposable, IRuntimeVariable, IDisposable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
AbstractDisposable ←
[RuntimeVariable](Phoenix.Pacz.RuntimeVariable.md)

#### Implements

[IRuntimeVariable](Phoenix.PaczAPI.IRuntimeVariable.md),
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

AbstractDisposable.disposed,
AbstractDisposable.Dispose(),
AbstractDisposable.IsDisposed,
AbstractDisposable.Dispose(bool),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

[RuntimeVariable()](Phoenix.Pacz.RuntimeVariable.-ctor.md#Phoenix_Pacz_RuntimeVariable__ctor)

Constructor which generates an unusable empty RuntimeVariable.

[RuntimeVariable(string, VariableType, IVariableValue, string, string, string, object, object, object[], string[], IReadOnlyDictionary<string, string>)](Phoenix.Pacz.RuntimeVariable.-ctor.md#Phoenix_Pacz_RuntimeVariable__ctor_System_String_Phoenix_ModelCenter_Common_Types_VariableType_Phoenix_ModelCenter_Common_Types_IVariableValue_System_String_System_String_System_String_System_Object_System_Object_System_Object___System_String___System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__)

Constructor

[RuntimeVariable(string, VariableMetadata, IVariableValue, IReadOnlyDictionary<string, string>)](Phoenix.Pacz.RuntimeVariable.-ctor.md#Phoenix_Pacz_RuntimeVariable__ctor_System_String_Phoenix_ModelCenter_Common_Types_VariableMetadata_Phoenix_ModelCenter_Common_Types_IVariableValue_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__)

Constructor

[RuntimeVariable(IRuntimeVariable)](Phoenix.Pacz.RuntimeVariable.-ctor.md#Phoenix_Pacz_RuntimeVariable__ctor_Phoenix_PaczAPI_IRuntimeVariable_)

Copy constructor. Makes a copy of the source such that dispose independently cleans up
the source and the new RuntimeVariable.

## Properties

[CustomMetadata](Phoenix.Pacz.RuntimeVariable.CustomMetadata.md#Phoenix_Pacz_RuntimeVariable_CustomMetadata)

Get the variable custom metadata which allows for arbitrary
storage of name/value pairs with the variable.

[DefaultValue](Phoenix.Pacz.RuntimeVariable.DefaultValue.md#Phoenix_Pacz_RuntimeVariable_DefaultValue)

The default value for this variable.

[Metadata](Phoenix.Pacz.RuntimeVariable.Metadata.md#Phoenix_Pacz_RuntimeVariable_Metadata)

The metadata about the variable

[Name](Phoenix.Pacz.RuntimeVariable.Name.md#Phoenix_Pacz_RuntimeVariable_Name)

The name of the variable. Must be non-empty and may use dotted notation.

## Methods

[CloneDefaultValueFrom(IVariableValue)](Phoenix.Pacz.RuntimeVariable.CloneDefaultValueFrom.md#Phoenix_Pacz_RuntimeVariable_CloneDefaultValueFrom_Phoenix_ModelCenter_Common_Types_IVariableValue_)

Sets `Phoenix.Pacz.RuntimeVariable.DefaultValue` by making a clone of
`value`.

[Dispose(bool)](Phoenix.Pacz.RuntimeVariable.Dispose.md#Phoenix_Pacz_RuntimeVariable_Dispose_System_Boolean_)

Standard disposal.

[MoveDefaultValueFrom(IVariableValue)](Phoenix.Pacz.RuntimeVariable.MoveDefaultValueFrom.md#Phoenix_Pacz_RuntimeVariable_MoveDefaultValueFrom_Phoenix_ModelCenter_Common_Types_IVariableValue_)

Sets `Phoenix.Pacz.RuntimeVariable.DefaultValue` by taking ownership of
`value`
