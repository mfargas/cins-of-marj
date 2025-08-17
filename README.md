# Cins of Marj - Film & TV Analysis App

A Next.js web application showcasing a personal collection of impactful films and television shows, complete with detailed analysis and insights.

## 🎬 Features

- **Toggle between Films and TV Shows** - Easy switching between different media types
- **Genre-based Collections** - Organized by Comedy, Animation, Horror, SciFi, Drama, and more
- **Personal Analysis** - Deep insights into what makes each work special
- **Responsive Design** - Beautiful, modern UI that works on all devices
- **Interactive Cards** - Expandable content with personal notes and streaming information

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── collections/       # All collections page
│   ├── collection/[id]/   # Individual collection pages
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # Reusable React components
│   ├── CollectionCard.tsx # Collection display cards
│   ├── CollectionGrid.tsx # Grid layout for collections
│   ├── Header.tsx         # Navigation header
│   ├── MediaItemCard.tsx  # Individual media item cards
│   └── MediaToggle.tsx    # Films/TV Shows toggle
├── data/                  # Sample data and types
│   └── sampleData.ts      # Sample films and TV shows
└── types/                 # TypeScript type definitions
    └── index.ts           # Interface definitions
```

## 🎯 Key Components

### MediaToggle

Allows users to switch between viewing Films or TV Shows collections.

### CollectionGrid

Displays all collections for the selected media type in a responsive grid layout.

### CollectionCard

Individual cards showing collection information with preview of included items.

### MediaItemCard

Detailed cards for individual films/TV shows with expandable content including:

- Personal analysis
- Rating system (1-10 stars)
- Genre tags
- Streaming platform information
- Personal notes
- Watch dates

## 🎨 Design Features

- **Dark Theme** - Easy on the eyes with purple accents
- **Glassmorphism** - Modern backdrop blur effects
- **Smooth Animations** - Hover effects and transitions
- **Responsive Grid** - Adapts to different screen sizes
- **Custom Scrollbars** - Purple-themed scrollbar styling

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Tablet Support** - Responsive grid layouts
- **Desktop Experience** - Full-featured desktop interface
- **Touch Friendly** - Optimized for touch interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cins-of-marj
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📊 Sample Data

The app includes sample data for:

- **Films**: The Grand Budapest Hotel, Spirited Away, The Shining, Blade Runner
- **TV Shows**: Breaking Bad, The Office, Stranger Things

Each item includes:

- Title, year, director/creator
- Genre classification
- Personal rating (1-10)
- Detailed analysis
- Personal notes
- Streaming platform information
- Watch dates

## 🔧 Customization

### Adding New Media Items

1. Edit `src/data/sampleData.ts`
2. Add new items to the `sampleFilms` or `sampleTVShows` arrays
3. Collections are automatically generated based on genre tags

### Modifying Collections

Collections are dynamically generated based on the genre tags of media items. To add new genres:

1. Update the `Genre` type in `src/types/index.ts`
2. Add items with the new genre tags

### Styling

The app uses Tailwind CSS with custom utilities. Main styling is in:

- `src/app/globals.css` - Global styles and custom utilities
- Component-specific classes in each component file

## 🌟 Future Enhancements

- **Search Functionality** - Search across all collections
- **Filtering Options** - Filter by rating, year, director, etc.
- **User Reviews** - Community-driven ratings and reviews
- **Watchlist Feature** - Personal watchlist management
- **API Integration** - Connect to movie databases for additional metadata
- **Image Support** - Real movie/show poster images
- **Dark/Light Theme Toggle** - User preference settings

## 📝 Contributing

This is a personal project, but suggestions and feedback are welcome! Feel free to:

- Report bugs or issues
- Suggest new features
- Contribute to the design
- Add new media items to the sample data

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- All the filmmakers and creators whose work inspired this collection

---

Built with ❤️ by Marj
