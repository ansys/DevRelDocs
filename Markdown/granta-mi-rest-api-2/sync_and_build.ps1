# Pre-build script: Synchronize code snippets before building documentation
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Code Snippet Synchronization" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Synchronize code snippets
Write-Host "Synchronizing code snippets from source files..." -ForegroundColor Yellow
python sync_code_snippets.py

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ Code synchronization failed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Code synchronization completed successfully!" -ForegroundColor Green
Write-Host ""

# Optionally build documentation (uncomment if you want to build automatically)
# Write-Host "Building documentation..." -ForegroundColor Yellow
# docfx build
# 
# if ($LASTEXITCODE -ne 0) {
#     Write-Host ""
#     Write-Host "❌ Documentation build failed!" -ForegroundColor Red
#     exit 1
# }
# 
# Write-Host ""
# Write-Host "✅ Documentation build completed successfully!" -ForegroundColor Green
