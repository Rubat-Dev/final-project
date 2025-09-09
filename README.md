# 🎬 Movie Explorer

**Movie Explorer** is a modern movie discovery platform built with **React**, **Tailwind CSS**, and **Axios**. It leverages the **OMDb API** to allow users to explore trending movies, search for movies, browse by genre, and view detailed movie information including ratings, cast, plot, and more.

---

## 🌟 Features

- **Search Movies**: Find any movie by its title.
- **Trending Movies**: Explore the most popular movies.
- **Browse by Genre**: Categories like Action, Comedy, Horror, Sci-Fi, etc.
- **Movie Details Modal**: View detailed info about any movie in a modal popup.
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop.
- **Login/Signup Modal**: Simple authentication form UI (frontend only).
- **Pagination**: Navigate through search results easily.
- **Modern UI**: Clean and animated interface using Framer Motion and Tailwind CSS.

---

## 📦 Technologies Used

- **React** - Frontend library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Framer Motion** - Animations and modal transitions
- **Axios** - HTTP client for fetching data from OMDb API
- **OMDb API** - Free movie database API
- **React Router DOM** - Client-side routing

---

## 🛠 Installation

1. **Clone the repository**  

```bash
git clone https://github.com/yourusername/movie-explorer.git
cd movie-explorer


#  Install dependencies
npm install

# Set up environment variables
VITE_OMDB_API_KEY=your_api_key_here


#Start the development server
npm run dev


#  🖼 Project Structure

src/
├─ components/
│  ├─ AuthForm.jsx       # Login/Signup modal
│  ├─ Footer.jsx         # Footer component
│  ├─ MovieCard.jsx      # Movie card component
│  ├─ MovieModal.jsx     # Movie details modal
│  ├─ Navbar.jsx         # Navigation bar
│  └─ SearchBar.jsx      # Search input component
├─ context/
│  └─ MovieContext.jsx   # Global movie state and API calls
├─ pages/
│  ├─ About.jsx
│  ├─ Contact.jsx
│  ├─ Genres.jsx
│  ├─ Home.jsx
│  └─ Trending.jsx
├─ App.jsx
└─ main.jsx


📌 How It Works

Search Functionality: Users can type a movie name in the search bar and press Enter or click search. The app fetches data from the OMDb API.

Trending Section: Predefined trending movies are loaded on the homepage.

Genres: Users can browse movies by categories like Action, Comedy, etc.

Movie Modal: Clicking a movie card opens a modal with detailed information, poster, plot, cast, IMDb rating, and a link to IMDb.

Responsive Design: Mobile-friendly bottom sheet modal and adaptive layouts.


## 💻 Screenshots

**Home Page**  
![Home Page](screenshots/HomePage.png)

**Movie Modal**  
![Movie Modal](screenshots/MovieModal.png)

**Genres Page**  
![Genres Page](screenshots/GenresPage.png)

**Login/Signup Modal**  
![Login/Signup Modal](screenshots/LoginModal.png)
/MovieModal.png)


📞 Contact

For questions or contributions, reach out to Rubat Shaikh:

Email: rubatshaikh27@gmail.com

Phone: 03173893763

GitHub ----> https://github.com/Rubat-Dev

LinkedIn ----> 