# Class PlugInIconAttribute

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

An attribute that defines an icon or bitmap file for the component. Usually the
path is relative to the manifest file.

```csharp
[AttributeUsage(AttributeTargets.Class)]
public class PlugInIconAttribute : Attribute

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[Attribute](https://learn.microsoft.com/dotnet/api/system.attribute) ←
[PlugInIconAttribute](Phoenix.PlugIns.PlugInIconAttribute.md)

#### Inherited Members

[Attribute.Equals(object)](https://learn.microsoft.com/dotnet/api/system.attribute.equals),
[Attribute.GetCustomAttribute(Assembly, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-assembly-system-type)),
[Attribute.GetCustomAttribute(Assembly, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-assembly-system-type-system-boolean)),
[Attribute.GetCustomAttribute(MemberInfo, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-memberinfo-system-type)),
[Attribute.GetCustomAttribute(MemberInfo, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-memberinfo-system-type-system-boolean)),
[Attribute.GetCustomAttribute(Module, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-module-system-type)),
[Attribute.GetCustomAttribute(Module, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-module-system-type-system-boolean)),
[Attribute.GetCustomAttribute(ParameterInfo, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-parameterinfo-system-type)),
[Attribute.GetCustomAttribute(ParameterInfo, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-parameterinfo-system-type-system-boolean)),
[Attribute.GetCustomAttributes(Assembly)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly)),
[Attribute.GetCustomAttributes(Assembly, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-boolean)),
[Attribute.GetCustomAttributes(Assembly, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-type)),
[Attribute.GetCustomAttributes(Assembly, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-type-system-boolean)),
[Attribute.GetCustomAttributes(MemberInfo)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo)),
[Attribute.GetCustomAttributes(MemberInfo, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-boolean)),
[Attribute.GetCustomAttributes(MemberInfo, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-type)),
[Attribute.GetCustomAttributes(MemberInfo, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-type-system-boolean)),
[Attribute.GetCustomAttributes(Module)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module)),
[Attribute.GetCustomAttributes(Module, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-boolean)),
[Attribute.GetCustomAttributes(Module, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-type)),
[Attribute.GetCustomAttributes(Module, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-type-system-boolean)),
[Attribute.GetCustomAttributes(ParameterInfo)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo)),
[Attribute.GetCustomAttributes(ParameterInfo, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-boolean)),
[Attribute.GetCustomAttributes(ParameterInfo, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-type)),
[Attribute.GetCustomAttributes(ParameterInfo, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-type-system-boolean)),
[Attribute.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.attribute.gethashcode),
[Attribute.IsDefaultAttribute()](https://learn.microsoft.com/dotnet/api/system.attribute.isdefaultattribute),
[Attribute.IsDefined(Assembly, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-assembly-system-type)),
[Attribute.IsDefined(Assembly, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-assembly-system-type-system-boolean)),
[Attribute.IsDefined(MemberInfo, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-memberinfo-system-type)),
[Attribute.IsDefined(MemberInfo, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-memberinfo-system-type-system-boolean)),
[Attribute.IsDefined(Module, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-module-system-type)),
[Attribute.IsDefined(Module, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-module-system-type-system-boolean)),
[Attribute.IsDefined(ParameterInfo, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-parameterinfo-system-type)),
[Attribute.IsDefined(ParameterInfo, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-parameterinfo-system-type-system-boolean)),
[Attribute.Match(object)](https://learn.microsoft.com/dotnet/api/system.attribute.match),
[Attribute.TypeId](https://learn.microsoft.com/dotnet/api/system.attribute.typeid),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

[PlugInIconAttribute(string)](Phoenix.PlugIns.PlugInIconAttribute.-ctor.md#Phoenix_PlugIns_PlugInIconAttribute__ctor_System_String_)

Constructor

## Properties

[IconPath](Phoenix.PlugIns.PlugInIconAttribute.IconPath.md#Phoenix_PlugIns_PlugInIconAttribute_IconPath)

The path to the icon or bitmap file
