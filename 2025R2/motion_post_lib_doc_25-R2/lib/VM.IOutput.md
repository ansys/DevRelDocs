# Interface IOutput

Namespace: [VM](VM.md)  
Assembly: VM.dll  

Provides the ability to output a specified message.

```python
public interface IOutput
```

## Methods

### Clear\(\)

Cleat output messages.

```python
void Clear()
```

### Write\(string, string\)

Output a specified message.

```python
void Write(string category, string message)
```

#### Parameters

`category` [string](https://learn.microsoft.com/dotnet/api/system.string)

The category of the message.

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message to output.


