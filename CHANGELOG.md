# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-06

### Added
- ✅ Real-time score tracking with automatic rotation
- ✅ Best of 5 match system (always 4 sets minimum, 5th set at 2-2)
- ✅ Service fault tracking with three types: net, out, foot fault
- ✅ Per-player service fault statistics
- ✅ Timeout tracking (max 2 per set)
- ✅ Substitution system with full NeVoBo validation (max 6 per set)
- ✅ Libero system with automatic substitutions
- ✅ 5-1 play system with setter penetration visualization
- ✅ Heatmap analysis for scoring patterns
- ✅ Point type tracking (Ace, Sideout, Block, Attack, Error)
- ✅ Score history with point types per rally
- ✅ Performance metrics (Win %, Sideout %, Attack %, Service %)
- ✅ Save/load matches to localStorage
- ✅ Review mode for analyzing saved matches
- ✅ Heatmap overlay for comparing sets
- ✅ Fully responsive design for mobile/tablet/desktop
- ✅ Touch support with resizable sidebars
- ✅ Mobile-optimized layout (10% sidebar, 90% field)
- ✅ VCV branding with customizable watermarks

### Features
- 📱 **Mobile First**: Optimized for Android/iOS with touch gestures
- 🎯 **Real-time**: Instant feedback and updates
- 📊 **Analytics**: Comprehensive statistics and visualizations
- 💾 **Persistent**: Auto-save to localStorage
- ⚡ **Fast**: No backend required, works offline
- 🎨 **Customizable**: Resizable sidebars, multiple view modes

### NeVoBo Compliance
- ✅ Maximum 6 substitutions per set
- ✅ Back-substitution only with same partner
- ✅ Libero cannot serve (position 1 blocked)
- ✅ Libero substitutions don't count towards limit
- ✅ Maximum 2 timeouts per set
- ✅ Correct set scoring (25 points with 2-point margin)
- ✅ 5th set scoring (15 points with 2-point margin)

### Known Issues
- Statistics per set not fully implemented (only current/overall)
- Heatmap overlay may occasionally render outside field boundaries on very small screens

### Technical
- React 18.2.0
- Tailwind CSS 3.3.0
- Lucide React 0.263.1
- No external API dependencies
- LocalStorage for data persistence

---

## Future Releases

### [1.1.0] - Planned
- [ ] Statistics per set breakdown
- [ ] PDF export functionality
- [ ] Enhanced player statistics
- [ ] Coach notes feature

### [1.2.0] - Planned
- [ ] Cloud storage integration (Firebase/Supabase)
- [ ] Multi-team support
- [ ] Opponent scouting mode
- [ ] Video annotation integration

### [2.0.0] - Vision
- [ ] Real-time collaboration
- [ ] Mobile native apps (iOS/Android)
- [ ] Advanced AI analytics
- [ ] Tournament management
