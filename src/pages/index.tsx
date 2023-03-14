import { useState } from 'react'
import style from '@/styles/index.module.css'

export default function TimeTable() {




  return (
    <>
      <table border={1}>
        <thead className={style.thead}>
          <tr>
            <th colSpan={5}>時間割</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={style.td} align={'center'}>月曜日</td>
            <td className={style.td} align={'center'}>火曜日</td>
            <td className={style.td} align={'center'}>水曜日</td>
            <td className={style.td} align={'center'}>木曜日</td>
            <td className={style.td} align={'center'}>金曜日</td>
          </tr>
          <tr>
            <td className={style.celltd} align={'center'}>コンセプトワーク</td>
            <td className={style.celltd} align={'center'}>クリエイティブワーク</td>
            <td className={style.celltd} align={'center'}>JavaScript演習</td>
            <td className={style.celltd} align={'center'}>Photoshop演習</td>
            <td className={style.celltd} align={'center'}>チーム制作</td>
          </tr>
          <tr>
            <td className={style.celltd} align={'center'}>ビジュアルデザイン</td>
            <td className={style.celltd} align={'center'}>クリエイティブワーク</td>
            <td className={style.celltd} align={'center'}>JavaScript演習</td>
            <td className={style.celltd} align={'center'}>Illustrator演習</td>
            <td className={style.celltd} align={'center'}>チーム制作</td>
          </tr>
          <tr>
            <td className={style.celltd} align={'center'}>英語</td>
            <td className={style.celltd} align={'center'}>色彩構成</td>
            <td className={style.celltd} align={'center'}></td>
            <td className={style.celltd} align={'center'}>WEB演習</td>
            <td className={style.celltd} align={'center'}></td>
          </tr>
          <tr>
            <td className={style.celltd} align={'center'}></td>
            <td className={style.celltd} align={'center'}>映像コンテンツ</td>
            <td className={style.celltd} align={'center'}></td>
            <td className={style.celltd} align={'center'}>HTML演習</td>
            <td className={style.celltd} align={'center'}></td>
          </tr>
          <tr>
            <td className={style.celltd} align={'center'}></td>
            <td className={style.celltd} align={'center'}></td>
            <td className={style.celltd} align={'center'}></td>
            <td className={style.celltd} align={'center'}>SHL</td>
            <td className={style.celltd} align={'center'}></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}