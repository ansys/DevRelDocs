# Class VariableEditorModel.SyntaxError

Namespace: [Phoenix.ComponentPlugInSDK.Models](Phoenix.ComponentPlugInSDK.Models.md)  
Assembly: Phoenix.ComponentPlugInSDK.dll

Exception type to throw when there is a syntax error while parsing a variable text string.

```csharp
public class VariableEditorModel.SyntaxError : FormatException, ISerializable, _Exception

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[Exception](https://learn.microsoft.com/dotnet/api/system.exception) ←
[SystemException](https://learn.microsoft.com/dotnet/api/system.systemexception) ←
[FormatException](https://learn.microsoft.com/dotnet/api/system.formatexception) ←
[VariableEditorModel.SyntaxError](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.SyntaxError.md)

#### Implements

[ISerializable](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable),
[_Exception](https://learn.microsoft.com/dotnet/api/system.runtime.interopservices._exception)

#### Inherited Members

[Exception.GetBaseException()](https://learn.microsoft.com/dotnet/api/system.exception.getbaseexception),
[Exception.ToString()](https://learn.microsoft.com/dotnet/api/system.exception.tostring),
[Exception.GetObjectData(SerializationInfo, StreamingContext)](https://learn.microsoft.com/dotnet/api/system.exception.getobjectdata),
[Exception.GetType()](https://learn.microsoft.com/dotnet/api/system.exception.gettype),
[Exception.Message](https://learn.microsoft.com/dotnet/api/system.exception.message),
[Exception.Data](https://learn.microsoft.com/dotnet/api/system.exception.data),
[Exception.InnerException](https://learn.microsoft.com/dotnet/api/system.exception.innerexception),
[Exception.TargetSite](https://learn.microsoft.com/dotnet/api/system.exception.targetsite),
[Exception.StackTrace](https://learn.microsoft.com/dotnet/api/system.exception.stacktrace),
[Exception.HelpLink](https://learn.microsoft.com/dotnet/api/system.exception.helplink),
[Exception.Source](https://learn.microsoft.com/dotnet/api/system.exception.source),
[Exception.HResult](https://learn.microsoft.com/dotnet/api/system.exception.hresult),
[Exception.SerializeObjectState](https://learn.microsoft.com/dotnet/api/system.exception.serializeobjectstate),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

[SyntaxError(int, string)](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.SyntaxError.-ctor.md#Phoenix_ComponentPlugInSDK_Models_VariableEditorModel_SyntaxError__ctor_System_Int32_System_String_)

Constructor from line index where error was detected and descriptive reason.

[SyntaxError(int, Exception)](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.SyntaxError.-ctor.md#Phoenix_ComponentPlugInSDK_Models_VariableEditorModel_SyntaxError__ctor_System_Int32_System_Exception_)

Constructor from line index where error was detected and inner exception which gives reason.

[SyntaxError(int, string)](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.SyntaxError.-ctor.md#Phoenix_ComponentPlugInSDK_Models_VariableEditorModel_SyntaxError__ctor_System_Int32_System_String_)

Constructor from line index where error was detected and descriptive reason.

[SyntaxError(int, Exception)](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.SyntaxError.-ctor.md#Phoenix_ComponentPlugInSDK_Models_VariableEditorModel_SyntaxError__ctor_System_Int32_System_Exception_)

Constructor from line index where error was detected and inner exception which gives reason.

## See Also

[VariableEditorModel](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.md).[FromString](Phoenix.ComponentPlugInSDK.Models.VariableEditorModel.FromString.md#Phoenix_ComponentPlugInSDK_Models_VariableEditorModel_FromString_System_String_)([string](https://learn.microsoft.com/dotnet/api/system.string))
