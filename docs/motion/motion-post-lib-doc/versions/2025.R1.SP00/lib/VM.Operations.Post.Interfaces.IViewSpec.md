#  Interface IViewSpec

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a specification for a view in a 3D space, providing properties to control the camera's position, target, and orientation.

```csharp
public interface IViewSpec
```

## Properties

### <a id="VM_Operations_Post_Interfaces_IViewSpec_Eye"></a> Eye

Gets or sets the position of the camera in a 3D space.

```csharp
Vector Eye { get; set; }
```

#### Property Value

 Vector

#### Examples

The following example demonstrates how to use the <code>Eye</code> property:
<pre><code class="lang-csharp">viewSpec = ViewSpec();
viewSpec.Eye = Vector(10, 20, 30);</code></pre>

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IViewSpec.Eye" data-throw-if-not-resolved="false"></xref> property allows you to get or set the position of the camera in a 3D space.
This property is essential for controlling the viewpoint from which the 3D scene is rendered.

### <a id="VM_Operations_Post_Interfaces_IViewSpec_Target"></a> Target

Gets or sets the position of the target that the camera is looking at.

```csharp
Vector Target { get; set; }
```

#### Property Value

 Vector

#### Examples

The following example demonstrates how to use the <code>Target</code> property:
<pre><code class="lang-csharp">viewSpec = ViewSpec();
viewSpec.Target = new Vector(5, 10, 15);</code></pre>

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IViewSpec.Target" data-throw-if-not-resolved="false"></xref> property allows you to get or set the position of the target that the camera is focused on in a 3D space.
This property is essential for defining the direction the camera is pointed towards.

### <a id="VM_Operations_Post_Interfaces_IViewSpec_UpVector"></a> UpVector

Gets or sets the up direction vector of the camera in a 3D space.

```csharp
Vector UpVector { get; set; }
```

#### Property Value

 Vector

#### Examples

The following example demonstrates how to use the <code>UpVector</code> property:
<pre><code class="lang-csharp">viewSpec = ViewSpec();
viewSpec.UpVector = Vector(1, 0, 0);</code></pre>

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IViewSpec.UpVector" data-throw-if-not-resolved="false"></xref> property allows you to get or set the up direction vector of the camera in a 3D space.
This vector determines whether the camera's direction is standard (upright) or inverted.

