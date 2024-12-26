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
      const res = await fetch(`/api/content?locale=${locale}`);
      const data = await res.json();
      setContent(data);
    };

    fetchTranslations();
  }, [searchParams]);

  if (!content) {
    return (
      <div className={styles.banner}>
        <h1 className={styles.skeleton}>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles.banner}>
      <h1>{content['banner.welcome']}</h1>
    </div>
  );
}
