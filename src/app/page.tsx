import Image from 'next/image'
import styles from './page.module.css'
import { getSortedPostsData } from '@/lib/post';

export default function Home() {
  const allPostsData = getSortedPostsData();
  
  return (
    <h1>test</h1>
  )
}
