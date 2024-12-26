'use client';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation'; // Hook for accessing query parameters
import styles from './Banner.module.css';

function BannerContent() {
  // State to store the current localized content
  const [content, setContent] = useState({});

  // Hook to read query parameters
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get the 'locale' query parameter or default to 'en'
    const locale = searchParams.get('locale') || 'en';

    // Fetch translations dynamically based on the locale
    const fetchTranslations = async () => {
      const response = await fetch(`/api/content?locale=${locale}`);
      const data = await response.json();
      setContent(data); // Update the content state
    };

    fetchTranslations();
  }, [searchParams]); // Re-run effect whenever the query parameters change

  return (
    <div className={styles.banner}>
      {/* Render the localized welcome message */}
      <h1>{content['banner.welcome'] || 'Loading...'}</h1>
    </div>
  );
}

export default function Banner() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BannerContent />
    </Suspense>
  );
}
