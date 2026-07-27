#!/usr/bin/env bash

################################################################################
# Validates a sandbox PR labeled ready-for-prod and posts feedback on the PR.
################################################################################

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=/dev/null
source "${SCRIPT_DIR}/_promotion_lib.sh"

main() {
  local _pr_number="$1"
  local _merge_commit _product_dir

  validate_dependencies
  git fetch origin main sandbox --prune

  if [[ "$(gh pr view "${_pr_number}" --json baseRefName --jq '.baseRefName')" != "sandbox" ]]; then
    gh pr comment "${_pr_number}" --body "The \`${READY_LABEL}\` label can only be used on pull requests targeting \`sandbox\`."
    exit 1
  fi

  if [[ "$(gh pr view "${_pr_number}" --json state --jq '.state')" != "MERGED" ]]; then
    gh pr comment "${_pr_number}" --body "Add the \`${READY_LABEL}\` label after your pull request has been merged to \`sandbox\` and you have verified the documentation on the sandbox site."
    exit 0
  fi

  _merge_commit=$(gh pr view "${_pr_number}" --json mergeCommit --jq '.mergeCommit.oid')

  if commit_on_branch "${_merge_commit}" "main"; then
    gh pr edit "${_pr_number}" --remove-label "${READY_LABEL}" >/dev/null || true
    gh pr edit "${_pr_number}" --add-label "${DONE_LABEL}" >/dev/null
    gh pr comment "${_pr_number}" --body "This change is already on \`main\`. The pull request has been marked as \`${DONE_LABEL}\`."
    exit 0
  fi

  if ! _product_dir=$(get_product_version_dir "${_merge_commit}"); then
    gh pr edit "${_pr_number}" --add-label "${FAILED_LABEL}" >/dev/null || true
    gh pr comment "${_pr_number}" --body "Promotion validation failed. This pull request must only change files under a single \`docs/<product>/.../versions/YYYY.RX.SPXX\` directory."
    exit 1
  fi

  gh pr comment "${_pr_number}" --body "$(cat <<EOF
Production promotion request received.

- Product path: \`${_product_dir}\`
- Sandbox merge commit: \`${_merge_commit}\`

This pull request is queued for promotion to \`main\` during the next FCA promotion run.
EOF
)"
}

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  if [[ $# -ne 1 ]]; then
    echo "Usage: $0 <pr-number>" >&2
    exit 1
  fi
  main "$1"
fi
