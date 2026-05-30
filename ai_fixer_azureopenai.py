import json
import os
from pathlib import Path
from openai import AzureOpenAI

DEPLOYMENT_NAME = "gpt-5"

AZURE_OPENAI_KEY = os.getenv("AZURE_OPENAI_KEY")
AZURE_OPENAI_ENDPOINT = os.getenv("AZURE_OPENAI_ENDPOINT")
OPENAI_API_VERSION = os.getenv("OPENAI_API_VERSION")

if not AZURE_OPENAI_KEY:
    raise RuntimeError("❌ Missing environment variable: AZURE_OPENAI_KEY")
if not AZURE_OPENAI_ENDPOINT:
    raise RuntimeError("❌ Missing environment variable: AZURE_OPENAI_ENDPOINT")
if not OPENAI_API_VERSION:
    raise RuntimeError("❌ Missing environment variable: OPENAI_API_VERSION")

# Initialize AzureOpenAI client
client = AzureOpenAI(
    api_key=AZURE_OPENAI_KEY,
    azure_endpoint=AZURE_OPENAI_ENDPOINT,
    api_version=OPENAI_API_VERSION,
)

def get_azure_openai_suggestion(message, context, file, line, match_text):
    """
    Requests a corrected version of the flagged text from Azure OpenAI.
    Returns only the corrected line with heading markers; no explanation.
    """
    user_prompt = f"""
Error: {message}
File: {file}, line {line}
Problematic text: "{match_text}"

Context:
---
{context}
---

Please return **only the corrected heading line**, including the correct Markdown heading marker (#, ##, ###).
Do not add any explanation, quotes, extra characters, or duplicate the content.
The output must be exactly what should appear in the Markdown file.
"""

    response = client.chat.completions.create(
        model=DEPLOYMENT_NAME,
        messages=[
            {"role": "system", "content": "You are a helpful writing assistant that improves documentation style."},
            {"role": "user", "content": user_prompt}
        ],
        max_completion_tokens=4096
    )

    suggestion = response.choices[0].message.content.strip()
    return suggestion.strip('"').strip("'").strip()

def main(report_file, docs_dir, dry_run=False):
    with open(report_file, "r", encoding="utf-8-sig") as f:
        report = json.load(f)

    for filepath, issues in report.items():
        path = Path(filepath)
        if not path.exists():
            path = Path(docs_dir) / filepath

        with open(path, "r", encoding="utf-8") as md:
            lines = md.readlines()

        modified = False

        for issue in issues:
            # Only fix headings
            if issue["Check"] != "Google.Headings":
                continue

            line_num = issue["Line"]
            message = issue["Message"]
            match_text = issue["Match"]

            context = "".join(lines[max(0, line_num-3): line_num+2])
            suggestion = get_azure_openai_suggestion(message, context, path, line_num, match_text)

            if dry_run:
                print("="*60)
                print(f"File: {path}, Line: {line_num}")
                print(f"Vale Message: {message}")
                print(f"Flagged Text: {match_text}")
                print(f"Context:\n{context.strip()}")
                print(f"💡 Suggestion: {suggestion}\n")
            else:
                # Replace the entire line to avoid duplicate heading markers
                lines[line_num-1] = suggestion + "\n"
                modified = True

        if modified and not dry_run:
            with open(path, "w", encoding="utf-8") as md:
                md.writelines(lines)
            print(f"✅ Updated {path}")

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 3:
        print("Usage: python ai_fixer_azureopenai.py <vale_report.json> <docs_dir> [--dry-run]")
        exit(1)

    dry_run = "--dry-run" in sys.argv
    main(sys.argv[1], sys.argv[2], dry_run)