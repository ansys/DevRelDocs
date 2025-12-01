# Enum LightInterpolationOptionType
<a id="VM_CAD_Kernel_Render_LightInterpolationOptionType"></a>

Namespace: [VM.CAD.Kernel.Render](VM.CAD.Kernel.Render.md)  
Assembly: VM.CAD.Kernel.dll  

Specifies type for a light interpolation option.

```csharp
public enum LightInterpolationOptionType
```

## Fields

`Gooch = 3` 

Gooch rendering is a non-photorealistic shading model.



`Gouraud = 1` 

The gouraud shading algorithm computes the light at each vertex.



`NoInterpolation = 0` 

flat.



`Phong = 2` 

The phong shading algorithm computes the light on a per-pixel basis.



