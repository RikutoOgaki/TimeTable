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
          <Thead>
            <Tr>
              <Th>WD1A Time Table</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>月曜日</Td>
              <Td>火曜日</Td>
              <Td>水曜日</Td>
              <Td>木曜日</Td>
              <Td>金曜日</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  </Box>
</>
)
}