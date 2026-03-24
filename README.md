# iBook-app

A modern Angular 21 application to manage your personal library. Browse, add, edit, delete, and mark your favorite books with a beautiful dark UI and interactive features.

## Features

- 📚 **Book List**: View all your books in a clean, card-based layout.
- ⭐ **Favourites**: Mark/unmark books as favourites and filter to see only your starred books.
- 📝 **CRUD**: Add, edit, and delete books easily.
- 🔍 **Expandable Details**: Click on a book to expand and see its details without leaving the list.
- 🌙 **Dark Mode**: Stylish, modern dark theme with Bootstrap integration.
- 🖼️ **Screenshots**:

<p align="center">
  <img src="src/screenshots/Screenshot%202026-03-23%20at%2010.08.57%20PM.png" width="350"/>
  <img src="src/screenshots/Screenshot%202026-03-23%20at%2010.09.07%20PM.png" width="350"/>
  <img src="src/screenshots/Screenshot%202026-03-23%20at%2010.09.18%20PM.png" width="350"/>
  <img src="src/screenshots/Screenshot%202026-03-23%20at%2010.09.31%20PM.png" width="350"/>
</p>

## Tech Stack
- Angular 21 (standalone components, signals)
- Bootstrap 5
- In-memory-web-api (simulated backend)

## Getting Started

1. **Install dependencies:**
	```bash
	npm install
	```
2. **Run the app:**
	```bash
	npm start
	```
3. **Open in your browser:**
	Visit [http://localhost:4200](http://localhost:4200) (or the port shown in your terminal).

## Project Structure
- `src/app/` — Main Angular app code
- `src/screenshots/` — App screenshots for documentation

## Author
Made with ❤️ by [jeanvq](https://github.com/jeanvq)

---

> This project is a showcase of modern Angular best practices, UI/UX, and code organization. Enjoy your digital library!

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
