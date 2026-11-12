# Enum FFTWindowType
<div align="right"><a href="/lib/VM.Models.Post.FFTWindowType.md" download="VM.Models.Post.FFTWindowType.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_Post_FFTWindowType"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Specifies the window function used for a Fast Fourier Transform.

```csharp
public enum FFTWindowType
```

## Fields

`Bartlett = 2` 

Uses a Bartlett window.



`BlackMan = 6` 

Uses a Blackman window.



`Hamming = 4` 

Uses a Hamming window.



`Hanning = 3` 

Uses a Hann window.



`None = 7` 

Does not apply a window function.



`Rectangular = 0` 

Uses a rectangular window.



`Triangular = 1` 

Uses a triangular window.



`Welch = 5` 

Uses a Welch window.
