# TOC Merge Script - Quick Guide

## Purpose

This script merges the generated `api-toc.yml` (API reference documentation) into the main `toc.yml` file under a "Reference" section.

## Usage

### Option 1: Run as part of the complete workflow

```powershell
.\run-all.ps1 -MergeToMainToc
```

This will:
1. Generate `unified-index.md`
2. Convert to `api-toc.yml`
3. Merge into main `toc.yml`

### Option 2: Run merge script standalone

```powershell
.\merge-toc.ps1
```

This runs the merge operation only (assumes `api-toc.yml` already exists).

### Option 3: Custom paths

```powershell
.\merge-toc.ps1 -ApiTocPath "path\to\api-toc.yml" -MainTocPath "path\to\toc.yml"
```

## What It Does

1. **Creates a backup** - Automatically backs up your main `toc.yml` with a timestamp
2. **Checks for existing Reference section** - Warns if one already exists and asks permission to replace
3. **Adjusts indentation** - Properly indents all API TOC content to fit under `Reference > items:`
4. **Merges content** - Adds the Reference section at the end of the main TOC
5. **Validates** - Reports statistics on sections added

## Output Format

The script creates a structure like this in your main `toc.yml`:

```yaml
- name: Introduction
  href: index.md
  
- name: Getting started
  href: getting-started/getting_started.md
  items:
  - name: Installation
    href: getting-started/installation.md
  # ... other items

- name: User guide
  items:
  - name: Customized standalone activity
    href: getting-started/customized_activity.md
  # ... other items

- name: Reference
  items:
  - name: Namespaces
    items:
    - name: autonomy
      href: reference/namespaceautonomy.md
    - name: cli
      href: reference/namespacecli.md
    # ... all other namespaces
  - name: Classes
    items:
    - name: simulation_framework::autonomy::AutonomySimInstanceCreator
      href: reference/classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator.md
    # ... all other classes
  - name: Structures
    items:
    # ... all structures
  - name: Files
    items:
    # ... all files
  - name: Directories
    items:
    # ... all directories
  - name: Global Definitions
    items:
    # ... all global definitions
```

## Safety Features

- **Automatic backup** - Creates timestamped backup before any changes
- **Confirmation prompt** - Asks before replacing existing Reference section
- **Validation** - Checks that input files exist before proceeding
- **Error handling** - Reports clear error messages if something goes wrong

## Backup Files

Backups are saved as: `toc_backup_YYYYMMDD_HHMMSS.yml`

Example: `toc_backup_20260128_143052.yml`

## Troubleshooting

### "A 'Reference' section already exists"

This means your main `toc.yml` already has a Reference section. Options:
- Type `y` to replace it with the new content
- Type `n` to cancel and manually review

### "File not found" errors

Check that:
- You're running from the correct directory
- `api-toc.yml` has been generated
- Main `toc.yml` path is correct

### Indentation issues

The script automatically handles indentation. If you see issues:
- Check that the source `api-toc.yml` has proper 2-space indentation
- Re-run `.\convert-to-toc.ps1` to regenerate with correct formatting

## Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `ApiTocPath` | `./api-toc.yml` | Path to the API TOC file to merge |
| `MainTocPath` | `../../../markdown/toc.yml` | Path to the main TOC file |
| `BackupPath` | Auto-generated | Custom backup file path (optional) |

## Example Workflow

Complete workflow from Doxygen conversion to merged TOC:

```powershell
# 1. Navigate to reference folder
cd "C:\...\documentation\doxygen\reference"

# 2. Run complete workflow with merge
.\run-all.ps1 -MergeToMainToc

# Done! Your main toc.yml now includes the API reference
```

## Files Modified

- **Main TOC** - `markdown/toc.yml` - Updated with Reference section
- **Backup** - `markdown/toc_backup_*.yml` - Timestamped backup of original

## Files Used (Not Modified)

- **API TOC** - `documentation/doxygen/reference/api-toc.yml` - Source content
- **Unified Index** - `documentation/doxygen/reference/unified-index.md` - Referenced in TOC

## Reverting Changes

To revert to the previous version:

```powershell
# Find the backup file
cd "C:\...\markdown"
dir toc_backup_*.yml

# Copy the backup back
Copy-Item toc_backup_YYYYMMDD_HHMMSS.yml toc.yml -Force
```

---

**Last Updated:** 2026-01-28  
**Version:** 1.0
