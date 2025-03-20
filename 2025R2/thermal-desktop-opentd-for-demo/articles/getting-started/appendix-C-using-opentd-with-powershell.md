# Appendix C: Using OpenTD with PowerShell

Windows PowerShell can be used to interact with OpenTD, which is useful since it is included with Windows, that is, you don't need to install Visual Studio, MATLAB, or anything extra to use OpenTD. And unlike Python or MATLAB, PowerShell was designed to support .NET objects, so its .NET syntax isn't too bad.

PowerShell is likely already installed on your Windows machine. If not, or you'd like help finding it, check out the official documentation:

[https://docs.microsoft.com/en-us/powershell/](https://docs.microsoft.com/en-us/powershell/)

Here’s a simple PowerShell script that loads OpenTD, creates a ThermalDesktop instance and opens it:

```powershell
Add-Type -Path "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\OpenTDv242\\v4.0_23.2.0.0__65e6d95ed5c2e178\\OpenTDv242.dll"
\$td = New-Object -TypeName 'OpenTDv232.ThermalDesktop'
\$td.Connect()
```
