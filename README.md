# Haldane Edge State Simulator (HESS)

An interactive web-based simulator for exploring the Haldane model and its topological edge states. This educational tool demonstrates the physics of topological insulators through real-time parameter manipulation and energy band visualization.

## 🔬 Physics Background

The Haldane model is a fundamental example of a topological insulator, featuring:
- **Nearest-neighbor hopping** (t₁): Standard tight-binding parameter
- **Next-nearest-neighbor hopping** (t₂): Creates band gaps
- **Complex phase** (φ): Breaks time-reversal symmetry, enabling topological phases

## 🚀 Features

- **Interactive Parameter Controls**: Real-time sliders for t₁, t₂, and φ
- **Live Energy Band Visualization**: Dual-band energy spectrum plots
- **Responsive Design**: Works on desktop and mobile devices
- **Educational Interface**: Clean, intuitive UI for learning topological physics

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Recharts** for interactive data visualization
- **Custom CSS** for responsive styling

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/GodsIMiJ1/HESS.git
cd HESS

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎮 Usage

1. **Launch the Simulator**: Click "Launch Simulator" on the welcome screen
2. **Adjust Parameters**:
   - **t₁**: Controls nearest-neighbor hopping strength (0.1 - 2.0)
   - **t₂**: Controls next-nearest-neighbor hopping (0 - 1.0)
   - **φ**: Phase parameter affecting topology (0 - 2π)
3. **Observe**: Watch how energy bands evolve in real-time

## 🔬 Physics Exploration

### Topological Phase Transition
- Set φ = π/2 and gradually increase t₂ from 0 to observe band gap opening
- Compare with φ = 0 (trivial insulator phase)

### Edge States
- Look for flat bands at specific parameter values
- These represent topologically protected edge states

## 🏗️ Project Structure

```
src/
├── components/
│   └── HaldaneSimulator.tsx    # Main physics simulation component
├── App.tsx                     # Root application component
├── main.tsx                    # Application entry point
└── index.css                   # Styling
```

## 🚀 Building for Production

```bash
npm run build
npm run preview
```

## 🤝 Contributing

Contributions are welcome! Areas for enhancement:
- Full eigenvalue calculations using math.js
- 2D band structure visualization
- Chern number calculations
- Berry curvature plots
- Parameter preset saving/loading

## 📚 Educational Resources

- [Haldane Model Paper](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.61.2015)
- [Topological Insulators Review](https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.82.3045)

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

Built for educational purposes to help students and researchers understand topological physics through interactive visualization.
