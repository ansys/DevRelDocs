$ErrorActionPreference = "Stop"

# Load input
$json = Get-Content "escaped_underscores.json" -Raw | ConvertFrom-Json
$base = "C:\GitHub\ansys\DevRelDocs\2026R1\zemax"

$operations = foreach ($item in $json) {
    $path = Join-Path $base ($item.filePath -replace '/', '\')
    $lines = Get-Content -Path $path -TotalCount 5
    $old = $lines -join "`n"
    $new = (($lines[0] -replace '\\_', '_'), $lines[1..4] | Where-Object { $_ -ne $null }) -join "`n"
    
    [PSCustomObject]@{
        filePath = $path
        oldString = $old
        newString = $new
    }
}

$operations | ConvertTo-Json -Depth 3 | Set-Content "replacement_operations.json" -Encoding UTF8
"Done: $($operations.Count) operations"
