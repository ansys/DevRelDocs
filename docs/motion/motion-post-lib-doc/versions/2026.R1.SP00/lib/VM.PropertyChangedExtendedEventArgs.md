# Class PropertyChangedExtendedEventArgs
<a id="VM_PropertyChangedExtendedEventArgs"></a>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public class PropertyChangedExtendedEventArgs : PropertyChangedEventArgs
```

#### Inheritance

object ← 
EventArgs ← 
PropertyChangedEventArgs ← 
[PropertyChangedExtendedEventArgs](VM.PropertyChangedExtendedEventArgs.md)

## Constructors

### <a id="VM_PropertyChangedExtendedEventArgs__ctor_System_String_System_Object_System_Object_"></a> PropertyChangedExtendedEventArgs\(string, object, object\)

```csharp
public PropertyChangedExtendedEventArgs(string propertyName, object oldValue, object newValue)
```

#### Parameters

`propertyName` string

`oldValue` object

`newValue` object

## Properties

### <a id="VM_PropertyChangedExtendedEventArgs_NewValue"></a> NewValue

```csharp
public virtual object NewValue { get; }
```

#### Property Value

 object

### <a id="VM_PropertyChangedExtendedEventArgs_OldValue"></a> OldValue

```csharp
public virtual object OldValue { get; }
```

#### Property Value

 object

