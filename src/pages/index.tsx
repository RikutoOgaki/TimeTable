import {useState} from 'react'
import {
Box,
Flex,
Text,
Center,
Input,
Table,
Thead,
Tbody,
Tfoot,
Tr,
Th,
Td,
TableCaption,
TableContainer,} from '@chakra-ui/react'

export default function TimeTable(){
return(
<>
  <Box>
    <Box>
      <TableContainer>
        <Table>
        <TableCaption>
          <Tbody>
            <Tr>
              <Td w={'150px'}>月曜日</Td>
              <Td w={'150px'}>月曜日</Td>
              <Td w={'150px'}>月曜日</Td>
              <Td w={'150px'}>月曜日</Td>
              <Td w={'150px'}>月曜日</Td>
            </Tr>
            <Tr>
              <Td w={'150px'}>月曜日</Td>
              <Td w={'150px'}>月曜日</Td>
              <Td w={'150px'}>月曜日</Td>
              <Td w={'150px'}>月曜日</Td>
              <Td w={'150px'}>月曜日</Td>
            </Tr>
          </Tbody>
        </TableCaption>
        </Table>
      </TableContainer>
    </Box>
  </Box>
</>
)
}