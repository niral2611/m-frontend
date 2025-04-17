'use client';

import { CacheProvider } from '@emotion/react';
import React from 'react';
import createEmotionCache from '@/lib/createEmotionCache';

export default function EmotionProvider({ children }) {
  const [emotionCache] = React.useState(() => createEmotionCache());

  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}
