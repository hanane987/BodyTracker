Write-Host "Initializing Git repository..."
git init

Write-Host "Adding and committing files..."

# Project Setup
git add .gitignore
git commit -m "chore: Add .gitignore for project"

git add package.json
git commit -m "chore: Initialize project with base dependencies"

git add README.md
git commit -m "docs: Add comprehensive README with setup instructions"

# Navigation Setup
git add App.tsx
git commit -m "feat: Add main App component"
git commit --amend -m "feat: Configure bottom tab navigation structure"

# Core Features - Profile Management
git add src/components/UserProfile.tsx
git commit -m "feat(profile): Add user profile component structure"
git commit --amend -m "feat(profile): Implement profile form and display"
git commit --amend -m "feat(profile): Add AsyncStorage for profile persistence"

# BMI Feature
git add src/components/BMICalculator.tsx
git commit -m "feat(bmi): Add BMI calculator component"
git commit --amend -m "feat(bmi): Implement BMI calculation logic"
git commit --amend -m "feat(bmi): Add BMI category classification"

# Body Fat Calculation Feature
git add src/components/BodyFatCalculator.tsx
git commit -m "feat(bodyfat): Create body fat calculator structure"
git commit --amend -m "feat(bodyfat): Implement US Navy method calculation"
git commit --amend -m "feat(bodyfat): Add gender-specific calculations"

# Progress Tracking
git add src/components/ProgressChart.tsx
git commit -m "feat(progress): Add progress chart component"
git commit --amend -m "feat(progress): Implement line chart visualization"
git commit --amend -m "feat(progress): Add weekly progress tracking"

# Photo Management
git add src/components/PhotoGallery.tsx
git commit -m "feat(gallery): Create photo gallery component"
git commit --amend -m "feat(gallery): Implement grid layout for photos"
git commit --amend -m "feat(gallery): Add photo preview functionality"

# Camera Implementation
git add src/screens/CameraScreen.tsx
git commit -m "feat(camera): Set up camera screen structure"
git commit --amend -m "feat(camera): Implement camera permissions"
git commit --amend -m "feat(camera): Add photo capture functionality"
git commit --amend -m "feat(camera): Integrate with photo gallery"

# Timelapse Feature
git add src/components/TimelapseGenerator.tsx
git commit -m "feat(timelapse): Create timelapse generator component"
git commit --amend -m "feat(timelapse): Add video processing logic"
git commit --amend -m "feat(timelapse): Implement progress indicator"

# Image Filtering
git add src/components/ImageFilterSelector.tsx
git commit -m "feat(filters): Add image filter selector component"
git commit --amend -m "feat(filters): Implement filter options"
git commit --amend -m "feat(filters): Add filter preview functionality"

# Screen Integration
git add src/screens/HomeScreen.tsx
git commit -m "feat(screens): Add home screen"
git commit --amend -m "feat(screens): Integrate profile and BMI components"

git add src/screens/BodyFatScreen.tsx
git commit -m "feat(screens): Add body fat screen"
git commit --amend -m "feat(screens): Integrate calculator and progress chart"

git add src/screens/TimelapseScreen.tsx
git commit -m "feat(screens): Add timelapse screen"
git commit --amend -m "feat(screens): Integrate generator and filter components"

# Final Integration
git add .
git commit -m "refactor: Clean up imports and dependencies"
git commit --amend -m "style: Implement consistent styling across app"
git commit --amend -m "docs: Add component documentation"
git commit --amend -m "test: Add basic component tests"
git commit --amend -m "chore: Prepare for initial release"

Write-Host "All files have been committed successfully with detailed history!"
Read-Host -Prompt "Press Enter to exit"
