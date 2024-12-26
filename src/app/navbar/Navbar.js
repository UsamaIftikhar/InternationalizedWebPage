'use client'; // Declares this component as a client-side component in Next.js

import { useRouter } from 'next/navigation'; // Import the useRouter hook to handle navigation
import styles from './Navbar.module.css'; // Import CSS module for scoped styles

export default function Navbar() {
  const router = useRouter(); // Initialize the Next.js router for client-side navigation

  /**
   * Updates the locale by modifying the query parameter in the URL.
   * This triggers a page re-render to reflect the new language.
   *
   * @param {string} locale - The language code (e.g., 'en' for English, 'fr' for French).
   */
  const changeLocale = (locale) => {
    // Navigate to the current page with the updated locale in the query string
    router.push(`/?locale=${locale}`);
  };

  return (
    <nav className={styles.navbar}>
      {/* Button to switch the language to English */}
      <button className={styles.navbarButton} onClick={() => changeLocale('en')}>
        English
      </button>

      {/* Button to switch the language to French */}
      <button className={styles.navbarButton} onClick={() => changeLocale('fr')}>
        Français
      </button>
    </nav>
  );
}
