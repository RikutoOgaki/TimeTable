import { useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

export default function TimeTable() {

  const day = ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日']

  return (
    <>
      <TableContainer>
        <Table border={'1px solid #000'}>
          <Thead>
            <Tr>
              <Th colSpan={5} bg={'#000'} color={'#fff'}>Time Table</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              {day.map((v) =>
                <Td
                  w={'15rem'}
                  h={'5rem'}
                  align={'center'}
                  border={'1px solid #000'}>{v}</Td>
              )}
            </Tr>

            <Tr>
              <Td>コンセプトワーク</Td>
              <Td>クリエイティブワーク</Td>
              <Td>JavaScript演習</Td>
              <Td>Illustrator演習</Td>
              <Td>チーム制作</Td>
            </Tr>
            <Tr>
              <Td>ビジュデザマラソン</Td>
              <Td>クリエイティブワーク</Td>
              <Td>JavaScript演習</Td>
              <Td>Photoshop演習</Td>
              <Td>チーム制作</Td>
            </Tr>
            <Tr>
              <Td>英語</Td>
              <Td>色彩構成</Td>
              <Td></Td>
              <Td>Web設計</Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td>映像コンテンツ</Td>
              <Td></Td>
              <Td>HTML演習</Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td>SHL</Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}