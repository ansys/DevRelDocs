
# Appendix D: Using OpenTD Interactively with the C# Interactive Compiler

Normally C\# is compiled before running, but you can open an interactive C\# Read-eval-print loop (REPL) in Visual Studio using the following command: View->Other Windows->C\# Interactive

Once open, you can use it to interactively execute C\# code, including OpenTD. For example:

```csharp
> \#r "OpenTD" // loads the dll as a reference
> using OpenTD;
> var td = new ThermalDesktop();
> td.Connect();
> var n = td.CreateNode(new Point3d(1, 1, 3));
> td.ZoomExtents();
> n.Comment = "Hello World!";
> n.Update();
> var nTest = td.GetNodes().First();
> Console.WriteLine(nTest);
RcNode.MAIN.1::236 "Hello World!"
> td.Quit();
```
