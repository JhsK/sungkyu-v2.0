import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { getSortedPostsData } from '@/lib/post';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const allPostsData = getSortedPostsData();
  console.log('2222', allPostsData);
  
  return (
    <h1>test</h1>
  )
}
