# Code Snippet Synchronization

This directory contains a script to synchronize code snippets from Python source files into Markdown documentation.

## Overview

The `sync_code_snippets.py` script automatically:
- Scans Markdown files for DocFX `:::code` directives
- Extracts the specified code ranges from source files
- Replaces the directives with actual Markdown code blocks
- Preserves the original directives as HTML comments for future re-synchronization

## Usage

### Basic Usage

```powershell
# Synchronize all code snippets in the docs directory
python sync_code_snippets.py
```

### Preview Changes (Dry Run)

```powershell
# See what would be changed without modifying files
python sync_code_snippets.py --dry-run
```

### Specify Custom Docs Directory

```powershell
# Use a different documentation directory
python sync_code_snippets.py --docs-dir ./my-docs
```

## How It Works

### Before Synchronization

Your Markdown file contains DocFX directives:

```markdown
## Connect to the Service

:::code source="scripts/SampleHostApps/NoHost/SSEExample.py" language="python" range="8-34":::
```

### After Synchronization

The directive is preserved as a comment and followed by the actual code:

```markdown
## Connect to the Service

<!-- :::code source="scripts/SampleHostApps/NoHost/SSEExample.py" language="python" range="8-34"::: -->
```python
import requests
import json
import webbrowser
# ... actual code from lines 8-34 ...
```
```

### Re-synchronization

When you update the Python source file and run the script again, it will:
1. Detect the commented directive
2. Re-extract the code from the source file
3. Update the code block with the new content

## Integration with Build Process

### Manual Integration

Run the script before building your documentation:

```powershell
python sync_code_snippets.py
# Then run your DocFX build
docfx build
```

### Automated Integration

#### Option 1: PowerShell Pre-build Script

Create `build.ps1`:

```powershell
# Synchronize code snippets
Write-Host "Synchronizing code snippets..." -ForegroundColor Cyan
python sync_code_snippets.py

if ($LASTEXITCODE -ne 0) {
    Write-Host "Code synchronization failed!" -ForegroundColor Red
    exit 1
}

# Build documentation
Write-Host "Building documentation..." -ForegroundColor Cyan
docfx build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Documentation build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Build completed successfully!" -ForegroundColor Green
```

#### Option 2: Add to package.json

If you use npm for your build process:

```json
{
  "scripts": {
    "sync": "python sync_code_snippets.py",
    "build": "npm run sync && docfx build",
    "build:dry-run": "python sync_code_snippets.py --dry-run"
  }
}
```

#### Option 3: GitHub Actions

Add to your `.github/workflows/build.yml`:

```yaml
steps:
  - name: Synchronize code snippets
    run: python sync_code_snippets.py
    
  - name: Build documentation
    run: docfx build
```

## Benefits

1. **See Code in Markdown**: View actual code blocks in your Markdown files, not just directives
2. **Automatic Synchronization**: Run the script to update all code snippets when source files change
3. **Preserve Directives**: Original directives are kept as comments for easy re-synchronization
4. **Error Handling**: Script reports missing files or invalid ranges
5. **Dry Run Mode**: Preview changes before applying them

## Best Practices

1. **Run Before Commits**: Always synchronize before committing documentation changes
2. **Version Control**: Commit both the source files and synchronized Markdown files
3. **CI/CD Integration**: Add to your continuous integration pipeline
4. **Review Changes**: Use `--dry-run` to preview updates before applying them

## Troubleshooting

### Source File Not Found

```
Warning in sse-example.md: Source file not found: c:\path\to\source.py
```

**Solution**: Check that the `source=` path in your directive is correct relative to the Markdown file.

### Invalid Line Range

```
Error in sse-example.md: list index out of range
```

**Solution**: Verify that the line range in your directive exists in the source file.

## Example Output

```
Scanning 15 Markdown file(s)...

Updated: sse-example.md (3 snippet(s))
Updated: getting-started-example.md (2 snippet(s))

============================================================
✓ 2 file(s) modified
✓ 5 code snippet(s) synchronized
============================================================
```
