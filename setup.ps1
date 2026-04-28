# 3iQ Skills Hub - Setup Script (Windows PowerShell)
# Creates symlinks from this repo into your OpenCode skills directory.
# NOTE: Run as Administrator, or enable Developer Mode for symlink support.

$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# Determine skills target directory
if ($env:APPDATA) {
    $SkillsDir = Join-Path $env:APPDATA "opencode\skills"
} else {
    $SkillsDir = Join-Path $HOME ".config\opencode\skills"
}

Write-Host "3iQ Skills Hub - Setup" -ForegroundColor Cyan
Write-Host "======================"
Write-Host "Repo:       $ScriptDir"
Write-Host "Skills dir: $SkillsDir"
Write-Host ""

if (-not (Test-Path $SkillsDir)) {
    New-Item -ItemType Directory -Path $SkillsDir -Force | Out-Null
}

function Install-SkillsFrom {
    param(
        [string]$SourceDir,
        [string]$Label
    )

    if (-not (Test-Path $SourceDir)) {
        Write-Host "  Skipping $Label (directory not found)" -ForegroundColor Yellow
        return
    }

    $skills = Get-ChildItem -Path $SourceDir -Directory
    foreach ($skill in $skills) {
        $target = Join-Path $SkillsDir $skill.Name

        if (Test-Path $target) {
            $item = Get-Item $target -Force
            if ($item.Attributes -band [System.IO.FileAttributes]::ReparsePoint) {
                $existing = $item.Target
                if ($existing -eq $skill.FullName) {
                    Write-Host "  OK     $($skill.Name) (already linked)" -ForegroundColor Green
                    continue
                } else {
                    Write-Host "  UPDATE $($skill.Name) (repointing symlink)" -ForegroundColor Yellow
                    Remove-Item $target -Force
                }
            } else {
                Write-Host "  SKIP   $($skill.Name) (non-symlink directory exists)" -ForegroundColor Red
                continue
            }
        }

        try {
            New-Item -ItemType SymbolicLink -Path $target -Target $skill.FullName -Force | Out-Null
            Write-Host "  LINK   $($skill.Name) -> $($skill.FullName)" -ForegroundColor Green
        } catch {
            Write-Host "  ERROR  $($skill.Name) - symlink failed. Run as Admin or enable Developer Mode." -ForegroundColor Red
        }
    }
}

Write-Host "Installing Anthropic skills..."
Install-SkillsFrom -SourceDir (Join-Path $ScriptDir "anthropic") -Label "anthropic"

Write-Host ""
Write-Host "Installing 3iQ skills..."
Install-SkillsFrom -SourceDir (Join-Path $ScriptDir "3iq") -Label "3iq"

Write-Host ""
$count = (Get-ChildItem -Path $SkillsDir -Directory).Count
Write-Host "Done! $count skills installed." -ForegroundColor Cyan
Write-Host "Restart OpenCode to pick up any new skills."
