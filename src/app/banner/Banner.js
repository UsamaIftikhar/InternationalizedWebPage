'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './Banner.module.css';

export default function Banner() {
  const [content, setContent] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const locale = searchParams.get('locale') || 'en';

    const fetchTranslations = async () => {
      try {
        const res = await fetch(`/api/content?locale=${locale}`);
        if (!res.ok) throw new Error('Failed to fetch translations');
        const data = await res.json();
        setContent(data);
      } catch (error) {
        console.error('Error fetching translations:', error);
      }
    };

    fetchTranslations();
  }, [searchParams]);

  if (!content) {
    return <div className={styles.banner}>Loading translations...</div>;
  }

  return (
    <div className={styles.banner}>
      <h1>{content['banner.welcome']}</h1>
    </div>
  );
}
