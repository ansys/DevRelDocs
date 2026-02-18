# <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply"></a> Class HelloReply

Namespace: [Ansys.Api.ThermalDesktop.V0.ThermalDesktop](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.md)  
Assembly: OpenTD.dll  

The response message containing the greetings

```csharp
public sealed class HelloReply : IMessage<HelloReply>, IEquatable<HelloReply>, IDeepCloneable<HelloReply>, IBufferMessage, IMessage
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

#### Implements

IMessage<HelloReply\>, 
[IEquatable<HelloReply\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1), 
IDeepCloneable<HelloReply\>, 
IBufferMessage, 
IMessage

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply__ctor"></a> HelloReply\(\)

```csharp
public HelloReply()
```

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply__ctor_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply_"></a> HelloReply\(HelloReply\)

```csharp
public HelloReply(HelloReply other)
```

#### Parameters

`other` [HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

## Fields

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply_MessageFieldNumber"></a> MessageFieldNumber

Field number for the "message" field.

```csharp
public const int MessageFieldNumber = 1
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply_Descriptor"></a> Descriptor

```csharp
public static MessageDescriptor Descriptor { get; }
```

#### Property Value

 MessageDescriptor

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply_Message"></a> Message

```csharp
public string Message { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply_Parser"></a> Parser

```csharp
public static MessageParser<HelloReply> Parser { get; }
```

#### Property Value

 MessageParser<[HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)\>

## Methods

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply_CalculateSize"></a> CalculateSize\(\)

Calculates the size of this message in Protocol Buffer wire format, in bytes.

```csharp
public int CalculateSize()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of bytes required to write this message
            to a coded output stream.

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply_Clone"></a> Clone\(\)

Creates a deep clone of this object.

```csharp
public HelloReply Clone()
```

#### Returns

 [HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

A deep clone of this object.

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply_Equals_System_Object_"></a> Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object other)
```

#### Parameters

`other` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the specified object  is equal to the current object; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply_Equals_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply_"></a> Equals\(HelloReply\)

Indicates whether the current object is equal to another object of the same type.

```csharp
public bool Equals(HelloReply other)
```

#### Parameters

`other` [HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

An object to compare with this object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply_GetHashCode"></a> GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply_MergeFrom_Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply_"></a> MergeFrom\(HelloReply\)

Merges the given message into this one.

```csharp
public void MergeFrom(HelloReply other)
```

#### Parameters

`other` [HelloReply](Ansys.Api.ThermalDesktop.V0.ThermalDesktop.HelloReply.md)

#### Remarks

See the user guide for precise merge semantics.

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply_MergeFrom_Google_Protobuf_CodedInputStream_"></a> MergeFrom\(CodedInputStream\)

Merges the data from the specified coded input stream with the current message.

```csharp
public void MergeFrom(CodedInputStream input)
```

#### Parameters

`input` CodedInputStream

#### Remarks

See the user guide for precise merge semantics.

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

### <a id="Ansys_Api_ThermalDesktop_V0_ThermalDesktop_HelloReply_WriteTo_Google_Protobuf_CodedOutputStream_"></a> WriteTo\(CodedOutputStream\)

Writes the data to the given coded output stream.

```csharp
public void WriteTo(CodedOutputStream output)
```

#### Parameters

`output` CodedOutputStream

Coded output stream to write the data to. Must not be null.

