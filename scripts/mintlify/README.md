# Mintlify tooling

## Generate navigation from `toc.yml`

Requires Python 3 and PyYAML:

```bash
pip install pyyaml
python scripts/mintlify/toc_to_docs_json.py \
  docs/dpf/dpf-framework/versions/2027.R1.SP01 \
  --out navigation/dpf-framework-2027-r1-sp01-groups.json
```

Output is referenced from `navigation/main.json` via Mintlify `$ref`.

## Preview locally

Use Node.js 22 LTS (Mintlify does not support Node 25+). Put Node 22 and global npm **before** Node 25 on `PATH`:

```powershell
$env:PATH = "C:\Users\mguyot\AppData\Local\Programs\Cursor\resources\app\resources\helpers;C:\Users\mguyot\AppData\Roaming\npm;$env:PATH"
cd C:\Work\GitHub\Mintlify\DevRelDocs
mint dev
```

### `ENOENT: required-server-files.json`

The Mintlify preview app lives under `%USERPROFILE%\.mintlify\mint\`. If that install is missing or incomplete, `mint dev` fails. Fix:

```powershell
# 1. Remove broken cache
Remove-Item -Recurse -Force "$env:USERPROFILE\.mintlify","$env:USERPROFILE\.mintlify-last" -ErrorAction SilentlyContinue

# 2. Reinstall preview client (replace VERSION with https://releases.mintlify.com/mint-version.txt)
$version = (Invoke-WebRequest -Uri "https://releases.mintlify.com/mint-version.txt" -UseBasicParsing).Content.Trim()
$dest = "$env:USERPROFILE\.mintlify"
$tar = "$dest\mint.tar.gz"
New-Item -ItemType Directory -Path $dest -Force | Out-Null
Invoke-WebRequest -Uri "https://releases.mintlify.com/mint-$version.tar.gz" -OutFile $tar -UseBasicParsing
tar -xzf $tar -C $dest
Remove-Item $tar
Set-Content "$dest\mint\mint-version.txt" $version -NoNewline

# 3. Run dev again (Node 22 on PATH)
mint dev
```

Or force a download via the CLI:

```powershell
mint dev --client-version 0.0.2972
```

`mint update` also requires `npm` on your PATH (install [Node.js 22 LTS](https://nodejs.org) and ensure `npm` is available).

## Node alternative

```bash
cd scripts/mintlify
npm install
npm run toc-to-nav -- ../../docs/dpf/dpf-framework/versions/2027.R1.SP01 \
  --out ../../navigation/dpf-framework-2027-r1-sp01-groups.json
```
