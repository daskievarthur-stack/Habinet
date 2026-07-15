# ==========================================
# Habinet Project Snapshot
# ==========================================

$output = "snapshot.md"

"# Habinet Snapshot" | Out-File $output -Encoding utf8
"" | Out-File $output -Append -Encoding utf8
("Generated: {0}" -f (Get-Date)) | Out-File $output -Append -Encoding utf8
"" | Out-File $output -Append -Encoding utf8

"## Node" | Out-File $output -Append -Encoding utf8
node -v | Out-File $output -Append -Encoding utf8
"" | Out-File $output -Append -Encoding utf8

"## pnpm" | Out-File $output -Append -Encoding utf8
corepack pnpm -v | Out-File $output -Append -Encoding utf8
"" | Out-File $output -Append -Encoding utf8

"## Git Status" | Out-File $output -Append -Encoding utf8
git status | Out-File $output -Append -Encoding utf8
"" | Out-File $output -Append -Encoding utf8

"## Project Structure" | Out-File $output -Append -Encoding utf8
cmd /c "tree /F /A | findstr /V node_modules" | Out-File $output -Append -Encoding utf8

Write-Host ""
Write-Host "Snapshot created:" -ForegroundColor Green
Write-Host $output